import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function HeroContent() {
  return (
    <motion.div 
      className="lg:w-1/2"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.h1 
        className="text-5xl lg:text-7xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        Building Digital Excellence
      </motion.h1>
      
      <motion.p 
        className="text-xl text-gray-300 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        We transform ideas into powerful digital solutions that drive growth and innovation.
      </motion.p>

      <Button />
    </motion.div>
  );
}