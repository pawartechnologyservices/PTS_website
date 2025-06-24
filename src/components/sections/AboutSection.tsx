import React from "react";
import { Award, Calendar, CheckCircle, Folder } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import img from "../../assets/Whittte-bg.png";

const stats = [
  {
    icon: <Calendar className="w-6 h-6 text-blue-600" />,
    label: "3",
    description: "Years of excellence",
    suffix: "+",
  },
  {
    icon: <Folder className="w-6 h-6 text-indigo-600" />,
    label: "100",
    description: "Projects delivered",
    suffix: "+",
  },
  {
    icon: <Award className="w-6 h-6 text-purple-600" />,
    label: "20",
    description: "Awards won",
    suffix: "+",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
    label: "100",
    description: "Success rate",
    suffix: "%",
  },
];

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative px-4 py-16 md:py-20 w-full text-black" // Changed text color to black for better contrast
      id="about"
    >
      {/* Background image with white overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-white/90"></div> {/* White overlay with transparency */}
      </div>
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <p className="text-sm uppercase tracking-widest text-blue-600 font-medium">
                About us
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mt-5">
                We Don't Just Build Software — We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">BUSINESS</span>
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-gray-700 leading-relaxed">
                At <strong className="text-gray-900">Pawar Technology Services (PTS)</strong>, we partner with
                forward-thinking companies to turn bold ideas into business value.
                Our cross-functional team crafts end-to-end digital ecosystems—from
                lead funnels and ERPs to mobile apps and cloud infrastructure.
              </p>
              <br/>
              <p className="text-lg leading-relaxed text-gray-700">
                <strong>"Every line of code we write is aligned with your strategic
                objectives, ensuring technology accelerates—not complicates—your
                growth journey."</strong>
              </p>
            </motion.div>
          </motion.div>

          {/* Right Image - Hidden on mobile, shown on lg+ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative h-full w-full rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
              <img
                src="https://res.cloudinary.com/dwsrcpjv3/image/upload/v1749796185/About-Us_hvavgm.jpg"
                alt="Modern architectural design"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats at the bottom - full width */}
        <motion.div 
          initial="hidden"
          animate={inView ? "visible" : {}}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 md:mt-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-center hover:bg-gray-50 transition-all duration-300"
            >
              <div className="flex justify-center mb-2">
                <div className="p-2 bg-gray-100 rounded-full">{stat.icon}</div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900">
                {inView ? (
                  <CountUp 
                    end={parseInt(stat.label)} 
                    suffix={stat.suffix}
                    duration={2}
                  />
                ) : (
                  `${stat.label}${stat.suffix}`
                )}
              </h4>
              <p className="text-sm text-gray-600 mt-1">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;