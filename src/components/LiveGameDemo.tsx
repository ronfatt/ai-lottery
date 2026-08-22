import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ShieldCheck, Hash, Cpu, Sparkles, RotateCcw, Zap, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

export const LiveGameDemo: React.FC = () => {
  // 49 Numbers
  const numbers = Array.from({ length: 49 }, (_, i) => i + 1);

  // Selected numbers state (max 5)
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([7, 18, 23, 36, 41]);
  
  // Locking flow state
  const [lockStage, setLockStage] = useState<'idle' | 'hashing' | 'timestamping' | 'sealed'>('idle');
  const [generatedHash, setGeneratedHash] = useState<string>('');
  
  // Draw simulation state
  const [isSimulatingDraw, setIsSimulatingDraw] = useState(false);
  const [drawResult, setDrawResult] = useState<number[] | null>(null);
  const [drawOutcome, setDrawOutcome] = useState<{
    matches: number[];
    misses: number[];
    xpGained: number;
    iqGained: number;
    rankDelta: number;
  } | null>(null);

  // Countdown timer simulation
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 16, seconds: 38 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        return { hours: prev.hours > 0 ? prev.hours - 1 : 2, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNumberToggle = (num: number) => {
    if (lockStage !== 'idle') return; // Cannot edit once locked

    if (selectedNumbers.includes(num)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== num));
    } else {
      if (selectedNumbers.length < 5) {
        setSelectedNumbers([...selectedNumbers, num].sort((a, b) => a - b));
      }
    }
  };

  const handleLockPrediction = () => {
    if (selectedNumbers.length !== 5) return;

    setLockStage('hashing');
    
    setTimeout(() => {
      setLockStage('timestamping');
      
      setTimeout(() => {
        // Generate simulated SHA-256 hash
        const mockHash = `0x782C91A${Math.floor(Math.random() * 89999 + 10000)}E921B7C4F`;
        setGeneratedHash(mockHash);
        setLockStage('sealed');
      }, 1000);
    }, 1000);
  };

  const handleSimulateDraw = () => {
    setIsSimulatingDraw(true);
    // Official Winning Numbers for the round
    const winningNumbers = [7, 11, 18, 26, 36, 45];

    setTimeout(() => {
      setDrawResult(winningNumbers);
      const matches = selectedNumbers.filter((n) => winningNumbers.includes(n));
      const misses = selectedNumbers.filter((n) => !winningNumbers.includes(n));
      
      const xp = matches.length * 200;
      const iq = matches.length * 4.5 + 2;
      const rank = matches.length * 108;

      setDrawOutcome({
        matches,
        misses,
        xpGained: xp,
        iqGained: Math.round(iq),
        rankDelta: rank,
      });

      setIsSimulatingDraw(false);

      // Trigger Confetti celebration if hits >= 2
      if (matches.length >= 2) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00FF66', '#00E5FF', '#A855F7', '#FFFFFF'],
        });
      }
    }, 1600);
  };

  const handleResetDemo = () => {
    setLockStage('idle');
    setGeneratedHash('');
    setDrawResult(null);
    setDrawOutcome(null);
    setSelectedNumbers([7, 18, 23, 36, 41]);
  };

  return (
    <section id="live-demo" className="relative py-24 bg-[#070A0F] border-t border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-lime-400/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Master Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/30 text-xs font-mono text-lime-400">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span>核心产品交互式体验区</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            单期公开开奖结果 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-300 to-cyber-blue">
              衍生无穷预测竞技宇宙
            </span>
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            每一期公开开奖都是一个庞大的预测宇宙。请亲自体验下方的 <strong className="text-white">数字猎手 (Number Hunt)</strong> 链上封存与结算流程。
          </p>
        </div>

        {/* Live Simulator Card (Command Center Layout) */}
        <div className="max-w-5xl mx-auto bg-surface-100/90 border border-white/15 rounded-2xl p-4 sm:p-8 backdrop-blur-2xl shadow-glass-card">
          
          {/* Top HUD Status & Countdown */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-surface-200 border border-lime-400/30 flex items-center justify-center font-mono font-black text-lime-400">
                #01
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-lg text-white">玩法一：数字猎手 (Number Hunt)</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20">
                    49 选 5 定向狙击
                  </span>
                </div>
                <p className="text-xs text-metal-300 font-mono">
                  从 01–49 中挑选您认为即将出现的 5 个幸运数字。
                </p>
              </div>
            </div>

            {/* Countdown HUD */}
            <div className="flex items-center gap-4 bg-surface-200/90 px-4 py-2 rounded-xl border border-white/10 self-stretch sm:self-auto justify-between">
              <div>
                <span className="text-[10px] font-mono text-metal-400 block uppercase">当前公开期数</span>
                <span className="text-xs font-mono font-bold text-white">#260822 期</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <span className="text-[10px] font-mono text-metal-400 block uppercase">封存倒计时</span>
                <span className="text-xs font-mono font-bold text-lime-400">
                  {String(timeLeft.hours).padStart(2, '0')} : {String(timeLeft.minutes).padStart(2, '0')} : {String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          {/* Selector Progress & Helper */}
          <div className="flex items-center justify-between py-4 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-metal-300">当前选择状态：</span>
              <span className={`font-bold px-2 py-0.5 rounded ${
                selectedNumbers.length === 5 
                  ? 'bg-lime-400/20 text-lime-400 border border-lime-400/40' 
                  : 'bg-surface-200 text-metal-200'
              }`}>
                已选择 {selectedNumbers.length} / 5 个号码
              </span>
            </div>

            <div className="flex items-center gap-2">
              {lockStage !== 'idle' && (
                <button
                  onClick={handleResetDemo}
                  className="text-[11px] text-metal-300 hover:text-white flex items-center gap-1 hover:underline"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>重置演示</span>
                </button>
              )}
            </div>
          </div>

          {/* 49 Circular Tactile Buttons */}
          <div className="grid grid-cols-7 sm:grid-cols-7 md:grid-cols-7 gap-2 sm:gap-3 p-3 sm:p-5 rounded-2xl bg-surface-50/90 border border-white/5 my-2">
            {numbers.map((num) => {
              const isSelected = selectedNumbers.includes(num);
              const numStr = num < 10 ? `0${num}` : `${num}`;
              const isHit = drawResult ? drawResult.includes(num) && isSelected : false;
              const isMiss = drawResult ? !drawResult.includes(num) && isSelected : false;

              return (
                <button
                  key={num}
                  disabled={lockStage !== 'idle'}
                  onClick={() => handleNumberToggle(num)}
                  className={`relative aspect-square rounded-xl flex items-center justify-center font-mono font-bold text-xs sm:text-base md:text-lg transition-all duration-200 ${
                    isHit
                      ? 'bg-lime-400 text-black border-2 border-white shadow-[0_0_25px_#00FF66] scale-105 font-black z-20'
                      : isMiss
                      ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                      : isSelected
                      ? 'bg-lime-400 text-black border border-lime-300 shadow-glow-lime font-black scale-105 z-10'
                      : 'bg-surface-200/80 text-metal-300 hover:bg-surface-300 hover:text-white border border-white/5 hover:border-white/20'
                  } ${lockStage !== 'idle' ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <span>{numStr}</span>

                  {/* Tiny hit/miss badge */}
                  {isHit && (
                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-black text-lime-400 text-[9px] flex items-center justify-center font-black border border-lime-400">
                      ✓
                    </span>
                  )}
                  {isMiss && (
                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-red-900 text-red-300 text-[9px] flex items-center justify-center font-black border border-red-500">
                      ✕
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Action & Locking Pipeline */}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left: Lock Trigger / Verification Status */}
            <div className="w-full md:w-auto">
              {lockStage === 'idle' ? (
                <button
                  onClick={handleLockPrediction}
                  disabled={selectedNumbers.length !== 5}
                  className={`w-full md:w-auto px-8 py-4 rounded-xl font-mono text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    selectedNumbers.length === 5
                      ? 'bg-lime-400 hover:bg-lime-300 text-black shadow-glow-lime-lg cursor-pointer'
                      : 'bg-surface-300 text-metal-400 cursor-not-allowed border border-white/5'
                  }`}
                >
                  <Lock className="w-4 h-4" />
                  <span>锁定我的预测 (5/5 已选满)</span>
                </button>
              ) : lockStage === 'hashing' ? (
                <div className="px-6 py-3.5 rounded-xl bg-surface-200 border border-lime-400/30 text-lime-400 font-mono text-xs flex items-center gap-3">
                  <Cpu className="w-4 h-4 animate-spin text-lime-400" />
                  <span>第 01 步：正在生成 SHA-256 预测哈希值...</span>
                </div>
              ) : lockStage === 'timestamping' ? (
                <div className="px-6 py-3.5 rounded-xl bg-surface-200 border border-cyber-blue/40 text-cyber-blue font-mono text-xs flex items-center gap-3">
                  <Hash className="w-4 h-4 animate-pulse text-cyber-blue" />
                  <span>第 02 步：正在区块链上链时间戳盖戳 (区块 #28482913)...</span>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <div className="px-4 py-2 rounded-xl bg-lime-400/15 border border-lime-400/40 text-lime-400 font-mono text-xs flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-lime-400" />
                    <span className="font-bold">✓ 预测已完成链上封存与不可篡改锁定</span>
                  </div>
                  <div className="text-[10px] font-mono text-metal-300">
                    哈希存证：<span className="text-white font-bold">{generatedHash}</span>
                  </div>
                  <div className="text-[10px] font-mono text-lime-400/80">
                    • 没有任何管理员或平台特权能够修改您的预测记录
                  </div>
                </div>
              )}
            </div>

            {/* Right: Public Draw Simulator Action */}
            <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {lockStage === 'sealed' && !drawResult && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={handleSimulateDraw}
                  disabled={isSimulatingDraw}
                  className="px-6 py-3.5 rounded-xl bg-cyber-blue hover:bg-cyber-blue/90 text-black font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(0,229,255,0.4)] flex items-center justify-center gap-2"
                >
                  {isSimulatingDraw ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin" />
                      <span>正在通过预言机拉取并验证开奖...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      <span>模拟公开开奖 #260822 期</span>
                    </>
                  )}
                </motion.button>
              )}
            </div>

          </div>

          {/* Victory & Feedback Banner (When draw is resolved) */}
          <AnimatePresence>
            {drawOutcome && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-lime-400/20 via-surface-200 to-surface-200 border-2 border-lime-400 shadow-[0_0_40px_rgba(0,255,102,0.3)] relative overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-6 h-6 text-lime-400" />
                      <span className="font-display font-black text-2xl sm:text-3xl text-white">
                        精准命中 {drawOutcome.matches.length} / 5 个号码
                      </span>
                      <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-lime-400 text-black">
                        链上数学证明已确认
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-mono text-metal-200">
                      官方公开开奖号码：<strong className="text-white">[07 · 11 · 18 · 26 · 36 · 45]</strong>
                    </p>
                  </div>

                  {/* Gamified Rewards Telemetry */}
                  <div className="grid grid-cols-3 gap-4 w-full lg:w-auto text-center">
                    <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                      <div className="text-[10px] font-mono text-metal-400 uppercase">赛季经验值</div>
                      <div className="text-lg font-mono font-black text-lime-400">+{drawOutcome.xpGained} XP</div>
                    </div>

                    <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                      <div className="text-[10px] font-mono text-metal-400 uppercase">预测智商 (IQ)</div>
                      <div className="text-lg font-mono font-black text-cyber-blue">+{drawOutcome.iqGained}</div>
                    </div>

                    <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                      <div className="text-[10px] font-mono text-metal-400 uppercase">全球天梯排名</div>
                      <div className="text-lg font-mono font-black text-white flex items-center justify-center gap-1">
                        <span>↑ 跃升 {drawOutcome.rankDelta} 名</span>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
