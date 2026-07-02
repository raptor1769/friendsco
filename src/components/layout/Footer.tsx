import React from "react";
import { Link } from "wouter";
import { Anchor } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { services } from "@/components/sections/Services";
import logo from "@/assets/apple-touch-icon.png";

export function Footer() {
  const scrollToTop = () => {
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  };

  return (
    <footer className="bg-slate-950 py-16 text-gray-400 text-sm border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-12">
          <div>
            <Link
              href="/"
              onClick={scrollToTop}
              className="flex items-center gap-2 mb-6"
            >
              <div className="rounded flex items-center justify-center">
                <img
                  src={logo}
                  alt="Friendco Logistics Solutions"
                  className="w-8 h-8 rounded-md"
                />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Friendco Logistics Solutions
              </span>
            </Link>
            <p className="mb-6 leading-relaxed">
              Global logistics solutions for modern supply chains. Precision,
              reliability, and unparalleled expertise in international freight
              forwarding.
            </p>
            <a
              href="https://www.linkedin.com/company/friendscologisticssolutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Friendco Logistics Solutions on LinkedIn"
              className="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
            >
              <span className="flex h-6 w-6 items-center justify-center overflow-hidden rounded bg-white text-[#0A66C2]">
                <LinkedinIcon className="h-full w-full" />
              </span>
              <span>Follow us on LinkedIn</span>
            </a>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    onClick={scrollToTop}
                    className="hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  onClick={scrollToTop}
                  className="hover:text-primary transition-colors"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/global-reach"
                  onClick={scrollToTop}
                  className="hover:text-primary transition-colors"
                >
                  Global Reach
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise"
                  onClick={scrollToTop}
                  className="hover:text-primary transition-colors"
                >
                  Expertise
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={scrollToTop}
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} Friendco Logistics Solutions. All
            rights reserved.
          </p>
          {/* <div className="flex items-center gap-6 text-xs font-medium uppercase tracking-wider">
            <span>FMC NVOCC</span>
            <span>IATA Certified</span>
            <span>C-TPAT Validated</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
