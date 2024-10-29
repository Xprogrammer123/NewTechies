import React from 'react';
import { motion } from 'framer-motion';

export function FloatingElements() {
  return (
    <>
      <motion.div 
        className="absolute top-20 left-10 w-80 h-80 bg-blue-500 rounded-full opacity-20"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 bg-purple-500 rounded-full opacity-20"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </>
  );
}