
import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import CTASection from "@/components/sections/CTASection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Advanced scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            entry.target.classList.add('revealed');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all scroll-animate elements
    const scrollElements = document.querySelectorAll('.scroll-animate, .reveal-on-scroll');
    scrollElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <div className="reveal-on-scroll">
        <HeroSection />
      </div>
      <div className="reveal-on-scroll">
        <AboutSection />
      </div>
      <div className="reveal-on-scroll">
        <ServicesSection />
      </div>
      <div className="reveal-on-scroll">
        <ProductsSection />
      </div>
      <div className="reveal-on-scroll">
        <TeamSection />
      </div>
      <div className="reveal-on-scroll">
        <ProjectsSection />
      </div>
      <div className="reveal-on-scroll">
        <CaseStudiesSection />
      </div>
      <div className="reveal-on-scroll">
        <TestimonialsSection />
      </div>
      <div className="reveal-on-scroll">
        <CTASection />
      </div>
    </Layout>
  );
};

export default Index;
