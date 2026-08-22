import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Hash, 
  Clock, 
  Radio, 
  FileCode2, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Cpu, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

export const BlockchainFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3);

  const steps = [
    {
      id: 1,
      title: 'USER PREDICTION',
      desc: 'Player selects number combination or pattern',
      badge: '07 · 18 · 23 · 36 · 41',
      icon: Lock,
    },
    {
      id: 2,
      title: 'PREDICTION HASH',
      desc: 'Local SHA-256 commit hash calculated before submit',
      badge: '0x782C91A...E921',
      icon: Hash,
    },
    {
      id: 3,
      title: 'BLOCKCHAIN TIMESTAMP',
      desc: 'Hash sealed on-chain before public draw window closes',
      badge: '22 AUG 2026 09:42:17',
      icon: Clock,
    },
    {
      id: 4,
      title: 'PUBLIC RESULT',
      desc: 'Public real-world draw numbers published',
      badge: '07 · 11 · 18 · 26 · 36 · 45',
      icon: Radio,
    },
    {
      id: 5,
      title: 'ORACLE CONSENSUS',
      desc: 'Decentralized nodes fetch & cryptographically sign draw data',
      badge: 'Multi-Sig Signed',
      icon: Cpu,
    },
    {
      id: 6,
      title: 'SMART CONTRACT',
      desc: 'Code executes automated tamper-proof score settlement',
      badge: 'Block #28482913',
      icon: FileCode2,
    },
    {
      id: 7,
      title: 'VERIFIED SCORE',
      desc: 'Reputation IQ & XP updated permanently to player profile',
      badge: 'VERIFIED ✓ (+600 XP)',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="technology" className="relative py-24 bg-[#06080B] border-t border-white/10 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-lime-400/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-lime-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CRYPTOGRAPHIC PROOF PIPELINE</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            TRUST SHOULD NOT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyber-blue">
              REQUIRE TRUST.
            </span>
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            No blackbox odds. No retroactive adjustments. Predictions are locked and verified by immutable smart contracts.
          </p>
        </div>

        {/* Cryptographic Pipeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-3 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === step.id;

            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between relative ${
                  isSelected
                    ? 'bg-surface-100/95 border-lime-400 shadow-glow-lime/30 scale-105 z-10'
                    : 'bg-surface-50/60 border-white/10 hover:border-white/20 hover:bg-surface-100/70'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] font-bold text-metal-400">
                    0{step.id}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-lime-400' : 'text-metal-400'}`} />
                </div>

                <div>
                  <h4 className="font-mono font-bold text-xs text-white leading-tight mb-1">
                    {step.title}
                  </h4>
                  <p className="text-[10px] text-metal-400 line-clamp-2">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-white/5">
                  <span className={`text-[9px] font-mono block truncate ${
                    isSelected ? 'text-lime-400 font-bold' : 'text-metal-400'
                  }`}>
                    {step.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big On-Chain Inspector Live Card */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-2xl shadow-glass-card space-y-6">
          
          <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
            <span className="text-lime-400 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              TRANSACTION RECEIPT #0x992B881
            </span>
            <span className="text-metal-400">ORACLE VERIFICATION CONSENSUS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-surface-200/90 border border-white/5">
              <span className="text-metal-400 text-[10px] block uppercase">Prediction Call</span>
              <span className="text-white font-bold">[ 07 · 18 · 23 · 36 · 41 ]</span>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-200/90 border border-white/5">
              <span className="text-metal-400 text-[10px] block uppercase">Lock Timestamp</span>
              <span className="text-lime-400 font-bold">22 AUG 2026 09:42:17</span>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-200/90 border border-white/5">
              <span className="text-metal-400 text-[10px] block uppercase">SHA-256 Hash</span>
              <span className="text-cyber-blue font-bold truncate block">0x782C91A...E921</span>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-200/90 border border-white/5">
              <span className="text-metal-400 text-[10px] block uppercase">On-Chain State</span>
              <span className="text-lime-400 font-bold">SEALED & SETTLED ✓</span>
            </div>
          </div>

          {/* Giant Investor Statement */}
          <div className="pt-6 border-t border-white/10 text-center">
            <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
              NO ADMIN CAN CHANGE THE PAST.
            </h3>
            <p className="text-xs sm:text-sm font-mono text-metal-300 mt-2">
              Mathematical finality replaces blind trust in centralized operators.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
