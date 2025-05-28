
import { Button } from "../ui/button";
import { ArrowUp } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and responsive design.",
      features: ["React/Next.js", "Node.js Backend", "Mobile Responsive", "SEO Optimized"],
      icon: "💻"
    },
    {
      title: "Software Development", 
      description: "End-to-end software solutions tailored to your business requirements.",
      features: ["Custom Software", "API Development", "Database Design", "Cloud Integration"],
      icon: "⚙️"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence.",
      features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"],
      icon: "📈"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that creates engaging and intuitive experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      icon: "🎨"
    },
    {
      title: "Strategy Consulting",
      description: "Technology strategy and digital transformation consulting services.",
      features: ["Digital Strategy", "Process Optimization", "Technology Audit", "Roadmap Planning"],
      icon: "💡"
    },
    {
      title: "AI Solutions",
      description: "Artificial intelligence and machine learning solutions for business automation.",
      features: ["Machine Learning", "Data Analytics", "Automation", "Predictive Models"],
      icon: "🤖"
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300 hover:transform hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-400 flex items-center">
                    <ArrowUp className="w-4 h-4 text-primary mr-2 rotate-45" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
