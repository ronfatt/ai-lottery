import React from 'react';
import { ShieldCheck, Scale } from 'lucide-react';

export const CompliancePhilosophy: React.FC = () => {
  const pillars = [
    {
      title: '零庄家数学优势 (NO HOUSE EDGE)',
      desc: '平台定位于中立的密码学验证协议。我们与预测者之间不存在任何数学期望值对赌优势。',
      icon: '01',
    },
    {
      title: '零博彩赔率机制 (NO BETTING ODDS)',
      desc: '没有做市商盘口、黑箱抽水或风险转移让分。所有积分与排名评定完全基于客观准确率。',
      icon: '02',
    },
    {
      title: '无出金负和循环 (NO CASH-OUT LOOP)',
      desc: '杜绝赌场式的真钱充值即时亏损循环。预测沉淀的是不可篡改的链上声誉、通行证等级与锦标赛荣誉。',
      icon: '03',
    },
    {
      title: 'V1 无投机性代币 (NO TOKEN SALE)',
      desc: 'V1 阶段坚决不发行高波动的无合规投机代币——全力聚焦于产品市场契合度、社交玩法与法律合规稳健性。',
      icon: '04',
    },
  ];

  const rewardTypes = [
    '可验证赛季经验 (XP)',
    '链上预测智商 (IQ)',
    '灵魂绑定成就勋章 (SBT)',
    '全球天梯锦标赛奖杯',
    '闭环生态游戏积分',
    '品牌官方赞助实物周边',
  ];

  return (
    <section className="relative py-24 bg-[#070A0F] border-t border-white/10 overflow-hidden">
      {/* Ambience */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[500px] bg-lime-400/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-lime-400">
            <Scale className="w-3.5 h-3.5" />
            <span>风险隔离与法律合规底层架构</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            从第一天起， <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyber-blue">
              便采取截然不同的产品哲学。
            </span>
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            ORACLE 49 从第一性原理出发被构想为可验证的预测竞技协议——彻底剔除掠夺性博彩的恶性机制。
          </p>
        </div>

        {/* 4 Architectural Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-black text-lime-400 text-sm">{pillar.icon}</span>
                <ShieldCheck className="w-4 h-4 text-lime-400" />
              </div>

              <h3 className="font-mono font-black text-sm text-white tracking-wider">
                {pillar.title}
              </h3>

              <p className="text-xs font-mono text-metal-300 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Reward Ecosystem Focus */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/80 border border-white/10 mb-8">
          <h4 className="font-mono font-bold text-xs text-lime-400 uppercase tracking-widest mb-4">
            声誉与价值赋能生态矩阵
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {rewardTypes.map((r) => (
              <div key={r} className="p-3 rounded-xl bg-surface-200/80 border border-white/5 text-center font-mono text-xs text-white">
                {r}
              </div>
            ))}
          </div>
        </div>

        {/* Professional Legal Disclaimer */}
        <div className="max-w-4xl mx-auto p-4 rounded-xl bg-surface-50 border border-white/5 text-center">
          <p className="text-[11px] font-mono text-metal-400 leading-relaxed">
            合规声明：产品的最终机制、活动形式、数字资产架构及各司法管辖区可用性，均须在商业化上线前经过专业法律与监管团队的严谨审查。
          </p>
        </div>

      </div>
    </section>
  );
};
