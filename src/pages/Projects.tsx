import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ExternalLink, Calendar, Users, Star, MessageSquare, Key, ShieldCheck, Code, Globe } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: "1",
      title: "Delight Properties and Consultant",
      description: "High-performance real estate portal with excellent property showcasing capabilities.",
      status: "Completed",
      client: "Delight Properties",
      technology: "Next.js, Tailwind CSS, Node.js",
      timeline: "3 months",
      image: "/image/brand/Dig.png",
      progress: 100,
      tags: ["Real Estate", "Property Management"],
      rating: 4.8,
      link: "https://delightpropertiesandconsultant.com/",
      category: "web",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: "2",
      title: "Alburaak Fashion",
      description: "Scalable e-commerce platform that handles fashion inventory and transactions seamlessly.",
      status: "Completed",
      client: "Alburaak Fashion",
      technology: "Next.js, Shopify, Stripe",
      timeline: "4 months",
      image: "/image/brand/Al.png",
      progress: 100,
      tags: ["E-commerce", "Fashion Retail"],
      rating: 4.9,
      link: "https://www.alburaakfashion.com/",
      category: "web",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: "3",
      title: "Vistabella Realty",
      description: "Interactive real estate website with property filtering and contact management features.",
      status: "Completed",
      client: "Vistabella Realty",
      technology: "React.js, Firebase, Google Maps API",
      timeline: "2.5 months",
      image: "/image/brand/v.png",
      progress: 100,
      tags: ["Real Estate", "Property Listings"],
      rating: 4.7,
      link: "https://vistabellarealty.in/#contact",
      category: "web",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: "4",
      title: "Celeb Fashion",
      description: "Fast, SEO-optimized fashion e-commerce platform with smooth checkout process.",
      status: "Completed",
      client: "Celeb Fashion",
      technology: "Next.js, MongoDB, Stripe",
      timeline: "3 months",
      image: "/image/brand/c.png",
      progress: 100,
      tags: ["E-commerce", "Fashion"],
      rating: 4.9,
      link: "https://www.celebfashion.in/",
      category: "web",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: "5",
      title: "Edera Facility Solutions",
      description: "Modern facility management portal with service request tracking capabilities.",
      status: "Completed",
      client: "Edera Facility Solutions",
      technology: "Next.js, Node.js, PostgreSQL",
      timeline: "4 months",
      image: "/image/brand/e.png",
      progress: 100,
      tags: ["Facility Management", "Services"],
      rating: 4.6,
      link: "https://edera.in/",
      category: "web",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: "6",
      title: "Zarinova",
      description: "A futuristic, animation-rich event platform that supports booking management.",
      status: "Completed",
      client: "Zarinova Event Management",
      technology: "Next.js, Node.js, PostgreSQL",
      timeline: "4 months",
      image: "/image/brand/Z.png",
      progress: 100,
      tags: ["Events", "Entertainment"],
      rating: 5.0,
      link: "https://www.zarinovaevents.com/gallery",
      category: "web",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: "7",
      title: "Dharma Website Security Audit",
      description: "Full security assessment and UI testing for spiritual NGO website.",
      status: "Completed",
      client: "Dharma Organization",
      technology: "OWASP ZAP, Nikto, Nmap, Postman",
      timeline: "4 weeks",
      image: "https://res.cloudinary.com/defxobnc3/image/upload/v1752490622/Screenshot_656_cufdxm.png",
      progress: 100,
      tags: ["Web Security", "Static Site Audit", "UI Testing"],
      rating: 4.8,
      link: "https://dharmawensite-1.netlify.app/",
      category: "web",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      id: "8",
      title: "CRM Security & QA Testing",
      description: "Full security audit and quality assurance testing for custom CRM software.",
      status: "Completed",
      client: "Confidential (SMB Client)",
      technology: "OWASP ZAP, Burp Suite, Selenium, JMeter",
      timeline: "8 weeks",
      image: "https://res.cloudinary.com/dwsrcpjv3/image/upload/v1750249063/LMS_k5r5r3.jpg",
      progress: 100,
      tags: ["CRM Security", "QA Testing", "OWASP Top 10"],
      rating: 4.8,
      link: null,
      category: "cybersecurity",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      id: "9",
      title: "ERP Software Security Audit",
      description: "Comprehensive cybersecurity assessment and quality assurance testing for custom ERP system.",
      status: "Completed",
      client: "Confidential (Mid-size Indian company)",
      technology: "OWASP ZAP, Burp Suite, Selenium, JMeter, SQLmap",
      timeline: "8 weeks",
      image: "https://res.cloudinary.com/dwsrcpjv3/image/upload/v1750322045/WhatsApp_Image_2025-06-18_at_17.58.48_9ecb3f99_syyzux.jpg",
      progress: 100,
      tags: ["ERP Security", "Penetration Testing", "QA Testing"],
      rating: 4.9,
      link: null,
      category: "cybersecurity",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
       id: "10",
      title: "Billing Software Security Audit",
      description: "Comprehensive cybersecurity assessment and testing for retail billing software.",
      status: "Completed",
      client: "Confidential (Retail Business)",
      technology: "OWASP ZAP, SQLmap, Burp Suite, Selenium",
      timeline: "6 weeks",
      image: "https://res.cloudinary.com/dwsrcpjv3/image/upload/v1750174328/Billing_n3hsu5.jpg",
      progress: 100,
      tags: ["Cybersecurity", "Penetration Testing", "GST Compliance"],
      rating: 4.9,
      link: null,
      category: "cybersecurity",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    }
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    show: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        duration: 0.5,
        ease: "backOut"
      } 
    }
  };

  const hoverCard = {
    rest: { y: 0 },
    hover: { 
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const hoverButton = {
    rest: { x: 0 },
    hover: { x: 4 }
  };

  const progressBar = {
    hidden: { width: 0 },
    visible: (i: number) => ({
      width: `${i}%`,
      transition: {
        duration: 1.5,
        delay: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <Layout>
      {/* Animated Hero Section */}
      <motion.section 
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="pt-32 pb-28 bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:70px_70px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              ease: "easeOut"
            }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Studies</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              ease: "easeOut"
            }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
          >
            Discover our collection of innovative digital solutions that drive business growth and transform user experiences.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8,
              ease: "easeOut"
            }}
            className="mt-12"
          >
          </motion.div>
        </div>

        {/* Floating animated elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-cyan-400/30"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-purple-400/30"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-5 h-5 rounded-full bg-blue-400/30"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </motion.section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-dark.svg')] bg-[length:100px_100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Filter Buttons */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={container}
            className="mb-16 flex flex-wrap justify-center gap-4"
          >
            <motion.div variants={item}>
              <Button
                variant={activeFilter === "all" ? "default" : "outline"}
                className={`rounded-full transition-all ${activeFilter === "all" ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20" : "text-gray-300 border-gray-700 hover:bg-gray-800 hover:text-white"}`}
                onClick={() => setActiveFilter("all")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All Projects
              </Button>
            </motion.div>
            
            <motion.div variants={item}>
              <Button
                variant={activeFilter === "web" ? "default" : "outline"}
                className={`rounded-full transition-all ${activeFilter === "web" ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20" : "text-gray-300 border-gray-700 hover:bg-gray-800 hover:text-white"}`}
                onClick={() => setActiveFilter("web")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="w-4 h-4 mr-2" />
                Web Development
              </Button>
            </motion.div>
            
            <motion.div variants={item}>
              <Button
                variant={activeFilter === "cybersecurity" ? "default" : "outline"}
                className={`rounded-full transition-all ${activeFilter === "cybersecurity" ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20" : "text-gray-300 border-gray-700 hover:bg-gray-800 hover:text-white"}`}
                onClick={() => setActiveFilter("cybersecurity")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShieldCheck className="w-4 h-4 mr-2" />
                Cybersecurity & QA
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={item}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="group relative"
              >
                <motion.div
                  variants={hoverCard}
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
                />
                
                <div className="relative h-full rounded-2xl border overflow-hidden transition-all duration-300 group-hover:border-cyan-400/30 z-10 bg-gray-900 border-gray-800">
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-center mb-6 h-20">
                      {project.image ? (
                        <motion.img 
                          src={project.image} 
                          alt={project.title}
                          className="h-full object-contain"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                      ) : (
                        <motion.div 
                          className="flex items-center justify-center rounded-full h-16 w-16 bg-blue-900/30 text-blue-400"
                          whileHover={{ rotate: 10 }}
                        >
                          {project.icon}
                        </motion.div>
                      )}
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors text-white">
                        {project.title}
                      </h3>
                      
                      <motion.p 
                        className="text-gray-300 text-sm mb-4 leading-relaxed"
                        whileHover={{ color: "#ffffff" }}
                      >
                        {project.description}
                      </motion.p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <motion.span 
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full bg-gray-800 text-cyan-400"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Users className="w-4 h-4 mr-2 text-cyan-400" />
                          {project.client}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                          {project.timeline}
                        </div>
                        {project.rating && (
                          <div className="flex items-center text-gray-400 text-sm">
                            <Star className="w-4 h-4 mr-2 text-yellow-400 fill-yellow-400/20" />
                            {project.rating} Rating
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="mb-4">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                          <motion.div 
                            initial="hidden"
                            animate="visible"
                            custom={project.progress}
                            variants={progressBar}
                            className={`h-full rounded-full ${
                              project.progress === 100 ? 'bg-green-500' : 'bg-gradient-to-r from-cyan-400 to-blue-500'
                            }`}
                          />
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Link to={`/projects/${project.id}`} className="flex-1">
                          <Button 
                            className="w-full text-white text-sm h-10 rounded-lg transition-all group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <motion.span className="flex items-center">
                              View Details
                              <motion.span variants={hoverButton} className="ml-2">
                                <ExternalLink className="w-4 h-4" />
                              </motion.span>
                            </motion.span>
                          </Button>
                        </Link>
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            <Button 
                              variant="outline" 
                              className="w-full text-white hover:bg-gray-800 hover:text-cyan-400 border-gray-700 text-sm h-10 rounded-lg transition-all group"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <motion.span className="flex items-center">
                                Visit Site
                                <motion.span variants={hoverButton} className="ml-2">
                                  <ExternalLink className="w-4 h-4" />
                                </motion.span>
                              </motion.span>
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:100px_100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: 30, label: "Projects Completed", icon: <Code className="w-6 h-6" /> },
              { value: 40, label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
              { value: 10, label: "Industries Served", icon: <Globe className="w-6 h-6" /> },
              { value: 4.8, label: "Average Rating", icon: <Star className="w-6 h-6" /> }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center backdrop-blur-sm hover:border-cyan-400/30 transition-colors"
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4 text-cyan-400">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}{typeof stat.value === 'number' && !Number.isInteger(stat.value) ? '' : '+'}
                  </motion.span>
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-900/50 border-t border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:100px_100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-2xl border border-gray-800 shadow-lg relative overflow-hidden"
          >
            <motion.div 
              className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            
            <div className="flex justify-center mb-6">
              <motion.div 
                className="bg-blue-900/20 text-blue-400 p-4 rounded-full"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <ShieldCheck className="w-8 h-8" />
              </motion.div>
            </div>
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Need Cybersecurity or QA Testing Services?
            </motion.h3>
            <motion.p 
              className="text-gray-300 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Protect your web applications, CRM, ERP, or internal tools from data breaches and bugs with comprehensive security audits and testing.
            </motion.p>
           
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;