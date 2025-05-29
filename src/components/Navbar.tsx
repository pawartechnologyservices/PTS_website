
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import BookingModal from "./BookingModal";
import RequestDemoModal from "./RequestDemoModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const freeStartupInsightItems = [
    { label: "Digital Marketing", href: "/products/startup/digital-marketing" },
    { label: "Business Planning", href: "/products/startup/business-planning" },
    { label: "MVP Development", href: "/products/startup/mvp-development" },
    { label: "Market Research", href: "/products/startup/market-research" }
  ];

  const businessGrowthItems = [
    { label: "SEO Services", href: "/products/growth/seo-services" },
    { label: "Social Media Growth", href: "/products/growth/social-media" },
    { label: "Content Strategy", href: "/products/growth/content-strategy" },
    { label: "Lead Generation", href: "/products/growth/lead-generation" }
  ];

  const servicesItems = [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Software Development", href: "/services/software-development" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "HR Services", href: "/services/hr-service" },
    { label: "AI Solutions", href: "/services/ai-solutions" }
  ];

  const caseStudyItems = [
    { label: "E-commerce Success Story", href: "/case-studies/ecommerce" },
    { label: "SaaS Platform Growth", href: "/case-studies/saas" },
    { label: "Enterprise Digital Transformation", href: "/case-studies/enterprise" },
    { label: "Startup MVP Launch", href: "/case-studies/startup" }
  ];

  const indiaItems = [
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Careers", href: "/careers" }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-white">
                <span className="gradient-text">Pawar</span>
                <span className="text-white"> Tech</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-gray-300 transition-colors">
                About Us
              </Link>
              
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-white hover:text-gray-300 transition-colors flex items-center space-x-1">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="dropdown-content w-64">
                  {servicesItems.map((item) => (
                    <DropdownMenuItem key={item.label} asChild className="dropdown-item">
                      <Link to={item.href} className="text-white hover:text-gray-300 flex items-center px-4 py-2">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem asChild className="dropdown-item">
                    <Link to="/services" className="text-white hover:text-gray-300 flex items-center px-4 py-2 font-semibold">
                      View All Services
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Founders Workspace Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-white hover:text-gray-300 transition-colors flex items-center space-x-1">
                  <span>Founders Workspace</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="dropdown-content w-64">
                  {/* Free Startup Insight Sub-menu */}
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="text-white hover:text-gray-300 dropdown-item">
                      Free Startup Insight
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="dropdown-content">
                      {freeStartupInsightItems.map((item) => (
                        <DropdownMenuItem key={item.label} asChild className="dropdown-item">
                          <Link to={item.href} className="text-white hover:text-gray-300">
                            {item.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>

                  {/* Business Growth Solution Sub-menu */}
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="text-white hover:text-gray-300 dropdown-item">
                      Business Growth Solution
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="dropdown-content">
                      {businessGrowthItems.map((item) => (
                        <DropdownMenuItem key={item.label} asChild className="dropdown-item">
                          <Link to={item.href} className="text-white hover:text-gray-300">
                            {item.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>

                  <DropdownMenuSeparator className="bg-gray-700" />

                  {/* Core Products */}
                  <DropdownMenuItem asChild className="dropdown-item">
                    <Link to="/products/lms" className="text-white hover:text-gray-300">
                      Learning Management System
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="dropdown-item">
                    <Link to="/products/erp" className="text-white hover:text-gray-300">
                      Enterprise Resource Planning
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="dropdown-item">
                    <Link to="/products/billing" className="text-white hover:text-gray-300">
                      Billing & Invoice System
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/projects" className="text-white hover:text-gray-300 transition-colors">
                Our Projects
              </Link>

              {/* India Dropdown with Case Studies */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-white hover:text-gray-300 transition-colors flex items-center space-x-1">
                  <span>India</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="dropdown-content w-64">
                  {/* Case Studies Sub-menu */}
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="text-white hover:text-gray-300 dropdown-item">
                      Case Studies
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="dropdown-content">
                      {caseStudyItems.map((item) => (
                        <DropdownMenuItem key={item.label} asChild className="dropdown-item">
                          <Link to={item.href} className="text-white hover:text-gray-300">
                            {item.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>

                  <DropdownMenuSeparator className="bg-gray-700" />

                  {indiaItems.map((item) => (
                    <DropdownMenuItem key={item.label} asChild className="dropdown-item">
                      <Link to={item.href} className="text-white hover:text-gray-300">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/contact" className="text-white hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                onClick={() => setShowBooking(true)}
                variant="redblue"
              >
                Book Appointment
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-gray-300 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden bg-black border-t border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="block px-3 py-2 text-white hover:text-gray-300">
                  Home
                </Link>
                <Link to="/about" className="block px-3 py-2 text-white hover:text-gray-300">
                  About Us
                </Link>
                <Link to="/services" className="block px-3 py-2 text-white hover:text-gray-300">
                  Services
                </Link>
                <Link to="/products" className="block px-3 py-2 text-white hover:text-gray-300">
                  Founders Workspace
                </Link>
                <Link to="/projects" className="block px-3 py-2 text-white hover:text-gray-300">
                  Our Projects
                </Link>
                <Link to="/case-studies" className="block px-3 py-2 text-white hover:text-gray-300">
                  Case Studies
                </Link>
                <Link to="/blog" className="block px-3 py-2 text-white hover:text-gray-300">
                  Blog
                </Link>
                <Link to="/testimonials" className="block px-3 py-2 text-white hover:text-gray-300">
                  Testimonials
                </Link>
                <Link to="/careers" className="block px-3 py-2 text-white hover:text-gray-300">
                  Careers
                </Link>
                <Link to="/contact" className="block px-3 py-2 text-white hover:text-gray-300">
                  Contact
                </Link>
                <Button 
                  onClick={() => setShowBooking(true)}
                  variant="redblue"
                  className="w-full mt-4"
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <BookingModal 
        isOpen={showBooking} 
        onClose={() => setShowBooking(false)} 
      />
      <RequestDemoModal 
        isOpen={showDemo} 
        onClose={() => setShowDemo(false)} 
      />
    </>
  );
};

export default Navbar;
