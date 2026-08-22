import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Hash, 
  Clock, 
  Radio, 
  FileCode2, 
  Lock, 
  Cpu
} from 'lucide-react';

export const BlockchainFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3);

  const steps = [
    {
      id: 1,
      title: '用户发起预测',
      desc: '玩家在本地客户端完成号码或形态组合选择',
      badge: '07 · 18 · 23 · 36 · 41',
      icon: Lock,
    },
    {
      id: 2,
      title: '生成预测哈希',
      desc: '提交前在客户端生成 SHA-256 不可逆密码学承诺哈希',
      badge: '0x782C91A...E921',
      icon: Hash,
    },
    {
      id: 3,
      title: '区块链时间戳封存',
      desc: '在开奖截止前上链打上不可篡改区块时间戳',
      badge: '2026年8月22日 09:42:17',
      icon: Clock,
    },
    {
      id: 4,
      title: '公开真实开奖',
      desc: '真实世界官方电视/网络直播公开摇号开奖',
      badge: '07 · 11 · 18 · 26 · 36 · 45',
      icon: Radio,
    },
    {
      id: 5,
      title: '去中心化预言机',
      desc: '9/9 预言机分布式节点网络多签抓取并校验开奖数据',
      badge: '多签阈值共识通过',
      icon: Cpu,
    },
    {
      id: 6,
      title: '智能合约结算',
      desc: '智能合约开源代码全自动完成命中校验与积分清算',
      badge: '区块高度 #28482913',
      icon: FileCode2,
    },
    {
      id: 7,
      title: '成绩永久入链',
      desc: '预测智商 (IQ) 与赛季经验永久更新至玩家去中心化档案',
      badge: '验证完成 ✓ (+600 XP)',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="technology" className="relative py-24 bg-[#06080B] border-t border-white/10 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-lime-400/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-lime-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>密码学可验证技术链路</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            信任无需建立在 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyber-blue">
              盲信与黑箱之上。
            </span>
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            没有黑箱赔率，没有事后篡改。所有的预测在公开开奖之前即被密码学智能合约永久锁定。
          </p>
        </div>

        {/* Cryptographic Pipeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-3 mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            const isSelected = activeStep === step.id;

            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between relative ${
                  isSelected
                    ? 'bg-surface-100/95 border-lime-400 shadow-glow-lime/30 scale-105 z-10'
                    : 'bg-surface-50/60 border-white/10 hover:border-white/20 hover:bg-surface-100/70'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] font-bold text-metal-400">
                    第 0{step.id} 步
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-lime-400' : 'text-metal-400'}`} />
                </div>

                <div>
                  <h4 className="font-mono font-bold text-xs text-white leading-tight mb-1">
                    {step.title}
                  </h4>
                  <p className="text-[10px] text-metal-400 line-clamp-2">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-white/5">
                  <span className={`text-[9px] font-mono block truncate ${
                    isSelected ? 'text-lime-400 font-bold' : 'text-metal-400'
                  }`}>
                    {step.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big On-Chain Inspector Live Card */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-2xl shadow-glass-card space-y-6">
          
          <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
            <span className="text-lime-400 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              链上交易存证收据 #0x992B881
            </span>
            <span className="text-metal-400">预言机多签共识已确认</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-surface-200/90 border border-white/5">
              <span className="text-metal-400 text-[10px] block uppercase">预测号码明细</span>
              <span className="text-white font-bold">[ 07 · 18 · 23 · 36 · 41 ]</span>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-200/90 border border-white/5">
              <span className="text-metal-400 text-[10px] block uppercase">链上封存时间</span>
              <span className="text-lime-400 font-bold">2026-08-22 09:42:17</span>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-200/90 border border-white/5">
              <span className="text-metal-400 text-[10px] block uppercase">SHA-256 存证哈希</span>
              <span className="text-cyber-blue font-bold truncate block">0x782C91A...E921</span>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-200/90 border border-white/5">
              <span className="text-metal-400 text-[10px] block uppercase">链上最终状态</span>
              <span className="text-lime-400 font-bold">已封存并完成结算 ✓</span>
            </div>
          </div>

          {/* Giant Investor Statement */}
          <div className="pt-6 border-t border-white/10 text-center">
            <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
              没有任何管理员能够更改过去。
            </h3>
            <p className="text-xs sm:text-sm font-mono text-metal-300 mt-2">
              数学逻辑与智能合约的确定性，取代了对中心化平台主观操纵的盲信。
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
