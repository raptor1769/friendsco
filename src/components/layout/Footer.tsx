import React from "react";
import { Link } from "wouter";
import { Anchor } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 py-16 text-gray-400 text-sm border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
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
              <li><a href="#services" className="hover:text-primary transition-colors">Ocean Freight (FCL/LCL)</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Air Freight Expedited</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Intermodal & Drayage</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Contract Logistics</a></li>
              <li><a href="#expertise" className="hover:text-primary transition-colors">Customs Brokerage</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Global Network</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bill of Lading Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Licenses & Certifications</a></li>
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
