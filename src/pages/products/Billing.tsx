
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard, FileText, Globe, DollarSign, Zap, Shield } from "lucide-react";

const Billing = () => {
  const features = [
    {
      icon: FileText,
      title: "Automated Invoice Generation",
      description: "Generate professional invoices automatically based on your business rules and schedules"
    },
    {
      icon: CreditCard,
      title: "Payment Gateway Integration",
      description: "Seamless integration with popular payment gateways for instant payment processing"
    },
    {
      icon: Globe,
      title: "Multi-Currency Support",
      description: "Handle international transactions with real-time currency conversion"
    },
    {
      icon: DollarSign,
      title: "Tax Management",
      description: "Automatic tax calculations with support for GST, VAT, and other tax systems"
    },
    {
      icon: Zap,
      title: "Recurring Billing",
      description: "Set up subscription billing and automated recurring payment collection"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Bank-grade security with PCI DSS compliance for payment processing"
    }
  ];

  const benefits = [
    "Reduce billing errors by 95%",
    "Faster payment collection by 50%",
    "Automated tax compliance",
    "Real-time financial reporting",
    "Customer self-service portal",
    "Mobile-responsive design"
  ];

  const integrations = [
    { name: "Razorpay", logo: "💳" },
    { name: "PayPal", logo: "🌐" },
    { name: "Stripe", logo: "💰" },
    { name: "Square", logo: "⬜" },
    { name: "PayU", logo: "🔄" },
    { name: "CCAvenue", logo: "🏛️" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Billing & Invoice System
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Automated billing solution with multi-currency support, payment gateway integration, 
                and comprehensive reporting. Streamline your billing process and get paid faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  See Live Demo
                </Button>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700">
                <div className="text-6xl mb-6 text-center">💳</div>
                <div className="space-y-4">
                  <div className="flex justify-between text-white">
                    <span>Payment Success Rate</span>
                    <span className="text-green-500 font-bold">99.8%</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Collection Time</span>
                    <span className="text-green-500 font-bold">50% Faster</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Error Reduction</span>
                    <span className="text-green-500 font-bold">95%</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Processing Time</span>
                    <span className="text-primary font-bold">Real-time</span>
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
              Everything you need to automate your billing process and manage payments efficiently.
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
                Why Choose Our <span className="gradient-text">Billing System?</span>
              </h2>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Learn More
              </Button>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-black p-8 rounded-2xl border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">Billing Workflow</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Create Invoice</h4>
                      <p className="text-gray-400 text-sm">Automated generation based on orders/subscriptions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Send to Customer</h4>
                      <p className="text-gray-400 text-sm">Email delivery with payment link</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Process Payment</h4>
                      <p className="text-gray-400 text-sm">Secure payment through integrated gateways</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Update Records</h4>
                      <p className="text-gray-400 text-sm">Automatic reconciliation and reporting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Payment Gateway</span>
              <span className="text-white"> Integrations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seamlessly integrated with popular payment gateways for maximum flexibility and coverage.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-primary transition-colors text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{integration.logo}</div>
                <h3 className="text-white font-semibold">{integration.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Simple </span>
              <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. Choose the plan that fits your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-primary transition-colors animate-scale-in">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-primary mb-4">₹1,50,000</div>
              <p className="text-gray-400 mb-6">Perfect for small businesses</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Up to 1,000 invoices/month
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Basic payment gateways
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Standard reports
                </li>
              </ul>
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                Get Started
              </Button>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-primary relative scale-105 animate-scale-in animation-delay-100">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-primary mb-4">₹3,00,000</div>
              <p className="text-gray-400 mb-6">For growing businesses</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Up to 10,000 invoices/month
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  All payment gateways
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  API access
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Get Started
              </Button>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-primary transition-colors animate-scale-in animation-delay-200">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-primary mb-4">Custom</div>
              <p className="text-gray-400 mb-6">For large organizations</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Unlimited invoices
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  White-label solution
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  On-premise deployment
                </li>
              </ul>
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">
            Ready to Automate Your Billing?
          </h2>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in">
            Start streamlining your billing process today. Get paid faster and reduce errors with our automated solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
              Request Demo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Billing;
