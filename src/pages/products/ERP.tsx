
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, DollarSign, Users, BarChart, Settings, Globe } from "lucide-react";

const ERP = () => {
  const modules = [
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time inventory tracking, automated reordering, and warehouse management"
    },
    {
      icon: DollarSign,
      title: "Financial Management",
      description: "Complete accounting, budgeting, and financial reporting with multi-currency support"
    },
    {
      icon: Users,
      title: "Human Resources",
      description: "Employee management, payroll processing, and performance tracking"
    },
    {
      icon: BarChart,
      title: "Business Intelligence",
      description: "Advanced analytics, custom dashboards, and real-time business insights"
    },
    {
      icon: Settings,
      title: "Production Planning",
      description: "Manufacturing workflow management, quality control, and resource optimization"
    },
    {
      icon: Globe,
      title: "Multi-Company",
      description: "Manage multiple companies and subsidiaries from a single platform"
    }
  ];

  const benefits = [
    "Integrate all business processes",
    "Real-time data visibility",
    "Improve operational efficiency by 35%",
    "Reduce manual errors by 90%",
    "Scalable to enterprise level",
    "Cloud-based with mobile access"
  ];

  const industries = [
    { name: "Manufacturing", icon: "🏭", description: "Complete production management" },
    { name: "Retail", icon: "🛍️", description: "Multi-channel inventory control" },
    { name: "Healthcare", icon: "🏥", description: "Patient and resource management" },
    { name: "Education", icon: "🎓", description: "Student and academic management" },
    { name: "Distribution", icon: "🚚", description: "Supply chain optimization" },
    { name: "Services", icon: "💼", description: "Project and client management" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Enterprise Resource Planning
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Complete business management solution that integrates all core business processes 
                into a unified system. Streamline operations, improve efficiency, and gain 
                real-time visibility across your entire organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Request Demo
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Download Brochure
                </Button>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700">
                <div className="text-6xl mb-6 text-center">🏢</div>
                <div className="space-y-4">
                  <div className="flex justify-between text-white">
                    <span>Efficiency Improvement</span>
                    <span className="text-green-500 font-bold">35%</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Cost Reduction</span>
                    <span className="text-green-500 font-bold">25%</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Error Reduction</span>
                    <span className="text-green-500 font-bold">90%</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>ROI Timeline</span>
                    <span className="text-primary font-bold">6-12 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Comprehensive </span>
              <span className="gradient-text">Modules</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our ERP system includes all essential modules to manage every aspect of your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-primary transition-colors animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <module.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{module.title}</h3>
                <p className="text-gray-300">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Industries</span>
              <span className="text-white"> We Serve</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our ERP solution is customized for various industries with specific workflows and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-black p-8 rounded-xl border border-gray-800 hover:border-primary transition-colors text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & ROI Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-white mb-8">
                Proven <span className="gradient-text">Benefits</span>
              </h2>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Calculate Your ROI
              </Button>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">Implementation Timeline</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      1
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Analysis & Planning</h4>
                      <p className="text-gray-400 text-sm">2-4 weeks</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      2
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">System Configuration</h4>
                      <p className="text-gray-400 text-sm">4-8 weeks</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      3
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Data Migration & Testing</h4>
                      <p className="text-gray-400 text-sm">2-4 weeks</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      4
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Training & Go-Live</h4>
                      <p className="text-gray-400 text-sm">1-2 weeks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Flexible </span>
              <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Customized pricing based on your business size, modules required, and implementation scope.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-primary transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">Small Business</h3>
              <div className="text-4xl font-bold text-primary mb-4">₹5,00,000</div>
              <p className="text-gray-400 mb-6">Up to 25 users, core modules</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Inventory Management
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Financial Management
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Basic Reporting
                </li>
              </ul>
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                Get Quote
              </Button>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-primary relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Medium Business</h3>
              <div className="text-4xl font-bold text-primary mb-4">₹12,00,000</div>
              <p className="text-gray-400 mb-6">Up to 100 users, all modules</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  All Core Modules
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Advanced Analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Mobile Access
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Priority Support
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Get Quote
              </Button>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-primary transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-primary mb-4">Custom</div>
              <p className="text-gray-400 mb-6">Unlimited users, custom features</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Custom Development
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Multi-Company Setup
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  On-premise Option
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  24/7 Support
                </li>
              </ul>
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">
            Ready to Streamline Your Business Operations?
          </h2>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in">
            Let us show you how our ERP system can transform your business processes and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
              Download Case Study
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ERP;
