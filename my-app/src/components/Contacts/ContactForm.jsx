import React from 'react';
import { motion } from 'framer-motion';

export function ContactForm() {
  return (
    <motion.form 
      className="space-y-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white h-10 px-2"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white h-10 px-2"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white p-2"
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
      >
        Send Message
      </button>
    </motion.form>
  );
}