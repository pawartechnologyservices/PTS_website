
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, Code, CheckCircle } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock project data - in real app, this would come from API
  const project = {
    id: parseInt(id || "1"),
    title: "EduTech Learning Platform",
    description: "A comprehensive online learning management system designed specifically for universities and educational institutions.",
    status: "In Progress",
    client: "State University",
    technology: "React, Node.js, MongoDB, AWS",
    timeline: "6 months",
    startDate: "January 2024",
    image: "🎓",
    progress: 75,
    budget: "$150,000",
    teamSize: "8 developers",
    features: [
      "Course Management System",
      "Student Progress Tracking",
      "Video Streaming Platform",
      "Assignment & Grading System",
      "Discussion Forums",
      "Mobile App Support",
      "Analytics Dashboard",
      "Payment Integration"
    ],
    milestones: [
      { title: "Project Planning & Design", status: "completed", date: "Jan 2024" },
      { title: "Backend Development", status: "completed", date: "Feb 2024" },
      { title: "Frontend Development", status: "completed", date: "Mar 2024" },
      { title: "Mobile App Development", status: "in-progress", date: "Apr 2024" },
      { title: "Testing & Quality Assurance", status: "pending", date: "May 2024" },
      { title: "Deployment & Launch", status: "pending", date: "Jun 2024" }
    ],
    challenges: [
      "Implementing scalable video streaming",
      "Creating intuitive user interface",
      "Ensuring mobile responsiveness",
      "Integrating payment systems"
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="text-8xl mb-6">{project.image}</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Details */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  This project involves developing a state-of-the-art learning management system 
                  that will revolutionize how students and educators interact in the digital space. 
                  The platform includes advanced features for course management, student tracking, 
                  and comprehensive analytics.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{project.progress}%</div>
                    <div className="text-gray-400 text-sm">Complete</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{project.teamSize}</div>
                    <div className="text-gray-400 text-sm">Team Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{project.timeline}</div>
                    <div className="text-gray-400 text-sm">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{project.budget}</div>
                    <div className="text-gray-400 text-sm">Budget</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Milestones */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                <h2 className="text-3xl font-bold text-white mb-6">Project Milestones</h2>
                <div className="space-y-4">
                  {project.milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-4 h-4 rounded-full ${
                        milestone.status === 'completed' ? 'bg-green-500' :
                        milestone.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-500'
                      }`}></div>
                      <div className="flex-1">
                        <div className="text-white font-medium">{milestone.title}</div>
                        <div className="text-gray-400 text-sm">{milestone.date}</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs ${
                        milestone.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        milestone.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {milestone.status.replace('-', ' ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Project Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 mr-3" />
                    <div>
                      <div className="text-sm text-gray-400">Client</div>
                      <div>{project.client}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-5 h-5 mr-3" />
                    <div>
                      <div className="text-sm text-gray-400">Start Date</div>
                      <div>{project.startDate}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 mr-3" />
                    <div>
                      <div className="text-sm text-gray-400">Timeline</div>
                      <div>{project.timeline}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Code className="w-5 h-5 mr-3" />
                    <div>
                      <div className="text-sm text-gray-400">Technology</div>
                      <div>{project.technology}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Progress</h3>
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Overall Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-primary h-3 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Contact Project Manager
                  </Button>
                </div>
              </div>

              {/* Challenges */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Technical Challenges</h3>
                <div className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="text-gray-300 text-sm">
                      • {challenge}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
