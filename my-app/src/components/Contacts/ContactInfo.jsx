import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export function ContactInfo() {
  return (
    <motion.div 
      className="text-gray-300 space-y-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
      <p className="text-lg mb-8">
        Have a question or want to work together? We'd love to hear from you.
      </p>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <MapPin className="text-blue-400" />
          <span>ZB 95, Jubilation Avenue, Maitama II, Katampe, Abuja</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <Phone className="text-blue-400" />
          <span> +2348101458024  </span>
        </div>
        
        <div className="flex items-center space-x-3">
          <Mail className="text-blue-400" />
          <span>getstarted@techiejohn.com </span>
        </div>
      </div>

      <div className=''>
        <img src="https://st4.depositphotos.com/2903611/29109/i/450/depositphotos_291092974-stock-photo-man-touching-social-network-icons.jpg" alt="" className='' />
      </div>
    </motion.div>
  );
}