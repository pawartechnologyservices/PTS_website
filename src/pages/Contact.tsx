
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: ["Pawar Technology Hub", "Andheri East, Mumbai", "Maharashtra 400069, India"]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 98765 43210", "+91 98765 43211", "Toll Free: 1800-123-4567"]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@pawartech.com", "sales@pawartech.com", "support@pawartech.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "Instagram", icon: "📸", url: "#" },
    { name: "Facebook", icon: "📘", url: "#" },
    { name: "YouTube", icon: "📺", url: "#" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Ready to transform your business? Let's discuss your project and explore how 
            we can help you achieve your digital goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-white">First Name</Label>
                      <Input
                        id="firstName"
                        type="text"
                        className="bg-gray-800 border-gray-700 text-white mt-2"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white">Last Name</Label>
                      <Input
                        id="lastName"
                        type="text"
                        className="bg-gray-800 border-gray-700 text-white mt-2"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-gray-800 border-gray-700 text-white mt-2"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="bg-gray-800 border-gray-700 text-white mt-2"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-white">Company Name (Optional)</Label>
                    <Input
                      id="company"
                      type="text"
                      className="bg-gray-800 border-gray-700 text-white mt-2"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-white">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      className="bg-gray-800 border-gray-700 text-white mt-2"
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea
                      id="message"
                      className="bg-gray-800 border-gray-700 text-white mt-2 min-h-[120px]"
                      placeholder="Tell us more about your project requirements..."
                    />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-primary transition-colors"
                  >
                    <div className="flex items-start">
                      <info.icon className="w-8 h-8 text-primary mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-300">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Social Media Links */}
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg hover:bg-primary transition-colors group"
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform">
                          {social.icon}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Visit Our </span>
              <span className="gradient-text">Office</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Located in the heart of Mumbai's tech hub, our office is easily accessible 
              and equipped with modern facilities.
            </p>
          </div>

          <div className="bg-black rounded-2xl border border-gray-800 overflow-hidden animate-fade-in">
            <div className="aspect-video bg-gray-800 flex items-center justify-center">
              {/* Placeholder for Google Maps */}
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="text-gray-400">
                  Pawar Technology Hub, Andheri East, Mumbai
                </p>
                <Button className="mt-4 bg-primary hover:bg-primary/90 text-white">
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Frequently Asked </span>
              <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on complexity. Simple websites typically take 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the initial consultation."
              },
              {
                question: "Do you offer ongoing support and maintenance?",
                answer: "Yes, we provide comprehensive support and maintenance packages to ensure your applications remain secure, updated, and performing optimally."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "We specialize in modern web technologies including React, Node.js, Python, and cloud platforms like AWS and Azure. We also work with mobile technologies and AI/ML solutions."
              },
              {
                question: "Can you work with our existing team?",
                answer: "Absolutely! We're experienced in collaborating with in-house teams and can seamlessly integrate with your existing development processes and tools."
              },
              {
                question: "What is your pricing structure?",
                answer: "Our pricing depends on project scope, complexity, and timeline. We offer both fixed-price and hourly billing options. Contact us for a detailed quote."
              },
              {
                question: "Do you sign NDAs and protect client confidentiality?",
                answer: "Yes, we take client confidentiality seriously and are happy to sign NDAs. All our team members are bound by strict confidentiality agreements."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-primary transition-colors animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-white font-bold text-lg mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in">
            Let's schedule a free consultation to discuss your project requirements and how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              Schedule Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
              onClick={() => window.open('https://wa.me/919876543210', '_blank')}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
