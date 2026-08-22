import React, { useState } from 'react';
import { useDemo } from '../../../context/DemoContext';
import { 
  Target, 
  Lock, 
  Sparkles, 
  Zap, 
  RotateCcw, 
  CheckCircle2, 
  ShieldCheck, 
  Layers,
  ChevronRight,
  Flame,
  Scale
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const PredictView: React.FC = () => {
  const { user, addNewPrediction } = useDemo();
  const [activeTab, setActiveTab] = useState<'NUMBER HUNT' | 'HOT NUMBER' | 'NUMBER ZONE' | 'ODD / EVEN' | 'HIGH / LOW' | 'TOTAL SUM' | 'PATTERN'>('NUMBER HUNT');

  // Selected numbers (5 numbers for Number Hunt)
  const [selectedNums, setSelectedNums] = useState<number[]>([7, 18, 23, 36, 41]);
  const [hotNumber, setHotNumber] = useState<number>(27);
  const [selectedZone, setSelectedZone] = useState<string>('21-30');
  const [selectedOddEven, setSelectedOddEven] = useState<string>('3 : 3');
  const [selectedHighLow, setSelectedHighLow] = useState<string>('4 高 / 2 低');
  const [selectedSum, setSelectedSum] = useState<string>('100–149');

  const [isLocking, setIsLocking] = useState(false);
  const [lockedSuccess, setLockedSuccess] = useState(false);
  const [sealedHash, setSealedHash] = useState<string>('');

  const handleToggleNum = (n: number) => {
    if (lockedSuccess) return;
    if (selectedNums.includes(n)) {
      setSelectedNums(selectedNums.filter((x) => x !== n));
    } else {
      if (selectedNums.length < 5) {
        setSelectedNums([...selectedNums, n].sort((a, b) => a - b));
      }
    }
  };

  const handleLockPrediction = async () => {
    if (isLocking || lockedSuccess) return;
    setIsLocking(true);

    setTimeout(async () => {
      const modeName = activeTab === 'NUMBER HUNT' 
        ? '数字猎手 (5码)' 
        : activeTab === 'HOT NUMBER' 
        ? `焦点单码 (#${hotNumber})` 
        : `${activeTab} 预测`;

      const nums = activeTab === 'NUMBER HUNT' ? selectedNums : [hotNumber, 11, 18, 26, 36];
      const res = await addNewPrediction(nums, modeName);
      setSealedHash(res.hash);
      setIsLocking(false);
      setLockedSuccess(true);

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#00FF66', '#00E5FF', '#A855F7'],
      });
    }, 1200);
  };

  const handleReset = () => {
    setLockedSuccess(false);
    setSealedHash('');
    setSelectedNums([7, 18, 23, 36, 41]);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-lime-400 font-bold mb-1">
            <Target className="w-4 h-4" />
            <span>MAKE YOUR CALL // 发起预测</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
            选择预测模式与号码
          </h2>
          <p className="text-xs font-mono text-metal-300 mt-1">
            当前期数 #260822 · 消耗游戏能量发起挑战 · 零现金风险
          </p>
        </div>

        {/* Prediction Energy Widget */}
        <div className="p-3.5 rounded-2xl bg-surface-100 border border-cyber-blue/40 flex items-center gap-3 font-mono text-xs shadow-sm">
          <div className="w-9 h-9 rounded-xl bg-cyber-blue/20 flex items-center justify-center text-cyber-blue text-base font-black">
            ⚡
          </div>
          <div>
            <span className="text-[10px] text-metal-400 block uppercase">可用预测能量</span>
            <span className="font-bold text-white text-sm">{user.predictionEnergy} / {user.maxEnergy} 能量</span>
          </div>
        </div>
      </div>

      {/* 7 Game Mode Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none">
        {(['NUMBER HUNT', 'HOT NUMBER', 'NUMBER ZONE', 'ODD / EVEN', 'HIGH / LOW', 'TOTAL SUM', 'PATTERN'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setLockedSuccess(false);
            }}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all flex items-center gap-2 flex-shrink-0 ${
              activeTab === tab
                ? 'bg-lime-400 text-black font-bold shadow-glow-lime'
                : 'bg-surface-100 text-metal-300 hover:text-white border border-white/10'
            }`}
          >
            <span>{tab}</span>
          </button>
        ))}
      </div>

      {/* Main Predictor Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left 8 Cols: Interactive Picker Area */}
        <div className="lg:col-span-8 bg-surface-100/90 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-glass-card space-y-6">
          
          {activeTab === 'NUMBER HUNT' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                <span className="text-metal-300">从 01–49 中任选 5 个号码：</span>
                <span className={`font-bold px-2 py-0.5 rounded ${
                  selectedNums.length === 5 ? 'bg-lime-400/20 text-lime-400 border border-lime-400/40' : 'bg-surface-200 text-metal-400'
                }`}>
                  已选择 {selectedNums.length} / 5
                </span>
              </div>

              {/* 49 Grid */}
              <div className="grid grid-cols-7 gap-2 p-4 rounded-2xl bg-surface-50 border border-white/5">
                {Array.from({ length: 49 }, (_, i) => i + 1).map((n) => {
                  const isSel = selectedNums.includes(n);
                  const nStr = n < 10 ? `0${n}` : `${n}`;

                  return (
                    <button
                      key={n}
                      disabled={lockedSuccess}
                      onClick={() => handleToggleNum(n)}
                      className={`aspect-square rounded-xl font-mono font-bold text-xs sm:text-base flex items-center justify-center transition-all ${
                        isSel
                          ? 'bg-lime-400 text-black border border-lime-300 shadow-glow-lime scale-105 font-black z-10'
                          : 'bg-surface-200 text-metal-300 hover:bg-surface-300 hover:text-white border border-white/5'
                      }`}
                    >
                      {nStr}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'HOT NUMBER' && (
            <div className="space-y-6 text-center py-6">
              <span className="text-xs font-mono text-metal-400 uppercase tracking-widest block">
                选择唯一的单码高信念呼叫
              </span>
              <div className="inline-block p-8 rounded-3xl bg-surface-200 border-2 border-lime-400 shadow-glow-lime-lg">
                <span className="font-mono font-black text-6xl text-lime-400 block my-2">
                  #{hotNumber}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-lime-400/20 text-lime-400 border border-lime-400/40">
                  全网置信度 62% · 连胜加成 1.8x
                </span>
              </div>

              <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                {[7, 18, 23, 27, 36, 41, 45].map((num) => (
                  <button
                    key={num}
                    onClick={() => setHotNumber(num)}
                    className={`px-3.5 py-2 rounded-xl font-mono text-xs font-bold transition-all ${
                      hotNumber === num ? 'bg-lime-400 text-black shadow-sm' : 'bg-surface-200 text-metal-300'
                    }`}
                  >
                    #{num}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'NUMBER ZONE' && (
            <div className="space-y-4">
              <span className="text-xs font-mono text-metal-300 block">选择号码最密集出现的区间：</span>
              <div className="grid grid-cols-5 gap-3">
                {['01-10', '11-20', '21-30', '31-40', '41-49'].map((z) => (
                  <button
                    key={z}
                    onClick={() => setSelectedZone(z)}
                    className={`p-4 rounded-xl border text-center font-mono text-xs transition-all ${
                      selectedZone === z 
                        ? 'bg-cyber-violet/20 border-cyber-violet text-white shadow-glow-violet font-bold' 
                        : 'bg-surface-200 text-metal-300 border-white/5'
                    }`}
                  >
                    {z}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ODD / EVEN' && (
            <div className="space-y-4">
              <span className="text-xs font-mono text-metal-300 block">选择单双奇偶比例：</span>
              <div className="grid grid-cols-4 gap-3">
                {['3 : 3', '4 : 2', '2 : 4', '5 : 1'].map((r) => (
                  <button
                    key={r}
                    onClick={() => setSelectedOddEven(r)}
                    className={`p-4 rounded-xl border text-center font-mono text-xs transition-all ${
                      selectedOddEven === r 
                        ? 'bg-lime-400 text-black font-bold shadow-glow-lime' 
                        : 'bg-surface-200 text-metal-300 border-white/5'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'HIGH / LOW' && (
            <div className="space-y-4">
              <span className="text-xs font-mono text-metal-300 block">选择高低半区比例：</span>
              <div className="grid grid-cols-3 gap-3">
                {['4 高 / 2 低', '3 高 / 3 低', '2 高 / 4 低'].map((hl) => (
                  <button
                    key={hl}
                    onClick={() => setSelectedHighLow(hl)}
                    className={`p-4 rounded-xl border text-center font-mono text-xs transition-all ${
                      selectedHighLow === hl 
                        ? 'bg-cyber-blue text-black font-bold shadow-glow-blue' 
                        : 'bg-surface-200 text-metal-300 border-white/5'
                    }`}
                  >
                    {hl}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'TOTAL SUM' && (
            <div className="space-y-4">
              <span className="text-xs font-mono text-metal-300 block">选择六码总和区间：</span>
              <div className="grid grid-cols-5 gap-2">
                {['< 100', '100–149', '150–199', '200–249', '250+'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSum(s)}
                    className={`p-3 rounded-xl border text-center font-mono text-xs transition-all ${
                      selectedSum === s 
                        ? 'bg-cyber-blue text-black font-bold shadow-glow-blue' 
                        : 'bg-surface-200 text-metal-300 border-white/5'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'PATTERN' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-surface-200 border border-white/5 flex items-center justify-between">
                <span>连续数字是否存在？</span>
                <span className="text-lime-400 font-bold">是 (YES)</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-200 border border-white/5 flex items-center justify-between">
                <span>相同尾数是否存在？</span>
                <span className="text-lime-400 font-bold">是 (YES)</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-200 border border-white/5 flex items-center justify-between">
                <span>小于 10 的号码个数：</span>
                <span className="text-cyber-blue font-bold">2 个</span>
              </div>
            </div>
          )}

        </div>

        {/* Right 4 Cols: Prediction Seal Inspector Card */}
        <div className="lg:col-span-4 bg-surface-100/90 border border-white/15 rounded-3xl p-6 backdrop-blur-xl shadow-glass-card space-y-6">
          
          <div className="pb-4 border-b border-white/10">
            <span className="text-[10px] font-mono text-metal-400 uppercase tracking-wider block">
              PREDICTION RECEIPT // 预测锁定确认
            </span>
            <h3 className="font-display font-black text-xl text-white mt-1">
              {activeTab}
            </h3>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div className="p-3 rounded-xl bg-surface-200/80 border border-white/5 space-y-1">
              <span className="text-metal-400 text-[10px] block uppercase">锁定号码组合</span>
              <span className="font-bold text-lime-400 text-sm">
                [{selectedNums.map((n) => (n < 10 ? `0${n}` : n)).join(' · ')}]
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2.5 rounded-xl bg-surface-200/80 border border-white/5">
                <span className="text-metal-400 block">所需能量:</span>
                <span className="text-white font-bold">100 ⚡ (零现金)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-200/80 border border-white/5">
                <span className="text-metal-400 block">潜在奖励:</span>
                <span className="text-lime-400 font-bold">+600 XP 经验</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-surface-200/80 border border-white/5">
              <span className="text-metal-400 text-[10px] block uppercase">Prediction IQ 预估影响</span>
              <span className="text-cyber-blue font-bold">最高提升 +14 IQ</span>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="space-y-3 pt-2">
            {!lockedSuccess ? (
              <button
                onClick={handleLockPrediction}
                disabled={isLocking || (activeTab === 'NUMBER HUNT' && selectedNums.length !== 5)}
                className="w-full py-4 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-mono text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-glow-lime"
              >
                {isLocking ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin" />
                    <span>正在链上盖戳封存...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>确认锁定预测 (LOCK PREDICTION)</span>
                  </>
                )}
              </button>
            ) : (
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-lime-400/15 border border-lime-400/50 text-lime-400 font-mono text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>预测已成功锁定并上链封存！</span>
                  </div>
                  <span className="text-[10px] break-all text-metal-300 block">
                    存证哈希：{sealedHash}
                  </span>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full py-2.5 rounded-xl bg-surface-200 hover:bg-surface-300 text-metal-200 hover:text-white font-mono text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>发起另一笔预测</span>
                </button>
              </div>
            )}
          </div>

          <div className="p-3 rounded-xl bg-surface-50 border border-white/5 text-[10px] font-mono text-metal-400">
            • 开奖前任何人都无法篡改或撤回已盖戳的预测记录。
          </div>

        </div>

      </div>

    </div>
  );
};
