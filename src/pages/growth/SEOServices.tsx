
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Search, TrendingUp, Globe, Target, BarChart3, DollarSign } from "lucide-react";

const SEOServices = () => {
  const services = [
    {
      icon: Search,
      title: "Keyword Research & Strategy",
      description: "Comprehensive keyword analysis to target high-converting search terms"
    },
    {
      icon: Globe,
      title: "Technical SEO Optimization",
      description: "Website structure optimization for better search engine crawling"
    },
    {
      icon: TrendingUp,
      title: "Content SEO",
      description: "SEO-optimized content creation that ranks and converts"
    },
    {
      icon: BarChart3,
      title: "Local SEO",
      description: "Dominate local search results and attract nearby customers"
    }
  ];

  const benefits = [
    "Increase organic traffic by 500%",
    "Improve search rankings to page 1",
    "Generate 300% more qualified leads",
    "Reduce customer acquisition costs by 60%",
    "Build long-term sustainable traffic"
  ];

  const profitStrategy = [
    {
      icon: DollarSign,
      title: "Revenue Growth",
      description: "Our SEO strategies increase your revenue by 400% through higher organic traffic and better conversion rates."
    },
    {
      icon: Target,
      title: "Cost Reduction",
      description: "Reduce paid advertising costs by 70% as organic traffic replaces expensive PPC campaigns."
    },
    {
      icon: TrendingUp,
      title: "Market Dominance",
      description: "Achieve market leadership position with 80% increase in brand visibility and customer trust."
    }
  ];

  return (
    <Layout>
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🔍</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            SEO <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Boost your online visibility and drive organic traffic with our proven SEO strategies 
            that deliver measurable results and long-term growth.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&h=600&fit=crop"
              alt="SEO Strategy and Analytics"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">Comprehensive SEO Solutions</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              End-to-end SEO services that drive organic growth
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
              How We Drive <span className="gradient-text">Profit</span> for Your Business
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our SEO strategies are designed to deliver measurable ROI and sustainable business growth
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

      {/* Benefits & Results */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-white mb-6">Proven SEO Results</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 mt-8">
                Start SEO Optimization
              </Button>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                alt="SEO Results Dashboard"
                className="rounded-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Dominate Search Results?</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
            Let's boost your rankings and drive organic traffic that converts into revenue.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
            Get Free SEO Audit
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SEOServices;
