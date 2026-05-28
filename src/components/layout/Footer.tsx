import React from "react";
import { Link } from "wouter";
import { Anchor } from "lucide-react";
import { services } from "@/components/sections/Services";

export function Footer() {
  return (
    <footer className="bg-slate-950 py-16 text-gray-400 text-sm border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-12">
          
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="p-1.5 rounded bg-primary flex items-center justify-center">
                <Anchor className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Friendco
              </span>
            </Link>
            <p className="mb-6 leading-relaxed">
              Global logistics solutions for modern supply chains. Precision, reliability, and unparalleled expertise in international freight forwarding.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="hover:text-primary transition-colors">All Services</Link></li>
              <li><Link href="/global-reach" className="hover:text-primary transition-colors">Global Reach</Link></li>
              <li><Link href="/expertise" className="hover:text-primary transition-colors">Expertise</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Friendco Logistics Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs font-medium uppercase tracking-wider">
            <span>FMC NVOCC</span>
            <span>IATA Certified</span>
            <span>C-TPAT Validated</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
