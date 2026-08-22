import React from 'react';
import { useDemo } from '../../../context/DemoContext';
import { Crown, Sparkles, Trophy, CheckCircle2, CircleDashed, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const SeasonView: React.FC = () => {
  const { user } = useDemo();

  const missions = [
    { title: '每日预测挑战 (Daily Prediction)', progress: '5 / 5', completed: true, xp: '+250 XP' },
    { title: '连胜达成 10 场 (Prediction Streak)', progress: '6 / 10', completed: false, xp: '+500 XP' },
    { title: '发起 5 场好友直觉对决 (Challenge Friends)', progress: '3 / 5', completed: false, xp: '+300 XP' },
    { title: '周度天梯稳居前 10 强 (Top 10 Weekly)', progress: '已达成', completed: true, xp: '+1000 XP' },
    { title: '社群新增 20 位活跃先驱 (Community Growth)', progress: '18 / 20', completed: false, xp: '+800 XP' },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="pb-4 border-b border-white/10 space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono text-lime-400 font-bold">
          <Crown className="w-4 h-4" />
          <span>TOURNAMENT PASS // 季度天梯通行证</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
          第 08 赛季：巅峰对决 (SEASON 08 APEX)
        </h2>
        <p className="text-xs font-mono text-metal-300">
          90 天季度全球天梯锦标赛 · 剩余 23 天 14 小时结算
        </p>
      </div>

      {/* Main Battle Pass Progress Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border-2 border-lime-400/50 backdrop-blur-xl shadow-glow-lime/20 space-y-6">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-lime-400 text-black flex items-center justify-center font-mono font-black text-2xl shadow-glow-lime">
              {user.seasonLevel}
            </div>
            <div>
              <span className="text-[10px] font-mono text-metal-400 uppercase tracking-widest block">当前通行证阶位</span>
              <h3 className="font-display font-black text-2xl text-white">
                LEVEL 27 (神谕大师阶)
              </h3>
            </div>
          </div>

          <div className="text-right font-mono">
            <span className="text-xs text-metal-400 block">赛季当前积分</span>
            <span className="font-mono font-black text-2xl text-lime-400">
              {user.seasonPoints.toLocaleString()} PTS (全球第 2 名)
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-metal-300">升级至 Level 28 所需经验：</span>
            <span className="text-lime-400 font-bold">12,480 / 15,000 XP (83.2%)</span>
          </div>
          <div className="w-full h-3.5 bg-surface-300 rounded-full overflow-hidden p-0.5 border border-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '83.2%' }}
              transition={{ duration: 1 }}
              className="h-full bg-gradient-to-r from-lime-400 to-cyber-blue rounded-full shadow-[0_0_12px_#00FF66]"
            />
          </div>
        </div>

        {/* Level 28 Next Unlock Reward */}
        <div className="p-4 rounded-2xl bg-cyber-violet/15 border border-cyber-violet/40 flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏆</span>
            <div>
              <span className="text-cyber-violet font-bold uppercase block text-[10px]">
                下一阶 28 级解锁奖励 (LEVEL 28 REWARD)
              </span>
              <span className="text-white font-bold text-sm">
                神谕大师徽章 (SBT 灵魂绑定) + 500 Oracle Credits 积分
              </span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-xl bg-cyber-violet text-white font-bold text-xs">
            还需 2,520 XP
          </span>
        </div>

      </div>

      {/* Season Missions Task List */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-4">
        
        <div className="pb-3 border-b border-white/10 flex items-center justify-between">
          <div>
            <h3 className="font-display font-black text-lg text-white">
              本赛季高额经验任务 (SEASON MISSIONS)
            </h3>
            <p className="text-xs font-mono text-metal-300">完成任务加速解锁通行证等级与专属奖池</p>
          </div>
          <span className="text-xs font-mono text-lime-400">进行中</span>
        </div>

        <div className="space-y-2.5">
          {missions.map((m) => (
            <div
              key={m.title}
              className={`p-4 rounded-2xl border flex items-center justify-between font-mono text-xs transition-all ${
                m.completed
                  ? 'bg-lime-400/10 border-lime-400/30 text-white'
                  : 'bg-surface-200/80 border-white/5 text-metal-200'
              }`}
            >
              <div className="flex items-center gap-3">
                {m.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-lime-400 flex-shrink-0" />
                ) : (
                  <CircleDashed className="w-5 h-5 text-metal-400 flex-shrink-0" />
                )}
                <div>
                  <span className="font-bold block text-white">{m.title}</span>
                  <span className="text-[10px] text-metal-400">进度：{m.progress}</span>
                </div>
              </div>

              <div className="text-right">
                <span className="font-bold text-lime-400 text-sm">{m.xp}</span>
                <span className="text-[9px] text-metal-400 block">{m.completed ? '已领取' : '未完成'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
