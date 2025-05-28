
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, TrendingUp, Target, PieChart, Building2, DollarSign, Users, BarChart3 } from "lucide-react";

const BusinessPlanning = () => {
  const services = [
    {
      icon: FileText,
      title: "Business Model Development",
      description: "Create robust business models that ensure sustainable growth and profitability"
    },
    {
      icon: PieChart,
      title: "Market Analysis & Research",
      description: "Deep market insights and competitor analysis for strategic positioning"
    },
    {
      icon: BarChart3,
      title: "Financial Projections",
      description: "Detailed financial planning and revenue forecasting models"
    },
    {
      icon: Target,
      title: "Go-to-Market Strategy",
      description: "Strategic market entry plans with clear execution roadmaps"
    }
  ];

  const benefits = [
    "Increase success probability by 300%",
    "Secure funding with professional plans",
    "Reduce business risks by 70%",
    "Accelerate growth by 250%",
    "Build investor-ready documentation"
  ];

  const profitStrategy = [
    {
      icon: DollarSign,
      title: "Revenue Optimization",
      description: "Our business plans are designed to maximize revenue streams and achieve 500% ROI within 18 months."
    },
    {
      icon: TrendingUp,
      title: "Growth Acceleration",
      description: "Strategic planning that accelerates business growth by 400% through optimized operations and market positioning."
    },
    {
      icon: Building2,
      title: "Business Valuation",
      description: "Increase your business valuation by 600% with professionally structured business models and clear profit pathways."
    }
  ];

  return (
    <Layout>
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">📋</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Business <span className="gradient-text">Planning</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Strategic business planning services that transform startup ideas into profitable, 
            scalable businesses with clear roadmaps to success.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop"
              alt="Business Planning Strategy"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Business Planning</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              From concept to execution, we plan every aspect of your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-primary transition-colors animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Profit Strategy Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              Strategic Planning for Maximum <span className="gradient-text">Profit</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Every business plan we create is engineered for profitability and sustainable growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profitStrategy.map((strategy, index) => (
              <Card key={index} className="bg-black border-gray-800 hover:border-primary transition-colors animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader className="text-center">
                  <strategy.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                  <CardTitle className="text-white text-xl">{strategy.title}</CardTitle>
                  <CardDescription className="text-gray-300">{strategy.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Planning Process */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Business Planning?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 mt-8">
                Start Planning Your Business
              </Button>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop"
                alt="Business Planning Process"
                className="rounded-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Success Plan?</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
            Let's create a business plan that turns your vision into a profitable reality.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
            Get Business Plan Consultation
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessPlanning;
