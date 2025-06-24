import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Image imports (replace with your actual image paths)
const images = {
  brandingHero: '/image/branding-hero.jpg',
  brandingProcess: '/image/branding-process.jpg',
  logoDesign: '/image/logo-design-bg.png',
  companyProfile: '/image/company-profile-bg.jpg',
  visitingCard: '/image/visiting-card-bg.jpg',
  letterHead: '/image/letter-head-bg.jpg',
  invoice: '/image/invoice-bg.jpg',
  idCard: '/image/id-card-bg.jpg',
  client1: '/image/client1.jpeg',
  client2: '/image/client2.jpeg',
  client3: '/image/client3.jpeg',
  pattern: '/image/pattern.png',
  portfolio1: '/image/logo-design-bg.jpg',
  portfolio2: '/image/company-profile-bg.jpg',
  portfolio3: '/image/visiting-card-bg.jpg',
  portfolio4: '/image/letter-head-bg.jpg',
  portfolio5: '/image/invoice-bg.jpg',
  portfolio6: '/image/id-card-bg.jpg',
};

// SVG Icons Components
const BrandingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const DesignIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const StrategyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y1="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const IdentityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const LogoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <path d="M9 22V12h6v10"></path>
  </svg>
);

const CardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <line x1="2" y1="10" x2="22" y1="10"></line>
    <line x1="8" y1="16" x2="10" y1="16"></line>
  </svg>
);

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y1="13"></line>
    <line x1="16" y1="17" x2="8" y1="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const ProfileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="8.5" cy="7" r="4"></circle>
    <polyline points="17 11 19 13 23 9"></polyline>
  </svg>
);

const InvoiceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y1="13"></line>
    <line x1="16" y1="17" x2="8" y1="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const LetterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

// Service data with image backgrounds
const services = [
  {
    title: "Logo Design",
    description: "Unique and memorable logo that represents your brand identity and values.",
    icon: <LogoIcon />,
    features: ["3 initial concepts", "Unlimited revisions", "Final files in all formats", "Color variations"],
    price: "₹15,000 - ₹50,000",
    time: "7-10 days",
    image: images.logoDesign,
    portfolio: images.portfolio1
  },
  {
    title: "Company Profile",
    description: "Professional company profile booklet showcasing your business, services, and achievements.",
    icon: <ProfileIcon />,
    features: ["8-12 pages", "Print & digital versions", "Custom photography", "Content writing available"],
    price: "₹25,000 - ₹75,000",
    time: "10-15 days",
    image: images.companyProfile,
    portfolio: images.portfolio2
  },
  {
    title: "Visiting Card",
    description: "Elegant business card designs with premium finishes to make lasting impressions.",
    icon: <CardIcon />,
    features: ["Single/double sided", "Spot UV/foil options", "Bleed & safe area", "Print-ready files"],
    price: "₹5,000 - ₹15,000",
    time: "3-5 days",
    image: images.visitingCard,
    portfolio: images.portfolio3
  },
  {
    title: "Letter Head",
    description: "Professional letterhead design maintaining brand consistency in all correspondence.",
    icon: <LetterIcon />,
    features: ["A4 & Letter sizes", "Editable templates", "Print-ready files", "Matching envelope"],
    price: "₹8,000 - ₹20,000",
    time: "5-7 days",
    image: images.letterHead,
    portfolio: images.portfolio4
  },
  {
    title: "Invoice Format",
    description: "Custom invoice templates that reflect your brand while maintaining professionalism.",
    icon: <InvoiceIcon />,
    features: ["Excel & Word formats", "Custom fields", "Branded elements", "Tax compliant"],
    price: "₹7,000 - ₹18,000",
    time: "3-5 days",
    image: images.invoice,
    portfolio: images.portfolio5
  },
  {
    title: "Identity Card",
    description: "Employee ID cards with security features and your corporate branding.",
    icon: <IdentityIcon />,
    features: ["Standard/custom sizes", "QR/barcode options", "Hologram options", "Template files"],
    price: "₹10,000 - ₹25,000",
    time: "5-7 days",
    image: images.idCard,
    portfolio: images.portfolio6
  }
];

// Testimonials with client images
const testimonials = [
  {
    quote: "The logo and corporate identity they created perfectly captured our company's values. We've received countless compliments from clients and partners.",
    name: "Rajesh Mehta",
    role: "CEO, FinTech Solutions Pvt. Ltd.",
    image: images.client1
  },
  {
    quote: "Our new company profile has helped us secure three major clients in just two months. The design is professional yet innovative.",
    name: "Priya Sharma",
    role: "Marketing Head, GreenTech Innovations",
    image: images.client2
  },
  {
    quote: "The business cards they designed make such a strong impression. We've had people comment on them at every networking event.",
    name: "Amit Patel",
    role: "Founder, Digital Marketing Agency",
    image: images.client3
  }
];



// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const tiltAnimation = {
  hidden: { opacity: 0, rotateX: 15, rotateY: -10 },
  visible: { 
    opacity: 1, 
    rotateX: 0, 
    rotateY: 0,
    transition: { 
      duration: 1, 
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2
    } 
  }
};

const cardHover = {
  hover: {
    y: -10,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const pulseAnimation = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const AnimatedSection = ({ children, threshold = 0.1, className = "", id = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className={`py-20 px-4 sm:px-8 ${className}`}
      id={id}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

const ImageContainer = ({ src, alt, className = "", overlay = false }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover"
      loading="lazy"
    />
    {overlay && <div className="absolute inset-0 bg-black/30"></div>}
  </div>
);

const ServiceCard = ({ service }) => (
  <motion.div
    variants={fadeInUp}
    whileHover="hover"
    className="relative rounded-xl overflow-hidden group h-full"
  >
    <ImageContainer src={service.image} alt={service.title} className="absolute inset-0" />
    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-300"></div>
    
    <div className="relative z-10 h-full flex flex-col p-6 sm:p-8">
      <div className="text-3xl mb-4 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border group-hover:border-white transition-all">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-gray-300 mb-4">{service.description}</p>
      <div className="mb-4 p-3 bg-gray-800/80 rounded-lg backdrop-blur-sm">
        <div className="font-bold text-white">Starting from {service.price}</div>
        <div className="text-sm text-gray-400">Delivery in {service.time}</div>
      </div>
      <ul className="space-y-2 mb-4">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-start text-sm text-gray-300">
            <span className="text-white mr-2">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="mt-auto w-full bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition duration-300">
        Get This Service
      </button>
    </div>
  </motion.div>
);

const PortfolioSlider = () => (
  <Swiper
    spaceBetween={30}
    centeredSlides={true}
    loop={true}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    effect="fade"
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation, EffectFade]}
    className="rounded-xl overflow-hidden shadow-2xl mb-12"
  >
    {services.map((service, index) => (
      <SwiperSlide key={index} className="bg-gray-100 rounded-xl overflow-hidden">
        <div className="aspect-video relative">
          <ImageContainer src={service.image} alt={service.title} />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-4 text-white">{service.title}</div>
              <div className="text-gray-300">{service.description}</div>
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

const PortfolioGrid = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
    {services.map((service, index) => (
      <motion.div 
        key={index}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="aspect-square rounded-lg overflow-hidden cursor-pointer relative group"
      >
        <ImageContainer src={service.portfolio} alt={service.title} />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <motion.button 
            className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium"
            whileHover={{ scale: 1.05 }}
          >
            View Project
          </motion.button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 text-center text-white text-sm truncate">
          {service.title}
        </div>
      </motion.div>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <motion.div 
    className="bg-gray-900 p-6 sm:p-8 rounded-xl h-full flex flex-col"
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center mb-6">
      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
        <ImageContainer src={testimonial.image} alt={testimonial.name} />
      </div>
      <div>
        <div className="font-bold">{testimonial.name}</div>
        <div className="text-gray-400 text-sm">{testimonial.role}</div>
      </div>
    </div>
    <div className="text-4xl mb-4 text-gray-600">"</div>
    <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
    <div className="flex items-center justify-start">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ))}
    </div>
  </motion.div>
);

const BrandingServices = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image Covering Entire Section */}
  <div className="absolute inset-0 z-0">
    <img
      src={images.brandingHero}
      alt="Branding Design"
      className="w-full h-full object-cover"
    />
    {/* Optional overlay */}
    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
  </div>

  {/* Content Container */}
  <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-8 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-4"
    >
      <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium inline-flex items-center gap-2">
        <BrandingIcon /> Brand Identity
      </span>
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
    >
      Professional{" "}
      <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Corporate
      </span>{" "}
      Branding
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-xl text-gray-200 max-w-3xl mx-auto mb-8"
    >
      Complete branding solutions to establish your corporate identity with premium
      designs that reflect your business values.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
      <button className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition duration-300 shadow-lg flex items-center justify-center gap-2">
        <DesignIcon /> Get Started
      </button>
      <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-900 transition duration-300 flex items-center justify-center gap-2">
        <StrategyIcon /> View Pricing
      </button>
    </motion.div>
  </div>

  {/* Floating elements */}
  <motion.div
    animate={{
      y: [0, -20, 0],
      transition: { duration: 8, repeat: Infinity, ease: "linear" },
    }}
    className="absolute bottom-20 left-10 w-32 h-32 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hidden md:block"
  />
  <motion.div
    animate={{
      y: [0, 20, 0],
      transition: { duration: 10, repeat: Infinity, ease: "linear", delay: 1 },
    }}
    className="absolute top-20 right-10 w-40 h-40 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 hidden md:block"
  />
</section>



      {/* Intro Section */}
      <AnimatedSection className="bg-white text-black">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
              Corporate <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">Branding</span> Essentials
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-lg text-gray-700 mb-6">
              A strong corporate identity establishes credibility and professionalism. Our comprehensive branding package includes all essential elements to present your business consistently across all touchpoints.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg bg-white/50 backdrop-blur-sm">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <IdentityIcon /> Professional Image
                </h3>
                <p className="text-sm text-gray-600">Build trust with stakeholders</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg bg-white/50 backdrop-blur-sm">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <StrategyIcon /> Consistency
                </h3>
                <p className="text-sm text-gray-600">Uniform brand representation</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            variants={tiltAnimation}
            className="lg:w-1/2 rounded-2xl overflow-hidden shadow-xl"
            whileHover={{ scale: 1.02 }}
          >
            <ImageContainer 
              src={images.brandingProcess} 
              alt="Branding process" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className="bg-black text-white relative">
        <div className="absolute inset-0 opacity-10">
          <ImageContainer 
            src={images.pattern} 
            alt="Pattern background" 
            className="w-full h-full"
          />
        </div>
        
        <div className="relative z-10">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Branding <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive corporate identity solutions tailored for Indian businesses.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      

      {/* Testimonials Section */}
    <AnimatedSection className="bg-white text-black relative py-20">
  {/* Background Pattern with very light opacity */}
 

  <div className="relative z-10">
    {/* Heading */}
    <motion.div variants={fadeInUp} className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Client <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">Testimonials</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        What our clients say about our corporate branding services.
      </p>
    </motion.div>

    {/* Swiper Slider */}
    <motion.div variants={fadeInUp}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 }
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="testimonialSwiper text-white "
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  </div>
</AnimatedSection>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-8 bg-black text-white overflow-hidden">
     
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Ready to Elevate Your <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Corporate Identity?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Get professional branding that makes your business stand out in the Indian market.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition duration-300 shadow-lg flex items-center justify-center gap-2">
              <DocumentIcon /> Get a Free Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-900 transition duration-300 flex items-center justify-center gap-2">
              <PhoneIcon /> Call Us: +91 90966495556
            </button>
          </motion.div>
        </div>

        {/* Animated floating elements */}
        <motion.div 
          animate={{
            y: [0, -20, 0],
            transition: { duration: 8, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hidden md:block"
        />
        <motion.div 
          animate={{
            y: [0, 20, 0],
            transition: { duration: 10, repeat: Infinity, ease: "linear", delay: 1 }
          }}
          className="absolute bottom-1/3 right-1/3 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hidden md:block"
        />
      </section>
    </div>
  );
};

export default BrandingServices;