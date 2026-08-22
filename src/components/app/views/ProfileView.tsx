import React from 'react';
import { useDemo } from '../../../context/DemoContext';
import { User, Trophy, Award, ShieldCheck, Sparkles, Flame, CheckCircle2 } from 'lucide-react';

export const ProfileView: React.FC = () => {
  const { user } = useDemo();

  const badges = [
    { title: '创世先驱玩家 (Founding Player)', desc: '第一批加入 ORACLE 49 主网的先驱者', icon: '🌟', unlocked: true },
    { title: '神谕大师称号 (Oracle Master)', desc: '成功培育 2 组以上神谕使者团队', icon: '👑', unlocked: true },
    { title: '极限连胜狂人 (Hot Streak)', desc: '达成 6 场以上高置信度连续命中', icon: '🔥', unlocked: true },
    { title: '形态规律大师 (Pattern Master)', desc: '规律结构推演准确率突破 68%', icon: '⚡', unlocked: true },
    { title: '全球 5% 精英 (Top 5% Elite)', desc: '位列全球 Prediction IQ 前 5% 梯队', icon: '🎯', unlocked: true },
    { title: '至尊联赛冠军 (Grand Champion)', desc: '夺得季度全球天梯联赛总冠军', icon: '🪐', unlocked: false },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="pb-4 border-b border-white/10 space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono text-lime-400 font-bold">
          <User className="w-4 h-4" />
          <span>ORACLE IDENTITY // 个人声誉档案</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
          个人资料与灵魂绑定徽章
        </h2>
        <p className="text-xs font-mono text-metal-300">
          链上不可篡改的声誉履历 · 记录每一项荣誉与历史战绩
        </p>
      </div>

      {/* Main Profile ID Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border-2 border-lime-400/50 backdrop-blur-xl shadow-glow-lime/20 space-y-6">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-3xl bg-lime-400 text-black flex items-center justify-center font-mono font-black text-3xl shadow-glow-lime">
              R.ON
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-black text-2xl text-white">{user.name}</h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-lime-400 text-black font-black">
                  神谕大师 (8 份分红)
                </span>
              </div>
              <span className="text-xs font-mono text-metal-400 block mt-0.5">
                注册时间：2026年创世期 · 创作者状态：活跃
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-right font-mono text-xs">
            <div className="p-3 rounded-xl bg-surface-200 border border-white/5">
              <span className="text-metal-400 text-[10px] block">Prediction IQ</span>
              <span className="font-black text-xl text-lime-400">{user.predictionIQ}</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-200 border border-white/5">
              <span className="text-metal-400 text-[10px] block">全球总排名</span>
              <span className="font-black text-xl text-cyber-blue">#{user.globalRank}</span>
            </div>
          </div>
        </div>

        {/* 6 Soulbound Badges Showcase */}
        <div className="space-y-4">
          <h4 className="font-display font-black text-lg text-white">
            灵魂绑定成就勋章 (SOULBOUND BADGES)
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
            {badges.map((b) => (
              <div
                key={b.title}
                className={`p-4 rounded-2xl border flex items-start gap-3 transition-all ${
                  b.unlocked
                    ? 'bg-surface-200/90 border-lime-400/40 shadow-sm text-white'
                    : 'bg-surface-200/40 border-white/5 opacity-50 text-metal-400'
                }`}
              >
                <div className="text-3xl p-2 rounded-xl bg-surface-100 border border-white/5 flex-shrink-0">
                  {b.icon}
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-sm block text-white">{b.title}</span>
                  <p className="text-[11px] text-metal-300">{b.desc}</p>
                  <span className={`text-[9px] font-bold block pt-1 ${
                    b.unlocked ? 'text-lime-400' : 'text-metal-400'
                  }`}>
                    {b.unlocked ? '已永久写入链上 ✓' : '尚未解锁'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
