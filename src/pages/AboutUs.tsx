import Layout from "@/components/Layout";
import AboutCharts from "@/components/AboutCharts";
import { Rocket, Lightbulb, ShieldCheck, Handshake, TrendingUp, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import Helmet from "react-helmet";

const AboutUs = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Enhanced intersection observers with staggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, observerOptions);

    const slideUpObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideUp');
          // Add delay based on index for staggered effect
          (entry.target as HTMLElement).style.animationDelay = `${index * 0.1}s`;
        }
      });
    }, observerOptions);

    const slideLeftObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideLeft');
        }
      });
    }, observerOptions);

    const slideRightObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideRight');
        }
      });
    }, observerOptions);

    // Apply observers to elements
    document.querySelectorAll('.fade-in').forEach(el => fadeInObserver.observe(el));
    document.querySelectorAll('.slide-up').forEach(el => slideUpObserver.observe(el));
    document.querySelectorAll('.slide-left').forEach(el => slideLeftObserver.observe(el));
    document.querySelectorAll('.slide-right').forEach(el => slideRightObserver.observe(el));

    return () => {
      fadeInObserver.disconnect();
      slideUpObserver.disconnect();
      slideLeftObserver.disconnect();
      slideRightObserver.disconnect();
    };
  }, []);

  const stats = [
    { icon: Rocket, label: "Startups Launched", value: "50+" },
    { icon: Lightbulb, label: "Products Deployed", value: "100+" },
    { icon: ShieldCheck, label: "Client Retention", value: "85%" },
    { icon: Handshake, label: "Long-term Partners", value: "30+" }
  ];

  const values = [
    { title: "Client-First", description: "We prioritize your goals, timelines, and budget", icon: <Handshake className="w-8 h-8" />, color: "text-blue-400" },
    { title: "Scalable", description: "We build technology that adapts to your growth", icon: <TrendingUp className="w-8 h-8" />, color: "text-purple-400" },
    { title: "Expert Team", description: "Skilled professionals delivering quality work", icon: <ShieldCheck className="w-8 h-8" />, color: "text-green-400" },
    { title: "Complete Support", description: "Long-term partnerships, not just solutions", icon: <Handshake className="w-8 h-8" />, color: "text-yellow-400" },
    { title: "High-Impact", description: "Cost-effective solutions with real ROI", icon: <Zap className="w-8 h-8" />, color: "text-red-400" },
    { title: "Innovation", description: "Constantly pushing boundaries in technology", icon: <Lightbulb className="w-8 h-8" />, color: "text-pink-400" }
  ];

  const products = [
    { 
      name: "Customer Relationship Management (CRM)",
    description: "Smart CRM system to manage leads, track interactions, and enhance client relationships with automation and insights.",
    features: ["Lead Tracking", "Sales Automation", "Customer Insights", "Email Integration"],
    },
    { 
      name: "Enterprise Resource Planning", 
      description: "Manage your entire business through one centralized system",
      features: [
        "Inventory, Finance, HR, Sales",
        "Real-Time Reports & Analytics",
        "Industry-Specific Customizations",
        "Ideal for Manufacturing & Retail"
      ],
    },
    { 
      name: "Billing & Invoice System (BS)", 
      description: "Simplify your billing, invoices, and client payments",
      features: [
        "Automated GST Billing & Tax Reports",
        "Recurring Payments & SMS Alerts",
        "Integration with ERP & CRM",
        "Payment Reminders & Insights"
      ],
    }
  ];

  return (
    <Layout>
      <Helmet>
        <style>{`
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

@keyframes marquee2 {
  0% { transform: translateX(100%); }
  100% { transform: translateX(0); }
}

.animate-marquee {
  animation: marquee 10s linear infinite; /* ↓ Reduced from 30s to 15s */
}

.animate-marquee2 {
  animation: marquee2 10s linear infinite; /* ↓ Reduced from 30s to 15s */
}

.marquee-wrapper {
  overflow: hidden;
  position: relative;
}

.marquee-track {
  display: flex;
  width: fit-content;
  animation: marquee 30s linear infinite;
}

.marquee-item {
  flex-shrink: 0;
  padding: 0 2rem;
}

.marquee-item img {
  height: 10rem;
  width: 13rem;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.9;
  transition: all 0.3s;
}

.marquee-item img:hover {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.05);
}

        `}</style>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            About <span className="gradient-text">Pawar Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            Empowering Startups. Elevating Enterprises. Enabling Growth.
          </p>
        </div>
      </section>

      {/* Hero Image with Overlay Text */}
      <section className="relative py-16 bg-gray-900 fade-in">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop"
              alt="Team collaboration"
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="absolute bottom-8 left-8 right-8 bg-gray-900/80 p-6 rounded-xl backdrop-blur-sm border border-gray-700 slide-up">
            <p className="text-xl text-white">
              Pawar Technology Services (PTS) is your trusted digital partner in business creation, transformation, and growth. 
              We specialize in helping new startups build from the ground up, supporting growing businesses with scalable technology.
            </p>
            <p className="text-lg text-primary mt-4 font-semibold">
              We don't just deliver services — we deliver business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-black fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Who </span>
              <span className="gradient-text">We Are</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Founded with a mission to bridge the gap between ideas and execution, PTS is a results-driven technology and business solutions company.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-left">
              <img 
                src="https://res.cloudinary.com/dwsrcpjv3/image/upload/v1750680454/who_opyvmi.png"
                alt="Team working"
                className="rounded-xl w-full h-auto object-cover shadow-2xl"
              />
            </div>
            <div className="slide-right">
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                <p className="text-lg text-gray-300 mb-6">
                  Whether you're an entrepreneur with a dream or an enterprise ready to evolve, PTS helps you launch faster, operate smarter, and grow bigger.
                </p>
                <p className="text-gray-400 mb-6">
                  We offer end-to-end support — from startup consulting and product development to process automation and marketing.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-gray-300">
                    Transforming ideas into successful businesses since our inception.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary transition-all duration-300 h-full">
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-black fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">What </span>
              <span className="gradient-text">We Do</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Startup Services */}
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300 slide-left">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white">End-to-End Startup Services</h3>
              </div>
              <p className="text-gray-300 mb-6">
                We help early-stage founders bring their ideas to life with comprehensive support:
              </p>
              <ul className="space-y-3">
                {[
                  "Business Planning & Idea Validation",
                  "Branding, UI/UX & MVP Development",
                  "Website & App Launch",
                  "Go-to-Market & Investor Readiness",
                  "Mentorship & Strategic Roadmaps"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Growth */}
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300 slide-right">
              <div className="flex items-center mb-6">
                <div className="bg-green-400/10 p-3 rounded-full mr-4">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Business Growth & Automation</h3>
              </div>
              <p className="text-gray-300 mb-6">
                We support growing businesses in scaling operations efficiently:
              </p>
              <ul className="space-y-3">
                {[
                  "CRM & Sales Automation",
                  "Custom Software & Workflow Tools",
                  "Marketing & Lead Generation",
                  "Franchise & Expansion Support",
                  "Business Consulting & Strategic Planning"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-20 bg-gray-900 fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="gradient-text">Flagship Products</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="bg-black p-6 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300 hover:transform hover:-translate-y-2 slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-bold text-white mb-4 text-center">{product.name}</h3>
                <p className="text-gray-300 mb-6 text-center">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <div className="fade-in">
        <AboutCharts />
      </div>

      {/* Why Choose Us */}
      <section className="py-20 bg-black fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Why </span>
              <span className="gradient-text">Choose PTS?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300 slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${value.color} mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Our Clients */}
<section className="py-20 bg-black fade-in">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16 slide-up">
      <h2 className="text-4xl font-bold mb-6">
        <span className="text-white">Our </span>
        <span className="gradient-text">Clients</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8"></div>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Trusted by innovative companies across industries
      </p>
    </div>

    {/* Marquee */}
    <div className="marquee-wrapper py-8">
      <div className="marquee-track">
        {[
          "/image/brand/1.jpg",
          "/image/brand/2.jpg",
          "/image/brand/3.jpg",
          "/image/brand/4.jpg",
          "/image/brand/5.jpg",
          "/image/brand/6.jpg",
          "/image/brand/7.jpg",
          "/image/brand/8.jpg",
          // Duplicate for seamless loop
          "/image/brand/1.jpg",
          "/image/brand/2.jpg",
          "/image/brand/3.jpg",
          "/image/brand/4.jpg",
          "/image/brand/5.jpg",
          "/image/brand/6.jpg",
          "/image/brand/7.jpg",
          "/image/brand/8.jpg",
        ].map((logo, index) => (
          <div key={index} className="marquee-item">
            <img src={logo} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Our Vision */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900 fade-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 backdrop-blur-sm slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="gradient-text">Vision</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-6">
              To become India's leading digital partner for startup incubation, business automation, and product innovation-one idea at a time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;