'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            React Bits
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {['ホーム', '特徴', '事例', 'お問い合わせ'].map((item) => (
            <Link 
              key={item} 
              href={`#${item}`} 
              className="text-white hover:text-blue-400 transition-colors relative overflow-hidden group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-lg">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4">
              {['ホーム', '特徴', '事例', 'お問い合わせ'].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item}`} 
                  className="text-white hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;