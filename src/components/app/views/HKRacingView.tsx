import React, { useState } from 'react';
import { useDemo } from '../../../context/DemoContext';
import { MOCK_HORSE_RUNNERS } from '../../../data/mockData';
import { HorseRunner } from '../../../types/platform';
import { 
  Trophy, 
  Flame, 
  Lock, 
  CheckCircle2, 
  Sparkles, 
  RotateCcw, 
  Users, 
  Share2, 
  Award, 
  Activity, 
  Gauge, 
  Timer, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  Send,
  MessageCircle,
  Clock,
  Compass,
  Zap,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const HKRacingView: React.FC = () => {
  const { user, addHorseRacingPrediction, showToast } = useDemo();

  // State
  const [selectedVenue, setSelectedVenue] = useState<'SHA_TIN' | 'HAPPY_VALLEY'>('SHA_TIN');
  const [selectedRace, setSelectedRace] = useState<number>(6);
  const [gameState, setGameState] = useState<'UPCOMING' | 'LIVE' | 'RESULTS'>('UPCOMING');

  // Race 6 Predictions State
  const [selectedWinner, setSelectedWinner] = useState<HorseRunner>(MOCK_HORSE_RUNNERS[0]); // #4 Golden Ace
  const [p1Horse, setP1Horse] = useState<number>(4);
  const [p2Horse, setP2Horse] = useState<number>(7);
  const [p3Horse, setP3Horse] = useState<number>(1);
  const [jockeyBattleChoice, setJockeyBattleChoice] = useState<'PURTON' | 'MOREIRA'>('PURTON');
  const [trainerBattleChoice, setTrainerBattleChoice] = useState<'HAYES' | 'SIZE'>('HAYES');
  const [favouriteWins, setFavouriteWins] = useState<'YES' | 'NO'>('YES');
  const [barrierZone, setBarrierZone] = useState<'1-4' | '5-8' | '9-12' | '13+'>('1-4');
  const [winningMargin, setWinningMargin] = useState<'PHOTO' | 'UNDER_1' | '1_2' | '2_4' | '4_PLUS'>('1_2');
  const [racePace, setRacePace] = useState<'SLOW' | 'MODERATE' | 'FAST' | 'VERY_FAST'>('FAST');
  const [topJockeyDay, setTopJockeyDay] = useState<string>('潘顿 (Z. Purton)');
  const [topTrainerDay, setTopTrainerDay] = useState<string>('大卫希斯 (D. Hayes)');

  // Locking State
  const [isLockingWinner, setIsLockingWinner] = useState(false);
  const [winnerLocked, setWinnerLocked] = useState(false);
  const [winnerHash, setWinnerHash] = useState('');

  const [isLockingSuper8, setIsLockingSuper8] = useState(false);
  const [super8Locked, setSuper8Locked] = useState(false);
  const [super8Hash, setSuper8Hash] = useState('');

  // Leaderboard tab
  const [leaderboardTab, setLeaderboardTab] = useState<'SHA_TIN' | 'HAPPY_VALLEY' | 'GLOBAL' | 'FRIENDS'>('SHA_TIN');

  // Badges list
  const badgesList = [
    { name: 'RACE DAY ROOKIE', title: '赛马日新星', unlocked: true, icon: '🏇' },
    { name: 'RACE PREDICTOR', title: '胜场先知', unlocked: true, icon: '🎯' },
    { name: 'TOP 3 MASTER', title: '前三全中大师', unlocked: true, icon: '🥉' },
    { name: 'JOCKEY ANALYST', title: '骑师战术研判家', unlocked: true, icon: '⚡' },
    { name: 'SHA TIN EXPERT', title: '沙田赛道专家', unlocked: true, icon: '🏟️' },
    { name: 'HAPPY VALLEY EXPERT', title: '跑马地夜赛行家', unlocked: false, icon: '🌃' },
    { name: 'RACING ORACLE', title: '绿茵神谕使者', unlocked: false, icon: '🔮' },
    { name: 'RACE DAY MASTER', title: '赛马日超级宗师', unlocked: false, icon: '👑' },
  ];

  // Schedule timeline
  const raceTimeline = [
    { num: 1, dist: '1200M', class: '第4班', status: 'COMPLETED', time: '13:00' },
    { num: 2, dist: '1400M', class: '第4班', status: 'COMPLETED', time: '13:35' },
    { num: 3, dist: '1600M', class: '第3班', status: 'PENDING', time: '14:10' },
    { num: 4, dist: '1200M', class: '第3班', status: 'OPEN', time: '14:45' },
    { num: 5, dist: '1800M', class: '第2班', status: 'CLOSING', time: '15:20' },
    { num: 6, dist: '1600M', class: '第2班', status: 'FEATURED', time: '16:00' },
    { num: 7, dist: '1400M', class: '第1班', status: 'OPEN', time: '16:35' },
    { num: 8, dist: '1200M', class: '第2班', status: 'OPEN', time: '17:10' },
  ];

  // Lock Single Winner
  const handleLockWinner = async () => {
    if (isLockingWinner || winnerLocked) return;
    setIsLockingWinner(true);

    setTimeout(async () => {
      const res = await addHorseRacingPrediction(
        `第6场 独赢推演: #${selectedWinner.number} ${selectedWinner.name} (骑师: ${selectedWinner.jockey})`,
        '赛马日独赢推演'
      );
      setWinnerHash(res.hash);
      setIsLockingWinner(false);
      setWinnerLocked(true);

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#00FF66', '#10B981', '#F59E0B'],
      });
    }, 1000);
  };

  // Lock Super 8
  const handleLockSuper8 = async () => {
    if (isLockingSuper8 || super8Locked) return;
    setIsLockingSuper8(true);

    setTimeout(async () => {
      const summary = `Race 6 Super 8: 独赢 #${selectedWinner.number} | Top3 [${p1Horse}, ${p2Horse}, ${p3Horse}] | 骑师战: ${jockeyBattleChoice} | 热门胜: ${favouriteWins} | 档位: ${barrierZone} | 胜距: ${winningMargin} | 最佳骑师: ${topJockeyDay} | 最佳练马师: ${topTrainerDay}`;
      const res = await addHorseRacingPrediction(summary, 'RACE DAY SUPER 8 超级组合');
      setSuper8Hash(res.hash);
      setIsLockingSuper8(false);
      setSuper8Locked(true);

      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#10B981', '#00FF66', '#00E5FF', '#F59E0B'],
      });
    }, 1200);
  };

  const handleShareChallenge = () => {
    showToast('专属挑战卡片链接已复制到剪贴板！可发至微信/WhatsApp/Telegram', 'success');
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-16 font-sans">
      
      {/* Top Breadcrumb & Demo Data Notice */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 uppercase">
            🔥 TRENDING SPORTS // 热门体育预测
          </span>
          <span className="text-xs font-mono text-metal-300">
            HONG KONG HORSE RACING
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="px-2.5 py-0.5 rounded bg-surface-200 border border-white/10 text-metal-400">
            公共数据参考：香港赛马公开赛果 (HK Racing Public Reference)
          </span>
          <span className="px-2 py-0.5 rounded bg-cyber-amber/20 text-cyber-amber border border-cyber-amber/40 font-bold">
            DEMO DATA // 演示数据
          </span>
        </div>
      </div>

      {/* Hero Visual Section with Night Racetrack Banner */}
      <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-500/50 shadow-[0_0_80px_rgba(16,185,129,0.25)] group">
        
        {/* Background Graphic */}
        <div className="h-72 sm:h-96 w-full relative overflow-hidden bg-surface-200">
          <img 
            src="/images/hk_racing_banner.jpg" 
            alt="Hong Kong Race Day" 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06080B] via-[#06080B]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06080B] via-[#06080B]/40 to-transparent" />
        </div>

        {/* Floating Overlay Content */}
        <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between">
          
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Venue Toggle */}
            <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md p-1 rounded-2xl border border-white/15 font-mono text-xs">
              <button
                onClick={() => setSelectedVenue('SHA_TIN')}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                  selectedVenue === 'SHA_TIN' ? 'bg-emerald-500 text-black shadow-sm' : 'text-metal-300 hover:text-white'
                }`}
              >
                🏟️ 沙田日赛 (SHA TIN)
              </button>
              <button
                onClick={() => setSelectedVenue('HAPPY_VALLEY')}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                  selectedVenue === 'HAPPY_VALLEY' ? 'bg-emerald-500 text-black shadow-sm' : 'text-metal-300 hover:text-white'
                }`}
              >
                🌃 跑马地夜赛 (HAPPY VALLEY)
              </button>
            </div>

            {/* Live State Switcher Simulator */}
            <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 font-mono text-xs">
              <span className="text-metal-400 text-[10px] uppercase">演示状态：</span>
              {(['UPCOMING', 'LIVE', 'RESULTS'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setGameState(s)}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    gameState === s ? 'bg-lime-400 text-black' : 'text-metal-400 hover:text-white'
                  }`}
                >
                  {s === 'UPCOMING' ? '开放预测' : s === 'LIVE' ? '开赛封存' : '已揭晓赛果'}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest block">
                WHO TAKES THE NEXT RACE? // 谁将问鼎下一场速度王者？
              </span>
              <h2 className="font-display font-black text-3xl sm:text-6xl text-white tracking-tight drop-shadow-2xl">
                香港赛马日推演 · 第 6 场焦点赛
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-metal-200">
              <span className="flex items-center gap-1 text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                <Clock className="w-3.5 h-3.5" /> 封存倒计时：12 : 48
              </span>
              <span>• 参赛马匹：8 匹</span>
              <span>• 参与玩家：18,420 人</span>
              <span>• 链上锁票：42,884 笔</span>
              <span className="text-lime-400 font-bold">• 您的 Racing IQ: {user.racingIQ} (全港 #{user.racingRankShaTin})</span>
            </div>
          </div>

        </div>

      </div>

      {/* Race Day Timeline Schedule (Section 21) */}
      <div className="p-4 sm:p-6 rounded-3xl bg-surface-100/90 border border-white/10 backdrop-blur-xl space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <span className="text-metal-400 uppercase tracking-wider font-bold">
            RACE DAY SCHEDULE // 今日赛事进程时间轴
          </span>
          <span className="text-emerald-400 font-bold">全日 8 场系列赛</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {raceTimeline.map((r) => {
            const isSelected = selectedRace === r.num;
            return (
              <button
                key={r.num}
                onClick={() => setSelectedRace(r.num)}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-glow-lime'
                    : 'bg-surface-200/70 border-white/5 text-metal-300 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs text-white">第 {r.num} 场</span>
                  <span className={`text-[8px] font-bold px-1.5 py-0.2 rounded ${
                    r.status === 'FEATURED' ? 'bg-emerald-400 text-black font-black' :
                    r.status === 'COMPLETED' ? 'bg-surface-300 text-metal-400' :
                    r.status === 'CLOSING' ? 'bg-cyber-amber text-black' : 'bg-surface-300 text-white'
                  }`}>
                    {r.status}
                  </span>
                </div>
                <span className="text-[10px] text-metal-400 block">{r.dist} · {r.class}</span>
                <span className="text-[10px] text-metal-300 font-bold block mt-1">{r.time} 开跑</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Prediction Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left 8 Cols: Interactive Race Cards & Multiple Prediction Modes */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Section 06 & 07: Race 6 Winner Selection Cards */}
          <div className="bg-surface-100/90 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-glass-card space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2 font-mono">
              <div>
                <span className="text-[10px] text-emerald-400 uppercase font-bold tracking-widest block">
                  PRIMARY PREDICTION // 主赛事独赢推演
                </span>
                <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                  谁将赢得第 6 场 1600 米头马？ (WHO WINS RACE 6?)
                </h3>
              </div>
              <span className="px-3 py-1 rounded-xl bg-lime-400/15 text-lime-400 border border-lime-400/30 text-xs font-bold w-fit">
                消耗 120 ⚡ 能量
              </span>
            </div>

            {/* 8 Horse Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-mono text-xs">
              {MOCK_HORSE_RUNNERS.map((horse) => {
                const isSelected = selectedWinner.number === horse.number;

                return (
                  <button
                    key={horse.number}
                    disabled={winnerLocked}
                    onClick={() => setSelectedWinner(horse)}
                    className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                      isSelected
                        ? 'bg-surface-200 border-lime-400 shadow-glow-lime scale-[1.02] z-10'
                        : 'bg-surface-200/70 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span 
                          className="w-7 h-7 rounded-lg flex items-center justify-center font-mono font-black text-black text-xs shadow-sm"
                          style={{ backgroundColor: horse.silkColor }}
                        >
                          #{horse.number}
                        </span>
                        <div>
                          <span className="font-bold text-white text-sm block">{horse.name}</span>
                          <span className="text-[10px] text-metal-400">档位: {horse.barrier} 档</span>
                        </div>
                      </div>

                      {horse.tag && (
                        <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-lime-400/20 text-lime-400 border border-lime-400/30">
                          {horse.tag}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1 text-[11px] text-metal-300 py-1">
                      <div className="flex justify-between">
                        <span>骑师: {horse.jockey}</span>
                        <span>练马师: {horse.trainer}</span>
                      </div>
                      <div className="flex justify-between text-[10px] text-metal-400">
                        <span>近战纪录: {horse.form}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] text-metal-400">全网置信度：</span>
                      <span className="text-emerald-400 font-black text-xs">
                        {horse.communityPickRate}%
                      </span>
                    </div>

                    {isSelected && (
                      <div className="absolute top-2 right-2">
                        <CheckCircle2 className="w-4 h-4 text-lime-400" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Lock Single Winner Action Bar */}
            <div className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
              <div>
                <span className="text-metal-400 text-[10px] block">当前选定独赢：</span>
                <span className="text-lime-400 font-bold text-sm">
                  #{selectedWinner.number} {selectedWinner.name} ({selectedWinner.jockey})
                </span>
                <span className="text-[10px] text-metal-400 block mt-0.5">
                  命中奖励：+350 XP · Racing IQ +12 · 赛季积分 +100
                </span>
              </div>

              {!winnerLocked ? (
                <button
                  onClick={handleLockWinner}
                  disabled={isLockingWinner}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-glow-lime"
                >
                  {isLockingWinner ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin" />
                      <span>正在链上盖戳封存...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>锁定独赢推演 (LOCK PREDICTION)</span>
                    </>
                  )}
                </button>
              ) : (
                <div className="px-4 py-2 rounded-xl bg-lime-400/20 text-lime-400 border border-lime-400/40 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>独赢已封存 ✓ (HR-260822-R6-00491)</span>
                </div>
              )}
            </div>

          </div>

          {/* Section 08: BUILD YOUR TOP 3 */}
          <div className="bg-surface-100/90 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-glass-card space-y-6 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-[10px] text-emerald-400 uppercase font-bold tracking-widest block">
                  POSITION TRIO // 前三名次组合
                </span>
                <h3 className="font-display font-black text-xl text-white">
                  前三席位推演 (BUILD YOUR TOP 3)
                </h3>
              </div>
              <span className="text-[10px] text-metal-400">完美全中获 +1,500 XP</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-surface-200 border border-cyber-amber/40 space-y-2">
                <span className="text-cyber-amber font-bold text-xs block">🥇 冠军 P1</span>
                <select
                  value={p1Horse}
                  disabled={super8Locked}
                  onChange={(e) => setP1Horse(Number(e.target.value))}
                  className="w-full bg-surface-100 border border-white/10 rounded-xl p-2 text-white font-bold focus:outline-none"
                >
                  {MOCK_HORSE_RUNNERS.map((h) => (
                    <option key={h.number} value={h.number}>#{h.number} {h.name.split(' ')[0]}</option>
                  ))}
                </select>
              </div>

              <div className="p-4 rounded-2xl bg-surface-200 border border-metal-400/40 space-y-2">
                <span className="text-metal-300 font-bold text-xs block">🥈 亚军 P2</span>
                <select
                  value={p2Horse}
                  disabled={super8Locked}
                  onChange={(e) => setP2Horse(Number(e.target.value))}
                  className="w-full bg-surface-100 border border-white/10 rounded-xl p-2 text-white font-bold focus:outline-none"
                >
                  {MOCK_HORSE_RUNNERS.map((h) => (
                    <option key={h.number} value={h.number}>#{h.number} {h.name.split(' ')[0]}</option>
                  ))}
                </select>
              </div>

              <div className="p-4 rounded-2xl bg-surface-200 border border-cyber-amber/40 space-y-2">
                <span className="text-cyber-amber font-bold text-xs block">🥉 季军 P3</span>
                <select
                  value={p3Horse}
                  disabled={super8Locked}
                  onChange={(e) => setP3Horse(Number(e.target.value))}
                  className="w-full bg-surface-100 border border-white/10 rounded-xl p-2 text-white font-bold focus:outline-none"
                >
                  {MOCK_HORSE_RUNNERS.map((h) => (
                    <option key={h.number} value={h.number}>#{h.number} {h.name.split(' ')[0]}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] text-metal-300 pt-2 border-t border-white/5">
              <div>• 完美全中顺序：<strong>+1500 XP</strong></div>
              <div>• 3 匹全中错序：<strong>+900 XP</strong></div>
              <div>• 命中 2 席：<strong>+500 XP</strong></div>
              <div>• 命中 1 席：<strong>+200 XP</strong></div>
            </div>
          </div>

          {/* Section 09 & 10: Jockey Battle & Trainer Battle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
            
            {/* Jockey Battle */}
            <div className="p-6 rounded-3xl bg-surface-100/90 border border-white/15 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="font-bold text-white text-sm">骑师直接对抗 (JOCKEY BATTLE)</span>
                <span className="text-emerald-400 font-bold">+150 XP</span>
              </div>
              <span className="text-metal-300 text-[11px] block">谁将在第 6 场获得更佳名次？</span>

              <div className="grid grid-cols-2 gap-2">
                <button
                  disabled={super8Locked}
                  onClick={() => setJockeyBattleChoice('PURTON')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    jockeyBattleChoice === 'PURTON' ? 'bg-emerald-500 text-black font-black' : 'bg-surface-200 text-metal-300 border-white/5'
                  }`}
                >
                  <span className="text-xs block">潘顿 (Z. Purton)</span>
                  <span className="text-[9px] opacity-80">策骑 #4 金牌王牌</span>
                  <span className="text-[9px] block mt-1">62% 玩家支持</span>
                </button>

                <button
                  disabled={super8Locked}
                  onClick={() => setJockeyBattleChoice('MOREIRA')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    jockeyBattleChoice === 'MOREIRA' ? 'bg-emerald-500 text-black font-black' : 'bg-surface-200 text-metal-300 border-white/5'
                  }`}
                >
                  <span className="text-xs block">莫雷拉 (J. Moreira)</span>
                  <span className="text-[9px] opacity-80">策骑 #1 银色风暴</span>
                  <span className="text-[9px] block mt-1">38% 玩家支持</span>
                </button>
              </div>
            </div>

            {/* Trainer Battle */}
            <div className="p-6 rounded-3xl bg-surface-100/90 border border-white/15 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="font-bold text-white text-sm">练马师战功 (TRAINER BATTLE)</span>
                <span className="text-emerald-400 font-bold">+150 XP</span>
              </div>
              <span className="text-metal-300 text-[11px] block">哪位练马师今日总积分更高？</span>

              <div className="grid grid-cols-2 gap-2">
                <button
                  disabled={super8Locked}
                  onClick={() => setTrainerBattleChoice('HAYES')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    trainerBattleChoice === 'HAYES' ? 'bg-emerald-500 text-black font-black' : 'bg-surface-200 text-metal-300 border-white/5'
                  }`}
                >
                  <span className="text-xs block">大卫希斯 (D. Hayes)</span>
                  <span className="text-[9px] opacity-80">今日出战 6 场</span>
                  <span className="text-[9px] block mt-1">54% 玩家支持</span>
                </button>

                <button
                  disabled={super8Locked}
                  onClick={() => setTrainerBattleChoice('SIZE')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    trainerBattleChoice === 'SIZE' ? 'bg-emerald-500 text-black font-black' : 'bg-surface-200 text-metal-300 border-white/5'
                  }`}
                >
                  <span className="text-xs block">蔡约翰 (J. Size)</span>
                  <span className="text-[9px] opacity-80">今日出战 5 场</span>
                  <span className="text-[9px] block mt-1">46% 玩家支持</span>
                </button>
              </div>
            </div>

          </div>

          {/* Section 11, 12, 13, 14: Race Dynamics (Favourite, Barrier, Margin, Pace) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
            
            {/* 11. Favourite vs Field */}
            <div className="p-6 rounded-3xl bg-surface-100/90 border border-white/15 space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="font-bold text-white">大众大热马能否胜出？</span>
                <span className="text-cyber-amber font-bold">#4 金牌王牌 (31% 支持率)</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {(['YES', 'NO'] as const).map((opt) => (
                  <button
                    key={`fav-${opt}`}
                    disabled={super8Locked}
                    onClick={() => setFavouriteWins(opt)}
                    className={`p-3 rounded-xl border font-bold text-center transition-all ${
                      favouriteWins === opt ? 'bg-cyber-amber text-black font-black' : 'bg-surface-200 text-metal-300 border-white/5'
                    }`}
                  >
                    {opt === 'YES' ? '是 (大热顺利夺冠)' : '否 (冷门黑马逆袭)'}
                  </button>
                ))}
              </div>
            </div>

            {/* 12. Winning Barrier Zone */}
            <div className="p-6 rounded-3xl bg-surface-100/90 border border-white/15 space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="font-bold text-white">头马起跑闸位区间 (BARRIER)</span>
                <span className="text-emerald-400 font-bold">起步闸区</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {(['1-4', '5-8', '9-12', '13+'] as const).map((z) => (
                  <button
                    key={z}
                    disabled={super8Locked}
                    onClick={() => setBarrierZone(z)}
                    className={`p-3 rounded-xl border text-center font-bold transition-all ${
                      barrierZone === z ? 'bg-emerald-500 text-black font-black' : 'bg-surface-200 text-metal-300 border-white/5'
                    }`}
                  >
                    {z} 档
                  </button>
                ))}
              </div>
            </div>

            {/* 13. Winning Margin */}
            <div className="p-6 rounded-3xl bg-surface-100/90 border border-white/15 space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="font-bold text-white">冲线胜出马位差距 (MARGIN)</span>
                <span className="text-lime-400 font-bold">终点线推演</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 text-[10px]">
                {[
                  { key: 'PHOTO', label: '鼻位相片' },
                  { key: 'UNDER_1', label: '< 1 马位' },
                  { key: '1_2', label: '1–2 马位' },
                  { key: '2_4', label: '2–4 马位' },
                  { key: '4_PLUS', label: '4+ 大胜' },
                ].map((m) => (
                  <button
                    key={m.key}
                    disabled={super8Locked}
                    onClick={() => setWinningMargin(m.key as any)}
                    className={`p-2.5 rounded-xl border text-center font-bold transition-all ${
                      winningMargin === m.key ? 'bg-lime-400 text-black' : 'bg-surface-200 text-metal-300 border-white/5'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 14. Race Pace Gauge */}
            <div className="p-6 rounded-3xl bg-surface-100/90 border border-white/15 space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="font-bold text-white">赛事步速研判 (RACE PACE)</span>
                <span className="text-cyber-blue font-bold">遥测步速</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { key: 'SLOW', label: '慢步速' },
                  { key: 'MODERATE', label: '均速' },
                  { key: 'FAST', label: '快步速' },
                  { key: 'VERY_FAST', label: '极快超速' },
                ].map((p) => (
                  <button
                    key={p.key}
                    disabled={super8Locked}
                    onClick={() => setRacePace(p.key as any)}
                    className={`p-3 rounded-xl border text-center font-bold transition-all ${
                      racePace === p.key ? 'bg-cyber-blue text-black font-black' : 'bg-surface-200 text-metal-300 border-white/5'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Section 15 & 16: Top Jockey & Top Trainer of the Day */}
          <div className="p-6 rounded-3xl bg-surface-100/90 border border-white/15 space-y-4 font-mono text-xs">
            <div className="pb-2 border-b border-white/10">
              <span className="text-emerald-400 uppercase font-bold text-[10px] block">RACE DAY OVERALL // 全日综合统治力</span>
              <h4 className="font-bold text-white text-base">今日最佳骑师与练马师预测 (TOP PERFORMER TODAY)</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-surface-200 border border-white/5 space-y-1">
                <span className="text-metal-400 text-[10px] block">全日最佳骑师王：</span>
                <select
                  value={topJockeyDay}
                  disabled={super8Locked}
                  onChange={(e) => setTopJockeyDay(e.target.value)}
                  className="w-full bg-surface-100 border border-white/10 rounded-xl p-2.5 text-white font-bold focus:outline-none"
                >
                  <option value="潘顿 (Z. Purton)">潘顿 (Z. Purton) · 当前积分 36</option>
                  <option value="莫雷拉 (J. Moreira)">莫雷拉 (J. Moreira) · 当前积分 28</option>
                  <option value="田泰安 (K. Teetan)">田泰安 (K. Teetan) · 当前积分 18</option>
                  <option value="何泽尧 (V. Ho)">何泽尧 (V. Ho) · 当前积分 16</option>
                </select>
              </div>

              <div className="p-4 rounded-2xl bg-surface-200 border border-white/5 space-y-1">
                <span className="text-metal-400 text-[10px] block">全日最佳练马师王：</span>
                <select
                  value={topTrainerDay}
                  disabled={super8Locked}
                  onChange={(e) => setTopTrainerDay(e.target.value)}
                  className="w-full bg-surface-100 border border-white/10 rounded-xl p-2.5 text-white font-bold focus:outline-none"
                >
                  <option value="大卫希斯 (D. Hayes)">大卫希斯 (D. Hayes) · 2冠 1亚</option>
                  <option value="蔡约翰 (J. Size)">蔡约翰 (J. Size) · 1冠 2亚</option>
                  <option value="罗富全 (F. Lor)">罗富全 (F. Lor) · 1冠 1季</option>
                  <option value="告东尼 (A. Cruz)">告东尼 (A. Cruz) · 1冠</option>
                </select>
              </div>
            </div>
          </div>

        </div>

        {/* Right 4 Cols: RACE DAY SUPER 8 Card & Racing IQ & Community Intel */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Section 17: RACE DAY SUPER 8 Card */}
          <div className="bg-surface-100/90 border-2 border-emerald-500/50 rounded-3xl p-6 backdrop-blur-xl shadow-[0_0_50px_rgba(16,185,129,0.2)] space-y-5 font-mono text-xs">
            
            <div className="pb-3 border-b border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-black">
                  SIGNATURE GAME // 经典超级卡
                </span>
                <span className="px-2 py-0.5 rounded text-[9px] bg-emerald-500 text-black font-black">
                  8 / 8 已完成
                </span>
              </div>
              <h3 className="font-display font-black text-xl text-white mt-1">
                赛马日 SUPER 8 超级推演卡
              </h3>
            </div>

            <div className="space-y-2.5 text-[11px]">
              <div className="p-2.5 rounded-xl bg-surface-200/80 border border-white/5 flex justify-between">
                <span className="text-metal-400">1. 第6场独赢:</span>
                <span className="text-emerald-400 font-bold">#{selectedWinner.number} {selectedWinner.name.split(' ')[0]}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-200/80 border border-white/5 flex justify-between">
                <span className="text-metal-400">2. 前三席位:</span>
                <span className="text-white font-bold">[{p1Horse}, {p2Horse}, {p3Horse}]</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-200/80 border border-white/5 flex justify-between">
                <span className="text-metal-400">3. 骑师对抗:</span>
                <span className="text-white font-bold">{jockeyBattleChoice}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-200/80 border border-white/5 flex justify-between">
                <span className="text-metal-400">4. 大热夺冠:</span>
                <span className="text-cyber-amber font-bold">{favouriteWins}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-200/80 border border-white/5 flex justify-between">
                <span className="text-metal-400">5. 起步档区:</span>
                <span className="text-white font-bold">{barrierZone} 档</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-200/80 border border-white/5 flex justify-between">
                <span className="text-metal-400">6. 冲线胜距:</span>
                <span className="text-lime-400 font-bold">{winningMargin}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-200/80 border border-white/5 flex justify-between">
                <span className="text-metal-400">7. 最佳骑师:</span>
                <span className="text-white font-bold">{topJockeyDay.split(' ')[0]}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-200/80 border border-white/5 flex justify-between">
                <span className="text-metal-400">8. 最佳练马师:</span>
                <span className="text-white font-bold">{topTrainerDay.split(' ')[0]}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <span className="text-emerald-400 text-[10px] block uppercase font-bold">全中超级奖励</span>
              <span className="text-white font-bold block">+2,500 XP · Racing IQ +35 · 500 赛季积分</span>
            </div>

            {/* Lock SUPER 8 Button */}
            {!super8Locked ? (
              <button
                onClick={handleLockSuper8}
                disabled={isLockingSuper8}
                className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(16,185,129,0.4)]"
              >
                {isLockingSuper8 ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin" />
                    <span>正在链上封存 SUPER 8...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>锁定 SUPER 8 (LOCK PREDICTION)</span>
                  </>
                )}
              </button>
            ) : (
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/50 text-emerald-400 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>SUPER 8 已在区块链封存！</span>
                  </div>
                  <span className="text-[10px] break-all text-metal-300 block">
                    哈希：{super8Hash}
                  </span>
                </div>

                <button
                  onClick={handleShareChallenge}
                  className="w-full py-3 rounded-xl bg-surface-200 hover:bg-surface-300 text-white font-bold flex items-center justify-center gap-2 border border-white/10"
                >
                  <Share2 className="w-4 h-4 text-emerald-400" />
                  <span>生成挑战卡分享给好友 (CHALLENGE)</span>
                </button>
              </div>
            )}

          </div>

          {/* Section 18: HORSE RACING IQ PROFILE */}
          <div className="bg-surface-100/90 border border-white/15 rounded-3xl p-6 backdrop-blur-xl shadow-glass-card space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-[10px] text-emerald-400 uppercase font-bold block">SKILL METRICS</span>
                <h4 className="font-bold text-white text-base">赛马专属技能智商 (RACING IQ)</h4>
              </div>
              <span className="font-mono font-black text-2xl text-emerald-400">
                {user.racingIQ}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2.5 rounded-xl bg-surface-200/80 border border-white/5">
                <span className="text-metal-400 block text-[9px]">独赢准确率</span>
                <span className="font-bold text-white">{user.racingWinAccuracy}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-200/80 border border-white/5">
                <span className="text-metal-400 block text-[9px]">前三命中率</span>
                <span className="font-bold text-emerald-400">{user.racingTop3Accuracy}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-200/80 border border-white/5">
                <span className="text-metal-400 block text-[9px]">骑师对抗胜率</span>
                <span className="font-bold text-cyber-blue">{user.racingJockeyAccuracy}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-200/80 border border-white/5">
                <span className="text-metal-400 block text-[9px]">SUPER 8 达成率</span>
                <span className="font-bold text-lime-400">{user.racingSuper8Accuracy}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex justify-between text-[11px] text-metal-300">
              <span>沙田天梯名次：<strong className="text-white">#{user.racingRankShaTin}</strong></span>
              <span>全球名次：<strong className="text-cyber-blue">#{user.racingRankGlobal}</strong></span>
            </div>
          </div>

          {/* Section 20: Community Intelligence Bar Chart */}
          <div className="bg-surface-100/90 border border-white/15 rounded-3xl p-6 backdrop-blur-xl shadow-glass-card space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="font-bold text-white">群体置信度 (COMMUNITY SELECTION)</span>
              <span className="text-[10px] text-metal-400">非赔率 · 纯支持率</span>
            </div>

            <div className="space-y-2.5">
              {[
                { name: '#4 金牌王牌', rate: 28, label: '👑 大众最看好' },
                { name: '#1 银色风暴', rate: 23, label: '⚡ 实力攻顶' },
                { name: '#7 疾速地平线', rate: 16, label: '🚀 飙升黑马' },
                { name: '#2 夜行侠', rate: 11, label: '🌑 逆袭者' },
                { name: '其余参赛马匹', rate: 22, label: '🎯 均势' },
              ].map((c) => (
                <div key={c.name} className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-white">{c.name} <span className="text-[9px] text-metal-400">({c.label})</span></span>
                    <span className="text-emerald-400 font-bold">{c.rate}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-300 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-lime-400 rounded-full"
                      style={{ width: `${c.rate * 2.5}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Section 25: Badges Showcase */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-400" />
            <h3 className="font-display font-black text-lg text-white">赛马日专属声誉成就勋章 (RACING BADGES)</h3>
          </div>
          <span className="text-emerald-400">已解锁 5 / 8 个</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {badgesList.map((b) => (
            <div
              key={b.name}
              className={`p-3.5 rounded-2xl border text-center space-y-1.5 transition-all ${
                b.unlocked 
                  ? 'bg-surface-200 border-emerald-500/40 text-white shadow-sm' 
                  : 'bg-surface-50 border-white/5 opacity-40 text-metal-400'
              }`}
            >
              <div className="text-2xl">{b.icon}</div>
              <span className="font-bold text-[11px] block truncate">{b.title}</span>
              <span className="text-[9px] block text-metal-400">{b.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 36: STRATEGIC MESSAGE: ONE RACE. MULTIPLE WAYS TO PREDICT */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#091210] via-[#0D1915] to-[#091210] border-2 border-emerald-500/40 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest block">
            SUPER APP PREDICTION ENGINE // 预测引擎无限扩展模型
          </span>
          <h3 className="font-display font-black text-2xl sm:text-4xl text-white">
            一场比赛，无限推演维度。 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-lime-400 to-cyber-blue">
              (ONE RACE. MULTIPLE WAYS TO PREDICT.)
            </span>
          </h3>
          <p className="text-xs sm:text-sm font-mono text-metal-200 leading-relaxed">
            从头马独赢、前三席位、骑师对抗，到档位步速与全日 SUPER 8——同一套去中心化可验证预测协议，完美适配任何具备公开可查结果的真实世界大事件。
          </p>
        </div>

        {/* Telemetry flow strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-mono text-xs">
          <span className="px-3 py-1.5 rounded-xl bg-surface-200 text-white border border-white/10 font-bold">头马独赢</span>
          <span className="text-emerald-400">➔</span>
          <span className="px-3 py-1.5 rounded-xl bg-surface-200 text-white border border-white/10 font-bold">前三席位</span>
          <span className="text-emerald-400">➔</span>
          <span className="px-3 py-1.5 rounded-xl bg-surface-200 text-white border border-white/10 font-bold">骑师对抗</span>
          <span className="text-emerald-400">➔</span>
          <span className="px-3 py-1.5 rounded-xl bg-surface-200 text-white border border-white/10 font-bold">练马师战功</span>
          <span className="text-emerald-400">➔</span>
          <span className="px-3 py-1.5 rounded-xl bg-surface-200 text-white border border-white/10 font-bold">全日 SUPER 8</span>
        </div>

        <div className="text-[11px] font-mono text-metal-400 pt-2 border-t border-white/10">
          The same prediction engine can support any public event with a verifiable result.
        </div>
      </div>

    </div>
  );
};
