import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Container ship at sea" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-24 pb-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-white tracking-wider uppercase">Global Logistics Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Precision Freight. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Global Certainty.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              We engineer resilient supply chains for the world's most demanding importers and exporters. From complex FCL maritime routing to expedited air freight and seamless customs brokerage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg" 
                className="text-base h-14 px-8 bg-primary hover:bg-primary/90 text-white border-0"
              >
                <Link href="/contact">Get a Freight Quote</Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="text-base h-14 px-8 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
