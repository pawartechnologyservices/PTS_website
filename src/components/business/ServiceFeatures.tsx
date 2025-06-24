import { motion } from "framer-motion";
import { Briefcase, Target, MessageSquare, BarChart2 } from "lucide-react";

interface Feature {
  name: string;
  description: string;
  icon: string;
}

interface ServiceFeaturesProps {
  title: string;
  features: Feature[];
}

const iconComponents: Record<string, React.ComponentType<any>> = {
  target: Target,
  "message-square": MessageSquare,
  "bar-chart": BarChart2,
  briefcase: Briefcase,
};

const ServiceFeatures = ({ title, features }: ServiceFeaturesProps) => {
  return (
    <div className="bg-black py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {title}
          </h2>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => {
                const IconComponent = iconComponents[feature.icon] || Briefcase;
                return (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="pt-6"
                  >
                    <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow-md">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg">
                            <IconComponent className="h-6 w-6 text-white" />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black tracking-tight">
                          {feature.name}
                        </h3>
                        <p className="mt-5 text-base text-gray-700">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
