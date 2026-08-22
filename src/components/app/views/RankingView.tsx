import React, { useState } from 'react';
import { useDemo } from '../../../context/DemoContext';
import { RANK_LADDER } from '../../../data/mockData';
import { MemberRankType } from '../../../types/platform';
import { TrendingUp, Crown, CheckCircle2, ChevronRight, Lock, Sparkles, Award } from 'lucide-react';

export const RankingView: React.FC = () => {
  const { user } = useDemo();
  const [selectedRank, setSelectedRank] = useState<MemberRankType>('oracle_master');

  const selectedRankInfo = RANK_LADDER.find((r) => r.rank === selectedRank) || RANK_LADDER[4];

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="pb-4 border-b border-white/10 space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono text-lime-400 font-bold">
          <TrendingUp className="w-4 h-4" />
          <span>MEMBER RANK SYSTEM // 会员晋级体系</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
          会员阶位与组织权益阶梯
        </h2>
        <p className="text-xs font-mono text-metal-300">
          基于直推人数、社群规模、团队培育与留存率综合评定的 6 阶尊享特权
        </p>
      </div>

      {/* Current User Rank Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border-2 border-lime-400/50 backdrop-blur-xl shadow-glow-lime/20 space-y-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-white/10 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-surface-200 to-surface-300 border-2 border-lime-400 flex items-center justify-center text-3xl shadow-glow-lime/30">
              👑
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-metal-400 uppercase tracking-widest block">当前达成阶位</span>
                <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-lime-400 text-black font-black">第 5 阶</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                神谕大师 (ORACLE MASTER)
              </h3>
              <span className="text-xs font-mono text-lime-400 font-bold">
                享有 8 份全网分红池资格 · 创作者私域俱乐部主办特权
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 font-mono text-xs text-right space-y-1">
            <span className="text-metal-400 text-[10px] block">晋升下一阶【神谕至尊】进度</span>
            <span className="font-black text-2xl text-lime-400">72%</span>
            <span className="text-[10px] text-metal-300 block">还需培育 1 组神谕大师团队</span>
          </div>
        </div>

        {/* Requirements Checklist */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-metal-300 font-bold block">
            晋升【神谕至尊 (Oracle Elite · 20 份分红)】考核指标：
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-3 rounded-xl bg-surface-200 border border-white/5 space-y-0.5">
              <span className="text-metal-400 text-[10px] block">直推人数</span>
              <span className="font-bold text-white">50 / 80 位 (62.5%)</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-200 border border-white/5 space-y-0.5">
              <span className="text-metal-400 text-[10px] block">社群活跃人数</span>
              <span className="font-bold text-white">1,248 / 3,000 人 (41.6%)</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-200 border border-white/5 space-y-0.5">
              <span className="text-metal-400 text-[10px] block">大师团队培育</span>
              <span className="font-bold text-cyber-blue">2 / 3 组 (还需 1 组)</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-200 border border-white/5 space-y-0.5">
              <span className="text-metal-400 text-[10px] block">留存率门槛</span>
              <span className="font-bold text-lime-400">68% (达标 ≥70%) ✓</span>
            </div>
          </div>
        </div>

      </div>

      {/* 6 Ranks Ladder Horizontal Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-xs">
        {RANK_LADDER.map((r, idx) => {
          const isSelected = selectedRank === r.rank;
          const isCurrent = user.rank === r.rank;

          return (
            <button
              key={r.rank}
              onClick={() => setSelectedRank(r.rank)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-surface-100 border-lime-400 shadow-glow-lime scale-105 z-10'
                  : 'bg-surface-200/60 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{r.icon}</span>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                  isCurrent ? 'bg-lime-400 text-black' : 'bg-surface-300 text-metal-300'
                }`}>
                  {isCurrent ? '当前阶位' : `第 ${idx + 1} 阶`}
                </span>
              </div>

              <div>
                <span className="font-bold text-sm text-white block truncate">{r.title}</span>
                <span className="text-[10px] text-metal-400">{r.enTitle}</span>
              </div>

              <div className="mt-2 pt-2 border-t border-white/5 text-[10px] text-lime-400 font-bold">
                {r.shares > 0 ? `${r.shares} 份分红` : '0 份分红'}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Selected Rank Inspector Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-6 font-mono text-xs">
        
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{selectedRankInfo.icon}</span>
            <div>
              <h3 className="font-display font-black text-xl text-white">
                {selectedRankInfo.title} ({selectedRankInfo.enTitle})
              </h3>
              <span className="text-lime-400 font-bold">
                享 {selectedRankInfo.shares} 份全球分红池份额 · 参考月收益：{selectedRankInfo.exampleEarningsUSDT}
              </span>
            </div>
          </div>
        </div>

        {/* Qualification & Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Qualifications */}
          <div className="p-5 rounded-2xl bg-surface-200/80 border border-white/5 space-y-3">
            <span className="text-white font-bold text-sm block">晋级考核条件 (QUALIFICATIONS)</span>
            <ul className="space-y-2 text-metal-300 text-[11px]">
              <li>• 一级直推人数要求：<strong>{selectedRankInfo.directRequired} 位</strong></li>
              <li>• 社群总活跃人数：<strong>{selectedRankInfo.communityRequired} 人</strong></li>
              <li>• 社群留存率考核：<strong>≥ {selectedRankInfo.retentionRequired}%</strong></li>
              <li>• 团队深度培育要求：<strong>{selectedRankInfo.teamsRequired}</strong></li>
            </ul>
          </div>

          {/* Benefits & Tools */}
          <div className="p-5 rounded-2xl bg-surface-200/80 border border-white/5 space-y-3">
            <span className="text-white font-bold text-sm block">特权权益与解锁工具 (BENEFITS & TOOLS)</span>
            <ul className="space-y-2 text-metal-300 text-[11px]">
              {selectedRankInfo.benefits.map((b) => (
                <li key={b} className="text-lime-400">• {b}</li>
              ))}
              {selectedRankInfo.toolsUnlocked.map((t) => (
                <li key={t} className="text-cyber-blue">• 解锁工具：{t}</li>
              ))}
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
};
