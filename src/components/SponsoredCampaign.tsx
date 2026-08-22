import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flag, Trophy, Sparkles, CheckCircle2, ArrowRight, Zap } from 'lucide-react';

export const SponsoredCampaign: React.FC = () => {
  const [selectedDriver, setSelectedDriver] = useState<string>('VERSTAPPEN');

  const drivers = [
    { name: 'VERSTAPPEN', team: 'Red Bull Racing', oddsConfidence: '48%', color: '#00E5FF' },
    { name: 'NORRIS', team: 'McLaren F1', oddsConfidence: '32%', color: '#F59E0B' },
    { name: 'LECLERC', team: 'Scuderia Ferrari', oddsConfidence: '14%', color: '#F43F5E' },
    { name: 'RUSSELL', team: 'Mercedes-AMG', oddsConfidence: '6%', color: '#00FF66' },
  ];

  return (
    <section className="relative py-24 bg-[#070A0F] border-t border-white/10 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[400px] bg-cyber-amber/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-cyber-amber">
            <Flag className="w-3.5 h-3.5" />
            <span>ENTERPRISE BRAND ENGINE</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            PREDICTION AS A <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-amber via-lime-400 to-cyber-blue">
              MARKETING PRODUCT.
            </span>
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            Brands fund rewards. Players bring viral engagement. ORACLE 49 provides the verifiable prediction infrastructure.
          </p>
        </div>

        {/* Big F1 Motorsport UI Showcase Card */}
        <div className="max-w-5xl mx-auto bg-[#0A0E17]/95 border-2 border-cyber-amber/40 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_50px_rgba(245,158,11,0.15)] relative overflow-hidden">
          
          {/* Top Carbon Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyber-amber text-black flex items-center justify-center font-mono font-black text-lg shadow-lg">
                🏎️
              </div>
              <div>
                <span className="text-[10px] font-mono text-cyber-amber font-bold uppercase tracking-widest block">
                  BRAND PARTNER ACTIVATION
                </span>
                <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                  F1 MONZA GRAND PRIX PREDICTION WEEK
                </h3>
              </div>
            </div>

            <div className="px-3 py-1.5 rounded-xl bg-cyber-amber/15 border border-cyber-amber/40 text-cyber-amber font-mono text-xs font-bold">
              SPONSORED PRIZE POOL: $25,000 USD + VIP PASSES
            </div>
          </div>

          {/* Motorsport Prediction Question */}
          <div className="my-8 space-y-4">
            <div className="text-center space-y-1">
              <span className="text-xs font-mono text-metal-400 uppercase tracking-widest">
                OFFICIAL RACE QUESTION
              </span>
              <h4 className="font-display font-black text-2xl sm:text-3xl text-white">
                WHO TAKES POLE POSITION IN QUALIFYING?
              </h4>
            </div>

            {/* 4 Driver Interactive Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {drivers.map((driver) => {
                const isSelected = selectedDriver === driver.name;

                return (
                  <button
                    key={driver.name}
                    onClick={() => setSelectedDriver(driver.name)}
                    className={`p-5 rounded-2xl border text-left transition-all relative overflow-hidden ${
                      isSelected
                        ? 'bg-surface-200/90 border-lime-400 shadow-glow-lime scale-105 z-10'
                        : 'bg-surface-100/70 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-mono text-metal-400 uppercase">
                        {driver.team}
                      </span>
                      {isSelected && (
                        <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-lime-400 text-black font-black">
                          MY PICK
                        </span>
                      )}
                    </div>

                    <div className="font-display font-black text-lg text-white mb-2">
                      {driver.name}
                    </div>

                    <div className="pt-2 border-t border-white/10 flex justify-between text-xs font-mono">
                      <span className="text-metal-400">Crowd Pick:</span>
                      <span className="font-bold text-lime-400">{driver.oddsConfidence}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Activation Strip */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-metal-300">
              <CheckCircle2 className="w-4 h-4 text-lime-400" />
              <span>Verified On-Chain Timestamp closes 10 min prior to Q1</span>
            </div>

            <div className="text-lime-400 font-bold">
              34,819 Race Fans Locked In
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
