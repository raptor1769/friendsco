import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, Globe, Clock } from "lucide-react";
import globalReachImg from "@/assets/global-reach.png";

const features = [
  {
    icon: FileText,
    title: "Customs Brokerage",
    description: "Navigate complex international trade regulations with our in-house licensed brokers. We ensure accurate tariff classifications, duty calculations, and rapid clearance."
  },
  {
    icon: Globe,
    title: "NVOCC Operations",
    description: "As a registered Non-Vessel Operating Common Carrier, we issue our own House Bills of Lading (HBL) and manage consolidation securely."
  },
  {
    icon: Clock,
    title: "Real-Time Visibility",
    description: "Track your shipments milestone-by-milestone. Our digital platform provides proactive alerts and predictive ETAs for absolute supply chain transparency."
  },
  {
    icon: ShieldCheck,
    title: "Incoterms Advisory",
    description: "From EXW to DDP, our experts structure shipments to align with your commercial contracts, mitigating risk and optimizing financial flow."
  }
];

export function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-slate-50 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Operational Excellence</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6">
              Mastering the invisible complexities of global trade.
            </h3>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Moving physical goods is only half the battle. We handle the critical documentation, regulatory compliance, and risk management that prevents costly delays at borders.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
            id="global-reach"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform translate-x-4 translate-y-4" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white">
              <img 
                src={globalReachImg} 
                alt="Global trade routes visualization" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
            </div>
            
            {/* Overlay stat card */}
            {/* <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-border max-w-[240px] hidden md:block">
              <div className="text-sm font-semibold text-muted-foreground mb-1">Active Trade Lanes</div>
              <div className="text-3xl font-extrabold text-foreground mb-2">350+</div>
              <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-primary" />
              </div>
            </div> */}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
