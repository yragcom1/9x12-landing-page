import { motion } from "framer-motion"
import { Check } from "lucide-react"

export function Comparison() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Why Shared Mailers Win</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop paying thousands for solo campaigns that get lost in the shuffle. 
            Our 9x12 mega-mailer stands out, costs a fraction, and locks out your competition.
          </p>
        </div>

        <div className="flex justify-center max-w-4xl mx-auto">
          {/* 9x12 Co-Op Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-2xl p-12 shadow-xl shadow-primary/20 flex flex-col text-primary-foreground relative overflow-hidden w-full max-w-2xl"
          >
            <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              OUR SOLUTION
            </div>
            
            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-bold text-blue-100 mb-3">9x12 Co-Op Mailer</h3>
              <div className="text-6xl font-black text-white">$499</div>
              <div className="text-sm text-blue-200 mt-2">flat fee</div>
            </div>
            
            <div className="space-y-5 flex-grow relative z-10">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-300 shrink-0 mt-0.5" />
                <span className="text-lg font-medium">Fully managed — we design, print, and ship</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-300 shrink-0 mt-0.5" />
                <span className="text-lg font-medium">Massive 9x12 card demands attention in the mailbox</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-300 shrink-0 mt-0.5" />
                <span className="text-lg font-medium text-white">100% Category Exclusivity guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
