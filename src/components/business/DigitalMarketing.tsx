import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import images (replace with your actual image paths)
import img from '/image/hero.jpg'
import seoImage from '/image/seo.jpg';
import socialMediaImage from '/image/social-media.jpg';
import contentCalendarImage from '/image/content-calendar.jpg';
import metaAdsImage from '/image/meta-ads.png';
import googleBusinessImage from '/image/google-business.jpg';
import marketingDashboard from '/image/marketing-dashboard.png';
import analyticsImage from '/image/analytics.jpeg';

export default function DigitalMarketing() {
  // Animation controls
  const controls = {
    hero: useAnimation(),
    services: useAnimation(),
    process: useAnimation(),
    results: useAnimation(),
    cta: useAnimation()
  };

  // Intersection observers
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [resultsRef, resultsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.3, triggerOnce: true });

  // Trigger animations when in view
  useEffect(() => {
    if (heroInView) controls.hero.start("visible");
    if (servicesInView) controls.services.start("visible");
    if (processInView) controls.process.start("visible");
    if (resultsInView) controls.results.start("visible");
    if (ctaInView) controls.cta.start("visible");
  }, [heroInView, servicesInView, processInView, resultsInView, ctaInView, controls]);

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

  // Services data
  const services = [
    {
      title: "SEO Optimization",
      description: "Boost your organic search rankings and visibility",
      image: seoImage,
      features: [
        "Keyword research & optimization",
        "Technical SEO audits",
        "Content strategy development",
        "Backlink building"
      ],
      stats: "85%+ Traffic Growth"
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience across platforms",
      image: socialMediaImage,
      features: [
        "LinkedIn, Facebook, Instagram",
        "Content creation & scheduling",
        "Community management",
        "Influencer collaborations"
      ],
      stats: "3-5x Engagement"
    },
    {
      title: "Content Calendar",
      description: "Strategic monthly content planning",
      image: contentCalendarImage,
      features: [
        "Theme-based content strategy",
        "Platform-specific adaptations",
        "Posting schedule optimization",
        "Performance tracking"
      ],
      stats: "50% More Leads"
    },
    {
      title: "Meta Ads Management",
      description: "Targeted Facebook & Instagram campaigns",
      image: metaAdsImage,
      features: [
        "Audience targeting & segmentation",
        "Creative development",
        "A/B testing & optimization",
        "Conversion tracking"
      ],
      stats: "20-35% CTR"
    },
    {
      title: "Google Business Setup",
      description: "Optimize your local search presence",
      image: googleBusinessImage,
      features: [
        "Profile creation & verification",
        "Review management",
        "Local SEO optimization",
        "Posts & updates"
      ],
      stats: "90%+ Visibility"
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven performance insights",
      image: analyticsImage,
      features: [
        "Custom dashboard setup",
        "Monthly performance reports",
        "Conversion tracking",
        "ROI analysis"
      ],
      stats: "Actionable Insights"
    }
  ];

  // Process steps data
  const processSteps = [
    {
      step: "1",
      title: "Discovery & Analysis",
      description: "We analyze your current digital presence and competitors",
      icon: "🔍",
      image: analyticsImage
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Customized plan tailored to your business goals",
      icon: "📈",
      image: marketingDashboard
    },
    {
      step: "3",
      title: "Implementation",
      description: "Execution across all selected channels",
      icon: "🛠️",
      image: socialMediaImage
    },
    {
      step: "4",
      title: "Optimization",
      description: "Continuous testing and improvement",
      icon: "⚡",
      image: seoImage
    }
  ];

  // Results metrics data
  const resultsMetrics = [
    "85% average increase in organic traffic",
    "40% reduction in customer acquisition costs",
    "3-5x higher engagement on social media",
    "90%+ visibility in local searches",
    "20-35% click-through rates on Meta ads"
  ];

  const performanceMetrics = [
    { metric: "Organic Traffic", value: "+85%", bar: "w-[85%]" },
    { metric: "Social Engagement", value: "3.5x", bar: "w-[70%]" },
    { metric: "Lead Conversion", value: "+40%", bar: "w-[40%]" },
    { metric: "Ad Performance", value: "25% CTR", bar: "w-[25%]" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={controls.hero}
        variants={staggerContainer}
        className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img 
            src={img} 
            alt="Digital marketing" 
            className="w-full h-full object-cover opacity-50"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium inline-flex items-center">
              Digital Growth Solutions
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Online Presence</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive digital marketing strategies that increase visibility, attract qualified leads, and drive measurable business growth.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
            <motion.button 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Free Marketing Audit
            </motion.button>
            <motion.button 
              className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Case Studies
            </motion.button>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.section>

      {/* Core Services Section */}
      <motion.section
        ref={servicesRef}
        initial="hidden"
        animate={controls.services}
        variants={staggerContainer}
        className="py-20 px-6 bg-white text-black"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">Core Services</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-start"
                          whileHover={{ x: 5 }}
                        >
                          <span className="mr-2 text-black">•</span>
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold">
                    {service.stats}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        ref={processRef}
        initial="hidden"
        animate={controls.process}
        variants={staggerContainer}
        className="py-20 px-6 bg-black text-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">4-Step Process</span>
          </motion.h2>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-700 transform -translate-x-1/2"></div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className={`flex flex-col items-center text-center ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-20'}`}
                >
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center mb-4 relative z-10 text-2xl"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.icon}
                  </motion.div>
                  <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400 mb-4">{step.description}</p>
                    <div className="h-32 overflow-hidden rounded-lg">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Results Section */}
      <motion.section
        ref={resultsRef}
        initial="hidden"
        animate={controls.results}
        variants={staggerContainer}
        className="py-20 px-6 bg-white text-black"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              variants={fadeInUp}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Measurable <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">Results</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                We deliver transparent, data-driven results that impact your bottom line.
              </p>
              
              <div className="space-y-6">
                {resultsMetrics.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start bg-gray-50 p-4 rounded-lg"
                    whileHover={{ x: 5 }}
                  >
                    <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              variants={scaleUp}
              className="lg:w-1/2 bg-gray-100 p-8 rounded-xl border border-gray-200"
            >
              <div className="mb-8 overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={marketingDashboard} 
                  alt="Marketing dashboard" 
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              
              <div className="bg-black text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Performance Tracking</h3>
                <p className="text-gray-300 mb-4">Real-time insights into your marketing ROI</p>
                
                <div className="space-y-4">
                  {performanceMetrics.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span>{item.metric}</span>
                        <span className="font-bold">{item.value}</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: item.bar }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className="h-full bg-white rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        animate={controls.cta}
        variants={staggerContainer}
        className="relative py-32 px-6 text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={socialMediaImage} 
            alt="Social media marketing" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Grow Online?</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create a digital marketing strategy tailored to your business goals.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
            <motion.button 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Strategy Call
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}