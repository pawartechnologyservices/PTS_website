import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Rocket, Shield, Code, Lightbulb, Briefcase, Zap, Cpu, Lock, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Blog = () => {
  const categories = [
    "All Posts", "Startup Growth", "Tech Insights", "Brand Building", 
    "Cybersecurity", "Development", "Business Strategy"
  ];

  const blogPosts = [
    {
      title: "From Idea to Execution: How PTS Empowers Startups",
      excerpt: "Discover how PTS transforms raw concepts into fully functional, revenue-generating businesses through our 360° startup support solutions.",
      author: "PTS Team",
      date: "June 10, 2024",
      readTime: "8 min read",
      category: "Startup Growth",
      icon: <Rocket className="w-8 h-8 text-primary" />,
      tags: ["Startup", "Entrepreneurship", "Business Launch"]
    },
    {
      title: "Why Every Business Needs Managed IT Services",
      excerpt: "Cybersecurity breaches can paralyze operations overnight. Learn why Managed IT isn't just a service—it's a necessity for modern businesses.",
      author: "PTS Security Team",
      date: "June 5, 2024",
      readTime: "10 min read",
      category: "Cybersecurity",
      icon: <Shield className="w-8 h-8 text-primary" />,
      tags: ["Security", "IT", "Protection"]
    },
    {
      title: "Building Brands That Win: The PTS Development Approach",
      excerpt: "We specialize in building modern, user-first websites and apps that aren't just beautiful—they drive real business results.",
      author: "PTS Dev Team",
      date: "May 28, 2024",
      readTime: "12 min read",
      category: "Development",
      icon: <Code className="w-8 h-8 text-primary" />,
      tags: ["Web Dev", "Branding", "Design"]
    },
    {
      title: "The Complete Guide to Digital Transformation",
      excerpt: "A comprehensive roadmap for businesses looking to embrace digital transformation and modernize their operations effectively.",
      author: "PTS Consultants",
      date: "May 20, 2024",
      readTime: "15 min read",
      category: "Business Strategy",
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      tags: ["Strategy", "Innovation", "Growth"]
    },
    {
      title: "Legal Essentials for Tech Startups",
      excerpt: "Navigating the complex legal landscape of technology businesses - what every founder needs to know from day one.",
      author: "PTS Legal Team",
      date: "May 15, 2024",
      readTime: "9 min read",
      category: "Startup Growth",
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      tags: ["Legal", "Compliance", "Startup"]
    },
    {
      title: "Creating a Winning Brand Identity",
      excerpt: "Your brand is more than a logo - it's your company's personality. Learn how to craft an identity that resonates with your audience.",
      author: "PTS Design Team",
      date: "May 10, 2024",
      readTime: "7 min read",
      category: "Brand Building",
      icon: <Globe className="w-8 h-8 text-primary" />,
      tags: ["Branding", "Design", "Marketing"]
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

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

  return (
    <Layout>
      <Helmet>
        <title>PTS Blog | Insights on Startups, Tech & Business Growth</title>
        <meta name="description" content="Expert insights on startup growth, technology trends, cybersecurity, and digital transformation from the PTS team." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            PTS <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto"
          >
            Expert knowledge on startup growth, technology trends, and business strategy.
            Learn from our team's experience helping hundreds of businesses succeed.
          </motion.p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4 justify-center"
          >
            {categories.map((category, index) => (
              <motion.div key={index} variants={item}>
                <Button 
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-primary" : "border-gray-600 text-gray-300 hover:bg-gray-800"}
                  size="sm"
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-8 text-center"
            >
              Featured Article
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                {featuredPost.icon}
                <span className="text-primary font-semibold text-sm">{featuredPost.category}</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 mt-2">{featuredPost.title}</h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{featuredPost.excerpt}</p>
              
              <div className="flex items-center gap-6 text-gray-400 text-sm mb-6">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {featuredPost.readTime}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {featuredPost.tags.map((tag, idx) => (
                  <span key={idx} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-white">
                Read Full Article
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-800 flex flex-col items-center justify-center h-full"
            >
              <div className="text-8xl mb-6">{featuredPost.emoji}</div>
              <div className="text-center">
                <h4 className="text-white font-semibold mb-2">Startup Success Guide</h4>
                <p className="text-gray-400 text-sm">
                  Get our free checklist for launching your startup successfully
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-8 text-center"
            >
              Latest Articles
            </motion.h2>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {regularPosts.map((post, index) => (
              <motion.article 
                key={index}
                variants={item}
                className="bg-black rounded-2xl border border-gray-800 hover:border-primary transition-colors overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-video bg-gray-800 flex items-center justify-center text-6xl">
                  {post.emoji}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {post.icon}
                    <span className="text-primary font-semibold text-xs">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 group-hover:border-primary">
                    Read More
                  </Button>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Load More Articles
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 p-12 rounded-2xl border border-gray-800 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full filter blur-3xl"></div>
            
            <div className="text-6xl mb-6"></div>
            <h2 className="text-4xl font-bold text-white mb-6 relative z-10">
              Stay Updated with Our Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8 relative z-10">
              Get the latest on startups, technology, and business growth delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-gray-400 text-sm mt-4 relative z-10">
              No spam. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;