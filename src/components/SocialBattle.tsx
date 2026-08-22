import React, { useState } from 'react';
import { Swords, Trophy, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export const SocialBattle: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://oracle49.network/battle/ron-vs-challenge');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-24 bg-[#070A0F] border-t border-white/10 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyber-indigo/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-cyber-blue">
            <Swords className="w-3.5 h-3.5" />
            <span>PVP 社交竞技层</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase">
            预测演进为社交竞技。
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            1v1 好友实时预判对决带来天然的病毒式留存，无需任何真钱筹码博弈。
            向好友发起直觉挑战，在私域联赛中决出谁才是真正的推演大师。
          </p>
        </div>

        {/* Big 1v1 Battle Arena Card */}
        <div className="max-w-4xl mx-auto bg-surface-100/90 border border-white/15 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-glass-card">
          
          <div className="flex items-center justify-between pb-6 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2 text-lime-400">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              <span className="font-bold">链上认证 1V1 对战房间 #8892</span>
            </div>
            <span className="text-metal-400">开奖期数 #260822 · 双方各自提交 5 项预测</span>
          </div>

          {/* VS Fighters Arena */}
          <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-center my-8">
            
            {/* Left Fighter: R.ON */}
            <div className="md:col-span-5 p-6 rounded-2xl bg-surface-200/90 border-2 border-lime-400 shadow-glow-lime/30 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[9px] font-mono bg-lime-400 text-black font-black">
                胜出者 (WINNER)
              </div>

              <div className="w-16 h-16 rounded-full bg-surface-300 border-2 border-lime-400 flex items-center justify-center font-mono font-black text-xl text-lime-400 mb-3 shadow-lg">
                R.ON
              </div>

              <h4 className="font-display font-black text-xl text-white">R.ON</h4>
              <span className="text-xs font-mono text-lime-400 font-bold mb-4">
                预测智商 782
              </span>

              {/* Call scores */}
              <div className="w-full pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono">
                <span className="text-metal-300">本局预判战绩：</span>
                <span className="font-black text-lime-400 text-base">命中 4 / 5 项</span>
              </div>
            </div>

            {/* Middle VS Graphic */}
            <div className="md:col-span-1 flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-surface-300 border border-white/20 flex items-center justify-center font-display font-black text-sm text-cyber-blue shadow-lg">
                VS
              </div>
            </div>

            {/* Right Fighter: DAVID */}
            <div className="md:col-span-5 p-6 rounded-2xl bg-surface-200/60 border border-white/10 flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-full bg-surface-300 border border-metal-400 flex items-center justify-center font-mono font-black text-xl text-metal-300 mb-3">
                DAV
              </div>

              <h4 className="font-display font-bold text-xl text-white">DAVID (大卫)</h4>
              <span className="text-xs font-mono text-metal-300 mb-4">
                预测智商 741
              </span>

              {/* Call scores */}
              <div className="w-full pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono">
                <span className="text-metal-300">本局预判战绩：</span>
                <span className="font-bold text-white text-base">命中 3 / 5 项</span>
              </div>
            </div>

          </div>

          {/* Battle Outcome & Rewards */}
          <div className="p-4 rounded-2xl bg-lime-400/10 border border-lime-400/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <Trophy className="w-5 h-5 text-lime-400 flex-shrink-0" />
              <div>
                <span className="text-xs font-mono font-bold text-white block">
                  对局结算结果：R.ON 赢得本场 1v1 巅峰对决
                </span>
                <span className="text-[11px] font-mono text-lime-400">
                  +250 赛季积分 · 全球天梯积分 ↑ 跃升 18 点
                </span>
              </div>
            </div>

            <button
              onClick={handleCopyLink}
              className="px-4 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-mono text-xs font-bold uppercase flex items-center gap-1.5 transition-all shadow-glow-lime"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>挑战邀请链接已复制！</span>
                </>
              ) : (
                <>
                  <Swords className="w-3.5 h-3.5" />
                  <span>发起好友挑战</span>
                </>
              )}
            </button>
          </div>

          {/* 1-Click Social Sharing */}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <span className="text-metal-300">一键分享战绩到社交网络：</span>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-lg bg-surface-200 hover:bg-surface-300 text-metal-200 hover:text-white border border-white/10 flex items-center gap-1.5 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-green-400" />
                <span>微信 / WhatsApp</span>
              </button>

              <button 
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-lg bg-surface-200 hover:bg-surface-300 text-metal-200 hover:text-white border border-white/10 flex items-center gap-1.5 transition-all"
              >
                <Send className="w-3.5 h-3.5 text-cyber-blue" />
                <span>Telegram</span>
              </button>

              <button 
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-lg bg-surface-200 hover:bg-surface-300 text-metal-200 hover:text-white border border-white/10 flex items-center gap-1.5 transition-all"
              >
                <span className="font-black">𝕏 / 微博</span>
                <span>分享</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
