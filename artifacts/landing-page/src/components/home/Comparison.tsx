import { motion } from "framer-motion"
import { X, Check } from "lucide-react"

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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Solo Mailer Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border shadow-sm flex flex-col opacity-80"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-500 mb-2">Solo Direct Mail</h3>
              <div className="text-4xl font-black text-slate-800">$2,500+</div>
              <div className="text-sm text-slate-500 mt-1">per 10,000 homes</div>
            </div>
            
            <div className="space-y-4 flex-grow">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-slate-600">You manage design, printing, and USPS routing</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-slate-600">Standard postcard sizes get hidden in the stack</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-slate-600">Competitors can mail the exact same neighborhood</span>
              </div>
            </div>
          </motion.div>

          {/* 9x12 Co-Op Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-2xl p-8 shadow-xl shadow-primary/20 flex flex-col text-primary-foreground relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              OUR SOLUTION
            </div>
            
            <div className="mb-6 relative z-10">
              <h3 className="text-xl font-bold text-blue-100 mb-2">9x12 Co-Op Mailer</h3>
              <div className="text-4xl font-black text-white">$399–$499</div>
              <div className="text-sm text-blue-200 mt-1">flat fee per 10,000 homes</div>
            </div>
            
            <div className="space-y-4 flex-grow relative z-10">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-300 shrink-0 mt-0.5" />
                <span className="font-medium">Fully managed — we design, print, and ship</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-300 shrink-0 mt-0.5" />
                <span className="font-medium">Massive 9x12 card demands attention in the mailbox</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-300 shrink-0 mt-0.5" />
                <span className="font-medium text-white">100% Category Exclusivity guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
