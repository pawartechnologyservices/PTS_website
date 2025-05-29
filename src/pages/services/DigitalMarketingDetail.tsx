
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Search, TrendingUp, Users, Share2, DollarSign, Target, BarChart3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const DigitalMarketingDetail = () => {
  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Improve search rankings and drive organic traffic to your website"
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build brand awareness and engage customers across social platforms"
    },
    {
      icon: TrendingUp,
      title: "Pay-Per-Click Advertising",
      description: "Targeted advertising campaigns that deliver immediate results"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize your marketing performance"
    }
  ];

  const campaignData = [
    { channel: 'Google Ads', leads: 1250, cost: 180000, roi: 450 },
    { channel: 'Facebook Ads', leads: 980, cost: 120000, roi: 380 },
    { channel: 'SEO', leads: 2100, cost: 80000, roi: 650 },
    { channel: 'Social Media', leads: 750, cost: 60000, roi: 320 },
  ];

  const growthData = [
    { month: 'Jan', traffic: 15000, leads: 450, conversions: 85 },
    { month: 'Feb', traffic: 22000, leads: 680, conversions: 125 },
    { month: 'Mar', traffic: 35000, leads: 920, conversions: 180 },
    { month: 'Apr', traffic: 48000, leads: 1200, conversions: 240 },
    { month: 'May', traffic: 65000, leads: 1580, conversions: 320 },
    { month: 'Jun', traffic: 82000, leads: 2100, conversions: 450 },
  ];

  const channelDistribution = [
    { name: 'Organic Search', value: 35, color: '#ffffff' },
    { name: 'Paid Ads', value: 28, color: '#cccccc' },
    { name: 'Social Media', value: 22, color: '#999999' },
    { name: 'Email Marketing', value: 10, color: '#777777' },
    { name: 'Others', value: 5, color: '#555555' },
  ];

  const benefits = [
    "400% increase in website traffic",
    "350% improvement in lead generation",
    "250% boost in conversion rates",
    "85% reduction in customer acquisition cost",
    "24/7 campaign monitoring and optimization"
  ];

  return (
    <Layout>
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">📈</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Digital <span className="gradient-text">Marketing</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Comprehensive digital marketing strategies that drive traffic, generate leads, 
            and convert prospects into loyal customers.
          </p>
        </div>
      </section>

      {/* Marketing Analytics */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">Marketing Performance Dashboard</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Real-time analytics from our digital marketing campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-black border-gray-800 animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-white">Traffic & Conversion Growth</CardTitle>
                <CardDescription className="text-gray-400">Monthly progression of key metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={growthData}>
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
                    <Line type="monotone" dataKey="traffic" stroke="#ffffff" strokeWidth={3} />
                    <Line type="monotone" dataKey="leads" stroke="#cccccc" strokeWidth={3} />
                    <Line type="monotone" dataKey="conversions" stroke="#999999" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800 animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-white">Traffic Channel Distribution</CardTitle>
                <CardDescription className="text-gray-400">Source of website visitors</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={channelDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {channelDistribution.map((entry, index) => (
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
              <CardTitle className="text-white">Campaign Performance by Channel</CardTitle>
              <CardDescription className="text-gray-400">Leads generated, cost invested, and ROI achieved</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={campaignData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="channel" stroke="#ffffff" />
                  <YAxis yAxisId="left" stroke="#ffffff" />
                  <YAxis yAxisId="right" orientation="right" stroke="#ffffff" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#000000', 
                      border: '1px solid #374151',
                      color: '#ffffff'
                    }} 
                  />
                  <Bar yAxisId="left" dataKey="leads" fill="#ffffff" name="Leads Generated" />
                  <Bar yAxisId="right" dataKey="roi" fill="#cccccc" name="ROI %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services & Results */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-white mb-6">Digital Marketing Services</h2>
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
              <h3 className="text-3xl font-bold text-white mb-6">Marketing Results</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button variant="redblue" className="mt-8">
                Start Marketing Campaign
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Accelerate Your Growth?</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
            Launch data-driven marketing campaigns that deliver measurable results and ROI.
          </p>
          <Button variant="redblue" size="lg" className="text-lg">
            Get Marketing Strategy
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default DigitalMarketingDetail;
