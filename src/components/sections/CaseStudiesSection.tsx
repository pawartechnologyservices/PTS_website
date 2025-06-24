import { motion } from 'framer-motion';
import { Button } from "../ui/button";
import { ArrowUpRight, Rocket, Shield, Code } from "lucide-react";
import { Link } from 'react-router-dom';

const CaseStudiesSection = () => {
  const blogPosts = [
    {
      title: "From Idea to Execution: How PTS Empowers Startups",
      excerpt: "Discover how PTS transforms raw concepts into fully functional, revenue-generating businesses through our 360° startup support solutions.",
      author: "PTS Team",
      date: "June 10, 2024",
      readTime: "8 min read",
      category: "Startup Growth",
      icon: <Rocket className="w-8 h-8 text-primary" />,
      emoji: "🚀",
      tags: ["Startup", "Entrepreneurship", "Business Launch"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Why Every Business Needs Managed IT Services",
      excerpt: "Cybersecurity breaches can paralyze operations overnight. Learn why Managed IT isn't just a service—it's a necessity for modern businesses.",
      author: "PTS Security Team",
      date: "June 5, 2024",
      readTime: "10 min read",
      category: "Cybersecurity",
      icon: <Shield className="w-8 h-8 text-primary" />,
      emoji: "🛡️",
      tags: ["Security", "IT", "Protection"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Building Brands That Win: The PTS Development Approach",
      excerpt: "We specialize in building modern, user-first websites and apps that aren't just beautiful—they drive real business results.",
      author: "PTS Dev Team",
      date: "May 28, 2024",
      readTime: "12 min read",
      category: "Development",
      icon: <Code className="w-8 h-8 text-primary" />,
      emoji: "💻",
      tags: ["Web Dev", "Branding", "Design"],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Latest <span className="text-black">Blog's</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our latest articles and case studies on technology, business growth, and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
             
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">• {post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-800 text-xs px-2.5 py-0.5 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full p-2 mr-3">
                      {post.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <Link to={`/blog`}>
                    <Button variant="ghost" className="text-black hover:text-white">
                      Read more
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/blog">
            <Button 
              size="lg"
              className="bg-white hover:bg-white text-black px-8 py-3 group"
            >
              View All Articles
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;