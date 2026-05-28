import React from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Contact } from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <PageLayout>
      <section className="pt-36 pb-16 bg-slate-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Contact</p>
          <h1 className="max-w-3xl text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Request a freight quote or start a logistics conversation.
          </h1>
          <p className="max-w-2xl text-lg text-gray-300 leading-relaxed">
            Send us your lane, cargo, and timing. We will map the best-fit service and respond with next steps.
          </p>
        </div>
      </section>
      <Contact />
    </PageLayout>
  );
}
