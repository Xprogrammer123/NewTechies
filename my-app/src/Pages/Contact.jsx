import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from '../components/Contacts/ContactForm'
import { ContactInfo } from '../components/Contacts/ContactInfo';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div 
        className="max-w-4xl mx-auto bg-gray-800 rounded-2xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </motion.div>
    </div>
  );
}