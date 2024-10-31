import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Globe, Cpu } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Get custom web apps that actually work for your business, built with the latest tech."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Grow your online presence with marketing strategies that actually work"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Graphics Design",
    description: "Make your users love you with intuitive, beautiful interfaces."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Ads Writing/Ads Creation",
    description: "Make your users love you with intuitive, beautiful interfaces."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Content Creation",
    description: "Grow your online presence with marketing strategies that actually work"
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI Solutions",
    description: "Automate, analyze, and optimize your ops with smart AI tools."
  }
];

export function ServicesSection() {
  return (
    <div className="py-28 px-6">
      <div className="max-w-7xl mx-auto ">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300">Comprehensive digital solutions for your business</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-800 backdrop-blur-2xl rounded-xl p-6 hover:bg-gray-400/80 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{scale:  1.1, transition: {duration: 0.3}}}
            >
              <div className="text-blue-400 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300 text-md">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}