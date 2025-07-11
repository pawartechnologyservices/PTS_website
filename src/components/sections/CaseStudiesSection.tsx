import { motion } from 'framer-motion';
import { Button } from "../ui/button";
import { ArrowUpRight, Rocket, Users, PieChart } from "lucide-react";
import { Link } from 'react-router-dom';

const CaseStudiesSection = () => {
  const blogPosts = [
    {
      title: "Introducing Founders Workspace - Your All-in-One Business Platform",
      excerpt: "Discover how Founders Workspace helps entrepreneurs manage operations, clients, sales, and billing from one powerful dashboard.",
      author: "PTS Team",
      date: "July 1, 2025",
      readTime: "5 min read",
      category: "Business Platform",
      icon: <Rocket className="w-8 h-8 text-primary" />,
      emoji: "🚀",
      tags: ["Startup", "CRM", "Productivity"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Why Your Business Needs an All-in-One Solution",
      excerpt: "Learn how Founders Workspace eliminates scattered spreadsheets and disconnected tools with its integrated CRM, ERP and billing system.",
      author: "PTS Product Team",
      date: "June 25, 2025",
      readTime: "8 min read",
      category: "Business Growth",
      icon: <PieChart className="w-8 h-8 text-primary" />,
      emoji: "📊",
      tags: ["ERP", "Automation", "Efficiency"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Streamline Your Business Operations with Founders Workspace",
      excerpt: "See how our platform helps you manage leads, track payments, and grow your client base with smart analytics and reports.",
      author: "PTS Solutions Team",
      date: "June 18, 2025",
      readTime: "6 min read",
      category: "Operations",
      icon: <Users className="w-8 h-8 text-primary" />,
      emoji: "👥",
      tags: ["Management", "Productivity", "Tools"],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
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
            Latest <span className="text-black">Insights</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how Founders Workspace can transform your business operations and growth.
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