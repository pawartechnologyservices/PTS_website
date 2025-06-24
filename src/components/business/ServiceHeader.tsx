import { motion } from "framer-motion";

interface ServiceHeaderProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceHeader = ({ title, description, imageUrl }: ServiceHeaderProps) => {
  return (
    <div className="relative bg-black overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-10"
          src={imageUrl}
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceHeader;
