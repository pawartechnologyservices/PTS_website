import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Target, MessageSquare, Database, BarChart, Users, Edit, Send, TrendingUp } from "lucide-react";

const LeadSalesGeneration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sales & Lead Generation Services | Your Company";
  }, []);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dwsrcpjv3/image/upload/v1710000000/sales-hero-bg_abc123.jpg"
            alt="Sales team in meeting"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-yellow-400">Lead Flow</span> Into Revenue
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Data-driven lead generation and sales conversion strategies that deliver measurable results. We architect complete sales funnel solutions to consistently fill your pipeline.
            </p>
          
          </motion.div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dwsrcpjv3/image/upload/v1710000000/sales-analytics_xyz456.jpg"
                  alt="Sales analytics dashboard"
                  className="w-full h-auto rounded-lg shadow-2xl border-4 border-black"
                />
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black px-6 py-3 z-20 shadow-xl font-bold">
                  +87% Client Retention
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Scientifically Engineered <span className="bg-black text-white px-2">Sales Growth</span>
              </h2>
              <p className="text-lg mb-8">
                In today's competitive landscape, generic outreach no longer works. Our methodology combines behavioral science, predictive analytics, and conversion psychology to create high-performance lead generation systems.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "AI-powered lead scoring to prioritize hottest prospects",
                  "Omnichannel outreach sequences (email, social, SMS)",
                  "CRM automation and pipeline management",
                  "Conversion rate optimization for each funnel stage",
                  "Weekly performance analytics and strategy refinement"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <div className="bg-black text-yellow-400 p-1 mr-4 mt-1">
                      <Target className="h-4 w-4" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={itemVariants}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-black text-white text-base font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-105"
                >
                  Request Custom Proposal
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Precision Lead Generation Framework</h2>
            <p className="text-xl text-yellow-400">Our multi-dimensional approach targets quality over quantity</p>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Predictive Lead Scoring",
                description: "Machine learning models analyze thousands of data points to identify prospects with highest conversion probability",
                icon: <Target className="h-10 w-10 text-yellow-400" />,
                stats: "2-3x higher conversion rates"
              },
              {
                name: "Account-Based Outreach",
                description: "Hyper-personalized campaigns for high-value accounts with decision-maker mapping",
                icon: <MessageSquare className="h-10 w-10 text-yellow-400" />,
                stats: "47% higher response rates"
              },
              {
                name: "Sales Intelligence",
                description: "Real-time intent data and trigger events to time your outreach perfectly",
                icon: <Database className="h-10 w-10 text-yellow-400" />,
                stats: "3.5x more meetings booked"
              },
              {
                name: "Performance Optimization",
                description: "Continuous A/B testing of messaging, timing, and channels for maximum results",
                icon: <BarChart className="h-10 w-10 text-yellow-400" />,
                stats: "Improve ROI by 20-30% monthly"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-8 rounded-lg border border-gray-700 hover:border-yellow-400 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.name}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <p className="text-yellow-400 font-bold">{feature.stats}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Proven 6-Phase Sales Generation System</h2>
            <p className="text-xl text-gray-600">A structured approach to predictable revenue growth</p>
            <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 h-full w-1 bg-gray-200"></div>
            
            {/* Process steps */}
            {[
              {
                name: "Diagnostic Audit",
                description: "Comprehensive review of your current sales process, lead sources, and conversion metrics",
                icon: <Users className="h-8 w-8 text-white" />,
                duration: "1-2 weeks"
              },
              {
                name: "ICP Development",
                description: "Data-driven ideal customer profile creation with predictive modeling",
                icon: <Edit className="h-8 w-8 text-white" />,
                duration: "2 weeks"
              },
              {
                name: "Channel Strategy",
                description: "Omnichannel campaign architecture tailored to your buyers' journey",
                icon: <Send className="h-8 w-8 text-white" />,
                duration: "1-3 weeks"
              },
              {
                name: "Playbook Creation",
                description: "Custom sales playbooks with messaging frameworks and objection handling",
                icon: <TrendingUp className="h-8 w-8 text-white" />,
                duration: "2 weeks"
              },
              {
                name: "Pilot Execution",
                description: "Controlled campaign launch with real-time monitoring and adjustments",
                icon: <Send className="h-8 w-8 text-white" />,
                duration: "4-6 weeks"
              },
              {
                name: "Scale & Optimize",
                description: "Full rollout with continuous performance enhancement",
                icon: <TrendingUp className="h-8 w-8 text-white" />,
                duration: "Ongoing"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`mb-16 lg:flex lg:items-center lg:justify-between ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-black text-white p-8 rounded-lg shadow-xl relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-4 lg:top-1/2 lg:-translate-y-1/2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold">{index + 1}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="bg-yellow-400 p-2 rounded-full mr-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold">{step.name}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    <div className="text-yellow-400 font-bold">{step.duration}</div>
                  </div>
                </div>
                
                <div className="hidden lg:block lg:w-2/12">
                  {/* Empty spacer for alignment */}
                </div>
                
                <div className="mt-8 lg:mt-0 lg:w-5/12">
                  <img
                    src={`https://res.cloudinary.com/dwsrcpjv3/image/upload/v1710000000/process-step-${index + 1}_abc123.jpg`}
                    alt={step.name}
                    className="w-full h-auto rounded-lg shadow-lg border border-gray-200"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Sales Transformation in Numbers</h2>
            <p className="text-xl text-yellow-400">Measurable impact across industries</p>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "3-5x", label: "Increase in qualified leads" },
              { value: "40-60%", label: "Reduction in CAC" },
              { value: "2.8x", label: "Higher sales productivity" },
              { value: "6-9 months", label: "Average ROI timeframe" },
              { value: "92%", label: "Client retention rate" },
              { value: "300+", label: "Successful campaigns" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-8 text-center rounded-lg border border-gray-700 hover:border-yellow-400 transition-all duration-300"
              >
                <div className="text-5xl font-bold mb-2 text-yellow-400">{stat.value}</div>
                <div className="text-xl">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
            <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "After struggling with inconsistent lead flow for years, their system delivered 428 qualified leads in the first quarter. Our sales team couldn't keep up with the opportunities!",
                author: "Rajiv Mehta",
                company: "SaaS Ventures",
                image: "https://res.cloudinary.com/dwsrcpjv3/image/upload/v1710000000/testimonial-1_abc123.jpg",
                results: "Revenue increased by 320% in 6 months"
              },
              {
                quote: "The predictive lead scoring transformed our outreach efficiency. We went from 5% to 22% conversion rates while actually reducing our sales cycle length by 30%.",
                author: "Neha Gupta",
                company: "FinTech Solutions",
                image: "https://res.cloudinary.com/dwsrcpjv3/image/upload/v1710000000/testimonial-2_abc123.jpg",
                results: "Customer acquisition cost reduced by 58%"
              },
              {
                quote: "Their account-based approach helped us land three enterprise deals worth $2.4M in annual contract value that we would have completely missed otherwise.",
                author: "Amit Patel",
                company: "Enterprise Cloud",
                image: "https://res.cloudinary.com/dwsrcpjv3/image/upload/v1710000000/testimonial-3_abc123.jpg",
                results: "Enterprise deal size increased by 4x"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="font-bold text-black">Key Result:</p>
                  <p>{testimonial.results}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default LeadSalesGeneration;