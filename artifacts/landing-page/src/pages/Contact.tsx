import { useState } from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Clock, MapPin, CheckCircle } from "lucide-react"
import { useContact } from "@workspace/api-client-react"

const SUPPORT_EMAIL = "support@yourlocalshowcase.online"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)
  const [website, setWebsite] = useState("") // honeypot — hidden from real users
  const contact = useContact()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    contact.mutate(
      { data: { name, email, subject, message, website } },
      {
        onSuccess: () => {
          setSent(true)
          setName("")
          setEmail("")
          setSubject("")
          setMessage("")
        },
      },
    )
  }

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Questions about the next mailer drop, category availability, or your ad design?
              We respond to every message within one business day.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact info */}
            <div className="md:col-span-2 space-y-4">
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border hover:border-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold">Email Us</div>
                  <div className="text-sm text-muted-foreground break-all">{SUPPORT_EMAIL}</div>
                </div>
              </a>

              <a
                href="tel:4079076626"
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border hover:border-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold">Call Us</div>
                  <div className="text-sm text-muted-foreground">(407) 907-6626</div>
                </div>
              </a>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold">Business Hours</div>
                  <div className="text-sm text-muted-foreground">
                    Mon–Fri: 9am–5pm
                    <br />
                    Sat–Sun: Closed
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold">Service Area</div>
                  <div className="text-sm text-muted-foreground">
                    Serving local businesses in your community
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="md:col-span-3 bg-white p-8 rounded-2xl shadow-sm border">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-black mb-3">Message Sent!</h2>
                  <p className="text-muted-foreground mb-8 max-w-sm">
                    Thanks for reaching out. We'll get back to you within one business day.
                  </p>
                  <Button variant="outline" onClick={() => setSent(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
              <>
              <h2 className="text-2xl font-black mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field — invisible to humans, bots tend to fill it */}
                <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium mb-1.5">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="jane@business.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium mb-1.5">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Question about the next drop"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-y"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-bold"
                  disabled={contact.isPending}
                >
                  {contact.isPending ? "Sending..." : "Send Message"}
                </Button>
                {contact.isError && (
                  <p className="text-sm text-red-600 text-center">
                    Something went wrong sending your message. Please try again, or email
                    us directly at {SUPPORT_EMAIL}.
                  </p>
                )}
              </form>
              </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
