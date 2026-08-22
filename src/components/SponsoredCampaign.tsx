import React, { useState } from 'react';
import { Flag, CheckCircle2 } from 'lucide-react';

export const SponsoredCampaign: React.FC = () => {
  const [selectedDriver, setSelectedDriver] = useState<string>('维斯塔潘 (VERSTAPPEN)');

  const drivers = [
    { name: '维斯塔潘 (VERSTAPPEN)', team: '红牛车队 (Red Bull Racing)', oddsConfidence: '48% 支持率', color: '#00E5FF' },
    { name: '诺里斯 (NORRIS)', team: '迈凯伦车队 (McLaren F1)', oddsConfidence: '32% 支持率', color: '#F59E0B' },
    { name: '勒克莱尔 (LECLERC)', team: '法拉利车队 (Scuderia Ferrari)', oddsConfidence: '14% 支持率', color: '#F43F5E' },
    { name: '拉塞尔 (RUSSELL)', team: '梅赛德斯车队 (Mercedes-AMG)', oddsConfidence: '6% 支持率', color: '#00FF66' },
  ];

  return (
    <section className="relative py-24 bg-[#070A0F] border-t border-white/10 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[400px] bg-cyber-amber/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-cyber-amber">
            <Flag className="w-3.5 h-3.5" />
            <span>企业级品牌营销引擎</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            预测即营销产品 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-amber via-lime-400 to-cyber-blue">
              (PREDICTION AS A MARKETING PRODUCT)
            </span>
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            品牌赞助方出资设立真实奖品与资金奖池，玩家带来极高频的用户活跃与社交裂变，ORACLE 49 则提供底层可验证的预测基础设施。
          </p>
        </div>

        {/* Big F1 Motorsport UI Showcase Card */}
        <div className="max-w-5xl mx-auto bg-[#0A0E17]/95 border-2 border-cyber-amber/40 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_50px_rgba(245,158,11,0.15)] relative overflow-hidden">
          
          {/* Top Carbon Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyber-amber text-black flex items-center justify-center font-mono font-black text-lg shadow-lg">
                🏎️
              </div>
              <div>
                <span className="text-[10px] font-mono text-cyber-amber font-bold uppercase tracking-widest block">
                  品牌官方赞助联合企划
                </span>
                <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                  F1 意大利蒙扎大奖赛 · 官方预测周
                </h3>
              </div>
            </div>

            <div className="px-3 py-1.5 rounded-xl bg-cyber-amber/15 border border-cyber-amber/40 text-cyber-amber font-mono text-xs font-bold">
              赞助总奖池：$25,000 美金 + VIP 围场观赛通行证
            </div>
          </div>

          {/* Motorsport Prediction Question */}
          <div className="my-8 space-y-4">
            <div className="text-center space-y-1">
              <span className="text-xs font-mono text-metal-400 uppercase tracking-widest">
                本期官方竞猜题目
              </span>
              <h4 className="font-display font-black text-2xl sm:text-3xl text-white">
                谁将在周六排位赛中夺得杆位 (POLE POSITION)？
              </h4>
            </div>

            {/* 4 Driver Interactive Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {drivers.map((driver) => {
                const isSelected = selectedDriver === driver.name;

                return (
                  <button
                    key={driver.name}
                    onClick={() => setSelectedDriver(driver.name)}
                    className={`p-5 rounded-2xl border text-left transition-all relative overflow-hidden ${
                      isSelected
                        ? 'bg-surface-200/90 border-lime-400 shadow-glow-lime scale-105 z-10'
                        : 'bg-surface-100/70 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-mono text-metal-400">
                        {driver.team}
                      </span>
                      {isSelected && (
                        <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-lime-400 text-black font-black">
                          我的选择
                        </span>
                      )}
                    </div>

                    <div className="font-display font-black text-lg text-white mb-2">
                      {driver.name}
                    </div>

                    <div className="pt-2 border-t border-white/10 flex justify-between text-xs font-mono">
                      <span className="text-metal-400">大众支持度：</span>
                      <span className="font-bold text-lime-400">{driver.oddsConfidence}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Activation Strip */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-metal-300">
              <CheckCircle2 className="w-4 h-4 text-lime-400" />
              <span>所有预测将于 Q1 排位赛开始前 10 分钟自动在区块链时间戳截止封存</span>
            </div>

            <div className="text-lime-400 font-bold">
              当前已有 34,819 位赛车迷完成上链锁定
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
