
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Code2, Database, Cloud, Shield, DollarSign, Target, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from 'recharts';

const SoftwareDevelopmentDetail = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Architecture",
      description: "Scalable software solutions built with enterprise-grade architecture"
    },
    {
      icon: Database,
      title: "Database Design & Optimization",
      description: "High-performance databases optimized for your business requirements"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Secure and scalable cloud-based software deployment"
    },
    {
      icon: Shield,
      title: "Security Implementation",
      description: "Enterprise-level security protocols and data protection"
    }
  ];

  const softwareMetrics = [
    { category: 'Enterprise Software', projects: 25, revenue: 5000000, efficiency: 95 },
    { category: 'SaaS Applications', projects: 18, revenue: 3200000, efficiency: 92 },
    { category: 'Mobile Apps', projects: 22, revenue: 2800000, efficiency: 88 },
    { category: 'API Development', projects: 35, revenue: 2100000, efficiency: 97 },
  ];

  const performanceData = [
    { month: 'Q1', deployment: 95, uptime: 99.9, satisfaction: 96 },
    { month: 'Q2', deployment: 97, uptime: 99.8, satisfaction: 98 },
    { month: 'Q3', deployment: 98, uptime: 99.9, satisfaction: 97 },
    { month: 'Q4', deployment: 99, uptime: 99.9, satisfaction: 99 },
  ];

  const techStack = [
    { name: 'Python/Django', value: 35, color: '#ffffff' },
    { name: 'Java/Spring', value: 25, color: '#cccccc' },
    { name: 'Node.js', value: 20, color: '#999999' },
    { name: 'C#/.NET', value: 15, color: '#777777' },
    { name: 'Others', value: 5, color: '#555555' },
  ];

  const benefits = [
    "90% reduction in manual processes",
    "500% improvement in data processing speed",
    "75% decrease in operational costs",
    "99.9% system uptime guarantee",
    "Enterprise-grade security standards"
  ];

  return (
    <Layout>
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">⚙️</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Software <span className="gradient-text">Development</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Enterprise-grade software solutions that automate processes, increase efficiency, 
            and drive digital transformation across your organization.
          </p>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">Software Performance Analytics</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Real metrics from our enterprise software deployments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-black border-gray-800 animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-white">System Performance Metrics</CardTitle>
                <CardDescription className="text-gray-400">Deployment success, uptime & satisfaction rates</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={performanceData}>
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
                    <Area type="monotone" dataKey="deployment" stackId="1" stroke="#ffffff" fill="#ffffff" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="uptime" stackId="2" stroke="#cccccc" fill="#cccccc" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="satisfaction" stackId="3" stroke="#999999" fill="#999999" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800 animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-white">Technology Stack Distribution</CardTitle>
                <CardDescription className="text-gray-400">Programming languages & frameworks used</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={techStack}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {techStack.map((entry, index) => (
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
              <CardTitle className="text-white">Software Development Portfolio</CardTitle>
              <CardDescription className="text-gray-400">Projects completed, revenue generated, and efficiency achieved</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={softwareMetrics} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="category" stroke="#ffffff" />
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

      {/* Services & Benefits */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-white mb-6">Enterprise Software Solutions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="bg-gray-900 border-gray-800 hover:border-white transition-colors card-hover">
                    <CardHeader>
                      <service.icon className="w-8 h-8 text-white mb-2" />
                      <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                      <CardDescription className="text-gray-300 text-sm">{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <h3 className="text-3xl font-bold text-white mb-6">Proven Results</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button variant="rgb" className="mt-8">
                Start Software Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">Transform Your Business with Custom Software</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
            Build scalable, secure, and efficient software solutions that give you a competitive edge.
          </p>
          <Button variant="rgb" size="lg" className="text-lg">
            Get Software Consultation
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SoftwareDevelopmentDetail;
