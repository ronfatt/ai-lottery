import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDemo } from '../../../context/DemoContext';
import { 
  Trophy, 
  Users, 
  TrendingUp, 
  Coins, 
  Target, 
  Lock, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Sparkles, 
  Share2, 
  Gift, 
  Award,
  Clock,
  CheckCircle2,
  ChevronRight,
  Flag,
  Gauge
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

export const DashboardView: React.FC = () => {
  const { user, globalPoolAmountUSDT, poolGrowthTodayUSDT, navigate, addNewPrediction } = useDemo();
  const [selectedNums, setSelectedNums] = useState<number[]>([7, 18, 23, 36, 41]);
  const [isLocking, setIsLocking] = useState(false);
  const [lockedSuccess, setLockedSuccess] = useState(false);

  const handleToggleNumber = (n: number) => {
    if (lockedSuccess) return;
    if (selectedNums.includes(n)) {
      setSelectedNums(selectedNums.filter((item) => item !== n));
    } else {
      if (selectedNums.length < 5) {
        setSelectedNums([...selectedNums, n].sort((a, b) => a - b));
      }
    }
  };

  const handleLockInDashboard = async () => {
    if (selectedNums.length !== 5 || isLocking) return;
    setIsLocking(true);
    setTimeout(async () => {
      await addNewPrediction(selectedNums, '数字猎手 (5码)');
      setIsLocking(false);
      setLockedSuccess(true);
    }, 1200);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-lime-400 font-bold uppercase tracking-wider">
              ORACLE PROTOCOL DASHBOARD // 会员控制台
            </span>
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
            下午好，{user.name}。
          </h2>
          <p className="text-xs sm:text-sm font-mono text-metal-300">
            数字预测网络正在稳步增长 · 结算单位：USDT (纯净无代币合规体系)
          </p>
        </div>

        {/* Quick Referral Invite */}
        <button
          onClick={() => navigate('/app/referral')}
          className="px-4 py-2.5 rounded-xl bg-surface-200 hover:bg-surface-300 text-white border border-white/10 font-mono text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
        >
          <Share2 className="w-4 h-4 text-lime-400" />
          <span>邀请裂变: oracle49.com/invite/RON49</span>
        </button>
      </div>

      {/* 4 Top KPI Cards (in USDT) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* KPI 1: Prediction IQ */}
        <div 
          onClick={() => navigate('/app/iq')}
          className="p-5 rounded-2xl bg-surface-100/90 border border-white/10 hover:border-lime-400/40 transition-all cursor-pointer shadow-glass-card flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-metal-400 uppercase tracking-wider">
              综合预测智商 (PREDICTION IQ)
            </span>
            <Trophy className="w-4 h-4 text-lime-400" />
          </div>
          <div className="my-3">
            <div className="font-mono font-black text-3xl sm:text-4xl text-lime-400 text-glow-lime">
              {user.predictionIQ}
            </div>
            <span className="text-xs font-mono text-metal-300">位列全球前 4.8% · F1 IQ: {user.f1IQ}</span>
          </div>
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
            <span className="text-lime-400 font-bold">▲ 本周提升 +14 IQ</span>
            <span className="text-metal-400">档案 →</span>
          </div>
        </div>

        {/* KPI 2: Global Rank */}
        <div 
          onClick={() => navigate('/app/leaderboard')}
          className="p-5 rounded-2xl bg-surface-100/90 border border-white/10 hover:border-cyber-blue/40 transition-all cursor-pointer shadow-glass-card flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-metal-400 uppercase tracking-wider">
              全球预测天梯名次
            </span>
            <Award className="w-4 h-4 text-cyber-blue" />
          </div>
          <div className="my-3">
            <div className="font-mono font-black text-3xl sm:text-4xl text-white">
              #{user.globalRank}
            </div>
            <span className="text-xs font-mono text-metal-300">总计 38,240 位玩家中排名</span>
          </div>
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
            <span className="text-cyber-blue font-bold">↑ 跃升 {user.rankDelta} 名</span>
            <span className="text-metal-400">天梯 →</span>
          </div>
        </div>

        {/* KPI 3: Active Community */}
        <div 
          onClick={() => navigate('/app/network')}
          className="p-5 rounded-2xl bg-surface-100/90 border border-white/10 hover:border-cyber-violet/40 transition-all cursor-pointer shadow-glass-card flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-metal-400 uppercase tracking-wider">
              活跃社群组织人数
            </span>
            <Users className="w-4 h-4 text-cyber-violet" />
          </div>
          <div className="my-3">
            <div className="font-mono font-black text-3xl sm:text-4xl text-cyber-violet">
              {user.activeCommunity.toLocaleString()}
            </div>
            <span className="text-xs font-mono text-metal-300">直推 50 位 · 二级间推 178 位</span>
          </div>
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
            <span className="text-cyber-violet font-bold">▲ 月环比增速 +8.4%</span>
            <span className="text-metal-400">架构树 →</span>
          </div>
        </div>

        {/* KPI 4: Monthly Estimated Rewards in USDT */}
        <div 
          onClick={() => navigate('/app/rewards')}
          className="p-5 rounded-2xl bg-surface-100/90 border-2 border-lime-400/60 hover:border-lime-400 transition-all cursor-pointer shadow-glow-lime/20 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-lime-400 uppercase tracking-wider font-bold">
              本月预估总收益 (ESTIMATED)
            </span>
            <Coins className="w-4 h-4 text-lime-400" />
          </div>
          <div className="my-3">
            <div className="font-mono font-black text-3xl sm:text-4xl text-white">
              {user.monthlyRewardsUSDT.toFixed(2)} <span className="text-lg text-lime-400">USDT</span>
            </div>
            <span className="text-[10px] font-mono text-metal-300">直推 + 间推 + 8 份分红池</span>
          </div>
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
            <span className="text-lime-400 font-bold">▲ 增长 +12.8%</span>
            <span className="text-[10px] text-metal-400">(演示预估值)</span>
          </div>
        </div>

      </div>

      {/* Main Core Game vs Featured Game Grid (60% Main Number Prediction + 40% F1 Featured Event) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left 7 Cols: PRIMARY CORE GAME - NUMBER PREDICTION (60% Prominence) */}
        <div className="lg:col-span-7 bg-surface-100/95 border-2 border-lime-400/60 rounded-3xl p-6 sm:p-7 backdrop-blur-xl shadow-glass-card space-y-4 flex flex-col justify-between relative overflow-hidden">
          
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-black bg-lime-400 text-black uppercase">
                    🎯 MAIN CORE GAME // 核心基本盘
                  </span>
                </div>
                <h3 className="font-display font-black text-xl text-white mt-1">
                  01–49 数字预测 (NUMBER PREDICTION)
                </h3>
                <span className="text-[11px] font-mono text-lime-400 font-bold block">
                  公共数据参考：香港六合彩公开摇号 (HK Mark Six Public Draw Reference)
                </span>
              </div>

              <div className="px-3 py-1 rounded-xl bg-surface-200 border border-white/10 text-right font-mono">
                <span className="text-[9px] text-metal-400 block">开奖期数 #260822</span>
                <span className="text-xs font-bold text-lime-400">02 : 16 : 38</span>
              </div>
            </div>

            {/* 49 Numbers Interactive Picker */}
            <div className="mt-4">
              <span className="text-xs font-mono text-metal-300 block mb-2">
                挑选中意的 5 个号码锁定预测承诺（消耗 100 ⚡ 游戏能量，零现金对赌）：
              </span>
              <div className="grid grid-cols-7 gap-1.5 p-3 rounded-2xl bg-surface-50 border border-white/5">
                {Array.from({ length: 49 }, (_, i) => i + 1).map((num) => {
                  const isSelected = selectedNums.includes(num);
                  const numStr = num < 10 ? `0${num}` : `${num}`;

                  return (
                    <button
                      key={num}
                      disabled={lockedSuccess}
                      onClick={() => handleToggleNumber(num)}
                      className={`aspect-square rounded-xl flex items-center justify-center font-mono font-bold text-xs sm:text-sm transition-all ${
                        isSelected
                          ? 'bg-lime-400 text-black border border-lime-300 shadow-glow-lime scale-105 font-black z-10'
                          : 'bg-surface-200 text-metal-300 hover:bg-surface-300 hover:text-white border border-white/5'
                      }`}
                    >
                      {numStr}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <div className="font-mono text-xs">
              <span className="text-metal-400">已选组合：</span>
              <span className="text-lime-400 font-bold ml-1">
                [{selectedNums.map((n) => (n < 10 ? `0${n}` : n)).join(' · ')}]
              </span>
              <span className="text-[10px] text-metal-400 block">
                胜场奖励：+600 XP · Prediction IQ +14
              </span>
            </div>

            <button
              onClick={handleLockInDashboard}
              disabled={selectedNums.length !== 5 || isLocking || lockedSuccess}
              className={`w-full sm:w-auto px-6 py-3 rounded-xl font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                lockedSuccess
                  ? 'bg-lime-400/20 text-lime-400 border border-lime-400/40 cursor-default'
                  : selectedNums.length === 5
                  ? 'bg-lime-400 hover:bg-lime-300 text-black shadow-glow-lime'
                  : 'bg-surface-300 text-metal-400 cursor-not-allowed'
              }`}
            >
              {lockedSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>预测已成功盖戳上链 ✓</span>
                </>
              ) : isLocking ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <span>生成哈希时间戳中...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>锁定数字预测 (LOCK)</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Right 5 Cols: FEATURED EVENT - F1 MALAYSIA 2026 SEPANG (With Graphic Banner) */}
        <div className="lg:col-span-5 bg-surface-100/95 border-2 border-cyber-amber/60 rounded-3xl overflow-hidden backdrop-blur-xl shadow-[0_0_50px_rgba(245,158,11,0.2)] flex flex-col justify-between group">
          
          {/* F1 Visual Thumbnail Header */}
          <div className="h-40 w-full relative overflow-hidden bg-surface-200">
            <img 
              src="/images/f1_sepang_banner.jpg" 
              alt="F1 Sepang 2026" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/60 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-black bg-cyber-amber text-black uppercase flex items-center gap-1 shadow-md">
                <Flag className="w-3 h-3" />
                <span>⭐ FEATURED EVENT</span>
              </span>
            </div>
            <div className="absolute bottom-2 right-3 font-mono text-[10px] text-cyber-amber font-bold bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-cyber-amber/30">
              50,000 USDT 奖池
            </div>
          </div>

          <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                2026 F1 马来西亚雪邦大奖赛
              </h3>
              <p className="text-xs font-mono text-metal-300">
                SEPANG MALAYSIA · 2026年10月02–04日 正赛
              </p>

              <div className="p-3 rounded-xl bg-surface-200/80 border border-white/5 font-mono text-xs space-y-1 text-metal-300">
                <div className="flex justify-between">
                  <span>分站冠军首选：</span>
                  <span className="text-cyber-amber font-bold">维斯塔潘 (48% 支持率)</span>
                </div>
                <div className="flex justify-between">
                  <span>您的 F1 专属智商：</span>
                  <span className="text-white font-bold">{user.f1IQ} 分 (全马 #{user.f1RankMalaysia})</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate('/app/events/f1-malaysia-2026')}
              className="w-full py-3.5 rounded-xl bg-cyber-amber hover:bg-amber-400 text-black font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(245,158,11,0.35)]"
            >
              <span>进入雪邦 SUPER 10 预测</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* Live Global Pool Banner (in USDT) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-lime-400/40 backdrop-blur-2xl shadow-glass-card space-y-6">
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-6 border-b border-white/10 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-lime-400">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
              <span className="font-bold uppercase tracking-widest">LIVE ORACLE GLOBAL POOL // 实时全球分红池 (USDT)</span>
              <span className="px-2 py-0.5 rounded text-[9px] bg-lime-400/20 text-lime-400 border border-lime-400/30">
                本月累积 +18.4%
              </span>
            </div>
            <div className="font-mono font-black text-3xl sm:text-5xl text-white tracking-tight">
              {globalPoolAmountUSDT.toLocaleString('en-US', { minimumFractionDigits: 2 })} <span className="text-2xl text-lime-400">USDT</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <button
              onClick={() => navigate('/app/pool')}
              className="px-4 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-bold uppercase transition-all shadow-glow-lime flex items-center gap-1.5"
            >
              <span>查看 3 大分红池公式与历史</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 5-Column Pool Metrics Breakdown */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 font-mono text-xs">
          <div className="p-3.5 rounded-xl bg-surface-300/60 border border-white/5">
            <span className="text-metal-400 text-[10px] block uppercase">合格分红会员</span>
            <span className="text-white font-bold text-sm">1,284 位</span>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-300/60 border border-white/5">
            <span className="text-metal-400 text-[10px] block uppercase">全网总加权份数</span>
            <span className="text-white font-bold text-sm">4,871 Shares</span>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-300/60 border border-white/5">
            <span className="text-metal-400 text-[10px] block uppercase">单份预估价值 (1 Share)</span>
            <span className="text-cyber-blue font-bold text-sm">78.89 USDT</span>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-300/60 border border-white/5">
            <span className="text-metal-400 text-[10px] block uppercase">您持有的分红份数</span>
            <span className="text-lime-400 font-bold text-sm">8 Shares (大师级)</span>
          </div>

          <div className="p-3.5 rounded-xl bg-lime-400/10 border border-lime-400/30 col-span-2 sm:col-span-1">
            <span className="text-lime-400 text-[10px] block uppercase font-bold">您的预估分红收益</span>
            <span className="text-lime-400 font-black text-base">631.12 USDT</span>
          </div>
        </div>

      </div>

      {/* Income Breakdown Overview in USDT */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-6">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-white/10 gap-4">
          <div>
            <span className="text-[10px] font-mono text-lime-400 font-bold uppercase tracking-wider block">
              MONTHLY REWARD OVERVIEW // 月度收益概览 (USDT)
            </span>
            <h3 className="font-display font-black text-xl text-white">
              本月预估总收益：{user.monthlyRewardsUSDT.toFixed(2)} USDT
            </h3>
          </div>

          <span className="px-3 py-1 rounded-xl bg-surface-200 text-metal-300 font-mono text-xs">
            演示预估值 (Demo / Estimated)
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-xs">
          <div className="p-3.5 rounded-2xl bg-surface-200/90 border border-white/5">
            <span className="text-metal-400 text-[10px] block">直推会员分润 (20%)</span>
            <span className="text-white font-bold text-base block mt-1">1,140.20 USDT</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-surface-200/90 border border-white/5">
            <span className="text-metal-400 text-[10px] block">二级辅导奖 (5%)</span>
            <span className="text-white font-bold text-base block mt-1">340.40 USDT</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-surface-200/90 border border-white/5">
            <span className="text-metal-400 text-[10px] block">全球社群分红池</span>
            <span className="text-lime-400 font-bold text-base block mt-1">631.12 USDT</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-surface-200/90 border border-white/5">
            <span className="text-metal-400 text-[10px] block">顶尖绩效卓越池</span>
            <span className="text-cyber-blue font-bold text-base block mt-1">388.48 USDT</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-surface-200/90 border border-white/5">
            <span className="text-metal-400 text-[10px] block">创作者联赛池</span>
            <span className="text-cyber-violet font-bold text-base block mt-1">142.40 USDT</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-surface-200/90 border border-white/5">
            <span className="text-metal-400 text-[10px] block">品牌赛事专项奖</span>
            <span className="text-cyber-amber font-bold text-base block mt-1">200.00 USDT</span>
          </div>
        </div>

      </div>

    </div>
  );
};
