import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RotateCw, Users, Database, Sparkles, TrendingUp, Share2, Award, Zap } from 'lucide-react';

export const GrowthFlywheel: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps = [
    { title: 'PREDICT', desc: 'Users lock predictions on public real-world draw events' },
    { title: 'PUBLIC RESULT', desc: 'Real-world numbers drawn via open broadcast' },
    { title: 'ON-CHAIN VERIFY', desc: 'Smart contracts verify hashes with zero house bias' },
    { title: 'XP & IQ SCORE', desc: 'Players earn verifiable reputation & climb tiers' },
    { title: 'SOCIAL RANK & BATTLE', desc: '1v1 duels & private leaderboard bragging rights' },
    { title: 'VIRAL SHARE', desc: 'Players share victory cards across X, Telegram & WhatsApp' },
    { title: 'NETWORK EXPANSION', desc: 'Organic player acquisition drives higher prediction volume' },
    { title: 'PROPRIETARY DATA', desc: 'Massive collective crowd sentiment data generated' },
    { title: 'BRAND ADVERTISERS', desc: 'Enterprise sponsors fund rewards for user attention' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % steps.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 bg-[#070A0F] border-t border-white/10 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-lime-400/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-lime-400">
            <RotateCw className="w-3.5 h-3.5 animate-spin" />
            <span>SELF-REINFORCING NETWORK EFFECTS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            THE MORE PEOPLE PREDICT, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyber-blue">
              THE STRONGER THE NETWORK BECOMES.
            </span>
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            Every prediction deepens the crowd intelligence dataset, strengthens reputation moats, 
            and attracts high-budget enterprise sponsorship.
          </p>
        </div>

        {/* Circular Interactive Engine Matrix */}
        <div className="max-w-5xl mx-auto bg-surface-100/90 border border-white/15 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-glass-card">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step, idx) => {
              const isActive = activeStepIndex === idx;

              return (
                <div
                  key={step.title}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-lime-400/15 border-lime-400 shadow-glow-lime scale-105 z-10'
                      : 'bg-surface-200/50 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-lime-400' : 'text-metal-400'}`}>
                      0{idx + 1}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
                    )}
                  </div>

                  <h4 className="font-mono font-bold text-sm text-white mb-1">
                    {step.title}
                  </h4>

                  <p className="text-xs text-metal-300">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center font-mono text-xs text-lime-400">
            ✓ Compounding network value without counterparty exposure
          </div>

        </div>

      </div>
    </section>
  );
};
