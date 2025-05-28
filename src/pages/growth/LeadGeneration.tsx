
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Target, Users, Zap, TrendingUp, DollarSign, MessageSquare, Filter } from "lucide-react";

const LeadGeneration = () => {
  const strategies = [
    {
      icon: Target,
      title: "Targeted Lead Campaigns",
      description: "Precision-targeted campaigns that attract your ideal customers"
    },
    {
      icon: MessageSquare,
      title: "Content Marketing Funnels",
      description: "Value-driven content that nurtures prospects into customers"
    },
    {
      icon: Filter,
      title: "Lead Qualification",
      description: "Advanced filtering to deliver only high-quality, sales-ready leads"
    },
    {
      icon: Zap,
      title: "Automation & Nurturing",
      description: "Automated systems that convert prospects 24/7"
    }
  ];

  const results = [
    "Generate 10x more qualified leads monthly",
    "Increase conversion rates by 400%",
    "Reduce lead acquisition costs by 50%",
    "Achieve 85% lead-to-customer conversion",
    "Build predictable revenue pipeline"
  ];

  const profitStrategy = [
    {
      icon: DollarSign,
      title: "Revenue Multiplication",
      description: "Our lead generation systems multiply your revenue by 600% through consistent high-quality lead flow."
    },
    {
      icon: TrendingUp,
      title: "Sales Acceleration",
      description: "Accelerate your sales cycle by 70% with pre-qualified, sales-ready leads delivered daily."
    },
    {
      icon: Users,
      title: "Customer Lifetime Value",
      description: "Increase customer lifetime value by 300% through targeted lead qualification and nurturing."
    }
  ];

  return (
    <Layout>
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🎯</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Lead <span className="gradient-text">Generation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Generate high-quality leads consistently with our proven lead generation strategies 
            that convert prospects into paying customers at scale.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=600&fit=crop"
              alt="Lead Generation Strategy"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Strategies Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">Lead Generation Strategies</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Multi-channel approaches that deliver consistent results
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

      {/* Profit Strategy Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Leads into <span className="gradient-text">Profit</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our lead generation system is engineered to maximize your return on investment
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

      {/* Results & Process */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                alt="Lead Generation Process"
                className="rounded-xl w-full h-96 object-cover"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold text-white mb-6">Proven Lead Generation Results</h2>
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{result}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 mt-8">
                Start Generating Leads
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to 10x Your Lead Generation?</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
            Let's build a lead generation machine that delivers qualified prospects daily.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
            Get Free Lead Audit
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default LeadGeneration;
