import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
          <h1 className="text-4xl font-black mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: August 2026</p>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-xl font-bold mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4 text-slate-600 leading-relaxed">
              We collect information you provide directly to us when submitting a form, including your name, business name, email address, phone number, and selected business category.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4 text-slate-600 leading-relaxed">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
              <li>Verify category availability for our mailer drops.</li>
              <li>Contact you regarding ad design, proofs, and production.</li>
              <li>Send campaign updates and relevant marketing communications via Sender.net.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4">3. Data Sharing & Protection</h2>
            <p className="mb-4 text-slate-600 leading-relaxed">
              We do not sell your personal or business information. We share information only with trusted third parties essential to delivering our service, such as Sender.net for email communications and our printing/fulfillment partners. We implement industry-standard security measures to protect your data.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">4. Your Rights & Opt-Out</h2>
            <p className="mb-4 text-slate-600 leading-relaxed">
              You may opt out of receiving promotional emails from us at any time by following the instructions in those emails (unsubscribe link) or by contacting us directly. 
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">5. Contact Us</h2>
            <p className="mb-4 text-slate-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at: <br/>
              <a href="mailto:support@localreach9x12.com" className="text-primary hover:underline">support@localreach9x12.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
