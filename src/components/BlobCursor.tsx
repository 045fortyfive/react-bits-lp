'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BlobCursorProps {
  mousePosition: { x: number, y: number };
}

const BlobCursor = ({ mousePosition }: BlobCursorProps) => {
  return (
    <motion.div 
      className="pointer-events-none fixed w-64 h-64 rounded-full opacity-30 z-10"
      animate={{ 
        x: mousePosition.x - 128, 
        y: mousePosition.y - 128 
      }}
      transition={{ 
        type: 'spring', 
        damping: 15, 
        stiffness: 150,
        mass: 0.5 
      }}
      style={{ 
        filter: 'blur(80px)',
        background: 'radial-gradient(circle, rgba(56,189,248,0.8) 0%, rgba(79,70,229,0.4) 70%)'
      }}
    />
  );
};

export default BlobCursor;