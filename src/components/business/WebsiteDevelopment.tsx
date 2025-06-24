import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function WebsiteDevelopment() {
  // Animation controls
  const controls = {
    hero: useAnimation(),
    services: useAnimation(),
    process: useAnimation(),
    cta: useAnimation()
  };

  // Intersection observers
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2 });
  const [processRef, processInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.3 });

  // Trigger animations when in view
  useEffect(() => {
    if (heroInView) controls.hero.start("visible");
    if (servicesInView) controls.services.start("visible");
    if (processInView) controls.process.start("visible");
    if (ctaInView) controls.cta.start("visible");
  }, [heroInView, servicesInView, processInView, ctaInView]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  const services = [
    {
      title: "Static Website",
      description: "Fast-loading, secure websites perfect for businesses needing a simple online presence. Ideal for portfolios, brochures, and small business sites.",
      features: [
        "Lightning fast performance",
        "Lower hosting costs",
        "Enhanced security",
        "SEO optimized",
        "Easy to maintain"
      ],
     
      image: "https://res.cloudinary.com/dkpducjzm/image/upload/v1750078799/static-website-design-in-delhi-at-best-price_iupxhh.png",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Dynamic Website",
      description: "Interactive websites with database functionality, user accounts, and personalized content. Perfect for businesses that need more than just informational pages.",
      features: [
        "Database-driven content",
        "User authentication",
        "Content management system",
        "Real-time updates",
        "Custom functionality"
      ],
      image: "https://res.cloudinary.com/dkpducjzm/image/upload/v1750079358/dynamic-web-design_mf5wa0.webp",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "E-Commerce Website",
      description: "Complete online stores with product catalogs, shopping carts, and secure payment processing. Everything you need to sell online.",
      features: [
        "Product management",
        "Secure checkout",
        "Payment gateway integration",
        "Inventory tracking",
        "Order management"
      ],
      image: "https://res.cloudinary.com/dkpducjzm/image/upload/v1750079447/shopping-with-technological-devices_23-2147654122_mxddrn.avif",
      color: "from-green-500 to-green-700"
    },
    {
      title: "Custom Web Application",
      description: "Tailored solutions for unique business needs. Web apps that streamline operations, automate processes, and solve specific challenges.",
      features: [
        "Custom functionality",
        "API integrations",
        "Scalable architecture",
        "User role management",
        "Business process automation"
      ],
      icon: "🛠️",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "from-orange-500 to-orange-700"
    }
  ];

  const processSteps = [
    {
      title: "Discovery",
      description: "We conduct in-depth research to understand your business, target audience, and project requirements.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Planning",
      description: "We create detailed wireframes, sitemaps, and technical specifications for your project.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Design",
      description: "Our designers create beautiful, user-friendly interfaces that reflect your brand identity.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Development",
      description: "Our developers build your website or application using the latest technologies and best practices.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Testing",
      description: "We rigorously test all functionality across devices and browsers to ensure flawless performance.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Launch",
      description: "We deploy your solution, provide training, and offer ongoing support for your digital product.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={controls.hero}
        variants={staggerContainer}
        className="relative py-32 px-8 bg-gradient-to-b from-gray-900 to-black overflow-hidden border-b border-gray-800"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-white blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium inline-block">
              Website & App Development
            </span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Web Solutions</span> <br />For Your Business
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-3xl">
            From simple static sites to complex web applications, we build digital solutions that help your business grow and succeed online.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition duration-300">
              Get Free Quote
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition duration-300">
              See Our Work
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        ref={servicesRef}
        initial="hidden"
        animate={controls.services}
        variants={staggerContainer}
        className="py-20 px-8 bg-black text-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Our <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Development Services</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
            We specialize in building different types of websites and applications to meet your specific business needs.
          </motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-70`}></div>
                  <div className="absolute top-4 left-4 text-5xl">{service.icon}</div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-white mr-2 mt-1">•</span>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section - Redesigned */}
      <motion.section
        ref={processRef}
        initial="hidden"
        animate={controls.process}
        variants={staggerContainer}
        className="py-20 px-8 bg-white text-black"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">Development Journey</span>
          </motion.h2>
          
          <motion.div variants={fadeInUp} className="mb-16 text-center max-w-3xl mx-auto">
            <p className="text-xl text-gray-700">
              We follow a meticulous 6-step process to ensure your project is delivered on time, on budget, and exceeds your expectations.
            </p>
          </motion.div>

          <div className="relative">
            {/* Horizontal line for desktop */}
            
            {/* Vertical line for mobile */}
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  variants={scaleUp}
                  className="flex flex-col items-center"
                >
                  <div className="relative mb-4 w-full max-w-xs">
                    <div className="aspect-square overflow-hidden rounded-xl border-4 border-black shadow-lg">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -top-4 -right-4 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="text-center px-4">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            variants={fadeInUp}
            className="mt-16 bg-black text-white p-8 rounded-xl"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Why Our Process Works</h3>
              <p className="text-gray-300 mb-6">
                Our structured approach ensures no detail is overlooked. At each stage, we provide deliverables for your review and approval, keeping you informed and involved throughout the entire process.
              </p>
              <button className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition duration-300">
                Download Process PDF
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        animate={controls.cta}
        variants={staggerContainer}
        className="py-32 px-8 bg-black text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Website?</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you need a simple static site or a complex web application, we can help bring your vision to life.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition duration-300 shadow-lg">
              Start Your Project
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-900 transition duration-300">
              Contact Our Team
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}