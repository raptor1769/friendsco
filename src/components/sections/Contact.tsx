import React from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useForm, type FieldErrors, type Resolver } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { getServiceBySlug, services } from "@/components/sections/Services";
import { appConfig, getMissingEmailConfig } from "@/config/env";
import { cn } from "@/lib/utils";

const quoteSchema = z.object({
  fullName: z.string().trim().min(2, "Name is required"),
  company: z.string().trim().min(2, "Company is required"),
  email: z.string().trim().min(1, "Email address is required").email("Invalid email address"),
  phone: z.string().trim().min(7, "Phone number is required"),
  freightType: z.string().trim().min(1, "Please select freight type"),
  origin: z.string().trim().min(2, "Origin port/city is required"),
  destination: z.string().trim().min(2, "Destination port/city is required"),
  details: z.string().trim().min(1, "Cargo details are required"),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

const quoteResolver: Resolver<QuoteFormValues> = (values) => {
  const result = quoteSchema.safeParse(values);

  if (result.success) {
    return {
      values: result.data,
      errors: {},
    };
  }

  const errors = result.error.issues.reduce<FieldErrors<QuoteFormValues>>(
    (fieldErrors, issue) => {
      const fieldName = issue.path[0] as keyof QuoteFormValues | undefined;

      if (fieldName && !fieldErrors[fieldName]) {
        fieldErrors[fieldName] = {
          type: issue.code,
          message: issue.message,
        };
      }

      return fieldErrors;
    },
    {},
  );

  return {
    values: {},
    errors,
  };
};

type ContactProps = {
  selectedServiceSlug?: string;
};

export function Contact({ selectedServiceSlug }: ContactProps) {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [isSending, setIsSending] = React.useState(false);
  const selectedService = getServiceBySlug(selectedServiceSlug);

  const form = useForm<QuoteFormValues>({
    resolver: quoteResolver,
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      freightType: selectedService?.slug ?? "",
      origin: "",
      destination: "",
      details: "",
    },
  });

  React.useEffect(() => {
    form.setValue("freightType", selectedService?.slug ?? "");
  }, [form, selectedService?.slug]);

  const fieldClassName = (fieldName: keyof QuoteFormValues, className?: string) =>
    cn(
      "bg-slate-50",
      form.formState.errors[fieldName] &&
        "border-destructive focus-visible:ring-destructive",
      className,
    );

  const handleInvalidSubmit = () => {
    setSubmitError("Please fix the highlighted fields and try again.");
  };

  const onSubmit = async (data: QuoteFormValues) => {
    setSubmitError(null);

    if (getMissingEmailConfig().length > 0) {
      setSubmitError("Email service is not configured yet. Please add the EmailJS environment variables.");
      return;
    }

    setIsSending(true);

    try {
      // 1. Send to company
      const companyEmail = await emailjs.send(
        appConfig.emailjs.serviceId,
        appConfig.emailjs.companyTemplateId,
        {
          to_email: appConfig.emailjs.companyEmail,
          from_name: data.fullName,
          from_email: data.email,
          reply_to: data.email,
          phone: data.phone,
          company: data.company,
          freight_type:
            services.find((service) => service.slug === data.freightType)
              ?.quotePrompt ?? data.freightType,
          origin: data.origin,
          destination: data.destination,
          details: data.details || "Not provided",
        },
        { publicKey: appConfig.emailjs.publicKey },
      );

      // 2. Only if first email succeeds
      if (companyEmail.status === 200) {
        await emailjs.send(
          appConfig.emailjs.serviceId,
          appConfig.emailjs.customerTemplateId,
          {
            to_email: data.email,
            from_name: data.fullName,
            freight_type: data.freightType,
            origin: data.origin,
            destination: data.destination,
          },
          { publicKey: appConfig.emailjs.publicKey },
        );
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitError("Failed to send request. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="quote"
      className="py-24 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Abstract background element */}
      <div className="absolute top-0 right-0 w-200 h-200 bg-primary/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/4" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">
              Partner With Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Ready to optimize your supply chain?
            </h3>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
              Provide your cargo details, and our logistics engineers will craft
              a comprehensive routing plan and competitive quote within 24
              hours.
            </p>

            <div className="space-y-6 text-gray-300">
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <div>
                  <h5 className="font-semibold text-white">
                    Dedicated Account Manager
                  </h5>
                  <p className="text-sm">
                    A single point of contact for your entire logistics
                    portfolio.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <div>
                  <h5 className="font-semibold text-white">
                    Guaranteed Capacity
                  </h5>
                  <p className="text-sm">
                    Secured space even during peak shipping seasons.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <div>
                  <h5 className="font-semibold text-white">
                    Transparent Pricing
                  </h5>
                  <p className="text-sm">
                    No hidden fees. Clear breakdown of freight, terminal, and
                    brokerage costs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-2xl text-foreground"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-2">
                  Quote Request Received
                </h4>
                <p className="text-muted-foreground mb-8 max-w-sm">
                  Thank you. Our pricing team is analyzing your route and will
                  contact you at {form.getValues().email} shortly.
                </p>
                <Button
                  variant="outline"
                  className="cursor-pointer"
                  onClick={() => {
                    setIsSubmitted(false);
                    setSubmitError(null);
                    form.reset({
                      fullName: "",
                      company: "",
                      email: "",
                      phone: "",
                      freightType: selectedService?.slug ?? "",
                      origin: "",
                      destination: "",
                      details: "",
                    });
                  }}
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <>
                <h4 className="text-2xl font-bold mb-2">
                  Request a Freight Quote
                </h4>
                {selectedService && (
                  <p className="text-sm text-muted-foreground mb-6">
                    We have preselected {selectedService.title}. Share the lane
                    details and our team will tailor the quote around that
                    service.
                  </p>
                )}
                <form
                  onSubmit={form.handleSubmit(onSubmit, handleInvalidSubmit)}
                  className="space-y-4"
                  noValidate
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Full Name</label>
                      <Input
                        {...form.register("fullName")}
                        placeholder="John Doe"
                        className={fieldClassName("fullName")}
                      />
                      {form.formState.errors.fullName && (
                        <p className="text-xs text-destructive">
                          {form.formState.errors.fullName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Company</label>
                      <Input
                        {...form.register("company")}
                        placeholder="Acme Corp"
                        className={fieldClassName("company")}
                      />
                      {form.formState.errors.company && (
                        <p className="text-xs text-destructive">
                          {form.formState.errors.company.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold">
                      Email Address
                    </label>
                    <Input
                      {...form.register("email")}
                      type="email"
                      placeholder="john@example.com"
                      className={fieldClassName("email")}
                    />
                    {form.formState.errors.email && (
                      <p className="text-xs text-destructive">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold">
                      Phone Number
                    </label>
                    <Input
                      {...form.register("phone")}
                      type="tel"
                      placeholder="+1 555 123 4567"
                      className={fieldClassName("phone")}
                    />
                    {form.formState.errors.phone && (
                      <p className="text-xs text-destructive">
                        {form.formState.errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold">
                      Freight Type
                    </label>
                    <Select
                      value={form.watch("freightType")}
                      onValueChange={(val) => {
                        form.setValue("freightType", val, {
                          shouldDirty: true,
                          shouldValidate: false,
                        });
                        form.clearErrors("freightType");
                      }}
                    >
                      <SelectTrigger className={fieldClassName("freightType")}>
                        <SelectValue placeholder="Select transport mode" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.slug} value={service.slug}>
                            {service.quotePrompt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {form.formState.errors.freightType && (
                      <p className="text-xs text-destructive">
                        {form.formState.errors.freightType.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Origin</label>
                      <Input
                        {...form.register("origin")}
                        placeholder="e.g. Shanghai, CN"
                        className={fieldClassName("origin")}
                      />
                      {form.formState.errors.origin && (
                        <p className="text-xs text-destructive">
                          {form.formState.errors.origin.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">
                        Destination
                      </label>
                      <Input
                        {...form.register("destination")}
                        placeholder="e.g. Los Angeles, US"
                        className={fieldClassName("destination")}
                      />
                      {form.formState.errors.destination && (
                        <p className="text-xs text-destructive">
                          {form.formState.errors.destination.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold">
                      Cargo Details (Cargo type, Commodity, Weight, Volume)
                    </label>
                    <Textarea
                      {...form.register("details")}
                      placeholder="Please provide details about the cargo, required Incoterms, and target dates."
                      className={fieldClassName("details", "resize-none h-24")}
                    />
                    {form.formState.errors.details && (
                      <p className="text-xs text-destructive">
                        {form.formState.errors.details.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSending}
                    className="w-full h-12 cursor-pointer text-base font-bold bg-primary hover:bg-primary/90 mt-2"
                  >
                    {isSending ? "Sending..." : "Request Quote"}
                  </Button>
                  {submitError && (
                    <p
                      className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-center text-sm text-destructive"
                      role="alert"
                    >
                      {submitError}
                    </p>
                  )}
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
