import React from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Contact } from "@/components/sections/Contact";
import { getServiceBySlug } from "@/components/sections/Services";
import NotFound from "@/pages/not-found";

export default function ServiceDetailPage() {
  const params = useParams<{ slug: string }>();
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return <NotFound />;
  }

  return (
    <PageLayout>
      <section className="relative overflow-hidden pt-36 pb-20 bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/50 to-slate-900/20" />
        </div>
        <div className="container relative mx-auto px-4 md:px-6">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All services
          </Link>
          <div className="max-w-3xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
              <service.icon className="h-7 w-7 text-white" />
            </div>
            <p className="text-sm font-bold text-primary tracking-widest uppercase mb-3">
              Service Detail
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[1fr_0.75fr] gap-12">
            <div>
              <p className="text-sm font-bold text-primary tracking-widest uppercase mb-3">
                How We Help
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight mb-8">
                A practical operating plan, not just a booking.
              </h2>
              <div className="space-y-5">
                {service.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex gap-4 rounded-xl border border-border p-5"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                    <p className="text-muted-foreground">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-2xl bg-slate-50 p-8 border border-border">
              <h3 className="text-2xl font-bold mb-4">Best fit for</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-muted-foreground shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Tell us the origin, destination, commodity, and timing. The
                quote form below is already set to {service.title} so our team
                can respond with the right routing assumptions.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <Contact selectedServiceSlug={service.slug} />
    </PageLayout>
  );
}
