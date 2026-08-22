import React from 'react';
import { useDemo } from '../../../context/DemoContext';
import { Gauge, Flag, Trophy, Flame, Zap, Award, ShieldCheck } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export const F1IQView: React.FC = () => {
  const { user } = useDemo();

  const f1RadarData = [
    { subject: '排位杆位推演 (Qualifying)', score: 88 },
    { subject: '正赛进站策略 (Strategy)', score: 79 },
    { subject: '雨战直觉直击 (Wet Weather)', score: 92 },
    { subject: '安全车出动嗅觉 (Safety Car)', score: 84 },
    { subject: '车手直接对抗 (Driver Duel)', score: 76 },
    { subject: '黑马领奖台捕捉 (Podium P3)', score: 70 },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="pb-4 border-b border-white/10 space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono text-cyber-amber font-bold">
          <Flag className="w-4 h-4" />
          <span>MOTORSPORT IQ // 赛车专项预测智商</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
          F1 赛车专属预测智商 (F1 IQ)
        </h2>
        <p className="text-xs font-mono text-metal-300">
          基于全球顶级大奖赛排位、正赛战术与遥测数据推演生成的专项声誉指数。
        </p>
      </div>

      {/* Main F1 IQ Display Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-surface-100/90 border-2 border-cyber-amber/50 backdrop-blur-xl shadow-[0_0_60px_rgba(245,158,11,0.2)] flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="space-y-3 text-center md:text-left">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyber-amber/20 text-cyber-amber border border-cyber-amber/40 font-bold">
            专项评级：雪邦围场大师 (PADDOCK MASTER)
          </span>

          <div className="flex items-baseline justify-center md:justify-start gap-3">
            <span className="font-mono font-black text-6xl sm:text-8xl text-cyber-amber text-glow-amber leading-none">
              {user.f1IQ}
            </span>
            <span className="text-sm font-mono text-metal-400">/ 999 满分</span>
          </div>

          <p className="text-sm font-mono text-metal-200">
            全马排位：<strong className="text-white font-bold">#{user.f1RankMalaysia} 名</strong> · 全球 F1 排名：<strong className="text-cyber-blue font-bold">#{user.f1RankGlobal} 名</strong> · 综合准确率：<strong className="text-lime-400 font-bold">{user.f1Accuracy}%</strong>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full md:w-auto font-mono text-xs">
          <div className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 text-center">
            <span className="text-[10px] text-metal-400 block uppercase">雨战推演加成</span>
            <span className="text-2xl font-black text-cyber-blue my-1 block">92 分</span>
            <span className="text-[10px] text-cyber-blue">热带雨战大师</span>
          </div>

          <div className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 text-center">
            <span className="text-[10px] text-metal-400 block uppercase">杆位捕获率</span>
            <span className="text-2xl font-black text-lime-400 my-1 block">88 分</span>
            <span className="text-[10px] text-lime-400">极速一圈洞察</span>
          </div>
        </div>

      </div>

      {/* 6 Dimension Radar */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-4">
        <h3 className="font-display font-black text-lg text-white">
          F1 赛车六大推演维度雷达图
        </h3>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={f1RadarData}>
              <PolarGrid stroke="rgba(255,255,255,0.1)" />
              <PolarAngleAxis dataKey="subject" stroke="#8B949E" fontSize={11} />
              <PolarRadiusAxis domain={[0, 100]} stroke="rgba(255,255,255,0.05)" />
              <Radar name="F1 智商" dataKey="score" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.4} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};
