import React from 'react';
import { Compass } from 'lucide-react';

export const Roadmap: React.FC = () => {
  const phases = [
    {
      phase: '阶段 01',
      title: 'ORACLE 49 核心 MVP',
      status: '已上线稳定运行',
      isCurrent: true,
      milestones: [
        '01-49 数字预测核心引擎',
        'SHA-256 密码学承诺上链封存',
        'Prediction IQ 预测智商评估算法',
        '7 大核心交互式预测游戏玩法',
        '公开全量区块链验证浏览器',
      ],
      color: '#00FF66',
    },
    {
      phase: '阶段 02',
      title: '社交竞技与天梯体系',
      status: '全面开发中',
      isCurrent: false,
      milestones: [
        '1v1 好友点对点直觉对决房间',
        '90 天季度全球排位锦标赛',
        '社区专属私域预测联赛系统',
        '战斗通行证与灵魂绑定成就勋章 (SBT)',
        '动态战绩卡片一键多端社交分享',
      ],
      color: '#00E5FF',
    },
    {
      phase: '阶段 03',
      title: '企业级品牌营销引擎',
      status: '2026 Q4 战略路线',
      isCurrent: false,
      milestones: [
        '品牌赞助定制预测营销活动',
        'F1 与英超联赛联合冠名赛事周',
        '真实世界实物周边与门票履约体系',
        '企业级市场情绪大数据 API 商业化',
        '全自动品牌资金托管智能合约',
      ],
      color: '#A855F7',
    },
    {
      phase: '阶段 04',
      title: '神谕预测宇宙 (UNIVERSE)',
      status: '2027 长期远景',
      isCurrent: false,
      milestones: [
        '通用多领域预测底层协议 API',
        '全球体育、加密市场与宏观数据预言机',
        '去中心化跨链共识验证节点网络',
        '全球预测数字身份与声誉通用标准',
      ],
      color: '#F59E0B',
    },
  ];

  return (
    <section id="roadmap" className="relative py-24 bg-[#06080B] border-t border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/3 w-[600px] h-[600px] bg-cyber-blue/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-lime-400">
            <Compass className="w-3.5 h-3.5" />
            <span>未来战略演进里程碑</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            未来发展路线图
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            从一款本地化可验证数字预测游戏，演进为全球化、多维度的通用预测网络基础设施。
          </p>
        </div>

        {/* 4 Phase Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {phases.map((phase) => (
            <div
              key={phase.phase}
              className={`p-6 rounded-3xl border flex flex-col justify-between transition-all ${
                phase.isCurrent
                  ? 'bg-surface-100/95 border-lime-400 shadow-glow-lime'
                  : 'bg-surface-50/70 border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono font-bold text-xs px-2.5 py-1 rounded-lg ${
                    phase.isCurrent ? 'bg-lime-400 text-black' : 'bg-surface-200 text-metal-300'
                  }`}>
                    {phase.phase}
                  </span>
                  <span className="text-[9px] font-mono text-metal-400">
                    {phase.status}
                  </span>
                </div>

                <h3 className="font-display font-black text-xl text-white mb-4">
                  {phase.title}
                </h3>

                <ul className="space-y-2.5 pt-4 border-t border-white/10">
                  {phase.milestones.map((m) => (
                    <li key={m} className="text-xs font-mono text-metal-300 flex items-start gap-2">
                      <span className="text-lime-400 mt-0.5">•</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Sub-banner */}
        <div className="text-center">
          <span className="font-mono text-sm font-bold text-lime-400 tracking-wider uppercase">
            从一款数字预测游戏 → 蜕变成为全球可验证预测网络基础设施
          </span>
        </div>

      </div>
    </section>
  );
};
