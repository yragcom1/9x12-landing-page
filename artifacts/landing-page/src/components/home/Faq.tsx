import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const FAQS = [
  {
    q: "When is the next mailing drop?",
    a: "Drops are scheduled monthly. Lock your spot now to make the next available delivery cycle."
  },
  {
    q: "How does category exclusivity work?",
    a: "Once you reserve a category, no competitor in that category can advertise on the same card. If you are the plumber on the card, you are the ONLY plumber on the card."
  },
  {
    q: "Can I see a proof before it goes out?",
    a: "Yes — you'll review and approve a final proof of your specific ad design before anything is printed."
  },
  {
    q: "What if I'm not happy with the results?",
    a: "Ad space fees are non-refundable once design/production begins, per our terms. We work closely with you on design and offer strategy to maximize your response rate."
  },
  {
    q: "Are there hidden fees?",
    a: "None. Your quoted price covers custom design, full-color printing, and USPS Every Door Direct Mail delivery."
  }
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div 
              key={i} 
              className={cn(
                "border rounded-lg overflow-hidden transition-all duration-200",
                openIndex === i ? "border-primary shadow-sm ring-1 ring-primary/20" : "border-slate-200 hover:border-slate-300"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex items-center justify-between w-full p-5 text-left bg-white focus:outline-none cursor-pointer"
              >
                <span className="font-bold text-slate-800 pr-8">{faq.q}</span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200",
                    openIndex === i ? "rotate-180 text-primary" : ""
                  )} 
                />
              </button>
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-200 ease-in-out",
                  openIndex === i ? "max-h-40" : "max-h-0"
                )}
              >
                <div className="p-5 pt-0 text-slate-600 bg-white">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
