
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Play, Quote } from "lucide-react";

const Testimonials = () => {
  const clientTestimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      position: "CEO",
      feedback: "Pawar Technology completely transformed our business operations. Their LMS solution helped us train over 2,000 employees efficiently, resulting in 40% improvement in productivity. The team's expertise and dedication exceeded our expectations.",
      rating: 5,
      image: "👩‍💼",
      projectType: "LMS Implementation",
      videoAvailable: true
    },
    {
      name: "Michael Chen",
      company: "StartupXYZ",
      position: "Founder & CTO",
      feedback: "Working with Pawar Tech was a game-changer for our startup. They built our entire web platform from scratch and helped us scale to 100,000+ users. The quality of code and attention to detail is exceptional.",
      rating: 5,
      image: "👨‍💻",
      projectType: "Web Development",
      videoAvailable: false
    },
    {
      name: "Emily Rodriguez",
      company: "EduLearn",
      position: "Product Manager",
      feedback: "Outstanding development team! They delivered our educational platform on time and within budget. The user experience is incredible, and our student engagement has increased by 75%. Highly recommended!",
      rating: 5,
      image: "👩‍🔬",
      projectType: "Educational Platform",
      videoAvailable: true
    },
    {
      name: "David Thompson",
      company: "RetailPlus",
      position: "Operations Manager",
      feedback: "The ERP system they built for us streamlined all our processes. We achieved ROI within 6 months and saw 30% reduction in operational costs. The real-time reporting features are fantastic.",
      rating: 5,
      image: "👨‍💼",
      projectType: "ERP System",
      videoAvailable: false
    },
    {
      name: "Dr. Priya Patel",
      company: "MedCare Systems",
      position: "Chief Medical Officer",
      feedback: "The healthcare management system they developed has revolutionized our patient care. We can now serve 300% more patients with the same resources. The AI-powered insights are incredibly valuable.",
      rating: 5,
      image: "👩‍⚕️",
      projectType: "Healthcare Software",
      videoAvailable: true
    },
    {
      name: "Arjun Singh",
      company: "FoodieDelight",
      position: "Marketing Director",
      feedback: "Their digital marketing expertise transformed our online presence. We saw 400% increase in online orders and 250% growth in social media engagement. The ROI has been phenomenal.",
      rating: 5,
      image: "👨‍🍳",
      projectType: "Digital Marketing",
      videoAvailable: false
    }
  ];

  const internTestimonials = [
    {
      name: "Rahul Sharma",
      role: "Full Stack Developer Intern",
      feedback: "My internship at Pawar Technology was incredible. I learned React, Node.js, and worked on real client projects. The mentorship was outstanding.",
      image: "👨‍💻",
      duration: "6 months"
    },
    {
      name: "Ananya Gupta",
      role: "UI/UX Design Intern",
      feedback: "Amazing learning experience! I worked on actual client designs and learned industry-standard tools. Got placed at a top design agency after completion.",
      image: "👩‍🎨",
      duration: "4 months"
    },
    {
      name: "Karthik Reddy",
      role: "Digital Marketing Intern",
      feedback: "Hands-on experience with real campaigns. Learned SEO, social media marketing, and analytics. The team treated me like a full-time employee.",
      image: "👨‍💼",
      duration: "3 months"
    }
  ];

  const placementSuccess = [
    { name: "Raj Patel", company: "Google", role: "Software Engineer", package: "₹35 LPA", image: "👨‍💻" },
    { name: "Sneha Joshi", company: "Microsoft", role: "Product Manager", package: "₹28 LPA", image: "👩‍💼" },
    { name: "Vikram Kumar", company: "Amazon", role: "DevOps Engineer", package: "₹32 LPA", image: "👨‍🔧" },
    { name: "Pooja Sharma", company: "Flipkart", role: "UI/UX Designer", package: "₹18 LPA", image: "👩‍🎨" }
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
            Don't just take our word for it. Here's what our satisfied clients, interns, 
            and placement candidates have to say about working with us.
          </p>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Client</span>
              <span className="text-white"> Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from businesses we've helped transform with our technology solutions.
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
                  <div className="flex items-center">
                    <div className="text-4xl mr-4">{testimonial.image}</div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-primary font-semibold">{testimonial.position}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  {testimonial.videoAvailable && (
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      <Play className="w-4 h-4 mr-2" />
                      Video
                    </Button>
                  )}
                </div>

                <Quote className="w-8 h-8 text-primary mb-4" />
                <blockquote className="text-gray-300 text-lg leading-relaxed mb-6">
                  "{testimonial.feedback}"
                </blockquote>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <span className="text-primary font-semibold text-sm">{testimonial.projectType}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intern Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Intern </span>
              <span className="gradient-text">Experiences</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our interns about their learning journey and growth experience with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {internTestimonials.map((intern, index) => (
              <div 
                key={index}
                className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-primary transition-colors text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{intern.image}</div>
                <h3 className="text-white font-bold text-lg mb-2">{intern.name}</h3>
                <p className="text-primary font-semibold mb-2">{intern.role}</p>
                <p className="text-gray-400 text-sm mb-4">Duration: {intern.duration}</p>
                <Quote className="w-6 h-6 text-primary mx-auto mb-4" />
                <blockquote className="text-gray-300 leading-relaxed">
                  "{intern.feedback}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Success */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Placement</span>
              <span className="text-white"> Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our mentees are now working at top tech companies worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementSuccess.map((placement, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-primary transition-colors text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{placement.image}</div>
                <h3 className="text-white font-bold mb-2">{placement.name}</h3>
                <p className="text-primary font-semibold mb-1">{placement.role}</p>
                <p className="text-gray-400 text-sm mb-2">{placement.company}</p>
                <div className="text-green-500 font-bold text-lg">{placement.package}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Video </span>
              <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch our clients share their success stories in their own words.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <div 
                key={index}
                className="bg-black rounded-2xl border border-gray-800 hover:border-primary transition-colors overflow-hidden group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gray-800 flex items-center justify-center relative cursor-pointer group-hover:bg-gray-700 transition-colors">
                  <Play className="w-16 h-16 text-primary" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold mb-2">Client Success Story #{video}</h3>
                  <p className="text-gray-400 text-sm">How we helped transform their business operations</p>
                </div>
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
