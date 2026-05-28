import React from "react";
import { Globe2, MapPinned, RadioTower } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import globalReachImg from "@/assets/global-reach.png";

const regions = ["North America", "Europe", "Middle East", "South Asia", "East Asia", "Africa"];

export default function GlobalReachPage() {
  return (
    <PageLayout>
      <section className="pt-36 pb-20 bg-slate-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Global Reach</p>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                Trade-lane coverage with local execution at every handoff.
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Friendco coordinates ocean, air, inland, and warehousing partners across key commercial corridors so your cargo moves with continuity from origin to final delivery.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={globalReachImg} alt="Global trade routes" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Globe2, title: "Worldwide Lanes", copy: "Connected options across major seaports, airports, and inland hubs." },
              { icon: MapPinned, title: "Local Handoffs", copy: "Ground teams and partners aligned around customs, delivery, and documentation." },
              { icon: RadioTower, title: "Shipment Visibility", copy: "Milestone updates that help teams plan around exceptions before they become delays." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border p-8">
                <item.icon className="mb-5 h-8 w-8 text-primary" />
                <h2 className="text-xl font-bold mb-3">{item.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-slate-50 border border-border p-8">
            <h2 className="text-3xl font-extrabold mb-6">Primary coverage regions</h2>
            <div className="flex flex-wrap gap-3">
              {regions.map((region) => (
                <span key={region} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-muted-foreground shadow-sm">
                  {region}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
