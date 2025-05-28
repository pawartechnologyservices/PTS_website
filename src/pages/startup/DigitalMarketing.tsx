
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Target, Users } from "lucide-react";

const DigitalMarketing = () => {
  const services = [
    "Search Engine Optimization (SEO)",
    "Pay-Per-Click (PPC) Advertising",
    "Social Media Marketing",
    "Content Marketing Strategy",
    "Email Marketing Campaigns",
    "Conversion Rate Optimization",
    "Analytics & Reporting",
    "Brand Identity Development"
  ];

  const packages = [
    {
      name: "Starter Package",
      price: "₹25,000/month",
      features: ["SEO Optimization", "Social Media Management", "Content Creation", "Monthly Reports"],
      icon: "🌱"
    },
    {
      name: "Growth Package",
      price: "₹50,000/month",
      features: ["Everything in Starter", "PPC Campaigns", "Email Marketing", "Advanced Analytics"],
      icon: "📈"
    },
    {
      name: "Enterprise Package",
      price: "₹1,00,000/month",
      features: ["Everything in Growth", "Dedicated Manager", "Custom Strategy", "Priority Support"],
      icon: "🚀"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">📱</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Digital Marketing for <span className="gradient-text">Startups</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Launch your startup with powerful digital marketing strategies that drive growth, 
            build brand awareness, and generate qualified leads from day one.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Comprehensive Digital Marketing Solutions
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                We help startups establish a strong digital presence and accelerate growth 
                through proven marketing strategies and cutting-edge tools.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center text-gray-300">
                  <Target className="w-5 h-5 text-primary mr-3" />
                  Targeted Campaigns
                </div>
                <div className="flex items-center text-gray-300">
                  <TrendingUp className="w-5 h-5 text-primary mr-3" />
                  Growth Focused
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="w-5 h-5 text-primary mr-3" />
                  Audience Building
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Proven Results
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-white">
                Get Started Today
              </Button>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Our Services Include:</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your <span className="gradient-text">Growth Plan</span>
            </h2>
            <p className="text-xl text-gray-300">
              Flexible packages designed to match your startup's budget and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-black p-8 rounded-xl border border-gray-800 hover:border-primary transition-colors">
                <div className="text-center">
                  <div className="text-4xl mb-4">{pkg.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-6">{pkg.price}</div>
                  
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="text-gray-300 text-sm">
                        ✓ {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Choose Plan
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Scale Your Startup?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's create a digital marketing strategy that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              Start Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DigitalMarketing;
