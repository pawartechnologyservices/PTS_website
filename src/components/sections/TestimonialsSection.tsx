
import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      position: "CEO",
      feedback: "Pawar Technology transformed our business with their innovative solutions. The team's expertise and dedication exceeded our expectations.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Michael Chen",
      company: "StartupXYZ",
      position: "Founder",
      feedback: "Working with Pawar Tech was a game-changer. Their LMS solution helped us scale our training programs efficiently.",
      rating: 5,
      image: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      company: "EduLearn",
      position: "CTO",
      feedback: "Outstanding development team! They delivered our project on time and within budget. Highly recommended.",
      rating: 5,
      image: "👩‍🔬"
    },
    {
      name: "David Thompson",
      company: "RetailPlus",
      position: "Operations Manager",
      feedback: "The ERP system they built for us streamlined all our processes. ROI was achieved within 6 months.",
      rating: 5,
      image: "👨‍💼"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">What Our </span>
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="bg-black p-8 md:p-12 rounded-2xl border border-gray-800 text-center animate-scale-in">
            <div className="text-6xl mb-6">{testimonials[currentIndex].image}</div>
            
            {/* Star rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              "{testimonials[currentIndex].feedback}"
            </blockquote>

            <div>
              <h4 className="text-white font-bold text-lg mb-1">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-primary font-semibold">
                {testimonials[currentIndex].position}
              </p>
              <p className="text-gray-400">
                {testimonials[currentIndex].company}
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            onClick={prevTestimonial}
            size="icon"
            variant="outline"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            onClick={nextTestimonial}
            size="icon"
            variant="outline"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary transition-colors cursor-pointer animate-fade-in ${
                index === currentIndex ? 'border-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="text-3xl mb-3">{testimonial.image}</div>
              <h4 className="text-white font-semibold mb-1">{testimonial.name}</h4>
              <p className="text-primary text-sm mb-2">{testimonial.position}</p>
              <p className="text-gray-400 text-sm">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
