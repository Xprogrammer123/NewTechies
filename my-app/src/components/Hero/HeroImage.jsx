import React from 'react';
import { motion } from 'framer-motion';
import { InfoCard } from '../ui/InfoCard';

export function HeroImage() {
  return (
    <motion.div 
      className="lg:w-1/2"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
    >
      <div className="relative">
        <motion.img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072"
          alt="Digital Technology"
          className="rounded-2xl shadow-2xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <InfoCard />
      </div>
    </motion.div>
  );
}