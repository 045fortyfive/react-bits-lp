'use client';

import { motion } from 'framer-motion';

const MarqueeSection = () => {
  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-8">
          {Array(10).fill(0).map((_, idx) => (
            <span key={idx} className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              React Bits
            </span>
          ))}
        </div>
        
        {/* 無限にスクロールさせるために複製 */}
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-8 absolute top-0 left-0" style={{ animationDelay: '10s' }}>
          {Array(10).fill(0).map((_, idx) => (
            <span key={idx} className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              React Bits
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;