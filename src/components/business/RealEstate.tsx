import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import your images (replace with actual paths)
import officeRentingImg from '/image/office-renting.jpeg';
import loanConsultationImg from '/image/loan-consultation.jpeg';
import bankReferralsImg from '/image/bank-referrals.jpg';
import financialPlanningImg from '/image/financial-planning.jpg';

const RealEstateLoanAssistance = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const services = [
    {
      title: "Office Renting Assistance",
      description: "We streamline your commercial space acquisition with expert guidance",
      image: officeRentingImg,
      details: [
        "Location analysis for optimal business exposure",
        "Lease negotiation with favorable terms",
        "Space planning and layout optimization",
        "Compliance with zoning regulations"
      ],
      icon: "🏢"
    },
    {
      title: "Loan Consultation & Eligibility",
      description: "Personalized financing solutions tailored to your needs",
      image: loanConsultationImg,
      details: [
        "Credit profile assessment",
        "Debt-to-income ratio optimization",
        "Document preparation guidance",
        "Pre-approval process management"
      ],
      icon: "📊"
    },
    {
      title: "Bank/Finance Partner Referrals",
      description: "Access to our network of trusted financial institutions",
      image: bankReferralsImg,
      details: [
        "Competitive rate comparisons",
        "Specialized loan products",
        "Expedited approval processes",
        "Relationship-based pricing"
      ],
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0 opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-900/50 to-transparent"></div>
        </motion.div>
        
        <motion.div 
          className="relative z-10 max-w-6xl mx-auto px-8 text-center text-white"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.3 }
            }
          }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Real Estate & <span className="text-yellow-300">Loan Assistance</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            We help you expand with the right space and funding through expert guidance
          </motion.p>
          
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            <motion.button 
              className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            Our Comprehensive <span className="text-blue-600">Services</span>
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                variants={fadeIn}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white text-blue-600 text-3xl p-3 rounded-lg shadow-md">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-blue-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-start text-gray-700"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="mr-2 text-blue-500">•</span>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    className="mt-4 text-blue-600 font-semibold flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            How We <span className="text-blue-600">Help You</span>
          </motion.h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
            
            <div className="space-y-16 md:space-y-0">
              {[
                {
                  title: "Initial Consultation",
                  description: "We assess your business needs and financial position",
                  icon: "💬",
                  animation: "fadeInLeft"
                },
                {
                  title: "Property & Loan Matching",
                  description: "We identify optimal spaces and financing options",
                  icon: "🔍",
                  animation: "fadeInRight"
                },
                {
                  title: "Documentation & Approval",
                  description: "We guide you through paperwork and approvals",
                  icon: "📑",
                  animation: "fadeInLeft"
                },
                {
                  title: "Finalization & Move-in",
                  description: "We ensure smooth closing and transition",
                  icon: "✅",
                  animation: "fadeInRight"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-16`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="md:w-1/2 p-6">
                    <div className="bg-white p-8 rounded-xl shadow-lg h-full border-l-4 border-blue-500">
                      <div className="text-4xl mb-4">{step.icon}</div>
                      <h3 className="text-2xl font-bold mb-4 text-blue-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 hidden md:flex shadow-lg">
                    {index + 1}
                  </div>
                  
                  <div className="md:w-1/2 p-6">
                    <motion.div 
                      className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl shadow-lg flex items-center justify-center text-white text-6xl"
                      whileHover={{ scale: 1.03 }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-8 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            What Our <span className="text-yellow-300">Clients Say</span>
          </motion.h2>
          
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-blue-800 rounded-xl p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <div className="text-yellow-300 text-4xl mr-4">"</div>
                  <p className="text-xl italic">
                    The team helped us secure the perfect office space with favorable lease terms and connected us with a lender who understood our business needs. Their expertise saved us thousands!
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-700 mr-4 overflow-hidden">
                    <img 
                      src="https://randomuser.me/api/portraits/women/45.jpg" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-blue-200">CEO, TechStart Inc.</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-blue-800 rounded-xl p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <div className="text-yellow-300 text-4xl mr-4">"</div>
                  <p className="text-xl italic">
                    As a small business owner, I was overwhelmed by the commercial real estate process. Their loan consultation simplified everything and got us approved faster than I expected.
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-700 mr-4 overflow-hidden">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Michael Chen</h4>
                    <p className="text-blue-200">Owner, Urban Cafe</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Financial Planning Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
                Strategic <span className="text-blue-600">Financial Planning</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Our financial experts analyze your complete financial picture to create a customized strategy that aligns with your business growth objectives and personal financial goals.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Cash flow analysis and projections",
                  "Tax optimization strategies",
                  "Debt restructuring recommendations",
                  "Investment portfolio alignment",
                  "Risk assessment and mitigation"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="mr-3 text-blue-500">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Financial Services
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img 
                  src={financialPlanningImg} 
                  alt="Financial Planning" 
                  className="rounded-xl shadow-xl w-full h-auto"
                />
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-yellow-400 p-6 rounded-xl shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  <div className="text-3xl">📈</div>
                  <p className="font-bold text-blue-900 mt-2">+87%</p>
                  <p className="text-sm">Client Satisfaction</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-blue-900 text-white">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Space?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let us handle the complex process of securing your commercial property and financing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
            </motion.button>
            <motion.button 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Us Now
            </motion.button>
          </div>
          <p className="mt-8 text-blue-200">
            <span className="font-semibold">Limited time offer:</span> First-time clients receive 15% off our service fees
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default RealEstateLoanAssistance;