
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
} from "./ui/dropdown-menu";
import BookingModal from "./BookingModal";
import RequestDemoModal from "./RequestDemoModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const newStartupItems = [
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

  const indiaItems = [
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Careers", href: "/careers" }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
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
              <Link to="/" className="text-white hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-white hover:text-primary transition-colors">
                Services
              </Link>
              
              {/* Products Dropdown with Sub-menus */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-white hover:text-primary transition-colors flex items-center space-x-1">
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black border-gray-800 text-white w-56">
                  {/* New Startup Sub-menu */}
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="text-white hover:text-primary">
                      New Startup Solutions
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="bg-black border-gray-800 text-white">
                      {newStartupItems.map((item) => (
                        <DropdownMenuItem key={item.label} asChild>
                          <Link to={item.href} className="text-white hover:text-primary">
                            {item.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>

                  {/* Business Growth Sub-menu */}
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="text-white hover:text-primary">
                      Business Growth Solutions
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="bg-black border-gray-800 text-white">
                      {businessGrowthItems.map((item) => (
                        <DropdownMenuItem key={item.label} asChild>
                          <Link to={item.href} className="text-white hover:text-primary">
                            {item.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>

                  {/* Core Products */}
                  <DropdownMenuItem asChild>
                    <Link to="/products/lms" className="text-white hover:text-primary">
                      Learning Management System
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/products/erp" className="text-white hover:text-primary">
                      Enterprise Resource Planning
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/products/billing" className="text-white hover:text-primary">
                      Billing & Invoice System
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/projects" className="text-white hover:text-primary transition-colors">
                Our Projects
              </Link>
              <Link to="/case-studies" className="text-white hover:text-primary transition-colors">
                Case Studies
              </Link>

              {/* India Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-white hover:text-primary transition-colors flex items-center space-x-1">
                  <span>India</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black border-gray-800 text-white">
                  {indiaItems.map((item) => (
                    <DropdownMenuItem key={item.label} asChild>
                      <Link to={item.href} className="text-white hover:text-primary">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/contact" className="text-white hover:text-primary transition-colors">
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                onClick={() => setShowBooking(true)}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Book Appointment
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-primary transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden bg-black border-t border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="block px-3 py-2 text-white hover:text-primary">
                  Home
                </Link>
                <Link to="/about" className="block px-3 py-2 text-white hover:text-primary">
                  About Us
                </Link>
                <Link to="/services" className="block px-3 py-2 text-white hover:text-primary">
                  Services
                </Link>
                <Link to="/products" className="block px-3 py-2 text-white hover:text-primary">
                  Products
                </Link>
                <Link to="/projects" className="block px-3 py-2 text-white hover:text-primary">
                  Our Projects
                </Link>
                <Link to="/case-studies" className="block px-3 py-2 text-white hover:text-primary">
                  Case Studies
                </Link>
                <Link to="/blog" className="block px-3 py-2 text-white hover:text-primary">
                  Blog
                </Link>
                <Link to="/testimonials" className="block px-3 py-2 text-white hover:text-primary">
                  Testimonials
                </Link>
                <Link to="/careers" className="block px-3 py-2 text-white hover:text-primary">
                  Careers
                </Link>
                <Link to="/contact" className="block px-3 py-2 text-white hover:text-primary">
                  Contact
                </Link>
                <Button 
                  onClick={() => setShowBooking(true)}
                  className="w-full mt-4 bg-primary hover:bg-primary/90 text-white"
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
