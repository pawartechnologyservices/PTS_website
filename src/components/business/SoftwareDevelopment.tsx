import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Placeholder images - replace with your actual image paths
import crmImage from '../../assets/LMS.jpg';
import erpImage from '../../assets/ERP.png';
import billingImage from '../../assets/Billing.jpg';
import integrationImage from '../../assets/integration.jpg';
import supportImage from '../../assets/support.jpeg';

const SoftwareSolutions: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const gradientVariants = {
    hidden: { backgroundPosition: '0% 50%' },
    visible: {
      backgroundPosition: '100% 50%',
      transition: {
        duration: 8,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse' as const
      }
    }
  };

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Smart Business Software <span className="whitespace-nowrap">Tailored for Growth</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            We provide expert consultation and development services for CRM, ERP, and Billing
            software tailored to your business needs. Whether you're streamlining operations or
            scaling your business, we ensure you get robust, efficient, and scalable solutions.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <motion.div
              variants={gradientVariants}
              animate={controls}
              className="h-1 bg-gradient-to-r from-gray-800 via-white to-gray-800 bg-[length:200%_auto] mx-auto w-64 rounded-full"
            />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CRM Solution */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-gray-600 transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={crmImage} 
                alt="CRM Solution" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">CRM Solutions</h3>
              <p className="text-gray-300 mb-4">
                Manage leads, customers, and sales pipelines efficiently with our intelligent CRM 
                systems that adapt to your sales process and provide actionable insights.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Lead tracking & scoring
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Customer segmentation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Sales automation
                </li>
              </ul>
            </div>
          </motion.div>

          {/* ERP System */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-gray-600 transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={erpImage} 
                alt="ERP System" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">ERP Systems</h3>
              <p className="text-gray-300 mb-4">
                Integrate all your departments like HR, inventory, and finance in one unified 
                platform that provides real-time visibility across your organization.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Financial management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Inventory control
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  HR & payroll integration
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Billing Software */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-gray-600 transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={billingImage} 
                alt="Billing Software" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Billing Software</h3>
              <p className="text-gray-300 mb-4">
                Generate GST-compliant invoices, track payments, and manage recurring billing 
                with our comprehensive financial management solutions.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Automated invoicing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Tax compliance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Payment tracking
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Customization */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-gray-600 transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={integrationImage} 
                alt="Customization" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Customization & Integration</h3>
              <p className="text-gray-300 mb-4">
                Tailored features to match your unique workflow with seamless integration to 
                your existing tools and third-party applications.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  API integrations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Custom modules
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  White-label solutions
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Training */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-gray-600 transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={supportImage} 
                alt="Training" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Training & Support</h3>
              <p className="text-gray-300 mb-4">
                Hands-on training and ongoing technical support to ensure your team gets 
                maximum value from your software investment.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Onboarding sessions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  24/7 technical support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Regular updates
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Consultation */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-800 to-black rounded-xl overflow-hidden shadow-2xl border border-gray-700"
          >
            <div className="p-8 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Expert Consultation</h3>
              <p className="text-gray-300 mb-6">
                We guide you in choosing and implementing the right software with deep industry
                insights and practical expertise to ensure your digital transformation success.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black font-bold py-3 px-6 rounded-lg self-start"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our solutions are designed to grow with your business, providing the flexibility 
            and scalability you need to stay competitive in today's fast-paced market.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SoftwareSolutions;