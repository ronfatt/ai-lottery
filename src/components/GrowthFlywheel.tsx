import React, { useState, useEffect } from 'react';
import { RotateCw } from 'lucide-react';

export const GrowthFlywheel: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps = [
    { title: '01 用户发起预测', desc: '用户基于客观公开的真实世界事件锁定预测组合' },
    { title: '02 公开透明开奖', desc: '真实世界官方电视/网络直播公开摇号开出结果' },
    { title: '03 智能合约核验', desc: '智能合约开源代码无偏差、零庄家偏向自动核验' },
    { title: '04 获得 XP 与 IQ', desc: '玩家斩获链上不可篡改的声誉分值，晋升天梯排位' },
    { title: '05 社交天梯与 1v1', desc: '好友切磋、战队排行与私域联赛带来极高荣誉感' },
    { title: '06 战绩社交裂变', desc: '玩家主动将预测战绩卡片分享至微信、Telegram、X' },
    { title: '07 网络规模指数扩张', desc: '自驱型社交裂变带动海量新增玩家与更高预测频次' },
    { title: '08 沉淀独家共识数据', desc: '庞大的群体预测行为形成高置信度市场情绪资产' },
    { title: '09 品牌赞助加注奖池', desc: '企业品牌为争夺用户高频注意力赞助丰厚奖励并闭环' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % steps.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 bg-[#070A0F] border-t border-white/10 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-lime-400/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-lime-400">
            <RotateCw className="w-3.5 h-3.5 animate-spin" />
            <span>自增强网络效应正向飞轮</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            预测人数越多， <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyber-blue">
              整个网络的壁垒与价值越坚不可摧。
            </span>
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            每一笔预测都在不断加深去中心化群体智慧的数据厚度，强化玩家声誉护城河，并吸引更高预算的顶级企业赞助。
          </p>
        </div>

        {/* Circular Interactive Engine Matrix */}
        <div className="max-w-5xl mx-auto bg-surface-100/90 border border-white/15 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-glass-card">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step, idx) => {
              const isActive = activeStepIndex === idx;

              return (
                <div
                  key={step.title}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-lime-400/15 border-lime-400 shadow-glow-lime scale-105 z-10'
                      : 'bg-surface-200/50 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-lime-400' : 'text-metal-400'}`}>
                      阶段 0{idx + 1}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
                    )}
                  </div>

                  <h4 className="font-mono font-bold text-sm text-white mb-1">
                    {step.title}
                  </h4>

                  <p className="text-xs text-metal-300">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center font-mono text-xs text-lime-400">
            ✓ 无对手方亏损风险的自增强型网络复利增长模型
          </div>

        </div>

      </div>
    </section>
  );
};
