
import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";
import BookingModal from "../BookingModal";

const HeroSection = () => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      <section className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-800 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-700 rounded-full blur-3xl animate-pulse animation-delay-300"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Powering the </span>
              <span className="gradient-text">Future</span>
              <br />
              <span className="text-white">with Technology</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in animation-delay-200">
              Transform your business with cutting-edge digital solutions. From web development to AI-powered systems, we deliver innovation that drives growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-400">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
                onClick={() => setShowBooking(true)}
              >
                Book Free Appointment
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ArrowDown className="w-6 h-6 text-white/60" />
            </div>
          </div>
        </div>

        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-primary rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-white rotate-45 animate-pulse animation-delay-200"></div>
        <div className="absolute top-40 left-1/4 w-2 h-2 bg-primary/60 rotate-45 animate-pulse animation-delay-400"></div>
      </section>

      <BookingModal 
        isOpen={showBooking} 
        onClose={() => setShowBooking(false)} 
      />
    </>
  );
};

export default HeroSection;
