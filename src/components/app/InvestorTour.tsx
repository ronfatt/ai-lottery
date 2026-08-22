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
      title: '第一站：核心基本盘 · 数字预测 (Core Number Prediction)',
      highlight: 'ORACLE 49 主网核心玩法 · 60% 平台基石',
      desc: '数字预测是 ORACLE 49 的立足之本与高频基础。我们绝不改变或削弱数字预测的根基，这是整个网络最高频的用户粘性来源。',
      actionHint: '点击【下一步】查看客观公开的数据源机制。',
    },
    {
      step: 2,
      title: '第二站：香港六合彩公开开奖参考 (Public Result Oracle)',
      highlight: '客观不可操纵的公共数据源 (HK Mark Six)',
      desc: '平台自身不产生也不改变开奖结果。所有 01-49 预测均锚定公开电视/官方摇号的真实世界结果，彻底消除传统博彩的黑箱做庄与算法暗箱。',
      actionHint: '点击【下一步】体验选号封存与超级组合卡。',
    },
    {
      step: 3,
      title: '第三站：01-49 选号与超级卡 (Lock Prediction & Super Call)',
      highlight: '8 合 1 超级推演卡 + SHA-256 密码学时间戳',
      desc: '支持 5 码定向猎手、焦点单码、奇偶天平、高低半区等 7 大玩法，更有一键【ORACLE 49 SUPER CALL】将 8 大预测维度合一在链上封存。',
      actionHint: '点击【下一步】查看玩家留存的核心：Prediction IQ。',
    },
    {
      step: 4,
      title: '第四站：多维预测智商体系 (Prediction IQ & F1 IQ)',
      highlight: '综合 IQ 782 · F1 IQ 824 · 技能身份认证',
      desc: '用户留存的核心是声誉与智商指数，而非短期赌博输赢。平台支持多品类细分智商认证，证明用户的专业直觉与推演实力。',
      actionHint: '点击【下一步】查看纯净的 USDT 钱包与清算模型。',
    },
    {
      step: 5,
      title: '第五站：纯净 USDT 资产钱包 (USDT Wallet)',
      highlight: '1,842.60 USDT 可用余额 · 零代币合规体系',
      desc: '全面采用 USDT 作为数字结算单位。不发行高波动空气币，不搞质押理财 (APY)，所有资金收益完全来源于真实付费会员与品牌赞助。',
      actionHint: '点击【下一步】查看清晰的 20% + 5% 会员裂变体系。',
    },
    {
      step: 6,
      title: '第六站：推荐佣金与会员晋升 (Referral & Ranking)',
      highlight: 'PRO (10 USDT) 享 2 USDT · ELITE (30 USDT) 享 6 USDT',
      desc: '直推 20% + L2 间推 5% 持续月度分润。辅以 6 阶晋级天梯（见习至神谕至尊 20 份分红），激励团队长期健康经营。',
      actionHint: '点击【下一步】查看最令投资人兴奋的 3 大全球分红池。',
    },
    {
      step: 7,
      title: '第七站：三大全球分红池与透明公式 (Pool Sharing)',
      highlight: '384,280 USDT 实时分红池 · 社群5% + 绩效3% + 创作者2%',
      desc: '公式完全透明（单份 = 78.88 USDT）。用户通过培育健康组织与提高预测命中率获得更多 Shares，共享全网生态增长红利。',
      actionHint: '点击【下一步】检视横向扩展的杀手级应用：F1 赛车预测。',
    },
    {
      step: 8,
      title: '第八站：特色推荐赛事 · 2026 F1 马来西亚雪邦 (F1 Prediction)',
      highlight: '⭐ 特色赛事推荐 · 雪邦 SUPER 10 综合遥测',
      desc: '验证了预测引擎的无限扩展性！从 49 数字无缝扩展至 F1 杆位、领奖台、安全车与雨战预测，打通顶级赛事与品牌赞助营销。',
      actionHint: '点击【下一步】检验全账本区块链浏览器。',
    },
    {
      step: 9,
      title: '第九站：全账本区块链浏览器 (Proof Explorer)',
      highlight: '默克尔树证明 · 9/9 节点多签 · 不可篡改',
      desc: '没有任何管理员能够篡改过去。密码学确定性与开源智能合约构成了 ORACLE 49 坚不可摧的公信力护城河。',
      actionHint: '点击【下一步】查看预测游戏大厅与全球生态远景。',
    },
    {
      step: 10,
      title: '第十站：全品类预测生态宇宙 (Expansion Ecosystem)',
      highlight: '始于数字，延展至体育、市场、文娱与全球大事件',
      desc: '投资人请记住：数字预测是起点，预测基础设施是平台。我们正在构建全球最大的可验证预测竞技网络！',
      actionHint: '恭喜！您已完整检视 ORACLE 49 的 10 大核心产品支柱。',
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
