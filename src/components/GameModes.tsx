import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  Flame, 
  Layers, 
  Split, 
  Scale, 
  Calculator, 
  Binary, 
  CheckCircle2, 
  Sparkles, 
  Trophy,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { GameModeId, GameModeInfo } from '../types';

export const GameModes: React.FC = () => {
  const [activeMode, setActiveMode] = useState<GameModeId>('number-hunt');

  const modes: GameModeInfo[] = [
    {
      id: 'number-hunt',
      index: '01',
      name: 'Number Hunt',
      tagline: 'CALL THE FIVE',
      description: 'Select 5 numbers you project will be drawn from the 49 pool. Hit 3+ to earn major XP and IQ boost.',
      category: 'direct',
      accentColor: '#00FF66',
    },
    {
      id: 'hot-number',
      index: '02',
      name: 'Hot Number',
      tagline: 'ONE NUMBER. ONE CALL.',
      description: 'Lock in on a single high-conviction digit. Backed by community confidence sentiment metrics.',
      category: 'direct',
      accentColor: '#00E5FF',
    },
    {
      id: 'number-zone',
      index: '03',
      name: 'Number Zone',
      tagline: 'WHERE WILL NUMBERS LAND?',
      description: 'Predict the dominant numeric zone (1–10, 11–20, 21–30, 31–40, 41–49) with heatmap clustering.',
      category: 'distribution',
      accentColor: '#A855F7',
    },
    {
      id: 'odd-even',
      index: '04',
      name: 'Odd / Even',
      tagline: 'READ THE BALANCE',
      description: 'Forecast the structural parity ratio (3:3, 4:2, 5:1, 6:0) across the 6-number draw.',
      category: 'analytical',
      accentColor: '#F59E0B',
    },
    {
      id: 'high-low',
      index: '05',
      name: 'High / Low',
      tagline: 'TERRITORY SPLIT',
      description: 'Predict whether the draw tilts towards Lower tier (01–24) or Higher tier (25–49).',
      category: 'distribution',
      accentColor: '#00FF66',
    },
    {
      id: 'total-sum',
      index: '06',
      name: 'Total Sum',
      tagline: 'CALL THE RANGE',
      description: 'Estimate the aggregate summation bracket of all 6 numbers with our interactive gauge.',
      category: 'analytical',
      accentColor: '#00E5FF',
    },
    {
      id: 'pattern-prediction',
      index: '07',
      name: 'Pattern Prediction',
      tagline: 'PREDICT THE PATTERN, NOT THE NUMBERS',
      description: 'Answer 5 structural behavioral questions (consecutive, repeated endings, sub-10s) for pure statistical mastery.',
      category: 'pattern',
      accentColor: '#A855F7',
    },
  ];

  // State for Hot Number demo
  const [hotNumberSelected, setHotNumberSelected] = useState<number>(27);
  const [hotNumberTriggered, setHotNumberTriggered] = useState(false);

  // State for Zone demo
  const [selectedZone, setSelectedZone] = useState<string>('21-30');

  // State for Odd/Even demo
  const [selectedRatio, setSelectedRatio] = useState<string>('3:3');

  // State for High/Low demo
  const [selectedHighLow, setSelectedHighLow] = useState<string>('4 High / 2 Low');

  // State for Total Sum demo
  const [selectedSumRange, setSelectedSumRange] = useState<string>('150–199');

  // State for Pattern demo
  const [patternAnswers, setPatternAnswers] = useState({
    consecutive: 'YES',
    repeatedEnding: 'YES',
    oddEven: '3:3',
    highLow: '4:2',
    subTen: '2',
  });

  return (
    <section id="game-modes" className="relative py-24 bg-[#06080B] border-t border-white/10 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyber-indigo/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-lime-400">
            <Layers className="w-3.5 h-3.5" />
            <span>EXPANDABLE PREDICTION MECHANICS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            NOT JUST PICKING NUMBERS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyber-blue to-cyber-violet">
              A SINGLE RESULT GENERATES DOZENS OF EXPERIENCES.
            </span>
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            ORACLE 49 transforms one single verifiable public draw into an expansive matrix of prediction games — 
            accommodating casual instinct players, data analysts, and tournament pros.
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

                    <span className="text-[10px] font-mono text-metal-400 uppercase">
                      {mode.category}
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
                  <span className="font-mono text-xs text-lime-400 uppercase tracking-widest font-bold">
                    ACTIVE SANDBOX // {modes.find((m) => m.id === activeMode)?.name.toUpperCase()}
                  </span>
                </div>
                <span className="font-mono text-xs text-metal-400">DRAW #260822</span>
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
                    {[7, 18, 23, 36, 41].map((n, i) => {
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
                            {isHit ? 'HIT ✓' : 'MISS ✕'}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-4 rounded-xl bg-surface-200/90 border border-lime-400/30 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-metal-300 block">Round Resolution:</span>
                      <span className="text-xl font-display font-black text-lime-400">3 / 5 HIT</span>
                    </div>
                    <div className="text-right font-mono text-xs">
                      <div className="text-white font-bold">+600 XP</div>
                      <div className="text-cyber-blue">Prediction IQ +14</div>
                      <div className="text-lime-400">Rank ↑ 324</div>
                    </div>
                  </div>
                </div>
              )}

              {/* MODE 02: Hot Number */}
              {activeMode === 'hot-number' && (
                <div className="space-y-6 text-center">
                  <div className="inline-block p-6 rounded-2xl bg-surface-200/90 border-2 border-lime-400 shadow-glow-lime-lg">
                    <span className="text-xs font-mono text-metal-400 uppercase tracking-widest block mb-2">
                      HIGH-CONVICTION CALL
                    </span>
                    <span className="font-mono font-black text-6xl text-lime-400 block my-2">
                      #{hotNumberSelected}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-lime-400/20 text-lime-400 border border-lime-400/40">
                      COMMUNITY CONFIDENCE 62%
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto font-mono text-xs">
                    <div className="p-3 rounded-xl bg-surface-200 border border-white/5">
                      <span className="text-metal-400 block">Players Backing:</span>
                      <span className="text-white font-bold text-sm">28,419 Players</span>
                    </div>
                    <div className="p-3 rounded-xl bg-surface-200 border border-white/5">
                      <span className="text-metal-400 block">Streak Multiplier:</span>
                      <span className="text-lime-400 font-bold text-sm">🔥 STREAK 6 (+220 XP)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* MODE 03: Number Zone */}
              {activeMode === 'number-zone' && (
                <div className="space-y-6">
                  <span className="text-xs font-mono text-metal-300 block text-center">
                    Select the dominant 10-digit territory:
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
                          <span className="text-[10px] font-mono mt-1 text-metal-400">{count} balls</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="p-3 rounded-xl bg-cyber-violet/10 border border-cyber-violet/30 text-xs font-mono text-cyber-violet flex items-center justify-between">
                    <span>DOMINANT ZONE RESULT: <strong>21–30 (3 Numbers)</strong></span>
                    <span className="font-bold text-white">ZONE ACCURACY +1</span>
                  </div>
                </div>
              )}

              {/* MODE 04: Odd / Even */}
              {activeMode === 'odd-even' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-surface-200/80 border border-cyber-blue/30 text-center">
                      <span className="text-xs font-mono text-cyber-blue font-bold uppercase block mb-1">
                        ODD COUNT (3)
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
                        EVEN COUNT (3)
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
                    {['3 : 3', '4 : 2', '2 : 4', '5 : 1'].map((ratio) => (
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
                    <span>RESULT: <strong>3 ODD : 3 EVEN</strong></span>
                    <span className="font-bold">EXACT CALL // ACCURACY +1</span>
                  </div>
                </div>
              )}

              {/* MODE 05: High / Low */}
              {activeMode === 'high-low' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-surface-200 border border-white/10 text-center">
                      <span className="text-[10px] font-mono text-metal-400 uppercase block">LOW (01–24)</span>
                      <div className="text-2xl font-mono font-black text-white my-1">2 NUMBERS</div>
                      <span className="text-xs font-mono text-cyber-blue">[ 07 · 11 ]</span>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-200 border border-white/10 text-center">
                      <span className="text-[10px] font-mono text-metal-400 uppercase">HIGH (25–49)</span>
                      <div className="text-2xl font-mono font-black text-lime-400 my-1">4 NUMBERS</div>
                      <span className="text-xs font-mono text-lime-400">[ 18* · 26 · 36 · 45 ]</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-200/80 border border-lime-400/30 flex items-center justify-between text-xs font-mono">
                    <span className="text-metal-300">PREDICTION RATIO:</span>
                    <span className="font-bold text-lime-400">4 HIGH / 2 LOW — HIT ✓</span>
                  </div>
                </div>
              )}

              {/* MODE 06: Total Sum */}
              {activeMode === 'total-sum' && (
                <div className="space-y-6 text-center">
                  <div className="p-6 rounded-2xl bg-surface-200/90 border border-cyber-blue/30 max-w-sm mx-auto">
                    <span className="text-[10px] font-mono text-metal-400 uppercase block">TOTAL SUM AGGREGATION</span>
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
                    ✓ RANGE VERIFIED: 100–149 (CORRECT CALL)
                  </div>
                </div>
              )}

              {/* MODE 07: Pattern Prediction */}
              {activeMode === 'pattern-prediction' && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-surface-200/90 border border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-metal-200">Consecutive Numbers Present?</span>
                    <span className="px-2 py-0.5 rounded bg-lime-400/20 text-lime-400 font-bold border border-lime-400/30">YES ✓</span>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-200/90 border border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-metal-200">Repeated Last Digit? (e.g. 26 & 36)</span>
                    <span className="px-2 py-0.5 rounded bg-lime-400/20 text-lime-400 font-bold border border-lime-400/30">YES ✓</span>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-200/90 border border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-metal-200">Odd / Even Ratio</span>
                    <span className="px-2 py-0.5 rounded bg-lime-400/20 text-lime-400 font-bold border border-lime-400/30">3 : 3 ✓</span>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-200/90 border border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-metal-200">High / Low Territory</span>
                    <span className="px-2 py-0.5 rounded bg-lime-400/20 text-lime-400 font-bold border border-lime-400/30">4 : 2 ✓</span>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-200/90 border border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-metal-200">Numbers Below 10</span>
                    <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-bold border border-red-500/30">1 (Predicted 2) ✕</span>
                  </div>

                  <div className="p-3 rounded-xl bg-cyber-violet/20 border border-cyber-violet/40 text-xs font-mono text-white flex items-center justify-between font-bold">
                    <span>PATTERN SCORE: 4 / 5 CORRECT</span>
                    <span className="text-cyber-violet">80% PATTERN ACCURACY</span>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Takeaway */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-metal-300">
              <span>Platform Advantage:</span>
              <span className="text-lime-400 font-bold">Infinite game loops around single real-world datasets</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
