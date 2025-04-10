'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  mousePosition: { x: number, y: number };
}

const HeroSection = ({ mousePosition }: HeroSectionProps) => {
  const [visibleText, setVisibleText] = useState('');
  const fullText = 'これからのフロントエンド開発のためのモダンReactライブラリ';
  const typingSpeed = 50;
  
  useEffect(() => {
    if (visibleText.length < fullText.length) {
      const typingTimer = setTimeout(() => {
        setVisibleText(fullText.substring(0, visibleText.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(typingTimer);
    }
  }, [visibleText, fullText]);
  
  // パララックス効果計算
  const parallaxX = (mousePosition.x / window.innerWidth - 0.5) * 20;
  const parallaxY = (mousePosition.y / window.innerHeight - 0.5) * 20;
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      {/* デコレーション要素 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-purple-600 opacity-20 blur-3xl top-20 -left-48"
          animate={{ 
            x: parallaxX * 1.5, 
            y: parallaxY * 1.5 
          }}
          transition={{ type: 'spring', damping: 10 }}
        />
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-blue-500 opacity-20 blur-3xl bottom-20 -right-48"
          animate={{ 
            x: -parallaxX * 1.5, 
            y: -parallaxY * 1.5 
          }}
          transition={{ type: 'spring', damping: 10 }}
        />
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            React Bits
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 h-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {visibleText}
          <span className="inline-block w-0.5 h-5 bg-white ml-1 animate-blink"></span>
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="#features" 
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            詳細を見る
          </a>
          <a 
            href="#demo" 
            className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            デモを試す
          </a>
        </motion.div>
      </div>
      
      {/* アニメーションの波パターン */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="w-full h-24 md:h-32" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          style={{ marginBottom: "-7px" }}
        >
          <path 
            fill="rgba(17, 24, 39, 1)" 
            fillOpacity="1" 
            d="M0,224L60,229.3C120,235,240,245,360,229.3C480,213,600,171,720,165.3C840,160,960,192,1080,197.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;