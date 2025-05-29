
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const values = [
    "Innovation-first approach",
    "Client success priority", 
    "Agile development methodology",
    "Continuous learning culture",
    "Quality assurance standards"
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 scroll-animate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About</span>
            <span className="text-white"> Pawar Technology</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology solutions provider dedicated to empowering businesses 
            with innovative digital transformation strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mission & Vision */}
          <div className="scroll-animate">
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
          <div className="scroll-animate">
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
      </div>
    </section>
  );
};

export default AboutSection;
