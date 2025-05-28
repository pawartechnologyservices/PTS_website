
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Users, TrendingUp, Calendar, PenTool } from "lucide-react";

const ContentStrategy = () => {
  const strategies = [
    {
      icon: FileText,
      title: "Content Planning",
      description: "Strategic content calendars aligned with your business goals"
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "High-quality blogs, videos, and social media content"
    },
    {
      icon: Users,
      title: "Audience Research",
      description: "Deep understanding of your target audience preferences"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Analytics and optimization for maximum engagement"
    }
  ];

  const benefits = [
    "Increase organic traffic by 400%",
    "Build brand authority and trust",
    "Generate qualified leads through content",
    "Improve customer engagement rates",
    "Establish thought leadership position"
  ];

  return (
    <Layout>
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">📝</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Content <span className="gradient-text">Strategy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Create compelling content that engages your audience, builds brand authority, 
            and drives meaningful business results.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
              alt="Content Strategy Planning"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Strategy Services */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">Our Content Strategy Approach</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Data-driven content strategies that resonate with your audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-primary transition-colors animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <strategy.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-white">{strategy.title}</CardTitle>
                  <CardDescription className="text-gray-300">{strategy.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Image */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop"
                alt="Content Creation Process"
                className="rounded-xl w-full h-96 object-cover"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold text-white mb-6">Content That Converts</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 mt-8">
                Develop Your Strategy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">Our Content Development Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Research & Analysis", description: "Understanding your audience and market" },
              { step: "02", title: "Strategy Development", description: "Creating comprehensive content roadmap" },
              { step: "03", title: "Content Creation", description: "Producing high-quality, engaging content" }
            ].map((process, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl font-bold text-primary mb-4">{process.step}</div>
                <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Elevate Your Content?</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
            Let's create a content strategy that drives engagement and business growth.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
            Start Content Strategy
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ContentStrategy;
