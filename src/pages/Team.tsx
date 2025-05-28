
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Team = () => {
  const leadership = [
    {
      name: "Rajesh Pawar",
      position: "Founder & CEO",
      expertise: "Technology Strategy & Business Development",
      experience: "15+ years",
      education: "MBA from IIM Mumbai, B.Tech from IIT Delhi",
      bio: "Visionary leader with extensive experience in technology consulting and business transformation. Has led digital transformation initiatives for Fortune 500 companies.",
      image: "👨‍💼",
      email: "rajesh@pawartech.com",
      phone: "+91 98765 43210",
      specialties: ["Strategic Planning", "Digital Transformation", "Business Development", "Client Relations"]
    },
    {
      name: "Priya Sharma",
      position: "Chief Technology Officer",
      expertise: "Software Architecture & Engineering Management",
      experience: "12+ years",
      education: "M.Tech from IIT Bombay, B.Tech from BITS Pilani",
      bio: "Expert in scalable software architecture with experience at leading tech companies. Passionate about emerging technologies and technical excellence.",
      image: "👩‍💻",
      email: "priya@pawartech.com", 
      phone: "+91 98765 43211",
      specialties: ["Software Architecture", "Cloud Computing", "Team Leadership", "Technical Strategy"]
    }
  ];

  const teamMembers = [
    {
      name: "Amit Kumar",
      position: "Head of Development",
      expertise: "Full Stack Development",
      experience: "8+ years",
      image: "👨‍💻",
      email: "amit@pawartech.com",
      specialties: ["React", "Node.js", "Python", "DevOps"]
    },
    {
      name: "Sneha Patil",
      position: "Design Director",
      expertise: "UI/UX Design",
      experience: "7+ years",
      image: "👩‍🎨",
      email: "sneha@pawartech.com",
      specialties: ["User Experience", "Interface Design", "Design Systems", "Prototyping"]
    },
    {
      name: "Vikram Singh",
      position: "Digital Marketing Head",
      expertise: "Digital Marketing & SEO",
      experience: "6+ years",
      image: "👨‍💼",
      email: "vikram@pawartech.com",
      specialties: ["SEO", "PPC", "Social Media", "Analytics"]
    },
    {
      name: "Anita Desai",
      position: "Project Manager",
      expertise: "Project Management & Client Relations",
      experience: "9+ years",
      image: "👩‍💼",
      email: "anita@pawartech.com",
      specialties: ["Agile", "Scrum", "Client Management", "Quality Assurance"]
    },
    {
      name: "Ravi Patel",
      position: "Senior Developer",
      expertise: "Backend Development",
      experience: "5+ years",
      image: "👨‍💻",
      email: "ravi@pawartech.com",
      specialties: ["Java", "Spring Boot", "Microservices", "Database Design"]
    },
    {
      name: "Kavya Reddy",
      position: "Frontend Developer",
      expertise: "Frontend Development",
      experience: "4+ years",
      image: "👩‍💻",
      email: "kavya@pawartech.com",
      specialties: ["React", "Vue.js", "JavaScript", "CSS"]
    },
    {
      name: "Arjun Mehta",
      position: "DevOps Engineer",
      expertise: "Infrastructure & Deployment",
      experience: "6+ years",
      image: "👨‍🔧",
      email: "arjun@pawartech.com",
      specialties: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      name: "Deepika Joshi",
      position: "QA Engineer",
      expertise: "Quality Assurance & Testing",
      experience: "5+ years",
      image: "👩‍🔬",
      email: "deepika@pawartech.com",
      specialties: ["Automation Testing", "Manual Testing", "Test Strategy", "Bug Tracking"]
    }
  ];

  const departments = [
    { name: "Development", count: 15, icon: "💻" },
    { name: "Design", count: 8, icon: "🎨" },
    { name: "Marketing", count: 6, icon: "📈" },
    { name: "Management", count: 5, icon: "👔" },
    { name: "Quality Assurance", count: 4, icon: "🔍" },
    { name: "DevOps", count: 3, icon: "⚙️" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Meet Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Talented professionals dedicated to delivering exceptional technology solutions. 
            Our diverse team brings together expertise in development, design, marketing, and strategy.
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="gradient-text">Departments</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {departments.map((dept, index) => (
              <div 
                key={index}
                className="bg-black p-6 rounded-xl border border-gray-800 hover:border-primary transition-colors text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{dept.icon}</div>
                <h3 className="text-white font-semibold mb-2">{dept.name}</h3>
                <div className="text-primary font-bold text-2xl">{dept.count}</div>
                <div className="text-gray-400 text-sm">Members</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Leadership</span>
              <span className="text-white"> Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionaries leading Pawar Technology towards innovation and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {leadership.map((leader, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-primary transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="text-center md:text-left">
                    <div className="text-8xl mb-4 mx-auto md:mx-0">{leader.image}</div>
                    <div className="flex flex-col md:flex-row gap-2">
                      <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </Button>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-primary font-semibold text-lg mb-2">{leader.position}</p>
                    <p className="text-gray-400 mb-4">{leader.expertise}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="text-white font-semibold">Experience: </span>
                        <span className="text-gray-300">{leader.experience}</span>
                      </div>
                      <div>
                        <span className="text-white font-semibold">Education: </span>
                        <span className="text-gray-300">{leader.education}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6">{leader.bio}</p>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.specialties.map((specialty, idx) => (
                          <span key={idx} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="gradient-text">Team Members</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Skilled professionals who bring our vision to life through their expertise and dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-black p-6 rounded-2xl border border-gray-800 hover:border-primary transition-colors group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-2">{member.position}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.expertise}</p>
                  <p className="text-gray-500 text-sm mb-6">{member.experience}</p>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-white font-semibold text-sm">Specialties:</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-900 p-12 rounded-2xl border border-gray-800">
            <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in">
              We're always looking for talented individuals who are passionate about technology 
              and want to make a difference. Check out our current openings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                View Open Positions
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
                Send Your Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
