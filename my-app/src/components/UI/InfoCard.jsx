import React from 'react';
import { motion } from 'framer-motion';

export function InfoCard() {
  return (
    <motion.div 
      className="absolute -bottom-4 -right-4 bg-blue-600 rounded-lg p-4 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.2 }}
    >
      <h3 className="text-white font-bold">Innovation Hub</h3>
      <p className="text-blue-100">Driving Future Tech</p>
    </motion.div>
  );
}