import Layout from "@/components/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock, Users, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Appointment = () => {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    department: "",
    message: ""
  });

  const services = [
    "Web Development",
    "Lead-Sales-Generation",
    "Software Development",
    "Digital Marketing",
    "UI/UX Design",
    "Strategy Consulting",
    "LMS Solutions",
    "ERP Systems",
    "Billing Solutions",
    "AI & Machine Learning",
    "Mobile App Development"
  ];

  const departments = [
    "Sales",
    "Development",
    "Marketing",
    "Strategy",
    "Support",
    "General Inquiry"
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", 
    "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
  ];

  const benefits = [
    "Free 30-minute consultation",
    "Expert technical guidance",
    "Customized solution recommendations",
    "No-obligation project estimate",
    "Direct access to our technical team"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment booking:", { ...formData, date, selectedTime });
    // Here you would typically send to CRM or WhatsApp
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Book Your Free <span className="gradient-text">Consultation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Ready to transform your business? Schedule a free consultation with our experts 
            to discuss your project requirements and explore how we can help you succeed.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Why Book a </span>
              <span className="gradient-text">Consultation?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-black p-6 rounded-xl border border-gray-800 hover:border-primary transition-colors text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <p className="text-white font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="animate-slide-in-left">
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                <h2 className="text-3xl font-bold text-white mb-8">Schedule Your Appointment</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-white">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="bg-gray-800 border-gray-700 text-white mt-2"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="bg-gray-800 border-gray-700 text-white mt-2"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-gray-800 border-gray-700 text-white mt-2"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-gray-800 border-gray-700 text-white mt-2"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-white">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData,company: e.target.value})}
                      className="bg-gray-800 border-gray-700 text-white mt-2"
                      placeholder="Enter your company name (optional)"
                    />
                  </div>

                  <div>
                    <Label className="text-white">Service Interest *</Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white mt-2">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        {services.map((service) => (
                          <SelectItem 
                            key={service} 
                            value={service}
                            className="hover:bg-gray-700 focus:bg-gray-700"
                          >
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-white">Department</Label>
                    <Select value={formData.department} onValueChange={(value) => setFormData({...formData, department: value})}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white mt-2">
                        <SelectValue placeholder="Choose department" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        {departments.map((dept) => (
                          <SelectItem 
                            key={dept} 
                            value={dept}
                            className="hover:bg-gray-700 focus:bg-gray-700"
                          >
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-white">Preferred Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal bg-gray-800 border-gray-700 text-white mt-2",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            className="bg-gray-800 text-white"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label className="text-white">Preferred Time *</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white mt-2">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-700 text-white">
                          <div className="max-h-60 overflow-y-auto custom-scrollbar">
                            <div className="grid grid-cols-2 gap-1 p-2">
                              {timeSlots.map((time) => (
                                <SelectItem 
                                  key={time} 
                                  value={time}
                                  className="hover:bg-gray-800 focus:bg-gray-800 rounded-md m-1"
                                >
                                  <div className="flex items-center justify-center p-2">
                                    <span className="text-primary-foreground">{time}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </div>
                          </div>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Project Details</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-gray-800 border-gray-700 text-white mt-2"
                      rows={4}
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Book Appointment
                  </Button>
                </form>
              </div>
            </div>

            {/* Information Panel */}
            <div className="animate-slide-in-right">
              <div className="space-y-8">
                {/* Meeting Info */}
                <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                  <h3 className="text-2xl font-bold text-white mb-6">What to Expect</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-2">30-Minute Consultation</h4>
                        <p className="text-gray-300">Detailed discussion about your project requirements and goals.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-2">Expert Team</h4>
                        <p className="text-gray-300">Meet with our senior technical consultants and project managers.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-2">Custom Proposal</h4>
                        <p className="text-gray-300">Receive a tailored solution proposal with timeline and pricing.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Options */}
                <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                  <h3 className="text-2xl font-bold text-white mb-6">Prefer to Talk Now?</h3>
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      If you have urgent requirements or prefer immediate assistance, you can reach us directly.
                    </p>
                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                      >
                        WhatsApp: +91 98765 43210
                      </Button>
                      <Button 
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                        onClick={() => window.location.href = 'tel:+919876543210'}
                      >
                        Call: +91 98765 43210
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                  <h3 className="text-2xl font-bold text-white mb-6">Office Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Monday - Friday</span>
                      <span className="text-white">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Saturday</span>
                      <span className="text-white">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Sunday</span>
                      <span className="text-gray-400">Closed</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-4">
                    All times are in Indian Standard Time (IST)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
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
                question: "Is the consultation really free?",
                answer: "Yes, absolutely! Our initial consultation is completely free with no strings attached. We want to understand your needs and see how we can help."
              },
              {
                question: "What happens after the consultation?",
                answer: "We'll provide you with a detailed proposal including project scope, timeline, and pricing. You're under no obligation to proceed."
              },
              {
                question: "Can we meet remotely?",
                answer: "Yes, we offer both in-person and virtual consultations via video call. Choose whatever works best for you."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity. Simple websites take 4-6 weeks, while complex applications can take 3-6 months."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-black p-6 rounded-xl border border-gray-800 hover:border-primary transition-colors animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-white font-bold text-lg mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CSS for the time picker */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </Layout>
  );
};

export default Appointment;