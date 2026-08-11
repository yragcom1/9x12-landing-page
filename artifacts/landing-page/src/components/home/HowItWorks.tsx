import { motion } from "framer-motion"
import { Target, PenTool, Send } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Target,
      title: "Lock Your Industry Spot",
      desc: "Fill out the form to check availability. Once approved, you own your category for the drop. No competitors allowed."
    },
    {
      icon: PenTool,
      title: "We Design & Print",
      desc: "Provide your logo and offer. Our professional design team creates an eye-catching ad for your approval."
    },
    {
      icon: Send,
      title: "Direct USPS Delivery",
      desc: "The oversized 9x12 card drops directly into 10,000 local mailboxes, bypassing junk mail filters."
    }
  ]

  return (
    <section id="how-it-works" className="py-24 bg-slate-900 text-white relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-slate-900 to-slate-900"></div>
      
      <div className="container relative mx-auto px-4 max-w-5xl z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">How It Works</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We handle everything from design to delivery. You just handle the new leads.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-800">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          </div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 shadow-xl relative group">
                <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <step.icon className="w-10 h-10 text-primary relative z-10" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary text-white font-bold flex items-center justify-center text-sm border-4 border-slate-900">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
