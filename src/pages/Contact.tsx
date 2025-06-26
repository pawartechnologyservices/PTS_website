import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Instagram, Facebook, Youtube } from "lucide-react";
import { ref, push } from "firebase/database";
import { database } from "@/lib/firebase";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: ["Office No A1002 Boulevard Towers,", "Sadhu Vaswani Chowk, Camp,", "Pune, Maharashtra 411001, India"]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 909-664-9556"]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["pawartechnologyservices@gmail.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:30 AM - 6:30 PM", "Saturday/Sunday: Closed"]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/pawartechnologyservices?igsh=dnV2cjY3ZWxvOGl2" },
    { name: "Facebook", icon: Facebook, url: "#" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare the contact data
      const contactData = {
        ...formData,
        createdAt: new Date().toISOString(),
        status: "new"
      };

      // Push data to Firebase Realtime Database
      const contactsRef = ref(database, 'contacts');
      await push(contactsRef, contactData);

      // Show success message
      toast.success("Message sent successfully!", {
        position: "bottom-center",
        style: {
          background: "#10B981",
          color: "#fff",
        },
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Failed to send message. Please try again.", {
        position: "bottom-center",
        style: {
          background: "#EF4444",
          color: "#fff",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-white">First Name</Label>
                      <Input
                        id="firstName"
                        type="text"
                        className="bg-gray-800 border-gray-700 text-white mt-2"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white">Last Name</Label>
                      <Input
                        id="lastName"
                        type="text"
                        className="bg-gray-800 border-gray-700 text-white mt-2"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
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
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="bg-gray-800 border-gray-700 text-white mt-2"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-white">Company Name (Optional)</Label>
                    <Input
                      id="company"
                      type="text"
                      className="bg-gray-800 border-gray-700 text-white mt-2"
                      placeholder="Enter your company name"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-white">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      className="bg-gray-800 border-gray-700 text-white mt-2"
                      placeholder="What can we help you with?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea
                      id="message"
                      className="bg-gray-800 border-gray-700 text-white mt-2 min-h-[120px]"
                      placeholder="Tell us more about your project requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : "Send Message"}
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
                        aria-label={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white group-hover:scale-110 transition-transform" />
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
              Located in the heart of Pune City, our office is easily accessible 
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
                  Office No A1002 Boulevard Towers, Sadhu Vaswani Chowk, Camp, Pune, Maharashtra 411001
                </p>
                <Button 
                  className="mt-4 bg-primary hover:bg-primary/90 text-white"
                  onClick={() => window.open('https://maps.app.goo.gl/ZVvNZZYkSjCVRXkq9', '_blank')}
                >
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
              onClick={() => window.open('https://wa.me/919096649556', '_blank')}
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