import React from "react";
import { Link, useLocation } from "wouter";
import { Anchor, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { services } from "@/components/sections/Services";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = React.useState(false);
  const headerRef = React.useRef<HTMLElement>(null);
  const [, navigate] = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setMobileMenuOpen(false);
      setServicesMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const closeOnOutsideInteraction = (event: MouseEvent | TouchEvent) => {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (!headerRef.current?.contains(target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideInteraction);
    document.addEventListener("touchstart", closeOnOutsideInteraction, { passive: true });

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideInteraction);
      document.removeEventListener("touchstart", closeOnOutsideInteraction);
    };
  }, []);

  const scrollToQuote = () => {
    setMobileMenuOpen(false);
    const element = document.getElementById("quote");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      return;
    }
    navigate("/contact");
  };

  return (
    <header
      ref={headerRef}
      className={`site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
            <DropdownMenu modal={false} open={servicesMenuOpen} onOpenChange={setServicesMenuOpen}>
              <DropdownMenuTrigger
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-muted-foreground" : "text-gray-200"
                } flex cursor-pointer select-none items-center gap-1 outline-none`}
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                sideOffset={18}
                className="w-[380px] overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white p-3 text-foreground shadow-[0_24px_70px_rgba(15,23,42,0.22)] ring-1 ring-slate-950/5"
              >
                <div className="mb-2 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-800 px-4 py-4 text-white shadow-inner">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">Freight Services</p>
                  <p className="mt-1 text-sm text-slate-300">Choose a service and get a quote path tailored to that movement.</p>
                </div>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services"
                    onClick={() => setServicesMenuOpen(false)}
                    className="cursor-pointer select-none rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 font-semibold text-slate-950 outline-none transition-all hover:border-primary/30 hover:bg-orange-50 hover:shadow-sm focus:border-primary/30 focus:bg-orange-50"
                  >
                    <span className="flex items-center justify-between">
                      All Services
                      <span className="text-xs uppercase tracking-wider text-primary">Overview</span>
                    </span>
                  </Link>
                </DropdownMenuItem>
                {services.map((service) => (
                  <DropdownMenuItem key={service.slug} asChild>
                    <Link
                      href={`/services/${service.slug}`}
                      onClick={() => setServicesMenuOpen(false)}
                      className="group cursor-pointer select-none rounded-2xl border border-transparent px-4 py-3 text-slate-950 outline-none transition-all hover:border-primary/25 hover:bg-orange-50/80 hover:shadow-sm focus:border-primary/25 focus:bg-orange-50/80"
                    >
                      <span className="flex gap-3">
                        <span className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary group-hover:text-white">
                          <service.icon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block font-bold">{service.title}</span>
                          <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-slate-500">
                            {service.description}
                          </span>
                        </span>
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/global-reach"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-muted-foreground" : "text-gray-200"
              } cursor-pointer select-none`}
            >
              Global Reach
            </Link>
            <Link
              href="/expertise"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-muted-foreground" : "text-gray-200"
              } cursor-pointer select-none`}
            >
              Expertise
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button 
              onClick={scrollToQuote}
              size="lg" 
              className={isScrolled ? "cursor-pointer select-none bg-primary text-white hover:bg-primary/90" : "cursor-pointer select-none bg-white text-primary hover:bg-gray-100"}
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
        <div className="absolute top-full left-3 right-3 rounded-b-[1.5rem] border border-slate-200 bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.24)] ring-1 ring-slate-950/5 md:hidden">
          <div className="mb-4 rounded-2xl border border-slate-100 bg-slate-50 p-3 shadow-inner">
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
              className="flex cursor-pointer select-none items-center justify-between rounded-xl px-3 py-3 text-left font-bold text-slate-950 hover:bg-orange-50"
          >
              Services
              <span className="text-xs uppercase tracking-wider text-primary">View all</span>
          </Link>
            <div className="mt-2 grid gap-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                  className="flex cursor-pointer select-none items-center gap-3 rounded-xl border border-transparent px-3 py-3 text-sm text-slate-700 hover:border-primary/20 hover:bg-orange-50"
              >
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15">
                    <service.icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block font-semibold text-slate-950">{service.title}</span>
                    <span className="block text-xs text-slate-500">{service.tags.slice(0, 2).join(" / ")}</span>
                  </span>
              </Link>
            ))}
            </div>
          </div>
          <Link
            href="/global-reach"
            onClick={() => setMobileMenuOpen(false)}
            className="block cursor-pointer select-none rounded-xl px-4 py-3 text-left font-medium text-slate-700 hover:bg-orange-50 hover:text-slate-950"
          >
            Global Reach
          </Link>
          <Link
            href="/expertise"
            onClick={() => setMobileMenuOpen(false)}
            className="block cursor-pointer select-none rounded-xl px-4 py-3 text-left font-medium text-slate-700 hover:bg-orange-50 hover:text-slate-950"
          >
            Expertise
          </Link>
          <Button onClick={scrollToQuote} className="mt-4 w-full cursor-pointer select-none bg-primary text-white hover:bg-primary/90">
            Request Quote
          </Button>
        </div>
      )}
    </header>
  );
}
