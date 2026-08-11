import { useState } from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/home/Hero"
import { Comparison } from "@/components/home/Comparison"
import { PostcardGrid } from "@/components/home/PostcardGrid"
import { HowItWorks } from "@/components/home/HowItWorks"
import { LeadForm } from "@/components/home/LeadForm"
import { Faq } from "@/components/home/Faq"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("")

  const handleSelectSlot = () => {
    // If the grid was generic "Claim Spot" we can just scroll.
    // We can also let them click a specific grid item to pre-fill, but 
    // the generic empty slots just scroll to the form.
    const formEl = document.getElementById('lead-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Comparison />
        <PostcardGrid onSelectSlot={handleSelectSlot} />
        <HowItWorks />
        <LeadForm prefilledCategory={selectedCategory} />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
