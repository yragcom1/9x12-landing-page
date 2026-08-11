import { Router, type IRouter } from "express";
import { SubscribeBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/subscribe", async (req, res): Promise<void> => {
  const parsed = SubscribeBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid subscribe request body");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { email, firstName, businessName, phone, category, agreedToTerms } = parsed.data;

  if (!agreedToTerms) {
    res.status(400).json({ error: "You must agree to the Terms & Conditions and Privacy Policy." });
    return;
  }

  const senderApiToken = process.env["SENDER_API_TOKEN"];
  const senderGroupId = process.env["SENDER_GROUP_ID"];

  if (!senderApiToken || !senderGroupId) {
    req.log.error("Missing SENDER_API_TOKEN or SENDER_GROUP_ID environment variables");
    res.status(500).json({ error: "Email service is not configured. Please try again later." });
    return;
  }

  const payload = {
    email,
    firstname: firstName,
    phone,
    groups: [senderGroupId],
    fields: {
      business_name: businessName,
      industry_category: category,
    },
  };

  let senderRes: Response;
  try {
    senderRes = await fetch("https://api.sender.net/v2/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${senderApiToken}`,
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    req.log.error({ err }, "Failed to reach Sender.net API");
    res.status(500).json({ error: "Unable to reach email service. Please try again later." });
    return;
  }

  if (senderRes.status === 200 || senderRes.status === 201) {
    req.log.info({ email }, "Subscriber added to Sender.net");
    res.json({
      success: true,
      message: "Thanks! We've received your inquiry and will check category availability within 24 hours.",
    });
    return;
  }

  let errorBody: unknown;
  try {
    errorBody = await senderRes.json();
  } catch {
    errorBody = await senderRes.text();
  }
  req.log.warn({ status: senderRes.status, body: errorBody }, "Sender.net returned an error");
  res.status(500).json({ error: "Failed to process your subscription. Please try again." });
});

export default router;
