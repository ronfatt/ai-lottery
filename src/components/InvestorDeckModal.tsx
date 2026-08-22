import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, CheckCircle2, Download, Send, ArrowRight, ShieldCheck, Mail, Sparkles } from 'lucide-react';

interface InvestorDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InvestorDeckModal: React.FC<InvestorDeckModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[#0A0E17] border border-lime-400/40 rounded-3xl p-6 sm:p-10 max-w-xl w-full shadow-[0_0_80px_rgba(0,255,102,0.2)] space-y-6 relative"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-surface-200 text-metal-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/30 text-xs font-mono text-lime-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INVESTOR RELATIONS 2026</span>
          </div>

          <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
            REQUEST INVESTOR DECK
          </h3>

          <p className="text-xs sm:text-sm font-mono text-metal-300">
            Receive the confidential 28-page ORACLE 49 deck containing tokenomics roadmap, financial projections, and compliance architecture.
          </p>
        </div>

        {/* Deck Highlights */}
        <div className="grid grid-cols-2 gap-3 py-2 font-mono text-xs text-metal-300">
          <div className="p-3 rounded-xl bg-surface-100 border border-white/5">
            <span className="text-metal-400 text-[10px] block">TAM</span>
            <span className="text-white font-bold">$120B+ Prediction TAM</span>
          </div>
          <div className="p-3 rounded-xl bg-surface-100 border border-white/5">
            <span className="text-metal-400 text-[10px] block">MONETIZATION</span>
            <span className="text-lime-400 font-bold">Pro SaaS + B2B Brand Engine</span>
          </div>
        </div>

        {/* Email form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs font-mono text-metal-300 block">
                Work Email / Institutional Handle:
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="partner@venture-capital.com"
                className="w-full bg-surface-200 border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-white placeholder:text-metal-400 focus:outline-none focus:border-lime-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-glow-lime"
            >
              <Send className="w-4 h-4" />
              <span>SEND CONFIDENTIAL DECK</span>
            </button>
          </form>
        ) : (
          <div className="p-6 rounded-2xl bg-lime-400/10 border border-lime-400/40 text-center space-y-3">
            <CheckCircle2 className="w-8 h-8 text-lime-400 mx-auto" />
            <h4 className="font-display font-bold text-lg text-white">DECK DISPATCHED</h4>
            <p className="text-xs font-mono text-metal-300">
              Access link has been queued for <strong className="text-white">{email}</strong>. Our IR lead will connect shortly.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-white/10 text-white text-xs font-mono font-bold"
            >
              Close Window
            </button>
          </div>
        )}

      </motion.div>
    </div>
  );
};
