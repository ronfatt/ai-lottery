import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDemo } from '../../../context/DemoContext';
import { MOCK_HORSE_RUNNERS } from '../../../data/mockData';
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
  Flame,
  Wallet,
  ArrowUpRight,
  Activity,
  Calendar,
  Radio
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const DashboardView: React.FC = () => {
  const { 
    user, 
    globalPoolAmountUSDT, 
    poolGrowthTodayUSDT, 
    navigate, 
    addNewPrediction,
    addF1Prediction,
    addHorseRacingPrediction,
    showToast 
  } = useDemo();

  // Quick Prediction Station Active Tab
  const [stationTab, setStationTab] = useState<'NUMBER' | 'F1' | 'RACING'>('NUMBER');

  // Number Quick State
  const [quickNums, setQuickNums] = useState<number[]>([7, 18, 23, 36, 41]);
  const [isLockingNum, setIsLockingNum] = useState(false);
  const [numLocked, setNumLocked] = useState(false);

  // F1 Quick State
  const [quickDriver, setQuickDriver] = useState('维斯塔潘 (VERSTAPPEN)');
  const [isLockingF1, setIsLockingF1] = useState(false);
  const [f1Locked, setF1Locked] = useState(false);

  // Racing Quick State
  const [quickHorse, setQuickHorse] = useState(MOCK_HORSE_RUNNERS[0]); // #4 Golden Ace
  const [isLockingRacing, setIsLockingRacing] = useState(false);
  const [racingLocked, setRacingLocked] = useState(false);

  const handleToggleNum = (n: number) => {
    if (numLocked) return;
    if (quickNums.includes(n)) {
      setQuickNums(quickNums.filter((item) => item !== n));
    } else {
      if (quickNums.length < 5) {
        setQuickNums([...quickNums, n].sort((a, b) => a - b));
      }
    }
  };

  const handleQuickLockNumber = async () => {
    if (quickNums.length !== 5 || isLockingNum || numLocked) return;
    setIsLockingNum(true);
    setTimeout(async () => {
      await addNewPrediction(quickNums, '控制台极速推演 (5码)');
      setIsLockingNum(false);
      setNumLocked(true);
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
    }, 1000);
  };

  const handleQuickLockF1 = async () => {
    if (isLockingF1 || f1Locked) return;
    setIsLockingF1(true);
    setTimeout(async () => {
      await addF1Prediction(`冠军推演: ${quickDriver}`, '雪邦极速冠军推演');
      setIsLockingF1(false);
      setF1Locked(true);
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 }, colors: ['#F59E0B', '#00FF66'] });
    }, 1000);
  };

  const handleQuickLockRacing = async () => {
    if (isLockingRacing || racingLocked) return;
    setIsLockingRacing(true);
    setTimeout(async () => {
      await addHorseRacingPrediction(`第6场 独赢: #${quickHorse.number} ${quickHorse.name}`, '沙田极速独赢推演');
      setIsLockingRacing(false);
      setRacingLocked(true);
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 }, colors: ['#10B981', '#00FF66'] });
    }, 1000);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12 font-sans">
      
      {/* 1. Streamlined Top Greeting & Personal Status Bar */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0C111A] via-[#101726] to-[#0C111A] border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-glass-card">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="text-xs font-mono text-lime-400 font-bold uppercase tracking-wider">
              ORACLE COMMAND DASHBOARD
            </span>
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-lime-400/20 text-lime-400 font-bold border border-lime-400/30">
              👑 神谕大师 (8 份分红)
            </span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
            下午好，{user.name}。
          </h2>
          <p className="text-xs font-mono text-metal-300">
            全网可验证超级预测网络 · 香港六合彩数字基本盘 + F1 赛车 + 香港赛马日
          </p>
        </div>

        {/* Quick Action Chips */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <div className="px-3 py-1.5 rounded-xl bg-surface-200 border border-cyber-blue/30 text-metal-200">
            <Zap className="w-3.5 h-3.5 text-cyber-blue inline mr-1" />
            <span>能量：<strong className="text-white">{user.predictionEnergy}</strong> / {user.maxEnergy} ⚡</span>
          </div>

          <div className="px-3 py-1.5 rounded-xl bg-surface-200 border border-lime-400/30 text-metal-200">
            <Flame className="w-3.5 h-3.5 text-lime-400 inline mr-1" />
            <span>连胜：<strong className="text-lime-400">{user.streak}</strong> 场</span>
          </div>

          <button
            onClick={() => navigate('/app/referral')}
            className="px-3.5 py-1.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-bold uppercase flex items-center gap-1.5 transition-all shadow-glow-lime"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>邀请裂变 (20%)</span>
          </button>
        </div>
      </div>

      {/* 2. Compact 4 KPI Overview Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 font-mono text-xs">
        
        {/* KPI 1: Prediction IQ */}
        <div 
          onClick={() => navigate('/app/iq')}
          className="p-4 rounded-2xl bg-surface-100/90 border border-white/10 hover:border-lime-400/40 transition-all cursor-pointer shadow-glass-card"
        >
          <div className="flex justify-between text-metal-400 text-[10px] uppercase">
            <span>综合预测智商 (IQ)</span>
            <Trophy className="w-3.5 h-3.5 text-lime-400" />
          </div>
          <div className="my-2 font-black text-2xl sm:text-3xl text-lime-400 text-glow-lime">
            {user.predictionIQ}
          </div>
          <div className="text-[10px] text-metal-300 flex justify-between">
            <span>F1: {user.f1IQ} · 赛马: {user.racingIQ}</span>
            <span className="text-lime-400">▲ +14</span>
          </div>
        </div>

        {/* KPI 2: Global Rank */}
        <div 
          onClick={() => navigate('/app/leaderboard')}
          className="p-4 rounded-2xl bg-surface-100/90 border border-white/10 hover:border-cyber-blue/40 transition-all cursor-pointer shadow-glass-card"
        >
          <div className="flex justify-between text-metal-400 text-[10px] uppercase">
            <span>全球天梯总榜</span>
            <Award className="w-3.5 h-3.5 text-cyber-blue" />
          </div>
          <div className="my-2 font-black text-2xl sm:text-3xl text-white">
            #{user.globalRank}
          </div>
          <div className="text-[10px] text-metal-300 flex justify-between">
            <span>总计 38,240 位玩家</span>
            <span className="text-cyber-blue">↑ 跃升 {user.rankDelta}</span>
          </div>
        </div>

        {/* KPI 3: Active Community */}
        <div 
          onClick={() => navigate('/app/network')}
          className="p-4 rounded-2xl bg-surface-100/90 border border-white/10 hover:border-cyber-violet/40 transition-all cursor-pointer shadow-glass-card"
        >
          <div className="flex justify-between text-metal-400 text-[10px] uppercase">
            <span>活跃社群组织</span>
            <Users className="w-3.5 h-3.5 text-cyber-violet" />
          </div>
          <div className="my-2 font-black text-2xl sm:text-3xl text-cyber-violet">
            {user.activeCommunity.toLocaleString()}
          </div>
          <div className="text-[10px] text-metal-300 flex justify-between">
            <span>直推 50 · 间推 178 位</span>
            <span className="text-cyber-violet">留存 68%</span>
          </div>
        </div>

        {/* KPI 4: Monthly USDT Rewards */}
        <div 
          onClick={() => navigate('/app/rewards')}
          className="p-4 rounded-2xl bg-surface-100/90 border border-lime-400/50 hover:border-lime-400 transition-all cursor-pointer shadow-glow-lime/20"
        >
          <div className="flex justify-between text-lime-400 text-[10px] font-bold uppercase">
            <span>本月预估总收益</span>
            <Coins className="w-3.5 h-3.5 text-lime-400" />
          </div>
          <div className="my-2 font-black text-2xl sm:text-3xl text-white">
            {user.monthlyRewardsUSDT.toFixed(2)} <span className="text-xs text-lime-400 font-normal">USDT</span>
          </div>
          <div className="text-[10px] text-metal-300 flex justify-between">
            <span>直推 + 间推 + 8 份分红</span>
            <span className="text-lime-400">▲ +12.8%</span>
          </div>
        </div>

      </div>

      {/* 3. CORE ACTION CENTER: Interactive Quick Prediction Hub (Tabs: Number / F1 / Horse Racing) */}
      <div className="bg-surface-100/95 border-2 border-lime-400/50 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-glass-card space-y-6">
        
        {/* Hub Header & Mode Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-4 font-mono text-xs">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-xs text-lime-400 font-bold uppercase tracking-wider">
                QUICK PREDICTION STATION // 极速推演站
              </span>
              <span className="px-2 py-0.2 rounded text-[9px] bg-surface-200 text-metal-300">
                支持 3 大热门品类一键锁票
              </span>
            </div>
            <h3 className="font-display font-black text-xl text-white">
              今日重点预测赛事
            </h3>
          </div>

          {/* Tab Switcher */}
          <div className="flex bg-surface-200 p-1 rounded-2xl border border-white/10">
            <button
              onClick={() => setStationTab('NUMBER')}
              className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 ${
                stationTab === 'NUMBER' ? 'bg-lime-400 text-black shadow-glow-lime' : 'text-metal-300 hover:text-white'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>🎯 01–49 数字 (Core)</span>
            </button>

            <button
              onClick={() => setStationTab('F1')}
              className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 ${
                stationTab === 'F1' ? 'bg-cyber-amber text-black shadow-sm' : 'text-metal-300 hover:text-white'
              }`}
            >
              <Flag className="w-3.5 h-3.5" />
              <span>🏎️ F1 雪邦 2026</span>
            </button>

            <button
              onClick={() => setStationTab('RACING')}
              className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 ${
                stationTab === 'RACING' ? 'bg-emerald-500 text-black shadow-sm' : 'text-metal-300 hover:text-white'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>🏇 香港赛马日</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Number Prediction */}
        {stationTab === 'NUMBER' && (
          <div className="space-y-4 font-mono text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-metal-300">
              <span>从 01–49 挑选中意的 5 码（参考：<strong>香港六合彩公开摇号</strong> 6正码+1特别号）：</span>
              <span className="text-lime-400 font-bold">第 #260822 期 · 封存倒计时 02:16:38</span>
            </div>

            {/* Compact 49 Number Grid */}
            <div className="grid grid-cols-7 sm:grid-cols-14 gap-1.5 p-3 rounded-2xl bg-surface-50 border border-white/5">
              {Array.from({ length: 49 }, (_, i) => i + 1).map((num) => {
                const isSelected = quickNums.includes(num);
                const numStr = num < 10 ? `0${num}` : `${num}`;

                return (
                  <button
                    key={num}
                    disabled={numLocked}
                    onClick={() => handleToggleNum(num)}
                    className={`aspect-square rounded-lg flex items-center justify-center font-bold text-xs transition-all ${
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

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <span className="text-metal-400">已选 5 码：</span>
                <span className="text-lime-400 font-bold ml-1">
                  [{quickNums.map((n) => (n < 10 ? `0${n}` : n)).join(' · ')}]
                </span>
                <span className="text-[10px] text-metal-400 block">奖励：+600 XP · Prediction IQ +14 · 消耗 100 ⚡</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => navigate('/app/predict')}
                  className="px-4 py-2.5 rounded-xl bg-surface-200 text-metal-200 hover:text-white border border-white/10"
                >
                  进入 8合1 SUPER CALL 专页 →
                </button>

                <button
                  onClick={handleQuickLockNumber}
                  disabled={quickNums.length !== 5 || isLockingNum || numLocked}
                  className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-xl font-bold uppercase transition-all flex items-center justify-center gap-1.5 ${
                    numLocked
                      ? 'bg-lime-400/20 text-lime-400 border border-lime-400/40'
                      : quickNums.length === 5
                      ? 'bg-lime-400 hover:bg-lime-300 text-black shadow-glow-lime'
                      : 'bg-surface-300 text-metal-400 cursor-not-allowed'
                  }`}
                >
                  {numLocked ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>已封存上链 ✓</span>
                    </>
                  ) : isLockingNum ? (
                    <span>封存中...</span>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>极速锁定</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: F1 Motorsport Quick Card */}
        {stationTab === 'F1' && (
          <div className="space-y-4 font-mono text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-metal-300">
              <span>2026 F1 马来西亚雪邦大奖赛 · 遥测正赛冠军首选推演：</span>
              <span className="text-cyber-amber font-bold">50,000 USDT 赞助奖池 · 10月04日 正赛</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { name: '维斯塔潘 (VERSTAPPEN)', team: '红牛车队 #01', pick: '48% 支持率' },
                { name: '诺里斯 (NORRIS)', team: '迈凯伦 #04', pick: '32% 支持率' },
                { name: '勒克莱尔 (LECLERC)', team: '法拉利 #16', pick: '14% 支持率' },
                { name: '拉塞尔 (RUSSELL)', team: '梅赛德斯 #63', pick: '6% 支持率' },
              ].map((d) => (
                <button
                  key={d.name}
                  disabled={f1Locked}
                  onClick={() => setQuickDriver(d.name)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    quickDriver === d.name
                      ? 'bg-cyber-amber text-black font-black border-cyber-amber shadow-sm'
                      : 'bg-surface-200 text-metal-200 border-white/5 hover:border-white/20'
                  }`}
                >
                  <span className="text-xs truncate block">{d.name.split(' ')[0]}</span>
                  <span className={`text-[10px] block ${quickDriver === d.name ? 'text-black/80' : 'text-metal-400'}`}>{d.team}</span>
                  <span className={`text-[9px] block mt-1 font-bold ${quickDriver === d.name ? 'text-black' : 'text-cyber-amber'}`}>{d.pick}</span>
                </button>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <span className="text-metal-400">当前选定冠军：</span>
                <span className="text-cyber-amber font-bold ml-1">{quickDriver}</span>
                <span className="text-[10px] text-metal-400 block">奖励：+200 XP · F1 IQ +10 · 消耗 150 ⚡</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => navigate('/app/events/f1-malaysia-2026')}
                  className="px-4 py-2.5 rounded-xl bg-surface-200 text-metal-200 hover:text-white border border-white/10"
                >
                  完整雪邦 SUPER 10 遥测卡 →
                </button>

                <button
                  onClick={handleQuickLockF1}
                  disabled={isLockingF1 || f1Locked}
                  className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-xl font-bold uppercase transition-all flex items-center justify-center gap-1.5 ${
                    f1Locked
                      ? 'bg-cyber-amber/20 text-cyber-amber border border-cyber-amber/40'
                      : 'bg-cyber-amber hover:bg-amber-400 text-black shadow-sm'
                  }`}
                >
                  {f1Locked ? <span>已锁定 F1 冠军 ✓</span> : <span>锁定 F1 预测</span>}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Horse Racing Quick Card */}
        {stationTab === 'RACING' && (
          <div className="space-y-4 font-mono text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-metal-300">
              <span>香港沙田赛马日 · 第 6 场 1600米 独赢头马推演：</span>
              <span className="text-emerald-400 font-bold">封存倒计时 12:48 · 8 匹参赛马</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {MOCK_HORSE_RUNNERS.slice(0, 4).map((h) => (
                <button
                  key={h.number}
                  disabled={racingLocked}
                  onClick={() => setQuickHorse(h)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    quickHorse.number === h.number
                      ? 'bg-emerald-500 text-black font-black border-emerald-500 shadow-sm'
                      : 'bg-surface-200 text-metal-200 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs truncate block">#{h.number} {h.name.split(' ')[0]}</span>
                    <span className="text-[9px] opacity-80">{h.barrier}档</span>
                  </div>
                  <span className={`text-[10px] block ${quickHorse.number === h.number ? 'text-black/80' : 'text-metal-400'}`}>骑师: {h.jockey.split(' ')[0]}</span>
                  <span className={`text-[9px] block mt-1 font-bold ${quickHorse.number === h.number ? 'text-black' : 'text-emerald-400'}`}>{h.communityPickRate}% 支持</span>
                </button>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <span className="text-metal-400">当前选定独赢：</span>
                <span className="text-emerald-400 font-bold ml-1">#{quickHorse.number} {quickHorse.name}</span>
                <span className="text-[10px] text-metal-400 block">奖励：+350 XP · Racing IQ +12 · 消耗 120 ⚡</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => navigate('/app/events/hk-racing')}
                  className="px-4 py-2.5 rounded-xl bg-surface-200 text-metal-200 hover:text-white border border-white/10"
                >
                  进入赛马日 SUPER 8 专页 →
                </button>

                <button
                  onClick={handleQuickLockRacing}
                  disabled={isLockingRacing || racingLocked}
                  className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-xl font-bold uppercase transition-all flex items-center justify-center gap-1.5 ${
                    racingLocked
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-sm'
                  }`}
                >
                  {racingLocked ? <span>独赢已封存 ✓</span> : <span>锁定独赢推演</span>}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* 4. Streamlined 2-Column Financial & Pool Control Center */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        
        {/* Left: USDT Wallet Snapshot */}
        <div className="p-6 rounded-3xl bg-surface-100/90 border border-lime-400/40 backdrop-blur-xl space-y-4 font-mono text-xs flex flex-col justify-between shadow-glass-card">
          <div className="space-y-2">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Wallet className="w-4 h-4 text-lime-400" />
                <span className="font-bold text-white text-sm">USDT 奖金钱包 (WALLET)</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-lime-400/20 text-lime-400 font-bold">
                100% 纯净结算
              </span>
            </div>

            <div className="my-2">
              <span className="text-[10px] text-metal-400 uppercase tracking-widest block">可支配奖励余额</span>
              <div className="font-black text-3xl sm:text-4xl text-white text-glow-lime">
                {user.walletBalanceUSDT.toFixed(2)} <span className="text-xl text-lime-400">USDT</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 text-[11px]">
              <div>
                <span className="text-metal-400 block text-[9px]">8月结算中 (PENDING)</span>
                <span className="font-bold text-white">+{user.pendingRewardsUSDT.toFixed(2)} USDT</span>
              </div>
              <div>
                <span className="text-metal-400 block text-[9px]">历史累计收益 (LIFETIME)</span>
                <span className="font-bold text-lime-400">{user.lifetimeRewardsUSDT.toLocaleString()} USDT</span>
              </div>
            </div>
          </div>

          <div className="pt-3 flex gap-2">
            <button
              onClick={() => navigate('/app/wallet')}
              className="flex-1 py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-bold uppercase flex items-center justify-center gap-1.5 shadow-glow-lime"
            >
              <ArrowUpRight className="w-4 h-4" />
              <span>提领 / 钱包明细</span>
            </button>
            <button
              onClick={() => navigate('/app/referral')}
              className="px-4 py-3 rounded-xl bg-surface-200 hover:bg-surface-300 text-white border border-white/10"
            >
              推荐中心 (20%)
            </button>
          </div>
        </div>

        {/* Right: Live Global Pool Snapshot */}
        <div className="p-6 rounded-3xl bg-surface-100/90 border border-cyber-blue/40 backdrop-blur-xl space-y-4 font-mono text-xs flex flex-col justify-between shadow-glass-card">
          <div className="space-y-2">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Coins className="w-4 h-4 text-cyber-blue" />
                <span className="font-bold text-white text-sm">实时全球分红池 (GLOBAL POOL)</span>
              </div>
              <span className="text-[10px] text-lime-400 font-bold">
                今日增长 +{poolGrowthTodayUSDT.toFixed(2)} USDT
              </span>
            </div>

            <div className="my-2">
              <span className="text-[10px] text-metal-400 uppercase tracking-widest block">8月全网总分红池</span>
              <div className="font-black text-3xl sm:text-4xl text-white">
                {globalPoolAmountUSDT.toLocaleString('en-US', { minimumFractionDigits: 2 })} <span className="text-xl text-cyber-blue">USDT</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5 text-[10px]">
              <div>
                <span className="text-metal-400 block">全网总份数</span>
                <span className="font-bold text-white">4,871 Shares</span>
              </div>
              <div>
                <span className="text-metal-400 block">单份预估值</span>
                <span className="font-bold text-cyber-blue">78.89 USDT</span>
              </div>
              <div>
                <span className="text-metal-400 block">您持有份额</span>
                <span className="font-bold text-lime-400">8 份 (631.12 USDT)</span>
              </div>
            </div>
          </div>

          <div className="pt-3">
            <button
              onClick={() => navigate('/app/pool')}
              className="w-full py-3 rounded-xl bg-surface-200 hover:bg-surface-300 text-white border border-white/10 font-bold flex items-center justify-center gap-1.5"
            >
              <span>查看 3 大子分红池 (社群5% + 绩效3% + 创作者2%) →</span>
            </button>
          </div>
        </div>

      </div>

      {/* 5. 3 Specialist Skills Radar & Daily Mission Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch font-mono text-xs">
        
        {/* Left 7 Cols: Specialist Skills Trio */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl space-y-4 shadow-glass-card">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-bold text-white text-sm">多品类技能智商概览 (SPECIALIST SKILLS)</span>
            <span className="text-metal-400 text-[10px]">去中心化专业声誉</span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div 
              onClick={() => navigate('/app/iq')}
              className="p-3.5 rounded-2xl bg-surface-200 border border-lime-400/30 text-center cursor-pointer hover:border-lime-400"
            >
              <Target className="w-4 h-4 text-lime-400 mx-auto mb-1" />
              <span className="text-[10px] text-metal-400 block">数字预测 IQ</span>
              <span className="font-black text-xl text-lime-400">{user.predictionIQ}</span>
              <span className="text-[9px] text-metal-400 block mt-0.5">胜率 60.0%</span>
            </div>

            <div 
              onClick={() => navigate('/app/events/f1-malaysia-2026')}
              className="p-3.5 rounded-2xl bg-surface-200 border border-cyber-amber/30 text-center cursor-pointer hover:border-cyber-amber"
            >
              <Flag className="w-4 h-4 text-cyber-amber mx-auto mb-1" />
              <span className="text-[10px] text-metal-400 block">F1 赛车 IQ</span>
              <span className="font-black text-xl text-cyber-amber">{user.f1IQ}</span>
              <span className="text-[9px] text-metal-400 block mt-0.5">全马 #{user.f1RankMalaysia}</span>
            </div>

            <div 
              onClick={() => navigate('/app/events/hk-racing')}
              className="p-3.5 rounded-2xl bg-surface-200 border border-emerald-500/30 text-center cursor-pointer hover:border-emerald-500"
            >
              <Flame className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
              <span className="text-[10px] text-metal-400 block">赛马专项 IQ</span>
              <span className="font-black text-xl text-emerald-400">{user.racingIQ}</span>
              <span className="text-[9px] text-metal-400 block mt-0.5">沙田 #{user.racingRankShaTin}</span>
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Daily Missions & Rank Progress */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl space-y-4 shadow-glass-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-bold text-white text-sm">今日任务与晋级进度</span>
              <span className="text-lime-400 font-bold text-[10px]">达成 2 / 3 项</span>
            </div>

            <div className="space-y-2 mt-3">
              <div className="flex justify-between items-center p-2 rounded-xl bg-surface-200">
                <span className="text-metal-200">1. 完成 1 笔数字预测</span>
                <span className="text-lime-400 font-bold">已达成 ✓</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-xl bg-surface-200">
                <span className="text-metal-200">2. 参与香港赛马日推演</span>
                <span className="text-lime-400 font-bold">已达成 ✓</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-xl bg-surface-200">
                <span className="text-metal-200">3. 晋级【神谕至尊 (20份)】</span>
                <span className="text-cyber-blue font-bold">72% 进行中</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => navigate('/app/ranking')}
              className="w-full py-2.5 rounded-xl bg-surface-200 hover:bg-surface-300 text-metal-200 hover:text-white text-center font-bold text-[11px]"
            >
              查看 6 阶晋级天梯与考核详情 →
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
