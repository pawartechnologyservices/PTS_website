
import { useState } from "react";
import { Button } from "../ui/button";
import BookingModal from "../BookingModal";

const CTASection = () => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      <section className="py-20 gradient-bg relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Join hundreds of satisfied clients who have accelerated their growth 
              with our cutting-edge technology solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg"
                onClick={() => setShowBooking(true)}
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Get Started Today
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg"
                onClick={() => window.open('https://wa.me/919876543210', '_blank')}
              >
                Talk to Expert
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>Quick Turnaround</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>100% Satisfaction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-white rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-white/60 rotate-45 animate-pulse animation-delay-200"></div>
        <div className="absolute top-40 right-1/4 w-2 h-2 bg-white/40 rotate-45 animate-pulse animation-delay-400"></div>
      </section>

      <BookingModal 
        isOpen={showBooking} 
        onClose={() => setShowBooking(false)} 
      />
    </>
  );
};

export default CTASection;
