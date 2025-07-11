import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Blog = () => {
  const categories = [
    "All Posts", "Product Updates", "Business Growth", "Tech Insights", 
    "Entrepreneurship", "Digital Transformation", "Case Studies"
  ];

  const blogPosts = [
    {
      title: "Introducing Founders Workspace: Your All-in-One Business Platform",
      excerpt: "Discover how Founders Workspace combines CRM, ERP, and Billing into one powerful system to streamline your business operations.",
      author: "PTS Product Team",
      date: "July 1, 2025",
      readTime: "6 min read",
      category: "Product Updates",
      tags: ["New Launch", "Business Tools", "Productivity"]
    },
    {
      title: "Why Modern Businesses Need an Integrated Platform",
      excerpt: "How Founders Workspace solves the challenges of scattered tools and manual processes for growing businesses.",
      author: "PTS Strategy Team",
      date: "June 25, 2025",
      readTime: "8 min read",
      category: "Business Growth",
      tags: ["Efficiency", "Operations", "Management"]
    },
    {
      title: "Inside Founders Workspace: CRM Features Explained",
      excerpt: "A deep dive into the CRM capabilities that help you manage leads, customers, and sales effortlessly.",
      author: "PTS Dev Team",
      date: "June 20, 2025",
      readTime: "10 min read",
      category: "Tech Insights",
      tags: ["CRM", "Sales", "Customer Management"]
    },
    {
      title: "ERP for Small Businesses: How Founders Workspace Makes It Accessible",
      excerpt: "Enterprise-grade resource planning tools now available for startups and growing businesses.",
      author: "PTS Consultants",
      date: "June 15, 2025",
      readTime: "9 min read",
      category: "Entrepreneurship",
      tags: ["ERP", "Operations", "Startups"]
    },
    {
      title: "Streamlining Your Billing Process with Founders Workspace",
      excerpt: "How our integrated billing system saves time and reduces errors for businesses of all sizes.",
      author: "PTS Finance Team",
      date: "June 10, 2025",
      readTime: "7 min read",
      category: "Digital Transformation",
      tags: ["Billing", "Invoicing", "Payments"]
    },
    {
      title: "Case Study: How Founders Workspace Helped a Startup Scale 3X Faster",
      excerpt: "Real-world results from early adopters of our all-in-one business platform.",
      author: "PTS Growth Team",
      date: "June 5, 2025",
      readTime: "12 min read",
      category: "Case Studies",
      tags: ["Success Story", "Growth", "Scaling"]
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
        <title>Founders Workspace Blog | Business Growth & Technology Insights</title>
        <meta name="description" content="Learn about Founders Workspace - the all-in-one business platform by PTS, and get insights on business growth, technology, and entrepreneurship." />
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
            Founders <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Workspace Blogs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto"
          >
            Your all-in-one business platform by PTS - combining CRM, ERP, and Billing into one powerful system.
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
                <span className="text-primary font-semibold text-sm">{featuredPost.category}</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 mt-2">{featuredPost.title}</h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{featuredPost.excerpt}</p>
              
              <div className="flex items-center gap-6 text-gray-400 text-sm mb-6">
                <div className="flex items-center">
                  {featuredPost.author}
                </div>
                <div className="flex items-center">
                  {featuredPost.date}
                </div>
                <div className="flex items-center">
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
              <div className="text-center">
                <h4 className="text-white font-semibold mb-2">Founders Workspace Demo</h4>
                <p className="text-gray-400 text-sm mb-4">
                  See how our all-in-one platform can transform your business operations
                </p>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  Request Free Demo
                </Button>
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

                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-primary font-semibold text-xs">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                    <div className="flex items-center">
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      {post.date}
                    </div>
                    <div className="flex items-center">
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
            
            <h2 className="text-4xl font-bold text-white mb-6 relative z-10">
              Get Founders Workspace Updates
            </h2>
            <p className="text-xl text-gray-300 mb-8 relative z-10">
              Subscribe to receive product news, business tips, and exclusive content about Founders Workspace.
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