import React from 'react';
import { motion } from 'framer-motion';
import { Compass, CheckCircle2, CircleDashed, ArrowRight, Sparkles } from 'lucide-react';

export const Roadmap: React.FC = () => {
  const phases = [
    {
      phase: 'PHASE 01',
      title: 'ORACLE 49 MVP',
      status: 'COMPLETED & LIVE',
      isCurrent: true,
      milestones: [
        '01-49 Number Prediction Engine',
        'Cryptographic SHA-256 Commit & Seal',
        'Prediction IQ Scoring Algorithm',
        '7 Core Interactive Game Modes',
        'Public On-Chain Verification Explorer',
      ],
      color: '#00FF66',
    },
    {
      phase: 'PHASE 02',
      title: 'SOCIAL COMPETITIVE LAYER',
      status: 'IN DEVELOPMENT',
      isCurrent: false,
      milestones: [
        '1v1 Head-to-Head Social Battles',
        'Quarterly 90-Day Seasonal Tournaments',
        'Custom Private Leagues for Communities',
        'Tiered Battle Pass & Soulbound Badges',
        'Viral Shareable Dynamic Stat Cards',
      ],
      color: '#00E5FF',
    },
    {
      phase: 'PHASE 03',
      title: 'ENTERPRISE BRAND ENGINE',
      status: 'Q4 2026 ROADMAP',
      isCurrent: false,
      milestones: [
        'Brand-Sponsored Prediction Activations',
        'F1 & Premier League Co-Branded Events',
        'Real-World Merchandise Reward Fulfillment',
        'Enterprise Sentiment Analytics API',
        'Automated Brand Escrow Smart Contracts',
      ],
      color: '#A855F7',
    },
    {
      phase: 'PHASE 04',
      title: 'THE ORACLE UNIVERSE',
      status: '2027 VISION',
      isCurrent: false,
      milestones: [
        'Universal Multi-Domain Prediction API',
        'Global Sports, Crypto & Macro Oracle Feeds',
        'Decentralized Cross-Chain Consensus Node Mesh',
        'Global Prediction Identity & Reputation Standard',
      ],
      color: '#F59E0B',
    },
  ];

  return (
    <section id="roadmap" className="relative py-24 bg-[#06080B] border-t border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/3 w-[600px] h-[600px] bg-cyber-blue/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-lime-400">
            <Compass className="w-3.5 h-3.5" />
            <span>STRATEGIC MILESTONES</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            FUTURE ROADMAP.
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            From a localized verifiable number game to a global, multi-domain prediction infrastructure.
          </p>
        </div>

        {/* 4 Phase Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {phases.map((phase) => (
            <div
              key={phase.phase}
              className={`p-6 rounded-3xl border flex flex-col justify-between transition-all ${
                phase.isCurrent
                  ? 'bg-surface-100/95 border-lime-400 shadow-glow-lime'
                  : 'bg-surface-50/70 border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono font-bold text-xs px-2.5 py-1 rounded-lg ${
                    phase.isCurrent ? 'bg-lime-400 text-black' : 'bg-surface-200 text-metal-300'
                  }`}>
                    {phase.phase}
                  </span>
                  <span className="text-[9px] font-mono text-metal-400">
                    {phase.status}
                  </span>
                </div>

                <h3 className="font-display font-black text-xl text-white mb-4">
                  {phase.title}
                </h3>

                <ul className="space-y-2.5 pt-4 border-t border-white/10">
                  {phase.milestones.map((m) => (
                    <li key={m} className="text-xs font-mono text-metal-300 flex items-start gap-2">
                      <span className="text-lime-400 mt-0.5">•</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Sub-banner */}
        <div className="text-center">
          <span className="font-mono text-sm font-bold text-lime-400 tracking-wider uppercase">
            From a number game → To a global verifiable prediction network.
          </span>
        </div>

      </div>
    </section>
  );
};
