import { motion } from "framer-motion";

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

  return (
    <section className="bg-[#1f1f1f] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-white font-semibold  text-2xl tracking-wide mb-5 -mt-5">CASE STUDY</p>
        <h2 className="text-4xl font-bold mb-4">Our Intensive Works Till<br />The Date</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Any business can hire Coderlytics on a contractual basis. For software development services in your area, get in touch with us
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.02 }}
            className="bg-[#2b2b2b] border border-[#333] hover:border-[#7b61ff] transition-all duration-300 rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">{project.name}</h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-3">{project.tagline}</p>

                <div className="flex flex-wrap gap-2 text-xs text-white mb-3">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-[#3a3a3a] px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="text-xs text-gray-400 space-y-1 mb-4">
                  <li><strong>Rating:</strong> ⭐ {project.rating}</li>
                  <li><strong>Platform:</strong> {project.domain}</li>
                  <li><strong>Launch:</strong> {project.launchDate}</li>
                  <li><strong>Results:</strong> {project.results}</li>
                </ul>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center mt-4 px-4 py-2 text-sm font-medium text-white bg-[#7b61ff] rounded hover:bg-[#6a52e8] transition"
              >
                View Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsShowcase;
