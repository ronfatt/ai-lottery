import React, { useState } from 'react';
import { Globe } from 'lucide-react';

export const OracleUniverse: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<string>('numbers');

  const domains = [
    {
      id: 'numbers',
      name: 'ORACLE 49 数字神谕',
      badge: '当前主网上线 MVP',
      items: ['01-49 数字矩阵', '六码总和区间研判', '结构形态概率大师', '高低与奇偶领地'],
      color: '#00FF66',
      icon: '49',
    },
    {
      id: 'sports',
      name: 'SPORT 体育赛事神谕',
      badge: '第二阶段横向扩展',
      items: ['F1 杆位与领奖台预测', '英超 / 欧冠单场进球推演', 'NBA 单节总分比率', '电子竞技冠军归属'],
      color: '#00E5FF',
      icon: '🏎️',
    },
    {
      id: 'markets',
      name: 'MARKET 金融资产神谕',
      badge: '第三阶段宏观扩展',
      items: ['比特币每周高低极值', '现货黄金收盘区间', '标普 500 波动率预测', '美联储利率决议推演'],
      color: '#A855F7',
      icon: '📈',
    },
    {
      id: 'culture',
      name: 'CULTURE 文娱热点神谕',
      badge: '第三阶段泛娱乐扩展',
      items: ['奥斯卡金像奖最佳影片', '格莱美年度专辑归属', '全球电影首周末票房', '流媒体热门榜单'],
      color: '#F59E0B',
      icon: '🎬',
    },
    {
      id: 'world',
      name: 'WORLD 全球事件神谕',
      badge: '第四阶段通用基础设施',
      items: ['全球主要城市极端气温', 'SpaceX 火箭发射时间窗口', 'AI 大模型基准跑分突破', '全球公开大事件'],
      color: '#F43F5E',
      icon: '🌍',
    },
  ];

  return (
    <section className="relative py-24 bg-[#06080B] border-t border-white/10 overflow-hidden">
      {/* Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyber-indigo/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-cyber-blue">
            <Globe className="w-3.5 h-3.5" />
            <span>全球潜在市场空间 (TAM) 扩展图谱</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            始于数字预测。 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyber-blue to-cyber-violet">
              无限延展至万物。
            </span>
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            49 数字预测只是我们高频进入市场的首个 MVP 突破口。底层核心是一套可无缝扩展至体育赛事、金融宏观与全球文娱的<strong>通用预测基础设施网络</strong>。
          </p>
        </div>

        {/* Interactive Domain Cluster */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {domains.map((dom) => {
            const isSelected = activeDomain === dom.id;

            return (
              <div
                key={dom.id}
                onClick={() => setActiveDomain(dom.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-surface-100/95 border-lime-400 shadow-glow-lime scale-105 z-10'
                    : 'bg-surface-50/60 border-white/10 hover:border-white/20 hover:bg-surface-100/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{dom.icon}</span>
                    <span className={`text-[8px] font-mono px-2 py-0.5 rounded font-bold ${
                      dom.id === 'numbers' ? 'bg-lime-400 text-black' : 'bg-surface-200 text-metal-300'
                    }`}>
                      {dom.badge}
                    </span>
                  </div>

                  <h4 className="font-display font-black text-lg text-white mb-2">
                    {dom.name}
                  </h4>

                  <ul className="space-y-1.5 pt-2 border-t border-white/10">
                    {dom.items.map((item) => (
                      <li key={item} className="text-xs font-mono text-metal-300 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-lime-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Cosmic Takeaway */}
        <div className="p-8 rounded-3xl bg-surface-100/80 border border-white/10 text-center max-w-4xl mx-auto space-y-2">
          <span className="font-mono text-xs text-lime-400 uppercase tracking-widest font-bold">
            全球预测生态统一网络
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
            THE ORACLE NETWORK (神谕全球预测网络)
          </h3>
          <p className="text-xs sm:text-sm font-mono text-metal-300 max-w-2xl mx-auto">
            预测基础设施 (Infrastructure) + 链上声誉层 (Reputation Layer) + 去中心化预言机验证 (Blockchain Verification)。
          </p>
        </div>

      </div>
    </section>
  );
};
