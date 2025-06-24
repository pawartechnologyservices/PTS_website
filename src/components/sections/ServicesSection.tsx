import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ServicesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  const services = [
    {
      title: "Company Registration",
      description:
        "Complete assistance with legal formalities, business structure, and official documentation to get your company registered and compliant.",
      image: "/image/company-registration.jpg",
      href: "/business/company-registration",
    },
    {
      title: "Website Development",
      description:
        "Custom websites, web apps, or software solutions tailored to your business needs with modern design and full-stack functionality.",
      image: "/image/website-development.jpg",
      href: "/business/website-development",
    },
    {
      title: "Hiring Support",
      description:
        "We help you recruit the right talent — from job postings to candidate screening — so your team is strong from day one.",
      image: "/image/hiring-support.jpg",
      href: "/business/support-hiring",
    },
    {
      title: "Branding",
      description:
        "Crafting a strong brand identity through logo design, brand guidelines, company profile, and more — ensuring you stand out in the market.",
      image: "/image/branding.jpg",
      href: "/business/branding",
    },
    {
      title: "Digital Marketing Support",
      description:
        "Strategic digital marketing, social media management, SEO, and ongoing support to build your brand presence and attract customers.",
      image: "/image/marketing-support.jpg",
      href: "/business/digital-marketing",
    },
    {
      title: "Real Estate & Loan Support",
      description:
        "Get assistance in finding the right commercial space and navigating business loan options to support your growth.",
      image: "/image/real-estate-support.jpg",
      href: "/business/real-estate",
    },
  ];

  return (
    <section id="services" ref={ref} className="relative bg-black text-white py-12 md:py-20">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="mt-3 md:mt-4 text-gray-400 text-sm md:text-lg max-w-3xl mx-auto">
            Empowering your business through complete technical & operational solutions.
          </p>
          <blockquote className="italic text-base md:text-xl mt-4 md:mt-6 text-gray-200 font-light">
            "We don't just build businesses, we craft legacies."
          </blockquote>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative h-80 md:h-96 overflow-hidden rounded-lg border-2 border-transparent hover:border-white transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="relative h-full bg-black rounded-lg overflow-hidden">

                {/* Background Image with slight dark overlay */}
                <div className="relative w-full h-full">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-black/65 group-hover:bg-black/80 transition-all duration-500" />
                </div>

                {/* Title Block */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4 bg-black/70 px-3 py-2 rounded-md z-10 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4"
                >
                  <h3 className="text-sm md:text-base font-semibold text-white text-center">
                    {service.title}
                  </h3>
                </motion.div>

                {/* Hover Description + Button */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  <p className="text-xs md:text-sm text-white mb-3 max-w-xs">{service.description}</p>
                  <Link to={service.href}>
                    <Button
                      variant="ghost"
                      className="text-xs md:text-sm px-0 text-white hover:text-white hover:bg-transparent underline underline-offset-4"
                    >
                      Learn More →
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
