import { Router, type IRouter } from "express";
import { ContactBody } from "@workspace/api-zod";
import { ReplitConnectors } from "@replit/connectors-sdk";

const router: IRouter = Router();

// --- Spam protection: simple in-memory per-IP rate limiter ---
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5; // max submissions per IP per window
const submissionLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  if (timestamps.length >= RATE_LIMIT_MAX) {
    submissionLog.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  submissionLog.set(ip, timestamps);
  // Keep the map from growing unboundedly
  if (submissionLog.size > 10000) {
    for (const [key, ts] of submissionLog) {
      if (ts.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) submissionLog.delete(key);
    }
  }
  return false;
}

function base64url(input: string): string {
  return Buffer.from(input, "utf8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = ContactBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid contact request body");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { name, email, subject, message, website } = parsed.data;

  // Honeypot: real users never fill this hidden field. Pretend success for bots.
  if (website && website.trim() !== "") {
    req.log.warn({ ip: req.ip }, "Contact honeypot triggered — dropping submission");
    res.json({
      success: true,
      message: "Thanks for reaching out! We'll get back to you within one business day.",
    });
    return;
  }

  if (isRateLimited(req.ip ?? "unknown")) {
    req.log.warn({ ip: req.ip }, "Contact rate limit exceeded");
    res.status(429).json({ error: "Too many messages. Please try again later." });
    return;
  }

  try {
    const connectors = new ReplitConnectors();

    // Send the message to the connected Gmail account's own inbox.
    const profileRes = await connectors.proxy("google-mail", "/gmail/v1/users/me/profile", {
      method: "GET",
    });
    if (!profileRes.ok) {
      req.log.error({ status: profileRes.status }, "Failed to fetch Gmail profile");
      res.status(500).json({ error: "Email service is unavailable. Please try again later." });
      return;
    }
    const profile = (await profileRes.json()) as { emailAddress: string };
    const to = profile.emailAddress;

    const mailSubject = `[Contact Form] ${subject?.trim() || "Website Inquiry"}`;
    const body = [
      `New contact form submission from YourLocalShowcase:`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      ``,
      `Message:`,
      message,
    ].join("\r\n");

    const rfc2822 = [
      `To: ${to}`,
      `Reply-To: ${name.replace(/[\r\n"<>]/g, "")} <${email.replace(/[\r\n<>]/g, "")}>`,
      `Subject: ${mailSubject.replace(/[\r\n]/g, " ")}`,
      `Content-Type: text/plain; charset="UTF-8"`,
      ``,
      body,
    ].join("\r\n");

    const sendRes = await connectors.proxy("google-mail", "/gmail/v1/users/me/messages/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ raw: base64url(rfc2822) }),
    });

    if (!sendRes.ok) {
      const errText = await sendRes.text();
      req.log.error({ status: sendRes.status, body: errText }, "Gmail send failed");
      res.status(500).json({ error: "Failed to send your message. Please try again later." });
      return;
    }

    req.log.info({ from: email }, "Contact form message sent via Gmail");
    res.json({
      success: true,
      message: "Thanks for reaching out! We'll get back to you within one business day.",
    });
  } catch (err) {
    req.log.error({ err }, "Contact form send error");
    res.status(500).json({ error: "Unable to send your message right now. Please try again later." });
  }
});

export default router;
