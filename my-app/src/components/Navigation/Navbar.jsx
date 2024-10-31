import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <motion.nav 
      className="bg-gray-900/10 backdrop-blur-md fixed w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
        
          <Link to="/" className="md:text-2xl text-xl font-bold text-white">
          
            New Techies
          </Link>
          
          <div className="flex space-x-8 bg-gray-900 px-6 py-3 rounded-full backdrop-blur-3xl hover:bg-gray-400/80 transition-color">
            {[
              { path: '/', label: 'Home' },
              { path: '/team', label: 'Team' },
              { path: '/contact', label: 'Contact' }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-lg transition-colors duration-300 ${
                  location.pathname === path
                    ? 'text-blue-400 opacity-100'
                    : 'text-gray-300 hover:text-white opacity-100'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}