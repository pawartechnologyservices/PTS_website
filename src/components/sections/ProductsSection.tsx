import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const products = [
  {
    title: "Customer Relationship Management (CRM)",
    description: "Smart CRM system to manage leads, track interactions, and enhance client relationships with automation and insights.",
    features: ["Lead Tracking", "Sales Automation", "Customer Insights", "Email Integration"],
    image: "https://res.cloudinary.com/dwsrcpjv3/image/upload/v1750249063/LMS_k5r5r3.jpg",
    color: "#00d4ff",
    tag: "AI-Powered"
  },
  {
    title: "Enterprise Resource Planning (ERP)",
    description: "Complete business management solution that integrates all core business processes.",
    features: ["Inventory Management", "Financial Reporting", "CRM Integration", "Analytics"],
    image: "https://res.cloudinary.com/dwsrcpjv3/image/upload/v1750322045/WhatsApp_Image_2025-06-18_at_17.58.48_9ecb3f99_syyzux.jpg",
    color: "#ff0080",
  },
  {
    title: "Billing & Invoice System (BS)",
    description: "Automated billing solution with multi-currency support and payment gateway integration.",
    features: ["Automated Billing", "Payment Gateway", "Tax Management", "Reports"],
    image: "https://res.cloudinary.com/dwsrcpjv3/image/upload/v1750174328/Billing_n3hsu5.jpg",
    color: "#8aff00",
  }
];

const ProductsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  useEffect(() => {
    const closeOnEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden py-24 px-6 lg:px-20">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight">
          Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-700">Products</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">Innovative solutions tailored for future-ready businesses.</p>
      </motion.div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 gap-10 relative z-10">
        {products.map((product, index) => (
          <motion.div
            key={index}
            whileHover={!isMobile && activeIndex === null ? { y: -6, scale: 1.02, rotateX: 2 } : {}}
            className={`relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 group transition-all duration-300 bg-white`}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            layout
          >
            {/* Product Tag */}
            {product.tag && (
              <div
                className="absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full z-20"
                style={{ backgroundColor: product.color + '33', color: product.color }}
              >
                {product.tag}
              </div>
            )}

            {/* Product Image */}
            <div className="relative h-64 overflow-hidden">
              <motion.img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/80 z-10" />
            </div>

            {/* Title and Short Desc */}
            <div className="p-6 relative z-20">
              <h3 className="text-l font-semibold text-black mb-2">{product.title}</h3>
              <p className="text-sm text-gray-500">
                {product.description.slice(0, 60)}... <span className="text-blue-500">see more</span>
              </p>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute inset-0 bg-white/90 backdrop-blur-xl p-6 rounded-3xl z-30 flex flex-col justify-between shadow-2xl"
                >
                  <div>
                    <h4 className="text-2xl font-bold mb-4 text-black">{product.title}</h4>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, i) => (
                        <li key={i} className="text-gray-800 flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: product.color }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <motion.button
                    className="w-full py-3 text-sm font-semibold rounded-xl shadow-md cursor-not-allowed"
                    style={{ backgroundColor: "#e0e0e0", color: "#666" }}
                    disabled
                    whileTap={{ scale: 0.97 }}
                  >
                    Luanching Soon
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Floating Binary Code */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-200 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1,
            }}
            animate={{
              y: [0, Math.random() * 200 - 100],
              opacity: [0.06, 0.2, 0.06],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            {Math.random() > 0.5 ? "10101001" : "01001110"}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
