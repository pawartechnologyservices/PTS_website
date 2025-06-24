import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Play, Quote } from "lucide-react";

const Testimonials = () => {
  const clientTestimonials = [
    {
      name: "Shubh Interior",
      company: "Interior Design Company",
      feedback: "PTS transformed our manual operations into a fully digital system. The custom billing software they provided has saved us hours every week, and the professional website has elevated our brand image. Their support team is always available and understands our business deeply. Highly recommended!",
      services: "Website, Billing Software, Business Automation"
    },
    {
      name: "Maschery Resort & Villa",
      company: "Hospitality & Tourism",
      feedback: "Thanks to PTS, we now manage our bookings, staff, and finances all in one ERP system. It's seamless, intuitive, and customized to our needs. Their end-to-end support from planning to execution has helped us focus on delivering top-notch guest experiences.",
      services: "ERP, Booking System, End-to-End Automation"
    },
    {
      name: "Dealight Property Consultant",
      company: "Real Estate Services",
      feedback: "Before working with PTS, lead tracking and follow-ups were a nightmare. With the customized CRM and automation tools, we've seen a 40% increase in our response rate and better conversions. The team also helped us with digital branding. Excellent service from a visionary tech partner!",
      services: "CRM, Website, Lead Management System"
    },
    {
      name: "Vista Bella Realty",
      company: "Real Estate Firm",
      feedback: "We needed a modern, scalable platform to showcase our projects. PTS delivered a beautiful, functional website integrated with a sales dashboard that helps our agents stay organized and efficient. The team is proactive and always ahead of the curve.",
      services: "Website, Property Listing Platform, Sales Dashboard"
    },
    {
      name: "SK Enterprises",
      company: "Security Services Provider",
      feedback: "PTS built an ERP system tailored to manage our guards, attendance, payroll, and billing. It's the backbone of our operations now. The professionalism and after-support from their team are truly impressive.",
      services: "ERP, HRM Module, Billing Software"
    },
    {
      name: "Al-Burrakh Technology",
      company: "IT Solutions Company",
      feedback: "As a tech company, we needed a partner who understands scalability and structure. PTS gave us strategic support in product planning, lead funnels, and building a conversion-focused website. It's more than just development – it's real business consulting.",
      services: "Business Support, Lead Management, Website"
    },
    {
      name: "Zarinova Entertainment",
      company: "Events & Media",
      feedback: "Managing bookings, artist schedules, and client follow-ups was messy – until we got PTS onboard. Their team built a smart solution tailored to our needs. Now, everything is organized, and our brand looks stunning online!",
      services: "Booking Platform, CRM, Website"
    },
    {
      name: "Al-Burrakh Fashion",
      company: "Fashion E-Commerce",
      feedback: "PTS helped us launch a complete e-commerce store with integrated ERP and billing modules. Inventory, orders, customer communication – everything works like a charm. Their UI/UX team did a brilliant job capturing the essence of our fashion brand.",
      services: "E-Commerce Platform, ERP, Billing"
    }
  ];

  const lmsTestimonials = [
    {
      name: "EliteSpace Interiors",
      feedback: "PTS's LMS made training our interior design team seamless. The interactive courses and progress tracking helped us maintain quality and speed up project delivery."
    },
    {
      name: "Horizon Realty Group",
      feedback: "With the LMS, our sales staff and agents stay updated on market trends and compliance. It's user-friendly and helped improve overall team productivity."
    },
    {
      name: "SecureWay Solutions",
      feedback: "Training security personnel across multiple locations was always tough. PTS LMS's mobile-friendly modules and auto-certifications solved this perfectly."
    }
  ];

  const erpTestimonials = [
    {
      name: "Seaside Retreat Resorts",
      feedback: "PTS developed a custom ERP that streamlined room bookings, inventory, and staff schedules. It improved our operational efficiency and reduced errors."
    },
    {
      name: "Landmark Property Advisors",
      feedback: "Our ERP system from PTS helps track leads, client documents, and payments all in one place. It's tailored exactly for our real estate needs."
    },
    {
      name: "UrbanStyle Fashion Co.",
      feedback: "From product management to order fulfillment, the ERP has enabled us to scale quickly without increasing overhead. Inventory accuracy has improved drastically."
    }
  ];

  const billingTestimonials = [
    {
      name: "TechVibe Solutions",
      feedback: "The billing software from PTS simplified invoicing across all projects, automating GST calculations and improving cash flow management."
    },
    {
      name: "Nova Interiors",
      feedback: "Stage-wise billing is crucial for us. PTS's billing system allows clear milestone invoicing and gives clients transparent updates on payments."
    },
    {
      name: "SparkWave Events",
      feedback: "Managing multiple event billing cycles and vendor payments was a mess earlier. Now everything's organized, automated, and hassle-free thanks to PTS."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            What Our <span className="gradient-text">Clients Say</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Real businesses. Real results. Here's what our valued clients say about working with Pawar Technology Services.
          </p>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Client</span>
              <span className="text-white"> Testimonials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Feedback from businesses we've helped transform with our technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-primary transition-colors animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-primary font-semibold">{testimonial.company}</p>
                    <p className="text-gray-400 text-sm mt-1">Services: {testimonial.services}</p>
                  </div>
                </div>

                <Quote className="w-8 h-8 text-primary mb-4" />
                <blockquote className="text-gray-300 text-lg leading-relaxed mb-6">
                  "{testimonial.feedback}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LMS Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Lead Management </span>
              <span className="gradient-text">System</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What our clients say about our LMS solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lmsTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-primary transition-colors animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-white font-bold text-lg mb-2">{testimonial.name}</h3>
                <Quote className="w-6 h-6 text-primary mx-auto mb-4" />
                <blockquote className="text-gray-300 leading-relaxed">
                  "{testimonial.feedback}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Testimonials */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">ERP</span>
              <span className="text-white"> Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Client experiences with our Enterprise Resource Planning systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {erpTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-primary transition-colors animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-white font-bold text-lg mb-2">{testimonial.name}</h3>
                <Quote className="w-6 h-6 text-primary mx-auto mb-4" />
                <blockquote className="text-gray-300 leading-relaxed">
                  "{testimonial.feedback}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Billing Software Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Billing </span>
              <span className="gradient-text">Software</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Client feedback on our custom billing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {billingTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-primary transition-colors animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-white font-bold text-lg mb-2">{testimonial.name}</h3>
                <Quote className="w-6 h-6 text-primary mx-auto mb-4" />
                <blockquote className="text-gray-300 leading-relaxed">
                  "{testimonial.feedback}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "1000+", label: "Projects Delivered" },
              { number: "15+", label: "Countries Served" }
            ].map((stat, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in">
            Let us help you achieve similar results and become our next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;