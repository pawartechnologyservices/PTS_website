import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

interface ServiceTestimonialsProps {
  testimonials: Testimonial[];
}

const ServiceTestimonials = ({ testimonials }: ServiceTestimonialsProps) => {
  return (
    <div className="bg-black py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-none shadow-lg border border-black"
            >
              <div className="relative">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <blockquote className="relative">
                  <p className="text-lg text-black">{testimonial.quote}</p>
                </blockquote>
                <footer className="mt-6">
                  <p className="text-base font-semibold text-black">
                    {testimonial.author}
                  </p>
                  <p className="text-base text-gray-600">
                    {testimonial.company}
                  </p>
                </footer>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTestimonials;
