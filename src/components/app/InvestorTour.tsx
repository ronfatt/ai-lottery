import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDemo } from '../../context/DemoContext';
import { Sparkles, ArrowRight, ArrowLeft, X, CheckCircle2, Trophy, Compass, ShieldCheck } from 'lucide-react';

export const InvestorTour: React.FC = () => {
  const { isTourActive, tourStep, nextTourStep, prevTourStep, endTour } = useDemo();

  if (!isTourActive) return null;

  const tourStepsData = [
    {
      step: 1,
      title: '第一站：实时全球分红池 (Global Pool Ticker)',
      highlight: 'RM 384,280 实时动态增长',
      desc: '投资人请注意顶部与中部的实时全网分红池。每 5-10 秒由真实会员订阅费与赞助自动注资，R.ON 持有 8 份大师分红 (预估每月享 RM 631.12+)。',
      actionHint: '点击【下一步】前往体验核心数字预测控制台。',
    },
    {
      step: 2,
      title: '第二站：核心玩法与区块链封存 (Prediction Engine)',
      highlight: '49 选 5 定向狙击 + SHA-256 哈希盖戳',
      desc: '玩家选定 5 个号码后，点击锁定将在开奖前打上区块链不可篡改时间戳，彻底消除传统博彩的暗箱操作与事后篡改风险。',
      actionHint: '点击【下一步】查看玩家留存的核心：Prediction IQ 智商声誉。',
    },
    {
      step: 3,
      title: '第三站：预测智商与声誉档案 (Prediction IQ 782)',
      highlight: '超越输赢的终身链上智商指数',
      desc: '用户不再只是为了单次输赢，而是为了构建自己的全球排名 (#1,284) 与 5 枚灵魂绑定勋章，形成极高粘性与自豪感。',
      actionHint: '点击【下一步】查看为什么用户会自发拓展 1,248 人社群。',
    },
    {
      step: 4,
      title: '第四站：社群裂变组织树 (My Network 1,248 人)',
      highlight: '直推 50 人 · 间推 178 人 · 总社群 1,248 人',
      desc: '直观的可视化组织节点树。健康留存率 68%，每个节点都为 R.ON 贡献持续的月度会员分润与分红池资格。',
      actionHint: '点击【下一步】查看清晰的 20% + 5% 会员佣金模型。',
    },
    {
      step: 5,
      title: '第五站：推荐中心与持续收益 (Referral Economy)',
      highlight: '直推 20% + L2 间推 5% 持续月度分润',
      desc: '所有收益均来自于真实付费会员 (RM 19.90/月 PRO 或 ELITE) 的订阅分成，零本金盘，零对赌负和循环。',
      actionHint: '点击【下一步】查看最令投资人兴奋的 3 大全球分红池。',
    },
    {
      step: 6,
      title: '第六站：三大全球分红池与透明公式 (Pool Sharing)',
      highlight: '社群池 (5%) + 绩效池 (3%) + 创作者池 (2%)',
      desc: '总计 RM 384,280 分红池完全透明公式化拆解（每份 Shares = RM 78.88）。激励用户主动培育团队与提升预测技能。',
      actionHint: '点击【下一步】检验数学终极信任：全账本区块链浏览器。',
    },
    {
      step: 7,
      title: '第七站：公开全账本区块链浏览器 (Proof Explorer)',
      highlight: '默克尔树证明 · 9/9 预言机多签 · 不可篡改',
      desc: '没有任何管理员能够更改过去。数学确定性与开源智能合约建立了坚不可摧的公信力护城河。',
      actionHint: '恭喜！您已完整检视 ORACLE 49 的 7 大核心支柱。',
    },
  ];

  const current = tourStepsData[tourStep - 1] || tourStepsData[0];

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-lg w-full px-4">
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
              投资人专属演示导览 ({tourStep} / 7 步骤)
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
        <div className="space-y-2">
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
          <span className="text-[11px] text-metal-400">{current.actionHint}</span>

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
              <span>{tourStep === 7 ? '完成导览' : '下一步'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
