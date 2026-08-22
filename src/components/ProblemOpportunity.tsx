import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const ProblemOpportunity: React.FC = () => {
  const oldModelItems = [
    { title: '押注 (BET)', desc: '对抗庄家预设数学期望值的负收益死局', icon: '01' },
    { title: '赔率 (ODDS)', desc: '黑箱抽水机制与不可见的人工控盘算法', icon: '02' },
    { title: '出金 (PAYOUT)', desc: '高额对手方违约风险与中心化提现限制', icon: '03' },
    { title: '庄家 (HOUSE)', desc: '平台利润直接建立在用户的亏损与痛苦之上', icon: '04' },
  ];

  const newModelItems = [
    { title: '预测 (PREDICT)', desc: '基于公开客观真实事件的纯粹直觉与数据推演', icon: '01' },
    { title: '存证 (PROVE)', desc: '开奖前在区块链完成 SHA-256 密码学时间戳盖戳', icon: '02' },
    { title: '声誉 (RANK)', desc: '构建永久属于玩家的 Prediction IQ 与全球竞技排名', icon: '03' },
    { title: '竞技 (COMPETE)', desc: '玩家间天梯联赛、品牌实物奖池与社区锦标赛', icon: '04' },
  ];

  return (
    <section id="how-it-works" className="relative py-24 bg-[#06080B] border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-lime-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-metal-300">
            <Sparkles className="w-3.5 h-3.5 text-lime-400" />
            <span>核心范式转移</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white uppercase">
            从博彩投注 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyber-blue">
              走向全球可验证预测网络
            </span>
          </h2>

          <p className="text-metal-200 text-sm sm:text-base leading-relaxed">
            ORACLE 49 保留了数字预测带来的心跳与刺激，同时将整个产品底层重构为围绕 <span className="text-white font-semibold">透明度、链上声誉与社交竞技</span> 的健康游戏网络。
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Box: The Old Model (Glitch / Fade) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-surface-50/70 border border-red-500/20 relative overflow-hidden backdrop-blur-md"
          >
            <div className="flex items-center justify-between pb-6 border-b border-red-500/15">
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-400" />
                <h3 className="font-mono font-bold text-sm tracking-widest text-red-400 uppercase">
                  传统博彩赌场模式
                </h3>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/10 text-red-400 border border-red-500/20">
                负和收割 / 零和博弈
              </span>
            </div>

            <div className="space-y-4 my-6">
              {oldModelItems.map((item) => (
                <div
                  key={item.title}
                  className="p-3.5 rounded-xl bg-surface-100/60 border border-red-500/10 flex items-start gap-4 opacity-75 hover:opacity-100 transition-opacity group"
                >
                  <span className="font-mono text-xs text-red-400/80 font-bold mt-0.5">
                    {item.icon}
                  </span>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-black text-sm tracking-wider text-red-300 line-through decoration-red-500/80">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-xs text-metal-300 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-red-500/10 text-xs font-mono text-red-400/80 flex items-center justify-between">
              <span>平台底层逻辑：</span>
              <span className="font-semibold">靠用户亏损来实现盈利</span>
            </div>
          </motion.div>

          {/* Right Box: The New Oracle Model (Glowing Lime & Blue) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-surface-100/90 border border-lime-400/40 relative overflow-hidden backdrop-blur-xl shadow-glow-lime/20"
          >
            {/* Top Glow Bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-lime-400 via-cyber-blue to-lime-400 shadow-[0_0_20px_#00FF66]" />

            <div className="flex items-center justify-between pb-6 border-b border-lime-400/20">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-lime-400" />
                <h3 className="font-mono font-bold text-sm tracking-widest text-lime-400 uppercase">
                  ORACLE 49 新型预测范式
                </h3>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-lime-400/15 text-lime-400 border border-lime-400/40 font-bold">
                数学证明 · 智力声誉
              </span>
            </div>

            <div className="space-y-4 my-6">
              {newModelItems.map((item) => (
                <div
                  key={item.title}
                  className="p-3.5 rounded-xl bg-surface-200/90 border border-lime-400/20 hover:border-lime-400/50 flex items-start gap-4 transition-all shadow-[0_2px_12px_rgba(0,0,0,0.3)] hover:shadow-glow-lime/20 group"
                >
                  <span className="font-mono text-xs text-lime-400 font-bold mt-0.5">
                    {item.icon}
                  </span>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-black text-sm tracking-wider text-white group-hover:text-lime-400 transition-colors">
                        {item.title}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                    </div>
                    <p className="text-xs text-metal-200 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-lime-400/20 text-xs font-mono text-lime-400 flex items-center justify-between">
              <span>平台底层逻辑：</span>
              <span className="font-semibold text-white">奖励技能、准确率与社交成就地位</span>
            </div>
          </motion.div>

        </div>

        {/* Central Investor Key Takeaway */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 rounded-xl bg-surface-100 border border-white/10 text-center max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left space-y-1">
              <span className="text-[11px] font-mono text-lime-400 uppercase tracking-widest font-bold">
                投资人核心逻辑
              </span>
              <p className="text-xs sm:text-sm text-metal-200">
                我们正在打造<strong>可验证预测网络基础设施</strong>——将预测娱乐从掠夺性博彩资产负债表中彻底解耦。
              </p>
            </div>
            <a
              href="#live-demo"
              className="flex-shrink-0 px-4 py-2.5 rounded-lg text-xs font-mono font-bold bg-white/10 hover:bg-lime-400 hover:text-black text-white transition-all flex items-center gap-2"
            >
              <span>亲自测试运行机制</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
