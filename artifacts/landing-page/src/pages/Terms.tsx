import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export default function Terms() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
          <h1 className="text-4xl font-black mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Last Updated: August 2026</p>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-xl font-bold mt-8 mb-4">1. Ad Space Reservation & Category Exclusivity</h2>
            <p className="mb-4 text-slate-600 leading-relaxed">
              Submitting an inquiry does not guarantee placement. Placement is secured only upon our approval and receipt of payment. Once confirmed, we guarantee category exclusivity for the selected mail drop; no direct competitor in your agreed-upon category will appear on the same mailer.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">2. Payment & Refunds</h2>
            <p className="mb-4 text-slate-600 leading-relaxed">
              Full payment is required to lock your category reservation. Because our services involve custom design and immediate allocation of finite ad space, fees are non-refundable once design or production begins.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">3. Artwork Approval & Deadlines</h2>
            <p className="mb-4 text-slate-600 leading-relaxed">
              You will be provided a digital proof of your ad. You are responsible for reviewing and approving the final proof by the stated deadline. Failure to approve artwork by the deadline may result in exclusion from the drop without a refund. LocalReach 9x12 is not responsible for typos or errors approved by the client.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">4. USPS Delivery Disclaimer</h2>
            <p className="mb-4 text-slate-600 leading-relaxed">
              We utilize USPS Every Door Direct Mail (EDDM) for distribution. While we target specific postal routes and provide estimated drop dates, exact delivery dates are ultimately determined by USPS processing schedules and are outside our direct control.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="mb-4 text-slate-600 leading-relaxed">
              LocalReach 9x12 makes no guarantees regarding the response rate or return on investment from your ad. In the event of an error or failure on our part (e.g., printing error, missed delivery), our total liability is strictly capped at the total fee paid by you for that specific mailing.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
