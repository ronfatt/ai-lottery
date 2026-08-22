import React from 'react';
import { motion } from 'framer-motion';
import { useDemo } from '../../context/DemoContext';
import { Sparkles, ArrowRight, ArrowLeft, X, ShieldCheck } from 'lucide-react';

export const InvestorTour: React.FC = () => {
  const { isTourActive, tourStep, nextTourStep, prevTourStep, endTour } = useDemo();

  if (!isTourActive) return null;

  const tourStepsData = [
    {
      step: 1,
      title: '01 核心基本盘 · 01–49 数字预测 (Core Number Prediction)',
      highlight: 'ORACLE 49 主网核心玩法 · 60% 平台基石',
      desc: '数字预测是 ORACLE 49 的立足之本与高频基础。参考客观中立的香港六合彩公开摇号数据（6正码 + 1特别号），提供 8 合 1 SUPER CALL 等 7 大玩法。',
      actionHint: '点击【下一步】查看密码学时间戳与链上存证机制。',
    },
    {
      step: 2,
      title: '02 密码学存证与公信力 (Prediction Proof)',
      highlight: 'SHA-256 承诺哈希 · 9/9 节点多签 · 零黑箱篡改',
      desc: '任何用户预测均在开奖/发布前于链上打上毫秒级时间戳封存。没有任何管理员或庄家能在结果产生后篡改历史，彻底解决传统博彩黑箱。',
      actionHint: '点击【下一步】查看玩家留存的核心资产：Prediction IQ。',
    },
    {
      step: 3,
      title: '03 多维预测技能智商体系 (Specialist Skills & IQ)',
      highlight: '综合 IQ 782 · F1 IQ 824 · Racing IQ 768 · Tech IQ 811',
      desc: '用户留存的核心是声誉与智商指数，而非短期赌博输赢。平台通过专属技能智商认证用户的专业直觉与推演实力，建立去中心化声誉网络。',
      actionHint: '点击【下一步】查看纯净的 USDT 钱包与清算模型。',
    },
    {
      step: 4,
      title: '04 纯净 USDT 奖金钱包 (USDT Wallet)',
      highlight: '1,842.60 USDT 可用余额 · 零代币合规体系',
      desc: '全面采用 USDT 作为数字结算单位。不发行高波动空气币，不搞质押理财 (APY)，所有资金收益完全来源于真实付费会员与品牌赞助。',
      actionHint: '点击【下一步】查看透明的三大全网分红池。',
    },
    {
      step: 5,
      title: '05 全网分红池共享机制 (Pool Sharing)',
      highlight: '384,280 USDT 实时分红池 · 社群5% + 绩效3% + 创作者2%',
      desc: '公式完全透明（单份 = 78.88 USDT）。用户通过培育健康组织与提高预测命中率获得更多加权 Shares，共享全网生态增长红利。',
      actionHint: '点击【下一步】检视特色推荐：F1 赛车极速预测。',
    },
    {
      step: 6,
      title: '06 特色推荐赛事：F1 赛车极速预测 (F1 Expansion)',
      highlight: '⭐ 特色赛事推荐 · 2026 雪邦大奖赛 50,000 USDT 奖池',
      desc: '验证了预测引擎的无限扩展性！从 49 数字无缝扩展至 F1 分站冠军、杆位、领奖台、安全车与热带雨战等多达 10 项遥测推演。',
      actionHint: '点击【下一步】检视热门体育：香港赛马日推演。',
    },
    {
      step: 7,
      title: '07 热门体育拓展：香港赛马日推演 (Horse Racing)',
      highlight: '🔥 热门体育 · 沙田/跑马地 RACE DAY SUPER 8',
      desc: '基于公开赛马赛果参考，推演头马独赢、前三名次、骑师战术对抗、档位步速与全日 SUPER 8。完全摆脱博彩盘口，专注数据推演竞技。',
      actionHint: '点击【下一步】检视重磅全新上线的科技新品发布推演！',
    },
    {
      step: 8,
      title: '08 全新突破品类：10月科技新品发布推演 (Tech Launch)',
      highlight: '🚀 NEW CATEGORY · October Smartphone Watch',
      desc: '推演各大科技巨头发布周期与精确开幕日期。仅以官方新闻稿与发布会为结算依据，证明 ORACLE 预测万物客观事实的超强延展能力！',
      actionHint: '点击【下一步】查看通用预测引擎架构。',
    },
    {
      step: 9,
      title: '09 全品类超级预测应用矩阵 (Multi-Event Prediction Engine)',
      highlight: 'DIFFERENT EVENTS. ONE PREDICTION ENGINE.',
      desc: '同一个底层去中心化预测引擎，无缝赋能数字、F1、赛马、科技新品、足球、电竞、文娱与全球大事件，构建全球统一的可验证预测基础设施。',
      actionHint: '点击【下一步】查看 ORACLE 49 的全球愿景。',
    },
    {
      step: 10,
      title: '10 全球预测生态宏伟愿景 (Global Prediction Vision)',
      highlight: 'CALL THE LAUNCH BEFORE THE BRAND DOES.',
      desc: '投资人请记住：数字预测是起点，科技与全球事实预测是星辰大海。我们正在构建全球最大的去中心化可验证预测超级应用！',
      actionHint: '恭喜！您已完整检视 ORACLE 49 预测超级应用全景体系。',
    },
  ];

  const current = tourStepsData[tourStep - 1] || tourStepsData[0];

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-lg w-full px-4 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30 }}
        className="bg-[#0D1117]/95 border-2 border-lime-400 rounded-3xl p-6 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,255,102,0.35)] space-y-4 text-white relative"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-ping" />
            <span className="font-mono font-black text-xs text-lime-400 uppercase tracking-wider">
              投资人全景导览 ({tourStep} / 10 步骤)
            </span>
          </div>

          <button
            onClick={endTour}
            className="p-1.5 rounded-lg bg-surface-200 text-metal-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-2 font-mono">
          <h4 className="font-display font-black text-lg text-white">
            {current.title}
          </h4>
          <div className="inline-block px-2.5 py-0.5 rounded-md bg-lime-400/20 text-lime-400 font-mono text-xs font-bold border border-lime-400/30">
            {current.highlight}
          </div>
          <p className="text-xs font-mono text-metal-200 leading-relaxed pt-1">
            {current.desc}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono">
          <span className="text-[11px] text-metal-400 truncate max-w-[200px]">{current.actionHint}</span>

          <div className="flex items-center gap-2">
            {tourStep > 1 && (
              <button
                onClick={prevTourStep}
                className="px-3 py-1.5 rounded-lg bg-surface-200 text-metal-300 hover:text-white border border-white/10 flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>上一步</span>
              </button>
            )}

            <button
              onClick={nextTourStep}
              className="px-4 py-1.5 rounded-lg bg-lime-400 text-black font-bold uppercase tracking-wider hover:bg-lime-300 transition-all flex items-center gap-1.5 shadow-glow-lime"
            >
              <span>{tourStep === 10 ? '完成导览' : '下一步'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
