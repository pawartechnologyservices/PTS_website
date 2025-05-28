
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, Calendar, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "EduTech Learning Platform",
      description: "Comprehensive online learning management system for universities",
      status: "In Progress",
      client: "State University",
      technology: "React, Node.js, MongoDB",
      timeline: "6 months",
      image: "🎓",
      progress: 75
    },
    {
      id: 2,
      title: "FinanceFlow ERP",
      description: "Complete financial management system for SMEs",
      status: "In Progress", 
      client: "ABC Corp",
      technology: "Next.js, PostgreSQL, AWS",
      timeline: "8 months",
      image: "💼",
      progress: 60
    },
    {
      id: 3,
      title: "HealthCare Management",
      description: "Patient management and appointment booking system",
      status: "In Progress",
      client: "MediCare Hospital",
      technology: "React, Express, MySQL",
      timeline: "4 months",
      image: "🏥",
      progress: 90
    },
    {
      id: 4,
      title: "E-commerce Marketplace",
      description: "Multi-vendor marketplace with payment integration",
      status: "In Progress",
      client: "RetailMax",
      technology: "Vue.js, Django, Redis",
      timeline: "10 months",
      image: "🛒",
      progress: 45
    },
    {
      id: 5,
      title: "Smart Inventory System",
      description: "AI-powered inventory management for manufacturing",
      status: "In Progress",
      client: "ManufactureInc",
      technology: "React, Python, TensorFlow",
      timeline: "12 months",
      image: "📦",
      progress: 30
    },
    {
      id: 6,
      title: "Real Estate Portal",
      description: "Property listing and management platform",
      status: "In Progress",
      client: "PropertyPro",
      technology: "Angular, .NET, SQL Server",
      timeline: "7 months",
      image: "🏠",
      progress: 80
    },
    {
      id: 7,
      title: "Restaurant Management",
      description: "Order management and POS system for restaurants",
      status: "In Progress",
      client: "FoodChain Ltd",
      technology: "React Native, Firebase",
      timeline: "5 months",
      image: "🍽️",
      progress: 65
    },
    {
      id: 8,
      title: "Transportation Tracker",
      description: "Fleet management and GPS tracking system",
      status: "In Progress",
      client: "LogiTrans",
      technology: "React, Node.js, IoT",
      timeline: "9 months",
      image: "🚛",
      progress: 55
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Our <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Discover our ongoing projects and see how we're transforming businesses 
            across various industries with innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-primary transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="text-5xl mb-4 text-center">{project.image}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-400 text-xs">
                      <Users className="w-3 h-3 mr-2" />
                      {project.client}
                    </div>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Calendar className="w-3 h-3 mr-2" />
                      {project.timeline}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <Link to={`/projects/${project.id}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white text-sm">
                      View Details
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in">
            Join our growing list of satisfied clients and let us bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
