'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import MarqueeSection from '../components/MarqueeSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import BlobCursor from '../components/BlobCursor';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  
  // マウス位置の追跡
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // スクロール位置の追跡
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <BlobCursor mousePosition={mousePosition} />
      <Header />
      <HeroSection mousePosition={mousePosition} />
      <FeaturesSection scrollY={scrollY} />
      <TestimonialsSection />
      <MarqueeSection />
      <CTASection mousePosition={mousePosition} />
      <Footer />
    </main>
  );
}