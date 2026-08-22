import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, ArrowUp } from 'lucide-react';

export const PredictionIQ: React.FC = () => {
  // Rank Up animation simulation
  const [currentRank, setCurrentRank] = useState(1284);
  const [isRankUpActive, setIsRankUpActive] = useState(false);

  const triggerRankUp = () => {
    setIsRankUpActive(true);
    setTimeout(() => {
      setCurrentRank(1179);
    }, 400);
  };

  const badges = [
    { title: '数字猎手勋章', icon: '🎯', desc: '连续 10 期预测中单期命中 3 码以上', rarity: '传说级' },
    { title: '形态大师勋章', icon: '⚡', desc: '第 08 赛季结构规律准确率达到 80% 以上', rarity: '史诗级' },
    { title: '连胜狂人勋章', icon: '🔥', desc: '在天梯排位中连续 6 期取得正向预测得分', rarity: '稀有级' },
    { title: '全球前 5% 精英', icon: '👑', desc: '全球综合 Prediction IQ 突破 780 分大关', rarity: '神话级' },
    { title: '赛季总冠军头衔', icon: '🏆', desc: '在 Alpha 巅峰季后赛中位列前 50 席位', rarity: '传说级' },
  ];

  return (
    <section id="prediction-iq" className="relative py-24 bg-[#06080B] border-t border-white/10 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-lime-400/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-lime-400">
            <Trophy className="w-3.5 h-3.5" />
            <span>玩家永恒声誉层</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            你的直觉与推演 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyber-blue to-white text-glow-lime">
              将化为可验证的权威评分。
            </span>
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            产品绝不仅仅关于“赢下某一局”，而是关于在链上建立真正属于玩家、不可抹杀的<strong>终身预测声誉体系</strong>。
          </p>
        </div>

        {/* Big Profile HUD Dashboard */}
        <div className="max-w-5xl mx-auto bg-surface-100/90 border border-white/15 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-glass-card">
          
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 border-b border-white/10 gap-6">
            
            {/* User Identity & Avatar */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-surface-200 to-surface-300 border-2 border-lime-400/80 flex items-center justify-center font-mono font-black text-2xl text-lime-400 shadow-glow-lime/30">
                R.ON
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-lime-400 border-2 border-black flex items-center justify-center text-[8px] text-black font-black">
                  ✓
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="font-display font-black text-2xl text-white">R.ON</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-lime-400/20 text-lime-400 border border-lime-400/40 font-bold">
                    PRO 专业预测大师
                  </span>
                  <span className="text-xs font-mono text-metal-400">#0x992B...81F</span>
                </div>
                <p className="text-xs font-mono text-metal-300 mt-0.5">
                  注册于：第 02 赛季 · 已完成 1,480 笔链上密码学有效预测
                </p>
              </div>
            </div>

            {/* Global Prediction IQ Score Pill */}
            <div className="flex items-center gap-6 bg-surface-200/90 p-4 rounded-2xl border border-white/10 self-stretch md:self-auto justify-between">
              <div>
                <span className="text-[10px] font-mono text-metal-400 uppercase tracking-wider block">
                  预测智商指数 (PREDICTION IQ)
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono font-black text-4xl sm:text-5xl text-lime-400 text-glow-lime">
                    782
                  </span>
                  <span className="text-xs font-mono text-metal-300">/ 999 满分</span>
                </div>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div className="text-right">
                <span className="text-[10px] font-mono text-metal-400 uppercase tracking-wider block">
                  全球分位段
                </span>
                <span className="font-mono font-bold text-lg sm:text-xl text-cyber-blue block">
                  前 4.8%
                </span>
                <span className="text-[10px] font-mono text-metal-400">位列全球顶尖梯队</span>
              </div>
            </div>

          </div>

          {/* Core Analytics Grid (6 Metric Cards) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 my-8">
            
            {/* Hit Rate */}
            <div className="p-4 rounded-2xl bg-surface-200/70 border border-white/5 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-metal-400">号码命中率</span>
              <div className="font-mono font-black text-2xl text-white my-2">37.2%</div>
              <span className="text-[10px] font-mono text-lime-400">▲ 本月上升 3.4%</span>
            </div>

            {/* Pattern Accuracy */}
            <div className="p-4 rounded-2xl bg-surface-200/70 border border-white/5 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-metal-400">规律形态准确率</span>
              <div className="font-mono font-black text-2xl text-cyber-violet my-2">68.4%</div>
              <span className="text-[10px] font-mono text-cyber-violet">高维度统计智商</span>
            </div>

            {/* Odd/Even Accuracy */}
            <div className="p-4 rounded-2xl bg-surface-200/70 border border-white/5 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-metal-400">单双研判率</span>
              <div className="font-mono font-black text-2xl text-cyber-blue my-2">81.0%</div>
              <span className="text-[10px] font-mono text-metal-300">全球前 2% 水准</span>
            </div>

            {/* High/Low Accuracy */}
            <div className="p-4 rounded-2xl bg-surface-200/70 border border-white/5 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-metal-400">高低半区率</span>
              <div className="font-mono font-black text-2xl text-white my-2">73.0%</div>
              <span className="text-[10px] font-mono text-metal-300">稳健极值优势</span>
            </div>

            {/* Current Streak */}
            <div className="p-4 rounded-2xl bg-surface-200/70 border border-white/5 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-metal-400">当前连胜场次</span>
              <div className="font-mono font-black text-2xl text-lime-400 my-2 flex items-center gap-1">
                <span>🔥 6 连胜</span>
              </div>
              <span className="text-[10px] font-mono text-lime-400">经验倍率 1.8x</span>
            </div>

            {/* Global Rank with Interactive Trigger */}
            <div 
              onClick={triggerRankUp}
              className="p-4 rounded-2xl bg-surface-200/90 border border-lime-400/40 cursor-pointer hover:border-lime-400 transition-all flex flex-col justify-between group shadow-glow-lime/10"
            >
              <span className="text-[10px] font-mono text-metal-400 flex items-center justify-between">
                <span>全球天梯名次</span>
                <span className="text-[8px] bg-lime-400/20 text-lime-400 px-1 rounded">点击模拟胜场</span>
              </span>
              
              <div className="font-mono font-black text-2xl text-lime-400 my-2 flex items-center gap-1">
                <span>#{currentRank} 名</span>
                {isRankUpActive && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-lime-400 flex items-center font-bold"
                  >
                    <ArrowUp className="w-3 h-3" /> 105
                  </motion.span>
                )}
              </div>
              <span className="text-[10px] font-mono text-metal-300 group-hover:text-lime-400 transition-colors">
                {isRankUpActive ? '名次成功晋级！' : '模拟胜场排名飞跃'}
              </span>
            </div>

          </div>

          {/* Badges Carousel / Showcase */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-metal-300 font-bold uppercase tracking-wider">
                已解锁成就勋章 (已点亮 5 / 12 枚)
              </span>
              <span className="text-xs font-mono text-lime-400">链上灵魂绑定不可转让 (SBT)</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {badges.map((b) => (
                <div
                  key={b.title}
                  className="p-3.5 rounded-xl bg-surface-200/90 border border-white/10 hover:border-lime-400/50 transition-all flex flex-col items-center text-center group"
                >
                  <span className="text-2xl mb-1.5 group-hover:scale-110 transition-transform">
                    {b.icon}
                  </span>
                  <span className="font-mono font-bold text-xs text-white group-hover:text-lime-400 transition-colors">
                    {b.title}
                  </span>
                  <span className="text-[10px] font-mono text-metal-400 mt-1 leading-tight">
                    {b.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
