
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Play, Users, BookOpen, Award, BarChart } from "lucide-react";

const LMS = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Course Management",
      description: "Create, organize, and manage unlimited courses with multimedia content support"
    },
    {
      icon: Play,
      title: "Video Streaming",
      description: "HD video streaming with adaptive bitrate and offline download capabilities"
    },
    {
      icon: Users,
      title: "User Management",
      description: "Role-based access control with student, instructor, and admin roles"
    },
    {
      icon: Award,
      title: "Assessments & Certificates",
      description: "Built-in quiz builder with automated grading and certificate generation"
    },
    {
      icon: BarChart,
      title: "Analytics & Reports",
      description: "Detailed learning analytics and progress tracking for students and instructors"
    }
  ];

  const benefits = [
    "Reduce training costs by up to 60%",
    "Scale to unlimited users",
    "Increase learner engagement by 75%",
    "Track progress in real-time",
    "Mobile-first responsive design",
    "Multi-language support"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹2,00,000",
      description: "Perfect for small institutions",
      features: [
        "Up to 500 users",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "Mobile app access"
      ]
    },
    {
      name: "Professional",
      price: "₹5,00,000",
      description: "Ideal for growing organizations",
      features: [
        "Up to 2,000 users",
        "50GB storage",
        "Advanced analytics",
        "Priority support",
        "Custom branding",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale deployments",
      features: [
        "Unlimited users",
        "Unlimited storage",
        "Custom integrations",
        "24/7 dedicated support",
        "White-label solution",
        "On-premise deployment"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Learning Management System
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Comprehensive online learning platform designed for educational institutions 
                and corporate training programs. Deliver engaging content, track progress, 
                and scale your educational offerings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Request Demo
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  View Pricing
                </Button>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700">
                <div className="text-6xl mb-6 text-center">🎓</div>
                <div className="space-y-4">
                  <div className="flex justify-between text-white">
                    <span>Active Students</span>
                    <span className="text-primary font-bold">10,000+</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Course Completion Rate</span>
                    <span className="text-green-500 font-bold">95%</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>User Satisfaction</span>
                    <span className="text-green-500 font-bold">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Powerful </span>
              <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, deliver, and manage effective online learning experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-primary transition-colors animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-white mb-8">
                Why Choose Our <span className="gradient-text">LMS?</span>
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-black p-8 rounded-2xl border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">Key Statistics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Course Completion</span>
                      <span className="text-white">95%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">User Engagement</span>
                      <span className="text-white">88%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Mobile Usage</span>
                      <span className="text-white">72%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Choose Your </span>
              <span className="gradient-text">Plan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to suit organizations of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-gray-900 p-8 rounded-2xl border transition-all duration-300 animate-scale-in ${
                  plan.popular 
                    ? 'border-primary scale-105 relative' 
                    : 'border-gray-800 hover:border-primary'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-primary">{plan.price}</div>
                  {plan.price !== "Custom" && <div className="text-gray-400">One-time setup</div>}
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-white' 
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in">
            Join thousands of organizations already using our LMS to deliver exceptional learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LMS;
