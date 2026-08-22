import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDemo } from '../../../context/DemoContext';
import { 
  MOCK_CRYPTO_NOVEMBER_EVENT, 
  MOCK_CRYPTO_NEWS_EVENTS, 
  MOCK_CRYPTO_CALENDAR, 
  MOCK_LEADERBOARDS 
} from '../../../data/mockData';
import { 
  TrendingUp, 
  TrendingDown, 
  Lock, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Trophy, 
  Flame, 
  Zap, 
  Share2, 
  ExternalLink, 
  Activity, 
  Calendar as CalendarIcon, 
  Layers, 
  Radio, 
  BarChart3, 
  Coins, 
  LineChart, 
  Target, 
  Award,
  Globe,
  Check,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const CryptoPredictView: React.FC = () => {
  const { user, addCryptoPrediction, showToast, navigate } = useDemo();

  // Hero Mode 01: BTC $100K Call State
  const [heroChoice, setHeroChoice] = useState<'YES' | 'NO' | null>('YES');
  const [isLockingHero, setIsLockingHero] = useState(false);
  const [heroLocked, setHeroLocked] = useState(false);

  // Mode 02: Timing Window State
  const [timingWindow, setTimingWindow] = useState('Nov 16–30');
  const [timingLocked, setTimingLocked] = useState(false);

  // Mode 03: November Close Range State
  const [closeRange, setCloseRange] = useState('$90K–99,999');
  const [closeLocked, setCloseLocked] = useState(false);

  // Mode 04: Monthly High Range State
  const [monthlyHigh, setMonthlyHigh] = useState('$100–109K');

  // Mode 05: BTC vs ETH
  const [btcVseth, setBtcVseth] = useState<'BTC' | 'ETH'>('BTC');

  // Mode 06: Weekly Sunday Close
  const [weeklySunday, setWeeklySunday] = useState('$80–84K');

  // Mode 07: 7-Day Direction
  const [direction7d, setDirection7d] = useState<'UP' | 'DOWN'>('UP');

  // Mode 08: Volatility Range
  const [volatilityRange, setVolatilityRange] = useState('10–15%');

  // Signature Super 8 State
  const [super8Completed, setSuper8Completed] = useState(6);
  const [isLockingSuper8, setIsLockingSuper8] = useState(false);
  const [super8Locked, setSuper8Locked] = useState(false);

  // Daily Crypto Call State
  const [dailyCallChoice, setDailyCallChoice] = useState<'YES' | 'NO' | null>(null);
  const [dailyCallLocked, setDailyCallLocked] = useState(false);

  // Milestone Binary Challenge
  const [milestoneChoice, setMilestoneChoice] = useState<'$90K' | '$70K'>('$90K');

  // Interactive Chart Milestone Highlight
  const [activeChartMilestone, setActiveChartMilestone] = useState<number>(100000);

  // Calendar Filter
  const [calendarFilter, setCalendarFilter] = useState<'ALL' | 'PRICE' | 'PROTOCOL' | 'MACRO' | 'ETF'>('ALL');

  // Leaderboard Tab
  const [leaderboardTab, setLeaderboardTab] = useState<'GLOBAL' | 'MALAYSIA' | 'FRIENDS' | 'COMMUNITY'>('GLOBAL');

  // Result Settlement Simulator
  const [showResultSim, setShowResultSim] = useState(false);

  // Share Modal
  const [showShareModal, setShowShareModal] = useState(false);

  const handleLockHero = async () => {
    if (!heroChoice || isLockingHero || heroLocked) return;
    setIsLockingHero(true);
    setTimeout(async () => {
      await addCryptoPrediction(`BTC 10万美元突破推演: 【${heroChoice}】(目标 $100,000 · 截止 11月30日)`, 'BTC $100K 里程碑推演');
      setIsLockingHero(false);
      setHeroLocked(true);
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 }, colors: ['#00FF66', '#00E5FF', '#F59E0B'] });
    }, 1000);
  };

  const handleLockSuper8 = async () => {
    if (isLockingSuper8 || super8Locked) return;
    setIsLockingSuper8(true);
    setTimeout(async () => {
      await addCryptoPrediction('NOVEMBER CRYPTO SUPER 8 综合行情推演卡 (8项全锁)', 'NOVEMBER CRYPTO SUPER 8');
      setIsLockingSuper8(false);
      setSuper8Locked(true);
      setSuper8Completed(8);
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 }, colors: ['#F59E0B', '#00FF66', '#00E5FF'] });
    }, 1200);
  };

  const handleDailyCall = (choice: 'YES' | 'NO') => {
    if (dailyCallLocked) return;
    setDailyCallChoice(choice);
    setDailyCallLocked(true);
    showToast(`今日加密推演已锁定【${choice}】！获得 +120 XP · Crypto IQ +3`, 'success');
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
  };

  const filteredCalendar = MOCK_CRYPTO_CALENDAR.filter((item) => {
    if (calendarFilter === 'ALL') return true;
    return item.type === calendarFilter;
  });

  return (
    <div className="space-y-10 max-w-7xl mx-auto pb-16 font-sans">
      
      {/* 1. HERO EVENT BANNER & MARKET TERMINAL (Sections 02 & 03) */}
      <div className="rounded-3xl bg-[#080C14] border-2 border-cyber-amber/60 backdrop-blur-2xl shadow-[0_0_60px_rgba(245,158,11,0.2)] overflow-hidden relative group">
        
        {/* Banner Image & Graphic Layer */}
        <div className="h-64 sm:h-80 w-full relative overflow-hidden bg-[#06090E]">
          <img 
            src="/images/crypto_market_banner.jpg" 
            alt="Bitcoin $100K Milestone Cyber Market Terminal" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/65 to-transparent" />

          {/* Top Floating Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-black bg-cyber-amber text-black uppercase flex items-center gap-1.5 shadow-lg shadow-amber-500/30">
              <Sparkles className="w-4 h-4" />
              <span>🔥 MARKET / CRYPTO // 全球加密市场事件推演</span>
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/80 text-amber-200 border border-cyber-amber/40 backdrop-blur-md">
              DEMO COMMUNITY DATA
            </span>
          </div>

          <div className="absolute top-4 right-4 hidden sm:flex items-center gap-2 font-mono text-xs">
            <span className="px-3.5 py-1.5 rounded-xl bg-black/85 text-lime-300 border border-lime-400/50 backdrop-blur-md font-bold flex items-center gap-1.5 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-lime-400" />
              <span>现货权威公价 · 链上盖戳存证</span>
            </span>
          </div>

          {/* Hero Content Overlay */}
          <div className="absolute bottom-4 left-4 sm:left-8 right-4 sm:right-8 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-300 font-bold uppercase tracking-widest">
              <Radio className="w-4 h-4 animate-pulse text-cyber-amber" />
              <span>BTC NOVEMBER 2026 CHALLENGE // 比特币 11 月 10 万美元超级挑战赛</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              WILL BITCOIN HIT $100K BEFORE NOVEMBER ENDS?
            </h1>
            <p className="text-xs sm:text-sm font-mono text-slate-200 max-w-3xl leading-relaxed">
              比特币会在 2026年 11月30日 结束前触及或突破 100,000 美元历史大关吗？做出您的专业推演并锁定链上时间戳。
            </p>
          </div>
        </div>

        {/* Supporting Live Reference Bar */}
        <div className="p-6 sm:p-8 bg-[#0A0F1B] border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-surface-100 border border-white/10">
            <span className="text-slate-300 text-xs block uppercase font-medium">当前客观现货参考价</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-white font-black text-base sm:text-lg">~$77,422.50</span>
              <span className="text-lime-400 font-bold text-xs">▲ 24h +3.2%</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-surface-100 border border-cyber-amber/50">
            <span className="text-amber-300 text-xs block uppercase font-bold">目标里程碑</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-amber-300 font-black text-base sm:text-lg">$100,000.00</span>
              <span className="text-cyan-300 font-bold text-xs">+29.2% 距目标</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-surface-100 border border-white/10">
            <span className="text-slate-300 text-xs block uppercase font-medium">封存结算倒计时</span>
            <span className="text-white font-bold text-sm sm:text-base mt-1 block">UNTIL 30 NOV 2026</span>
          </div>

          <div className="p-4 rounded-2xl bg-surface-100 border border-white/10">
            <span className="text-slate-300 text-xs block uppercase font-medium">全网参与 / 已锁推演</span>
            <span className="text-cyan-300 font-black text-sm sm:text-base mt-1 block">28,421 位 / 18,442 笔</span>
          </div>
        </div>

        {/* Interactive Hero Prediction Station & Sentiment Bar (Section 03) */}
        <div className="p-6 sm:p-8 pt-0 bg-[#0A0F1B] space-y-6 font-mono text-xs">
          
          {/* Community Sentiment Bar */}
          <div className="p-5 rounded-2xl bg-surface-50 border border-white/10 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white uppercase">COMMUNITY CALL // 全网群体推演占比</span>
                <span className="text-slate-300 text-[11px]">(COMMUNITY SELECTION RATE · 非赔率 / 非赌盘)</span>
              </div>
              <span className="text-cyan-300 font-bold">总计 18,442 笔锁定</span>
            </div>

            {/* Split Progress Bar */}
            <div className="h-4 rounded-full bg-surface-200 overflow-hidden flex p-0.5 border border-white/10">
              <div style={{ width: '64%' }} className="h-full bg-lime-400 rounded-l-full shadow-glow-lime transition-all duration-700" />
              <div style={{ width: '36%' }} className="h-full bg-red-500 rounded-r-full transition-all duration-700" />
            </div>

            <div className="flex justify-between text-xs font-bold">
              <span className="text-lime-400">YES (突破 10 万美元)：64% 群体选定</span>
              <span className="text-red-400">NO (未触及 10 万美元)：36% 群体选定</span>
            </div>
          </div>

          {/* User Decision Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                disabled={heroLocked}
                onClick={() => setHeroChoice('YES')}
                className={`flex-1 sm:flex-initial px-8 py-4 rounded-2xl font-black text-sm uppercase transition-all flex items-center justify-center gap-2 ${
                  heroChoice === 'YES'
                    ? 'bg-lime-400 text-black shadow-glow-lime scale-105 border-2 border-lime-300'
                    : 'bg-surface-200 text-slate-200 border border-white/15 hover:border-white/30'
                }`}
              >
                <span>YES (突破 10 万美元)</span>
              </button>

              <button
                disabled={heroLocked}
                onClick={() => setHeroChoice('NO')}
                className={`flex-1 sm:flex-initial px-8 py-4 rounded-2xl font-black text-sm uppercase transition-all flex items-center justify-center gap-2 ${
                  heroChoice === 'NO'
                    ? 'bg-red-500 text-white shadow-sm scale-105 border-2 border-red-400'
                    : 'bg-surface-200 text-slate-200 border border-white/15 hover:border-white/30'
                }`}
              >
                <span>NO (未能触及)</span>
              </button>
            </div>

            <button
              onClick={handleLockHero}
              disabled={!heroChoice || isLockingHero || heroLocked}
              className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-black uppercase text-sm tracking-wider flex items-center justify-center gap-2 transition-all ${
                heroLocked
                  ? 'bg-lime-400/20 text-lime-400 border border-lime-400/40'
                  : 'bg-cyber-amber hover:bg-amber-400 text-black shadow-[0_0_35px_rgba(245,158,11,0.4)]'
              }`}
            >
              {heroLocked ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>已封存上链 (0xC829F...) ✓</span>
                </>
              ) : isLockingHero ? (
                <span>生成密码学存证哈希中...</span>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  <span>MAKE YOUR CALL // 锁定推演</span>
                </>
              )}
            </button>
          </div>

          {heroLocked && (
            <div className="p-3.5 rounded-xl bg-lime-400/10 border border-lime-400/30 text-center text-lime-400 font-bold">
              NO ADMIN CAN CHANGE YOUR CALL. 没有任何管理员或服务器能够篡改已封存的预测记录。
            </div>
          )}

        </div>

      </div>

      {/* 2. PRICE VERIFICATION RULE CARD (Section 04) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/95 border-2 border-lime-400/60 backdrop-blur-xl shadow-glass-card space-y-4 font-mono text-xs">
        <div className="flex items-center gap-3 pb-3 border-b border-white/10">
          <ShieldCheck className="w-6 h-6 text-lime-400 flex-shrink-0" />
          <div>
            <h3 className="font-display font-black text-lg text-white">
              HOW IS THIS PREDICTION VERIFIED? // 价格达标如何严格核验结算？
            </h3>
            <span className="text-xs text-slate-200 mt-0.5 block">
              ORACLE 49 仅以预先锁定的权威客观公价数据源为准，杜绝任何插针争议与恶意插盘。
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="p-4 rounded-2xl bg-surface-200 border border-white/10 space-y-2">
            <span className="text-lime-300 font-bold text-xs uppercase block">达标判定规则 (TRIGGER CONDITION)</span>
            <p className="text-slate-100 text-xs leading-relaxed font-medium">
              在 <strong>2026年 11月30日 23:59:59 UTC</strong> 前，指定客观参考源现货价格在任意有效记录时间点<strong>触及或超过 US$100,000.00</strong> 即判定为【YES 达成】。
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-surface-200 border border-white/10 space-y-2">
            <span className="text-cyan-300 font-bold text-xs uppercase block">指定客观参考数据源 (LOCKED ORACLE)</span>
            <p className="text-slate-100 text-xs leading-relaxed font-medium">
              客观数据源：<strong>CoinMarketCap BTC/USD & Approved Market Oracle</strong>。锁票后数据源即刻固化，不可更改。
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-surface-200/90 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-200 gap-2">
          <span>存证签名机制：<strong className="text-lime-400 font-bold">9/9 去中心化预言机节点多签定盘</strong></span>
          <span className="px-2.5 py-1 rounded bg-lime-400/20 text-lime-300 font-bold border border-lime-400/30">
            REFERENCE SOURCE LOCKED ✓
          </span>
        </div>
      </div>

      {/* 3. TODAY'S DAILY CRYPTO CALL (Section 27) */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#111827] to-[#0A101C] border border-cyber-amber/50 backdrop-blur-xl shadow-glass-card flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-cyber-amber/20 border border-cyber-amber flex items-center justify-center text-2xl flex-shrink-0 text-cyber-amber">
            ⚡
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-cyber-amber text-black uppercase">
                TODAY'S CRYPTO CALL // 每日加密推演
              </span>
              <span className="text-xs text-slate-300">剩余 12:18:40</span>
            </div>
            <h4 className="font-display font-black text-lg text-white">
              比特币会在未来 24 小时内率先触及 $80,000 美元整数关口吗？
            </h4>
            <p className="text-xs text-slate-200">
              当前群体共识：<strong className="text-amber-300">YES (59%)</strong> · 命中享 <strong className="text-lime-400">+120 XP</strong> · Crypto IQ +3 · 连胜累积
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <button
            disabled={dailyCallLocked}
            onClick={() => handleDailyCall('YES')}
            className={`flex-1 md:flex-initial px-6 py-3 rounded-xl font-bold uppercase transition-all ${
              dailyCallChoice === 'YES'
                ? 'bg-lime-400 text-black shadow-glow-lime font-black'
                : 'bg-surface-200 hover:bg-surface-300 text-white border border-white/15'
            }`}
          >
            <span>YES (会触及)</span>
          </button>

          <button
            disabled={dailyCallLocked}
            onClick={() => handleDailyCall('NO')}
            className={`flex-1 md:flex-initial px-6 py-3 rounded-xl font-bold uppercase transition-all ${
              dailyCallChoice === 'NO'
                ? 'bg-red-500 text-white shadow-sm font-black'
                : 'bg-surface-200 hover:bg-surface-300 text-white border border-white/15'
            }`}
          >
            <span>NO (不会)</span>
          </button>
        </div>
      </div>

      {/* 4. INTERACTIVE PRICE CHART & MILESTONES (Section 21 & 22) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-6 font-mono text-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyber-amber font-bold mb-1">
              <LineChart className="w-4 h-4" />
              <span>INTERACTIVE PRICE CHART // 交互式比特币里程碑图表</span>
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-white">
              BTC/USD 里程碑推演坐标系
            </h3>
            <p className="text-xs text-slate-200 mt-1">
              点击下方关键里程碑价位线，即可针对特定价格关口展开深度时间推演。
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-xl bg-surface-200 text-amber-300 font-bold border border-cyber-amber/40 text-xs">
              现货定盘：$77,422.50
            </span>
          </div>
        </div>

        {/* Milestone Switcher Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { price: 80000, label: '$80,000 攻坚线', dist: '+3.3%', status: '触手可及' },
            { price: 90000, label: '$90,000 主力线', dist: '+16.2%', status: '关键阻力' },
            { price: 100000, label: '$100,000 终极大关', dist: '+29.2%', status: '超级焦点', highlight: true },
            { price: 110000, label: '$110,000 极客狂热', dist: '+42.0%', status: '超预期' },
          ].map((m) => (
            <button
              key={m.price}
              onClick={() => setActiveChartMilestone(m.price)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                activeChartMilestone === m.price
                  ? m.highlight 
                    ? 'bg-cyber-amber/25 border-cyber-amber shadow-sm scale-[1.02]' 
                    : 'bg-cyan-500/20 border-cyan-400 scale-[1.02]'
                  : 'bg-surface-200/90 border-white/10 text-slate-200 hover:border-white/25'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-black text-white text-sm">{m.label}</span>
                <span className="text-xs font-bold text-lime-400">{m.dist}</span>
              </div>
              <span className="text-xs text-slate-300 block mt-1">状态：{m.status}</span>
            </button>
          ))}
        </div>

        {/* Milestone Binary Challenge (Section 22) */}
        <div className="p-5 rounded-2xl bg-surface-50 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-amber-300 font-bold text-xs uppercase block">MILESTONE CHALLENGE // 哪个里程碑先被触发？</span>
            <span className="font-bold text-white text-sm mt-0.5 block">先到 $90,000 还是先回落至 $70,000？</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setMilestoneChoice('$90K')}
              className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-xl font-bold transition-all text-xs ${
                milestoneChoice === '$90K' ? 'bg-lime-400 text-black font-black shadow-sm' : 'bg-surface-200 text-slate-200'
              }`}
            >
              先到 $90K (71%)
            </button>
            <button
              onClick={() => setMilestoneChoice('$70K')}
              className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-xl font-bold transition-all text-xs ${
                milestoneChoice === '$70K' ? 'bg-red-500 text-white font-black shadow-sm' : 'bg-surface-200 text-slate-200'
              }`}
            >
              先到 $70K (29%)
            </button>
          </div>
        </div>
      </div>

      {/* 5. 8 CORE CRYPTO GAME MODES (Sections 06–12) */}
      <div className="space-y-6">
        <div className="pb-2 border-b border-white/10">
          <h3 className="font-display font-black text-2xl text-white">
            8 大加密市场可验证推演玩法 (GAME MODES 01–08)
          </h3>
          <p className="text-xs font-mono text-slate-200">
            涵盖精准时间窗、月度收盘区间、月度最高点、相对收益率、周线与波动率等多维模型。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 font-mono text-xs">
          
          {/* Mode 02: When will BTC hit $100K */}
          <div className="p-6 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-white/10">
              <span className="font-bold text-white text-sm">MODE 02 // WHEN DOES BTC HIT $100K?</span>
              <span className="text-amber-300 font-bold">时间窗口推演</span>
            </div>
            <p className="text-xs text-slate-200">若突破 10 万美元，最可能发生在哪个时间窗口？</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {['Before Oct 1', 'Oct 1–15', 'Oct 16–31', 'Nov 1–15', 'Nov 16–30', 'Not Before Dec 1'].map((w) => (
                <button
                  key={w}
                  onClick={() => setTimingWindow(w)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    timingWindow === w
                      ? 'bg-cyber-amber text-black font-black border-cyber-amber shadow-sm'
                      : 'bg-surface-200 text-slate-200 border-white/10 hover:border-white/25'
                  }`}
                >
                  <span className="text-xs block font-bold">{w}</span>
                  <span className={`text-[10px] block mt-0.5 ${timingWindow === w ? 'text-black/80 font-medium' : 'text-slate-300'}`}>
                    {w === 'Nov 16–30' ? '🔥 48% 最热选' : '群体支持'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mode 03: Where does BTC close November */}
          <div className="p-6 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-white/10">
              <span className="font-bold text-white text-sm">MODE 03 // WHERE DOES BTC CLOSE NOVEMBER?</span>
              <span className="text-cyan-300 font-bold">11月收盘区间</span>
            </div>
            <p className="text-xs text-slate-200">11月30日 23:59:59 UTC 官方现货定盘区间：</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {['Below $70K', '$70K–79,999', '$80K–89,999', '$90K–99,999', '$100K–109,999', '$110K+'].map((r) => (
                <button
                  key={r}
                  onClick={() => setCloseRange(r)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    closeRange === r
                      ? 'bg-cyan-400 text-black font-black border-cyan-400 shadow-sm'
                      : 'bg-surface-200 text-slate-200 border-white/10 hover:border-white/25'
                  }`}
                >
                  <span className="text-xs block font-bold">{r}</span>
                  <span className={`text-[10px] block mt-0.5 ${closeRange === r ? 'text-black/80 font-medium' : 'text-slate-300'}`}>
                    {r === '$90K–99,999' ? '🔥 38% 支持' : '群体选定'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mode 04: Monthly High */}
          <div className="p-6 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-white/10">
              <span className="font-bold text-white text-sm">MODE 04 // BTC NOVEMBER HIGH</span>
              <span className="text-lime-400 font-bold">11月最高触及点</span>
            </div>
            <p className="text-xs text-slate-200">11 月全月经权威核验的最高现货价格落在哪个区间？</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {['Below $80K', '$80–89K', '$90–99K', '$100–109K', '$110–119K', '$120K+'].map((h) => (
                <button
                  key={h}
                  onClick={() => setMonthlyHigh(h)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    monthlyHigh === h
                      ? 'bg-lime-400 text-black font-black border-lime-400 shadow-sm'
                      : 'bg-surface-200 text-slate-200 border-white/10 hover:border-white/25'
                  }`}
                >
                  <span className="text-xs block font-bold">{h}</span>
                  <span className={`text-[10px] block mt-0.5 ${monthlyHigh === h ? 'text-black/80 font-medium' : 'text-slate-300'}`}>
                    {h === '$100–109K' ? '🔥 44% 支持' : '群体选定'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mode 05: BTC vs ETH Relative Performance */}
          <div className="p-6 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-white/10">
              <span className="font-bold text-white text-sm">MODE 05 // WHO PERFORMS BETTER IN NOVEMBER?</span>
              <span className="text-purple-400 font-bold">双雄收益率对决</span>
            </div>
            <p className="text-xs text-slate-200">比较 11月1日 00:00 至 11月30日 23:59 UTC 相对涨幅百分比：</p>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setBtcVseth('BTC')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  btcVseth === 'BTC' ? 'bg-cyber-amber text-black font-black border-cyber-amber shadow-sm' : 'bg-surface-200 text-slate-200'
                }`}
              >
                <span className="text-sm font-bold block">BTC (比特币)</span>
                <span className={`text-xs block mt-1 ${btcVseth === 'BTC' ? 'text-black/80' : 'text-slate-300'}`}>58% 群体选择跑赢</span>
              </button>

              <button
                onClick={() => setBtcVseth('ETH')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  btcVseth === 'ETH' ? 'bg-purple-500 text-white font-black border-purple-500 shadow-sm' : 'bg-surface-200 text-slate-200'
                }`}
              >
                <span className="text-sm font-bold block">ETH (以太坊)</span>
                <span className={`text-xs block mt-1 ${btcVseth === 'ETH' ? 'text-white/90' : 'text-slate-300'}`}>42% 群体选择跑赢</span>
              </button>
            </div>
          </div>

          {/* Mode 06 & 07: Weekly & 7-Day */}
          <div className="p-6 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-white/10">
              <span className="font-bold text-white text-sm">MODE 06 // BTC SUNDAY CLOSE (本周日收盘)</span>
              <span className="text-cyan-300 font-bold">周线轮转</span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {['Below $75K', '$75–79K', '$80–84K', '$85–89K', '$90K+'].map((s) => (
                <button
                  key={s}
                  onClick={() => setWeeklySunday(s)}
                  className={`p-2.5 rounded-xl border text-center font-bold text-xs ${
                    weeklySunday === s ? 'bg-cyan-400 text-black font-black' : 'bg-surface-200 text-slate-200'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-white font-bold block text-xs">MODE 07: NEXT 7 DAYS (未来7天方向)</span>
                <span className="text-xs text-slate-300">对比当前基准价 $77,422.50</span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setDirection7d('UP')}
                  className={`px-4 py-2 rounded-xl font-bold text-xs ${
                    direction7d === 'UP' ? 'bg-lime-400 text-black font-black' : 'bg-surface-200 text-slate-200'
                  }`}
                >
                  UP ▲ (68%)
                </button>
                <button
                  onClick={() => setDirection7d('DOWN')}
                  className={`px-4 py-2 rounded-xl font-bold text-xs ${
                    direction7d === 'DOWN' ? 'bg-red-500 text-white font-black' : 'bg-surface-200 text-slate-200'
                  }`}
                >
                  DOWN ▼
                </button>
              </div>
            </div>
          </div>

          {/* Mode 08: Volatility Range */}
          <div className="p-6 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-white/10">
              <span className="font-bold text-white text-sm">MODE 08 // HOW WILD WILL BTC MOVE?</span>
              <span className="text-amber-300 font-bold">波动率极限推演</span>
            </div>
            <p className="text-xs text-slate-200">推演 7 天内最高价与最低价的最大振幅百分比：</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {['Under 5%', '5–10%', '10–15%', '15%+'].map((v) => (
                <button
                  key={v}
                  onClick={() => setVolatilityRange(v)}
                  className={`p-3.5 rounded-xl border text-center font-bold text-xs ${
                    volatilityRange === v ? 'bg-cyber-amber text-black font-black' : 'bg-surface-200 text-slate-200'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
            <span className="text-xs text-slate-300 block">适合量化交易者与高阶极客的专业指标。</span>
          </div>

        </div>
      </div>

      {/* 6. SIGNATURE GAME: NOVEMBER CRYPTO SUPER 8 (Section 13) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/95 border-2 border-cyber-amber/60 backdrop-blur-xl shadow-[0_0_50px_rgba(245,158,11,0.25)] space-y-6 font-mono text-xs">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded text-xs font-black bg-cyber-amber text-black uppercase">
                🏆 SIGNATURE COMBINATION
              </span>
              <span className="text-xs text-amber-300 font-bold">8 合 1 全景加密推演卡</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              NOVEMBER CRYPTO SUPER 8 // 11 月加密行情超级大满贯
            </h3>
            <p className="text-xs text-slate-200">
              一次性将 8 大加密市场核心维度合一封存上链 · 达成全中享最高 +2,500 XP 与【CRYPTO ORACLE】专属勋章
            </p>
          </div>

          <div className="text-right">
            <span className="text-slate-300 text-xs block">推演完成度</span>
            <span className="font-black text-2xl text-amber-300">{super8Completed} / 8 项完成</span>
          </div>
        </div>

        {/* 8 Questions Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {[
            { num: 1, title: 'BTC 触及 $100K', val: 'YES (突破达成)', done: true },
            { num: 2, title: '突破时间窗口', val: 'Nov 16–30 窗口', done: true },
            { num: 3, title: '11月收盘区间', val: '$100K–109,999', done: true },
            { num: 4, title: '11月最高触及', val: '$100–109K 区间', done: true },
            { num: 5, title: 'BTC vs ETH 涨幅', val: 'BTC 相对跑赢', done: true },
            { num: 6, title: '周日收盘定盘', val: '$80–84K 区间', done: true },
            { num: 7, title: '7天价格方向', val: 'UP ▲ 向上', done: true },
            { num: 8, title: '7天极限波动率', val: '10–15% 振幅', done: true },
          ].map((q) => (
            <div key={q.num} className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 space-y-1.5">
              <div className="flex justify-between items-center text-xs text-slate-300">
                <span>0{q.num}. {q.title}</span>
                <span className="text-lime-400 font-bold">✓</span>
              </div>
              <span className="font-bold text-white text-xs block truncate">{q.val}</span>
            </div>
          ))}
        </div>

        <button
          onClick={handleLockSuper8}
          disabled={isLockingSuper8 || super8Locked}
          className={`w-full py-4 rounded-2xl font-black uppercase text-sm tracking-wider flex items-center justify-center gap-2 transition-all ${
            super8Locked
              ? 'bg-cyber-amber/20 text-amber-300 border border-cyber-amber/40 cursor-default'
              : 'bg-cyber-amber hover:bg-amber-400 text-black shadow-[0_0_35px_rgba(245,158,11,0.45)]'
          }`}
        >
          {super8Locked ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              <span>NOVEMBER CRYPTO SUPER 8 已在链上封存 (HASH: 0xC829F...) ✓</span>
            </>
          ) : isLockingSuper8 ? (
            <span>生成 8 合 1 密码学时间戳中...</span>
          ) : (
            <>
              <Lock className="w-5 h-5" />
              <span>LOCK CRYPTO SUPER 8 // 锁定超级推演卡</span>
            </>
          )}
        </button>

      </div>

      {/* 7. CRYPTO IQ & LEADERBOARD (Section 14 & 15) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch font-mono text-xs">
        
        {/* Left 7 Cols: Crypto IQ Profile */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-cyber-amber/40 backdrop-blur-xl shadow-glass-card space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-amber-300 font-bold uppercase tracking-wider block text-xs">
                  SPECIALIST REPUTATION METRIC
                </span>
                <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                  CRYPTO IQ // 加密市场预测专属智商
                </h3>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-300 block">全球加密榜</span>
                <span className="font-black text-xl text-white">#{user.globalCryptoRank}</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="font-black text-5xl sm:text-6xl text-amber-300 tracking-tight">
                {user.cryptoIQ}
              </div>
              <div className="text-slate-200 space-y-1 text-xs">
                <span className="text-white font-bold block">加密市场专家级评级 (Crypto Oracle)</span>
                <span>连胜纪录：🔥 {user.cryptoStreak} 场连续命中</span>
                <span className="block text-lime-400 font-medium">击败全网 91.8% 的加密市场推演玩家</span>
              </div>
            </div>

            {/* 6 Radar Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="p-3 rounded-xl bg-surface-200 border border-white/10">
                <span className="text-slate-300 text-xs block">BTC 方向准确率</span>
                <span className="font-bold text-white text-sm mt-0.5 block">72%</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-200 border border-white/10">
                <span className="text-slate-300 text-xs block">价格区间准确率</span>
                <span className="font-bold text-white text-sm mt-0.5 block">64%</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-200 border border-white/10">
                <span className="text-slate-300 text-xs block">里程碑命中率</span>
                <span className="font-bold text-amber-300 text-sm mt-0.5 block">58%</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-200 border border-white/10">
                <span className="text-slate-300 text-xs block">BTC vs ETH 胜率</span>
                <span className="font-bold text-lime-400 text-sm mt-0.5 block">69%</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-200 border border-white/10">
                <span className="text-slate-300 text-xs block">周线定盘准确率</span>
                <span className="font-bold text-white text-sm mt-0.5 block">75%</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-200 border border-white/10">
                <span className="text-slate-300 text-xs block">SUPER 8 达成率</span>
                <span className="font-bold text-white text-sm mt-0.5 block">75%</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex justify-between items-center text-xs text-slate-300">
            <span>数字 782 · F1 824 · 赛马 768 · 科技 811 · 加密 796</span>
            <span className="text-amber-300 font-bold">5 维声誉全量链上认证</span>
          </div>
        </div>

        {/* Right 5 Cols: Crypto Leaderboard */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-bold text-white text-sm">CRYPTO LEADERBOARD // 加密天梯榜</span>
              <div className="flex bg-surface-200 p-0.5 rounded-lg text-xs">
                {(['GLOBAL', 'MALAYSIA'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setLeaderboardTab(t as any)}
                    className={`px-3 py-1 rounded-md font-bold ${leaderboardTab === t ? 'bg-cyber-amber text-black' : 'text-slate-300'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2 mt-2">
              {MOCK_LEADERBOARDS.crypto.map((item) => (
                <div
                  key={item.name}
                  className={`p-3 rounded-xl flex items-center justify-between transition-all ${
                    item.isUser ? 'bg-cyber-amber/25 border border-cyber-amber text-white font-bold' : 'bg-surface-200/90 text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-7 font-mono text-xs text-slate-300">#{item.rank}</span>
                    <span className="text-xs font-bold">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-amber-300 font-bold">{item.cryptoIQ} IQ</span>
                    <span className="text-xs">{item.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <span className="text-xs text-slate-300 block text-center">
              每周日 24:00 UTC 链上自动结算排名与专属称号
            </span>
          </div>
        </div>

      </div>

      {/* 8. CRYPTO NEWS EVENT PREDICTION & CALENDAR (Section 18, 19, 20) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left: Crypto News Event Prediction */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-4 font-mono text-xs">
          <div className="pb-3 border-b border-white/10 space-y-1">
            <div className="flex items-center gap-2 text-cyan-300 font-bold">
              <Radio className="w-4 h-4 text-cyan-400" />
              <span>OFFICIAL EVENT PREDICTION // 宏观与监管事件推演</span>
            </div>
            <h4 className="font-display font-black text-lg text-white">
              客观可验证的行业大事件推演
            </h4>
            <p className="text-xs text-slate-200">
              仅以官方监管机构公告、上市公司正式披露与基金会声明为结算依据。
            </p>
          </div>

          <div className="space-y-3">
            {MOCK_CRYPTO_NEWS_EVENTS.map((e) => (
              <div key={e.id} className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="px-2 py-0.5 rounded bg-surface-100 text-cyan-300 font-bold text-[10px]">
                    {e.category}
                  </span>
                  <span className="text-slate-300">{e.participants.toLocaleString()} 人参与</span>
                </div>
                <h5 className="font-bold text-white text-xs">{e.title}</h5>
                <span className="text-[10px] text-slate-300 block">结算依据：{e.source}</span>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {e.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => showToast(`已选定【${opt}】！`, 'info')}
                      className="py-2 rounded-lg bg-surface-100 hover:bg-surface-300 text-slate-200 font-bold text-xs border border-white/10"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Crypto Event Calendar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-4 font-mono text-xs flex flex-col justify-between">
          <div>
            <div className="pb-3 border-b border-white/10 space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-amber-300 font-bold">
                  <CalendarIcon className="w-4 h-4" />
                  <span>CRYPTO WATCH CALENDAR // 行业关键事件排期</span>
                </div>
                <div className="flex bg-surface-200 p-0.5 rounded-lg text-[10px]">
                  {(['ALL', 'PRICE', 'PROTOCOL', 'MACRO', 'ETF'] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => setCalendarFilter(f)}
                      className={`px-2 py-0.5 rounded font-bold ${calendarFilter === f ? 'bg-cyber-amber text-black' : 'text-slate-300'}`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
              <h4 className="font-display font-black text-lg text-white">
                11月行业日历与定盘关键节点
              </h4>
            </div>

            <div className="space-y-2.5 mt-3">
              {filteredCalendar.map((c, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-surface-200/90 border border-white/10 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="font-bold text-amber-300 text-xs block">{c.date}</span>
                    <span className="text-white font-medium text-xs">{c.event}</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    c.impact === 'CRITICAL' ? 'bg-red-500/20 text-red-300 border border-red-500/40' : 'bg-surface-100 text-slate-300'
                  }`}>
                    {c.impact}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsored Campaign Card (Section 31) */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-surface-200 to-amber-500/15 border border-cyber-amber/40 space-y-2 mt-4">
            <div className="flex justify-between items-center">
              <span className="px-2 py-0.5 rounded text-[10px] font-black bg-cyber-amber text-black uppercase">
                💼 SPONSORED CAMPAIGN
              </span>
              <span className="text-amber-300 font-bold">10,000 USDT 奖池</span>
            </div>
            <h5 className="font-display font-black text-sm text-white">
              BTC NOVEMBER MASTER CALL // 机构赞助大师推演赛
            </h5>
            <p className="text-xs text-slate-200">
              完成 Crypto Super 8 且命中率位列前 5% 的玩家共享 10,000 USDT 赞助池。
            </p>
          </div>
        </div>

      </div>

      {/* 9. CRYPTO BADGES SHOWCASE (Section 26) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-6 font-mono text-xs">
        <div className="pb-3 border-b border-white/10">
          <h4 className="font-display font-black text-xl text-white">
            CRYPTO SOULBOUND BADGES // 加密市场灵魂绑定成就勋章
          </h4>
          <p className="text-xs text-slate-200">
            链上不可转移的专业预测声誉认证，见证您对宏观牛熊与关键大关的推演直觉。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'BTC WATCHER (大饼观象人)', desc: '累计完成 20 笔以上 BTC 价格推演', icon: '👁️', unlocked: true },
            { title: 'MARKET SCOUT (市场侦察兵)', desc: '准确命中 5 次以上 7 天短期方向', icon: '⚡', unlocked: true },
            { title: 'PRICE RANGE MASTER (区间操盘手)', desc: '月度收盘区间推演零误差命中', icon: '🎯', unlocked: true },
            { title: 'MILESTONE HUNTER (关口猎手)', desc: '成功预判 $100K 关键整数关口到达时间', icon: '🏹', unlocked: true },
            { title: 'BTC BULL CALLER (多头先知)', desc: '在极度恐慌期间准确推演反弹突破', icon: '🐂', unlocked: true },
            { title: 'BTC BEAR CALLER (避险先锋)', desc: '准确推演并规避单周 15%+ 极限回撤', icon: '🐻', unlocked: true },
            { title: 'CRYPTO ANALYST (加密分析师)', desc: 'Crypto IQ 突破 790 分大关', icon: '🔮', unlocked: true },
            { title: 'CRYPTO ORACLE (加密神谕)', desc: '达成全网 Crypto Super 8 全中满贯', icon: '👑', unlocked: true },
          ].map((b) => (
            <div
              key={b.title}
              className="p-4 rounded-2xl bg-surface-200/90 border border-cyber-amber/40 shadow-sm flex items-start gap-3 text-white"
            >
              <div className="text-3xl p-2 rounded-xl bg-surface-100 border border-white/10 flex-shrink-0">
                {b.icon}
              </div>
              <div className="space-y-1">
                <span className="font-bold text-sm block text-white">{b.title}</span>
                <p className="text-xs text-slate-200">{b.desc}</p>
                <span className="text-[10px] font-bold text-amber-300 block pt-1">
                  已永久写入链上存证 ✓
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 10. FINAL STRATEGIC MESSAGE (Section 35) */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-500/15 via-cyan-500/15 to-lime-400/15 border-2 border-cyber-amber/50 text-center space-y-4 font-mono">
        <div className="text-xs text-amber-300 font-bold uppercase tracking-widest">
          STRATEGIC VISION // 全球预测基础设施战略
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          MARKETS MOVE. MAKE YOUR CALL BEFORE THEY DO.
        </h2>
        
        {/* Cascade Chain */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-bold text-slate-200 py-2">
          <span className="px-3 py-1.5 rounded-xl bg-surface-200 border border-white/10">现货公价 (Price)</span>
          <span>➔</span>
          <span className="px-3 py-1.5 rounded-xl bg-surface-200 border border-white/10">里程碑 (Milestone)</span>
          <span>➔</span>
          <span className="px-3 py-1.5 rounded-xl bg-surface-200 border border-white/10">趋势 (Trend)</span>
          <span>➔</span>
          <span className="px-3 py-1.5 rounded-xl bg-surface-200 border border-white/10">宏观事件 (Macro)</span>
          <span>➔</span>
          <span className="px-3 py-1.5 rounded-xl bg-surface-200 border border-white/10">官方新闻 (News)</span>
          <span>➔</span>
          <span className="px-3 py-1.5 rounded-xl bg-lime-400 text-black font-black">链上核验 (Verified)</span>
        </div>

        <p className="text-sm font-bold text-lime-400 max-w-2xl mx-auto">
          ORACLE turns market expectations into verifiable prediction reputation.
        </p>
        <div className="text-xs text-slate-300 font-bold uppercase tracking-widest">
          DIFFERENT EVENTS. ONE PREDICTION ENGINE.
        </div>
      </div>

    </div>
  );
};
