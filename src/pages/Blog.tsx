
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users } from "lucide-react";

const Blog = () => {
  const categories = [
    "All Posts", "Industry Insights", "How-to Tutorials", "Company Stories", 
    "Educational", "Marketing & SEO", "Technology Trends"
  ];

  const blogPosts = [
    {
      title: "The Future of AI in Business Automation",
      excerpt: "Explore how artificial intelligence is revolutionizing business processes and what it means for your organization's future.",
      author: "Rajesh Pawar",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Technology Trends",
      image: "🤖",
      tags: ["AI", "Automation", "Business"]
    },
    {
      title: "Complete Guide to Digital Transformation",
      excerpt: "A comprehensive roadmap for businesses looking to embrace digital transformation and modernize their operations.",
      author: "Priya Sharma",
      date: "March 12, 2024",
      readTime: "12 min read",
      category: "Educational",
      image: "🚀",
      tags: ["Digital Transformation", "Strategy", "Technology"]
    },
    {
      title: "Building Scalable Web Applications with React",
      excerpt: "Learn best practices for developing high-performance React applications that can handle millions of users.",
      author: "Amit Kumar",
      date: "March 10, 2024",
      readTime: "10 min read",
      category: "How-to Tutorials",
      image: "⚛️",
      tags: ["React", "Web Development", "Scalability"]
    },
    {
      title: "Our Journey: From Startup to 500+ Clients",
      excerpt: "Reflecting on our company's growth journey and the lessons learned while serving over 500 clients worldwide.",
      author: "Sneha Patil",
      date: "March 8, 2024",
      readTime: "6 min read",
      category: "Company Stories",
      image: "🌟",
      tags: ["Company", "Growth", "Success Story"]
    },
    {
      title: "SEO Strategies That Actually Work in 2024",
      excerpt: "Discover the most effective SEO techniques and strategies that are driving results for businesses in 2024.",
      author: "Vikram Singh",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Marketing & SEO",
      image: "📈",
      tags: ["SEO", "Marketing", "Strategy"]
    },
    {
      title: "Cybersecurity Best Practices for SMEs",
      excerpt: "Essential cybersecurity measures every small and medium enterprise should implement to protect their business.",
      author: "Anita Desai",
      date: "March 3, 2024",
      readTime: "7 min read",
      category: "Industry Insights",
      image: "🛡️",
      tags: ["Cybersecurity", "SME", "Best Practices"]
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Our <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Insights, tutorials, and stories from the world of technology. Stay updated with the latest 
            trends and best practices in digital innovation.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-primary" : "border-gray-600 text-gray-300 hover:bg-gray-800"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Article</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in">
            <div>
              <div className="text-6xl mb-6">{featuredPost.image}</div>
              <span className="text-primary font-semibold text-sm">{featuredPost.category}</span>
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
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center text-6xl mb-6">
                {featuredPost.image}
              </div>
              <div className="text-center">
                <h4 className="text-white font-semibold mb-2">Latest Insights</h4>
                <p className="text-gray-400 text-sm">
                  Stay ahead with our expert insights on technology trends and business innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article 
                key={index}
                className="bg-black rounded-2xl border border-gray-800 hover:border-primary transition-colors overflow-hidden group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gray-800 flex items-center justify-center text-4xl">
                  {post.image}
                </div>
                
                <div className="p-6">
                  <span className="text-primary font-semibold text-sm">{post.category}</span>
                  <h3 className="text-xl font-bold text-white mb-3 mt-2 group-hover:text-primary transition-colors">
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

                  <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800">
                    Read More
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-900 p-12 rounded-2xl border border-gray-800">
            <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in">
              Get the latest insights, tutorials, and industry trends delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-in">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
