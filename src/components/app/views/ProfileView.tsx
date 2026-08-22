import React from 'react';
import { useDemo } from '../../../context/DemoContext';
import { User, Trophy, Award, ShieldCheck, Sparkles, Flame, CheckCircle2, Target, Flag, Smartphone, LineChart } from 'lucide-react';

export const ProfileView: React.FC = () => {
  const { user } = useDemo();

  const badges = [
    { title: '创世先驱玩家 (Founding Player)', desc: '第一批加入 ORACLE 49 主网的先驱者', icon: '🌟', unlocked: true },
    { title: '神谕大师称号 (Oracle Master)', desc: '成功培育 2 组以上神谕使者团队', icon: '👑', unlocked: true },
    { title: '雪邦围场行家 (Sepang Master)', desc: 'F1 赛车预测智商突破 820 分', icon: '🏎️', unlocked: true },
    { title: '沙田赛道专家 (Sha Tin Expert)', desc: '香港赛马日前三命中率突破 58%', icon: '🏇', unlocked: true },
    { title: '科技先知大师 (October Oracle)', desc: '10月智能手机发布精确命中与 Super 8 达成', icon: '📱', unlocked: true },
    { title: '加密市场先知 (Crypto Oracle)', desc: 'BTC $100K 关键大关与加密 Super 8 满贯', icon: '📈', unlocked: true },
    { title: '极限连胜狂人 (Hot Streak)', desc: '达成 6 场以上高置信度连续命中', icon: '🔥', unlocked: true },
    { title: '全球 5% 精英 (Top 5% Elite)', desc: '位列全球综合 Prediction IQ 前 5% 梯队', icon: '🪐', unlocked: true },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 font-sans">
      
      {/* Header */}
      <div className="pb-4 border-b border-white/10 space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono text-lime-400 font-bold">
          <User className="w-4 h-4" />
          <span>ORACLE IDENTITY // 个人声誉档案</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
          个人声誉主页与五大品类专属技能 (SPECIALIST SKILLS)
        </h2>
        <p className="text-xs font-mono text-slate-200">
          链上不可篡改的声誉履历 · 记录数字预测、F1 赛车、赛马日、科技发布与加密市场专属智商
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
              <span className="text-xs font-mono text-slate-300 block mt-0.5">
                注册时间：2026年创世期 · 创作者状态：活跃 · 纯净 USDT 结算
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-right font-mono text-xs">
            <div className="p-3 rounded-xl bg-surface-200 border border-white/10">
              <span className="text-slate-300 text-xs block font-medium">综合 Prediction IQ</span>
              <span className="font-black text-xl text-lime-400">{user.predictionIQ}</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-200 border border-white/10">
              <span className="text-slate-300 text-xs block font-medium">全球总排名</span>
              <span className="font-black text-xl text-cyber-blue">#{user.globalRank}</span>
            </div>
          </div>
        </div>

        {/* Specialist Skills 5 Categories Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono text-xs">
            <span className="text-slate-300 uppercase tracking-widest font-bold">
              SPECIALIST SKILLS // 5 大细分品类技能智商
            </span>
            <span className="text-lime-400 font-bold">全景去中心化专业直觉认证</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 font-mono text-xs">
            
            {/* Number Prediction */}
            <div className="p-4 rounded-2xl bg-surface-200/90 border border-lime-400/40 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-lime-400" />
                  <span className="font-bold text-white text-xs">数字预测</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[9px] bg-lime-400/20 text-lime-400 font-bold">
                  核心
                </span>
              </div>
              <div className="font-black text-2xl text-lime-400 my-1">
                {user.predictionIQ} <span className="text-xs text-slate-300 font-normal">IQ</span>
              </div>
              <span className="text-xs text-slate-200 block">
                香港公开摇号 · 胜率 60%
              </span>
            </div>

            {/* F1 Motorsport */}
            <div className="p-4 rounded-2xl bg-surface-200/90 border border-cyber-amber/50 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Flag className="w-4 h-4 text-cyber-amber" />
                  <span className="font-bold text-white text-xs">F1 赛车</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[9px] bg-cyber-amber/20 text-cyber-amber font-bold">
                  特色
                </span>
              </div>
              <div className="font-black text-2xl text-cyber-amber my-1">
                {user.f1IQ} <span className="text-xs text-slate-300 font-normal">F1 IQ</span>
              </div>
              <span className="text-xs text-slate-200 block">
                全马 #{user.f1RankMalaysia} · 准确率 {user.f1Accuracy}%
              </span>
            </div>

            {/* Hong Kong Horse Racing */}
            <div className="p-4 rounded-2xl bg-surface-200/90 border border-emerald-500/50 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-white text-xs">香港赛马</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[9px] bg-emerald-500/20 text-emerald-400 font-bold">
                  热门
                </span>
              </div>
              <div className="font-black text-2xl text-emerald-400 my-1">
                {user.racingIQ} <span className="text-xs text-slate-300 font-normal">Racing IQ</span>
              </div>
              <span className="text-xs text-slate-200 block">
                沙田 #{user.racingRankShaTin} · 前三 {user.racingTop3Accuracy}
              </span>
            </div>

            {/* Tech Launch */}
            <div className="p-4 rounded-2xl bg-surface-200/90 border border-cyan-400/50 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-cyan-400" />
                  <span className="font-bold text-white text-xs">科技发布</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[9px] bg-cyan-400/20 text-cyan-300 font-bold">
                  科技
                </span>
              </div>
              <div className="font-black text-2xl text-cyan-400 my-1">
                {user.techIQ} <span className="text-xs text-slate-300 font-normal">Tech IQ</span>
              </div>
              <span className="text-xs text-slate-200 block">
                全球 #{user.globalTechRank} · 命中 4 次
              </span>
            </div>

            {/* Crypto Market */}
            <div className="p-4 rounded-2xl bg-surface-200/90 border border-amber-400/50 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <LineChart className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-white text-xs">加密市场</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[9px] bg-amber-400/20 text-amber-300 font-bold">
                  行情
                </span>
              </div>
              <div className="font-black text-2xl text-amber-400 my-1">
                {user.cryptoIQ} <span className="text-xs text-slate-300 font-normal">Crypto IQ</span>
              </div>
              <span className="text-xs text-slate-200 block">
                全球 #{user.globalCryptoRank} · 连胜 6 场
              </span>
            </div>

          </div>
        </div>

        {/* Soulbound Badges Showcase */}
        <div className="space-y-4 pt-2">
          <h4 className="font-display font-black text-lg text-white">
            灵魂绑定成就勋章 (SOULBOUND BADGES)
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            {badges.map((b) => (
              <div
                key={b.title}
                className={`p-4 rounded-2xl border flex items-start gap-3 transition-all ${
                  b.unlocked
                    ? 'bg-surface-200/90 border-lime-400/40 shadow-sm text-white'
                    : 'bg-surface-200/40 border-white/5 opacity-50 text-slate-300'
                }`}
              >
                <div className="text-3xl p-2 rounded-xl bg-surface-100 border border-white/10 flex-shrink-0">
                  {b.icon}
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-sm block text-white">{b.title}</span>
                  <p className="text-xs text-slate-200">{b.desc}</p>
                  <span className={`text-[10px] font-bold block pt-1 ${
                    b.unlocked ? 'text-lime-400' : 'text-slate-400'
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
