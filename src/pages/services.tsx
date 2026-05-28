import React from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { services } from "@/components/sections/Services";

export default function ServicesPage() {
  return (
    <PageLayout>
      <section className="pt-36 pb-20 bg-slate-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Services</p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Freight programs shaped around your route, cargo, and deadline.
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Choose a service to see how Friendco plans capacity, documentation, visibility, and handoff from origin to destination.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="mb-3 text-2xl font-bold text-foreground">{service.title}</h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">{service.description}</p>
                  <div className="flex items-center gap-2 text-sm font-bold text-primary">
                    View service details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
