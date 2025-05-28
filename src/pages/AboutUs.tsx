
import Layout from "@/components/Layout";
import AboutCharts from "@/components/AboutCharts";
import { CheckCircle, Users, Award, Globe } from "lucide-react";

const AboutUs = () => {
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            About <span className="gradient-text">Pawar Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            We are innovators, problem-solvers, and technology enthusiasts dedicated to 
            transforming businesses through cutting-edge digital solutions.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop"
              alt="Team collaboration"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <AboutCharts />

      {/* Mission & Vision */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
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
            
            <div className="animate-slide-in-right">
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
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
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
                className="bg-black p-6 rounded-xl border border-gray-800 hover:border-primary transition-colors animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
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
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
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
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-primary transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
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
