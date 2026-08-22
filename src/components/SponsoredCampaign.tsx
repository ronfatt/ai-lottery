import React, { useState } from 'react';
import { Flag, CheckCircle2, Trophy, Gauge, Sparkles } from 'lucide-react';

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
            <span>企业级品牌营销引擎 · 拓展首发赛事</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            预测即营销产品 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-amber via-lime-400 to-cyber-blue">
              (PREDICTION AS A MARKETING PRODUCT)
            </span>
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            品牌赞助方出资设立真实奖品与 USDT 资金奖池，玩家带来极高频的用户活跃与社交裂变，ORACLE 49 则提供底层可验证的预测基础设施。
          </p>
        </div>

        {/* Big F1 Motorsport UI Showcase Card with Pit Straight 4-Car Real Banner */}
        <div className="max-w-5xl mx-auto bg-[#0A0E17]/95 border-2 border-cyber-amber/40 rounded-3xl overflow-hidden backdrop-blur-2xl shadow-[0_0_60px_rgba(245,158,11,0.2)]">
          
          {/* Top Pit Straight Graphic Visual */}
          <div className="h-60 sm:h-80 w-full relative overflow-hidden bg-surface-200">
            <img 
              src="/images/f1_team_cars.jpg" 
              alt="F1 Top 4 Team Cars" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-[#0A0E17]/40 to-transparent" />
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-cyber-amber text-black font-mono font-black text-xs uppercase shadow-md flex items-center gap-1">
                  <Flag className="w-3.5 h-3.5" /> ⭐ FEATURED EVENT
                </span>
              </div>
              <div className="px-3 py-1 rounded-xl bg-black/70 backdrop-blur-md border border-cyber-amber/40 text-cyber-amber font-mono text-xs font-bold">
                赞助总奖池：50,000 USDT + VIP 通行证
              </div>
            </div>

            <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
              <div>
                <span className="text-[10px] font-mono text-cyber-amber font-bold uppercase tracking-widest block">
                  品牌官方赞助联合企划
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                  2026 F1 马来西亚雪邦大奖赛 · 官方预测周
                </h3>
              </div>
            </div>
          </div>

          {/* Motorsport Prediction Content */}
          <div className="p-6 sm:p-10 space-y-6">
            <div className="text-center space-y-1">
              <span className="text-xs font-mono text-metal-400 uppercase tracking-widest">
                雪邦大奖赛重点推演
              </span>
              <h4 className="font-display font-black text-xl sm:text-2xl text-white">
                谁将在周六排位赛中夺得杆位 (POLE POSITION)？
              </h4>
            </div>

            {/* 4 Driver Interactive Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-mono text-metal-400">
                        {driver.team}
                      </span>
                      {isSelected && (
                        <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-lime-400 text-black font-black">
                          我的选择
                        </span>
                      )}
                    </div>

                    <div className="font-display font-black text-base text-white mb-2">
                      {driver.name}
                    </div>

                    <div className="pt-2 border-t border-white/10 flex justify-between text-xs font-mono">
                      <span className="text-metal-400">支持度：</span>
                      <span className="font-bold text-lime-400">{driver.oddsConfidence}</span>
                    </div>
                  </button>
                );
              })}
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

      </div>
    </section>
  );
};
