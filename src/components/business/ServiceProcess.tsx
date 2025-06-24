import { motion } from "framer-motion";
import { Users, Edit, Send, TrendingUp } from "lucide-react";

interface Step {
  name: string;
  description: string;
  icon: string;
}

interface ServiceProcessProps {
  title: string;
  steps: Step[];
}

const iconComponents: Record<string, React.ComponentType<any>> = {
  users: Users,
  edit: Edit,
  send: Send,
  "trending-up": TrendingUp,
};

const ServiceProcess = ({ title, steps }: ServiceProcessProps) => {
  return (
    <div className="bg-black py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {title}
          </h2>
        </div>

        <div className="mt-16">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const IconComponent = iconComponents[step.icon] || Users;
              return (
                <motion.div
                  key={step.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center"
                >
                  <div
                    className={`mt-6 lg:mt-0 lg:col-span-7 ${
                      index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-6"
                    }`}
                  >
                    <h3 className="text-2xl font-extrabold text-white">
                      {step.name}
                    </h3>
                    <p className="mt-3 text-lg text-gray-300">
                      {step.description}
                    </p>
                  </div>
                  <div
                    className={`flex justify-center lg:col-span-5 ${
                      index % 2 === 0 ? "lg:col-start-8" : "lg:col-start-1"
                    }`}
                  >
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white text-black shadow-xl border border-black">
                      <IconComponent className="w-10 h-10" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess;
