import React, { useState } from 'react';
import { useDemo } from '../../../context/DemoContext';
import { MOCK_POOL_HISTORY } from '../../../data/mockData';
import { Coins, Sparkles, TrendingUp, ShieldCheck, CheckCircle2, Trophy, Users, Calculator, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const PoolView: React.FC = () => {
  const { globalPoolAmount, poolGrowthToday, showToast } = useDemo();
  const [showFormulaModal, setShowFormulaModal] = useState(false);

  // Pool values calculated from dynamic live pool
  const communityPool = globalPoolAmount * 0.5; // 50% of total pool (5% of GMV)
  const performancePool = globalPoolAmount * 0.3; // 30% of total pool (3% of GMV)
  const creatorPool = globalPoolAmount * 0.2; // 20% of total pool (2% of GMV)

  const commShareVal = communityPool / 2436; // 2,436 qualified shares
  const myCommReward = commShareVal * 8; // 8 shares

  const perfShareVal = performancePool / 593;
  const myPerfReward = perfShareVal * 2; // 2 shares

  const creatorShareVal = creatorPool / 540;
  const myCreatorReward = creatorShareVal * 1; // 1 share

  const totalPoolEstimated = myCommReward + myPerfReward + myCreatorReward;

  const handleCreateLeague = () => {
    showToast('已成功创建私域预测联赛【R.ON NUMBER CLUB】，获得创作者分红资格！');
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="pb-4 border-b border-white/10 space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono text-lime-400 font-bold">
          <Coins className="w-4 h-4" />
          <span>GLOBAL REVENUE SHARING // 全网分红池</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
          ORACLE 全球分红池体系
        </h2>
        <p className="text-xs font-mono text-metal-300">
          基于全网真实付费会员 GMV 自动注入 · 8月周期进行中 · 3 大子分红池透明加权
        </p>
      </div>

      {/* Main Big Live Ticker Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-surface-100 via-surface-200 to-surface-100 border-2 border-lime-400 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,255,102,0.2)] space-y-6">
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-6 border-b border-white/10 gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-lime-400">
              <span className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-ping" />
              <span className="font-bold uppercase tracking-widest">LIVE POOL ACCUMULATION // 8月全网总分红池</span>
              <span className="px-2 py-0.5 rounded text-[9px] bg-lime-400/20 text-lime-400 font-bold">
                今日注资 +RM {poolGrowthToday.toFixed(2)}
              </span>
            </div>

            <div className="font-mono font-black text-4xl sm:text-6xl text-white text-glow-lime tracking-tight">
              RM {globalPoolAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-surface-300/80 border border-lime-400/40 text-right font-mono space-y-1">
            <span className="text-[10px] text-lime-400 uppercase font-bold block">
              您的 3 大分红池预估总收益 (TOTAL ESTIMATED)
            </span>
            <span className="font-mono font-black text-3xl text-lime-400">
              RM {totalPoolEstimated.toFixed(2)}
            </span>
            <span className="text-[10px] text-metal-400 block">
              持有 11 份总加权分红 (8 社群 + 2 绩效 + 1 创作者)
            </span>
          </div>
        </div>

        {/* 3 Sub-Pools Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Sub Pool 1: Community Pool (5%) */}
          <div className="p-6 rounded-2xl bg-surface-200/80 border border-lime-400/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-xs text-white">1. 全球社群分红池 (5%)</span>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-lime-400 text-black font-black">
                50% 权重
              </span>
            </div>

            <div className="font-mono font-black text-2xl text-white">
              RM {communityPool.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>

            <div className="space-y-1.5 pt-2 border-t border-white/5 font-mono text-xs text-metal-300">
              <div className="flex justify-between">
                <span>全网合格总份数：</span>
                <span className="text-white font-bold">2,436 Shares</span>
              </div>
              <div className="flex justify-between">
                <span>单份价值 (1 Share)：</span>
                <span className="text-cyber-blue font-bold">RM {commShareVal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>您持有份数：</span>
                <span className="text-lime-400 font-bold">8 Shares</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-white/5 text-lime-400 font-bold">
                <span>预估收益：</span>
                <span>RM {myCommReward.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Sub Pool 2: Performance Pool (3%) */}
          <div className="p-6 rounded-2xl bg-surface-200/80 border border-cyber-blue/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-xs text-white">2. 顶尖绩效卓越池 (3%)</span>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-cyber-blue text-black font-black">
                30% 权重
              </span>
            </div>

            <div className="font-mono font-black text-2xl text-white">
              RM {performancePool.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>

            <div className="space-y-1.5 pt-2 border-t border-white/5 font-mono text-xs text-metal-300">
              <div className="flex justify-between">
                <span>资格门槛：</span>
                <span className="text-lime-400 font-bold">Top 5% IQ 达标 ✓</span>
              </div>
              <div className="flex justify-between">
                <span>单份价值：</span>
                <span className="text-cyber-blue font-bold">RM {perfShareVal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>您持有绩效份数：</span>
                <span className="text-cyber-blue font-bold">2 Shares</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-white/5 text-cyber-blue font-bold">
                <span>预估收益：</span>
                <span>RM {myPerfReward.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Sub Pool 3: Creator Pool (2%) */}
          <div className="p-6 rounded-2xl bg-surface-200/80 border border-cyber-violet/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-xs text-white">3. 创作者联赛池 (2%)</span>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-cyber-violet text-white font-black">
                20% 权重
              </span>
            </div>

            <div className="font-mono font-black text-2xl text-white">
              RM {creatorPool.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>

            <div className="space-y-1.5 pt-2 border-t border-white/5 font-mono text-xs text-metal-300">
              <div className="flex justify-between">
                <span>主办联赛：</span>
                <span className="text-white font-bold">R.ON CLUB</span>
              </div>
              <div className="flex justify-between">
                <span>联赛活跃成员：</span>
                <span className="text-lime-400 font-bold">1,420 人</span>
              </div>
              <div className="flex justify-between">
                <span>创作者份数：</span>
                <span className="text-cyber-violet font-bold">1 Share</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-white/5 text-cyber-violet font-bold">
                <span>预估收益：</span>
                <span>RM {myCreatorReward.toFixed(2)}</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Transparent Formula Breakdown Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Calculator className="w-4 h-4 text-lime-400" />
            <h3 className="font-display font-black text-base text-white">
              透明数学分红结算公式 (TRANSPARENT CALCULATION)
            </h3>
          </div>
          <span className="text-lime-400">公开透明零黑箱</span>
        </div>

        <div className="p-4 rounded-2xl bg-surface-200/80 border border-white/5 space-y-2 text-metal-200">
          <div className="text-white font-bold">社群分红池计算公式：</div>
          <p className="text-lime-400 text-sm">
            单份收益 (Share Value) = 总社群池金额 (RM 192,140) ÷ 全网合格加权总份数 (2,436) = RM 78.88 / 份
          </p>
          <p className="text-white">
            您的预估收益 = 8 Shares × RM 78.88 = <strong className="text-lime-400">RM 631.04</strong>
          </p>
        </div>

        <div className="text-[11px] text-metal-400">
          * 提示：当月分红收益将于次月 1 日 00:00 经智能合约自动核验并直接清算入账至您的奖金钱包中。
        </div>
      </div>

      {/* Historical Settled Archive Table */}
      <div className="bg-surface-100/90 border border-white/15 rounded-3xl overflow-hidden backdrop-blur-xl shadow-glass-card p-6 space-y-4">
        <h3 className="font-display font-black text-lg text-white">历史已结算分红档案 (SETTLED ARCHIVE)</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead className="bg-surface-200/60 text-metal-400 text-[10px] uppercase border-b border-white/5">
              <tr>
                <th className="py-3 px-4">结算月份</th>
                <th className="py-3 px-4">全网分红池规模</th>
                <th className="py-3 px-4">当时持有份数</th>
                <th className="py-3 px-4">单份结算价值</th>
                <th className="py-3 px-4">实际清算收益</th>
                <th className="py-3 px-4 text-right">状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-metal-200">
              {MOCK_POOL_HISTORY.map((hist) => (
                <tr key={hist.month} className="hover:bg-white/5">
                  <td className="py-3.5 px-4 font-bold text-white">{hist.month}</td>
                  <td className="py-3.5 px-4 font-bold text-white">RM {hist.poolSize.toLocaleString()}</td>
                  <td className="py-3.5 px-4 text-lime-400">{hist.yourShares} 份 (大师)</td>
                  <td className="py-3.5 px-4 text-cyber-blue">RM {hist.shareValue.toFixed(2)}</td>
                  <td className="py-3.5 px-4 font-black text-lime-400">RM {hist.rewardEarned.toFixed(2)}</td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-lime-400/20 text-lime-400">
                      已清算到账 ✓
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
