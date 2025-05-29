
import Layout from "@/components/Layout";
import AboutCharts from "@/components/AboutCharts";
import { CheckCircle, Users, Award, Globe } from "lucide-react";
import { useEffect, useRef } from "react";

const AboutUs = () => {
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

    // Scroll animation observer
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const scrollElements = document.querySelectorAll('.scroll-animate');
    scrollElements.forEach((element) => scrollObserver.observe(element));

    return () => {
      observer.disconnect();
      scrollObserver.disconnect();
    };
  }, []);

  const stats = [
    { icon: Users, label: "Clients Served", value: "500+" },
    { icon: Award, label: "Projects Completed", value: "1000+" },
    { icon: Globe, label: "Countries", value: "15+" },
    { icon: CheckCircle, label: "Success Rate", value: "98%" }
  ];

  const team = [
    { name: "Rajesh Pawar", role: "Founder & CEO", expertise: "Technology Strategy", image: "👨‍💼" },
    { name: "Priya Sharma", role: "CTO", expertise: "Software Architecture", image: "👩‍💻" },
    { name: "Amit Kumar", role: "Head of Development", expertise: "Full Stack Development", image: "👨‍💻" },
    { name: "Sneha Patil", role: "Design Director", expertise: "UI/UX Design", image: "👩‍🎨" },
    { name: "Vikram Singh", role: "Digital Marketing Head", expertise: "Growth Marketing", image: "👨‍📊" },
    { name: "Kavya Reddy", role: "Project Manager", expertise: "Agile Management", image: "👩‍💼" }
  ];

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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg scroll-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            About <span className="gradient-text">Pawar Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            We are innovators, problem-solvers, and technology enthusiasts dedicated to 
            transforming businesses through cutting-edge digital solutions.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-16 bg-gray-900 scroll-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop"
              alt="Team collaboration"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black scroll-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center scroll-animate">
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 bg-gray-900 scroll-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From a small startup to a leading technology company, here's our story of growth and innovation.
            </p>
          </div>

          <div ref={timelineRef}>
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

      {/* Charts Section */}
      <div className="scroll-animate">
        <AboutCharts />
      </div>

      {/* Mission & Vision */}
      <section className="py-20 bg-black scroll-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="scroll-animate">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To democratize technology and make cutting-edge digital solutions accessible 
                to businesses of all sizes, enabling them to compete and thrive in the digital age.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe that every business deserves access to world-class technology solutions 
                that can drive growth, improve efficiency, and create lasting value.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop"
                alt="Mission"
                className="rounded-xl w-full h-64 object-cover mt-6"
              />
            </div>
            
            <div className="scroll-animate">
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To be the global leader in technology innovation, creating solutions that 
                not only solve today's challenges but anticipate tomorrow's opportunities.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We envision a future where technology seamlessly integrates with business processes, 
                creating unprecedented opportunities for growth and innovation.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
                alt="Vision"
                className="rounded-xl w-full h-64 object-cover mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-900 scroll-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Leadership </span>
              <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionaries and experts leading Pawar Technology towards innovation and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-black p-6 rounded-xl border border-gray-800 hover:border-primary transition-colors scroll-animate"
              >
                <div className="text-6xl mb-4 text-center">{member.image}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-black scroll-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="gradient-text">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Innovation", description: "We constantly push boundaries and explore new technologies", icon: "🚀" },
              { title: "Quality", description: "We deliver excellence in every project and maintain high standards", icon: "⭐" },
              { title: "Integrity", description: "We operate with transparency, honesty, and ethical practices", icon: "🤝" },
              { title: "Collaboration", description: "We work closely with clients as partners in their success", icon: "👥" },
              { title: "Growth", description: "We are committed to continuous learning and improvement", icon: "📈" },
              { title: "Impact", description: "We create solutions that make a meaningful difference", icon: "💡" }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-primary transition-colors scroll-animate"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
