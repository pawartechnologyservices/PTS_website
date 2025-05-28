
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const ProductsSection = () => {
  const products = [
    {
      title: "Learning Management System (LMS)",
      description: "Comprehensive online learning platform with advanced features for educational institutions and corporate training.",
      features: ["Course Management", "Progress Tracking", "Video Streaming", "Assessments"],
      href: "/products/lms",
      image: "🎓"
    },
    {
      title: "Enterprise Resource Planning (ERP)",
      description: "Complete business management solution that integrates all core business processes.",
      features: ["Inventory Management", "Financial Reporting", "CRM Integration", "Analytics"],
      href: "/products/erp", 
      image: "🏢"
    },
    {
      title: "Billing & Invoice System",
      description: "Automated billing solution with multi-currency support and payment gateway integration.",
      features: ["Automated Billing", "Payment Gateway", "Tax Management", "Reports"],
      href: "/products/billing",
      image: "💳"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="gradient-text">Products</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready-to-deploy software solutions that streamline operations and boost productivity 
            across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-black p-8 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300 group animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-6xl mb-6 text-center">{product.image}</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {product.description}
              </p>
              <div className="space-y-2 mb-8">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <Link to={product.href}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Learn More
                  </Button>
                </Link>
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800">
                  Request Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
