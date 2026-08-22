import React from 'react';
import { Check, Zap, Building2 } from 'lucide-react';

export const BusinessModel: React.FC = () => {
  const tiers = [
    {
      name: 'FREE 基础版',
      tagline: '大众直觉预测玩家',
      price: '¥0 / RM 0',
      period: '永久免费',
      highlight: false,
      features: [
        '每日 3 笔免费公开预测额度',
        '全球公共排行榜访问权限',
        '基础 Prediction IQ 个人主页',
        '标准赛季成就勋章解锁',
        '全网群体热力图基础查看',
      ],
      cta: '立即免费开始预测',
      buttonStyle: 'bg-surface-200 hover:bg-surface-300 text-white border border-white/10',
    },
    {
      name: 'PRO 专业版',
      tagline: '严肃数据型竞技高手',
      price: 'RM 19.90',
      period: '/ 每月',
      highlight: true,
      badge: '最受欢迎方案',
      features: [
        '每日无限次预测与锁票',
        '完整高级概率分析引擎',
        'Prediction AI 智能趋势推演辅助',
        '创建与管理专属好友私域联赛',
        '全量历史开奖数据检索与回测',
        '专属金色认证标识与 IQ 闪光特效',
      ],
      cta: '升级至 PRO 专业版',
      buttonStyle: 'bg-lime-400 hover:bg-lime-300 text-black font-black shadow-glow-lime',
    },
    {
      name: 'BRAND 品牌定制',
      tagline: '企业级品牌营销活动',
      price: '定制费用',
      period: '/ 单场活动',
      highlight: false,
      features: [
        '品牌冠名预测锦标赛',
        '自定义专属实物/现金奖池配置',
        '极高社交裂变与品牌曝光',
        'F1 与体育赛事联合冠名赛季',
        'B2B 消费者情绪深度分析数据',
        '专属企业级链上智能合约部署',
      ],
      cta: '洽谈品牌合作',
      buttonStyle: 'bg-cyber-blue hover:bg-cyber-blue/90 text-black font-bold shadow-glow-blue',
    },
  ];

  const revenueStreams = [
    { title: 'B2C 会员订阅', desc: '高级玩家为 AI 辅助、无限预测与私域联赛支付的月度 PRO 订阅费' },
    { title: '品牌赞助与广告', desc: '企业品牌为获取用户高频注意力赞助专属预测赛事与奖池' },
    { title: '营销活动平台费', desc: '为大型品牌、体育俱乐部定制专属预测活动收取的部署服务费' },
    { title: '市场情绪数据授权', desc: '基于去中心化群体预测沉淀的高价值商业概率与情绪数据资产' },
    { title: '生态开发者 API', desc: '为第三方游戏、体育媒体和 Web3 应用提供开箱即用的预测协议接入' },
  ];

  return (
    <section id="business-model" className="relative py-24 bg-[#06080B] border-t border-white/10 overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-lime-400/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-lime-400">
            <Zap className="w-3.5 h-3.5" />
            <span>可持续平台商业化模型</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            平台旨在无限扩展规模， <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyber-blue">
              绝非与用户对赌输赢。
            </span>
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            不同于依赖玩家输钱盈利的传统赌场，ORACLE 49 通过 <strong className="text-white">高价值 PRO 订阅、数据洞察以及企业品牌营销赞助</strong> 实现多方共赢的可持续商业闭环。
          </p>
        </div>

        {/* 3 Tier Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                tier.highlight
                  ? 'bg-surface-100/95 border-2 border-lime-400 shadow-glow-lime/30 scale-105 z-10'
                  : 'bg-surface-50/60 border border-white/10 hover:border-white/20'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-lime-400 text-black font-mono font-black text-[10px] tracking-wider shadow-lg">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex justify-between items-start pb-4 border-b border-white/10">
                  <div>
                    <h3 className="font-display font-black text-2xl text-white">{tier.name}</h3>
                    <p className="text-xs font-mono text-metal-300 mt-0.5">{tier.tagline}</p>
                  </div>
                </div>

                <div className="py-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-mono font-black text-4xl text-white">{tier.price}</span>
                    <span className="font-mono text-xs text-metal-400">{tier.period}</span>
                  </div>
                </div>

                <div className="space-y-3 pb-8">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-xs font-mono text-metal-200">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.highlight ? 'text-lime-400' : 'text-cyber-blue'}`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`w-full py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all ${tier.buttonStyle}`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* 5 Core B2B Revenue Streams */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="w-5 h-5 text-lime-400" />
            <h3 className="font-display font-black text-xl text-white uppercase">
              多元化平台商业变现引擎
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {revenueStreams.map((stream, idx) => (
              <div key={stream.title} className="p-4 rounded-xl bg-surface-200/80 border border-white/5 space-y-2">
                <span className="font-mono font-bold text-xs text-lime-400 block">
                  0{idx + 1} // {stream.title}
                </span>
                <p className="text-xs text-metal-300 leading-snug">
                  {stream.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
