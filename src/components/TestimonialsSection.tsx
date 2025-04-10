'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "React Bitsを使うことで、私たちのウェブサイトの完成度が格段に向上しました。アニメーションとインタラクティブな要素が簡単に実装でき、ユーザーからの反応も上々です。",
      author: "田中 啓介",
      position: "シニアデベロッパー",
      company: "テックイノベーション株式会社"
    },
    {
      content: "モダンなWebサイトを素早く構築するのに最適なライブラリです。特にテキストアニメーションの質と多様性が気に入っています。",
      author: "佐藤 美咲",
      position: "UIデザイナー",
      company: "クリエイティブデザイン"
    },
    {
      content: "実装が簡単で、パフォーマンスも優れています。これほど使いやすいReactコンポーネントライブラリは他にないと思います。",
      author: "鈴木 健太",
      position: "フロントエンド開発者",
      company: "グローバルテック"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <section id="事例" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          顧客の声
        </motion.h2>
        
        <div className="relative max-w-4xl mx-auto h-64 md:h-56">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="absolute inset-0 flex flex-col justify-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: idx === activeIndex ? 1 : 0,
                x: idx === activeIndex ? 0 : 100,
                pointerEvents: idx === activeIndex ? 'auto' : 'none'
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <blockquote className="text-center">
                <p className="text-xl md:text-2xl italic text-gray-300 mb-6">"{testimonial.content}"</p>
                <footer className="mt-4">
                  <div className="text-lg font-semibold">{testimonial.author}</div>
                  <div className="text-blue-400">{testimonial.position}, {testimonial.company}</div>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'bg-blue-500 w-6' : 'bg-gray-500'
              }`}
              aria-label={`Testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;