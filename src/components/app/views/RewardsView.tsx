import React from 'react';
import { useDemo } from '../../../context/DemoContext';
import { Gift, Coins, Trophy, Award, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';

export const RewardsView: React.FC = () => {
  const { user } = useDemo();

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="pb-4 border-b border-white/10 space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono text-lime-400 font-bold">
          <Gift className="w-4 h-4" />
          <span>REWARDS CENTER // 综合收益中心 (USDT)</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
          USDT 收益资产与多维奖励总览
        </h2>
        <p className="text-xs font-mono text-metal-300">
          涵盖直推佣金、全网分红、F1 赛事奖金、通行证经验 (XP) 与闭环游戏积分
        </p>
      </div>

      {/* 2 Big Top Cards: Available Balance vs Pending */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border-2 border-lime-400/50 backdrop-blur-xl shadow-glow-lime/20 space-y-3">
          <span className="text-[10px] font-mono text-lime-400 font-bold uppercase tracking-widest block">
            可支配奖励余额 (AVAILABLE USDT)
          </span>
          <div className="font-mono font-black text-4xl sm:text-5xl text-white">
            {user.walletBalanceUSDT.toFixed(2)} <span className="text-2xl text-lime-400">USDT</span>
          </div>
          <p className="text-xs font-mono text-metal-300">
            可用于续订 PRO 会员、赞助私域联赛或提领至合规地址
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-cyber-blue/30 backdrop-blur-xl shadow-glass-card space-y-3">
          <span className="text-[10px] font-mono text-cyber-blue font-bold uppercase tracking-widest block">
            8月周期预估结算中 (PENDING ESTIMATED)
          </span>
          <div className="font-mono font-black text-4xl sm:text-5xl text-cyber-blue">
            {user.monthlyRewardsUSDT.toFixed(2)} <span className="text-2xl text-cyber-blue">USDT</span>
          </div>
          <p className="text-xs font-mono text-metal-300">
            将于 8月31日 24:00 智能合约清算完毕后自动结算入账
          </p>
        </div>

      </div>

      {/* 4 Classification Reward Streams */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
        
        <div className="p-5 rounded-2xl bg-surface-100 border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-metal-400">会员直推佣金</span>
            <TrendingUp className="w-4 h-4 text-lime-400" />
          </div>
          <div className="font-black text-xl text-white">1,140.20 USDT</div>
          <span className="text-[10px] text-lime-400 block">50 位直推成员 20% 分润</span>
        </div>

        <div className="p-5 rounded-2xl bg-surface-100 border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-metal-400">全网加权分红池</span>
            <Coins className="w-4 h-4 text-lime-400" />
          </div>
          <div className="font-black text-xl text-lime-400">1,162.00 USDT</div>
          <span className="text-[10px] text-metal-400 block">持 11 份总 Shares 预估</span>
        </div>

        <div className="p-5 rounded-2xl bg-surface-100 border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-metal-400">F1 品牌赛事专项奖</span>
            <Trophy className="w-4 h-4 text-cyber-amber" />
          </div>
          <div className="font-black text-xl text-cyber-amber">200.00 USDT</div>
          <span className="text-[10px] text-metal-400 block">F1 蒙扎官方预测周 4 强</span>
        </div>

        <div className="p-5 rounded-2xl bg-surface-100 border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-metal-400">闭环游戏积分 (OC)</span>
            <Sparkles className="w-4 h-4 text-cyber-violet" />
          </div>
          <div className="font-black text-xl text-cyber-violet">3,840 OC</div>
          <span className="text-[10px] text-metal-400 block">用于私域联赛与功能解锁</span>
        </div>

      </div>

    </div>
  );
};
