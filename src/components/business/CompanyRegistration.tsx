import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

// Import images
import llpImage from '/image/llp-registration.jpg';
import proprietorshipImage from '/image/proprietorship-registration.jpg';
import pvtLtdImage from '/image/pvt-ltd-registration.jpeg';

export default function CompanyRegistrationTypes() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
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

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const businessTypes = [
    {
      title: "Limited Liability Partnership (LLP)",
      description: "Ideal for professional services firms and small businesses wanting limited liability with partnership flexibility.",
      features: [
        "Limited liability protection for partners",
        "Flexible profit-sharing structure",
        "Less compliance than private limited",
        "Separate legal entity",
        "Tax benefits of partnership"
      ],
      price: "₹7,999",
      time: "7-10 days",
      image: llpImage,
      bestFor: "Professional firms, small businesses with multiple partners"
    },
    {
      title: "Sole Proprietorship",
      description: "Simplest form for individual entrepreneurs with minimal regulatory requirements.",
      features: [
        "Easiest to start and dissolve",
        "Complete control for owner",
        "No minimum capital requirement",
        "Taxed as individual income",
        "Minimal compliance"
      ],
      price: "₹1,999",
      time: "2-3 days",
      image: proprietorshipImage,
      bestFor: "Individual consultants, small traders, freelancers"
    },
    {
      title: "Private Limited Company",
      description: "Preferred choice for startups and growing businesses needing investment and credibility.",
      features: [
        "Limited liability protection",
        "Easier to raise funds",
        "Separate legal entity",
        "Higher credibility",
        "Transferable ownership"
      ],
      price: "₹14,999",
      time: "10-15 days",
      image: pvtLtdImage,
      bestFor: "Startups, businesses planning to raise funds, scalable ventures"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="relative py-32 px-8 overflow-hidden border-b border-gray-800"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium inline-block">
              Business Registration
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Choose Your <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Business Structure</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-3xl mb-8">
            Selecting the right legal structure is crucial for your business success. We'll guide you through the options to find the perfect fit.
          </motion.p>
        </div>
      </motion.section>

      {/* Business Types Section */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="py-20 px-8 bg-black"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Popular <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Registration Types</span> in India
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessTypes.map((type, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-white transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={type.image} 
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-gray-900/90 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-white font-bold text-lg">{type.price}</span>
                    <span className="text-gray-400 ml-2">(all inclusive)</span>
                  </div>
                  
                  <div className="flex items-center text-gray-400 mb-4">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Processing time: {type.time}</span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-bold mb-2">Best For:</h4>
                    <p className="text-gray-300">{type.bestFor}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-bold mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-200 transition duration-300 mt-4">
                    Register {type.title.split(' ')[0]}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Comparison Section */}
      <motion.section 
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="py-20 px-8 bg-white text-black"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Structure <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">Comparison</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            See how different business structures compare on key parameters
          </motion.p>
          
          <motion.div variants={fadeIn} className="mb-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4">Feature</th>
                    <th className="text-left py-4 px-4">LLP</th>
                    <th className="text-left py-4 px-4">Proprietorship</th>
                    <th className="text-left py-4 px-4">Private Limited</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Legal Status", llp: "Separate Entity", prop: "No Separation", pvt: "Separate Entity" },
                    { feature: "Liability", llp: "Limited", prop: "Unlimited", pvt: "Limited" },
                    { feature: "Min. Members", llp: "2 Partners", prop: "1 Owner", pvt: "2 Shareholders" },
                    { feature: "Compliance", llp: "Moderate", prop: "Minimal", pvt: "High" },
                    { feature: "Tax Rate", llp: "30% + Surcharge", prop: "As per Owner", pvt: "25-30%" },
                    { feature: "Fundraising", llp: "Difficult", prop: "Very Difficult", pvt: "Easier" },
                    { feature: "Credibility", llp: "Good", prop: "Low", pvt: "High" }
                  ].map((row, index) => (
                    <motion.tr 
                      key={index}
                      variants={index % 2 === 0 ? slideInLeft : slideInRight}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="py-4 px-4 font-medium">{row.feature}</td>
                      <td className="py-4 px-4">{row.llp}</td>
                      <td className="py-4 px-4">{row.prop}</td>
                      <td className="py-4 px-4">{row.pvt}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <p className="text-gray-600 mb-6">Still unsure which structure is right for you?</p>
            <button className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition duration-300">
              Get Personalized Advice
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="relative py-32 px-8 overflow-hidden bg-black text-white"
      >
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black opacity-90"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Transparent <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Pricing</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            All-inclusive packages with no hidden costs
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessTypes.map((type, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
                  <div className="text-4xl font-bold mb-4">{type.price}</div>
                  <p className="text-gray-400 mb-6">{type.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    {type.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-200 transition duration-300">
                    Get Started
                  </button>
                </div>
                
                <div className="bg-gray-800 px-8 py-4 border-t border-gray-700">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Processing in {type.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="mt-16 text-center">
            <p className="text-gray-400 mb-6">All prices include government fees, stamp duty, and our service charges</p>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition duration-300">
              Download Complete Pricing PDF
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="py-20 px-8 bg-white text-black"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Registration <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">FAQs</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Answers to common questions about business registration in India
          </motion.p>
          
          <div className="space-y-6">
            {[
              {
                question: "What documents are needed for registration?",
                answer: "Requirements vary by structure but typically include PAN cards, address proofs, identity proofs, and passport photos of directors/partners. For private companies, you'll also need registered office proof and director identification numbers (DIN)."
              },
              {
                question: "How long does the registration process take?",
                answer: "Proprietorship can be completed in 2-3 days, LLP in 7-10 days, and Private Limited in 10-15 days. These timelines depend on document verification and government processing times."
              },
              {
                question: "Can I change my business structure later?",
                answer: "Yes, but conversion between structures involves legal processes. Converting from proprietorship to LLP or private limited requires fresh registration. Planning your structure from the beginning saves time and money."
              },
              {
                question: "What ongoing compliance is required?",
                answer: "Proprietorship has minimal compliance. LLPs need annual filings and tax returns. Private limited companies have the most requirements including annual returns, financial statements, board meetings, and auditor appointments."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="border-b border-gray-200 pb-6"
              >
                <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="relative py-32 px-8 overflow-hidden bg-black text-white"
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 to-black opacity-90"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Register Your Business?</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our experts will handle all the paperwork while you focus on your business
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition duration-300 shadow-lg">
              Start Registration Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-900 transition duration-300">
              Speak with an Expert
            </button>
          </motion.div>
          
          <motion.p variants={fadeInUp} className="text-gray-400 mt-8">
            Call us at <a href="tel:+919876543210" className="underline">+91 98765 43210</a> or email <a href="mailto:registration@pawartechnology.com" className="underline">registration@pawartechnology.com</a>
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}