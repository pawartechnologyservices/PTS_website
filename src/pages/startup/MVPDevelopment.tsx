
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Rocket, Code, Zap, Users, DollarSign, TrendingUp, Target } from "lucide-react";

const MVPDevelopment = () => {
  const features = [
    {
      icon: Code,
      title: "Rapid Prototyping",
      description: "Quick development cycles to validate your idea in the market faster"
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "MVP designed around user needs and market validation feedback"
    },
    {
      icon: Zap,
      title: "Agile Development",
      description: "Flexible development process with continuous iteration and improvement"
    },
    {
      icon: Target,
      title: "Market Validation",
      description: "Built-in analytics and feedback systems to validate product-market fit"
    }
  ];

  const benefits = [
    "Launch your product 80% faster",
    "Reduce development costs by 60%",
    "Validate market demand early",
    "Attract investors with working product",
    "Iterate based on real user feedback"
  ];

  const profitStrategy = [
    {
      icon: DollarSign,
      title: "Quick Market Entry",
      description: "Launch your MVP 70% faster and start generating revenue within 8 weeks, maximizing your first-mover advantage."
    },
    {
      icon: TrendingUp,
      title: "Investment Ready",
      description: "Increase your chances of securing funding by 500% with a working MVP that demonstrates market traction."
    },
    {
      icon: Rocket,
      title: "Scalable Foundation",
      description: "Build on a foundation that scales, reducing future development costs by 80% as you grow your business."
    }
  ];

  return (
    <Layout>
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🚀</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            MVP <span className="gradient-text">Development</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Rapid MVP development to validate your startup idea and get to market quickly 
            with minimum viable products that maximize learning and minimize risk.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop"
              alt="MVP Development Process"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">MVP Development Features</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Lean development approach focused on core functionality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-primary transition-colors animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-300">{feature.description}</CardDescription>
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
              MVP Strategy for Maximum <span className="gradient-text">Profit</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our MVP development approach is designed to minimize costs and maximize market impact
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

      {/* Benefits & Development Process */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
                alt="Agile Development Process"
                className="rounded-xl w-full h-96 object-cover"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold text-white mb-6">Fast Track Your Startup</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 mt-8">
                Build Your MVP
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">MVP Development Timeline</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { week: "Week 1-2", title: "Discovery & Planning", description: "Requirements gathering and technical planning" },
              { week: "Week 3-5", title: "Core Development", description: "Building essential features and functionality" },
              { week: "Week 6-7", title: "Testing & Iteration", description: "Quality assurance and user feedback integration" },
              { week: "Week 8", title: "Launch & Support", description: "Market launch and ongoing optimization" }
            ].map((phase, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-primary font-semibold mb-2">{phase.week}</p>
                <p className="text-gray-300 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Launch Your MVP?</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
            Let's build your minimum viable product and get you to market in 8 weeks.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
            Start MVP Development
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default MVPDevelopment;
