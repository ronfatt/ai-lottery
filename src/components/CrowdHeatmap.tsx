import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Users, TrendingUp, Sparkles, CheckCircle2, AlertCircle, BarChart3 } from 'lucide-react';
import { HeatmapNumberData } from '../types';

export const CrowdHeatmap: React.FC = () => {
  const [selectedNum, setSelectedNum] = useState<number>(18);
  const [viewState, setViewState] = useState<'pre-draw' | 'post-draw'>('pre-draw');

  // Realistic mock distribution data for 49 numbers
  const heatmapData: Record<number, HeatmapNumberData> = {
    18: { number: 18, confidence: 74, predictionsCount: 28419, rank: 1, isHot: true },
    27: { number: 27, confidence: 62, predictionsCount: 23810, rank: 2, isHot: true },
    8: { number: 8, confidence: 51, predictionsCount: 19540, rank: 3, isHot: true },
    36: { number: 36, confidence: 46, predictionsCount: 17620, rank: 4, isHot: true },
    7: { number: 7, confidence: 44, predictionsCount: 16890, rank: 5, isHot: true },
    41: { number: 41, confidence: 41, predictionsCount: 15720, rank: 6 },
    11: { number: 11, confidence: 39, predictionsCount: 14950, rank: 7 },
    23: { number: 23, confidence: 38, predictionsCount: 14580, rank: 8 },
    45: { number: 45, confidence: 35, predictionsCount: 13420, rank: 9 },
    3: { number: 3, confidence: 33, predictionsCount: 12650, rank: 10 },
  };

  // Helper to get confidence data for any number 1-49
  const getNumberData = (num: number): HeatmapNumberData => {
    if (heatmapData[num]) return heatmapData[num];
    const pseudoConfidence = Math.max(12, Math.floor(((num * 17) % 35) + 10));
    return {
      number: num,
      confidence: pseudoConfidence,
      predictionsCount: Math.floor(pseudoConfidence * 380),
      rank: Math.min(49, Math.floor(49 - pseudoConfidence / 2)),
    };
  };

  const currentData = getNumberData(selectedNum);
  const winningNumbers = [7, 11, 18, 26, 36, 45];
  const isCrowdWinner = winningNumbers.includes(selectedNum);

  return (
    <section className="relative py-24 bg-[#070A0F] border-t border-white/10 overflow-hidden">
      {/* Ambience */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-cyber-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-xs font-mono text-cyber-blue">
            <Brain className="w-3.5 h-3.5" />
            <span>COLLECTIVE INTELLIGENCE ENGINE</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase">
            WHAT DOES THE CROWD BELIEVE?
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            Every user prediction is aggregated into real-time consensus sentiment.
            Prediction behavior becomes high-value analytical intelligence.
          </p>

          {/* Toggle state */}
          <div className="flex justify-center pt-2">
            <div className="inline-flex p-1 rounded-xl bg-surface-100 border border-white/10">
              <button
                onClick={() => setViewState('pre-draw')}
                className={`px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all ${
                  viewState === 'pre-draw'
                    ? 'bg-cyber-blue text-black shadow-glow-blue'
                    : 'text-metal-300 hover:text-white'
                }`}
              >
                PRE-DRAW HEATMAP
              </button>
              <button
                onClick={() => setViewState('post-draw')}
                className={`px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all ${
                  viewState === 'post-draw'
                    ? 'bg-lime-400 text-black shadow-glow-lime'
                    : 'text-metal-300 hover:text-white'
                }`}
              >
                POST-DRAW VERIFICATION
              </button>
            </div>
          </div>
        </div>

        {/* Heatmap Grid + Inspector Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left 49 Heatmap Grid */}
          <div className="lg:col-span-8 bg-surface-100/90 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5 text-xs font-mono">
              <span className="text-metal-300">CONFIDENCE INTENSITY (49 NODES)</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-metal-400">
                  <span className="w-2.5 h-2.5 rounded bg-surface-300 inline-block" /> Low
                </span>
                <span className="flex items-center gap-1 text-cyber-blue">
                  <span className="w-2.5 h-2.5 rounded bg-cyber-blue/60 inline-block" /> Med
                </span>
                <span className="flex items-center gap-1 text-lime-400">
                  <span className="w-2.5 h-2.5 rounded bg-lime-400 inline-block" /> Hot (70%+)
                </span>
              </div>
            </div>

            {/* 7x7 Heatmap Matrix */}
            <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
              {Array.from({ length: 49 }, (_, i) => i + 1).map((num) => {
                const data = getNumberData(num);
                const isSelected = selectedNum === num;
                const isWinning = winningNumbers.includes(num);

                // Calculate glow/color based on confidence or post-draw status
                let bgColor = 'bg-surface-200/80 text-metal-300 border-white/5';
                if (viewState === 'pre-draw') {
                  if (data.confidence >= 60) {
                    bgColor = 'bg-lime-400 text-black font-black border-lime-300 shadow-glow-lime';
                  } else if (data.confidence >= 40) {
                    bgColor = 'bg-cyber-blue/30 text-cyber-blue border-cyber-blue/40 font-bold';
                  } else if (data.confidence >= 25) {
                    bgColor = 'bg-surface-300 text-white border-white/10';
                  }
                } else {
                  // Post draw
                  if (isWinning) {
                    bgColor = 'bg-lime-400 text-black font-black border-lime-300 shadow-glow-lime scale-105 z-10';
                  } else if (data.confidence >= 60) {
                    bgColor = 'bg-red-500/20 text-red-300 border-red-500/40';
                  }
                }

                return (
                  <button
                    key={num}
                    onClick={() => setSelectedNum(num)}
                    className={`aspect-square rounded-xl flex flex-col items-center justify-center font-mono transition-all duration-200 border ${bgColor} ${
                      isSelected ? 'ring-2 ring-white scale-110 z-20 shadow-2xl' : 'hover:scale-105'
                    }`}
                  >
                    <span className="text-xs sm:text-base font-bold">
                      {num < 10 ? `0${num}` : num}
                    </span>
                    <span className="text-[9px] opacity-75 hidden sm:block">
                      {data.confidence}%
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Inspector & Sentiment Breakdown */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Number Intelligence Card */}
            <div className="p-6 rounded-2xl bg-surface-100/95 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono text-metal-400 uppercase">NODE TELEMETRY</span>
                  <div className="font-mono font-black text-4xl text-white">
                    #{selectedNum < 10 ? `0${selectedNum}` : selectedNum}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-metal-400 uppercase">CROWD RANK</span>
                  <div className="font-mono font-bold text-xl text-lime-400">
                    #{currentData.rank} OF 49
                  </div>
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-surface-200/90 border border-white/5">
                  <span className="text-metal-300">Total User Locks:</span>
                  <span className="text-white font-bold">{currentData.predictionsCount.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center p-2.5 rounded-lg bg-surface-200/90 border border-white/5">
                  <span className="text-metal-300">Confidence Score:</span>
                  <span className="text-cyber-blue font-bold">{currentData.confidence}%</span>
                </div>

                <div className="flex justify-between items-center p-2.5 rounded-lg bg-surface-200/90 border border-white/5">
                  <span className="text-metal-300">Sentiment Velocity:</span>
                  <span className="text-lime-400 font-bold">▲ +14.2% (24h)</span>
                </div>
              </div>

              {/* Resolution Verdict */}
              {viewState === 'post-draw' && (
                <div className={`p-4 rounded-xl border font-mono text-xs ${
                  isCrowdWinner
                    ? 'bg-lime-400/15 border-lime-400/50 text-lime-400'
                    : 'bg-red-500/15 border-red-500/50 text-red-300'
                }`}>
                  <div className="font-black text-sm flex items-center gap-1.5">
                    {isCrowdWinner ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>THE CROWD CALLED IT!</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4" />
                        <span>THE CROWD WAS WRONG.</span>
                      </>
                    )}
                  </div>
                  <p className="text-[11px] text-metal-300 mt-1">
                    {isCrowdWinner 
                      ? 'Consensus successfully identified this winning digit on-chain.' 
                      : 'Contrarian predictors gained heavy ranking multipliers.'}
                  </p>
                </div>
              )}
            </div>

            {/* B2B Insight Note */}
            <div className="p-4 rounded-xl bg-surface-50 border border-white/5 text-[11px] font-mono text-metal-300">
              <span className="text-white font-bold block mb-1">DATA MONETIZATION ASSET</span>
              Crowd prediction distributions create valuable proprietary probability datasets and user engagement sentiment.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
