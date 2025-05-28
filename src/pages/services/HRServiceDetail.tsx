
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, TrendingUp, Award } from "lucide-react";

const HRServiceDetail = () => {
  const services = [
    "Recruitment & Talent Acquisition",
    "Employee Training & Development",
    "Performance Management Systems",
    "HR Policy Development",
    "Payroll Management",
    "Employee Engagement Programs",
    "Compliance & Legal Support",
    "HR Analytics & Reporting"
  ];

  const benefits = [
    "Streamlined hiring processes",
    "Improved employee retention",
    "Enhanced workplace culture",
    "Compliance with labor laws",
    "Data-driven HR decisions",
    "Cost-effective solutions"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">👥</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            HR <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Comprehensive human resource solutions to build, manage, and grow your workforce 
            with strategic HR consulting and management services.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Complete HR Solutions for Modern Businesses
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                From startup to enterprise, we provide end-to-end HR services that help you 
                attract, develop, and retain top talent while ensuring compliance and operational efficiency.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center text-gray-300">
                  <Users className="w-5 h-5 text-primary mr-3" />
                  Expert HR Team
                </div>
                <div className="flex items-center text-gray-300">
                  <TrendingUp className="w-5 h-5 text-primary mr-3" />
                  Growth Focused
                </div>
                <div className="flex items-center text-gray-300">
                  <Award className="w-5 h-5 text-primary mr-3" />
                  Industry Certified
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Proven Results
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-white">
                Schedule HR Consultation
              </Button>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Our HR Services:</h3>
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

      {/* Benefits */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our <span className="gradient-text">HR Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-black p-6 rounded-xl border border-gray-800 text-center">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let our HR experts help you build a stronger, more efficient workforce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              Get HR Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
              Download HR Guide
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HRServiceDetail;
