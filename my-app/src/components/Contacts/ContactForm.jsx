import React from 'react';
import { motion } from 'framer-motion';

export function ContactForm() {
  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Existing form fields */}
      <motion.form className="space-y-6">
      <div className="mt-8">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSc9CaPenrCbdudDHCOxZW_Kug25-Es7MrOmtdfY5m28BEGAtw/viewform?embedded=true"
          width="640"
          height="521"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="w-full"
        >
          Loading…
        </iframe>
      </div>
      </motion.form>

      {/* Embed the Google Form iframe here */}
     


    </motion.div>
  );
}
