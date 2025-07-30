import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  ArrowRight,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { FaThLarge } from "react-icons/fa";
import BookingModal from "./BookingModal";
import RequestDemoModal from "./RequestDemoModal";

const logo = "/image/log.png";

// Enhanced images for dropdown sections
const serviceImages = {
  business: "/images/business-solutions.jpg",
  it: "/images/it-services.jpg",
  founders: "/images/founders-workspace.jpg",
  hero: "/images/services-hero-bg.jpg",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(
    "business360"
  );
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>(
    {
      services: false,
      business360: false,
      itServices: false,
      founders: false,
      insights: false,
    }
  );
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const [showContactPanel, setShowContactPanel] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const dropdownTriggerRef = useRef<HTMLButtonElement>(null);

  /* -------------------- EFFECTS -------------------- */
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showComingSoon) {
      timer = setTimeout(() => setShowComingSoon(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [showComingSoon]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const bgColor = window.getComputedStyle(entry.target).backgroundColor;
          const isDark = isColorDark(bgColor);
          setIsDarkBackground(isDark);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-100px 0px 0px 0px",
      }
    );

    const mainContent = document.querySelector("main") || document.body;
    if (mainContent) {
      observerRef.current.observe(mainContent);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  /* -------------------- HELPERS -------------------- */
  const toggleMobileExpand = (section: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowComingSoon(true);
  };

  const handleLearnMore = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (dropdownTriggerRef.current) {
      dropdownTriggerRef.current.click();
    }
    window.open(href, "_blank");
  };

  const isColorDark = (color: string) => {
    const hex = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (hex) {
      const r = parseInt(hex[1], 10);
      const g = parseInt(hex[2], 10);
      const b = parseInt(hex[3], 10);
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      return luminance < 0.5;
    }
    return false;
  };

  /* -------------------- NAV DATA -------------------- */
  const comingSoonItems = ["Cloud Services", "DevOps"];
  const servicesSections = [
    {
      title: "360° BUSINESS SOLUTIONS",
      key: "business360",
      image: serviceImages.business,
      description: "Comprehensive solutions to launch and grow your business",
      items: [
        {
          label: "Company Registration",
          href: "/business/company-registration",
          description:
            "End-to-end assistance to legally register and launch your company with all necessary documentation and compliance.",
          features: [
            "GST Registration",
            "MSME Certification",
            "Trade License",
            "Startup India Recognition",
          ],
        },
        {
          label: "Branding",
          href: "/business/branding",
          description:
            "Complete branding solutions including logo design, brand identity, and market positioning strategies.",
          features: [
            "Logo Design",
            "Brand Guidelines",
            "Visual Identity",
            "Brand Strategy",
          ],
        },
        {
          label: "Website Development",
          href: "/business/website-development",
          description:
            "Custom website development with responsive design, SEO optimization, and content management.",
          features: [
            "UI/UX Design",
            "E-commerce Solutions",
            "CMS Integration",
            "Hosting Setup",
          ],
        },
        {
          label: "Software Development",
          href: "/business/software-development",
          description:
            "Tailored software solutions to automate and streamline your business operations.",
          features: [
            "Custom Applications",
            "ERP Solutions",
            "Mobile Apps",
            "API Integration",
          ],
        },
        {
          label: "Digital Marketing",
          href: "/business/digital-marketing",
          description:
            "Data-driven digital marketing strategies to increase your online presence and conversions.",
          features: [
            "SEO",
            "PPC Campaigns",
            "Social Media Marketing",
            "Content Strategy",
          ],
        },
        {
          label: "Support Hiring",
          href: "/business/support-hiring",
          description:
            "Specialized recruitment services for critical business roles and staff augmentation.",
          features: [
            "Technical Hiring",
            "Executive Search",
            "Temporary Staffing",
            "HR Consulting",
          ],
        },
        {
          label: "Real Estate and Loan Support",
          href: "/business/real-estate",
          description:
            "End-to-end commercial real estate solutions for your business expansion needs.",
          features: [
            "Office Space",
            "Retail Locations",
            "Warehouse Solutions",
            "Legal Documentation",
          ],
        },
        {
          label: "Sales / Lead Generation",
          href: "/business/lead-sales-generation",
          description:
            "End-to-end lead generation and sales conversion services to grow your customer base.",
          features: [
            "Target audience identification",
            "Multi-channel outreach (Email, WhatsApp, Social)",
            "Sales campaign management",
            "Performance tracking & optimization",
          ],
        },
      ],
    },
    {
      title: "FOUNDERS WORKSPACE",
      key: "founders",
      image: serviceImages.founders,
      description: "All-in-one platform for startup founders and entrepreneurs",
      href: "https://founder-workspace.netlify.app/",
    },
    {
      title: "IT SERVICES",
      key: "itServices",
      image: serviceImages.it,
      description:
        "Cutting-edge technology solutions for your digital transformation",
      items: [
        {
          label: "Cyber Security",
          href: "/it/cybersecurity",
          description:
            "Robust security solutions to protect your digital assets and infrastructure.",
          features: [
            "Vulnerability Assessment",
            "Penetration Testing",
            "Security Audits",
            "Compliance",
          ],
        },
        {
          label: "Cloud Services",
          href: "#",
          description:
            "Comprehensive cloud solutions including migration, management, and optimization.",
          features: [
            "AWS Solutions",
            "Azure Cloud",
            "Google Cloud",
            "Hybrid Cloud",
          ],
        },
        {
          label: "DevOps",
          href: "#",
          description:
            "End-to-end DevOps implementation for continuous integration and delivery.",
          features: [
            "CI/CD Pipelines",
            "Infrastructure as Code",
            "Containerization",
            "Monitoring",
          ],
        },
      ],
    },
  ];

  const insightsItems = [
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Careers", href: "/careers" },
  ];

  const navLinksLeft = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Capabilities", href: "/services" },
  ];

  const navLinksRight = [
    { name: "Case Studies", href: "/projects" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  /* -------------------- ANIMATION VARIANTS -------------------- */
  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  const contactPanelVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { x: "-100%" },
  };

  /* -------------------- RENDER -------------------- */
  return (
    <>
      {/* Toast */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-5 py-2 rounded-lg shadow-lg z-[100] flex items-center"
          >
            Launching Soon!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Panel */}
      <AnimatePresence>
        {showContactPanel && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={contactPanelVariants}
            className="fixed top-20 left-4 w-full max-w-xs bg-gray-900 text-white shadow-xl z-[100] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-white">CONTACTS</h2>
                <button
                  onClick={() => setShowContactPanel(false)}
                  className="p-2 rounded-full hover:bg-gray-800"
                >
                  <X className="w-5 h-5 text-gray-300" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Office Address
                  </h3>
                  <p className="text-gray-300">
                    Office No A1002 Boulevard Towers,
                    <br />
                    Sadhu Vaswani Chowk, Camp, Pune,
                    <br />
                    Maharashtra 411001
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Phone
                  </h3>
                  <p className="text-gray-300">+91 909-664-9556</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:pawartechnologyservices@gmail.com"
                    className="text-blue-400 hover:underline"
                  >
                    pawartechnologyservices@gmail.com
                  </a>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Get in touch
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 px-4 md:px-8 py-1 shadow-[0_5px_30px_rgba(0,0,0,0.1)] rounded-b-full border-t border-x border-gray-300 backdrop-blur-md transition-colors duration-300 ${
          isDarkBackground
            ? "bg-white text-gray-900 border-gray-300"
            : "bg-gray-900 text-white border-gray-800"
        }`}
      >
        <nav className="flex justify-between items-center relative max-w-[1400px] mx-auto h-16">
          {/* Left side - Contact Icon (Desktop only) */}
          <div className="hidden md:flex items-center mr-4">
            <button
              onClick={() => setShowContactPanel(true)}
              className={`flex items-center p-2 rounded-full transition-colors ${
                isDarkBackground
                  ? "hover:bg-gray-200 text-gray-700"
                  : "hover:bg-gray-700 text-gray-200"
              }`}
            >
              <FaThLarge className="h-5 w-5" />
            </button>
          </div>

          {/* Left desktop links */}
          <div className="hidden md:flex gap-8 lg:gap-10 text-base font-medium -ml-60">
            {navLinksLeft.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name === "Capabilities" ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      ref={dropdownTriggerRef}
                      className={`flex items-center space-x-1 focus:outline-none transition-colors ${
                        isDarkBackground
                          ? "hover:text-purple-600"
                          : "hover:text-purple-300"
                      }`}
                      onMouseEnter={() => setActiveSection("business360")}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      className="w-screen max-w-[1400px] h-[80vh] bg-white border border-gray-200 rounded-b-lg shadow-2xl p-0 overflow-hidden"
                      align="start"
                      sideOffset={0}
                      onMouseLeave={() => setActiveSection("business360")}
                    >
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="h-full flex"
                      >
                        {/* Left sidebar - Service categories */}
                        <div className="w-1/4 bg-gradient-to-b from-gray-50 to-gray-100 border-r border-gray-200 p-6 overflow-y-auto">
                          <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Our Services
                          </h2>
                          <div className="space-y-2">
                            {servicesSections.map((section) => (
                              <motion.div
                                key={section.key}
                                variants={sectionVariants}
                              >
                                <button
                                  onClick={() => {
                                    if (section.key === "founders") {
                                      window.open(section.href, "_blank");
                                      if (dropdownTriggerRef.current) {
                                        dropdownTriggerRef.current.click();
                                      }
                                    } else {
                                      setActiveSection(section.key);
                                    }
                                  }}
                                  className={`w-full text-left p-3 rounded-lg transition-all flex items-start ${
                                    activeSection === section.key
                                      ? "bg-white shadow-md border border-gray-200 text-gray-800"
                                      : "hover:bg-gray-100 text-gray-700"
                                  }`}
                                >
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                      <span className="font-medium text-sm lg:text-base">
                                        {section.title}
                                      </span>
                                    </div>
                                    {activeSection === section.key &&
                                      section.key !== "founders" && (
                                        <p className="text-xs text-gray-500 mt-1 text-left">
                                          {section.description}
                                        </p>
                                      )}
                                  </div>
                                </button>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Main content area - Only show for non-founders sections */}
                        {activeSection && activeSection !== "founders" && (
                          <div className="w-3/4 overflow-y-auto relative">
                            {/* Hero background for empty state */}
                            {!activeSection && (
                              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 z-0">
                                <div className="absolute inset-0 bg-[url('/images/services-hero-bg.jpg')] bg-cover bg-center opacity-10"></div>
                              </div>
                            )}

                            <div className="relative z-10 h-full p-8">
                              {activeSection ? (
                                <>
                                  {servicesSections
                                    .filter((s) => s.key === activeSection)
                                    .map((section) => (
                                      <div
                                        key={section.key}
                                        className="space-y-8"
                                      >
                                        <div className="flex items-center gap-4 mb-6">
                                          <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
                                            <span className="text-2xl"></span>
                                          </div>
                                          <div>
                                            <h3 className="text-2xl font-bold text-gray-800">
                                              {section.title}
                                            </h3>
                                            <p className="text-gray-600">
                                              {section.description}
                                            </p>
                                          </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                          {section.items.map((item, idx) => (
                                            <motion.div
                                              key={idx}
                                              custom={idx}
                                              initial="hidden"
                                              animate="visible"
                                              variants={cardVariants}
                                              whileHover={{ y: -5 }}
                                              className={`bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition-all ${
                                                comingSoonItems.includes(
                                                  item.label
                                                )
                                                  ? "opacity-90"
                                                  : ""
                                              }`}
                                            >
                                              <div className="flex items-start mb-3">
                                                <h4 className="font-semibold text-lg text-gray-800">
                                                  {item.label}
                                                </h4>
                                              </div>
                                              <p className="text-sm text-gray-600 mb-4">
                                                {item.description}
                                              </p>

                                              <div className="mb-4">
                                                <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                                                  Key Features:
                                                </h5>
                                                <ul className="space-y-2">
                                                  {item.features.map(
                                                    (feature, fIdx) => (
                                                      <li
                                                        key={fIdx}
                                                        className="flex items-start"
                                                      >
                                                        <span className="text-gray-500 mr-2">
                                                          •
                                                        </span>
                                                        <span className="text-xs text-gray-500">
                                                          {feature}
                                                        </span>
                                                      </li>
                                                    )
                                                  )}
                                                </ul>
                                              </div>

                                              {comingSoonItems.includes(item.label) ? (
                                                <button
                                                  onClick={handleComingSoon}
                                                  className="w-full flex items-center justify-center gap-2 text-sm font-medium text-gray-400 bg-gray-100 px-4 py-2 rounded-lg cursor-not-allowed"
                                                >
                                                  Launching Soon
                                                </button>
                                              ) : (
                                                <Link
                                                  to={item.href}
                                                  className="w-full flex items-center justify-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors cursor-pointer"
                                                >
                                                  Learn more <ArrowRight className="w-4 h-4" />
                                                </Link>
                                              )}
                                            </motion.div>
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                </>
                              ) : (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                  <div className="max-w-2xl">
                                    <h3 className="text-3xl font-bold text-gray-700 mb-4">
                                      Explore Our Services
                                    </h3>
                                    <p className="text-gray-500 mb-8 text-lg">
                                      We offer comprehensive solutions to help
                                      your business grow. Select a category to
                                      view detailed services.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                      {servicesSections.map((section) => (
                                        <motion.div
                                          key={section.key}
                                          whileHover={{ y: -5 }}
                                          className="cursor-pointer group"
                                          onClick={() =>
                                            setActiveSection(section.key)
                                          }
                                        >
                                          <div className="bg-white rounded-lg p-6 border border-gray-200 group-hover:border-gray-300 transition-all h-full">
                                            <div className="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-gray-200 transition-colors">
                                              <span className="text-2xl"></span>
                                            </div>
                                            <h4 className="font-medium text-gray-800 mb-2">
                                              {section.title}
                                            </h4>
                                            <p className="text-sm text-gray-500 mb-3">
                                              {section.description}
                                            </p>
                                            <div className="mt-4 text-gray-600 flex items-center justify-center gap-1 text-sm font-medium">
                                              View services{" "}
                                              <ChevronRight className="w-4 h-4" />
                                            </div>
                                          </div>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={item.href}
                    className={`transition-colors ${
                      isDarkBackground
                        ? "hover:text-purple-600"
                        : "hover:text-purple-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link to="/">
              <img
                src={logo}
                alt="Company Logo"
                className="w-32 md:w-40 h-10 md:h-12"
              />
            </Link>
          </div>

          {/* Right desktop links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 text-base font-medium">
            {navLinksRight.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name === "Insights" ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      className={`flex items-center space-x-1 focus:outline-none transition-colors ${
                        isDarkBackground
                          ? "hover:text-purple-600"
                          : "hover:text-purple-300"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      className="w-48 bg-white border border-gray-200 rounded-md shadow-lg p-2"
                      sideOffset={10}
                    >
                      <AnimatePresence>
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="space-y-1"
                        >
                          {insightsItems.map((link) => (
                            <motion.div
                              key={link.label}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <DropdownMenuItem className="hover:bg-gray-100 focus:bg-gray-100 rounded-md">
                                <Link
                                  to={link.href}
                                  className="w-full flex items-center px-3 py-2 text-sm text-gray-800 hover:text-gray-600 transition-colors"
                                >
                                  <ChevronRight className="w-3 h-3 text-gray-600 mr-2" />
                                  {link.label}
                                </Link>
                              </DropdownMenuItem>
                            </motion.div>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={item.href}
                    className={`transition-colors ${
                      isDarkBackground
                        ? "hover:text-purple-600"
                        : "hover:text-purple-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: navLinksRight.length * 0.1 }}
            >
              <Button
                onClick={() => setShowBooking(true)}
                className="ml-2 px-4 py-2 rounded-full border-2 font-semibold text-sm relative overflow-hidden z-10 hover:scale-105 transition-transform bg-gradient-to-r from-[#FF416C] via-[#8E2DE2] to-[#00B4DB] bg-white group-hover:text-white transition-all"
              >
                Book Appointment
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <Menu className="w-6 h-6 ml-5" />
          </button>
        </nav>

        {/* ----------------------------- MOBILE NAV --------------------------- */}
        {isOpen && (
          <div
            className={`md:hidden rounded-b-lg ${
              isDarkBackground
                ? "bg-white text-gray-900 border-gray-300"
                : "bg-gray-900 text-white border-gray-800"
            } border-t`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 ${
                  isDarkBackground
                    ? "hover:text-purple-600"
                    : "hover:text-purple-300"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 ${
                  isDarkBackground
                    ? "hover:text-purple-600"
                    : "hover:text-purple-300"
                }`}
              >
                About Us
              </Link>

              {/* Mobile Services accordion */}
              <div className="space-y-1">
                <button
                  onClick={() => toggleMobileExpand("services")}
                  className={`w-full flex justify-between items-center px-3 py-2 ${
                    isDarkBackground
                      ? "hover:text-purple-600"
                      : "hover:text-purple-300"
                  }`}
                >
                  <span>Capabilities</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      mobileExpanded.services ? "rotate-90" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {mobileExpanded.services && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 overflow-hidden"
                    >
                      {servicesSections.map((section) => (
                        <div key={section.title} className="space-y-1 mt-2">
                          <button
                            onClick={() => {
                              if (section.key === "founders") {
                                window.open(section.href, "_blank");
                                setIsOpen(false);
                              } else {
                                toggleMobileExpand(section.key);
                              }
                            }}
                            className={`w-full flex justify-between items-center px-3 py-2 ${
                              isDarkBackground
                                ? "text-purple-600 hover:text-purple-700 bg-gray-100"
                                : "text-purple-300 hover:text-purple-200 bg-gray-800"
                            } rounded-lg`}
                          >
                            <div className="flex items-center">
                              <span>
                                {section.key === "founders"
                                  ? "FOUNDERS WORKSPACE"
                                  : section.title}
                              </span>
                            </div>
                            <div className="flex items-center">
                              {section.key !== "founders" && (
                                <ChevronRight
                                  className={`w-4 h-4 transition-transform ${
                                    mobileExpanded[section.key]
                                      ? "rotate-90"
                                      : ""
                                  }`}
                                />
                              )}
                            </div>
                          </button>

                          <AnimatePresence>
                            {mobileExpanded[section.key] &&
                              section.key !== "founders" && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="pl-2 overflow-hidden space-y-2 mt-2"
                                >
                                  <div className="grid grid-cols-1 gap-2">
                                    {section.items.map((link, idx) => (
                                      <Link
                                        key={idx}
                                        to={
                                          comingSoonItems.includes(link.label)
                                            ? "#"
                                            : link.href
                                        }
                                        onClick={(e) => {
                                          if (comingSoonItems.includes(link.label)) {
                                            e.preventDefault();
                                            setShowComingSoon(true);
                                          } else {
                                            setIsOpen(false);
                                          }
                                        }}
                                        className={`rounded-lg p-3 ${
                                          isDarkBackground
                                            ? "bg-gray-100 hover:bg-gray-200"
                                            : "bg-gray-800 hover:bg-gray-700"
                                        } transition-colors`}
                                      >
                                        <div className="flex items-start">
                                          <div>
                                            <div className="flex items-center justify-between">
                                              <span
                                                className={`font-medium ${
                                                  isDarkBackground
                                                    ? "text-gray-900"
                                                    : "text-white"
                                                }`}
                                              >
                                                {link.label}
                                              </span>
                                              {comingSoonItems.includes(link.label) && (
                                                <span
                                                  className={`text-xs px-2 py-0.5 rounded-full ${
                                                    isDarkBackground
                                                      ? "bg-orange-100 text-orange-700"
                                                      : "bg-orange-900 text-orange-300"
                                                  }`}
                                                >
                                                  Soon
                                                </span>
                                              )}
                                            </div>
                                            <p
                                              className={`text-xs mt-1 ${
                                                isDarkBackground
                                                  ? "text-gray-700"
                                                  : "text-gray-300"
                                              }`}
                                            >
                                              {link.description}
                                            </p>
                                          </div>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                          </AnimatePresence>
                        </div>
                      ))}
                      <Link
                        to="/services"
                        onClick={() => setIsOpen(false)}
                        className={`block px-3 py-2 mt-2 font-semibold text-sm text-center ${
                          isDarkBackground
                            ? "text-purple-600 hover:text-purple-700"
                            : "text-purple-300 hover:text-purple-200"
                        }`}
                      >
                        Explore All Capabilities →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 ${
                  isDarkBackground
                    ? "hover:text-purple-600"
                    : "hover:text-purple-300"
                }`}
              >
                Case Studies
              </Link>

              {/* Insights accordion */}
              <div className="space-y-1">
                <button
                  onClick={() => toggleMobileExpand("insights")}
                  className={`w-full flex justify-between px-3 py-2 ${
                    isDarkBackground
                      ? "hover:text-purple-600"
                      : "hover:text-purple-300"
                  }`}
                >
                  <span>Insights</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      mobileExpanded.insights ? "rotate-90" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {mobileExpanded.insights && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 overflow-hidden space-y-1"
                    >
                      {insightsItems.map((link) => (
                        <Link
                          key={link.label}
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-1 text-sm ${
                            isDarkBackground
                              ? "text-gray-700 hover:text-gray-900"
                              : "text-gray-300 hover:text-white"
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 ${
                  isDarkBackground
                    ? "hover:text-purple-600"
                    : "hover:text-purple-300"
                }`}
              >
                Contact
              </Link>

              <Button
                onClick={() => {
                  setShowBooking(true);
                  setIsOpen(false);
                }}
                variant="redblue"
                className="w-full mt-3 hover:scale-105 transition-transform   bg-gradient-to-r from-[#FF416C] via-[#8E2DE2] to-[#00B4DB]"
              >
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Modals */}
      <BookingModal
        isOpen={showBooking}
        onClose={() => setShowBooking(false)}
      />
      <RequestDemoModal isOpen={showDemo} onClose={() => setShowDemo(false)} />
    </>
  );
};

export default Navbar;