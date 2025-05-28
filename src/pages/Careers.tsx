
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, DollarSign, CheckCircle } from "lucide-react";

const Careers = () => {
  const openings = [
    {
      title: "Assistant Project Manager",
      department: "Management",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹6-10 LPA",
      description: "We're looking for an experienced Assistant Project Manager to help coordinate and manage our client projects. You'll work closely with our development teams and clients to ensure successful project delivery.",
      responsibilities: [
        "Coordinate project activities and manage timelines",
        "Communicate with clients and stakeholders",
        "Track project progress and ensure quality delivery",
        "Manage project documentation and reporting",
        "Support senior project managers in strategic planning"
      ],
      requirements: [
        "Bachelor's degree in Engineering or Management",
        "2-4 years of project management experience",
        "Strong communication and organizational skills",
        "Experience with project management tools",
        "Understanding of software development lifecycle"
      ],
      skills: ["Project Management", "Communication", "Leadership", "Agile/Scrum"]
    },
    {
      title: "Digital Marketing Assistant",
      department: "Marketing",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "1-2 years",
      salary: "₹3-5 LPA",
      description: "Join our marketing team to help grow our digital presence and drive lead generation. You'll work on various digital marketing campaigns and learn from experienced professionals.",
      responsibilities: [
        "Execute digital marketing campaigns across multiple channels",
        "Create and curate content for social media platforms",
        "Assist with SEO and SEM activities",
        "Monitor and report on campaign performance",
        "Support email marketing and lead nurturing campaigns"
      ],
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "1-2 years of digital marketing experience",
        "Knowledge of social media platforms and tools",
        "Basic understanding of SEO and Google Analytics",
        "Creative mindset with attention to detail"
      ],
      skills: ["Digital Marketing", "SEO", "Social Media", "Content Creation", "Analytics"]
    },
    {
      title: "Full Stack Developer",
      department: "Development",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹8-15 LPA",
      description: "We're seeking a talented Full Stack Developer to join our development team. You'll work on exciting projects using modern technologies and contribute to building scalable web applications.",
      responsibilities: [
        "Develop and maintain web applications using React and Node.js",
        "Design and implement RESTful APIs",
        "Work with databases and ensure optimal performance",
        "Collaborate with designers and other developers",
        "Write clean, maintainable, and testable code"
      ],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3-5 years of web development experience",
        "Proficiency in React, Node.js, and JavaScript",
        "Experience with databases (MongoDB, PostgreSQL)",
        "Understanding of version control systems (Git)"
      ],
      skills: ["React", "Node.js", "JavaScript", "MongoDB", "RESTful APIs"]
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹5-9 LPA",
      description: "Join our design team to create beautiful and user-friendly interfaces for our clients. You'll work on diverse projects and help shape the digital experiences of various businesses.",
      responsibilities: [
        "Create wireframes, prototypes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Collaborate with developers to ensure design implementation",
        "Maintain design systems and style guides",
        "Present design concepts to clients and stakeholders"
      ],
      requirements: [
        "Bachelor's degree in Design or related field",
        "2-4 years of UI/UX design experience",
        "Proficiency in Figma, Adobe XD, or Sketch",
        "Strong understanding of user-centered design principles",
        "Portfolio showcasing web and mobile design work"
      ],
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"]
    }
  ];

  const benefits = [
    "Competitive salary and performance bonuses",
    "Health insurance for you and your family",
    "Flexible working hours and remote work options",
    "Professional development and training opportunities",
    "Modern office with latest technology",
    "Team outings and company events",
    "Career growth opportunities",
    "Mentorship programs"
  ];

  const cultureValues = [
    {
      icon: "🚀",
      title: "Innovation",
      description: "We encourage creative thinking and innovative solutions"
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Teamwork and open communication are at our core"
    },
    {
      icon: "📈",
      title: "Growth",
      description: "Continuous learning and professional development"
    },
    {
      icon: "⚖️",
      title: "Work-Life Balance",
      description: "We believe in maintaining a healthy work-life balance"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Join Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Build the future of technology with us. We're looking for passionate individuals 
            who want to make a difference and grow their careers in a dynamic environment.
          </p>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Current </span>
              <span className="gradient-text">Openings</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore exciting career opportunities and find the perfect role to advance your career.
            </p>
          </div>

          <div className="space-y-8">
            {openings.map((job, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-primary transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                      <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                        {job.department}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm mb-6">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {job.experience}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-2" />
                        {job.salary}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Key Responsibilities:</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.slice(0, 3).map((resp, idx) => (
                            <li key={idx} className="flex items-start text-gray-300 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.slice(0, 3).map((req, idx) => (
                            <li key={idx} className="flex items-start text-gray-300 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-white font-semibold mb-3">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, idx) => (
                          <span key={idx} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="bg-black p-6 rounded-xl border border-gray-800 mb-6">
                      <h4 className="text-white font-semibold mb-4">Quick Facts</h4>
                      <div className="space-y-3">
                        <div>
                          <span className="text-gray-400 text-sm">Department:</span>
                          <div className="text-white">{job.department}</div>
                        </div>
                        <div>
                          <span className="text-gray-400 text-sm">Experience:</span>
                          <div className="text-white">{job.experience}</div>
                        </div>
                        <div>
                          <span className="text-gray-400 text-sm">Salary Range:</span>
                          <div className="text-primary font-semibold">{job.salary}</div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="gradient-text">Culture</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We foster a culture of innovation, collaboration, and continuous growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <div 
                key={index}
                className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-primary transition-colors text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-white mb-8">
                Why Work <span className="gradient-text">With Us?</span>
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">Join Our Growing Team</h3>
                <div className="space-y-6">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Team Size</span>
                    <span className="text-white font-semibold">50+ Professionals</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Average Experience</span>
                    <span className="text-white font-semibold">5+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Employee Satisfaction</span>
                    <span className="text-green-500 font-semibold">96%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Growth Rate</span>
                    <span className="text-primary font-semibold">200% YoY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Application </span>
              <span className="gradient-text">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Apply Online", description: "Submit your application and resume" },
              { step: "02", title: "Initial Screening", description: "HR team reviews your profile" },
              { step: "03", title: "Technical Interview", description: "Technical assessment with our experts" },
              { step: "04", title: "Final Interview", description: "Culture fit and final discussion" }
            ].map((phase, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-primary text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in">
            Don't see a perfect match? Send us your resume anyway. We're always looking for talented individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              Send Resume
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
              Contact HR
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
