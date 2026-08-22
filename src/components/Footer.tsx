import React from 'react';
import { ShieldCheck, Github, Twitter, Send, Activity } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#040608] border-t border-white/10 py-12 text-metal-300 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-lg text-white">
                ORACLE <span className="text-lime-400">49</span>
              </span>
            </div>
            <p className="text-[11px] text-metal-400 leading-relaxed">
              The Verifiable Number Prediction Network. 
              Real-World Public Results + Prediction Game + Blockchain Proof + Social Ranking.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-lime-400">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
              <span>MAINNET NETWORK ACTIVE</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2">
            <span className="text-white font-bold text-xs uppercase tracking-wider block">
              Ecosystem
            </span>
            <ul className="space-y-1.5 text-[11px]">
              <li><a href="#live-demo" className="hover:text-lime-400 transition-colors">Interactive Live Demo</a></li>
              <li><a href="#game-modes" className="hover:text-lime-400 transition-colors">7 Game Modes</a></li>
              <li><a href="#prediction-iq" className="hover:text-lime-400 transition-colors">Prediction IQ Score</a></li>
              <li><a href="#technology" className="hover:text-lime-400 transition-colors">Blockchain Architecture</a></li>
            </ul>
          </div>

          {/* Col 3: Economics */}
          <div className="space-y-2">
            <span className="text-white font-bold text-xs uppercase tracking-wider block">
              Commercial
            </span>
            <ul className="space-y-1.5 text-[11px]">
              <li><a href="#business-model" className="hover:text-lime-400 transition-colors">Business Model</a></li>
              <li><a href="#business-model" className="hover:text-lime-400 transition-colors">Brand Engine</a></li>
              <li><a href="#roadmap" className="hover:text-lime-400 transition-colors">Roadmap & Vision</a></li>
              <li><a href="#concept" className="hover:text-lime-400 transition-colors">Non-Gambling Philosophy</a></li>
            </ul>
          </div>

          {/* Col 4: Links & GitHub */}
          <div className="space-y-2">
            <span className="text-white font-bold text-xs uppercase tracking-wider block">
              Repository & Protocol
            </span>
            <div className="space-y-2 text-[11px]">
              <a
                href="https://github.com/ronfatt/ai-lottery.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-metal-300 hover:text-white bg-surface-100 px-3 py-2 rounded-lg border border-white/10"
              >
                <Github className="w-4 h-4" />
                <span>github.com/ronfatt/ai-lottery</span>
              </a>
              <p className="text-[10px] text-metal-400">
                Official protocol codebase and verified prediction engine contracts.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-metal-400">
          <div>
            © 2026 ORACLE 49 Protocol. All rights reserved. Designed for Global Web3 & Prediction Enthusiasts.
          </div>

          <div className="flex items-center gap-4">
            <span>SHA-256 Verified</span>
            <span>Zero House Edge</span>
            <span>Reputation Centric</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
