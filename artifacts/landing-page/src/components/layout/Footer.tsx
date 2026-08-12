import { Link } from "wouter"

export function Footer() {
  return (
    <footer className="border-t bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-display font-black text-xl tracking-tighter text-foreground">
            YourLocalShowcase
          </span>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2026 YourLocalShowcase. All rights reserved.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
          <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms & Conditions
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1 text-sm text-muted-foreground font-medium">
          <a href="mailto:support@yourlocalshowcase.online" className="hover:text-foreground transition-colors">
            support@yourlocalshowcase.online
          </a>
          <a href="tel:4079076626" className="hover:text-foreground transition-colors">
            (407) 907-6626
          </a>
        </div>
      </div>
    </footer>
  )
}
