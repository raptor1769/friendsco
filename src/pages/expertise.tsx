import React from "react";
import { Clock, FileText, ShieldCheck, Workflow } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";

const capabilities = [
  {
    icon: FileText,
    title: "Documentation Control",
    copy: "Commercial invoices, packing lists, bills of lading, and clearance packets reviewed before cargo reaches the border.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Guidance",
    copy: "Support for tariff classification, Incoterms alignment, duty exposure, and regulated cargo workflows.",
  },
  {
    icon: Clock,
    title: "Exception Management",
    copy: "Escalation paths for rolled bookings, customs holds, terminal delays, and delivery constraints.",
  },
  {
    icon: Workflow,
    title: "Operating Cadence",
    copy: "Repeatable processes that keep procurement, warehouse, finance, and customer teams working from the same shipment picture.",
  },
];

export default function ExpertisePage() {
  return (
    <PageLayout>
      <section className="pt-36 pb-20 bg-slate-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Expertise</p>
          <h1 className="max-w-4xl text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            The quiet logistics work that prevents loud supply-chain problems.
          </h1>
          <p className="max-w-2xl text-lg text-gray-300 leading-relaxed">
            Freight movement depends on details. Our team pairs routing knowledge with documentation discipline, compliance awareness, and hands-on exception management.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability) => (
              <div key={capability.title} className="rounded-2xl border border-border p-8 shadow-sm">
                <capability.icon className="mb-5 h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold mb-3">{capability.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{capability.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
