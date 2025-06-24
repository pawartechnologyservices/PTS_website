import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Star, Building, BookOpen, Settings, CreditCard, Play, Users
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

// Import logo images
import Logo1 from '/image/brand/10.jpg';
import Logo2 from '/image/brand/1.jpg';
import Logo3 from '/image/brand/4.jpg';
import Logo4 from '/image/brand/2.jpg';
import Logo5 from '/image/brand/11.png';
import Logo6 from '/image/brand/2.jpg';

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
      company: "Shubh Interior",
      industry: "Interior Design",
      services: ["Website", "Business Automation"],
      testimonial: "PTS transformed our manual operations into a fully digital system...",
      category: "website",
      rating: 5,
      highlight: "saved us hours every week",
      date: "2023-05-15",
      logo: Logo1
    },
    {
      id: 2,
      company: "Dealight Property Consultant",
      industry: "Real Estate Services",
      services: ["CRM", "Website"],
      testimonial: "Before working with PTS, lead tracking and follow-ups were a nightmare...",
      category: "website",
      rating: 5,
      highlight: "40% increase in our response rate",
      date: "2023-07-10",
      logo: Logo2
    },
    {
      id: 3,
      company: "Vista Bella Realty",
      industry: "Real Estate Firm",
      services: ["Website", "Property Listing Platform", "Sales Dashboard"],
      testimonial: "We needed a modern, scalable platform to showcase our projects...",
      category: "website",
      rating: 5,
      highlight: "beautiful, functional website",
      date: "2023-08-05",
      logo: Logo3
    },
    {
      id: 4,
      company: "Al-Burrakh Technology",
      industry: "IT Solutions Company",
      services: ["Business Support", "Website"],
      testimonial: "As a tech company, we needed a partner who understands scalability...",
      category: "website",
      rating: 5,
      highlight: "real business consulting",
      date: "2023-10-18",
      logo: Logo4
    },
    {
      id: 5,
      company: "Zarinova Entertainment",
      industry: "Events & Media",
      services: ["Booking Platform", "Website"],
      testimonial: "Managing bookings, artist schedules, and client follow-ups was messy...",
      category: "website",
      rating: 5,
      highlight: "everything is organized",
      date: "2023-11-03",
      logo: Logo5
    },
    {
      id: 6,
      company: "Al-Burrakh Fashion",
      industry: "Fashion E-Commerce",
      services: ["E-Commerce Platform"],
      testimonial: "PTS helped us launch a complete e-commerce store...",
      category: "website",
      rating: 5,
      highlight: "everything works like a charm",
      date: "2023-12-09",
      logo: Logo6
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
      lms: <BookOpen className="h-3 w-3 text-white" />,
      erp: <Settings className="h-3 w-3 text-white" />,
      billing: <CreditCard className="h-3 w-3 text-white" />,
      automation: <Play className="h-3 w-3 text-white" />,
      crm: <Users className="h-3 w-3 text-white" />
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

  const topTestimonials = testimonials.slice(0, 5);

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          What Our Clients Say
        </h2>

        <div className="relative overflow-hidden mb-8">
          <div className="marquee-right-to-left flex space-x-6 py-2">
            {[...topTestimonials, ...topTestimonials].map((testimonial, index) => (
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
