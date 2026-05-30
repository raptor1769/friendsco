const emailjsEnv = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "",
  companyTemplateId: import.meta.env.VITE_EMAILJS_COMPANY_TEMPLATE_ID ?? "",
  customerTemplateId: import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE_ID ?? "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "",
  companyEmail: import.meta.env.VITE_COMPANY_EMAIL ?? "",
};

export const appConfig = {
  emailjs: emailjsEnv,
};

export function getMissingEmailConfig() {
  return Object.entries(emailjsEnv)
    .filter(([, value]) => !value)
    .map(([key]) => key);
}
