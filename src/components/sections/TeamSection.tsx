
import { Button } from "../ui/button";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Rajesh Pawar",
      role: "Founder & CEO",
      image: "👨‍💼",
      description: "Visionary leader with 15+ years in technology"
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      image: "👩‍💻",
      description: "Technical expert specializing in scalable solutions"
    },
    {
      name: "Amit Kumar",
      role: "Lead Developer",
      image: "👨‍💻",
      description: "Full-stack developer with expertise in modern frameworks"
    },
    {
      name: "Sneha Patel",
      role: "UI/UX Designer",
      image: "👩‍🎨",
      description: "Creative designer focused on user experience"
    },
    {
      name: "Vikram Singh",
      role: "Digital Marketing Head",
      image: "👨‍📊",
      description: "Growth hacker with proven track record"
    },
    {
      name: "Kavya Reddy",
      role: "Project Manager",
      image: "👩‍💼",
      description: "Agile expert ensuring timely project delivery"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Meet Our </span>
            <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Talented professionals dedicated to delivering exceptional technology solutions 
            and driving your business success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300 group text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-4">{member.image}</div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <div className="text-primary font-semibold mb-4">{member.role}</div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
          >
            Join Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
