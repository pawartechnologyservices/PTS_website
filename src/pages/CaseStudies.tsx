import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowUp, Calendar, Globe, Zap, TrendingUp, Users, BookOpen, ShoppingCart, Scale, HeartPulse, Dumbbell, ShoppingBag, GraduationCap, Stethoscope, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const CaseStudyCard = ({ study, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const icons = {
    "FinTech": <Zap className="w-6 h-6" />,
    "EdTech": <BookOpen className="w-6 h-6" />,
    "E-Commerce": <ShoppingCart className="w-6 h-6" />,
    "Legal Services": <Scale className="w-6 h-6" />,
    "HealthTech": <HeartPulse className="w-6 h-6" />,
    "Fitness": <Dumbbell className="w-6 h-6" />,
    "Fashion": <ShoppingBag className="w-6 h-6" />,
    "Online Learning": <GraduationCap className="w-6 h-6" />,
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
    >
      <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-primary/20 p-3 rounded-xl">
            {icons[study.industry] || <Globe className="w-6 h-6" />}
          </div>
          <div>
            <div className="text-primary font-semibold text-sm uppercase tracking-wider">{study.industry}</div>
            <div className="flex items-center text-gray-400 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {study.duration}
            </div>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
        <p className="text-primary font-semibold mb-6">Client: {study.client}</p>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Challenge
            </h4>
            <p className="text-gray-300 leading-relaxed">{study.problem}</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              PTS Strategy
            </h4>
            <ul className="text-gray-300 leading-relaxed space-y-3">
              {study.strategy.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {study.technology && (
            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {study.technology.map((tech, idx) => (
                  <span key={idx} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 h-full">
          <h4 className="text-white font-semibold mb-6 text-xl flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Key Outcomes
          </h4>
          <div className="space-y-4 mb-8">
            {study.results.map((result, idx) => (
              <div key={idx} className="flex items-start">
                <ArrowUp className="w-5 h-5 text-green-500 mr-3 mt-0.5 rotate-45 flex-shrink-0" />
                <span className="text-gray-300">{result}</span>
              </div>
            ))}
          </div>

          {study.testimonial && (
            <div className="border-t border-gray-700 pt-6">
              <blockquote className="text-gray-300 italic mb-4 relative">
                <span className="absolute -top-6 left-0 text-4xl text-primary opacity-20">"</span>
                {study.testimonial}
              </blockquote>
              <div>
                <div className="text-white font-semibold">{study.clientName}</div>
                <div className="text-primary text-sm">{study.clientPosition}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const caseStudies = [
    {
      title: "FinBoost – A FinTech Startup",
      client: "FinTech (Personal Finance Management)",
      industry: "FinTech",
      duration: "6 months",
      problem: "No in-house technical expertise, no product roadmap or working prototype. Needed investor-ready MVP with limited budget.",
      strategy: [
        "Conducted 3 business consultation sessions for idea validation",
        "Finalized core feature set for MVP focusing on young professionals",
        "Built cross-platform MVP with Flutter (Expense Tracker, Budget Alerts, Goal Savings)",
        "Designed complete brand identity and intuitive UI with gamification",
        "Created landing page with pre-launch signups and WhatsApp referral campaign",
        "Prepared investor pitch deck with tech architecture and business model"
      ],
      results: [
        "15,000+ early users acquired in 5 months",
        "INR 25 lakh raised from 3 angel investors",
        "Full-time team hired and transitioned from PTS tech support"
      ],
      technology: [ "Firebase", "Node.js", "Stripe API"],
      testimonial: "PTS took our rough idea and transformed it into a market-ready product that attracted investors. Their end-to-end support was crucial for our launch.",
      clientName: "Rahul Sharma",
      clientPosition: "Founder, FinBoost",
      tags: ["FinTech", "MVP", "Startup"]
    },
    {
      title: "KidzSmart – An EdTech Startup",
      client: "EdTech (Online Classes for Kids)",
      industry: "EdTech",
      duration: "4 months",
      problem: "Manual operations (Zoom links, feedback, payments), no retention tools for students, parents struggled with progress tracking.",
      strategy: [
        "Developed comprehensive LMS portal with student, parent, and admin logins",
        "Automated Zoom integration, attendance, and feedback systems",
        "Created gamified UI with rewards, badges, and progress bars",
        "Added weekly interactive quiz modules for engagement",
        "Produced marketing kit with demo videos and testimonials",
        "Implemented Facebook/Instagram ad campaigns targeting mothers"
      ],
      results: [
        "2,500+ active paying users acquired",
        "80% retention rate due to gamified learning",
        "Saved 25+ hours monthly on manual coordination",
        "Built trusted reputation through automation"
      ],
      technology: ["React", "MongoDB", "Zoom API", "WhatsApp Business API"],
      testimonial: "The platform PTS built transformed our operations from chaotic to streamlined. Parents love the progress tracking and kids enjoy the gamified learning.",
      clientName: "Priya Mehta",
      clientPosition: "CEO, KidzSmart",
      tags: ["EdTech", "LMS", "Education"]
    },
    {
      title: "FreshKart – Grocery Startup",
      client: "E-Commerce / Grocery",
      industry: "E-Commerce",
      duration: "5 months",
      problem: "Needed complete platform from scratch, lacked automation for delivery/orders/inventory, limited local market awareness.",
      strategy: [
        "Built website + PWA with cart, scheduling, and offer systems",
        "Developed admin dashboard for stock, order, and customer management",
        "Implemented local SEO strategy with Google Business setup",
        "Created 'near me' ad campaigns for hyperlocal targeting",
        "Partnered with housing societies for trust-building",
        "Launched referral & loyalty program with wallet cashbacks"
      ],
      results: [
        "7,500+ orders processed in first 3 months",
        "1,200 loyal customers with high repeat rates",
        "35% increase in average order value",
        "Real-time delivery coordination enabled"
      ],
      technology: ["Next.js", "Node.js", "MongoDB", "Google Maps API"],
      testimonial: "From zero to 7,500 orders in three months - PTS made it possible with their e-commerce expertise and local marketing strategies.",
      clientName: "Arjun Patel",
      clientPosition: "Founder, FreshKart",
      tags: ["E-Commerce", "Grocery", "Local SEO"]
    },
    {
      title: "LegalHelp – Legal Tech Service",
      client: "B2B Legal Services",
      industry: "Legal Services",
      duration: "3 months",
      problem: "No CRM or lead management, poor onboarding experience, difficulty converting leads into paying clients.",
      strategy: [
        "Developed custom CRM with lead tracking and follow-up system",
        "Created client portal with auto notifications and sales pipeline",
        "Integrated pricing estimator + PDF proposal generation",
        "Setup WhatsApp Business for instant client communication",
        "Optimized Google Ads for 'startup registration help' keywords",
        "Developed content library with blogs and comparison charts"
      ],
      results: [
        "30% increase in lead conversion rate",
        "250% growth in website visits",
        "60% reduction in client onboarding time",
        "Improved client retention through automation"
      ],
      technology: ["React", "Firebase", "Twilio API", "Google Ads API"],
      testimonial: "Our conversion rates skyrocketed after implementing PTS's CRM system. The automated follow-ups have been a game-changer.",
      clientName: "Neha Gupta",
      clientPosition: "Managing Partner, LegalHelp",
      tags: ["Legal", "CRM", "Automation"]
    },
    {
      title: "WellNest – Mental Health Platform",
      client: "HealthTech / Mental Wellness",
      industry: "HealthTech",
      duration: "5 months",
      problem: "Lacked online presence, needed secure booking/therapy platform, no brand awareness in competitive market.",
      strategy: [
        "Built booking system with therapist profiles and scheduling",
        "Integrated encrypted video calling for secure sessions",
        "Developed mental wellness blog content strategy",
        "Optimized SEO for therapy-related keywords",
        "Launched Instagram wellness reels campaign",
        "Collaborated with mental health influencers"
      ],
      results: [
        "800+ bookings in first 3 months of operation",
        "Top 10 Google rankings for 5 niche keywords",
        "Built community of 10,000+ engaged followers",
        "Established brand as mental health authority"
      ],
      technology: ["React Native", "WebRTC", "Stripe", "Instagram API"],
      testimonial: "PTS understood the sensitivity of our domain and created a platform that clients trust. Their SEO work brought us highly qualified leads.",
      clientName: "Dr. Amit Desai",
      clientPosition: "Clinical Director, WellNest",
      tags: ["HealthTech", "Mental Health", "SEO"]
    },
    {
      title: "UrbanFitZone – Fitness Startup",
      client: "Fitness / SaaS",
      industry: "Fitness",
      duration: "6 months",
      problem: "Needed an app to replace manual scheduling, poor engagement in virtual training sessions, trainers couldn't track client fitness goals.",
      strategy: [
        "Built app with workout plans, video sessions, and diet tracker",
        "Developed admin backend for trainer management",
        "Created gamified dashboard with badges and leaderboard",
        "Implemented fitness challenges and progress tracking",
        "Setup push notifications and WhatsApp follow-ups",
        "Developed loyalty program with reward coupons"
      ],
      results: [
        "Doubled engagement in virtual sessions",
        "70% increase in session bookings",
        "4.9/5 Play Store rating with 10,000+ downloads",
        "Improved trainer-client communication"
      ],
      technology: ["React Native", "Node.js", "MongoDB", "Firebase"],
      testimonial: "The app transformed how we deliver fitness services. Our clients love the tracking features and our trainers can now focus on coaching.",
      clientName: "Vikram Singh",
      clientPosition: "Founder, UrbanFitZone",
      tags: ["Fitness", "Mobile App", "SaaS"]
    },
    {
      title: "StyleCrate – Fashion E-Commerce",
      client: "Fashion / D2C",
      industry: "Fashion",
      duration: "4 months",
      problem: "Needed brand identity and full-stack e-commerce portal, poor user experience in previous version, lacked conversion-focused marketing.",
      strategy: [
        "Complete rebranding with new name, logo, and visual identity",
        "UX overhaul with high-conversion landing pages",
        "Built e-commerce site with advanced product filtering",
        "Integrated Instagram shopping features",
        "Implemented secure checkout and payment options",
        "Launched influencer campaign with #StyleYourCrate challenge"
      ],
      results: [
        "1,000 orders in first 30 days post-launch",
        "3x increase in time-on-site",
        "Featured in major fashion blogs and media",
        "Established strong brand identity"
      ],
      technology: ["Shopify", "React", "Instagram API", "Stripe"],
      testimonial: "PTS transformed our online presence from generic to premium. The new site reflects our brand perfectly and converts visitors effortlessly.",
      clientName: "Ananya Reddy",
      clientPosition: "Creative Director, StyleCrate",
      tags: ["Fashion", "E-Commerce", "Branding"]
    },
    {
      title: "SkillSphere – Online Learning Platform",
      client: "EdTech / Online Learning",
      industry: "Online Learning",
      duration: "3 months",
      problem: "High website bounce rate, incomplete course enrollment flow, needed engaging content strategy.",
      strategy: [
        "Optimized course platform with improved checkout process",
        "Added video previews and student testimonials",
        "Created email drip campaigns with personalized recommendations",
        "Developed YouTube + blog content funnel",
        "Produced weekly tips videos linked to courses",
        "Optimized SEO for course-related keywords"
      ],
      results: [
        "45% improvement in enrollment rates",
        "5,000+ organic visitors monthly",
        "Built strong email subscriber base",
        "Increased course completion rates"
      ],
      technology: ["WordPress", "LearnDash", "Mailchimp", "YouTube API"],
      testimonial: "The content strategy PTS implemented brought us qualified leads who actually complete our courses. Our conversion rates have never been better.",
      clientName: "Rajiv Malhotra",
      clientPosition: "Founder, SkillSphere",
      tags: ["EdTech", "Online Learning", "SEO"]
    },
    {
      title: "Medilink – Clinic Aggregator App",
      client: "HealthTech",
      industry: "HealthTech",
      duration: "4 months",
      problem: "No backend system to manage clinics, doctors hesitant to join untested platform, needed patient acquisition strategy.",
      strategy: [
        "Built dual interfaces for doctors and patients",
        "Developed appointment sync and rating system",
        "Conducted onboarding workshops for clinics",
        "Created 'Clinic Growth Pack' onboarding kit",
        "Established regional partnerships with 20+ clinics",
        "Implemented patient referral program"
      ],
      results: [
        "1,200 active users during pilot phase",
        "85% clinic onboarding success rate",
        "40% reduction in appointment no-shows",
        "Established trust in new markets"
      ],
      technology: ["Flutter", "Node.js", "MongoDB", "Twilio"],
      testimonial: "PTS helped us overcome the chicken-and-egg problem of getting both clinics and patients on board. Their partnership strategy was brilliant.",
      clientName: "Dr. Sanjay Verma",
      clientPosition: "CEO, Medilink",
      tags: ["HealthTech", "Mobile App", "Partnerships"]
    },
    {
      title: "LaunchNinja – Startup Advisory",
      client: "SaaS / Startup Consulting",
      industry: "Startup Consulting",
      duration: "5 months",
      problem: "Needed end-to-end business model setup, poor founder outreach, lacked structured service offerings.",
      strategy: [
        "Built mentorship matching dashboard",
        "Created resources section and founder forums",
        "Developed LinkedIn lead generation strategy",
        "Implemented targeted messaging campaign",
        "Produced weekly value posts by founders",
        "Setup webinar funnel to paid services"
      ],
      results: [
        "500+ founders signed up in 2 months",
        "3 paid plans activated in first 30 days",
        "High retention through tailored content",
        "Established thought leadership"
      ],
      technology: ["React", "Firebase", "LinkedIn API", "Zoom API"],
      testimonial: "PTS helped us structure our advisory services in a way that resonates with founders. Our engagement rates have improved dramatically.",
      clientName: "Nisha Kapoor",
      clientPosition: "Co-Founder, LaunchNinja",
      tags: ["SaaS", "Consulting", "Lead Generation"]
    }
  ];

  const stats = [
    { number: "50+", label: "Startups Transformed", icon: <Rocket className="w-8 h-8 text-primary" /> },
    { number: "₹100Cr+", label: "Funding Raised", icon: <TrendingUp className="w-8 h-8 text-primary" /> },
    { number: "10+", label: "Industries Served", icon: <Globe className="w-8 h-8 text-primary" /> },
    { number: "98%", label: "Client Satisfaction", icon: <HeartPulse className="w-8 h-8 text-primary" /> }
  ];

  const filters = ["All", "FinTech", "EdTech", "E-Commerce", "HealthTech", "Legal", "Fitness", "Fashion", "Online Learning", "Startup Consulting"];

  const filteredCaseStudies = activeFilter === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.tags.includes(activeFilter));

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] bg-repeat opacity-30"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            <span className="gradient-text">Startup</span>
            <span className="text-white"> Success Stories</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto"
          >
            How we've helped visionary founders transform ideas into scalable businesses with technology and strategy.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              Explore Case Studies
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-black sticky top-0 z-10 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {filters.map((filter, index) => (
              <Button 
                key={index}
                onClick={() => setActiveFilter(filter)}
                variant={filter === activeFilter ? "default" : "outline"}
                className={filter === activeFilter ? "bg-primary" : "border-gray-600 text-gray-300 hover:bg-gray-800"}
              >
                {filter}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl text-gray-300">No case studies found for this category</h3>
              <Button 
                onClick={() => setActiveFilter("All")}
                className="mt-4 bg-primary hover:bg-primary/90"
              >
                View All Case Studies
              </Button>
            </div>
          ) : (
            <div className="space-y-28">
              {filteredCaseStudies.map((study, index) => (
                <CaseStudyCard key={index} study={study} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] bg-repeat opacity-30"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Build Your Success Story?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-200 mb-8"
          >
            Let's discuss how we can help you achieve similar results for your startup.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              Book Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
              Download Case Studies
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;