import { Link } from "wouter"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display font-black text-2xl tracking-tighter text-foreground">
            YourLocalShowcase
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-muted-foreground">
          <button onClick={() => scrollTo('how-it-works')} className="hover:text-foreground transition-colors cursor-pointer">
            How It Works
          </button>
          <button onClick={() => scrollTo('card-layout')} className="hover:text-foreground transition-colors cursor-pointer">
            Card Layout
          </button>
          <button onClick={() => scrollTo('pricing')} className="hover:text-foreground transition-colors cursor-pointer">
            Pricing
          </button>
          <button onClick={() => scrollTo('faq')} className="hover:text-foreground transition-colors cursor-pointer">
            FAQ
          </button>
        </nav>

        <Button 
          variant="secondary" 
          onClick={() => scrollTo('lead-form')}
          className="font-bold shadow-[0_0_15px_rgba(255,90,0,0.3)] hover:shadow-[0_0_20px_rgba(255,90,0,0.5)] transition-all hidden sm:inline-flex"
        >
          Claim Your Spot
        </Button>
      </div>
    </header>
  )
}
