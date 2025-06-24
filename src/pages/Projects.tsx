import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, Calendar, Users, Star, ArrowRight, ChevronRight } from "lucide-react";

const Projects = () => {
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
      link: "https://delightpropertiesandconsultant.com/"
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
      link: "https://www.alburaakfashion.com/"
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
      link: "https://vistabellarealty.in/#contact"
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
      link: "https://www.celebfashion.in/"
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
      link: "https://edera.in/"
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
      link: "https://www.zarinovaevents.com/gallery"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } }
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
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
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Studies</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
          >
            Discover our collection of innovative digital solutions that drive business growth and transform user experiences.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
          </motion.div>
        </div>
      
      </motion.section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-950 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-dark.svg')] bg-[length:100px_100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-16 text-center"
          >
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={item}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative h-full bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden transition-all duration-300 group-hover:border-cyan-400/30 z-10">
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-center mb-6 h-20">
                      {project.image.includes('/') ? (
                        <motion.img 
                          src={project.image} 
                          alt={project.title}
                          className="h-full object-contain"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      ) : (
                        <div className="text-5xl">{project.image}</div>
                      )}
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
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
                          <span 
                            key={tag}
                            className="text-xs px-2 py-1 bg-gray-800 text-cyan-400 rounded-full"
                          >
                            {tag}
                          </span>
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
                            initial={{ width: 0 }}
                            animate={{ width: `${project.progress}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className={`h-full rounded-full ${
                              project.progress === 100 ? 'bg-green-500' : 'bg-gradient-to-r from-cyan-400 to-blue-500'
                            }`}
                          ></motion.div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Link to={`/projects/${project.id}`} className="flex-1">
                          <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm h-10 rounded-lg transition-all group">
                            View Details
                            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            <Button variant="outline" className="w-full text-white hover:bg-gray-800 hover:text-cyan-400 border-gray-700 text-sm h-10 rounded-lg transition-all group">
                              Visit Site
                              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <motion.div 
              variants={item}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center backdrop-blur-sm"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                <span className="counter" data-target="50">30</span>+
              </div>
              <p className="text-gray-400">Projects Completed</p>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center backdrop-blur-sm"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                <span className="counter" data-target="100">40</span>+
              </div>
              <p className="text-gray-400">Happy Clients</p>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center backdrop-blur-sm"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                <span className="counter" data-target="15">10</span>+
              </div>
              <p className="text-gray-400">Industries Served</p>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center backdrop-blur-sm"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                <span className="counter" data-target="4.9">4.8</span>
              </div>
              <p className="text-gray-400">Average Rating</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

     
    </Layout>
  );
};

export default Projects;