
import { Button } from "../ui/button";
import { ArrowUp } from "lucide-react";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "E-commerce Platform Transformation",
      client: "RetailPro Inc.",
      industry: "E-commerce",
      problem: "Legacy system with poor performance and user experience",
      solution: "Modern React-based platform with microservices architecture", 
      technology: ["React", "Node.js", "MongoDB", "AWS"],
      results: ["300% increase in conversion rate", "50% reduction in load time", "40% increase in user engagement"],
      image: "🛒"
    },
    {
      title: "Educational Platform Development",
      client: "EduTech Solutions",
      industry: "Education",
      problem: "Need for comprehensive online learning management system",
      solution: "Custom LMS with video streaming and progress tracking",
      technology: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      results: ["10,000+ active students", "95% user satisfaction", "60% cost reduction"],
      image: "📚"
    },
    {
      title: "Healthcare Data Analytics",
      client: "MedCare Systems", 
      industry: "Healthcare",
      problem: "Inefficient patient data management and reporting",
      solution: "AI-powered analytics dashboard with real-time insights",
      technology: ["React", "Python", "TensorFlow", "Azure"],
      results: ["70% faster diagnosis", "30% cost savings", "Improved patient outcomes"],
      image: "🏥"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Case</span>
            <span className="text-white"> Studies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real success stories showcasing how we've helped businesses achieve 
            their digital transformation goals.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="text-6xl mb-4">{study.image}</div>
                <div className="text-primary font-semibold mb-2">{study.industry}</div>
                <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-gray-300 mb-6">{study.client}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Challenge</h4>
                    <p className="text-gray-400">{study.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Solution</h4>
                    <p className="text-gray-400">{study.solution}</p>
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                  <h4 className="text-white font-semibold mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technology.map((tech, idx) => (
                      <span key={idx} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="text-white font-semibold mb-4">Results</h4>
                  <div className="space-y-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <ArrowUp className="w-4 h-4 text-green-500 mr-2 rotate-45" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
          >
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
