import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle2, ShieldCheck, Scale, FileText } from 'lucide-react';

export const CompliancePhilosophy: React.FC = () => {
  const pillars = [
    {
      title: 'NO HOUSE ADVANTAGE',
      desc: 'The platform operates as a neutral verification protocol. We hold zero mathematical edge against predictors.',
      icon: '01',
    },
    {
      title: 'NO BETTING ODDS',
      desc: 'No bookmaker spreads, arbitrary vigs, or risk-shifting handicaps. Scoring is purely performance-based.',
      icon: '02',
    },
    {
      title: 'NO CASH-OUT WAGERING LOOP',
      desc: 'No casino-style cash deposit-and-loss wagering loops. Predictions build verifiable reputation and tournament ranking.',
      icon: '03',
    },
    {
      title: 'NO SPECULATIVE TOKEN IN V1',
      desc: 'V1 avoids volatile, unregulated token sales — prioritizing product market fit, social gaming, and legal durability.',
      icon: '04',
    },
  ];

  const rewardTypes = [
    'Verifiable Season XP',
    'On-Chain Reputation IQ',
    'Soulbound Achievement Badges',
    'Global Leaderboard Trophies',
    'Closed-Loop Game Credits',
    'Brand-Sponsored Real Merchandise',
  ];

  return (
    <section className="relative py-24 bg-[#070A0F] border-t border-white/10 overflow-hidden">
      {/* Ambience */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[500px] bg-lime-400/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-lime-400">
            <Scale className="w-3.5 h-3.5" />
            <span>RISK & REGULATORY ARCHITECTURE</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            DESIGNED DIFFERENTLY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyber-blue">
              FROM DAY ONE.
            </span>
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            ORACLE 49 was engineered from first principles as a verifiable prediction protocol — avoiding predatory gambling mechanisms.
          </p>
        </div>

        {/* 4 Architectural Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-black text-lime-400 text-sm">{pillar.icon}</span>
                <ShieldCheck className="w-4 h-4 text-lime-400" />
              </div>

              <h3 className="font-mono font-black text-sm text-white tracking-wider">
                {pillar.title}
              </h3>

              <p className="text-xs font-mono text-metal-300 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Reward Ecosystem Focus */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/80 border border-white/10 mb-8">
          <h4 className="font-mono font-bold text-xs text-lime-400 uppercase tracking-widest mb-4">
            REPUTATION & VALUE CREATION ECOSYSTEM
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {rewardTypes.map((r) => (
              <div key={r} className="p-3 rounded-xl bg-surface-200/80 border border-white/5 text-center font-mono text-xs text-white">
                {r}
              </div>
            ))}
          </div>
        </div>

        {/* Professional Legal Disclaimer */}
        <div className="max-w-4xl mx-auto p-4 rounded-xl bg-surface-50 border border-white/5 text-center">
          <p className="text-[11px] font-mono text-metal-400 leading-relaxed">
            Legal Note: Final product mechanics, campaigns, digital assets and jurisdictional availability are subject to professional legal and regulatory review before commercial launch.
          </p>
        </div>

      </div>
    </section>
  );
};
