import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar"; // Import your updated Navbar component

// BackButton Component - Adjusted to work with the new navbar
const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const noBackButtonRoutes = ["/"];

  if (noBackButtonRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <button
      onClick={() => navigate(-1)}
      className={cn(
        "fixed top-24 left-4 z-50", // Adjusted top position for new navbar height
        "flex items-center justify-center",
        "w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm",
        "shadow-md hover:bg-gray-100 transition-colors",
        "border border-gray-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
        "dark:bg-gray-800/90 dark:border-gray-700 dark:hover:bg-gray-700",
        "md:block hidden"
      )}
      aria-label="Go back"
    >
      <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300 ml-2" />
    </button>
  );
};

// Layout Component that includes Navbar
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-28"> {/* Adjusted padding-top for navbar height */}
        {children}
      </main>
    </div>
  );
};

// Import all your page components
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
import CompanyRegistration from './components/business/CompanyRegistration';
import Branding from './components/business/Branding';
import WebsiteDevelopment from './components/business/WebsiteDevelopment';
import SoftwareDevelopment from './components/business/SoftwareDevelopment';
import DigitalMarketingBusiness from './components/business/DigitalMarketing';
import SupportHiring from './components/business/SupportHiring';
import RealEstate from './components/business/RealEstate';
import LoanSupport from './components/business/LoanSupport';
import CloudServices from './components/it/CloudServices';
import DevOps from './components/it/DevOps';
import Cybersecurity from './components/it/Cybersecurity';
import LeadSalesGeneration from './components/business/lead-sales-generation';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <BackButton />
        <Routes>
          {/* Homepage without Layout (if you want a different navbar style) */}
          <Route path="/" element={<Index />} />
          
          {/* All other routes with Layout (and navbar) */}
          <Route path="/about" element={<Layout><AboutUs /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/services/hr-service" element={<Layout><HRServiceDetail /></Layout>} />
          <Route path="/products" element={<Layout><Products /></Layout>} />

          {/* Products */}
          <Route path="/products/lms" element={<Layout><LMS /></Layout>} />
          <Route path="/products/erp" element={<Layout><ERP /></Layout>} />
          <Route path="/products/billing" element={<Layout><Billing /></Layout>} />

          {/* Startup Solutions */}
          <Route path="/products/startup/business-planning" element={<Layout><BusinessPlanning /></Layout>} />
          <Route path="/products/startup/mvp-development" element={<Layout><MVPDevelopment /></Layout>} />
          <Route path="/products/startup/market-research" element={<Layout><MarketResearch /></Layout>} />
          <Route path="/products/startup/resume-services" element={<Layout><ResumeServices /></Layout>} />

          {/* Growth Solutions */}
          <Route path="/products/growth/seo-services" element={<Layout><SEOServices /></Layout>} />
          <Route path="/products/growth/social-media" element={<Layout><SocialMediaGrowth /></Layout>} />
          <Route path="/products/growth/content-strategy" element={<Layout><ContentStrategy /></Layout>} />
          <Route path="/products/growth/lead-generation" element={<Layout><LeadGeneration /></Layout>} />

          {/* Business Services */}
          <Route path="/business/company-registration" element={<Layout><CompanyRegistration /></Layout>} />
          <Route path="/business/branding" element={<Layout><Branding /></Layout>} />
          <Route path="/business/website-development" element={<Layout><WebsiteDevelopment /></Layout>} />
          <Route path="/business/software-development" element={<Layout><SoftwareDevelopment /></Layout>} />
          <Route path="/business/digital-marketing" element={<Layout><DigitalMarketingBusiness /></Layout>} />
          <Route path="/business/support-hiring" element={<Layout><SupportHiring /></Layout>} />
          <Route path="/business/real-estate" element={<Layout><RealEstate /></Layout>} />
          <Route path="/business/loan-support" element={<Layout><LoanSupport /></Layout>} />
          <Route path="/business/lead-sales-generation" element={<Layout><LeadSalesGeneration /></Layout>} />

          {/* IT Services */}
          <Route path="/it/cloud" element={<Layout><CloudServices /></Layout>} />
          <Route path="/it/devops" element={<Layout><DevOps /></Layout>} />
          <Route path="/it/cybersecurity" element={<Layout><Cybersecurity /></Layout>} />

          {/* Projects and Others */}
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/projects/:id" element={<Layout><ProjectDetail /></Layout>} />
          <Route path="/case-studies" element={<Layout><CaseStudies /></Layout>} />
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/testimonials" element={<Layout><Testimonials /></Layout>} />
          <Route path="/careers" element={<Layout><Careers /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/appointment" element={<Layout><Appointment /></Layout>} />

          {/* Catch-All */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;