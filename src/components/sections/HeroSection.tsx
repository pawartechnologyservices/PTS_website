import { useState } from "react";
import { motion } from "framer-motion";
import BookingModal from "../BookingModal";
import img from "/image/Cover-Image.jpg";

const HeroSection = () => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      <section 
        className="h-screen gradient-bg flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20 z-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-800 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-700 rounded-full blur-3xl animate-pulse animation-delay-300"></div>
        </div>

        <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-36 sm:pt-44 pb-16 relative z-20">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-tight tracking-normal max-w-[90vw] sm:max-w-5xl md:max-w-6xl text-white mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-[#00B4DB] via-[#8E2DE2] to-[#FF416C] bg-clip-text text-transparent font-serif">PTS</span>
            {" "}Your 360° Business & Technology Partner
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 font-serif max-w-3xl">
            LET'S START BUILDING YOUR DREAM BUSINESS - IS JUST ONE STEP AWAY FROM VISION TO REALITY
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="relative group rounded-full p-[2px] bg-gradient-to-r from-[#00B4DB] via-[#8E2DE2] to-[#FF416C] hover:scale-105"
            >
              <button 
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-black text-white font-semibold text-sm sm:text-lg group-hover:bg-transparent transition-all"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </button>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
              className="relative group rounded-full p-[2px] bg-gradient-to-r from-[#FF416C] via-[#8E2DE2] to-[#00B4DB] hover:scale-105"
            >
              <button 
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-semibold text-sm sm:text-lg group-hover:bg-transparent group-hover:text-white transition-all"
                onClick={() => setShowBooking(true)}
              >
                Book Free Appointment
              </button>
            </motion.div>
          </div>
        </div>

        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-primary rotate-45 animate-pulse z-20"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-white rotate-45 animate-pulse animation-delay-200 z-20"></div>
        <div className="absolute top-40 left-1/4 w-2 h-2 bg-primary/60 rotate-45 animate-pulse animation-delay-400 z-20"></div>
      </section>

      <BookingModal 
        isOpen={showBooking} 
        onClose={() => setShowBooking(false)} 
      />
    </>
  );
};

export default HeroSection;
