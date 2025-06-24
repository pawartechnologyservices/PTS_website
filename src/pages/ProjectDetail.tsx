import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, Code, CheckCircle, ArrowUpRight, Star, Zap, Award, Globe } from "lucide-react";

interface Milestone {
  title: string;
  status: 'completed' | 'in-progress' | 'planned';
  date: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  status: string;
  client: string;
  technology: string;
  timeline: string;
  image: string;
  progress: number;
  tags: string[];
  rating: number;
  link: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Delight Properties and Consultant",
    description: "High-performance real estate portal with excellent property showcasing capabilities.",
    status: "Completed",
    client: "Delight Properties",
    technology: "Next.js, Tailwind CSS, Node.js",
    timeline: "3 months",
    image: "/image/brand/Dig.png",
    progress: 100,
    tags: ["Real Estate", "Property Management"],
    rating: 4.8,
    link: "https://delightpropertiesandconsultant.com/"
  },
  {
    id: "2",
    title: "Alburaak Fashion",
    description: "Scalable e-commerce platform that handles fashion inventory and transactions seamlessly.",
    status: "Completed",
    client: "Alburaak Fashion",
    technology: "Next.js, Shopify, Stripe",
    timeline: "4 months",
    image: "/image/brand/Al.png",
    progress: 100,
    tags: ["E-commerce", "Fashion Retail"],
    rating: 4.9,
    link: "https://www.alburaakfashion.com/"
  },
  {
    id: "3",
    title: "Vistabella Realty",
    description: "Interactive real estate website with property filtering and contact management features.",
    status: "Completed",
    client: "Vistabella Realty",
    technology: "React.js, Firebase, Google Maps API",
    timeline: "2.5 months",
    image: "/image/brand/v.png",
    progress: 100,
    tags: ["Real Estate", "Property Listings"],
    rating: 4.7,
    link: "https://vistabellarealty.in/#contact"
  },
  {
    id: "4",
    title: "Celeb Fashion",
    description: "Fast, SEO-optimized fashion e-commerce platform with smooth checkout process.",
    status: "Completed",
    client: "Celeb Fashion",
    technology: "Next.js, MongoDB, Stripe",
    timeline: "3 months",
    image: "/image/brand/c.png",
    progress: 100,
    tags: ["E-commerce", "Fashion"],
    rating: 4.9,
    link: "https://www.celebfashion.in/"
  },
  {
    id: "5",
    title: "Edera Facility Solutions",
    description: "Modern facility management portal with service request tracking capabilities.",
    status: "Completed",
    client: "Edera Facility Solutions",
    technology: "Next.js, Node.js, PostgreSQL",
    timeline: "4 months",
    image: "/image/brand/e.png",
    progress: 100,
    tags: ["Facility Management", "Services"],
    rating: 4.6,
    link: "https://edera.in/"
  },
  {
    id: "6",
    title: "Zarinova",
    description: "A futuristic, animation-rich event platform that supports booking management.",
    status: "Completed",
    client: "Zarinova Event Management",
    technology: "Next.js, Node.js, PostgreSQL",
    timeline: "4 months",
    image: "/image/brand/Z.png",
    progress: 100,
    tags: ["Events", "Entertainment"],
    rating: 5.0,
    link: "https://www.zarinovaevents.com/gallery"
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <Layout>
        <section className="pt-24 pb-20 bg-gradient-to-r from-indigo-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Project Not Found</h1>
            <p className="text-xl text-gray-200">The project you're looking for doesn't exist.</p>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section 
        className="pt-24 pb-20 relative bg-black"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white animate-fade-in font-serif">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto animate-fade-in animation-delay-200">
              {project.description}
            </p>
            
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">{project.timeline}</div>
              <div className="text-gray-300">Timeline</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">{project.technology.split(',')[0]}</div>
              <div className="text-gray-300">Primary Technology</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">{project.status}</div>
              <div className="text-gray-300">Status</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">{project.rating}/5</div>
              <div className="text-gray-300">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Project Overview */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-indigo-900/50 text-indigo-400">
                    <Award className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-white ml-4">Project Overview</h2>
                </div>
                <p className="text-gray-300">
                  {project.description} The project was delivered on time and within budget, achieving all the client's objectives and receiving excellent feedback.
                </p>
              </div>

              {/* Technology Stack */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-blue-900/50 text-blue-400">
                    <Code className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-white ml-4">Technology Stack</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.technology.split(',').map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 text-sm"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-green-900/50 text-green-400">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-white ml-4">Project Tags</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 rounded-full bg-indigo-900/20 text-indigo-400 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start text-gray-300">
                    <Users className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-indigo-400" />
                    <div>
                      <div className="text-sm text-gray-400">Client</div>
                      <div className="font-medium">{project.client}</div>
                    </div>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <Clock className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-indigo-400" />
                    <div>
                      <div className="text-sm text-gray-400">Timeline</div>
                      <div className="font-medium">{project.timeline}</div>
                    </div>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <Code className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-indigo-400" />
                    <div>
                      <div className="text-sm text-gray-400">Technology</div>
                      <div className="font-medium">{project.technology}</div>
                    </div>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <Star className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-indigo-400" />
                    <div>
                      <div className="text-sm text-gray-400">Client Rating</div>
                      <div className="font-medium flex items-center">
                        {project.rating}/5 
                        <span className="ml-2 text-yellow-400 flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(project.rating) ? 'fill-current' : ''}`}
                            />
                          ))}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Status */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Project Status</h3>
                <div className="flex items-center">
                  <div className="relative w-full bg-gray-700 rounded-full h-4">
                    <div 
                      className="bg-green-500 h-4 rounded-full" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span className="ml-3 text-green-400 font-medium">{project.progress}%</span>
                </div>
                <div className="mt-2 text-sm text-gray-400">
                  {project.status} - {project.timeline}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-indigo-900 to-purple-900 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">Like what you see?</h3>
                <p className="text-gray-300 mb-4">Let's discuss how we can help with your next project.</p>
                <Button className="w-full bg-white text-indigo-900 hover:bg-white/90">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;