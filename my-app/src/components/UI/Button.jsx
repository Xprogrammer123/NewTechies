import React from 'react';
import { motion } from 'framer-motion';

export function Button() {
  return (
    <motion.button 
      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.9 }}
    >
      Get Started
    </motion.button>
  );
}