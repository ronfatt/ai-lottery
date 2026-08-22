import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

export const InvestorVision: React.FC = () => {
  const [visionStage, setVisionStage] = useState<'matrix' | 'focal49' | 'expanding'>('matrix');

  useEffect(() => {
    const cycle = () => {
      setVisionStage('matrix');
      setTimeout(() => {
        setVisionStage('focal49');
        setTimeout(() => {
          setVisionStage('expanding');
        }, 2200);
      }, 2500);
    };

    cycle();
    const interval = setInterval(cycle, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 bg-[#040608] border-t border-white/10 overflow-hidden text-center">
      {/* Background Deep Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-lime-400/5 blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Animated Central Node Canvas */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto flex items-center justify-center">
          
          {/* Outer Rotating Pulse Ring */}
          <div className="absolute inset-0 rounded-full border border-lime-400/20 animate-pulse-slow" />
          <div className="absolute -inset-4 rounded-full border border-dashed border-white/10 animate-spin" style={{ animationDuration: '30s' }} />

          {/* Central 49 Nucleus */}
          <motion.div
            animate={{
              scale: visionStage === 'focal49' ? 1.2 : 1,
            }}
            transition={{ duration: 0.8 }}
            className="relative w-32 h-32 rounded-3xl bg-surface-100 border-2 border-lime-400 flex flex-col items-center justify-center shadow-glow-lime-lg z-20"
          >
            <span className="font-mono font-black text-5xl text-lime-400 tracking-tighter">
              49
            </span>
            <span className="text-[9px] font-mono text-metal-300 uppercase tracking-widest mt-1">
              ORACLE CORE
            </span>
          </motion.div>

          {/* 4 Expanding Orbital Nodes (SPORT, MARKET, CULTURE, WORLD) */}
          <motion.div
            animate={{
              opacity: visionStage === 'expanding' ? 1 : 0.4,
              scale: visionStage === 'expanding' ? 1.1 : 0.9,
            }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 pointer-events-none"
          >
            {/* Top: SPORT */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-surface-200 border border-cyber-blue/60 text-cyber-blue font-mono font-bold text-xs shadow-glow-blue">
              SPORT ORACLE
            </div>

            {/* Right: MARKET */}
            <div className="absolute top-1/2 -right-12 -translate-y-1/2 px-3 py-1 rounded-full bg-surface-200 border border-cyber-violet/60 text-cyber-violet font-mono font-bold text-xs shadow-glow-violet">
              MARKET ORACLE
            </div>

            {/* Bottom: WORLD */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-surface-200 border border-cyber-amber/60 text-cyber-amber font-mono font-bold text-xs">
              WORLD ORACLE
            </div>

            {/* Left: CULTURE */}
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 px-3 py-1 rounded-full bg-surface-200 border border-lime-400/60 text-lime-400 font-mono font-bold text-xs">
              CULTURE ORACLE
            </div>
          </motion.div>

        </div>

        {/* Vision Statements */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-metal-400 uppercase tracking-tight"
          >
            WE ARE NOT BUILDING <br />
            <span className="text-white">A NUMBER GAME.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-2"
          >
            <h3 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyber-blue to-white text-glow-lime uppercase tracking-tighter leading-none">
              WE ARE BUILDING <br />
              THE INFRASTRUCTURE <br />
              FOR PREDICTION.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-6 flex justify-center items-center gap-4 text-xs sm:text-sm font-mono text-lime-400 tracking-widest uppercase font-bold"
          >
            <span>PREDICT</span>
            <span className="text-metal-400">•</span>
            <span>PROVE</span>
            <span className="text-metal-400">•</span>
            <span>RANK</span>
            <span className="text-metal-400">•</span>
            <span>COMPETE</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
