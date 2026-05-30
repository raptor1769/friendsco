import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Anchor, Plane, Truck, Package, type LucideIcon } from "lucide-react";
import seaImg from "@/assets/sea-freight.png";
import airImg from "@/assets/air-freight.png";
import landImg from "@/assets/land-transport.png";
import warehouseImg from "@/assets/warehouse.png";

export type Service = {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  image: string;
  tags: string[];
  highlights: string[];
  quotePrompt: string;
};

export const services: Service[] = [
  {
    title: "Ocean Freight",
    slug: "ocean-freight",
    description: "Reliable FCL and LCL container shipping across major global trade lanes. We negotiate competitive rates with top-tier carriers to ensure capacity when you need it most.",
    icon: Anchor,
    image: seaImg,
    tags: ["FCL & LCL", "Reefer Cargo", "OOG/Breakbulk"],
    highlights: [
      "FCL and LCL planning across major port pairs",
      "Carrier space management during peak season",
      "Documentation support for bills of lading and customs handoff",
    ],
    quotePrompt: "Ocean Freight",
  },
  {
    title: "Air Freight",
    slug: "air-freight",
    description: "Expedited logistics for time-critical cargo. Our established airline partnerships guarantee priority boarding and secure transit from origin airport to final destination.",
    icon: Plane,
    image: airImg,
    tags: ["Next Flight Out", "Consolidated", "Charter Services"],
    highlights: [
      "Priority uplift for urgent commercial shipments",
      "Consolidated air freight for balanced cost and speed",
      "Airport-to-door coordination with proactive milestone updates",
    ],
    quotePrompt: "Air Freight",
  },
  {
    title: "Land Transportation",
    slug: "land-transportation",
    description: "Seamless domestic and cross-border trucking. We manage drayage, intermodal rail, and final-mile delivery to connect ports and airports directly to your facilities.",
    icon: Truck,
    image: landImg,
    tags: ["FTL & LTL", "Port Drayage", "Intermodal Rail"],
    highlights: [
      "Port drayage, domestic trucking, and final-mile delivery",
      "FTL and LTL options matched to shipment size and urgency",
      "Intermodal rail solutions for cost-efficient inland moves",
    ],
    quotePrompt: "Land Transportation",
  },
  // {
  //   title: "Contract Logistics",
  //   slug: "contract-logistics",
  //   description: "Strategic warehousing and distribution solutions. We handle inventory management, cross-docking, and order fulfillment in secure, strategically located facilities.",
  //   icon: Package,
  //   image: warehouseImg,
  //   tags: ["Cross-docking", "Inventory Control", "Fulfillment"],
  //   highlights: [
  //     "Flexible warehousing near key ports and consumption markets",
  //     "Cross-docking programs that shorten dwell time",
  //     "Inventory control and fulfillment support for growing operations",
  //   ],
  //   quotePrompt: "Contract Logistics",
  // },
];

export function getServiceBySlug(slug?: string) {
  return services.find((service) => service.slug === slug);
}

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Core Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Comprehensive freight solutions for modern supply chains.
            </h3>
          </div>
          <p className="text-muted-foreground text-lg max-w-md">
            We don't just move cargo; we engineer routes that optimize for cost, speed, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-muted border border-border"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 -mt-14 relative z-10">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-3">{service.title}</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white text-xs font-semibold text-muted-foreground rounded-md shadow-sm border border-border">
                      {tag}
                    </span>
                  ))}
                  <Link
                    href={`/services/${service.slug}`}
                    className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-md shadow-sm hover:bg-primary/90 transition-colors"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
