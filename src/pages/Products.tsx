
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Learning Management System (LMS)",
      description: "Comprehensive online learning platform designed for educational institutions and corporate training programs.",
      features: [
        "Course Creation & Management",
        "Video Streaming & Content Delivery",
        "Student Progress Tracking",
        "Assessment & Quiz Builder",
        "Certificate Generation",
        "Mobile App Support",
        "Multi-language Support",
        "Analytics & Reporting"
      ],
      benefits: [
        "Reduce training costs by 60%",
        "Increase learner engagement",
        "Track progress in real-time",
        "Scale to unlimited users"
      ],
      pricing: "Starting from ₹2,00,000",
      href: "/products/lms",
      image: "🎓"
    },
    {
      title: "Enterprise Resource Planning (ERP)",
      description: "Complete business management solution that integrates all core business processes into a unified system.",
      features: [
        "Inventory Management",
        "Financial Management",
        "CRM Integration",
        "HR Management",
        "Supply Chain Management",
        "Project Management",
        "Business Intelligence",
        "Multi-company Support"
      ],
      benefits: [
        "Improve operational efficiency",
        "Real-time business insights",
        "Reduce manual processes",
        "Better decision making"
      ],
      pricing: "Starting from ₹5,00,000",
      href: "/products/erp",
      image: "🏢"
    },
    {
      title: "Billing & Invoice System",
      description: "Automated billing solution with multi-currency support, payment gateway integration, and comprehensive reporting.",
      features: [
        "Automated Invoice Generation",
        "Payment Gateway Integration",
        "Multi-currency Support",
        "Tax Management",
        "Recurring Billing",
        "Customer Portal",
        "Financial Reports",
        "API Integration"
      ],
      benefits: [
        "Reduce billing errors",
        "Faster payment collection",
        "Automated tax calculations",
        "Improved cash flow"
      ],
      pricing: "Starting from ₹1,50,000",
      href: "/products/billing",
      image: "💳"
    }
  ];

  const startupSolutions = [
    { title: "Business Plan Development", description: "Comprehensive business planning and strategy", icon: "📋" },
    { title: "MVP Development", description: "Rapid prototype development for market validation", icon: "🚀" },
    { title: "Market Research", description: "In-depth market analysis and competitor research", icon: "🔍" },
    { title: "Investor Pitch Deck", description: "Professional presentations for funding rounds", icon: "📊" }
  ];

  const growthSolutions = [
    { title: "Digital Marketing", description: "Complete digital marketing strategies", icon: "📱" },
    { title: "SEO Optimization", description: "Search engine optimization for better visibility", icon: "🔍" },
    { title: "Social Media Management", description: "Strategic social media presence building", icon: "📲" },
    { title: "Content Strategy", description: "Content creation and marketing strategies", icon: "✍️" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Our <span className="gradient-text">Products</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Ready-to-deploy software solutions that streamline operations, boost productivity, 
            and drive growth across various industries.
          </p>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Core </span>
              <span className="gradient-text">Products</span>
            </h2>
          </div>

          <div className="space-y-16">
            {products.map((product, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="text-6xl mb-6">{product.image}</div>
                  <h3 className="text-3xl font-bold text-white mb-4">{product.title}</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                    <div className="space-y-2">
                      {product.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-2xl font-bold text-primary mb-6">{product.pricing}</div>
                  
                  <div className="flex gap-4">
                    <Link to={product.href}>
                      <Button className="bg-primary hover:bg-primary/90 text-white">
                        Learn More
                      </Button>
                    </Link>
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                      Request Demo
                    </Button>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                    <h4 className="text-white font-semibold mb-6">Features & Capabilities:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Solutions */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">New Startup</span>
              <span className="text-white"> Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive startup support services to help you launch and scale your business successfully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {startupSolutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-black p-6 rounded-xl border border-gray-800 hover:border-primary transition-colors animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Growth Solutions */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Business Growth</span>
              <span className="text-white"> Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic growth solutions to expand your market reach and accelerate business development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {growthSolutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-primary transition-colors animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in">
            Choose the right product for your needs or let us create a custom solution tailored to your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
