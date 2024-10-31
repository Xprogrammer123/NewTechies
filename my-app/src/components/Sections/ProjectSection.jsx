import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern online shopping experience",
    image: "https://cdn.pixabay.com/photo/2021/11/22/20/20/online-6817350_1280.jpg"
  },
  {
    title: "Healthcare App",
    description: "Patient management system",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500"
  },
  {
    title: "FinTech Dashboard",
    description: "Financial analytics platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500"
  },
 
];

export function ProjectsSection() {
  return (
    <div className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Real scenario of how we can help you</h2>
          <p className="text-xl text-gray-300">Some of our best work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.img 
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" // Zoom effect only on the image
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
