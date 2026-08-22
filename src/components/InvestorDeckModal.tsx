import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, Send, Sparkles } from 'lucide-react';

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
            <span>2026 投资人关系通道</span>
          </div>

          <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
            索取投资人商业计划书 (DECK)
          </h3>

          <p className="text-xs sm:text-sm font-mono text-metal-300">
            获取 28 页机密级 ORACLE 49 商业计划书，包含经济模型测算、财务预测模型、技术白皮书及合规架构。
          </p>
        </div>

        {/* Deck Highlights */}
        <div className="grid grid-cols-2 gap-3 py-2 font-mono text-xs text-metal-300">
          <div className="p-3 rounded-xl bg-surface-100 border border-white/5">
            <span className="text-metal-400 text-[10px] block">市场空间 (TAM)</span>
            <span className="text-white font-bold">1200 亿美金预测赛道</span>
          </div>
          <div className="p-3 rounded-xl bg-surface-100 border border-white/5">
            <span className="text-metal-400 text-[10px] block">商业变现模式</span>
            <span className="text-lime-400 font-bold">PRO 订阅 + 品牌营销引擎</span>
          </div>
        </div>

        {/* Email form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs font-mono text-metal-300 block">
                您的工作邮箱 / 机构联系方式：
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
              <span>发送机密商业计划书</span>
            </button>
          </form>
        ) : (
          <div className="p-6 rounded-2xl bg-lime-400/10 border border-lime-400/40 text-center space-y-3">
            <CheckCircle2 className="w-8 h-8 text-lime-400 mx-auto" />
            <h4 className="font-display font-bold text-lg text-white">商业计划书已成功排队派发</h4>
            <p className="text-xs font-mono text-metal-300">
              访问链接已发送至 <strong className="text-white">{email}</strong>。我们的投资人关系负责人将尽快与您取得联系。
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-white/10 text-white text-xs font-mono font-bold"
            >
              关闭窗口
            </button>
          </div>
        )}

      </motion.div>
    </div>
  );
};
