'use client';

import { motion } from 'framer-motion';

interface CTASectionProps {
  mousePosition: { x: number, y: number };
}

const CTASection = ({ mousePosition }: CTASectionProps) => {
  // パララックス効果計算
  const parallaxX = (mousePosition.x / window.innerWidth - 0.5) * 20;
  const parallaxY = (mousePosition.y / window.innerHeight - 0.5) * 20;
  
  return (
    <section id="お問い合わせ" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* デコレーション要素 */}
      <motion.div 
        className="absolute w-96 h-96 rounded-full bg-blue-600 opacity-20 blur-3xl -top-48 -left-48"
        animate={{ 
          x: parallaxX * 1.5, 
          y: parallaxY * 1.5 
        }}
        transition={{ type: 'spring', damping: 10 }}
      />
      <motion.div 
        className="absolute w-96 h-96 rounded-full bg-purple-600 opacity-20 blur-3xl -bottom-48 -right-48"
        animate={{ 
          x: -parallaxX * 1.5, 
          y: -parallaxY * 1.5 
        }}
        transition={{ type: 'spring', damping: 10 }}
      />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          次世代のUIを始めましょう
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          React Bitsを使って、魅力的なインターフェースを今すぐ構築しましょう。
          シンプルな実装で驚くほど洗練されたUIが実現できます。
        </motion.p>
        
        <motion.div 
          className="inline-block relative group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur group-hover:blur-md transition-all duration-300"></div>
          <button className="relative bg-black hover:bg-gray-800 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300">
            すぐに始める
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;