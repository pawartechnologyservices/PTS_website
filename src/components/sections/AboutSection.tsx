
import { CheckCircle } from "lucide-react";
import { useEffect, useRef } from "react";

const AboutSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) {
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
      timelineItems.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  const timeline = [
    { 
      year: "2020", 
      title: "Founded", 
      description: "Started with a vision to transform businesses through technology",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop"
    },
    { 
      year: "2021", 
      title: "First 100 Clients", 
      description: "Reached milestone of serving 100+ satisfied clients",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
    },
    { 
      year: "2022", 
      title: "Product Launch", 
      description: "Launched our flagship LMS and ERP solutions",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop"
    },
    { 
      year: "2023", 
      title: "AI Integration", 
      description: "Integrated AI capabilities across all our products",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
    },
    { 
      year: "2024", 
      title: "Global Expansion", 
      description: "Expanded services to international markets",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
    }
  ];

  const values = [
    "Innovation-first approach",
    "Client success priority", 
    "Agile development methodology",
    "Continuous learning culture",
    "Quality assurance standards"
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About</span>
            <span className="text-white"> Pawar Technology</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology solutions provider dedicated to empowering businesses 
            with innovative digital transformation strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Mission & Vision */}
          <div className="animate-slide-in-left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To democratize technology and make cutting-edge digital solutions accessible 
                  to businesses of all sizes, enabling them to compete and thrive in the digital age.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the global leader in technology innovation, creating solutions that 
                  not only solve today's challenges but anticipate tomorrow's opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-white mb-6">Our Values</h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Timeline with Images */}
        <div className="animate-fade-in" ref={timelineRef}>
          <h3 className="text-3xl font-bold text-center text-white mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary hidden lg:block"></div>
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div key={index} className={`timeline-item scroll-animate flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className="w-full lg:w-5/12">
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary transition-all duration-500 card-hover">
                      <span className="text-primary font-bold text-2xl">{item.year}</span>
                      <h4 className="text-white font-semibold text-xl mt-2 mb-3">{item.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot - Hidden on mobile, shown on lg */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-gray-900 z-10"></div>
                  
                  {/* Image */}
                  <div className="w-full lg:w-5/12">
                    <div className="rounded-xl overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all duration-500">
                      <img 
                        src={item.image}
                        alt={`${item.title} - ${item.year}`}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
