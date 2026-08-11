import { useState } from "react"
import { motion } from "framer-motion"
import { Lock, PlusCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const GRID_SLOTS = [
  { id: 1, status: 'reserved', category: 'Dentist' },
  { id: 2, status: 'available', size: 'large' },
  { id: 3, status: 'reserved', category: 'HVAC' },
  { id: 4, status: 'available' },
  { id: 5, status: 'available' },
  { id: 6, status: 'reserved', category: 'Pizzeria' },
  { id: 7, status: 'available' },
  { id: 8, status: 'available' },
  { id: 9, status: 'reserved', category: 'Auto Repair' },
  { id: 10, status: 'available' },
  { id: 11, status: 'available' },
  { id: 12, status: 'available' },
];

export function PostcardGrid({ onSelectSlot }: { onSelectSlot: () => void }) {
  return (
    <section id="card-layout" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">See The Mailer Layout</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our 9x12 postcard is essentially a mini-billboard in the mailbox. 
            Spots are strictly limited. Once an industry is claimed, it's locked out.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Postcard background representation */}
          <div className="bg-[#fcf8f2] border-4 border-slate-200 rounded-lg p-6 shadow-2xl aspect-[3/4] md:aspect-[4/3]">
            <div className="mb-6 flex justify-between items-center border-b-2 border-slate-200 pb-4">
              <div className="font-display font-black text-2xl text-slate-800">Local Deals & Savings</div>
              <div className="text-slate-400 font-medium uppercase tracking-wider text-sm">Postage Paid EDDM</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[calc(100%-80px)]">
              {GRID_SLOTS.map((slot) => (
                <motion.div
                  key={slot.id}
                  whileHover={slot.status === 'available' ? { scale: 1.02 } : {}}
                  onClick={() => slot.status === 'available' && onSelectSlot()}
                  className={cn(
                    "rounded-md flex flex-col items-center justify-center p-4 text-center transition-all",
                    slot.status === 'reserved' 
                      ? "bg-slate-200 border-2 border-slate-300 opacity-60 cursor-not-allowed" 
                      : "bg-white border-2 border-dashed border-primary/50 hover:border-primary hover:bg-primary/5 hover:shadow-lg cursor-pointer group"
                  )}
                >
                  {slot.status === 'reserved' ? (
                    <>
                      <Lock className="w-8 h-8 text-slate-500 mb-2" />
                      <span className="font-bold text-slate-700 uppercase tracking-wide text-xs md:text-sm">
                        {slot.category}
                      </span>
                      <span className="text-[10px] text-slate-500 mt-1">Reserved</span>
                    </>
                  ) : (
                    <>
                      <PlusCircle className="w-8 h-8 text-primary/40 group-hover:text-primary mb-2 transition-colors" />
                      <span className="font-bold text-primary opacity-0 group-hover:opacity-100 uppercase tracking-wide text-xs md:text-sm transition-opacity">
                        Claim Spot
                      </span>
                      <span className="text-[10px] text-slate-400 mt-1 font-medium group-hover:hidden block">Available</span>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-8 -right-8 md:-right-16 text-slate-300 font-display font-black text-6xl md:text-9xl -rotate-12 pointer-events-none opacity-20">
            9x12"
          </div>
        </div>
      </div>
    </section>
  )
}
