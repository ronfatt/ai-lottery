import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

export const SeasonSystem: React.FC = () => {
  const leaders = [
    { rank: '01', name: 'NOVA77', score: '28,420', iq: '842', badge: '👑', isTop: true },
    { rank: '02', name: 'RON (我)', score: '26,870', iq: '782', badge: '⚡', isUser: true },
    { rank: '03', name: 'ORBIT (极轨)', score: '25,940', iq: '768', badge: '🔥' },
    { rank: '04', name: 'DAVID (大卫)', score: '24,680', iq: '741', badge: '🎯' },
    { rank: '05', name: 'VALKYRIE (女武神)', score: '23,190', iq: '735', badge: '🛡️' },
    { rank: '06', name: 'CYBER_K (赛博K)', score: '22,400', iq: '719', badge: '💫' },
  ];

  return (
    <section className="relative py-24 bg-[#06080B] border-t border-white/10 overflow-hidden">
      {/* Background radial */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyber-violet/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-lime-400">
            <Crown className="w-3.5 h-3.5" />
            <span>季度锦标赛与战斗通行证</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase">
            每一次预测都至关重要。
          </h2>

          <p className="text-metal-200 text-sm sm:text-base">
            参与为期 90 天的季度天梯赛季。升级战斗通行证，解锁稀有链上灵魂绑定勋章，瓜分品牌企业赞助的实物与现金奖池。
          </p>
        </div>

        {/* Main Grid: Season Progress + Global Leaderboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Season 08 Pass Progress */}
          <div className="lg:col-span-6 bg-surface-100/90 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-glass-card space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono text-lime-400 uppercase tracking-widest font-bold">
                  当前进行中锦标赛
                </span>
                <h3 className="font-display font-black text-2xl text-white">第 08 赛季：巅峰对决 (APEX)</h3>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-mono text-metal-400 block uppercase">赛季结算倒计时</span>
                <span className="text-xs font-mono font-bold text-lime-400">剩余 23 天 14 小时</span>
              </div>
            </div>

            {/* Level & XP Progress Card */}
            <div className="p-6 rounded-2xl bg-surface-200/90 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-lime-400 text-black flex items-center justify-center font-mono font-black text-xl shadow-glow-lime">
                    27
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-metal-400 uppercase block">当前等级</span>
                    <span className="font-display font-bold text-lg text-white">通行证 第 27 级</span>
                  </div>
                </div>

                <div className="text-right font-mono">
                  <span className="text-[10px] text-metal-400 block">赛季累计经验值</span>
                  <span className="text-xs font-bold text-white">12,480 / 15,000 XP</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="w-full h-3 bg-surface-300 rounded-full overflow-hidden p-0.5 border border-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '83.2%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-lime-400 to-cyber-blue rounded-full shadow-[0_0_12px_#00FF66]"
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-metal-400">
                  <span>已完成 83.2% 进度</span>
                  <span>距解锁下一阶还需 2,520 XP</span>
                </div>
              </div>
            </div>

            {/* Next Unlocked Reward Milestone */}
            <div className="p-4 rounded-2xl bg-cyber-violet/10 border border-cyber-violet/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyber-violet/20 border border-cyber-violet/40 flex items-center justify-center text-xl">
                  🏆
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyber-violet uppercase font-bold block">
                    第 28 级解锁专属奖励
                  </span>
                  <span className="font-mono font-bold text-sm text-white">
                    神谕大师徽章 (SBT) + 500 游戏积分
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-cyber-violet text-white font-bold">
                28 级解锁
              </span>
            </div>

          </div>

          {/* Right Column: Global Season Leaderboard */}
          <div className="lg:col-span-6 bg-surface-100/90 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-glass-card space-y-4">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono text-metal-400 uppercase tracking-widest">
                  全球实时排名
                </span>
                <h3 className="font-display font-black text-2xl text-white">赛季天梯排行榜</h3>
              </div>
              <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-surface-200 text-lime-400 border border-lime-400/30">
                链上实时同步
              </span>
            </div>

            {/* Leaderboard List */}
            <div className="space-y-2">
              {leaders.map((leader) => (
                <div
                  key={leader.name}
                  className={`p-3.5 rounded-xl border flex items-center justify-between transition-all font-mono text-xs ${
                    leader.isUser
                      ? 'bg-lime-400/15 border-lime-400/50 text-white shadow-glow-lime/10'
                      : leader.isTop
                      ? 'bg-surface-200/90 border-cyber-amber/40 text-white'
                      : 'bg-surface-200/50 border-white/5 text-metal-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 text-center font-black ${
                      leader.isTop ? 'text-cyber-amber' : leader.isUser ? 'text-lime-400' : 'text-metal-400'
                    }`}>
                      {leader.rank}
                    </span>
                    <span className="text-base">{leader.badge}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">{leader.name}</span>
                      {leader.isUser && (
                        <span className="px-1.5 py-0.2 rounded text-[8px] font-bold bg-lime-400 text-black">
                          你
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-[10px] text-metal-400 hidden sm:inline">
                      智商: <strong className="text-metal-200">{leader.iq}</strong>
                    </span>
                    <span className="font-bold text-lime-400 text-sm">{leader.score} XP</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <span className="text-[11px] font-mono text-metal-400">
                赛季前 100 强选手直接晋级年度品牌企业赞助大师赛
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
