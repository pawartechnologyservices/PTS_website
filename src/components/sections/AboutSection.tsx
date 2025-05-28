
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const timeline = [
    { year: "2020", title: "Founded", description: "Started with a vision to transform businesses through technology" },
    { year: "2021", title: "First 100 Clients", description: "Reached milestone of serving 100+ satisfied clients" },
    { year: "2022", title: "Product Launch", description: "Launched our flagship LMS and ERP solutions" },
    { year: "2023", title: "AI Integration", description: "Integrated AI capabilities across all our products" },
    { year: "2024", title: "Global Expansion", description: "Expanded services to international markets" }
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

        {/* Timeline */}
        <div className="animate-fade-in">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-primary transition-colors">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                      <h4 className="text-white font-semibold text-xl mt-2">{item.title}</h4>
                      <p className="text-gray-300 mt-2">{item.description}</p>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-black"></div>
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
