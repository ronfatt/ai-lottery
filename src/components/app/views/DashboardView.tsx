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
  ChevronRight
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';

export const DashboardView: React.FC = () => {
  const { user, globalPoolAmount, poolGrowthToday, navigate, addNewPrediction } = useDemo();
  const [selectedNums, setSelectedNums] = useState<number[]>([7, 18, 23, 36, 41]);
  const [isLocking, setIsLocking] = useState(false);
  const [lockedSuccess, setLockedSuccess] = useState(false);
  const [timeRange, setTimeRange] = useState<'7D' | '30D' | '90D' | '1Y'>('30D');

  // Chart data for monthly growth
  const growthData = [
    { month: '1月', users: 180, revenue: 3800, rewards: 1200 },
    { month: '2月', users: 340, revenue: 7200, rewards: 2400 },
    { month: '3月', users: 510, revenue: 11400, rewards: 3900 },
    { month: '4月', users: 720, revenue: 16800, rewards: 5800 },
    { month: '5月', users: 890, revenue: 21500, rewards: 7400 },
    { month: '6月', users: 1040, revenue: 26900, rewards: 9200 },
    { month: '7月', users: 1160, revenue: 31200, rewards: 11400 },
    { month: '8月 (今)', users: 1248, revenue: 34800, rewards: 13800 },
  ];

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
            您的预测生态与社群正在稳步增长 (Your prediction network is growing)。
          </p>
        </div>

        {/* Quick Share Link */}
        <button
          onClick={() => navigate('/app/referral')}
          className="px-4 py-2.5 rounded-xl bg-surface-200 hover:bg-surface-300 text-white border border-white/10 font-mono text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
        >
          <Share2 className="w-4 h-4 text-lime-400" />
          <span>邀请裂变链接: oracle49.com/invite/RON49</span>
        </button>
      </div>

      {/* 4 Top KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* KPI 1: Prediction IQ */}
        <div 
          onClick={() => navigate('/app/iq')}
          className="p-5 rounded-2xl bg-surface-100/90 border border-white/10 hover:border-lime-400/40 transition-all cursor-pointer shadow-glass-card flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-metal-400 uppercase tracking-wider">
              预测智商 (PREDICTION IQ)
            </span>
            <Trophy className="w-4 h-4 text-lime-400" />
          </div>
          <div className="my-3">
            <div className="font-mono font-black text-3xl sm:text-4xl text-lime-400 text-glow-lime">
              {user.predictionIQ}
            </div>
            <span className="text-xs font-mono text-metal-300">位列全球前 4.8% 顶尖分位</span>
          </div>
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
            <span className="text-lime-400">▲ 本周提升 +14 IQ</span>
            <span className="text-metal-400">详情 →</span>
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
            <span className="text-xs font-mono text-metal-300">总玩家 38,240 人中排位</span>
          </div>
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
            <span className="text-cyber-blue font-bold">↑ 跃升 {user.rankDelta} 名</span>
            <span className="text-metal-400">榜单 →</span>
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
            <span className="text-xs font-mono text-metal-300">直推 50 人 · 间推 178 人</span>
          </div>
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
            <span className="text-cyber-violet font-bold">▲ 月环比增速 +8.4%</span>
            <span className="text-metal-400">架构树 →</span>
          </div>
        </div>

        {/* KPI 4: Monthly Estimated Rewards */}
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
              RM {user.monthlyRewards.toFixed(2)}
            </div>
            <span className="text-[10px] font-mono text-metal-300">直推 + 间推 + 8 份分红池</span>
          </div>
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
            <span className="text-lime-400 font-bold">▲ 增长 +12.8%</span>
            <span className="text-[10px] text-metal-400">(演示预估值)</span>
          </div>
        </div>

      </div>

      {/* Hero Strip 2: Live Global Oracle Pool Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-surface-100 via-surface-200 to-surface-100 border border-lime-400/40 backdrop-blur-2xl shadow-glass-card space-y-6">
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-6 border-b border-white/10 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-lime-400">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
              <span className="font-bold uppercase tracking-widest">LIVE ORACLE GLOBAL POOL // 实时全球分红池</span>
              <span className="px-2 py-0.5 rounded text-[9px] bg-lime-400/20 text-lime-400 border border-lime-400/30">
                本月累积 +18.4%
              </span>
            </div>
            <div className="font-mono font-black text-3xl sm:text-5xl text-white tracking-tight">
              RM {globalPoolAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <button
              onClick={() => navigate('/app/pool')}
              className="px-4 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-bold uppercase transition-all shadow-glow-lime flex items-center gap-1.5"
            >
              <span>查看分红公式与历史</span>
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
            <span className="text-cyber-blue font-bold text-sm">RM 78.89</span>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-300/60 border border-white/5">
            <span className="text-metal-400 text-[10px] block uppercase">您持有的分红份数</span>
            <span className="text-lime-400 font-bold text-sm">8 Shares (大师级)</span>
          </div>

          <div className="p-3.5 rounded-xl bg-lime-400/10 border border-lime-400/30 col-span-2 sm:col-span-1">
            <span className="text-lime-400 text-[10px] block uppercase font-bold">您的预估分红收益</span>
            <span className="text-lime-400 font-black text-base">RM 631.12</span>
          </div>
        </div>

      </div>

      {/* Main Grid: Prediction Locking Card + Income Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left 7 Cols: Quick Number Prediction Card */}
        <div className="lg:col-span-7 bg-surface-100/90 border border-white/15 rounded-3xl p-6 backdrop-blur-xl shadow-glass-card space-y-4">
          
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-lime-400" />
                <h3 className="font-display font-black text-lg text-white">下一期公开数字预测 (NEXT ROUND)</h3>
              </div>
              <p className="text-xs font-mono text-metal-300">
                期数 #260822 · 挑选中意的 5 个数字完成链上时间戳锁定
              </p>
            </div>

            <div className="px-3 py-1 rounded-xl bg-surface-200 border border-white/10 text-right font-mono">
              <span className="text-[9px] text-metal-400 block">封存倒计时</span>
              <span className="text-xs font-bold text-lime-400">02 : 16 : 38</span>
            </div>
          </div>

          {/* 49 Numbers Interactive Picker */}
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

          {/* Selected Status & Lock CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-mono text-xs">
              <span className="text-metal-400">已选号码：</span>
              <span className="text-lime-400 font-bold ml-1">
                [{selectedNums.map((n) => (n < 10 ? `0${n}` : n)).join(' · ')}]
              </span>
              <span className="text-[11px] text-metal-400 block mt-0.5">
                消耗：0 现金 / 100 ⚡ 预测能量 (胜场可获 +600 XP)
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
                  <span>锁定预测 (LOCK PREDICTION)</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Right 5 Cols: Rewards Breakdown */}
        <div className="lg:col-span-5 bg-surface-100/90 border border-white/15 rounded-3xl p-6 backdrop-blur-xl shadow-glass-card space-y-4">
          
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <h3 className="font-display font-black text-lg text-white">本月收益构成 (REWARDS)</h3>
              <p className="text-xs font-mono text-metal-300">总计预估：RM 2,842.60</p>
            </div>
            <span className="text-[10px] font-mono text-lime-400 bg-lime-400/10 px-2 py-0.5 rounded border border-lime-400/30">
              8月结算周期
            </span>
          </div>

          <div className="space-y-2.5 font-mono text-xs">
            <div className="p-2.5 rounded-xl bg-surface-200/90 border border-white/5 flex items-center justify-between">
              <span className="text-metal-300">1. 一级直推会员佣金 (20%):</span>
              <span className="font-bold text-white">RM 1,140.20</span>
            </div>

            <div className="p-2.5 rounded-xl bg-surface-200/90 border border-white/5 flex items-center justify-between">
              <span className="text-metal-300">2. 二级社群辅导奖 (5%):</span>
              <span className="font-bold text-white">RM 340.40</span>
            </div>

            <div className="p-2.5 rounded-xl bg-surface-200/90 border border-white/5 flex items-center justify-between">
              <span className="text-metal-300">3. 全球社群分红池 (8 Shares):</span>
              <span className="font-bold text-lime-400">RM 631.12</span>
            </div>

            <div className="p-2.5 rounded-xl bg-surface-200/90 border border-white/5 flex items-center justify-between">
              <span className="text-metal-300">4. 顶尖绩效卓越池 (2 Shares):</span>
              <span className="font-bold text-cyber-blue">RM 388.48</span>
            </div>

            <div className="p-2.5 rounded-xl bg-surface-200/90 border border-white/5 flex items-center justify-between">
              <span className="text-metal-300">5. 创作者联赛池 (1 Share):</span>
              <span className="font-bold text-cyber-violet">RM 142.40</span>
            </div>

            <div className="p-2.5 rounded-xl bg-surface-200/90 border border-white/5 flex items-center justify-between">
              <span className="text-metal-300">6. F1 品牌赞助竞猜奖金:</span>
              <span className="font-bold text-cyber-amber">RM 200.00</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-surface-50 border border-white/5 text-[10px] font-mono text-metal-400">
            * 提示：所有收益基于真实活跃付费会员订阅分润及合格分红池加权，非固定保底收益。
          </div>

        </div>

      </div>

      {/* Growth Analytics Chart Section */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-6">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-white/10 gap-4">
          <div>
            <span className="text-[10px] font-mono text-lime-400 font-bold uppercase tracking-wider block">
              MONTHLY GROWTH METRICS // 月度增长趋势
            </span>
            <h3 className="font-display font-black text-xl text-white">
              社群规模与收益贡献曲线
            </h3>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface-200 border border-white/10 font-mono text-xs">
            {(['7D', '30D', '90D', '1Y'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setTimeRange(r)}
                className={`px-3 py-1 rounded-lg transition-all font-bold ${
                  timeRange === r ? 'bg-lime-400 text-black shadow-sm' : 'text-metal-400 hover:text-white'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Recharts Area Chart */}
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={growthData}>
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00FF66" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#00FF66" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#00E5FF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="#8B949E" fontSize={11} tickLine={false} />
              <YAxis stroke="#8B949E" fontSize={11} tickLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0D1117', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '11px', fontFamily: 'monospace' }}
              />
              <Area type="monotone" dataKey="users" name="活跃成员" stroke="#00FF66" fillOpacity={1} fill="url(#colorUsers)" strokeWidth={2} />
              <Area type="monotone" dataKey="rewards" name="分润收益 (RM)" stroke="#00E5FF" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* Quick Action Navigation Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 font-mono text-xs">
        <button
          onClick={() => navigate('/app/predict')}
          className="p-4 rounded-2xl bg-surface-100 hover:bg-surface-200 border border-white/10 hover:border-lime-400/40 text-left transition-all group"
        >
          <Target className="w-5 h-5 text-lime-400 mb-2 group-hover:scale-110 transition-transform" />
          <span className="font-bold text-white block">发起新预测</span>
          <span className="text-[10px] text-metal-400">7 大模式可玩</span>
        </button>

        <button
          onClick={() => navigate('/app/referral')}
          className="p-4 rounded-2xl bg-surface-100 hover:bg-surface-200 border border-white/10 hover:border-lime-400/40 text-left transition-all group"
        >
          <Share2 className="w-5 h-5 text-cyber-blue mb-2 group-hover:scale-110 transition-transform" />
          <span className="font-bold text-white block">邀请好友</span>
          <span className="text-[10px] text-metal-400">20% 直推佣金</span>
        </button>

        <button
          onClick={() => navigate('/app/pool')}
          className="p-4 rounded-2xl bg-surface-100 hover:bg-surface-200 border border-white/10 hover:border-lime-400/40 text-left transition-all group"
        >
          <Coins className="w-5 h-5 text-lime-400 mb-2 group-hover:scale-110 transition-transform" />
          <span className="font-bold text-white block">查看全网分红</span>
          <span className="text-[10px] text-metal-400">RM 384k 奖池</span>
        </button>

        <button
          onClick={() => navigate('/app/ranking')}
          className="p-4 rounded-2xl bg-surface-100 hover:bg-surface-200 border border-white/10 hover:border-lime-400/40 text-left transition-all group"
        >
          <TrendingUp className="w-5 h-5 text-cyber-violet mb-2 group-hover:scale-110 transition-transform" />
          <span className="font-bold text-white block">会员等级晋级</span>
          <span className="text-[10px] text-metal-400">72% 晋升至尊</span>
        </button>

        <button
          onClick={() => navigate('/app/proof')}
          className="p-4 rounded-2xl bg-surface-100 hover:bg-surface-200 border border-white/10 hover:border-lime-400/40 text-left transition-all group col-span-2 sm:col-span-1"
        >
          <ShieldCheck className="w-5 h-5 text-metal-200 mb-2 group-hover:scale-110 transition-transform" />
          <span className="font-bold text-white block">区块链浏览器</span>
          <span className="text-[10px] text-metal-400">查验默克尔证明</span>
        </button>
      </div>

    </div>
  );
};
