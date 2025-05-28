
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, TrendingUp, Heart, MessageCircle, Share2, Target } from "lucide-react";

const SocialMediaGrowth = () => {
  const platforms = [
    {
      icon: Users,
      title: "Facebook Marketing",
      description: "Build communities and drive engagement on the world's largest social network"
    },
    {
      icon: Heart,
      title: "Instagram Growth",
      description: "Visual storytelling and influencer partnerships for brand awareness"
    },
    {
      icon: MessageCircle,
      title: "Twitter Strategy",
      description: "Real-time engagement and thought leadership building"
    },
    {
      icon: Share2,
      title: "LinkedIn Presence",
      description: "B2B networking and professional brand development"
    }
  ];

  const results = [
    "300% increase in follower growth",
    "500% boost in engagement rates",
    "250% more website traffic from social",
    "10x increase in social media leads",
    "Improved brand recognition and loyalty"
  ];

  return (
    <Layout>
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">📱</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Social Media <span className="gradient-text">Growth</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Amplify your brand presence across all social platforms with strategic content 
            and community building that drives real business results.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1611262588024-d12430b98920?w=1200&h=600&fit=crop"
              alt="Social Media Growth Strategy"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Platform Services */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">Multi-Platform Growth Strategy</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Tailored approaches for each social media platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-primary transition-colors animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <platform.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-white">{platform.title}</CardTitle>
                  <CardDescription className="text-gray-300">{platform.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Analytics */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-white mb-6">Proven Social Media Results</h2>
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{result}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 mt-8">
                Grow Your Following
              </Button>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=400&fit=crop"
                alt="Social Media Analytics"
                className="rounded-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Process */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">Our Growth Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "Audit", title: "Current Analysis", description: "Evaluate existing social presence" },
              { step: "Strategy", title: "Growth Planning", description: "Develop platform-specific strategies" },
              { step: "Content", title: "Creation & Posting", description: "Produce engaging content regularly" },
              { step: "Optimize", title: "Performance Tracking", description: "Monitor and improve results" }
            ].map((process, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{process.title}</h3>
                <p className="text-gray-300 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Dominate Social Media?</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
            Let's build a social media presence that converts followers into customers.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
            Start Growing Today
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SocialMediaGrowth;
