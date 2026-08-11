import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { CheckCircle2, Mail, Users, BadgeAlert } from "lucide-react"

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-20 pb-24 overflow-hidden bg-white">
      {/* Abstract background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="container relative mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 font-semibold text-sm border border-red-100 shadow-sm"
          >
            <BadgeAlert className="w-4 h-4" />
            Limited Spots Available for Next Local Drop
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] tracking-tight max-w-4xl"
          >
            Get Your Business Delivered to 10,000 Local Homes for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Pennies per Mailbox</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl"
          >
            Oversized 9x12 shared mailer. Guaranteed category exclusivity — your competitors cannot join.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4"
          >
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => scrollTo('lead-form')}
              className="text-xl px-12 h-16 shadow-[0_8px_30px_rgba(255,90,0,0.3)] hover:shadow-[0_8px_40px_rgba(255,90,0,0.5)] transition-all hover:-translate-y-1"
            >
              Check Category Availability
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 border-t border-slate-100 w-full"
          >
            <div className="flex items-center justify-center gap-3 text-slate-700 font-medium">
              <Mail className="w-6 h-6 text-primary" />
              <span>USPS Every Door Direct Mail</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-700 font-medium">
              <Users className="w-6 h-6 text-primary" />
              <span>100% Exclusive Categories</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <span>Zero Hidden Fees</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
