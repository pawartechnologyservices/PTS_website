import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ProjectsShowcase = () => {
  const projects = [
    {
      id: "1",
      image: "/image/brand/Dig.png",
      name: "Delight Properties and Consultant",
      tagline:
        "The team delivered a high-performance real estate portal with excellent property showcasing capabilities.",
      tags: ["Real Estate", "Property Management"],
      rating: 4.8,
      domain: "Next.js Website",
      launchDate: "Jan 2023",
      results: "Increased leads by 65%",
      link: "https://delightpropertiesandconsultant.com/"
    },
    {
      id: "2",
      image: "/image/brand/Al.png",
      name: "Alburaak Fashion",
      tagline:
        "Built a scalable e-commerce platform that handles our fashion inventory and transactions seamlessly.",
      tags: ["E-commerce", "Fashion Retail"],
      rating: 4.9,
      domain: "Next.js Website",
      launchDate: "Mar 2023",
      results: "35% revenue growth",
      link: "https://www.alburaakfashion.com/"
    },
    {
      id: "3",
      image: "/image/brand/v.png",
      name: "Vistabella Realty",
      tagline:
        "Developed an interactive real estate website with property filtering and contact management features.",
      tags: ["Real Estate", "Property Listings"],
      rating: 4.7,
      domain: "React.js Website",
      launchDate: "Nov 2022",
      results: "Doubled engagement",
      link: "https://vistabellarealty.in/#contact"
    },
    {
      id: "4",
      image: "/image/brand/c.png",
      name: "Celeb Fashion",
      tagline:
        "Created a fast, SEO-optimized fashion e-commerce platform with smooth checkout process.",
      tags: ["E-commerce", "Fashion"],
      rating: 4.9,
      domain: "Next.js Website",
      launchDate: "Aug 2023",
      results: "Reduced bounce rate by 40%",
      link: "https://www.celebfashion.in/"
    },
    {
      id: "5",
      image: "/image/brand/e.png",
      name: "Edera Facility Solutions",
      tagline:
        "Engineered a modern facility management portal with service request tracking capabilities.",
      tags: ["Facility Management", "Services"],
      rating: 4.6,
      domain: "Next.js Website",
      launchDate: "May 2023",
      results: "Streamlined operations",
      link: "https://edera.in/"
    },
    {
      id: "6",
      image: "/image/brand/Z.png",
      name: "Zarinova Event Management",
      tagline:
        "A dynamic event management platform offering seamless booking, portfolio, and customer interaction.",
      tags: ["Events", "Entertainment"],
      rating: 5.0,
      domain: "3D Animated Website",
      launchDate: "Jun 2024",
      results: "Secured 20+ premium event deals",
      link: "https://www.zarinovaevents.com/gallery"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeProject, setActiveProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const visibleProjects = [
    projects[currentIndex % projects.length],
    projects[(currentIndex + 1) % projects.length],
    projects[(currentIndex + 2) % projects.length]
  ];

  const toggleProjectDetails = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <section className="bg-[#1f1f1f] text-white py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-white font-semibold text-xl md:text-2xl tracking-wide mb-5">
          CASE STUDY
        </p>
      </div>

      {/* MOBILE VIEW */}
      {isMobile ? (
        <div className="space-y-6">
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#2b2b2b] border border-[#333] rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-white font-bold text-lg">{project.name}</h3>
                <p className="text-gray-300 text-sm">{project.tagline}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#3a3a3a] px-2 py-1 rounded text-xs text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="text-gray-300 text-xs space-y-1">
                  <li>
                    <strong>Rating:</strong> ⭐ {project.rating}
                  </li>
                  <li>
                    <strong>Platform:</strong> {project.domain}
                  </li>
                  <li>
                    <strong>Launch:</strong> {project.launchDate}
                  </li>
                  <li>
                    <strong>Results:</strong> {project.results}
                  </li>
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-1 bg-[#7b61ff] text-white rounded hover:bg-[#6a52e8] text-sm"
                >
                  View Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        // DESKTOP VIEW
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-8">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-2/5 space-y-4 md:space-y-8">
            {visibleProjects.slice(0, 2).map((project) => (
              <motion.div
                key={project.id}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative group"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="bg-[#2b2b2b] border border-[#333] hover:border-[#7b61ff] transition-all duration-300 rounded-lg overflow-hidden h-full shadow-lg">
                  <div className="relative h-48 md:h-64">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay Content */}
                    <div
                      className={`absolute inset-0 z-20 flex items-center justify-center p-4 bg-black bg-opacity-80 transition-all duration-300 ${
                        activeProject === project.id
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <div className="text-center space-y-2 text-sm md:text-base">
                        <h3 className="text-white font-bold text-lg">
                          {project.name}
                        </h3>
                        <p className="text-gray-300 text-xs md:text-sm">
                          {project.tagline}
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {project.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-[#3a3a3a] px-2 py-1 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <ul className="text-gray-300 text-xs space-y-1">
                          <li>
                            <strong>Rating:</strong> ⭐ {project.rating}
                          </li>
                          <li>
                            <strong>Platform:</strong> {project.domain}
                          </li>
                          <li>
                            <strong>Launch:</strong> {project.launchDate}
                          </li>
                          <li>
                            <strong>Results:</strong> {project.results}
                          </li>
                        </ul>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 px-4 py-1 bg-[#7b61ff] text-white rounded hover:bg-[#6a52e8] text-xs"
                        >
                          View Demo
                        </a>
                      </div>
                    </div>
                    {/* Default Overlay */}
                    {activeProject !== project.id && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-60">
                        <span className="text-white font-semibold text-base">
                          View Case Study
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            key={visibleProjects[2].id}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5 relative mt-4 md:mt-0"
            onMouseEnter={() => setActiveProject(visibleProjects[2].id)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <div className="bg-[#2b2b2b] border border-[#333] hover:border-[#7b61ff] transition-all duration-300 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64 md:h-[32rem]">
                <img
                  src={visibleProjects[2].image}
                  alt={visibleProjects[2].name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay Content */}
                <div
                  className={`absolute inset-0 z-20 flex items-center justify-center p-6 bg-black bg-opacity-80 transition-all duration-300 ${
                    activeProject === visibleProjects[2].id
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <div className="text-center max-w-2xl space-y-3">
                    <h3 className="text-white font-semibold text-xl md:text-3xl">
                      {visibleProjects[2].name}
                    </h3>
                    <p className="text-base md:text-lg text-gray-300">
                      {visibleProjects[2].tagline}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {visibleProjects[2].tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[#3a3a3a] px-3 py-1 rounded-md text-sm md:text-base"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ul className="text-sm md:text-base text-gray-300 space-y-1 md:space-y-2">
                      <li>
                        <strong>Rating:</strong> ⭐ {visibleProjects[2].rating}
                      </li>
                      <li>
                        <strong>Platform:</strong> {visibleProjects[2].domain}
                      </li>
                      <li>
                        <strong>Launch:</strong> {visibleProjects[2].launchDate}
                      </li>
                      <li>
                        <strong>Results:</strong> {visibleProjects[2].results}
                      </li>
                    </ul>
                    <a
                      href={visibleProjects[2].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 text-base md:text-lg font-medium text-white bg-[#7b61ff] rounded hover:bg-[#6a52e8] transition"
                    >
                      View Demo
                    </a>
                  </div>
                </div>
                {/* Default Overlay */}
                {activeProject !== visibleProjects[2].id && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-60">
                    <span className="text-white font-semibold text-xl md:text-2xl">
                      View Case Study
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ProjectsShowcase;
