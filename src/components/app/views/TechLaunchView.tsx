import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDemo } from '../../../context/DemoContext';
import { MOCK_TECH_BRANDS, MOCK_OCTOBER_TECH_DATA, MOCK_LEADERBOARDS } from '../../../data/mockData';
import { TechBrand } from '../../../types/platform';
import { 
  Sparkles, 
  Smartphone, 
  Calendar as CalendarIcon, 
  CheckCircle2, 
  Clock, 
  Lock, 
  ShieldCheck, 
  ArrowRight, 
  Trophy, 
  Flame, 
  Zap, 
  Share2, 
  ExternalLink, 
  ChevronRight, 
  Hash, 
  HelpCircle,
  TrendingUp,
  Cpu,
  Layers,
  Award,
  Globe,
  Radio,
  Eye,
  Check,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const TechLaunchView: React.FC = () => {
  const { user, addTechPrediction, showToast, navigate } = useDemo();

  // Selected Brands in Mode 1 (Max 3)
  const [selectedBrands, setSelectedBrands] = useState<string[]>(['brand-oppo', 'brand-vivo']);
  const [isLockingBrands, setIsLockingBrands] = useState(false);
  const [brandsLocked, setBrandsLocked] = useState(false);

  // Mode 2: Launch Date Window & Exact Date
  const [windowBrand, setWindowBrand] = useState('OPPO');
  const [selectedWindow, setSelectedWindow] = useState('OCT 15–21');
  const [exactDate, setExactDate] = useState<number>(18);
  const [isLockingDate, setIsLockingDate] = useState(false);
  const [dateLocked, setDateLocked] = useState(false);

  // Mode 3: Brand Battles
  const [battle1, setBattle1] = useState<'OPPO' | 'vivo'>('OPPO');
  const [battle2, setBattle2] = useState<'Xiaomi' | 'HONOR'>('Xiaomi');
  const [battle3, setBattle3] = useState<'OnePlus' | 'realme'>('OnePlus');

  // Mode 4: How Many Brands
  const [brandCountGauge, setBrandCountGauge] = useState<'0-2' | '3-4' | '5-6' | '7+'>('5-6');

  // Mode 5: Device Category
  const [categoryPick, setCategoryPick] = useState<'FLAGSHIP' | 'FOLDABLE' | 'GAMING' | 'MID-RANGE' | 'BUDGET' | 'CAMERA-FOCUSED'>('FLAGSHIP');

  // Mode 6: Foldable Watch
  const [foldableYesNo, setFoldableYesNo] = useState<'YES' | 'NO'>('YES');
  const [foldableBrand, setFoldableBrand] = useState('Samsung');

  // Mode 7: Price Range
  const [priceRange, setPriceRange] = useState<'BELOW_699' | '699_899' | '900_1099' | '1100_PLUS'>('699_899');

  // Mode 8: Product Count
  const [modelCount, setModelCount] = useState<number>(3);

  // Signature Super 8 State
  const [super8Completed, setSuper8Completed] = useState(6);
  const [isLockingSuper8, setIsLockingSuper8] = useState(false);
  const [super8Locked, setSuper8Locked] = useState(false);

  // Interactive Calendar State
  const [calendarAssignments, setCalendarAssignments] = useState<{ [date: number]: string }>({
    16: 'OPPO',
    21: 'vivo',
    28: 'HONOR',
  });
  const [selectedCalBrand, setSelectedCalBrand] = useState('OPPO');
  const [calendarLocked, setCalendarLocked] = useState(false);
  const [showCalendarResults, setShowCalendarResults] = useState(false);

  // Daily Tech Call State
  const [dailyCallChoice, setDailyCallChoice] = useState<'YES' | 'NO' | null>(null);
  const [dailyCallLocked, setDailyCallLocked] = useState(false);

  // Leaderboard Tab inside Tech
  const [leaderboardTab, setLeaderboardTab] = useState<'GLOBAL' | 'MALAYSIA' | 'FRIENDS' | 'COMMUNITY'>('GLOBAL');

  // Share Modal
  const [showShareModal, setShowShareModal] = useState(false);

  const toggleBrand = (brandId: string) => {
    if (brandsLocked) return;
    if (selectedBrands.includes(brandId)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brandId));
    } else {
      if (selectedBrands.length < 3) {
        setSelectedBrands([...selectedBrands, brandId]);
      } else {
        showToast('最多挑选 3 个 10月发布品牌', 'warning');
      }
    }
  };

  const handleLockBrands = async () => {
    if (selectedBrands.length === 0 || isLockingBrands || brandsLocked) return;
    setIsLockingBrands(true);
    setTimeout(async () => {
      const brandNames = selectedBrands.map((id) => MOCK_TECH_BRANDS.find((b) => b.id === id)?.name).join(' · ');
      await addTechPrediction(`10月发布品牌推演: [${brandNames}]`, '品牌发布清单推演');
      setIsLockingBrands(false);
      setBrandsLocked(true);
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 }, colors: ['#00E5FF', '#00FF66', '#A855F7'] });
    }, 1000);
  };

  const handleLockDate = async () => {
    if (isLockingDate || dateLocked) return;
    setIsLockingDate(true);
    setTimeout(async () => {
      await addTechPrediction(`${windowBrand} 发布推演: 窗口 ${selectedWindow} (精确 10月${exactDate}日)`, '发布窗口与精确日期');
      setIsLockingDate(false);
      setDateLocked(true);
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 }, colors: ['#00E5FF', '#00FF66'] });
    }, 1000);
  };

  const handleLockSuper8 = async () => {
    if (isLockingSuper8 || super8Locked) return;
    setIsLockingSuper8(true);
    setTimeout(async () => {
      await addTechPrediction('OCTOBER TECH SUPER 8 综合科技推演卡 (8项指标全锁)', 'OCTOBER TECH SUPER 8');
      setIsLockingSuper8(false);
      setSuper8Locked(true);
      setSuper8Completed(8);
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 }, colors: ['#00E5FF', '#00FF66', '#A855F7'] });
    }, 1200);
  };

  const handleAssignDate = (day: number) => {
    if (calendarLocked) return;
    setCalendarAssignments((prev) => {
      const copy = { ...prev };
      if (copy[day] === selectedCalBrand) {
        delete copy[day];
      } else {
        copy[day] = selectedCalBrand;
      }
      return copy;
    });
  };

  const handleLockCalendar = async () => {
    if (calendarLocked) return;
    setCalendarLocked(true);
    await addTechPrediction('10月发布日历排期推演锁定', '10月发布日历推演');
    showToast('您的 10月科技发布专属日历已在区块链盖戳封存！', 'success');
  };

  const handleDailyCall = (choice: 'YES' | 'NO') => {
    if (dailyCallLocked) return;
    setDailyCallChoice(choice);
    setDailyCallLocked(true);
    showToast(`今日推演已锁定【${choice}】！获得 +150 XP · Tech IQ +4`, 'success');
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
  };

  return (
    <div className="space-y-10 max-w-7xl mx-auto pb-16 font-sans">
      
      {/* 1. TECH HERO BANNER */}
      <div className="rounded-3xl bg-[#090D14] border-2 border-cyan-500/50 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,229,255,0.2)] overflow-hidden relative group">
        
        {/* Banner Graphic Header */}
        <div className="h-64 sm:h-80 w-full relative overflow-hidden bg-[#06090E]">
          <img 
            src="/images/tech_launch_banner.jpg" 
            alt="October Smartphone Watch 2026 Keynote Stage" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-[#090D14]/60 to-transparent" />
          
          {/* Top Floating Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-black bg-cyan-400 text-black uppercase flex items-center gap-1.5 shadow-lg shadow-cyan-400/30">
              <Sparkles className="w-4 h-4" />
              <span>🚀 NEW CATEGORY // 科技新品发布推演</span>
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/80 text-cyan-200 border border-cyan-500/40 backdrop-blur-md">
              DEMO DATA // 模拟推演
            </span>
          </div>

          <div className="absolute top-4 right-4 hidden sm:flex items-center gap-2 font-mono text-xs">
            <span className="px-3.5 py-1.5 rounded-xl bg-black/85 text-lime-300 border border-lime-400/50 backdrop-blur-md font-bold flex items-center gap-1.5 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-lime-400" />
              <span>仅限官方新闻稿/发布会核验</span>
            </span>
          </div>

          {/* Bottom Banner Title Overlay */}
          <div className="absolute bottom-4 left-4 sm:left-8 right-4 sm:right-8 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-bold uppercase tracking-widest">
              <Radio className="w-4 h-4 animate-pulse text-cyan-400" />
              <span>OCTOBER SMARTPHONE WATCH 2026 // 全球智能手机秋季发布观象台</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              WHAT LAUNCHES NEXT? 谁将在 10 月率先发布？
            </h1>
            <p className="text-xs sm:text-sm font-mono text-slate-200 max-w-3xl leading-relaxed">
              在各大科技巨头揭晓发布会日期前，提前锁定发布周期、精确档期与机型形态 · 链上密码学存证核验。
            </p>
          </div>
        </div>

        {/* Hero KPI Stats Strip */}
        <div className="p-6 sm:p-8 bg-[#0B101A] border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-surface-100 border border-white/10">
            <span className="text-slate-300 text-xs block uppercase font-medium">推演周期</span>
            <span className="text-white font-bold text-sm sm:text-base mt-1 block">2026年 10月01–31日</span>
          </div>

          <div className="p-4 rounded-2xl bg-surface-100 border border-white/10">
            <span className="text-slate-300 text-xs block uppercase font-medium">全网已锁推演</span>
            <span className="text-cyan-300 font-black text-sm sm:text-base mt-1 block">84,219 次</span>
          </div>

          <div className="p-4 rounded-2xl bg-surface-100 border border-white/10">
            <span className="text-slate-300 text-xs block uppercase font-medium">参与极客玩家</span>
            <span className="text-white font-bold text-sm sm:text-base mt-1 block">23,481 位</span>
          </div>

          <div className="p-4 rounded-2xl bg-surface-100 border border-cyan-500/40">
            <span className="text-cyan-300 text-xs block uppercase font-bold">追踪品牌阵容</span>
            <span className="text-cyan-300 font-black text-sm sm:text-base mt-1 block">12 大全球品牌</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="p-6 sm:p-8 pt-0 bg-[#0B101A] flex flex-wrap items-center gap-3 font-mono text-xs">
          <a
            href="#brand-selection"
            className="px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_0_30px_rgba(0,229,255,0.4)]"
          >
            <span>立即做出科技推演 (MAKE YOUR TECH CALL)</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#october-calendar"
            className="px-5 py-3.5 rounded-xl bg-surface-200 hover:bg-surface-300 text-white border border-white/15 font-bold transition-all"
          >
            查看 10 月发布专属日历 (CALENDAR)
          </a>

          <button
            onClick={() => setShowShareModal(true)}
            className="px-4 py-3.5 rounded-xl bg-surface-200 hover:bg-surface-300 text-cyan-300 border border-cyan-500/40 font-bold flex items-center gap-1.5 ml-auto"
          >
            <Share2 className="w-4 h-4" />
            <span>分享推演卡 (SHARE)</span>
          </button>
        </div>

      </div>

      {/* 2. CRITICAL VERIFICATION RULE CARD */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/95 border-2 border-lime-400/60 backdrop-blur-xl shadow-glass-card space-y-4 font-mono text-xs">
        <div className="flex items-center gap-3 pb-3 border-b border-white/10">
          <ShieldCheck className="w-6 h-6 text-lime-400 flex-shrink-0" />
          <div>
            <h3 className="font-display font-black text-lg text-white">
              WHAT COUNTS AS A LAUNCH? // 什么是官方正式发布判定标准？
            </h3>
            <span className="text-xs text-slate-200 mt-0.5 block">
              ORACLE 49 仅以客观中立的官方事实源为唯一结算基准，绝不依赖爆料、渲染图或小道消息。
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 space-y-2.5">
            <span className="text-emerald-300 font-bold text-xs uppercase flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>官方认可的事实源 (ACCEPTED OFFICIAL SOURCES)</span>
            </span>
            <ul className="space-y-1.5 text-slate-100 text-xs font-medium">
              <li>✓ 品牌官方全球/区域官方网站 (Official Website)</li>
              <li>✓ 官方新闻编辑室 / 全球新闻公报 (Official Newsroom)</li>
              <li>✓ 品牌官方正式新品发布会直播 (Official Launch Event)</li>
              <li>✓ 官方认证蓝 V 社交媒体官方频道 (Verified Social Channels)</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-red-500/15 border border-red-500/40 space-y-2.5">
            <span className="text-red-300 font-bold text-xs uppercase flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-red-400" />
              <span>不作为判定依据的信息 (NOT SUFFICIENT ALONE)</span>
            </span>
            <ul className="space-y-1.5 text-slate-300 text-xs">
              <li>✕ 供应链泄密 / 谍照传闻 (Rumours & Leaks)</li>
              <li>✕ 工信部入网 / 3C 认证备案文件 (Certification Filings)</li>
              <li>✕ 电商零售商占位盲约页面 (Retailer Placeholder Listings)</li>
              <li>✕ 科技数码博主推测与爆料 (Media Speculation)</li>
            </ul>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-surface-200/90 border border-white/10 flex items-center justify-between text-xs text-slate-200">
          <span>最终结算状态：<strong className="text-lime-400 font-bold">OFFICIAL LAUNCH VERIFIED (官方发布核验)</strong></span>
          <span className="text-cyan-300 font-bold">全量写入密码学存证账本</span>
        </div>
      </div>

      {/* 3. TODAY'S TECH CALL */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0E1524] to-[#0A101C] border border-cyan-500/40 backdrop-blur-xl shadow-glass-card flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 border border-cyan-400 flex items-center justify-center text-2xl flex-shrink-0 text-cyan-400">
            ⚡
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-cyan-400 text-black uppercase">
                TODAY'S TECH CALL // 每日极客推演
              </span>
              <span className="text-xs text-slate-300">剩余 18:42:10</span>
            </div>
            <h4 className="font-display font-black text-lg text-white">
              vivo 会在未来 48 小时内官宣 X200 系列的具体发布会日期吗？
            </h4>
            <p className="text-xs text-slate-200">
              当前群体共识：<strong className="text-cyan-300">YES (68%)</strong> · 命中可获得 <strong className="text-lime-400">+150 XP</strong> · Tech IQ +4
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <button
            disabled={dailyCallLocked}
            onClick={() => handleDailyCall('YES')}
            className={`flex-1 md:flex-initial px-6 py-3 rounded-xl font-bold uppercase transition-all ${
              dailyCallChoice === 'YES'
                ? 'bg-cyan-400 text-black shadow-glow-lime'
                : 'bg-surface-200 hover:bg-surface-300 text-white border border-white/15'
            }`}
          >
            <span>YES (会官宣)</span>
          </button>

          <button
            disabled={dailyCallLocked}
            onClick={() => handleDailyCall('NO')}
            className={`flex-1 md:flex-initial px-6 py-3 rounded-xl font-bold uppercase transition-all ${
              dailyCallChoice === 'NO'
                ? 'bg-red-500 text-white shadow-sm'
                : 'bg-surface-200 hover:bg-surface-300 text-white border border-white/15'
            }`}
          >
            <span>NO (不会)</span>
          </button>
        </div>
      </div>

      {/* 4. GAME MODE 01 — BRAND LAUNCH */}
      <div id="brand-selection" className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-6 font-mono text-xs">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-300 font-bold mb-1">
              <Smartphone className="w-4 h-4" />
              <span>GAME MODE 01 // 品牌发布清单推演</span>
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-white">
              WHO LAUNCHES IN OCTOBER? 哪些品牌将在 10 月正式发布新品？
            </h3>
            <p className="text-xs text-slate-200 mt-1">
              挑选最多 3 个您认为将在 2026年 10月 正式发布新手机的品牌（已选 {selectedBrands.length} / 3）：
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-xl bg-surface-200 text-cyan-300 font-bold border border-cyan-500/40 text-xs">
              {selectedBrands.length} / 3 SELECTED
            </span>
          </div>
        </div>

        {/* 12 Brand Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {MOCK_TECH_BRANDS.map((brand) => {
            const isSelected = selectedBrands.includes(brand.id);

            return (
              <div
                key={brand.id}
                onClick={() => toggleBrand(brand.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'bg-cyan-500/20 border-cyan-400 shadow-[0_0_25px_rgba(0,229,255,0.25)] scale-[1.02]'
                    : 'bg-surface-200/90 border-white/10 hover:border-white/25'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-black text-sm text-white">{brand.name}</span>
                      <span className="text-xs text-slate-300">({brand.country})</span>
                    </div>
                    <span className="text-xs text-slate-200 line-clamp-1 mt-1 block">{brand.rumouredModels}</span>
                  </div>

                  <div className={`w-5 h-5 rounded-lg flex items-center justify-center font-bold text-xs ${
                    isSelected ? 'bg-cyan-400 text-black' : 'bg-surface-300 text-slate-200'
                  }`}>
                    {isSelected ? '✓' : '+'}
                  </div>
                </div>

                <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">群体支持率：</span>
                  <span className={`font-bold ${isSelected ? 'text-cyan-300' : 'text-slate-100'}`}>
                    {brand.communityPickRate}%
                  </span>
                </div>

                {brand.tag && (
                  <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-400/25 text-cyan-200 font-bold border border-cyan-400/40 self-start">
                    {brand.tag}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Row */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          <div className="text-slate-200 text-xs">
            <span>当前已选：</span>
            <span className="text-cyan-300 font-bold ml-1">
              {selectedBrands.map((id) => MOCK_TECH_BRANDS.find((b) => b.id === id)?.name).join(' · ')}
            </span>
            <span className="text-xs text-slate-300 block mt-1">
              奖励：<strong className="text-lime-400">+450 XP</strong> · Tech IQ +16 · 承诺封存上链
            </span>
          </div>

          <button
            onClick={handleLockBrands}
            disabled={selectedBrands.length === 0 || isLockingBrands || brandsLocked}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold uppercase transition-all flex items-center justify-center gap-2 ${
              brandsLocked
                ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-500/40'
                : selectedBrands.length > 0
                ? 'bg-cyan-400 hover:bg-cyan-300 text-black shadow-[0_0_30px_rgba(0,229,255,0.4)]'
                : 'bg-surface-300 text-slate-400 cursor-not-allowed'
            }`}
          >
            {brandsLocked ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>品牌清单已封存上链 (SEALED) ✓</span>
              </>
            ) : isLockingBrands ? (
              <span>计算 SHA-256 存证哈希中...</span>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                <span>锁定品牌推演 (LOCK BRAND PICKS)</span>
              </>
            )}
          </button>
        </div>

      </div>

      {/* 5. GAME MODE 02 & EXACT DATE (High Contrast Update) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-6 font-mono text-xs">
        
        <div className="pb-4 border-b border-white/10 space-y-1">
          <div className="flex items-center gap-2 text-cyan-300 font-bold">
            <CalendarIcon className="w-4 h-4" />
            <span>GAME MODE 02 // 发布日窗口与精确日期 (WHEN WILL THEY LAUNCH?)</span>
          </div>
          <h3 className="font-display font-black text-xl sm:text-2xl text-white">
            推演具体品牌的发布日期窗口
          </h3>
          <p className="text-xs text-slate-200">
            支持 4 大时间窗口与 1–31 日精确单日推演（精确命中享 +800 XP 终极奖励）
          </p>
        </div>

        {/* Brand Selector */}
        <div className="flex flex-wrap gap-2">
          {['OPPO', 'vivo', 'Xiaomi', 'HONOR', 'OnePlus'].map((b) => (
            <button
              key={b}
              disabled={dateLocked}
              onClick={() => setWindowBrand(b)}
              className={`px-4 py-2.5 rounded-xl font-bold transition-all ${
                windowBrand === b
                  ? 'bg-cyan-400 text-black shadow-sm font-black'
                  : 'bg-surface-200 text-slate-200 border border-white/15 hover:text-white'
              }`}
            >
              {b}
            </button>
          ))}
        </div>

        {/* 4 Date Windows */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {[
            { id: 'OCT 01–07', label: '10月 01–07日', pickRate: '12%' },
            { id: 'OCT 08–14', label: '10月 08–14日', pickRate: '24%' },
            { id: 'OCT 15–21', label: '10月 15–21日', pickRate: '48%', tag: '🔥 热门窗口' },
            { id: 'OCT 22–31', label: '10月 22–31日', pickRate: '14%' },
            { id: 'NO_OCT', label: '10月不发布', pickRate: '2%' },
          ].map((win) => (
            <button
              key={win.id}
              disabled={dateLocked}
              onClick={() => setSelectedWindow(win.id)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                selectedWindow === win.id
                  ? 'bg-cyan-500/25 border-cyan-400 text-white shadow-sm'
                  : 'bg-surface-200/90 border-white/10 text-slate-200 hover:border-white/25'
              }`}
            >
              <span className="font-bold text-xs block text-white">{win.label}</span>
              <span className="text-xs text-cyan-300 font-bold block mt-1.5">{win.pickRate} 群体支持</span>
              {win.tag && (
                <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-400/25 text-cyan-200 font-bold border border-cyan-400/40 mt-2 inline-block">
                  {win.tag}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Advanced Exact Date Picker (Oct 1–31) with High Contrast Labels */}
        <div className="p-5 rounded-2xl bg-surface-50 border border-white/10 space-y-3.5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-white text-xs">
              高级可选：精确推演具体开幕日期 (EXACT DATE PICKER)
            </span>
            <span className="text-cyan-300 font-bold text-xs">
              当前选定：10 月 {exactDate} 日
            </span>
          </div>

          <div className="grid grid-cols-7 sm:grid-cols-11 gap-1.5">
            {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
              <button
                key={d}
                disabled={dateLocked}
                onClick={() => setExactDate(d)}
                className={`py-2.5 rounded-lg font-bold text-xs transition-all ${
                  exactDate === d
                    ? 'bg-cyan-400 text-black shadow-sm font-black'
                    : 'bg-surface-200 text-slate-200 hover:bg-surface-300 hover:text-white'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Upgraded High Contrast Reward Boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 border-t border-white/10 text-xs font-medium">
            <div className="p-2.5 rounded-xl bg-surface-200/90 border border-white/10 flex flex-col justify-between">
              <span className="text-slate-300">精确命中 (Exact)：</span>
              <strong className="text-lime-400 font-black text-sm mt-0.5">+800 XP</strong>
            </div>
            <div className="p-2.5 rounded-xl bg-surface-200/90 border border-white/10 flex flex-col justify-between">
              <span className="text-slate-300">误差 ±1 天：</span>
              <strong className="text-cyan-300 font-black text-sm mt-0.5">+500 XP</strong>
            </div>
            <div className="p-2.5 rounded-xl bg-surface-200/90 border border-white/10 flex flex-col justify-between">
              <span className="text-slate-300">误差 ±3 天：</span>
              <strong className="text-white font-black text-sm mt-0.5">+250 XP</strong>
            </div>
            <div className="p-2.5 rounded-xl bg-surface-200/90 border border-white/10 flex flex-col justify-between">
              <span className="text-slate-300">跨周参与：</span>
              <strong className="text-slate-200 font-black text-sm mt-0.5">+50 参与 XP</strong>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          <button
            onClick={handleLockDate}
            disabled={isLockingDate || dateLocked}
            className={`px-6 py-3.5 rounded-xl font-bold uppercase transition-all flex items-center gap-2 ${
              dateLocked
                ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-500/40'
                : 'bg-cyan-400 hover:bg-cyan-300 text-black shadow-[0_0_25px_rgba(0,229,255,0.35)]'
            }`}
          >
            {dateLocked ? <span>日期窗口已锁定 ✓</span> : <span>锁定发布日期推演 (LOCK DATE WINDOW)</span>}
          </button>
        </div>

      </div>

      {/* 6. GAME MODES 03–08 GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Mode 03: Brand Battle */}
        <div className="p-6 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl space-y-4 font-mono text-xs shadow-glass-card">
          <div className="flex items-center gap-2 text-cyan-300 font-bold pb-2 border-b border-white/10">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>GAME MODE 03 // 谁先官宣？(WHO ANNOUNCES FIRST?)</span>
          </div>

          {/* Battle 1 */}
          <div className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 space-y-2.5">
            <div className="flex justify-between text-slate-200 text-xs">
              <span className="font-bold">对决 01 · 影像旗舰先锋战</span>
              <span className="text-cyan-300 font-bold">OPPO 58% vs vivo 42%</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setBattle1('OPPO')}
                className={`py-3 rounded-xl font-bold transition-all ${
                  battle1 === 'OPPO' ? 'bg-cyan-400 text-black font-black' : 'bg-surface-100 text-slate-200 hover:text-white'
                }`}
              >
                OPPO 率先官宣
              </button>
              <button
                onClick={() => setBattle1('vivo')}
                className={`py-3 rounded-xl font-bold transition-all ${
                  battle1 === 'vivo' ? 'bg-cyan-400 text-black font-black' : 'bg-surface-100 text-slate-200 hover:text-white'
                }`}
              >
                vivo 率先官宣
              </button>
            </div>
          </div>

          {/* Battle 2 */}
          <div className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 space-y-2.5">
            <div className="flex justify-between text-slate-200 text-xs">
              <span className="font-bold">对决 02 · 骁龙旗舰首发战</span>
              <span className="text-cyan-300 font-bold">Xiaomi 51% vs HONOR 49%</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setBattle2('Xiaomi')}
                className={`py-3 rounded-xl font-bold transition-all ${
                  battle2 === 'Xiaomi' ? 'bg-cyan-400 text-black font-black' : 'bg-surface-100 text-slate-200 hover:text-white'
                }`}
              >
                Xiaomi 率先官宣
              </button>
              <button
                onClick={() => setBattle2('HONOR')}
                className={`py-3 rounded-xl font-bold transition-all ${
                  battle2 === 'HONOR' ? 'bg-cyan-400 text-black font-black' : 'bg-surface-100 text-slate-200 hover:text-white'
                }`}
              >
                HONOR 率先官宣
              </button>
            </div>
          </div>

          {/* Battle 3 */}
          <div className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 space-y-2.5">
            <div className="flex justify-between text-slate-200 text-xs">
              <span className="font-bold">对决 03 · 性能极客对决</span>
              <span className="text-cyan-300 font-bold">OnePlus 62% vs realme 38%</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setBattle3('OnePlus')}
                className={`py-3 rounded-xl font-bold transition-all ${
                  battle3 === 'OnePlus' ? 'bg-cyan-400 text-black font-black' : 'bg-surface-100 text-slate-200 hover:text-white'
                }`}
              >
                OnePlus 率先发布
              </button>
              <button
                onClick={() => setBattle3('realme')}
                className={`py-3 rounded-xl font-bold transition-all ${
                  battle3 === 'realme' ? 'bg-cyan-400 text-black font-black' : 'bg-surface-100 text-slate-200 hover:text-white'
                }`}
              >
                realme 率先发布
              </button>
            </div>
          </div>
        </div>

        {/* Mode 04, 05, 06, 07: Quick Matrix */}
        <div className="space-y-4 font-mono text-xs">
          
          {/* Mode 04 */}
          <div className="p-5 rounded-3xl bg-surface-100/90 border border-white/15 space-y-2.5">
            <span className="text-cyan-300 font-bold text-xs block">
              GAME MODE 04 // 10 月将有多少个品牌正式发布？(HOW BUSY WILL OCTOBER BE?)
            </span>
            <div className="grid grid-cols-4 gap-2">
              {(['0-2', '3-4', '5-6', '7+'] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setBrandCountGauge(g)}
                  className={`py-3 rounded-xl font-bold transition-all ${
                    brandCountGauge === g ? 'bg-cyan-400 text-black font-black' : 'bg-surface-200 text-slate-200 hover:text-white'
                  }`}
                >
                  {g} 个品牌
                </button>
              ))}
            </div>
          </div>

          {/* Mode 05 & 06 */}
          <div className="p-5 rounded-3xl bg-surface-100/90 border border-white/15 space-y-3.5">
            <div className="flex justify-between items-center">
              <span className="text-cyan-300 font-bold text-xs">
                MODE 05 // 首发机型形态
              </span>
              <span className="text-slate-300 text-xs">FLAGSHIP 62% 支持</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {(['FLAGSHIP', 'FOLDABLE', 'GAMING', 'MID-RANGE', 'BUDGET', 'CAMERA-FOCUSED'] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCategoryPick(c)}
                  className={`py-2.5 rounded-lg font-bold text-xs transition-all ${
                    categoryPick === c ? 'bg-cyan-400 text-black' : 'bg-surface-200 text-slate-200 hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-white font-bold block text-xs">MODE 06: 10月会有全新折叠屏发布吗？</span>
                <span className="text-xs text-slate-300">以品牌官方发布会为准</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setFoldableYesNo('YES')}
                  className={`px-4 py-2 rounded-lg font-bold text-xs ${
                    foldableYesNo === 'YES' ? 'bg-lime-400 text-black' : 'bg-surface-200 text-slate-200'
                  }`}
                >
                  YES (58%)
                </button>
                <button
                  onClick={() => setFoldableYesNo('NO')}
                  className={`px-4 py-2 rounded-lg font-bold text-xs ${
                    foldableYesNo === 'NO' ? 'bg-red-500 text-white' : 'bg-surface-200 text-slate-200'
                  }`}
                >
                  NO
                </button>
              </div>
            </div>
          </div>

          {/* Mode 07 */}
          <div className="p-5 rounded-3xl bg-surface-100/90 border border-white/15 space-y-2.5">
            <span className="text-cyan-300 font-bold text-xs block">
              MODE 07 // 官方起售价区间 (OFFICIAL STARTING PRICE)
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'BELOW_699', label: '< $699' },
                { id: '699_899', label: '$699–899' },
                { id: '900_1099', label: '$900–1,099' },
                { id: '1100_PLUS', label: '$1,100+' },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPriceRange(p.id as any)}
                  className={`py-2.5 rounded-lg font-bold text-xs transition-all ${
                    priceRange === p.id ? 'bg-cyan-400 text-black font-black' : 'bg-surface-200 text-slate-200 hover:text-white'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
            <span className="text-xs text-slate-300 block pt-1">
              以官方发布会最终公布的官方建议起售价 (MSRP) 结算。
            </span>
          </div>

        </div>

      </div>

      {/* 7. SIGNATURE GAME: OCTOBER TECH SUPER 8 */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/95 border-2 border-cyan-400/60 backdrop-blur-xl shadow-[0_0_50px_rgba(0,229,255,0.25)] space-y-6 font-mono text-xs">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded text-xs font-black bg-cyan-400 text-black uppercase">
                🏆 SIGNATURE COMBINATION
              </span>
              <span className="text-xs text-cyan-300 font-bold">8 合 1 全景科技推演</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              OCTOBER TECH SUPER 8 // 10 月极客推演超级大满贯
            </h3>
            <p className="text-xs text-slate-200">
              一次性将 8 大科技发布推演维度合一封存上链 · 达成全中享最高 +2,500 XP 与【OCTOBER ORACLE】专属勋章
            </p>
          </div>

          <div className="text-right">
            <span className="text-slate-300 text-xs block">推演进度</span>
            <span className="font-black text-2xl text-cyan-300">{super8Completed} / 8 项完成</span>
          </div>
        </div>

        {/* 8 Questions Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {[
            { num: 1, title: '10月发布 3 品牌', val: 'OPPO · vivo · Xiaomi', done: true },
            { num: 2, title: '谁率先官宣', val: 'OPPO', done: true },
            { num: 3, title: 'OPPO 发布窗口', val: 'OCT 15–21', done: true },
            { num: 4, title: 'vivo 发布窗口', val: 'OCT 15–21', done: true },
            { num: 5, title: '折叠屏是否发布', val: 'YES (会发布)', done: true },
            { num: 6, title: '首发机型形态', val: 'FLAGSHIP 旗舰', done: true },
            { num: 7, title: '发布品牌总量', val: '5–6 个品牌', done: true },
            { num: 8, title: '精确单日推演', val: '10月18日 (Exact)', done: true },
          ].map((q) => (
            <div key={q.num} className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 space-y-1.5">
              <div className="flex justify-between items-center text-xs text-slate-300">
                <span>0{q.num}. {q.title}</span>
                <span className="text-cyan-300 font-bold">✓</span>
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
              ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 cursor-default'
              : 'bg-cyan-400 hover:bg-cyan-300 text-black shadow-[0_0_35px_rgba(0,229,255,0.45)]'
          }`}
        >
          {super8Locked ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              <span>OCTOBER TECH SUPER 8 已成功在链上盖戳封存 (HASH: 0xA791C...) ✓</span>
            </>
          ) : isLockingSuper8 ? (
            <span>生成 8 合 1 密码学时间戳中...</span>
          ) : (
            <>
              <Lock className="w-5 h-5" />
              <span>锁定 TECH SUPER 8 推演卡 (LOCK TECH SUPER 8)</span>
            </>
          )}
        </button>

      </div>

      {/* 8. BUILD YOUR OCTOBER LAUNCH CALENDAR */}
      <div id="october-calendar" className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-6 font-mono text-xs">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-300 font-bold mb-1">
              <CalendarIcon className="w-4 h-4" />
              <span>INTERACTIVE FEATURE // 10 月发布专属日历 (LAUNCH CALENDAR)</span>
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-white">
              BUILD YOUR OCTOBER LAUNCH CALENDAR
            </h3>
            <p className="text-xs text-slate-200">
              点选品牌并在 10月 日历上点击对应日期，打造您的专属发布排期表！
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowCalendarResults(!showCalendarResults)}
              className={`px-4 py-2 rounded-xl border text-xs font-bold ${
                showCalendarResults ? 'bg-lime-400 text-black border-lime-400' : 'bg-surface-200 text-slate-200 border-white/15'
              }`}
            >
              {showCalendarResults ? '返回编辑日历' : '模拟官方开奖核验 (DEMO RESULTS)'}
            </button>
          </div>
        </div>

        {/* Brand Selector for Calendar */}
        {!showCalendarResults && (
          <div className="space-y-2">
            <span className="text-slate-200 text-xs block font-bold">① 选择要排期的品牌：</span>
            <div className="flex flex-wrap gap-2">
              {['OPPO', 'vivo', 'Xiaomi', 'HONOR', 'OnePlus', 'Samsung', 'realme'].map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedCalBrand(b)}
                  className={`px-4 py-2 rounded-xl font-bold transition-all ${
                    selectedCalBrand === b ? 'bg-cyan-400 text-black shadow-sm font-black' : 'bg-surface-200 text-slate-200 border border-white/15'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* October 2026 Grid (31 Days) */}
        {!showCalendarResults ? (
          <div className="space-y-2">
            <span className="text-slate-200 text-xs block font-bold">② 点击日期将【{selectedCalBrand}】绑定至对应日期：</span>
            <div className="grid grid-cols-7 gap-2 p-4 rounded-2xl bg-surface-50 border border-white/10">
              {['一', '二', '三', '四', '五', '六', '日'].map((w) => (
                <div key={w} className="text-center text-slate-300 font-bold text-xs pb-1">
                  周{w}
                </div>
              ))}

              {/* Offset for Oct 1 */}
              <div className="aspect-square opacity-0"></div>
              <div className="aspect-square opacity-0"></div>
              <div className="aspect-square opacity-0"></div>

              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                const assignedBrand = calendarAssignments[day];

                return (
                  <button
                    key={day}
                    disabled={calendarLocked}
                    onClick={() => handleAssignDate(day)}
                    className={`aspect-square rounded-xl p-2 flex flex-col justify-between text-left transition-all border ${
                      assignedBrand
                        ? 'bg-cyan-500/25 border-cyan-400 shadow-sm'
                        : 'bg-surface-200/90 border-white/10 hover:border-white/25'
                    }`}
                  >
                    <span className="text-xs font-bold text-slate-200">{day}</span>
                    {assignedBrand && (
                      <span className="text-[10px] font-black text-cyan-200 truncate bg-black/70 px-1.5 py-0.5 rounded">
                        {assignedBrand}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          /* Calendar Result Mode */
          <div className="p-6 rounded-2xl bg-surface-200/90 border border-lime-400/40 space-y-4">
            <div className="flex items-center gap-2 text-lime-400 font-bold text-xs">
              <CheckCircle2 className="w-4 h-4" />
              <span>CALENDAR OFFICIAL SETTLEMENT // 日历核验结算模拟</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="p-4 rounded-xl bg-surface-100 border border-white/10 space-y-1.5">
                <span className="font-bold text-white text-sm block">OPPO</span>
                <div className="text-xs text-slate-200 space-y-0.5">
                  <div>用户推演：10月16日</div>
                  <div className="text-white font-bold">官方发布：10月17日</div>
                </div>
                <span className="px-2.5 py-1 rounded text-xs bg-cyan-400/25 text-cyan-200 font-bold border border-cyan-400/40 inline-block mt-2">
                  NEAR HIT (相差1天) +300 XP
                </span>
              </div>

              <div className="p-4 rounded-xl bg-surface-100 border border-lime-400/40 space-y-1.5">
                <span className="font-bold text-white text-sm block">vivo</span>
                <div className="text-xs text-slate-200 space-y-0.5">
                  <div>用户推演：10月21日</div>
                  <div className="text-white font-bold">官方发布：10月21日</div>
                </div>
                <span className="px-2.5 py-1 rounded text-xs bg-lime-400/25 text-lime-300 font-bold border border-lime-400/40 inline-block mt-2">
                  EXACT HIT ✓ (完全命中) +800 XP
                </span>
              </div>

              <div className="p-4 rounded-xl bg-surface-100 border border-white/10 space-y-1.5">
                <span className="font-bold text-white text-sm block">HONOR</span>
                <div className="text-xs text-slate-200 space-y-0.5">
                  <div>用户推演：10月28日</div>
                  <div className="text-slate-300">官方结果：10月无发布会</div>
                </div>
                <span className="px-2.5 py-1 rounded text-xs bg-white/10 text-slate-300 font-bold inline-block mt-2">
                  MISS (未命中)
                </span>
              </div>
            </div>
          </div>
        )}

        {!showCalendarResults && (
          <div className="flex justify-end">
            <button
              onClick={handleLockCalendar}
              disabled={calendarLocked}
              className={`px-6 py-3.5 rounded-xl font-bold uppercase transition-all flex items-center gap-2 ${
                calendarLocked ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/40' : 'bg-cyan-400 hover:bg-cyan-300 text-black shadow-sm font-black'
              }`}
            >
              {calendarLocked ? <span>日历排期已封存上链 ✓</span> : <span>锁定我的 10 月发布日历 (LOCK CALENDAR)</span>}
            </button>
          </div>
        )}

      </div>

      {/* 9. TECH IQ PROFILE & LEADERBOARD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch font-mono text-xs">
        
        {/* Left 7 Cols: Tech IQ Profile */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-cyan-400/40 backdrop-blur-xl shadow-glass-card space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-cyan-300 font-bold uppercase tracking-wider block text-xs">
                  CATEGORY REPUTATION METRIC
                </span>
                <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                  TECH IQ // 科技预测专属智商
                </h3>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-300 block">全球科技榜</span>
                <span className="font-black text-xl text-white">#{user.globalTechRank}</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="font-black text-5xl sm:text-6xl text-cyan-300 tracking-tight">
                {user.techIQ}
              </div>
              <div className="text-slate-200 space-y-1 text-xs">
                <span className="text-white font-bold block">极客宗师级评级 (Tech Oracle Master)</span>
                <span>连胜纪录：🔥 {user.techStreak} 场连续命中</span>
                <span className="block text-cyan-300 font-medium">击败全网 94.2% 的科技预测玩家</span>
              </div>
            </div>

            {/* 6 Radar Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="p-3 rounded-xl bg-surface-200 border border-white/10">
                <span className="text-slate-300 text-xs block">品牌发布准确率</span>
                <span className="font-bold text-white text-sm mt-0.5 block">74%</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-200 border border-white/10">
                <span className="text-slate-300 text-xs block">发布日期准确率</span>
                <span className="font-bold text-white text-sm mt-0.5 block">61%</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-200 border border-white/10">
                <span className="text-slate-300 text-xs block">品牌对决胜率</span>
                <span className="font-bold text-cyan-300 text-sm mt-0.5 block">82%</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-200 border border-white/10">
                <span className="text-slate-300 text-xs block">精确单日命中数</span>
                <span className="font-bold text-lime-400 text-sm mt-0.5 block">4 次 (Exact)</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-200 border border-white/10">
                <span className="text-slate-300 text-xs block">产品类别准确率</span>
                <span className="font-bold text-white text-sm mt-0.5 block">68%</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-200 border border-white/10">
                <span className="text-slate-300 text-xs block">SUPER 8 达成率</span>
                <span className="font-bold text-white text-sm mt-0.5 block">78%</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex justify-between items-center text-xs text-slate-300">
            <span>综合 IQ 782 · F1 IQ 824 · 赛马 IQ 768 · Tech IQ 811</span>
            <span className="text-cyan-300 font-bold">声誉全量链上认证</span>
          </div>
        </div>

        {/* Right 5 Cols: Tech Leaderboard */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-bold text-white text-sm">TECH LEADERBOARD // 极客天梯榜</span>
              <div className="flex bg-surface-200 p-0.5 rounded-lg text-xs">
                {(['GLOBAL', 'MALAYSIA'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setLeaderboardTab(t as any)}
                    className={`px-3 py-1 rounded-md font-bold ${leaderboardTab === t ? 'bg-cyan-400 text-black' : 'text-slate-300'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2 mt-2">
              {MOCK_LEADERBOARDS.tech.map((item) => (
                <div
                  key={item.name}
                  className={`p-3 rounded-xl flex items-center justify-between transition-all ${
                    item.isUser ? 'bg-cyan-400/25 border border-cyan-400 text-white font-bold' : 'bg-surface-200/90 text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-7 font-mono text-xs text-slate-300">#{item.rank}</span>
                    <span className="text-xs font-bold">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-300 font-bold">{item.techIQ} IQ</span>
                    <span className="text-xs">{item.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <span className="text-xs text-slate-300 block text-center">
              每周一 00:00 链上自动结算排名与专属称号
            </span>
          </div>
        </div>

      </div>

      {/* 10. B2B BRAND SPONSORSHIP */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0C121D] via-[#121A2A] to-[#0C121D] border-2 border-cyber-amber/50 backdrop-blur-xl shadow-glass-card space-y-5 font-mono text-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded text-xs font-black bg-cyber-amber text-black uppercase">
                💼 B2B BRAND SPONSORSHIP // 品牌赞助专属推演赛
              </span>
              <span className="text-cyber-amber font-bold">商业化标杆组件</span>
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-white">
              PRESENTED BY BRAND PARTNER (品牌冠名推演大奖赛)
            </h3>
            <p className="text-xs text-slate-200">
              科技品牌方可通过赞助奖池发起专属推演赛，在发布会前引爆全网声量与精准预热，零赌博合规营销。
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-cyber-amber/15 border border-cyber-amber/40 text-right">
            <span className="text-slate-300 text-xs block">品牌专项赞助奖池</span>
            <span className="font-black text-2xl text-cyber-amber">10,000 USDT</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-surface-200 border border-white/10">
            <span className="text-slate-300 block text-xs">预测维度 01</span>
            <span className="text-white font-bold mt-1 block">精准发布日期与开幕时刻</span>
          </div>
          <div className="p-3.5 rounded-xl bg-surface-200 border border-white/10">
            <span className="text-slate-300 block text-xs">预测维度 02</span>
            <span className="text-white font-bold mt-1 block">首发核心卖点与芯片型号</span>
          </div>
          <div className="p-3.5 rounded-xl bg-surface-200 border border-white/10">
            <span className="text-slate-300 block text-xs">预测维度 03</span>
            <span className="text-white font-bold mt-1 block">官方首发起售价区间</span>
          </div>
          <div className="p-3.5 rounded-xl bg-surface-200 border border-white/10">
            <span className="text-slate-300 block text-xs text-cyber-amber font-bold">获胜者特权</span>
            <span className="text-cyber-amber font-bold mt-1 block">发布会现场 VIP 门票 + 新机</span>
          </div>
        </div>
      </div>

      {/* 11. FUTURE TECH EXPANSION */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-6 font-mono text-xs">
        <div className="pb-4 border-b border-white/10 space-y-1">
          <div className="flex items-center gap-2 text-cyan-300 font-bold">
            <Globe className="w-4 h-4" />
            <span>EXPANSION VISION // 科技预测生态远景</span>
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
            TECH IS BIGGER THAN SMARTPHONES. 科技远不止于智能手机
          </h3>
          <p className="text-xs text-slate-200">
            任何拥有客观可查的官方发布公告的事实，皆可成为 ORACLE 49 的可验证预测事件。
          </p>
        </div>

        {/* 5 Future Tech Verticals */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {[
            { icon: '🍎', name: 'Apple 特别活动', desc: 'WWDC / 秋季 iPhone 档期' },
            { icon: '🤖', name: 'AI 基础模型发布', desc: 'GPT-5 / Gemini 2.0 推出窗口' },
            { icon: '🎮', name: '次世代游戏主机', desc: 'PS5 Pro / Switch 2 官宣日' },
            { icon: '⚡', name: 'NVIDIA 旗舰 GPU', desc: 'RTX 5090 规格与开售' },
            { icon: '🚗', name: '电动车 (EV) 发布', desc: '特斯拉 / 小米汽车新车交付' },
          ].map((item) => (
            <div key={item.name} className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 space-y-1">
              <span className="text-2xl">{item.icon}</span>
              <span className="font-bold text-white block pt-1 text-xs">{item.name}</span>
              <p className="text-xs text-slate-300">{item.desc}</p>
              <span className="px-2 py-0.5 rounded text-[10px] bg-surface-300 text-slate-300 mt-2 inline-block font-bold">COMING SOON</span>
            </div>
          ))}
        </div>

        {/* Universal Engine Story Slogan */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-lime-400/15 via-cyan-400/15 to-cyber-blue/15 border border-cyan-400/40 text-center space-y-2">
          <div className="text-xs text-cyan-300 font-bold uppercase tracking-widest">
            DIFFERENT EVENTS. ONE PREDICTION ENGINE.
          </div>
          <h4 className="font-display font-black text-2xl sm:text-3xl text-white">
            CALL THE LAUNCH BEFORE THE BRAND DOES.
          </h4>
          <p className="text-xs text-lime-400 font-mono font-bold">
            PREDICT. LOCK. VERIFY. RANK. // 预测 · 封存 · 核验 · 晋级
          </p>
        </div>
      </div>

      {/* Share Modal */}
      <AnimatePresence>
        {showShareModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0D121D] border-2 border-cyan-400 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-5 text-white font-mono text-xs relative"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="font-bold text-cyan-300 text-sm">MY OCTOBER TECH CALL</span>
                <button onClick={() => setShowShareModal(false)} className="text-slate-300 hover:text-white text-base">✕</button>
              </div>

              <div className="p-4 rounded-2xl bg-surface-200 border border-white/10 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">{user.name} 的 10月科技推演：</span>
                  <span className="text-cyan-300 font-bold">Tech IQ: {user.techIQ}</span>
                </div>
                <div className="space-y-1.5 text-slate-100 text-xs">
                  <div>• OPPO ➔ 10月16日 (OCT 15–21)</div>
                  <div>• vivo ➔ 10月21日 (OCT 15–21)</div>
                  <div>• HONOR ➔ 10月28日 (OCT 22–31)</div>
                </div>
                <div className="pt-2 text-xs text-slate-300 border-t border-white/10">
                  存证哈希：0xA791C... | 9/9 节点多签封存
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    showToast('挑战链接已复制到剪贴板！', 'success');
                    setShowShareModal(false);
                  }}
                  className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-black uppercase tracking-wider text-xs"
                >
                  CHALLENGE MY CALL (复制挑战卡)
                </button>
                <div className="flex gap-2">
                  {['WhatsApp', 'Telegram', 'Facebook', 'X (Twitter)'].map((p) => (
                    <button
                      key={p}
                      onClick={() => {
                        showToast(`已生成 ${p} 分享图文！`, 'success');
                        setShowShareModal(false);
                      }}
                      className="flex-1 py-2.5 rounded-xl bg-surface-200 hover:bg-surface-300 text-xs text-slate-200 font-bold border border-white/10"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
