import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Star, Building, Settings, Users
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

// Import logo images - make sure these files exist in your project
import Logo1 from '/image/brand/11.png';
import Logo2 from '/image/brand/1.jpg';
import Logo3 from '/image/brand/6.jpg';
import Logo4 from '/image/brand/2.jpg';
import Logo5 from '/image/brand/4.jpg';

interface Testimonial {
  id: number;
  company: string;
  industry: string;
  services: string[];
  testimonial: string;
  category: string;
  rating: number;
  highlight: string;
  date: string;
  logo: string;
}

const ClientTestimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      company: "Zarinova",
      industry: "Event Management & Entertainment",
      services: ["Branding", "Tech Support"],
      testimonial: "Collaborating with Pawar Technology Services has been a smooth and motivating experience. Their team handles everything from branding to backend tech support, keeping our digital presence and business operations running well. Their knowledge of the event industry makes them the ideal tech partner for Zarinova.",
      category: "branding",
      rating: 5,
      highlight: "ideal tech partner",
      date: "2024-01-15",
      logo: Logo1
    },
    {
      id: 2,
      company: "Delight Properties",
      industry: "Real Estate",
      services: ["Website", "Branding"],
      testimonial: "Collaborating with Pawar Technology Services was one of the smartest things we did for our brand. They caught our vision and turned it into an effective brand image with a stunning, easy-to-use website that reflects our value as a property company.",
      category: "website",
      rating: 5,
      highlight: "premium and credible-looking",
      date: "2024-02-20",
      logo: Logo2
    },
    {
      id: 3,
      company: "Celeb",
      industry: "Fashion Brand",
      services: ["Branding", "Website", "Social Media"],
      testimonial: "The Celeb brand owes its successful launch to PTS who served as an essential partner in its creation. They managed every aspect of our branding development with high levels of creativity and precision, demonstrating perfect understanding of premium fashion brands.",
      category: "branding",
      rating: 5,
      highlight: "perfect brand understanding",
      date: "2024-03-10",
      logo: Logo3
    },
    {
      id: 4,
      company: "Al Buraak Fashion",
      industry: "Fashion E-Commerce",
      services: ["Website", "Design", "Technical Support"],
      testimonial: "PTS took responsibility for handling our fashion website and they surpassed our anticipations. Their team delivers continuous updates and design improvements that keep our platform contemporary, speedy and easy to use.",
      category: "website",
      rating: 5,
      highlight: "genuine digital partner",
      date: "2024-04-05",
      logo: Logo4
    },
    {
      id: 5,
      company: "Vistabella Realty",
      industry: "Real Estate",
      services: ["Website", "Brand Identity"],
      testimonial: "PTS played a crucial role in boosting our market standing in the competitive real estate sector. We received complete solutions that matched our high-end positioning through website development and brand identity creation.",
      category: "branding",
      rating: 5,
      highlight: "exceeded expectations",
      date: "2024-05-12",
      logo: Logo5
    }
  ];

  const RatingStars = ({ rating }: { rating: number }) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-amber-500 text-amber-500' : 'text-gray-500'}`}
        />
      ))}
    </div>
  );

  const getServiceIcon = (service: string) => {
    const iconMap: Record<string, JSX.Element> = {
      website: <Building className="h-3 w-3 text-white" />,
      branding: <Star className="h-3 w-3 text-white" />,
      design: <Settings className="h-3 w-3 text-white" />,
      tech: <Settings className="h-3 w-3 text-white" />,
      support: <Users className="h-3 w-3 text-white" />,
      social: <Users className="h-3 w-3 text-white" />
    };
    const key = service.toLowerCase().replace(/\s+/g, '');
    return iconMap[key] || <Users className="h-3 w-3 text-white" />;
  };

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <Card className="border border-gray-800 bg-gray-900 shadow-lg h-full">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="mb-4">
          <RatingStars rating={testimonial.rating} />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {testimonial.services.map((service, index) => (
            <Badge
              key={index}
              variant="outline"
              className="border-gray-700 bg-gray-800 text-white text-xs"
            >
              {getServiceIcon(service)}
              <span className="ml-1">{service}</span>
            </Badge>
          ))}
        </div>

        <blockquote className="text-gray-300 mb-6 italic flex-grow">
          "{testimonial.testimonial}"
        </blockquote>

        <div className="flex items-start mt-6">
          <img
            src={testimonial.logo}
            alt={testimonial.company}
            className="w-10 h-10 rounded-full object-contain bg-white p-1 mr-3 border-2 border-amber-500"
          />
          <div>
            <div className="text-sm font-semibold text-white">{testimonial.company}</div>
            <div className="text-xs text-gray-400">{testimonial.industry}</div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center">
          <span className="text-xs text-gray-500">{testimonial.date}</span>
          <Badge variant="outline" className="border-gray-700 bg-gray-800 text-gray-300 text-xs">
            {testimonial.category}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          What Our Clients Say
        </h2>

        <div className="relative overflow-hidden mb-8">
          <div className="marquee-right-to-left flex space-x-6 py-2">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={`top-${index}`} className="flex-shrink-0 w-80 md:w-96">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-right-to-left {
          animation: scrollRightToLeft 30s linear infinite;
          display: flex;
          width: calc(200%);
        }
        @keyframes scrollRightToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 1.5rem));
          }
        }
        @media (max-width: 768px) {
          .marquee-right-to-left {
            animation-duration: 20s;
          }
        }
      `}</style>
    </div>
  );
};

export default ClientTestimonials;