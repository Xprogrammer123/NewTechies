import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '../components/Team/TeamMember';

const teamMembers = [
  {
    name: "John Ayodele ",
    role: "Project Lead",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHSp2VDuB_nnA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715699896171?e=1735776000&v=beta&t=QOmyVtqzwQ9DaDPXKKNliMj9bRUMBk50zuGwpAoSFqc",
    bio: "Leader of every project that you bring to the team"
  },
  {
    name: "Ishu (Deborah) Doofan",
    role: "Graphic Designer||Discord Server Developer",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQHmqs1ayU4EKg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1725716897451?e=1730890800&v=beta&t=Bjnb-Jl60MzhGXaZLJR0n5ofgQTDY9wmiBjdJJ9_QPw",
    bio: "Creative and versatile, combining design skills with seamless community building"
  },
  {
    name: "Fawas (Ade) Saka",
    role: "Front-End Developer",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQEIjEu9CXPaSw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714152567840?e=1735776000&v=beta&t=IhFIF0SlbTSXbf_S0wxxZaHJpL3EcAtW0tFN6JGgBko",
    bio: "Skilled in crafting beautiful, responsive interfaces with clean, efficient code."
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