
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const AboutCharts = () => {
  const expenseData = [
    { month: 'Jan', development: 25000, marketing: 15000, operations: 10000 },
    { month: 'Feb', development: 28000, marketing: 18000, operations: 12000 },
    { month: 'Mar', development: 32000, marketing: 22000, operations: 14000 },
    { month: 'Apr', development: 35000, marketing: 25000, operations: 16000 },
    { month: 'May', development: 38000, marketing: 28000, operations: 18000 },
    { month: 'Jun', development: 42000, marketing: 32000, operations: 20000 }
  ];

  const growthData = [
    { year: '2020', clients: 50, revenue: 100000 },
    { year: '2021', clients: 150, revenue: 350000 },
    { year: '2022', clients: 300, revenue: 750000 },
    { year: '2023', clients: 500, revenue: 1200000 },
    { year: '2024', clients: 750, revenue: 1800000 }
  ];

  const strategyData = [
    { name: 'Innovation', value: 30, color: '#5935a3' },
    { name: 'Client Focus', value: 25, color: '#8b5cf6' },
    { name: 'Quality', value: 20, color: '#a855f7' },
    { name: 'Growth', value: 15, color: '#c084fc' },
    { name: 'Technology', value: 10, color: '#ddd6fe' }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">
            <span className="gradient-text">Performance</span>
            <span className="text-white"> Analytics</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Data-driven insights into our operational excellence and growth trajectory
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Monthly Expenses Chart */}
          <Card className="bg-black border-gray-800 animate-slide-in-left">
            <CardHeader>
              <CardTitle className="text-white">Monthly Expenses Breakdown</CardTitle>
              <CardDescription className="text-gray-400">Development, Marketing & Operations costs</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={expenseData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }} 
                  />
                  <Bar dataKey="development" fill="#5935a3" name="Development" />
                  <Bar dataKey="marketing" fill="#8b5cf6" name="Marketing" />
                  <Bar dataKey="operations" fill="#a855f7" name="Operations" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Growth Chart */}
          <Card className="bg-black border-gray-800 animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-white">Company Growth Trajectory</CardTitle>
              <CardDescription className="text-gray-400">Client base and revenue growth over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="year" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }} 
                  />
                  <Line type="monotone" dataKey="clients" stroke="#5935a3" strokeWidth={3} name="Clients" />
                  <Line type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={3} name="Revenue ($)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Strategy Distribution */}
        <Card className="bg-black border-gray-800 animate-fade-in">
          <CardHeader className="text-center">
            <CardTitle className="text-white">Strategic Focus Areas</CardTitle>
            <CardDescription className="text-gray-400">How we allocate our efforts for maximum impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              <ResponsiveContainer width={400} height={300}>
                <PieChart>
                  <Pie
                    data={strategyData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {strategyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
              
              <div className="space-y-4">
                {strategyData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-white font-medium">{item.name}</span>
                    <span className="text-gray-400">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {[
            { metric: "750+", label: "Successful Projects", icon: "🚀" },
            { metric: "500+", label: "Happy Clients", icon: "😊" },
            { metric: "98%", label: "Success Rate", icon: "📈" },
            { metric: "15+", label: "Countries Served", icon: "🌍" }
          ].map((item, index) => (
            <Card key={index} className="bg-black border-gray-800 text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2">{item.metric}</div>
                <div className="text-gray-300">{item.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCharts;
