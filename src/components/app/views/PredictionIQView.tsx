import React from 'react';
import { useDemo } from '../../../context/DemoContext';
import { Trophy, TrendingUp, Award, Flame, Zap, Sparkles, ShieldCheck } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export const PredictionIQView: React.FC = () => {
  const { user } = useDemo();

  // IQ History over the last 8 weeks
  const iqHistoryData = [
    { week: '第1周', iq: 650 },
    { week: '第2周', iq: 672 },
    { week: '第3周', iq: 705 },
    { week: '第4周', iq: 698 },
    { week: '第5周', iq: 728 },
    { week: '第6周', iq: 750 },
    { week: '第7周', iq: 768 },
    { week: '本周', iq: 782 },
  ];

  // 6 IQ Breakdown Dimensions
  const radarData = [
    { subject: '综合准确率 (Accuracy)', score: 85 },
    { subject: '连胜稳定性 (Consistency)', score: 90 },
    { subject: '高难度捕获 (Difficulty)', score: 78 },
    { subject: '连胜倍率 (Streak)', score: 88 },
    { subject: '形态规律能力 (Pattern)', score: 82 },
    { subject: '逆向共识得分 (Contrarian)', score: 75 },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="pb-4 border-b border-white/10 space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono text-lime-400 font-bold">
          <Trophy className="w-4 h-4" />
          <span>REPUTATION INDEX // 个人预测智商</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
          PREDICTION IQ 评级体系
        </h2>
        <p className="text-xs font-mono text-metal-300">
          基于多维密码学有效历史预测数据加权生成的个人权威声誉指数。
        </p>
      </div>

      {/* Main IQ Big Display Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-surface-100/90 border-2 border-lime-400/50 backdrop-blur-xl shadow-glow-lime/20 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="space-y-3 text-center md:text-left">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-lime-400/20 text-lime-400 border border-lime-400/40 font-bold">
            等级：神谕心智 (ORACLE MIND)
          </span>

          <div className="flex items-baseline justify-center md:justify-start gap-3">
            <span className="font-mono font-black text-6xl sm:text-8xl text-lime-400 text-glow-lime leading-none">
              {user.predictionIQ}
            </span>
            <span className="text-sm font-mono text-metal-400">/ 999 满分</span>
          </div>

          <p className="text-sm font-mono text-metal-200">
            全球分位段：<strong className="text-cyber-blue font-bold">TOP 4.8%</strong> 顶尖竞技梯队 · 获得 2 份绩效卓越分红池资格
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full md:w-auto font-mono text-xs">
          <div className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 text-center">
            <span className="text-[10px] text-metal-400 block uppercase">当前连胜</span>
            <span className="text-2xl font-black text-lime-400 my-1 block">🔥 {user.streak} 场</span>
            <span className="text-[10px] text-lime-400">1.8x 加成生效中</span>
          </div>

          <div className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 text-center">
            <span className="text-[10px] text-metal-400 block uppercase">历史最高连胜</span>
            <span className="text-2xl font-black text-white my-1 block">⚡ {user.bestStreak} 场</span>
            <span className="text-[10px] text-metal-400">历史最高纪录</span>
          </div>
        </div>

      </div>

      {/* Grid: IQ Historical Trend + 6 Dimensions Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left 7 Cols: IQ Growth Line Chart */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-4">
          <h3 className="font-display font-black text-lg text-white">
            Prediction IQ 历史成长轨迹 (8 周)
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={iqHistoryData}>
                <XAxis dataKey="week" stroke="#8B949E" fontSize={11} tickLine={false} />
                <YAxis domain={[600, 850]} stroke="#8B949E" fontSize={11} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#0D1117', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '11px', fontFamily: 'monospace' }} />
                <Line type="monotone" dataKey="iq" name="预测智商 (IQ)" stroke="#00FF66" strokeWidth={3} dot={{ r: 5, fill: '#00FF66' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right 5 Cols: Radar 6 Dimensions */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-4">
          <h3 className="font-display font-black text-lg text-white">
            六大 IQ 评估维度雷达图
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="subject" stroke="#8B949E" fontSize={10} />
                <PolarRadiusAxis domain={[0, 100]} stroke="rgba(255,255,255,0.05)" />
                <Radar name="我的智商" dataKey="score" stroke="#00E5FF" fill="#00E5FF" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* 6 Statistical Breakdowns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-xs">
        <div className="p-4 rounded-2xl bg-surface-100 border border-white/10">
          <span className="text-[10px] text-metal-400 block uppercase">号码命中率</span>
          <span className="text-xl font-black text-white my-1 block">37.2%</span>
          <span className="text-[10px] text-lime-400">Top 3% 水准</span>
        </div>

        <div className="p-4 rounded-2xl bg-surface-100 border border-white/10">
          <span className="text-[10px] text-metal-400 block uppercase">形态规律准确率</span>
          <span className="text-xl font-black text-cyber-violet my-1 block">68.4%</span>
          <span className="text-[10px] text-cyber-violet">结构推演大师</span>
        </div>

        <div className="p-4 rounded-2xl bg-surface-100 border border-white/10">
          <span className="text-[10px] text-metal-400 block uppercase">单双奇偶率</span>
          <span className="text-xl font-black text-cyber-blue my-1 block">81.0%</span>
          <span className="text-[10px] text-metal-400">稳定优势</span>
        </div>

        <div className="p-4 rounded-2xl bg-surface-100 border border-white/10">
          <span className="text-[10px] text-metal-400 block uppercase">高低半区率</span>
          <span className="text-xl font-black text-white my-1 block">73.0%</span>
          <span className="text-[10px] text-metal-400">宏观把控</span>
        </div>

        <div className="p-4 rounded-2xl bg-surface-100 border border-white/10">
          <span className="text-[10px] text-metal-400 block uppercase">焦点单码命中率</span>
          <span className="text-xl font-black text-lime-400 my-1 block">42.0%</span>
          <span className="text-[10px] text-lime-400">高信念狙击</span>
        </div>

        <div className="p-4 rounded-2xl bg-surface-100 border border-white/10">
          <span className="text-[10px] text-metal-400 block uppercase">反共识猎手分</span>
          <span className="text-xl font-black text-cyber-amber my-1 block">75.0</span>
          <span className="text-[10px] text-cyber-amber">冷门捕捉力</span>
        </div>
      </div>

    </div>
  );
};
