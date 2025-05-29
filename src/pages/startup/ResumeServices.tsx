
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Star, Users, TrendingUp, Target, Briefcase, Award } from "lucide-react";

const ResumeServices = () => {
  const services = [
    {
      icon: FileText,
      title: "Professional Resume Writing",
      description: "ATS-optimized resumes that get you noticed by recruiters and hiring managers"
    },
    {
      icon: Users,
      title: "LinkedIn Profile Optimization",
      description: "Complete LinkedIn makeover to boost your professional online presence"
    },
    {
      icon: Briefcase,
      title: "Cover Letter Creation",
      description: "Compelling cover letters tailored to specific job opportunities"
    },
    {
      icon: Award,
      title: "Career Coaching",
      description: "One-on-one guidance to accelerate your career growth and job search"
    }
  ];

  const benefits = [
    "Increase interview calls by 300%",
    "Get noticed by top recruiters",
    "Land your dream job faster",
    "Stand out from competition",
    "Build professional credibility"
  ];

  const profitStrategy = [
    {
      icon: Target,
      title: "Career Acceleration",
      description: "Our resume services help you land jobs with 40% higher salaries and accelerate your career growth by 3x."
    },
    {
      icon: TrendingUp,
      title: "Market Positioning",
      description: "Position yourself as a top candidate with professional branding that increases job offers by 500%."
    },
    {
      icon: Star,
      title: "Success Rate",
      description: "Achieve a 95% success rate in landing interviews with our proven resume optimization strategies."
    }
  ];

  return (
    <Layout>
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">📄</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Resume <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Professional resume writing and career services that help you land your dream job 
            with compelling, ATS-optimized documents that get results.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=600&fit=crop"
              alt="Professional Resume Writing"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Resume Solutions</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              End-to-end career documentation services
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

      {/* Career Success Strategy */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              Career <span className="gradient-text">Success</span> Strategy
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our resume services are designed to maximize your career potential and job market success
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

      {/* Benefits & Process */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Resume Services?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button className="border-2 border-red-500 hover:border-blue-500 bg-transparent text-white px-8 py-3 mt-8 transition-colors">
                Start Your Career Transformation
              </Button>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
                alt="Career Success"
                className="rounded-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
            Let's create a professional resume that opens doors to your dream career.
          </p>
          <Button className="border-2 border-red-500 hover:border-blue-500 bg-transparent text-white px-8 py-3 text-lg transition-colors">
            Get Free Resume Review
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ResumeServices;
