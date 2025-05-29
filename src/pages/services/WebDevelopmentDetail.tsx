import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Code, Globe, TrendingUp, Users, DollarSign, Target, BarChart3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const WebDevelopmentDetail = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Web Applications",
      description: "Tailored web solutions built with modern frameworks and technologies"
    },
    {
      icon: Globe,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect display across all devices"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Lightning-fast websites optimized for speed and user experience"
    },
    {
      icon: BarChart3,
      title: "SEO Integration",
      description: "Search engine optimized websites for maximum visibility"
    }
  ];

  const projectData = [
    { name: 'E-commerce', projects: 45, revenue: 2500000 },
    { name: 'Corporate', projects: 32, revenue: 1800000 },
    { name: 'Startup', projects: 28, revenue: 1200000 },
    { name: 'Portfolio', projects: 15, revenue: 600000 },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 180000, projects: 8 },
    { month: 'Feb', revenue: 220000, projects: 12 },
    { month: 'Mar', revenue: 285000, projects: 15 },
    { month: 'Apr', revenue: 310000, projects: 18 },
    { month: 'May', revenue: 425000, projects: 22 },
    { month: 'Jun', revenue: 520000, projects: 28 },
  ];

  const techData = [
    { name: 'React/Next.js', value: 40, color: '#ffffff' },
    { name: 'Node.js', value: 30, color: '#cccccc' },
    { name: 'PHP/Laravel', value: 20, color: '#999999' },
    { name: 'Others', value: 10, color: '#666666' },
  ];

  const benefits = [
    "95% faster page load times",
    "300% increase in conversion rates", 
    "80% reduction in bounce rate",
    "150% improvement in SEO rankings",
    "24/7 technical support included"
  ];

  const profitStrategy = [
    {
      icon: DollarSign,
      title: "Revenue Generation",
      description: "Our web development increases client revenue by 400% through optimized user experience and conversion funnels."
    },
    {
      icon: Target,
      title: "Market Expansion",
      description: "Reach 75% more customers with mobile-responsive designs that work perfectly across all devices."
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Achieve 250% growth in online presence with SEO-optimized websites that rank higher in search results."
    }
  ];

  return (
    <Layout>
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">💻</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Web <span className="gradient-text">Development</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Custom web applications that drive business growth with modern frameworks, 
            responsive design, and performance optimization.
          </p>
        </div>
      </section>

      {/* Revenue Analytics */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">Our Performance Analytics</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Data-driven results from our web development projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-black border-gray-800 animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-white">Monthly Revenue Growth</CardTitle>
                <CardDescription className="text-gray-400">Revenue generated from web projects</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#ffffff" />
                    <YAxis stroke="#ffffff" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#000000', 
                        border: '1px solid #374151',
                        color: '#ffffff'
                      }} 
                    />
                    <Line type="monotone" dataKey="revenue" stroke="#ffffff" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800 animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-white">Project Distribution</CardTitle>
                <CardDescription className="text-gray-400">Types of projects completed</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={techData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {techData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#000000', 
                        border: '1px solid #374151',
                        color: '#ffffff'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-black border-gray-800 animate-scale-in">
            <CardHeader>
              <CardTitle className="text-white">Projects & Revenue by Category</CardTitle>
              <CardDescription className="text-gray-400">Breakdown of completed projects and revenue generated</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={projectData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#ffffff" />
                  <YAxis yAxisId="left" stroke="#ffffff" />
                  <YAxis yAxisId="right" orientation="right" stroke="#ffffff" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#000000', 
                      border: '1px solid #374151',
                      color: '#ffffff'
                    }} 
                  />
                  <Bar yAxisId="left" dataKey="projects" fill="#ffffff" name="Projects" />
                  <Bar yAxisId="right" dataKey="revenue" fill="#cccccc" name="Revenue (₹)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">Web Development Services</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive web solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-white transition-colors animate-slide-in-left card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <service.icon className="w-12 h-12 text-white mb-4" />
                  <CardTitle className="text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Profit Strategy */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              How We Drive <span className="gradient-text">Profit</span> for Your Business
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Strategic web development that delivers measurable business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profitStrategy.map((strategy, index) => (
              <Card key={index} className="bg-black border-gray-800 hover:border-white transition-colors animate-scale-in card-hover" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader className="text-center">
                  <strategy.icon className="w-16 h-16 text-white mx-auto mb-4" />
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
              <h2 className="text-4xl font-bold text-white mb-6">Proven Web Development Results</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button variant="redblue" className="mt-8">
                Start Your Web Project
              </Button>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                alt="Web Development Process"
                className="rounded-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Web Presence?</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
            Let's create a powerful web application that drives your business forward.
          </p>
          <Button variant="redblue" size="lg" className="text-lg">
            Get Free Web Consultation
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WebDevelopmentDetail;
