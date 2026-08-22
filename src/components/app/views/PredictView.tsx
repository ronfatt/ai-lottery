import React, { useState } from 'react';
import { useDemo } from '../../../context/DemoContext';
import { 
  Target, 
  Lock, 
  Sparkles, 
  Zap, 
  RotateCcw, 
  CheckCircle2, 
  Flame, 
  Trophy, 
  Activity, 
  Layers,
  Award,
  Filter
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const PredictView: React.FC = () => {
  const { user, addNewPrediction } = useDemo();
  const [activeTab, setActiveTab] = useState<'NUMBER HUNT' | 'SUPER CALL' | 'HOT NUMBER' | 'NUMBER ZONE' | 'ODD / EVEN' | 'HIGH / LOW' | 'TOTAL SUM' | 'PATTERN' | 'HEATMAP'>('NUMBER HUNT');

  // Selected numbers (5 numbers for Number Hunt)
  const [selectedNums, setSelectedNums] = useState<number[]>([7, 18, 23, 36, 41]);
  const [hotNumber, setHotNumber] = useState<number>(27);
  const [selectedZone, setSelectedZone] = useState<string>('21-30');
  const [selectedOddEven, setSelectedOddEven] = useState<string>('3 : 3');
  const [selectedHighLow, setSelectedHighLow] = useState<string>('4 高 / 2 低');
  const [selectedSum, setSelectedSum] = useState<string>('100–149');
  const [hasConsecutive, setHasConsecutive] = useState<'YES' | 'NO'>('YES');
  const [hasRepeatedEnding, setHasRepeatedEnding] = useState<'YES' | 'NO'>('YES');

  // Heatmap filter
  const [heatmapFilter, setHeatmapFilter] = useState<'GLOBAL' | 'MALAYSIA' | 'FRIENDS' | 'COMMUNITY'>('GLOBAL');

  const [isLocking, setIsLocking] = useState(false);
  const [lockedSuccess, setLockedSuccess] = useState(false);
  const [sealedHash, setSealedHash] = useState<string>('');
  const [showSimulatedResult, setShowSimulatedResult] = useState(false);

  // Community selection rate mock
  const communityPicks: { [key: number]: number } = {
    18: 74, 27: 62, 8: 51, 36: 46, 7: 44, 23: 42, 41: 39, 11: 38, 49: 35, 14: 33,
    33: 31, 26: 30, 45: 29, 3: 28, 9: 27, 28: 26, 16: 25, 42: 24, 38: 23, 5: 22,
  };

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
      const modeName = activeTab === 'SUPER CALL' 
        ? 'ORACLE 49 SUPER CALL (8合1)' 
        : activeTab === 'NUMBER HUNT' 
        ? '数字猎手 (5码)' 
        : activeTab === 'HOT NUMBER' 
        ? `焦点单码 (#${hotNumber})` 
        : `${activeTab} 预测`;

      const nums = selectedNums;
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
    setShowSimulatedResult(false);
    setSealedHash('');
    setSelectedNums([7, 18, 23, 36, 41]);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-lime-400/50 backdrop-blur-xl shadow-glass-card space-y-3">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-lime-400 font-bold mb-1">
              <span className="px-2 py-0.5 rounded text-[10px] font-black bg-lime-400 text-black uppercase">
                🎯 MAIN CORE GAME // 核心基本盘
              </span>
              <span>ORACLE 49 NUMBER PREDICTION</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
              01–49 公开数字预测与推演
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-lime-400" />
              <span className="text-xs font-mono text-lime-400 font-bold">
                公共数据参考：香港六合彩公开摇号 (Hong Kong Mark Six Public Result Reference)
              </span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-surface-200/80 border border-white/10 text-right font-mono text-xs">
            <span className="text-metal-400 text-[10px] block">当前开奖期数 #260822</span>
            <span className="text-lime-400 font-black text-sm">封存倒计时：02 : 16 : 38</span>
          </div>
        </div>

        <p className="text-xs font-mono text-metal-300">
          平台自身不产生也不改变开奖结果。所有预测以官方公开直播摇出的 <strong>6 个正码 + 1 个特别号码</strong> 作为客观不可篡改的预言机核验源。
        </p>
      </div>

      {/* Game Mode Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none font-mono text-xs">
        {[
          { key: 'NUMBER HUNT', label: '01 数字猎手 (5码)' },
          { key: 'SUPER CALL', label: '🌟 SUPER CALL (8合1超级卡)' },
          { key: 'HOT NUMBER', label: '02 焦点单码' },
          { key: 'NUMBER ZONE', label: '03 数字领地' },
          { key: 'ODD / EVEN', label: '04 奇偶天平' },
          { key: 'HIGH / LOW', label: '05 高低半区' },
          { key: 'TOTAL SUM', label: '06 六码总和' },
          { key: 'PATTERN', label: '07 规律形态' },
          { key: 'HEATMAP', label: '📊 群体热力图 (Heatmap)' },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => {
              setActiveTab(t.key as any);
              setLockedSuccess(false);
              setShowSimulatedResult(false);
            }}
            className={`px-4 py-2.5 rounded-xl whitespace-nowrap transition-all font-bold flex-shrink-0 ${
              activeTab === t.key
                ? 'bg-lime-400 text-black shadow-glow-lime'
                : 'bg-surface-100 text-metal-300 hover:text-white border border-white/10'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Main Predictor Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left 8 Cols: Interactive Picker Area */}
        <div className="lg:col-span-8 bg-surface-100/90 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-glass-card space-y-6">
          
          {/* Mode 1: Number Hunt 7x7 Grid */}
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

              {/* 7x7 49 Grid */}
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

          {/* Mode: SUPER CALL (8 in 1 Combo Card) */}
          {activeTab === 'SUPER CALL' && (
            <div className="space-y-6 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-lime-400/10 border border-lime-400/30 flex items-center justify-between">
                <div>
                  <span className="text-lime-400 font-black text-sm block">ORACLE 49 SUPER CALL 超级推演卡</span>
                  <span className="text-metal-300 text-[11px]">8 维推演一体化组合 · 达成 6 项以上获 3.0x 巨额经验与成就勋章</span>
                </div>
                <span className="px-3 py-1 rounded-xl bg-lime-400 text-black font-black text-xs">
                  8 / 8 已完成
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-surface-200 border border-white/5 space-y-1">
                  <span className="text-metal-400 text-[10px] block">1. 核心 5 码选择</span>
                  <span className="text-lime-400 font-bold text-sm">[{selectedNums.map((n) => (n < 10 ? `0${n}` : n)).join(' · ')}]</span>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-200 border border-white/5 space-y-1">
                  <span className="text-metal-400 text-[10px] block">2. 焦点单码 (Hot Number)</span>
                  <span className="text-lime-400 font-bold text-sm">#{hotNumber} (高置信度)</span>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-200 border border-white/5 space-y-1">
                  <span className="text-metal-400 text-[10px] block">3. 奇偶比例 (Odd/Even)</span>
                  <span className="text-white font-bold">{selectedOddEven} 均势</span>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-200 border border-white/5 space-y-1">
                  <span className="text-metal-400 text-[10px] block">4. 高低半区 (High/Low)</span>
                  <span className="text-white font-bold">{selectedHighLow}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-200 border border-white/5 space-y-1">
                  <span className="text-metal-400 text-[10px] block">5. 六码总和区间</span>
                  <span className="text-cyber-blue font-bold">{selectedSum}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-200 border border-white/5 space-y-1">
                  <span className="text-metal-400 text-[10px] block">6. 最密集区间</span>
                  <span className="text-cyber-violet font-bold">{selectedZone} 区间</span>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-200 border border-white/5 space-y-1">
                  <span className="text-metal-400 text-[10px] block">7. 连号出现预判</span>
                  <span className="text-lime-400 font-bold">是 (YES)</span>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-200 border border-white/5 space-y-1">
                  <span className="text-metal-400 text-[10px] block">8. 相同尾数预判</span>
                  <span className="text-lime-400 font-bold">是 (YES)</span>
                </div>
              </div>
            </div>
          )}

          {/* Mode: Heatmap */}
          {activeTab === 'HEATMAP' && (
            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-metal-300">49 码全网群体热力置信度分布 (COMMUNITY SELECTION RATE)：</span>
                <div className="flex gap-1.5">
                  {(['GLOBAL', 'MALAYSIA', 'FRIENDS', 'COMMUNITY'] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => setHeatmapFilter(f)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${
                        heatmapFilter === f ? 'bg-lime-400 text-black' : 'bg-surface-200 text-metal-400'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2 p-3 rounded-2xl bg-surface-50 border border-white/5">
                {Array.from({ length: 49 }, (_, i) => i + 1).map((n) => {
                  const rate = communityPicks[n] || Math.floor((n * 7) % 30 + 10);
                  const isHot = rate > 50;

                  return (
                    <div
                      key={n}
                      className={`p-2 rounded-xl border text-center transition-all ${
                        isHot ? 'bg-lime-400/20 border-lime-400/50 text-white font-bold' : 'bg-surface-200 border-white/5 text-metal-300'
                      }`}
                    >
                      <span className="text-sm font-bold block">{n < 10 ? `0${n}` : n}</span>
                      <span className={`text-[9px] block ${isHot ? 'text-lime-400 font-black' : 'text-metal-400'}`}>
                        {rate}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Other Modes */}
          {activeTab === 'HOT NUMBER' && (
            <div className="space-y-6 text-center py-6 font-mono text-xs">
              <span className="text-metal-400 uppercase tracking-widest block">
                选择唯一的单码高信念呼叫
              </span>
              <div className="inline-block p-8 rounded-3xl bg-surface-200 border-2 border-lime-400 shadow-glow-lime-lg">
                <span className="font-black text-6xl text-lime-400 block my-2">#{hotNumber}</span>
                <span className="px-3 py-1 rounded-full bg-lime-400/20 text-lime-400 border border-lime-400/40">
                  全网置信度 62% · 连胜加成 1.8x
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                {[7, 18, 23, 27, 36, 41, 45].map((num) => (
                  <button
                    key={num}
                    onClick={() => setHotNumber(num)}
                    className={`px-3.5 py-2 rounded-xl font-bold transition-all ${
                      hotNumber === num ? 'bg-lime-400 text-black shadow-sm' : 'bg-surface-200 text-metal-300'
                    }`}
                  >
                    #{num}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ODD / EVEN' && (
            <div className="space-y-4 font-mono text-xs">
              <span className="text-metal-300 block">选择单双奇偶比例：</span>
              <div className="grid grid-cols-4 gap-3">
                {['3 : 3', '4 : 2', '2 : 4', '5 : 1'].map((r) => (
                  <button
                    key={r}
                    onClick={() => setSelectedOddEven(r)}
                    className={`p-4 rounded-xl border text-center transition-all ${
                      selectedOddEven === r ? 'bg-lime-400 text-black font-bold shadow-glow-lime' : 'bg-surface-200 text-metal-300 border-white/5'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right 4 Cols: Prediction Seal Inspector Card */}
        <div className="lg:col-span-4 bg-surface-100/90 border border-white/15 rounded-3xl p-6 backdrop-blur-xl shadow-glass-card space-y-6">
          
          <div className="pb-4 border-b border-white/10">
            <span className="text-[10px] font-mono text-lime-400 uppercase tracking-wider font-bold block">
              PREDICTION RECEIPT // 密码学存证收据
            </span>
            <h3 className="font-display font-black text-xl text-white mt-1">
              {activeTab}
            </h3>
            <span className="text-[10px] font-mono text-metal-400 block mt-0.5">
              参考数据源：香港六合彩公开摇号
            </span>
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
              <span className="text-cyber-blue font-bold">最高提升 +14 IQ · 天梯跃升</span>
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
                    <span>预测已成功在区块链封存！</span>
                  </div>
                  <span className="text-[10px] break-all text-metal-300 block">
                    承诺哈希：{sealedHash}
                  </span>
                </div>

                {/* Simulate Draw Result Reveal */}
                {!showSimulatedResult ? (
                  <button
                    onClick={() => setShowSimulatedResult(true)}
                    className="w-full py-3 rounded-xl bg-cyber-blue hover:bg-cyan-300 text-black font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-glow-blue"
                  >
                    <span>模拟香港公开摇号开奖 (REVEAL RESULT)</span>
                  </button>
                ) : (
                  <div className="p-4 rounded-2xl bg-surface-200 border-2 border-cyber-blue/60 space-y-3 font-mono text-xs">
                    <div className="text-white font-bold pb-2 border-b border-white/10">
                      香港六合彩公开摇号参考结果：
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-metal-400 text-[10px]">正码：</span>
                        {[7, 11, 18, 26, 36, 45].map((num) => (
                          <span
                            key={num}
                            className={`w-6 h-6 rounded-full flex items-center justify-center font-black text-xs ${
                              selectedNums.includes(num) ? 'bg-lime-400 text-black' : 'bg-surface-300 text-white'
                            }`}
                          >
                            {num < 10 ? `0${num}` : num}
                          </span>
                        ))}
                        <span className="text-metal-400 text-[10px] ml-1">特别号：</span>
                        <span className="w-6 h-6 rounded-full bg-cyber-amber text-black font-black text-xs flex items-center justify-center">
                          49
                        </span>
                      </div>

                      <div className="pt-2 border-t border-white/5 space-y-1">
                        <div className="text-lime-400 font-bold text-sm">🎉 成功命中 3 / 5 个正码！</div>
                        <div className="text-metal-300 text-[11px]">
                          获得奖励：+600 XP 经验 · Prediction IQ +14 · 赛季积分 +180
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleReset}
                  className="w-full py-2.5 rounded-xl bg-surface-200 hover:bg-surface-300 text-metal-200 hover:text-white font-mono text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>发起下一期预测</span>
                </button>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
