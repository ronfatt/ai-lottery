import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Flame, 
  TrendingUp, 
  ShieldCheck, 
  Award, 
  Zap, 
  Sparkles, 
  ArrowUp, 
  Percent, 
  CheckCircle2,
  Lock
} from 'lucide-react';

export const PredictionIQ: React.FC = () => {
  // Rank Up animation simulation
  const [currentRank, setCurrentRank] = useState(1284);
  const [isRankUpActive, setIsRankUpActive] = useState(false);

  const triggerRankUp = () => {
    setIsRankUpActive(true);
    setTimeout(() => {
      setCurrentRank(1179);
    }, 400);
  };

  const badges = [
    { title: 'NUMBER HUNTER', icon: '🎯', desc: 'Hit 3+ numbers across 10 consecutive draws', rarity: 'Legendary' },
    { title: 'PATTERN MASTER', icon: '⚡', desc: 'Achieved 80%+ structural accuracy in Season 08', rarity: 'Epic' },
    { title: 'HOT STREAK', icon: '🔥', desc: 'Maintained 6 consecutive positive round calls', rarity: 'Rare' },
    { title: 'TOP 5% ELITE', icon: '👑', desc: 'Global Prediction IQ above 780 threshold', rarity: 'Mythic' },
    { title: 'SEASON CHAMPION', icon: '🏆', desc: 'Finished Top 50 in Division Alpha Tournament', rarity: 'Legendary' },
  ];

  return (
    <section id="prediction-iq" className="relative py-24 bg-[#06080B] border-t border-white/10 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-lime-400/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-lime-400">
            <Trophy className="w-3.5 h-3.5" />
            <span>PLAYER REPUTATION LAYER</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            YOUR INSTINCT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyber-blue to-white text-glow-lime">
              BECOMES A VERIFIABLE SCORE.
            </span>
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            The product is not just about winning a round — it is about establishing a permanent, 
            immutable on-chain prediction reputation.
          </p>
        </div>

        {/* Big Profile HUD Dashboard */}
        <div className="max-w-5xl mx-auto bg-surface-100/90 border border-white/15 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-glass-card">
          
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 border-b border-white/10 gap-6">
            
            {/* User Identity & Avatar */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-surface-200 to-surface-300 border-2 border-lime-400/80 flex items-center justify-center font-mono font-black text-2xl text-lime-400 shadow-glow-lime/30">
                R.ON
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-lime-400 border-2 border-black flex items-center justify-center text-[8px] text-black font-black">
                  ✓
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="font-display font-black text-2xl text-white">R.ON</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-lime-400/20 text-lime-400 border border-lime-400/40 font-bold">
                    PRO PREDICTOR
                  </span>
                  <span className="text-xs font-mono text-metal-400">#0x992B...81F</span>
                </div>
                <p className="text-xs font-mono text-metal-300 mt-0.5">
                  Registered: Season 02 · 1,480 Cryptographic Predictions Verified
                </p>
              </div>
            </div>

            {/* Global Prediction IQ Score Pill */}
            <div className="flex items-center gap-6 bg-surface-200/90 p-4 rounded-2xl border border-white/10 self-stretch md:self-auto justify-between">
              <div>
                <span className="text-[10px] font-mono text-metal-400 uppercase tracking-wider block">
                  PREDICTION IQ
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono font-black text-4xl sm:text-5xl text-lime-400 text-glow-lime">
                    782
                  </span>
                  <span className="text-xs font-mono text-metal-300">/ 999</span>
                </div>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div className="text-right">
                <span className="text-[10px] font-mono text-metal-400 uppercase tracking-wider block">
                  PERCENTILE
                </span>
                <span className="font-mono font-bold text-lg sm:text-xl text-cyber-blue block">
                  TOP 4.8%
                </span>
                <span className="text-[10px] font-mono text-metal-400">Worldwide</span>
              </div>
            </div>

          </div>

          {/* Core Analytics Grid (6 Metric Cards) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 my-8">
            
            {/* Hit Rate */}
            <div className="p-4 rounded-2xl bg-surface-200/70 border border-white/5 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-metal-400 uppercase">Number Hit Rate</span>
              <div className="font-mono font-black text-2xl text-white my-2">37.2%</div>
              <span className="text-[10px] font-mono text-lime-400">▲ +3.4% this mo</span>
            </div>

            {/* Pattern Accuracy */}
            <div className="p-4 rounded-2xl bg-surface-200/70 border border-white/5 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-metal-400 uppercase">Pattern Accuracy</span>
              <div className="font-mono font-black text-2xl text-cyber-violet my-2">68.4%</div>
              <span className="text-[10px] font-mono text-cyber-violet">High Statistical IQ</span>
            </div>

            {/* Odd/Even Accuracy */}
            <div className="p-4 rounded-2xl bg-surface-200/70 border border-white/5 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-metal-400 uppercase">Odd / Even</span>
              <div className="font-mono font-black text-2xl text-cyber-blue my-2">81.0%</div>
              <span className="text-[10px] font-mono text-metal-300">Top 2% Globally</span>
            </div>

            {/* High/Low Accuracy */}
            <div className="p-4 rounded-2xl bg-surface-200/70 border border-white/5 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-metal-400 uppercase">High / Low</span>
              <div className="font-mono font-black text-2xl text-white my-2">73.0%</div>
              <span className="text-[10px] font-mono text-metal-300">Consistent Edge</span>
            </div>

            {/* Current Streak */}
            <div className="p-4 rounded-2xl bg-surface-200/70 border border-white/5 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-metal-400 uppercase">Current Streak</span>
              <div className="font-mono font-black text-2xl text-lime-400 my-2 flex items-center gap-1">
                <span>🔥 6</span>
              </div>
              <span className="text-[10px] font-mono text-lime-400">Multiplier 1.8x</span>
            </div>

            {/* Global Rank with Interactive Trigger */}
            <div 
              onClick={triggerRankUp}
              className="p-4 rounded-2xl bg-surface-200/90 border border-lime-400/40 cursor-pointer hover:border-lime-400 transition-all flex flex-col justify-between group shadow-glow-lime/10"
            >
              <span className="text-[10px] font-mono text-metal-400 uppercase flex items-center justify-between">
                <span>Global Rank</span>
                <span className="text-[8px] bg-lime-400/20 text-lime-400 px-1 rounded">CLICK SIM</span>
              </span>
              
              <div className="font-mono font-black text-2xl text-lime-400 my-2 flex items-center gap-1">
                <span>#{currentRank}</span>
                {isRankUpActive && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-lime-400 flex items-center font-bold"
                  >
                    <ArrowUp className="w-3 h-3" /> 105
                  </motion.span>
                )}
              </div>
              <span className="text-[10px] font-mono text-metal-300 group-hover:text-lime-400 transition-colors">
                {isRankUpActive ? 'Rank Promoted!' : 'Simulate Match Win'}
              </span>
            </div>

          </div>

          {/* Badges Carousel / Showcase */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-metal-300 font-bold uppercase tracking-wider">
                EARNED REPUTATION BADGES (5 / 12 UNLOCKED)
              </span>
              <span className="text-xs font-mono text-lime-400">Verifiable On-Chain Soulbound</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {badges.map((b) => (
                <div
                  key={b.title}
                  className="p-3.5 rounded-xl bg-surface-200/90 border border-white/10 hover:border-lime-400/50 transition-all flex flex-col items-center text-center group"
                >
                  <span className="text-2xl mb-1.5 group-hover:scale-110 transition-transform">
                    {b.icon}
                  </span>
                  <span className="font-mono font-bold text-xs text-white group-hover:text-lime-400 transition-colors">
                    {b.title}
                  </span>
                  <span className="text-[10px] font-mono text-metal-400 mt-1 leading-tight">
                    {b.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
