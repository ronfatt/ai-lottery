import React from 'react';
import { useDemo } from '../../../context/DemoContext';
import { Activity, Users, CheckCircle2, TrendingUp, ShieldCheck, HeartPulse } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export const CommunityView: React.FC = () => {
  const { user } = useDemo();

  const healthDimensions = [
    { name: '活跃付费订阅 (Active Subs)', score: 88, status: '优秀' },
    { name: '社群周期留存率 (Retention)', score: 68, status: '良好 (达标)' },
    { name: '预测参与频次 (Participation)', score: 81, status: '极高活跃' },
    { name: '创作者内容互动 (Engagement)', score: 74, status: '健康' },
    { name: '新成员转化速度 (Growth Velocity)', score: 79, status: '稳健' },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="pb-4 border-b border-white/10 space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono text-lime-400 font-bold">
          <HeartPulse className="w-4 h-4" />
          <span>COMMUNITY HEALTH // 社群健康度</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
          社群健康指数与活跃诊断
        </h2>
        <p className="text-xs font-mono text-metal-300">
          关注组织质量而非虚假人头 · 综合健康评分决定分红池加权资格
        </p>
      </div>

      {/* Main Health Status Big Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border-2 border-lime-400/50 backdrop-blur-xl shadow-glow-lime/20 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/20 text-lime-400 border border-lime-400/40 text-xs font-mono font-bold">
            <CheckCircle2 className="w-4 h-4" />
            <span>评级状态：HEALTHY COMMUNITY ✓ (极度健康社群)</span>
          </div>

          <div className="flex items-baseline justify-center md:justify-start gap-3">
            <span className="font-mono font-black text-5xl sm:text-7xl text-lime-400 text-glow-lime">
              8,420
            </span>
            <span className="text-xs font-mono text-metal-400">/ 10,000 综合健康分</span>
          </div>

          <p className="text-xs font-mono text-metal-200">
            活跃社群：<strong>1,248 位</strong> · 留存率：<strong>68%</strong> · 预测参与率：<strong>81%</strong>
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-surface-200 border border-white/10 font-mono text-xs text-center space-y-1">
          <span className="text-[10px] text-metal-400 block uppercase">分红池资格判定</span>
          <span className="text-lime-400 font-black text-base">全部指标达标 ✓</span>
          <span className="text-[10px] text-metal-300">符合神谕大师 8 份分红要求</span>
        </div>

      </div>

      {/* Health Dimensions Score List */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl space-y-6">
        <h3 className="font-display font-black text-lg text-white">
          五大社群健康构成要素 (HEALTH COMPOSITION)
        </h3>

        <div className="space-y-4 font-mono text-xs">
          {healthDimensions.map((dim) => (
            <div key={dim.name} className="space-y-1.5 p-4 rounded-2xl bg-surface-200/70 border border-white/5">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white">{dim.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-metal-400">{dim.score} / 100 分</span>
                  <span className="px-2 py-0.5 rounded bg-lime-400/20 text-lime-400 text-[10px] font-bold">
                    {dim.status}
                  </span>
                </div>
              </div>

              <div className="w-full h-2 bg-surface-300 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-lime-400 to-cyber-blue rounded-full" 
                  style={{ width: `${dim.score}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
