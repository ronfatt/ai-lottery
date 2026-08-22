import React, { useState } from 'react';
import { Layers } from 'lucide-react';
import { GameModeId, GameModeInfo } from '../types';

export const GameModes: React.FC = () => {
  const [activeMode, setActiveMode] = useState<GameModeId>('number-hunt');

  const modes: GameModeInfo[] = [
    {
      id: 'number-hunt',
      index: '01',
      name: '数字猎手 (Number Hunt)',
      tagline: '定向狙击 · 五码连中',
      description: '从 49 个数字池中精准预测 5 个即将开出的号码。命中 3 个以上即可解锁大量 XP 经验与智商评级飞跃。',
      category: 'direct',
      accentColor: '#00FF66',
    },
    {
      id: 'hot-number',
      index: '02',
      name: '焦点单码 (Hot Number)',
      tagline: '唯一信念 · 一码定乾坤',
      description: '将全部直觉凝聚在单个高信念数字上。实时联动全网玩家置信度共识与连胜倍率加成。',
      category: 'direct',
      accentColor: '#00E5FF',
    },
    {
      id: 'number-zone',
      index: '03',
      name: '数字领地 (Number Zone)',
      tagline: '落点分布 · 领地归属',
      description: '预测号码最密集出现的区间（1–10、11–20、21–30、31–40、41–49），结合热力图聚类分析。',
      category: 'distribution',
      accentColor: '#A855F7',
    },
    {
      id: 'odd-even',
      index: '04',
      name: '奇偶天平 (Odd / Even)',
      tagline: '洞察均势 · 奇偶平衡',
      description: '推演本期 6 个开奖号码的奇偶形态比例（如 3:3、4:2、5:1、6:0），考验结构化统计敏锐度。',
      category: 'analytical',
      accentColor: '#F59E0B',
    },
    {
      id: 'high-low',
      index: '05',
      name: '高低半区 (High / Low)',
      tagline: '高低割裂 · 极值博弈',
      description: '预测开奖号码偏向低位半区（01–24）还是高位半区（25–49），掌握宏观分布趋势。',
      category: 'distribution',
      accentColor: '#00FF66',
    },
    {
      id: 'total-sum',
      index: '06',
      name: '总和区间 (Total Sum)',
      tagline: '数值聚合 · 均值归位',
      description: '预测 6 个号码加总后的整体总和落在哪个数值区间，配合交互式弧形仪表盘进行快速研判。',
      category: 'analytical',
      accentColor: '#00E5FF',
    },
    {
      id: 'pattern-prediction',
      index: '07',
      name: '规律预测 (Pattern Prediction)',
      tagline: '预测形态规律 · 超越单纯猜数',
      description: '回答 5 道结构形态题目（是否有连号、是否有相同尾数、小于10的个数等），纯粹的概率结构大师竞技。',
      category: 'pattern',
      accentColor: '#A855F7',
    },
  ];

  // State for Hot Number demo
  const [hotNumberSelected] = useState<number>(27);

  // State for Zone demo
  const [selectedZone, setSelectedZone] = useState<string>('21-30');

  // State for Odd/Even demo
  const [selectedRatio, setSelectedRatio] = useState<string>('3:3');

  // State for Total Sum demo
  const [selectedSumRange, setSelectedSumRange] = useState<string>('100–149');

  return (
    <section id="game-modes" className="relative py-24 bg-[#06080B] border-t border-white/10 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyber-indigo/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-lime-400">
            <Layers className="w-3.5 h-3.5" />
            <span>可无限扩展的预测游戏机制</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            绝非只有“猜数字”。 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyber-blue to-cyber-violet">
              单份公开数据，即可衍生数十种预测玩法。
            </span>
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            ORACLE 49 将单次公开开奖转化为多维度的预测竞技矩阵——满足直觉型玩家、数据分析师以及电竞锦标赛选手的不同偏好。
          </p>
        </div>

        {/* Mobile Horizontal Selector Tabs */}
        <div className="flex lg:hidden overflow-x-auto gap-2 pb-4 mb-6 scrollbar-none">
          {modes.map((mode) => {
            const isActive = activeMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all flex items-center gap-2 flex-shrink-0 ${
                  isActive
                    ? 'bg-lime-400 text-black font-bold shadow-glow-lime'
                    : 'bg-surface-100 text-metal-300 border border-white/10'
                }`}
              >
                <span className="opacity-70">{mode.index}</span>
                <span>{mode.name}</span>
              </button>
            );
          })}
        </div>

        {/* Desktop Sticky Left Navigation + Right Interactive Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sticky List (7 Modes) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col space-y-3 sticky top-28">
            {modes.map((mode) => {
              const isActive = activeMode === mode.id;

              return (
                <div
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border relative ${
                    isActive
                      ? 'bg-surface-100/95 border-lime-400/60 shadow-glow-lime/20 translate-x-2'
                      : 'bg-surface-50/50 border-white/5 hover:border-white/20 hover:bg-surface-100/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                        isActive ? 'bg-lime-400 text-black' : 'bg-surface-200 text-metal-400'
                      }`}>
                        {mode.index}
                      </span>
                      <span className={`font-display font-bold text-base ${
                        isActive ? 'text-white' : 'text-metal-200'
                      }`}>
                        {mode.name}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-metal-400">
                      {mode.category === 'direct' ? '直觉精准' : mode.category === 'distribution' ? '空间分布' : mode.category === 'analytical' ? '数据统计' : '形态规律'}
                    </span>
                  </div>

                  <p className="text-xs text-metal-300 mt-2 line-clamp-2">
                    {mode.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Interactive Demo Sandbox */}
          <div className="lg:col-span-7 bg-surface-100/90 border border-white/15 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-glass-card min-h-[560px] flex flex-col justify-between">
            
            {/* Active Mode Title Header */}
            <div className="pb-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
                  <span className="font-mono text-xs text-lime-400 tracking-widest font-bold">
                    当前玩法沙盒 // {modes.find((m) => m.id === activeMode)?.name}
                  </span>
                </div>
                <span className="font-mono text-xs text-metal-400">公开开奖期数 #260822</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-2">
                {modes.find((m) => m.id === activeMode)?.tagline}
              </h3>
            </div>

            {/* Dynamic Content Based On Active Mode */}
            <div className="my-auto py-6">
              
              {/* MODE 01: Number Hunt */}
              {activeMode === 'number-hunt' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-5 gap-3 max-w-md mx-auto">
                    {[7, 18, 23, 36, 41].map((n) => {
                      const isHit = [7, 18, 36].includes(n);
                      return (
                        <div
                          key={n}
                          className={`p-4 rounded-xl flex flex-col items-center justify-center font-mono font-bold border transition-all ${
                            isHit
                              ? 'bg-lime-400 text-black border-lime-300 shadow-glow-lime scale-105'
                              : 'bg-surface-200 text-metal-300 border-red-500/30'
                          }`}
                        >
                          <span className="text-xl font-black">{n < 10 ? `0${n}` : n}</span>
                          <span className="text-[10px] mt-1 font-bold">
                            {isHit ? '命中 ✓' : '未中 ✕'}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-4 rounded-xl bg-surface-200/90 border border-lime-400/30 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-metal-300 block">本期结算反馈：</span>
                      <span className="text-xl font-display font-black text-lime-400">命中 3 / 5 个号码</span>
                    </div>
                    <div className="text-right font-mono text-xs">
                      <div className="text-white font-bold">+600 XP 经验值</div>
                      <div className="text-cyber-blue">预测智商 (IQ) +14</div>
                      <div className="text-lime-400">全球排名 ↑ 跃升 324 名</div>
                    </div>
                  </div>
                </div>
              )}

              {/* MODE 02: Hot Number */}
              {activeMode === 'hot-number' && (
                <div className="space-y-6 text-center">
                  <div className="inline-block p-6 rounded-2xl bg-surface-200/90 border-2 border-lime-400 shadow-glow-lime-lg">
                    <span className="text-xs font-mono text-metal-400 tracking-widest block mb-2">
                      高信念定点呼叫
                    </span>
                    <span className="font-mono font-black text-6xl text-lime-400 block my-2">
                      #{hotNumberSelected}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-lime-400/20 text-lime-400 border border-lime-400/40">
                      全网社群置信度 62%
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto font-mono text-xs">
                    <div className="p-3 rounded-xl bg-surface-200 border border-white/5">
                      <span className="text-metal-400 block">共同预判玩家：</span>
                      <span className="text-white font-bold text-sm">28,419 位玩家</span>
                    </div>
                    <div className="p-3 rounded-xl bg-surface-200 border border-white/5">
                      <span className="text-metal-400 block">连胜奖励加成：</span>
                      <span className="text-lime-400 font-bold text-sm">🔥 连胜 6 场 (+220 XP)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* MODE 03: Number Zone */}
              {activeMode === 'number-zone' && (
                <div className="space-y-6">
                  <span className="text-xs font-mono text-metal-300 block text-center">
                    预测号码最密集的 10 位数领地：
                  </span>

                  <div className="grid grid-cols-5 gap-2">
                    {['01-10', '11-20', '21-30', '31-40', '41-49'].map((zone) => {
                      const isSelected = selectedZone === zone;
                      const count = zone === '21-30' ? 3 : zone === '01-10' ? 1 : zone === '11-20' ? 1 : 1;

                      return (
                        <button
                          key={zone}
                          onClick={() => setSelectedZone(zone)}
                          className={`p-3 rounded-xl flex flex-col items-center justify-between border transition-all ${
                            isSelected
                              ? 'bg-cyber-violet/20 border-cyber-violet text-white shadow-glow-violet'
                              : 'bg-surface-200 text-metal-300 border-white/5 hover:border-white/20'
                          }`}
                        >
                          <span className="font-mono text-xs font-bold">{zone}</span>
                          <div className="w-full bg-surface-300 h-16 rounded mt-2 relative overflow-hidden flex items-end">
                            <div
                              className="w-full bg-cyber-violet rounded transition-all duration-500"
                              style={{ height: `${count * 33}%` }}
                            />
                          </div>
                          <span className="text-[10px] font-mono mt-1 text-metal-400">{count} 个号码</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="p-3 rounded-xl bg-cyber-violet/10 border border-cyber-violet/30 text-xs font-mono text-cyber-violet flex items-center justify-between">
                    <span>主导领地开奖结果：<strong>21–30 区间 (共开出 3 码)</strong></span>
                    <span className="font-bold text-white">领地准确率 +1</span>
                  </div>
                </div>
              )}

              {/* MODE 04: Odd / Even */}
              {activeMode === 'odd-even' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-surface-200/80 border border-cyber-blue/30 text-center">
                      <span className="text-xs font-mono text-cyber-blue font-bold uppercase block mb-1">
                        单数个数 (3 个)
                      </span>
                      <span className="font-mono font-black text-4xl text-white">50%</span>
                      <div className="flex justify-center gap-1.5 mt-3">
                        <span className="w-7 h-7 rounded bg-cyber-blue text-black font-mono font-bold text-xs flex items-center justify-center">07</span>
                        <span className="w-7 h-7 rounded bg-cyber-blue text-black font-mono font-bold text-xs flex items-center justify-center">11</span>
                        <span className="w-7 h-7 rounded bg-cyber-blue text-black font-mono font-bold text-xs flex items-center justify-center">45</span>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-surface-200/80 border border-lime-400/30 text-center">
                      <span className="text-xs font-mono text-lime-400 font-bold uppercase block mb-1">
                        双数个数 (3 个)
                      </span>
                      <span className="font-mono font-black text-4xl text-white">50%</span>
                      <div className="flex justify-center gap-1.5 mt-3">
                        <span className="w-7 h-7 rounded bg-lime-400 text-black font-mono font-bold text-xs flex items-center justify-center">18</span>
                        <span className="w-7 h-7 rounded bg-lime-400 text-black font-mono font-bold text-xs flex items-center justify-center">26</span>
                        <span className="w-7 h-7 rounded bg-lime-400 text-black font-mono font-bold text-xs flex items-center justify-center">36</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center gap-3">
                    {['3 单 : 3 双', '4 单 : 2 双', '2 单 : 4 双', '5 单 : 1 双'].map((ratio) => (
                      <button
                        key={ratio}
                        onClick={() => setSelectedRatio(ratio)}
                        className={`px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all ${
                          selectedRatio === ratio
                            ? 'bg-lime-400 text-black shadow-glow-lime'
                            : 'bg-surface-200 text-metal-300 border border-white/10'
                        }`}
                      >
                        {ratio}
                      </button>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-lime-400/10 border border-lime-400/30 text-xs font-mono text-lime-400 flex items-center justify-between">
                    <span>开奖结果：<strong>3 单 : 3 双 (完美均势)</strong></span>
                    <span className="font-bold">精准预判 // 准确率 +1</span>
                  </div>
                </div>
              )}

              {/* MODE 05: High / Low */}
              {activeMode === 'high-low' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-surface-200 border border-white/10 text-center">
                      <span className="text-[10px] font-mono text-metal-400 block">低位半区 (01–24)</span>
                      <div className="text-2xl font-mono font-black text-white my-1">2 个号码</div>
                      <span className="text-xs font-mono text-cyber-blue">[ 07 · 11 ]</span>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-200 border border-white/10 text-center">
                      <span className="text-[10px] font-mono text-metal-400">高位半区 (25–49)</span>
                      <div className="text-2xl font-mono font-black text-lime-400 my-1">4 个号码</div>
                      <span className="text-xs font-mono text-lime-400">[ 18 · 26 · 36 · 45 ]</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-200/80 border border-lime-400/30 flex items-center justify-between text-xs font-mono">
                    <span className="text-metal-300">预测形态比率：</span>
                    <span className="font-bold text-lime-400">4 高 / 2 低 — 判定命中 ✓</span>
                  </div>
                </div>
              )}

              {/* MODE 06: Total Sum */}
              {activeMode === 'total-sum' && (
                <div className="space-y-6 text-center">
                  <div className="p-6 rounded-2xl bg-surface-200/90 border border-cyber-blue/30 max-w-sm mx-auto">
                    <span className="text-[10px] font-mono text-metal-400 block">六码总和计算</span>
                    <div className="text-5xl font-mono font-black text-cyber-blue my-2">143</div>
                    <span className="text-xs font-mono text-metal-300">(07 + 11 + 18 + 26 + 36 + 45 = 143)</span>
                  </div>

                  <div className="flex flex-wrap justify-center gap-2">
                    {['< 100', '100–149', '150–199', '200–249', '250+'].map((range) => {
                      const isWinningRange = range === '100–149';
                      return (
                        <button
                          key={range}
                          onClick={() => setSelectedSumRange(range)}
                          className={`px-3 py-2 rounded-lg font-mono text-xs font-bold transition-all ${
                            isWinningRange
                              ? 'bg-cyber-blue text-black shadow-glow-blue'
                              : 'bg-surface-200 text-metal-300 border border-white/5'
                          }`}
                        >
                          {range} {isWinningRange && '✓'}
                        </button>
                      );
                    })}
                  </div>

                  <div className="text-xs font-mono text-cyber-blue">
                    ✓ 区间已验证：100–149 (判定预判准确)
                  </div>
                </div>
              )}

              {/* MODE 07: Pattern Prediction */}
              {activeMode === 'pattern-prediction' && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-surface-200/90 border border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-metal-200">是否存在连续数字 (如 26, 27)？</span>
                    <span className="px-2 py-0.5 rounded bg-lime-400/20 text-lime-400 font-bold border border-lime-400/30">是 (YES) ✓</span>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-200/90 border border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-metal-200">是否存在相同尾数 (如 26 与 36 尾数均为 6)？</span>
                    <span className="px-2 py-0.5 rounded bg-lime-400/20 text-lime-400 font-bold border border-lime-400/30">是 (YES) ✓</span>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-200/90 border border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-metal-200">单双比率预测</span>
                    <span className="px-2 py-0.5 rounded bg-lime-400/20 text-lime-400 font-bold border border-lime-400/30">3 : 3 ✓</span>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-200/90 border border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-metal-200">高低半区比例</span>
                    <span className="px-2 py-0.5 rounded bg-lime-400/20 text-lime-400 font-bold border border-lime-400/30">4 : 2 ✓</span>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-200/90 border border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-metal-200">小于 10 的号码个数</span>
                    <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-bold border border-red-500/30">实际 1 个 (预判 2 个) ✕</span>
                  </div>

                  <div className="p-3 rounded-xl bg-cyber-violet/20 border border-cyber-violet/40 text-xs font-mono text-white flex items-center justify-between font-bold">
                    <span>形态得分：5 题答对 4 题</span>
                    <span className="text-cyber-violet">80% 规律形态准确率</span>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Takeaway */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-metal-300">
              <span>平台商业壁垒：</span>
              <span className="text-lime-400 font-bold">围绕单一真实客观数据集衍生无限游戏内容</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
