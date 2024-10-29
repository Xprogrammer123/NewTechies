import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Globe, Cpu } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Strategic marketing solutions for online growth"
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI Solutions",
    description: "Intelligent automation and data analysis"
  }
];

export function ServicesSection() {
  return (
    <div className="py-20 px-4 ">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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