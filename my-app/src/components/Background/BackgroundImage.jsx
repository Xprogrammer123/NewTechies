import React from 'react';

export function BackgroundImage() {
  return (
    <div 
      className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072")',
      }}
    />
  );
}