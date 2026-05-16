import React from "react";
import { Link } from "wouter";
import { Anchor, Ship, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: "Services", id: "services" },
    { name: "Global Reach", id: "global-reach" },
    { name: "Expertise", id: "expertise" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded flex items-center justify-center transition-colors ${isScrolled ? 'bg-primary' : 'bg-primary'}`}>
              <Anchor className="w-5 h-5 text-white" />
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              Friendco
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-muted-foreground" : "text-gray-200"
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollTo('quote')}
              size="lg" 
              className={isScrolled ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-primary hover:bg-gray-100"}
            >
              Request Quote
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-left text-foreground font-medium py-2 px-4 hover:bg-muted rounded"
            >
              {link.name}
            </button>
          ))}
          <Button onClick={() => scrollTo('quote')} className="w-full mt-2">
            Request Quote
          </Button>
        </div>
      )}
    </header>
  );
}
