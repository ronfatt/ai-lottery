import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenDeckModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDeckModal }) => {
  return (
    <section className="relative py-32 bg-[#06080B] border-t border-white/10 overflow-hidden text-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-radial-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Massive Metallic Silver Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-lime-400/30 text-xs font-mono text-lime-400">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
            <span>全球可验证预测网络基础设施</span>
          </div>

          <h2 className="font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-metal-200 to-metal-400 uppercase leading-none">
            ORACLE 49
          </h2>

          <p className="font-mono text-lg sm:text-2xl text-lime-400 font-bold tracking-wide">
            预测数字 · 证明你的直觉与推演
          </p>

          <p className="text-metal-300 text-xs sm:text-sm font-mono max-w-xl mx-auto">
            围绕真实世界公开开奖结果构建的区块链可验证预测生态网络。
          </p>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <a
            href="#live-demo"
            className="px-8 py-4 rounded-xl font-mono text-sm font-bold uppercase tracking-wider bg-lime-400 hover:bg-lime-300 text-black shadow-glow-lime-lg transition-all flex items-center gap-2 group"
          >
            <span>立即体验产品交互</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <button
            onClick={onOpenDeckModal}
            className="px-8 py-4 rounded-xl font-mono text-sm font-bold uppercase tracking-wider bg-surface-100 hover:bg-surface-200 text-white border border-white/15 transition-all flex items-center gap-2"
          >
            <span>索取投资人商业计划书</span>
            <ArrowUpRight className="w-4 h-4 text-metal-400" />
          </button>
        </motion.div>

        {/* Footer Sub-text */}
        <div className="pt-8 text-[11px] font-mono text-metal-400">
          全球可验证预测竞技网络 · 2026 全新范式概念 · 由区块链共识驱动
        </div>

      </div>
    </section>
  );
};
