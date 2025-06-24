import { motion } from 'framer-motion';
import { 
  FiCheckCircle, 
  FiClock, 
  FiMail, 
  FiCalendar, 
  FiDollarSign, 
  FiUsers, 
  FiPhone, 
  FiFileText 
} from 'react-icons/fi';

// Replace these with your actual image imports
const hiringHero = '/image/hiring-hero.jpg';
const jobDescriptionImg = '/image/job-description.jpg';
const candidateSourcingImg = '/image/candidate-sourcing.jpg';
const interviewImg = '/image/interview.jpg';
const hiringDecisionImg = '/image/hiring-decision.jpg';
const onboardingImg = '/image/onboarding.jpg';
const hiringProcess = '/image/hiring-process.jpg';
const timeSaving = '/image/time-saving.jpg';

const HiringSupport = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img 
            src={hiringHero} 
            alt="Hiring team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium inline-flex items-center">
              <FiUsers className="mr-2" /> Recruitment Solution
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Smart Hiring. <span className="text-gray-300">Seamless Process.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            We simplify hiring by managing the entire recruitment process—so you can focus on growing your business.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiFileText className="mr-2" /> Get Started
            </motion.button>
            <motion.button 
              className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPhone className="mr-2" /> Contact Us
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
      </section>

      {/* Key Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Our <span className="text-black">Hiring Support</span> Includes
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Job Description Creation",
                description: "We craft compelling job descriptions that attract the right candidates.",
                icon: <FiFileText className="text-3xl" />,
                image: jobDescriptionImg,
                features: [
                  "Keyword optimization for visibility",
                  "Clear role expectations",
                  "Competitive salary benchmarking",
                  "Inclusive language review"
                ]
              },
              {
                title: "Job Posting Assistance",
                description: "Strategic distribution across multiple job platforms.",
                icon: <FiMail className="text-3xl" />,
                image: candidateSourcingImg,
                features: [
                  "Premium job board placements",
                  "Niche platform targeting",
                  "Social media amplification",
                  "ATS-friendly formatting"
                ]
              },
              {
                title: "Candidate Selection",
                description: "Pay only 5% of CTC when you hire the right candidate.",
                icon: <FiUsers className="text-3xl" />,
                image: hiringDecisionImg,
                features: [
                  "No upfront costs",
                  "Only pay for successful hires",
                  "90-day replacement guarantee",
                  "Transparent pricing"
                ]
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -10 }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-black text-white p-3 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-start"
                        whileHover={{ x: 5 }}
                      >
                        <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Our <span className="text-black">5-Step</span> Hiring Process
          </motion.h2>
          
          <div className="relative">
            
            
            <div className="grid md:grid-cols-5 gap-8">
              {[
                {
                  title: "1. Job Briefing",
                  description: "We understand your requirements and company culture",
                  icon: <FiFileText className="text-2xl" />,
                  image: jobDescriptionImg
                },
                {
                  title: "2. Candidate Sourcing",
                  description: "Active search across multiple channels for best matches",
                  icon: <FiUsers className="text-2xl" />,
                  image: candidateSourcingImg
                },
                {
                  title: "3. Screening & Shortlisting",
                  description: "Rigorous evaluation to present only qualified candidates",
                  icon: <FiCheckCircle className="text-2xl" />,
                  image: interviewImg
                },
                {
                  title: "4. Interview Coordination",
                  description: "We handle scheduling and follow-ups with candidates",
                  icon: <FiCalendar className="text-2xl" />,
                  image: hiringDecisionImg
                },
                {
                  title: "5. Offer & Onboarding",
                  description: "Assistance with negotiations and smooth onboarding",
                  icon: <FiDollarSign className="text-2xl" />,
                  image: onboardingImg
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col items-center text-center ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-20'}`}
                >
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center mb-4 relative z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.icon}
                  </motion.div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="h-32 overflow-hidden rounded-lg">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Our <span className="text-black">Hiring Support</span> Stands Out
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We transform your hiring process with expertise and efficiency, delivering results that matter.
              </p>
              
              <div className="space-y-6">
                {[
                  "Pay only 5% of CTC upon successful hiring (industry standard is 15-25%)",
                  "Average 40% reduction in time-to-hire",
                  "90-day replacement guarantee for all placements",
                  "Dedicated recruitment specialist for personalized service",
                  "Access to our premium network of passive candidates"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start bg-gray-50 p-4 rounded-lg"
                    whileHover={{ x: 5 }}
                  >
                    <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="bg-gray-100 p-8 rounded-xl">
                <div className="mb-8">
                  <img 
                    src={hiringProcess} 
                    alt="Hiring process infographic" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                
                <div className="bg-black text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                  <p className="text-gray-300 mb-4">Only pay when you successfully hire</p>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold">5%</span>
                    <span className="text-lg ml-2 mb-1">of candidate's CTC</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full w-1/5"></div>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">Compared to industry average of 15-25%</p>
                </div>
                
                <div className="mt-6">
                  <img 
                    src={timeSaving} 
                    alt="Time savings infographic" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={hiringHero} 
            alt="Team working together" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to <span className="text-gray-300">Transform Your Hiring?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Let us handle your recruitment while you focus on business growth.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiFileText className="mr-2" /> Get Started Now
            </motion.button>
            <motion.button 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPhone className="mr-2" /> Speak With Our Team
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HiringSupport;