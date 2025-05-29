
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Products from "./pages/Products";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import LMS from "./pages/products/LMS";
import ERP from "./pages/products/ERP";
import Billing from "./pages/products/Billing";
import DigitalMarketing from "./pages/startup/DigitalMarketing";
import BusinessPlanning from "./pages/startup/BusinessPlanning";
import MVPDevelopment from "./pages/startup/MVPDevelopment";
import MarketResearch from "./pages/startup/MarketResearch";
import ResumeServices from "./pages/startup/ResumeServices";
import SEOServices from "./pages/growth/SEOServices";
import SocialMediaGrowth from "./pages/growth/SocialMediaGrowth";
import ContentStrategy from "./pages/growth/ContentStrategy";
import LeadGeneration from "./pages/growth/LeadGeneration";
import HRServiceDetail from "./pages/services/HRServiceDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/hr-service" element={<HRServiceDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/lms" element={<LMS />} />
          <Route path="/products/erp" element={<ERP />} />
          <Route path="/products/billing" element={<Billing />} />
          
          {/* Startup Solutions */}
          <Route path="/products/startup/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/products/startup/business-planning" element={<BusinessPlanning />} />
          <Route path="/products/startup/mvp-development" element={<MVPDevelopment />} />
          <Route path="/products/startup/market-research" element={<MarketResearch />} />
          <Route path="/products/startup/resume-services" element={<ResumeServices />} />
          
          {/* Business Growth Solutions */}
          <Route path="/products/growth/seo-services" element={<SEOServices />} />
          <Route path="/products/growth/social-media" element={<SocialMediaGrowth />} />
          <Route path="/products/growth/content-strategy" element={<ContentStrategy />} />
          <Route path="/products/growth/lead-generation" element={<LeadGeneration />} />
          
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
