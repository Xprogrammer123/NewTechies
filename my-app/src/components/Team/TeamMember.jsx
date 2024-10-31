import React from 'react';
import { motion } from 'framer-motion';

export const TeamMember = ({ name, role, image, bio, delay }) => {
  return (
    <motion.div 
      className="bg-gray-800 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.img 
        src={image}
        alt={`Image of ${name}`}  // Improved alt text for better accessibility
        className="w-full h-80 object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-blue-400 mb-3">{role}</p>
        <p className="text-gray-300">{bio}</p>
      </div>
    </motion.div>
  );
};
