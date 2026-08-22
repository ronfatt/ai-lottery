import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeroNumberField } from './HeroNumberField';
import { ShieldCheck, ArrowRight, Activity, Zap, Lock } from 'lucide-react';

export const HeroSection: React.FC = () => {
  // Count-up animated state
  const [predictionsCount, setPredictionsCount] = useState(128240);
  const [playersCount, setPlayersCount] = useState(38180);

  useEffect(() => {
    // Subtle live activity ticker
    const timer = setInterval(() => {
      setPredictionsCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
      if (Math.random() > 0.6) {
        setPlayersCount((prev) => prev + 1);
      }
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="concept"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#06080B]"
    >
      {/* Background Decorative Gradients & Scanline */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,255,102,0.12),rgba(6,8,11,0))]" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-lime-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyber-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Main 16:9 Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Investor Hook */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-100/90 border border-lime-400/30 text-xs font-mono text-metal-200 w-fit backdrop-blur-md shadow-glow-lime/20"
            >
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
              <span className="text-lime-400 font-bold">下一代预测协议</span>
              <span className="text-metal-400">|</span>
              <span className="text-white">非博彩 · 纯粹可验证竞技</span>
            </motion.div>

            {/* Giant High-Contrast Futuristic Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1 sm:space-y-2"
            >
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-7xl tracking-tighter leading-[1.05] text-white">
                你能在结果 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-300 to-white text-glow-lime">
                  发生之前
                </span> <br />
                洞见一切吗？
              </h1>
            </motion.div>

            {/* Subtitles & Chinese Positioning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2 max-w-xl"
            >
              <p className="text-base sm:text-lg md:text-xl font-sans text-metal-200 leading-relaxed">
                围绕真实世界公开开奖数据构建的<strong>区块链可验证预测生态网络</strong>。
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-lime-400/90 tracking-wider">
                <span className="bg-lime-400/10 px-2 py-0.5 rounded border border-lime-400/20">预测</span>
                <span className="text-metal-400">·</span>
                <span className="bg-lime-400/10 px-2 py-0.5 rounded border border-lime-400/20">验证</span>
                <span className="text-metal-400">·</span>
                <span className="bg-lime-400/10 px-2 py-0.5 rounded border border-lime-400/20">排名</span>
                <span className="text-metal-400">·</span>
                <span className="bg-lime-400/10 px-2 py-0.5 rounded border border-lime-400/20">社交竞技</span>
                <span className="hidden sm:inline-block text-metal-400">|</span>
                <span className="text-metal-300 font-bold">全球可验证数字预测竞技平台</span>
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#live-demo"
                className="px-6 py-3.5 rounded-xl font-mono text-sm font-bold uppercase tracking-wider bg-lime-400 hover:bg-lime-300 text-black shadow-[0_0_30px_rgba(0,255,102,0.4)] hover:shadow-[0_0_40px_rgba(0,255,102,0.7)] transition-all flex items-center gap-2 group"
              >
                <span>探索游戏体验</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#how-it-works"
                className="px-5 py-3.5 rounded-xl font-mono text-sm text-metal-200 hover:text-white bg-surface-100/80 hover:bg-surface-200/90 border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
              >
                <Zap className="w-4 h-4 text-cyber-blue" />
                <span>了解运行机制</span>
              </a>
            </motion.div>

            {/* Micro value highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 max-w-lg text-[11px] font-mono text-metal-300"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-lime-400 flex-shrink-0" />
                <span>零庄家优势</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-cyber-blue flex-shrink-0" />
                <span>区块链哈希封存</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyber-violet flex-shrink-0" />
                <span>预测智商指数</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Giant Interactive 01-49 Matrix */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <HeroNumberField />
          </motion.div>
        </div>
      </div>

      {/* Bottom Telemetry Bar: Live Network Stats */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-4 rounded-xl bg-surface-100/80 border border-white/10 backdrop-blur-md shadow-glass-card"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            
            {/* Live indicator */}
            <div className="flex items-center gap-2 text-xs font-mono text-metal-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-500" />
              </span>
              <span className="text-white font-bold tracking-wider">实时全网遥测数据</span>
            </div>

            {/* Metric counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full sm:w-auto">
              <div>
                <div className="text-[10px] font-mono text-metal-400 uppercase">全网预测总数</div>
                <div className="text-base sm:text-lg font-mono font-bold text-lime-400">
                  {predictionsCount.toLocaleString()} 笔
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-metal-400 uppercase">活跃预测玩家</div>
                <div className="text-base sm:text-lg font-mono font-bold text-white">
                  {playersCount.toLocaleString()} 人
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-metal-400 uppercase">链上验证率</div>
                <div className="text-base sm:text-lg font-mono font-bold text-cyber-blue">
                  99.99%
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-metal-400 uppercase">封存后篡改记录</div>
                <div className="text-base sm:text-lg font-mono font-bold text-lime-400 flex items-center gap-1">
                  <span>0 次</span>
                  <span className="text-[10px] text-metal-400 font-normal">(数学防篡改)</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

    </section>
  );
};
