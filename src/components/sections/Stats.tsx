import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "45K+", label: "TEUs Moved Annually" },
  { value: "120+", label: "Countries Served" },
  { value: "99.8%", label: "On-Time Delivery" },
  { value: "24/7", label: "Operations Support" },
];

export function Stats() {
  return (
    <section className="bg-slate-950 py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center text-center px-4 ${index === 0 ? 'border-none' : ''} ${index % 2 === 0 ? 'border-none md:border-solid' : ''}`}
            >
              <span className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</span>
              <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
