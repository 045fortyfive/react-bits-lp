'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import React from 'react';

interface FeaturesSectionProps {
  scrollY: number;
}

const FeatureCard = ({ feature, index, scrollY }: any) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { 
          duration: 0.7,
          delay: index * 0.2
        }
      });
    }
  }, [controls, isInView, index]);

  return (
    <motion.div 
      ref={ref}
      className="bg-gray-800 rounded-xl p-8 shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <div className="flex flex-col items-start">
        <div className="bg-gray-700 rounded-lg p-3 mb-6">
          {feature.icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
        <p className="text-gray-400">{feature.description}</p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = ({ scrollY }: FeaturesSectionProps) => {
  const features = [
    {
      title: 'テキストアニメーション',
      description: '多彩なテキストアニメーションを使って、ユーザーの注目を集めるテキスト表現を簡単に実装できます。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      )
    },
    {
      title: 'インタラクティブアニメーション',
      description: 'マウスの動きに連動するアニメーションで、インタラクティブな体験を提供します。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    },
    {
      title: 'モダンコンポーネント',
      description: '最新のデザイントレンドに沿ったUIコンポーネントで、アプリケーションの見た目を簡単に向上させます。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      title: '創造的な背景',
      description: '目を引く背景エフェクトで、ウェブサイトに深みと創造性を追加します。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];
  
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold mb-4">特徴</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            React Bitsは、魅力的なユーザーインターフェースを簡単に構築するための多彩な機能を提供します
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              index={index} 
              scrollY={scrollY} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;