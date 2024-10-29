import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundImage } from '../components/Background/BackgroundImage';
import { FloatingElements } from '../components/Background/FloatingElement';
import { HeroSection } from '../components/Sections/HeroSection';
import { ServicesSection } from '../components/Sections/ServiceSection';
import { ProjectsSection } from '../components/Sections/ProjectSection';
import ClientSection from '../components/Sections/ClientSection';
import TechnologySection from '../components/Sections/TechnologySection';
import TestimonialSection from '../components/Sections/TestimonialSection'



export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BackgroundImage />
      <FloatingElements />
      
      <div className="relative z-10">
      <HeroSection />
        <ServicesSection />
        <TechnologySection />
        <ProjectsSection />
        <TestimonialSection />
        <ClientSection />
      </div>
    </motion.div>
  );
}