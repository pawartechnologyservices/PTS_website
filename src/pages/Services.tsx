
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern frameworks, responsive design, and optimal performance.",
      features: [
        "React/Next.js Development",
        "Node.js Backend Services", 
        "Mobile-First Design",
        "SEO Optimization",
        "Performance Optimization",
        "Security Implementation"
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "AWS"],
      startingPrice: "₹50,000",
      icon: "💻"
    },
    {
      title: "Software Development",
      description: "End-to-end custom software solutions tailored to your specific business requirements.",
      features: [
        "Custom Software Architecture",
        "API Development & Integration",
        "Database Design & Optimization",
        "Cloud Infrastructure Setup",
        "Microservices Architecture",
        "DevOps Implementation"
      ],
      technologies: ["Python", "Java", "Docker", "Kubernetes", "PostgreSQL"],
      startingPrice: "₹1,00,000",
      icon: "⚙️"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive growth.",
      features: [
        "Search Engine Optimization",
        "Pay-Per-Click Advertising",
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Email Marketing Campaigns",
        "Analytics & Reporting"
      ],
      technologies: ["Google Ads", "Facebook Ads", "SEMrush", "Google Analytics"],
      startingPrice: "₹25,000/month",
      icon: "📈"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that create engaging and intuitive digital experiences.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "Usability Testing",
        "Design System Creation",
        "Mobile App Design"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
      startingPrice: "₹30,000",
      icon: "🎨"
    },
    {
      title: "Strategy Consulting",
      description: "Technology strategy and digital transformation consulting to accelerate your business growth.",
      features: [
        "Digital Transformation Strategy",
        "Technology Assessment",
        "Process Optimization",
        "Roadmap Planning",
        "Change Management",
        "Performance Metrics"
      ],
      technologies: ["Business Analysis", "Process Mapping", "KPI Tracking"],
      startingPrice: "₹75,000",
      icon: "💡"
    },
    {
      title: "AI & Machine Learning",
      description: "Artificial intelligence and machine learning solutions for intelligent business automation.",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Chatbot Development",
        "Data Analysis & Insights",
        "AI Model Training"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Azure AI"],
      startingPrice: "₹1,50,000",
      icon: "🤖"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-white transition-all duration-300 group animate-scale-in card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl">{service.icon}</div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Starting from</div>
                    <div className="text-2xl font-bold text-white">{service.startingPrice}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-white mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="redblue" className="flex-1">
                    Get Quote
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline" },
              { step: "03", title: "Development", description: "Building your solution with regular updates" },
              { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support" }
            ].map((phase, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white text-black text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in">
            Let's discuss how we can help transform your business with our technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button variant="redblue" size="lg" className="px-8 py-3">
              Get Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
