import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '../components/Team/TeamMember';

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    bio: "Visionary leader with 15+ years in tech innovation"
  },
  {
    name: "Michael Chen",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    bio: "Full-stack expert specializing in scalable solutions"
  },
  {
    name: "Emma Williams",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    bio: "Award-winning UX/UI designer with a passion for user-centered design"
  }
];

export default function Team() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold text-white text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Meet Our Team
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember 
            key={member.name}
            {...member}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
}