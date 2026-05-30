import React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const NotFound = React.lazy(() => import("@/pages/not-found"));
const Home = React.lazy(() => import("@/pages/home"));
const ContactPage = React.lazy(() => import("@/pages/contact"));
const ExpertisePage = React.lazy(() => import("@/pages/expertise"));
const GlobalReachPage = React.lazy(() => import("@/pages/global-reach"));
const ServiceDetailPage = React.lazy(() => import("@/pages/service-detail"));
const ServicesPage = React.lazy(() => import("@/pages/services"));

function Router() {
  return (
    <React.Suspense fallback={<div className="min-h-screen bg-background" />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/services/:slug" component={ServiceDetailPage} />
        <Route path="/global-reach" component={GlobalReachPage} />
        <Route path="/expertise" component={ExpertisePage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </React.Suspense>
  );
}

function App() {
  return (
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
