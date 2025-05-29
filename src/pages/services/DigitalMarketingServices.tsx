
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowUp, Users, Globe, Zap, Mail, Bot, PenTool, TrendingUp, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const DigitalMarketingServices = () => {
  const startupStrategies = [
    {
      icon: Globe,
      title: "Solutions – Strategy for Startups",
      description: "Lean but powerful – startups need marketing that's quick, smart, and impactful.",
      strategies: [
        "Craft a strong brand identity (logo, colors, tone of voice)",
        "Launch targeted organic campaigns (Instagram, LinkedIn)",
        "Focus on validation through testimonials, reviews, case studies"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
    },
    {
      icon: Mail,
      title: "Email Marketing – Strategy for Startups",
      description: "Low-cost, high-return. Use email to nurture and convert early leads.",
      strategies: [
        "Offer freebies or early access in exchange for emails",
        "Set up welcome flows, product updates, and onboarding",
        "Test subject lines and timing to increase open rates"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop"
    },
    {
      icon: Bot,
      title: "Marketing Automation – Strategy for Startups",
      description: "Smart automation to save time and boost consistency.",
      strategies: [
        "Use Zapier to automate forms, CRMs, and email tools",
        "Automate social media with Buffer or Hootsuite",
        "Set up lead scoring for high-interest user prioritization"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
    },
    {
      icon: PenTool,
      title: "Content Creation Tools – Strategy for Startups",
      description: "Build trust with useful, niche content using easy tools.",
      strategies: [
        "Write blogs that solve your target audience's problems",
        "Use Canva for stunning graphics and decks",
        "Repurpose long content into reels, posts, or infographics"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop"
    },
    {
      icon: TrendingUp,
      title: "Social Media Marketing – Strategy for Startups",
      description: "Drive growth with community content and storytelling.",
      strategies: [
        "Focus on 1–2 high-impact platforms",
        "Post behind-the-scenes, founder stories, and team culture",
        "Run polls or go live to gather feedback and build trust"
      ],
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=400&fit=crop"
    },
    {
      icon: Users,
      title: "Audience Management – Strategy for Startups",
      description: "Know your audience from day one and avoid costly pivots.",
      strategies: [
        "Build 2–3 core buyer personas",
        "Use Google Analytics & Meta Insights to track engagement",
        "Run early feedback loops to test messaging"
      ],
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=400&fit=crop"
    },
    {
      icon: Globe,
      title: "Websites – Strategy for Startups",
      description: "Your website is your storefront. Make it count.",
      strategies: [
        "Use WordPress, Webflow, or Framer for fast site building",
        "Add clear CTAs, testimonials, and contact forms",
        "Optimize for mobile and SEO from day one"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    }
  ];

  const growthStrategies = [
    {
      icon: BarChart3,
      title: "Solutions – Strategy for Growth",
      description: "Scalable, data-driven strategies to expand reach and increase ROI.",
      strategies: [
        "Develop marketing funnels for each customer journey stage",
        "Run ad campaigns on Google & Meta",
        "Track KPIs, conversion rates, CAC, and LTV"
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop"
    },
    {
      icon: Mail,
      title: "Email Marketing – Strategy for Growth",
      description: "Retention, upsells, and reactivation—automated and personalized.",
      strategies: [
        "Segment audience by purchase, demographics, behavior",
        "Automate cart recovery, post-purchase emails, re-engagement",
        "Run A/B tests on subject lines, design, and CTAs"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop"
    },
    {
      icon: Zap,
      title: "Marketing Automation – Strategy for Growth",
      description: "Automate across marketing, sales, and support for scale.",
      strategies: [
        "Set up workflows in tools like HubSpot or ActiveCampaign",
        "Automate lead scoring, sales follow-ups, and triggered actions",
        "Use analytics to continuously optimize automation flows"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
    },
    {
      icon: PenTool,
      title: "Content Creation Tools – Strategy for Growth",
      description: "Content aligned with SEO, lead generation, and campaigns.",
      strategies: [
        "Use AI tools for faster content generation",
        "Build lead magnets (eBooks, guides, templates)",
        "Develop monthly content calendars aligned with campaigns"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop"
    },
    {
      icon: TrendingUp,
      title: "Social Media Marketing – Strategy for Growth",
      description: "Scale through paid, influencer, and remarketing strategies.",
      strategies: [
        "Launch paid campaigns for traffic and conversions",
        "Use remarketing for cart recovery and bounce-back users",
        "Partner with macro influencers and thought leaders"
      ],
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=400&fit=crop"
    },
    {
      icon: Users,
      title: "Audience Management – Strategy for Growth",
      description: "Personalization and retention through smart segmentation.",
      strategies: [
        "Build VIP customer lists and loyalty programs",
        "Use RFM analysis to segment based on behavior",
        "Integrate CRM + analytics for deeper insights"
      ],
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=400&fit=crop"
    },
    {
      icon: Globe,
      title: "Websites – Strategy for Growth",
      description: "Your site should convert—fast, optimized, and smart.",
      strategies: [
        "Optimize SEO, structure, and Core Web Vitals",
        "Use Hotjar or Clarity for heatmaps and replays",
        "Add live chat, multi-language support, lead capture funnels"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">💼</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Digital Marketing for Business & <span className="gradient-text">Startup Growth</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Whether you're launching a startup or scaling a growing business, our tailored digital marketing 
            strategies are designed to deliver ROI and results. Explore our curated solutions below.
          </p>
        </div>
      </section>

      {/* Startup Strategies Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">🧩 Free Startup Solutions</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Lean but powerful strategies designed for startups that need marketing that's quick, smart, and impactful.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {startupStrategies.map((strategy, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-white transition-all duration-300 animate-scale-in card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <img 
                    src={strategy.image} 
                    alt={strategy.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <strategy.icon className="w-8 h-8 text-white mb-2" />
                  <CardTitle className="text-white text-lg">{strategy.title}</CardTitle>
                  <CardDescription className="text-gray-300">{strategy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {strategy.strategies.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Strategies Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">🔥 Business Growth Solutions</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              As you scale, we align your digital marketing efforts to maximize reach, conversions, and long-term value.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {growthStrategies.map((strategy, index) => (
              <Card key={index} className="bg-black border-gray-800 hover:border-white transition-all duration-300 animate-scale-in card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <img 
                    src={strategy.image} 
                    alt={strategy.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <strategy.icon className="w-8 h-8 text-white mb-2" />
                  <CardTitle className="text-white text-lg">{strategy.title}</CardTitle>
                  <CardDescription className="text-gray-300">{strategy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {strategy.strategies.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">📩 Want a tailored Digital Marketing plan?</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
            Contact us today to get started with a comprehensive digital marketing strategy that drives real results.
          </p>
          <Button variant="redblue" size="lg" className="text-lg px-8 py-3">
            Get a Free Strategy Session
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default DigitalMarketingServices;
