
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowUp, Calendar, Globe } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce Platform Transformation",
      client: "RetailPro Inc.",
      industry: "E-commerce",
      duration: "8 months",
      problem: "Legacy system with poor performance, high bounce rates, and declining sales due to outdated technology stack.",
      solution: "Complete platform rebuild using React, Node.js, and microservices architecture with cloud deployment.",
      technology: ["React", "Node.js", "MongoDB", "AWS", "Docker", "Redis"],
      results: [
        "300% increase in conversion rate",
        "50% reduction in page load time",
        "40% increase in user engagement",
        "₹2.5 Cr additional revenue in first 6 months"
      ],
      testimonial: "Pawar Technology completely transformed our business. The new platform not only improved performance but also gave us the scalability we needed for growth.",
      clientName: "Rahul Mehta",
      clientPosition: "CEO, RetailPro Inc.",
      image: "🛒",
      tags: ["Web Development", "E-commerce", "Performance Optimization"]
    },
    {
      title: "Educational Platform Development",
      client: "EduTech Solutions",
      industry: "Education",
      duration: "12 months",
      problem: "Need for comprehensive online learning management system to serve 10,000+ students across multiple courses.",
      solution: "Custom LMS development with video streaming, progress tracking, assessments, and mobile app support.",
      technology: ["Vue.js", "Python", "PostgreSQL", "Docker", "AWS", "FFmpeg"],
      results: [
        "10,000+ active students enrolled",
        "95% user satisfaction rate",
        "60% reduction in operational costs",
        "40% improvement in learning outcomes"
      ],
      testimonial: "The LMS platform has revolutionized our teaching methodology. Students are more engaged and we can track their progress effectively.",
      clientName: "Dr. Priya Sharma",
      clientPosition: "Director, EduTech Solutions",
      image: "📚",
      tags: ["LMS", "Education", "Video Streaming"]
    },
    {
      title: "Healthcare Data Analytics",
      client: "MedCare Systems",
      industry: "Healthcare",
      duration: "10 months",
      problem: "Inefficient patient data management, lack of insights, and manual reporting processes affecting patient care quality.",
      solution: "AI-powered analytics dashboard with real-time patient monitoring, predictive analytics, and automated reporting.",
      technology: ["React", "Python", "TensorFlow", "Azure", "PostgreSQL", "Power BI"],
      results: [
        "70% faster diagnosis processing",
        "30% reduction in operational costs",
        "Improved patient satisfaction by 45%",
        "Real-time monitoring for 500+ patients"
      ],
      testimonial: "The AI-powered system has significantly improved our patient care capabilities and operational efficiency.",
      clientName: "Dr. Amit Patel",
      clientPosition: "CTO, MedCare Systems",
      image: "🏥",
      tags: ["AI/ML", "Healthcare", "Data Analytics"]
    },
    {
      title: "FinTech Mobile Application",
      client: "PayFast Solutions",
      industry: "Financial Technology",
      duration: "6 months",
      problem: "Need for secure, user-friendly mobile payment application with real-time transaction processing.",
      solution: "Native mobile app development with blockchain integration, multi-layer security, and seamless UX design.",
      technology: ["React Native", "Node.js", "Blockchain", "MongoDB", "AWS"],
      results: [
        "100K+ downloads in first 3 months",
        "99.9% transaction success rate",
        "50% faster transaction processing",
        "Bank-grade security implementation"
      ],
      testimonial: "The mobile app exceeded our expectations. The security features and user experience are outstanding.",
      clientName: "Sneha Gupta",
      clientPosition: "Product Manager, PayFast Solutions",
      image: "💰",
      tags: ["Mobile App", "FinTech", "Blockchain"]
    },
    {
      title: "Manufacturing ERP Implementation",
      client: "AutoParts Manufacturing",
      industry: "Manufacturing",
      duration: "14 months",
      problem: "Disconnected systems, inventory management issues, and lack of real-time production visibility.",
      solution: "Complete ERP system implementation with inventory management, production planning, and quality control modules.",
      technology: ["Angular", "Java", "Oracle DB", "Spring Boot", "Jenkins"],
      results: [
        "35% improvement in production efficiency",
        "90% reduction in inventory discrepancies",
        "Real-time visibility across all operations",
        "₹1.2 Cr cost savings annually"
      ],
      testimonial: "The ERP system has streamlined our entire manufacturing process. We now have complete visibility and control.",
      clientName: "Rajesh Kumar",
      clientPosition: "Operations Director, AutoParts Manufacturing",
      image: "🏭",
      tags: ["ERP", "Manufacturing", "Process Optimization"]
    },
    {
      title: "Digital Marketing Campaign",
      client: "FoodieDelight Restaurant Chain",
      industry: "Food & Beverage",
      duration: "4 months",
      problem: "Low online presence, declining footfall, and ineffective traditional marketing strategies.",
      solution: "Comprehensive digital marketing strategy including SEO, social media marketing, and targeted advertising campaigns.",
      technology: ["Google Ads", "Facebook Ads", "Instagram", "SEO Tools", "Analytics"],
      results: [
        "400% increase in online orders",
        "250% growth in social media followers",
        "60% increase in foot traffic",
        "300% ROI on marketing spend"
      ],
      testimonial: "Our online presence has completely transformed. We're reaching customers we never could before.",
      clientName: "Arjun Singh",
      clientPosition: "Marketing Head, FoodieDelight",
      image: "🍕",
      tags: ["Digital Marketing", "SEO", "Social Media"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            <span className="gradient-text">Case</span>
            <span className="text-white"> Studies</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Real success stories showcasing how we've helped businesses achieve their digital transformation goals 
            and drive measurable results.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {["All", "Web Development", "Mobile App", "AI/ML", "ERP", "Digital Marketing"].map((filter, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-primary" : "border-gray-600 text-gray-300 hover:bg-gray-800"}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{study.image}</div>
                    <div>
                      <div className="text-primary font-semibold text-sm">{study.industry}</div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-primary font-semibold mb-6">{study.client}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Challenge</h4>
                      <p className="text-gray-300 leading-relaxed">{study.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2">Solution</h4>
                      <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technology.map((tech, idx) => (
                          <span key={idx} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag, idx) => (
                          <span key={idx} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                    <h4 className="text-white font-semibold mb-6">Key Results</h4>
                    <div className="space-y-4 mb-8">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start">
                          <ArrowUp className="w-5 h-5 text-green-500 mr-3 mt-0.5 rotate-45 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-700 pt-6">
                      <blockquote className="text-gray-300 italic mb-4">
                        "{study.testimonial}"
                      </blockquote>
                      <div>
                        <div className="text-white font-semibold">{study.clientName}</div>
                        <div className="text-primary text-sm">{study.clientPosition}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="gradient-text">Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "₹50+ Cr", label: "Revenue Generated" },
              { number: "15+", label: "Industries Served" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
