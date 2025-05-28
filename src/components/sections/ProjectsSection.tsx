
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const projects = [
    {
      title: "EduTech Learning Platform",
      description: "Comprehensive online learning management system for universities",
      status: "In Progress",
      image: "🎓",
      progress: 75,
      id: 1
    },
    {
      title: "FinanceFlow ERP",
      description: "Complete financial management system for SMEs",
      status: "In Progress",
      image: "💼",
      progress: 60,
      id: 2
    },
    {
      title: "HealthCare Management",
      description: "Patient management and appointment booking system",
      status: "In Progress",
      image: "🏥",
      progress: 90,
      id: 3
    },
    {
      title: "E-commerce Marketplace",
      description: "Multi-vendor marketplace with payment integration",
      status: "In Progress",
      image: "🛒",
      progress: 45,
      id: 4
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our ongoing projects and see how we're transforming businesses 
            across various industries with innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-black p-6 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 text-center">{project.image}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
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
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <Link to="/projects">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
