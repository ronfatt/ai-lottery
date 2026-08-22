import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Trophy, TrendingUp, Film, CloudSun, Zap, ArrowRight } from 'lucide-react';

export const OracleUniverse: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<string>('numbers');

  const domains = [
    {
      id: 'numbers',
      name: 'ORACLE 49 (MVP)',
      badge: 'CURRENT LIVE MVP',
      items: ['01-49 Number Field', 'Sum Bracket Analysis', 'Structural Patterns', 'Zone Distribution'],
      color: '#00FF66',
      icon: '49',
    },
    {
      id: 'sports',
      name: 'SPORT ORACLE',
      badge: 'PHASE 02 EXPANSION',
      items: ['Formula 1 Pole & Podiums', 'Premier League / UEFA Matches', 'NBA Quarter Totals', 'Esports Champions'],
      color: '#00E5FF',
      icon: '🏎️',
    },
    {
      id: 'markets',
      name: 'MARKET ORACLE',
      badge: 'PHASE 03 EXPANSION',
      items: ['Bitcoin Weekly High/Low', 'Gold Spot Closes', 'S&P 500 Volatility Range', 'Fed Rate Decisions'],
      color: '#A855F7',
      icon: '📈',
    },
    {
      id: 'culture',
      name: 'CULTURE ORACLE',
      badge: 'PHASE 03 EXPANSION',
      items: ['Academy Awards Winners', 'Grammy Album of the Year', 'Box Office Opening Weekends', 'Viral Charts'],
      color: '#F59E0B',
      icon: '🎬',
    },
    {
      id: 'world',
      name: 'WORLD ORACLE',
      badge: 'PHASE 04 UNIVERSAL',
      items: ['City Temperature Records', 'SpaceX Launch Timelines', 'AI Benchmark Milestones', 'Public Global Events'],
      color: '#F43F5E',
      icon: '🌍',
    },
  ];

  return (
    <section className="relative py-24 bg-[#06080B] border-t border-white/10 overflow-hidden">
      {/* Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyber-indigo/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-cyber-blue">
            <Globe className="w-3.5 h-3.5" />
            <span>TOTAL ADDRESSABLE MARKET EXPANSION</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            START WITH NUMBERS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyber-blue to-cyber-violet">
              EXPAND INTO EVERYTHING.
            </span>
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            49 numbers is our high-frequency go-to-market MVP. 
            The underlying engine is a universal prediction infrastructure scalable across global sports, macro finance, and culture.
          </p>
        </div>

        {/* Interactive Domain Cluster */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {domains.map((dom) => {
            const isSelected = activeDomain === dom.id;

            return (
              <div
                key={dom.id}
                onClick={() => setActiveDomain(dom.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-surface-100/95 border-lime-400 shadow-glow-lime scale-105 z-10'
                    : 'bg-surface-50/60 border-white/10 hover:border-white/20 hover:bg-surface-100/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{dom.icon}</span>
                    <span className={`text-[8px] font-mono px-2 py-0.5 rounded font-bold ${
                      dom.id === 'numbers' ? 'bg-lime-400 text-black' : 'bg-surface-200 text-metal-300'
                    }`}>
                      {dom.badge}
                    </span>
                  </div>

                  <h4 className="font-display font-black text-lg text-white mb-2">
                    {dom.name}
                  </h4>

                  <ul className="space-y-1.5 pt-2 border-t border-white/10">
                    {dom.items.map((item) => (
                      <li key={item} className="text-xs font-mono text-metal-300 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-lime-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Cosmic Takeaway */}
        <div className="p-8 rounded-3xl bg-surface-100/80 border border-white/10 text-center max-w-4xl mx-auto space-y-2">
          <span className="font-mono text-xs text-lime-400 uppercase tracking-widest font-bold">
            THE UNIVERSAL NETWORK VISION
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
            THE ORACLE NETWORK
          </h3>
          <p className="text-xs sm:text-sm font-mono text-metal-300 max-w-2xl mx-auto">
            Prediction Infrastructure + Cryptographic Reputation Layer + Decentralized Oracle Consensus.
          </p>
        </div>

      </div>
    </section>
  );
};
