import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCTAProps {
  title: string;
  description: string;
  buttonText: string;
}

const ServiceCTA = ({ title, description, buttonText }: ServiceCTAProps) => {
  return (
    <div className="bg-black py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300">
            {description}
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-none text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300"
            >
              {buttonText}
              <ArrowRight className="ml-3 -mr-1 h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceCTA;
