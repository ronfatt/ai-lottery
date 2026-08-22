import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShieldCheck, Database, FileText, CheckCircle2, ChevronRight, Hash, ExternalLink, X } from 'lucide-react';

export const ProofExplorer: React.FC = () => {
  const [isProofModalOpen, setIsProofModalOpen] = useState(false);

  return (
    <section className="relative py-24 bg-[#070A0F] border-t border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyber-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-cyber-blue">
            <Database className="w-3.5 h-3.5" />
            <span>PUBLIC ON-CHAIN LEDGER</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase">
            VERIFY EVERYTHING.
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            Every draw, locked hash, and oracle node validation is publicly inspectable by any third party.
          </p>
        </div>

        {/* Explorer Terminal Interface */}
        <div className="max-w-5xl mx-auto bg-surface-100/90 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-glass-card space-y-6">
          
          {/* Top Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono font-bold text-sm text-white">ORACLE EXPLORER</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-lime-400/20 text-lime-400 border border-lime-400/40">
                MAINNET SYNCHRONIZED
              </span>
            </div>

            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-metal-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                readOnly
                value="Draw #260822 (0x88f9...20d)"
                className="w-full bg-surface-200 border border-white/10 rounded-xl py-2 pl-9 pr-4 text-xs font-mono text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Core Telemetry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
            
            <div className="p-4 rounded-xl bg-surface-200/90 border border-white/5">
              <span className="text-metal-400 text-[10px] block uppercase">Draw Identifier</span>
              <span className="text-white font-bold text-sm">#260822</span>
              <span className="text-[10px] text-metal-400 block mt-1">Epoch 8849</span>
            </div>

            <div className="p-4 rounded-xl bg-surface-200/90 border border-white/5">
              <span className="text-metal-400 text-[10px] block uppercase">Total Predictions</span>
              <span className="text-lime-400 font-bold text-sm">128,419</span>
              <span className="text-[10px] text-metal-400 block mt-1">100% Sealed Pre-Draw</span>
            </div>

            <div className="p-4 rounded-xl bg-surface-200/90 border border-white/5">
              <span className="text-metal-400 text-[10px] block uppercase">Post-Lock Tamper</span>
              <span className="text-lime-400 font-bold text-sm">0 Modified</span>
              <span className="text-[10px] text-metal-400 block mt-1">Immutability 100%</span>
            </div>

            <div className="p-4 rounded-xl bg-surface-200/90 border border-white/5">
              <span className="text-metal-400 text-[10px] block uppercase">Target Blockchain</span>
              <span className="text-cyber-blue font-bold text-sm">BLOCK #28482913</span>
              <span className="text-[10px] text-metal-400 block mt-1">Gas: 0.00012 ETH</span>
            </div>

          </div>

          {/* Official Result Verification Strip */}
          <div className="p-6 rounded-2xl bg-surface-200/90 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-metal-400 uppercase tracking-widest block">
                OFFICIAL REAL-WORLD RESULT SIGNED BY 9/9 ORACLES
              </span>
              <div className="flex flex-wrap gap-2">
                {[7, 11, 18, 26, 36, 45].map((num) => (
                  <span
                    key={num}
                    className="w-10 h-10 rounded-xl bg-lime-400 text-black font-mono font-black text-sm flex items-center justify-center shadow-glow-lime/20"
                  >
                    {num < 10 ? `0${num}` : num}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => setIsProofModalOpen(true)}
                className="px-5 py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-glow-lime"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>VIEW PROOF</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Proof Modal / Cryptographic Trace Drawer */}
      <AnimatePresence>
        {isProofModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0D1117] border border-lime-400/40 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl space-y-6 relative"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-lime-400" />
                  <h3 className="font-display font-black text-xl text-white">
                    CRYPTOGRAPHIC MERKLE PROOF
                  </h3>
                </div>
                <button
                  onClick={() => setIsProofModalOpen(false)}
                  className="p-1.5 rounded-lg bg-surface-200 text-metal-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4 font-mono text-xs text-metal-300">
                <div className="p-3.5 rounded-xl bg-surface-100 border border-white/5 space-y-1">
                  <span className="text-metal-400 text-[10px] block uppercase">MERKLE ROOT HASH</span>
                  <span className="text-lime-400 break-all">
                    0x98f821a7c4e2098bba49182379102c9849201fba449172049182740192834b9
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-100 border border-white/5 space-y-1">
                  <span className="text-metal-400 text-[10px] block uppercase">ORACLE SIGNATURE (9 OF 9 MULTISIG)</span>
                  <span className="text-cyber-blue break-all">
                    0x38bba771920834ecbd2918471029384710293847102938471029384710293847
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-[11px]">
                  <div className="p-3 rounded-xl bg-surface-100 border border-white/5">
                    <span className="text-metal-400 block">Block Height:</span>
                    <span className="text-white font-bold">#28,482,913</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-100 border border-white/5">
                    <span className="text-metal-400 block">Settlement Finality:</span>
                    <span className="text-lime-400 font-bold">64 Validator Epochs (100%)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsProofModalOpen(false)}
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold"
                >
                  Close Proof Inspector
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
