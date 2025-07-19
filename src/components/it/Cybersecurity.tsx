import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Cybersecurity() {
  const [activeTab, setActiveTab] = useState('services');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const services = [
    {
      title: "Vulnerability Assessment",
      description: "Complete scanning of your systems to identify weaknesses before attackers do."
    },
    {
      title: "Penetration Testing",
      description: "Simulated attacks to evaluate your app, network, or ERP software's security."
    },
    {
      title: "Web & App Security Audit",
      description: "Full audit of source code, endpoints, server logs, and integrations."
    },
    {
      title: "Firewall Configuration",
      description: "Setting up secure firewalls to prevent unauthorized access."
    },
    {
      title: "Data Encryption & Backup",
      description: "Ensuring your sensitive data is encrypted and safely backed up."
    },
    {
      title: "Secure Hosting Consulting",
      description: "Guide for AWS, Firebase, VPS hardening, etc."
    },
    {
      title: "Cloud Security",
      description: "Protecting your cloud infrastructure with policies and identity controls."
    },
    {
      title: "Ransomware Protection",
      description: "Prevention and restoration plan for ransomware attacks."
    },
    {
      title: "Employee Training",
      description: "Awareness programs to reduce human error-related breaches."
    }
  ];

  const caseStudies = [
    {
      title: "Billing ERP Security Testing",
      client: "PTS Billing",
      scope: "Frontend & backend source code audit, API vulnerability check",
      tools: "OWASP ZAP, Postman",
      findings: "4 critical vulnerabilities (missing rate limiting, exposed API key)",
      fixes: "Added token-based auth, rate limiting, encrypted API",
      result: "Security score improved from C to A+"
    },
    {
      title: "CRM Platform Security Audit",
      client: "PTS CRM",
      scope: "Session hijacking, login brute force, XSS tests",
      tools: "Burp Suite, ZAP, Chrome DevTools",
      findings: "2 XSS, 1 SQLi risk",
      actions: "Sanitized input, added Captcha and JWT auth",
      outcome: "90% risk reduction"
    },
    {
      title: "Client Website Hack Recovery",
      client: "Dharma.in",
      issue: "Defacement and unauthorized admin access",
      steps: "Log review, IP tracing, patching outdated CMS",
      recommendation: "Shift to secure cloud, change passwords regularly",
      status: "Fully recovered and monitored monthly"
    }
  ];

  const tools = [
    "OWASP ZAP, Burp Suite",
    "Nmap, Metasploit",
    "Nessus, Nikto",
    "Wireshark",
    "Shodan",
    "Linux-based testing (Kali Linux)",
    "2FA, SSO, TLS/SSL",
    "Git, Docker (Security Hardening)"
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen bg-gray-900 text-white"
        >
          {/* Banner Section */}
          <div className="relative bg-gradient-to-r from-blue-900 to-black py-20 px-8 overflow-hidden">
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto text-center relative z-10"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">
                Protect What Matters
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-200 mb-8">
                Complete Cybersecurity Solutions
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Defend your business with our advanced penetration testing, vulnerability assessments, and cyber audits.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Request Security Audit
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent hover:bg-blue-800 text-blue-400 font-semibold hover:text-white py-3 px-6 border border-blue-500 hover:border-transparent rounded-lg transition-all duration-300"
                >
                  Get Free Consultation
                </motion.button>
              </div>
            </motion.div>
            <div className="absolute inset-0 overflow-hidden opacity-20">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    opacity: [0.2, 0.8, 0.2]
                  }}
                  transition={{
                    duration: 10 + Math.random() * 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute text-blue-400"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                >
                  {i % 3 === 0 ? "🔒" : i % 3 === 1 ? "🛡️" : "💻"}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-16 px-8 max-w-6xl mx-auto"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              In today's digital world, cybersecurity is not optional — it's essential. At PTS, we offer end-to-end security services to protect your web apps, mobile apps, cloud systems, and enterprise software from threats, breaches, and vulnerabilities.
            </p>
          </motion.section>

          {/* Services Section */}
          <section className="py-16 px-8 bg-gray-800">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-center text-white"
              >
                Services We Offer
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center mr-4">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-400">{service.title}</h3>
                      </div>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Technologies Section */}
          <section className="py-16 px-8 bg-gray-900">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-center text-white"
              >
                Technologies & Tools We Use
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4"
              >
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-gray-800 rounded-full border border-gray-700 text-blue-400 font-medium"
                  >
                    {tool}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Case Studies */}
          <section className="py-16 px-8 bg-gray-800">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-center text-white"
              >
                Case Studies
              </motion.h2>
              
              <div className="space-y-8">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700"
                  >
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-blue-400 mb-2">{study.title} – {study.client}</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Scope</h4>
                          <p className="text-gray-300">{study.scope}</p>
                          
                          <h4 className="text-lg font-semibold text-white mt-4 mb-2">Tools Used</h4>
                          <p className="text-gray-300">{study.tools}</p>
                          
                          {study.findings && (
                            <>
                              <h4 className="text-lg font-semibold text-white mt-4 mb-2">Findings</h4>
                              <p className="text-gray-300">{study.findings}</p>
                            </>
                          )}
                        </div>
                        
                        <div>
                          {study.fixes && (
                            <>
                              <h4 className="text-lg font-semibold text-white mb-2">Fixes</h4>
                              <p className="text-gray-300">{study.fixes}</p>
                            </>
                          )}
                          
                          {study.result && (
                            <>
                              <h4 className="text-lg font-semibold text-white mt-4 mb-2">Result</h4>
                              <p className="text-gray-300">{study.result}</p>
                            </>
                          )}
                          
                          {study.actions && (
                            <>
                              <h4 className="text-lg font-semibold text-white mt-4 mb-2">Actions</h4>
                              <p className="text-gray-300">{study.actions}</p>
                            </>
                          )}
                          
                          {study.outcome && (
                            <>
                              <h4 className="text-lg font-semibold text-white mt-4 mb-2">Outcome</h4>
                              <p className="text-gray-300">{study.outcome}</p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="py-16 px-8 bg-gray-900">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-center text-white"
              >
                Certifications & Standards Followed
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
              >
                {[
                  "ISO/IEC 27001 Compliance",
                  "OWASP Top 10 Security Principles",
                  "GDPR/Privacy Compliance",
                  "NIST Cybersecurity Framework"
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center"
                  >
                    <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-blue-400">{cert}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 px-8 bg-gray-800">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-center text-white"
              >
                Why Choose Us
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  "Real-time Testing Reports",
                  "End-to-end Security Implementation",
                  "24/7 Security Monitoring Support",
                  "Cybersecurity Professionals Certified in CEH"
                ].map((reason, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                  >
                    <div className="flex items-center mb-3">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <h3 className="text-lg font-medium text-white">{reason}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">Our team delivers exceptional results with professional approach.</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="py-16 px-8 bg-gray-900">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-8 border border-gray-700"
              >
                <h2 className="text-3xl font-bold mb-6 text-center text-white">Request a Security Audit</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Company</label>
                      <input
                        type="text"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Website URL</label>
                      <input
                        type="url"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="https://"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Type of Service Needed</label>
                    <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select a service</option>
                      <option>Vulnerability Assessment</option>
                      <option>Penetration Testing</option>
                      <option>Security Audit</option>
                      <option>Firewall Configuration</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300"
                  >
                    Submit Request
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </section>

          {/* Downloads */}
          <section className="py-16 px-8 bg-gray-800">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-center text-white"
              >
                Download Reports & Demos
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-6"
              >
                {[
                  "Download Sample Security Report",
                  "View CRM Security Report PDF",
                  "Case Study: Dharma Hack Recovery PDF"
                ].map((item, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center bg-gray-900 hover:bg-gray-700 border border-gray-700 text-blue-400 font-medium py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                    {item}
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Contact Info */}
          <section className="py-16 px-8 bg-gray-900">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-6 text-white"
              >
                Contact for Cybersecurity
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-gray-300 mb-8"
              >
                Need a security audit for your business website or app?
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-lg text-blue-400">support@pawartechnologyservices.com</span>
                </div>
              </motion.div>
            </div>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}