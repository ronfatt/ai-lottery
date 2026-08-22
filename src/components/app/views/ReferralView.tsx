import React, { useState } from 'react';
import { useDemo } from '../../../context/DemoContext';
import { 
  Share2, 
  Copy, 
  CheckCircle2, 
  QrCode, 
  MessageCircle, 
  Send, 
  Facebook, 
  TrendingUp, 
  Coins, 
  Users,
  ShieldCheck,
  PieChart
} from 'lucide-react';

export const ReferralView: React.FC = () => {
  const { user, showToast } = useDemo();
  const [copied, setCopied] = useState(false);

  const referralLink = 'https://oracle49.com/invite/RON49';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    showToast('专属邀请裂变链接已复制到剪贴板！');
    setTimeout(() => setCopied(false), 2000);
  };

  const referralActivities = [
    { member: 'David (大卫)', plan: 'ELITE 至尊 (30 USDT)', date: '2026-08-12', status: 'ACTIVE', comm: '+6.00 USDT', type: '直推 20%' },
    { member: 'Amy (艾米)', plan: 'ELITE 至尊 (30 USDT)', date: '2026-08-14', status: 'ACTIVE', comm: '+6.00 USDT', type: '直推 20%' },
    { member: 'Jason (杰森)', plan: 'PRO 专业 (10 USDT)', date: '2026-08-15', status: 'ACTIVE', comm: '+2.00 USDT', type: '直推 20%' },
    { member: 'Alex88 (阿莱克斯)', plan: 'PRO 专业 (10 USDT)', date: '2026-08-16', status: 'ACTIVE', comm: '+0.50 USDT', type: '间推 5%' },
    { member: 'Valkyrie (女武神)', plan: 'ELITE 至尊 (30 USDT)', date: '2026-08-18', status: 'ACTIVE', comm: '+1.50 USDT', type: '间推 5%' },
    { member: 'Ken (阿肯)', plan: 'PRO 专业 (10 USDT)', date: '2026-08-19', status: 'ACTIVE', comm: '+2.00 USDT', type: '直推 20%' },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="pb-4 border-b border-white/10 space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono text-lime-400 font-bold">
          <Share2 className="w-4 h-4" />
          <span>REFERRAL CENTER // 推荐裂变中心</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
          会员推荐与生态 USDT 分润
        </h2>
        <p className="text-xs font-mono text-metal-300">
          基于真实会员订阅的持续月度分润体系 · 一级直推 20% + 二级间推辅导奖 5%
        </p>
      </div>

      {/* Main Invite Link & Share Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-6">
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          
          <div className="space-y-2 flex-1">
            <span className="text-[10px] font-mono text-lime-400 uppercase tracking-widest font-bold block">
              您的专属邀请裂变链接
            </span>
            <div className="flex items-center gap-2 max-w-xl">
              <input
                type="text"
                readOnly
                value={referralLink}
                className="w-full bg-surface-200 border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-white select-all focus:outline-none"
              />
              <button
                onClick={handleCopy}
                className="px-5 py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-mono text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-glow-lime flex-shrink-0"
              >
                {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? '已复制' : '复制链接'}</span>
              </button>
            </div>
          </div>

          {/* Social Share Buttons */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-metal-400 uppercase block">一键分享至社交平台</span>
            <div className="flex flex-wrap items-center gap-2">
              <button onClick={handleCopy} className="px-3 py-2 rounded-xl bg-surface-200 hover:bg-surface-300 text-xs font-mono text-metal-200 hover:text-white flex items-center gap-1.5 border border-white/10">
                <MessageCircle className="w-3.5 h-3.5 text-green-400" />
                <span>微信 / WhatsApp</span>
              </button>
              <button onClick={handleCopy} className="px-3 py-2 rounded-xl bg-surface-200 hover:bg-surface-300 text-xs font-mono text-metal-200 hover:text-white flex items-center gap-1.5 border border-white/10">
                <Send className="w-3.5 h-3.5 text-cyber-blue" />
                <span>Telegram</span>
              </button>
              <button onClick={handleCopy} className="px-3 py-2 rounded-xl bg-surface-200 hover:bg-surface-300 text-xs font-mono text-metal-200 hover:text-white flex items-center gap-1.5 border border-white/10">
                <span className="font-bold">𝕏</span>
                <span>推特分享</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* 4 Metric Cards in USDT */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
        <div className="p-4 rounded-2xl bg-surface-100/90 border border-white/10">
          <span className="text-[10px] text-metal-400 block uppercase">活跃直推成员</span>
          <span className="text-2xl font-black text-white my-1 block">50 位</span>
          <span className="text-[10px] text-lime-400">已开通付费订阅</span>
        </div>

        <div className="p-4 rounded-2xl bg-surface-100/90 border border-white/10">
          <span className="text-[10px] text-metal-400 block uppercase">裂变转化率</span>
          <span className="text-2xl font-black text-cyber-blue my-1 block">24.8%</span>
          <span className="text-[10px] text-metal-400">高意愿自然增长</span>
        </div>

        <div className="p-4 rounded-2xl bg-surface-100/90 border border-white/10">
          <span className="text-[10px] text-metal-400 block uppercase">本月直推佣金 (20%)</span>
          <span className="text-2xl font-black text-lime-400 my-1 block">1,140.20 USDT</span>
          <span className="text-[10px] text-lime-400">持续按月结算</span>
        </div>

        <div className="p-4 rounded-2xl bg-surface-100/90 border border-white/10">
          <span className="text-[10px] text-metal-400 block uppercase">二级辅导津贴 (5%)</span>
          <span className="text-2xl font-black text-cyber-violet my-1 block">340.40 USDT</span>
          <span className="text-[10px] text-metal-400">178 位间接成员</span>
        </div>
      </div>

      {/* Membership Pricing & Clear USDT Commission Models */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
        
        {/* PRO Tier */}
        <div className="p-6 rounded-3xl bg-surface-100/90 border border-lime-400/40 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <span className="font-bold text-white text-base">PRO 专业会员</span>
              <span className="text-[10px] text-metal-400 block">无限预测 · 高阶数据 · 专属私域联赛</span>
            </div>
            <div className="text-right">
              <span className="font-black text-xl text-lime-400">10 USDT</span>
              <span className="text-[10px] text-metal-400 block">/ 月</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="p-3 rounded-xl bg-surface-200 border border-white/5 flex items-center justify-between">
              <span className="text-metal-300">一级直推分润 (20%):</span>
              <span className="font-bold text-lime-400 text-sm">2.00 USDT / 单</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-200 border border-white/5 flex items-center justify-between">
              <span className="text-metal-300">二级辅导津贴 (5%):</span>
              <span className="font-bold text-cyber-blue text-sm">0.50 USDT / 单</span>
            </div>
          </div>
        </div>

        {/* ELITE Tier */}
        <div className="p-6 rounded-3xl bg-surface-100/90 border border-cyber-violet/50 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <span className="font-bold text-white text-base">ELITE 至尊会员</span>
              <span className="text-[10px] text-metal-400 block">创作者工具 · 组织深度分析 · 品牌活动优先席位</span>
            </div>
            <div className="text-right">
              <span className="font-black text-xl text-cyber-violet">30 USDT</span>
              <span className="text-[10px] text-metal-400 block">/ 月</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="p-3 rounded-xl bg-surface-200 border border-white/5 flex items-center justify-between">
              <span className="text-metal-300">一级直推分润 (20%):</span>
              <span className="font-bold text-lime-400 text-sm">6.00 USDT / 单</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-200 border border-white/5 flex items-center justify-between">
              <span className="text-metal-300">二级辅导津贴 (5%):</span>
              <span className="font-bold text-cyber-blue text-sm">1.50 USDT / 单</span>
            </div>
          </div>
        </div>

      </div>

      {/* Revenue Distribution per 100 USDT */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl space-y-6 font-mono text-xs">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-white/10 gap-4">
          <div>
            <h3 className="font-display font-black text-lg text-white">
              平台百元营收健康分流模型 (PER 100 USDT NET REVENUE)
            </h3>
            <p className="text-xs text-metal-300">确保平台长期稳健盈利 · 整体社群分润封顶 ≤ 40%</p>
          </div>

          <span className="px-3 py-1 rounded-xl bg-lime-400 text-black font-black text-xs">
            TOTAL PAYOUT CAP ≤ 40%
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 text-center">
          <div className="p-3.5 rounded-2xl bg-surface-200 border border-white/5">
            <span className="text-metal-400 text-[10px] block uppercase">一级直推佣金</span>
            <span className="font-black text-base text-white my-1 block">20 USDT</span>
            <span className="text-[9px] text-lime-400">20% 比例</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-surface-200 border border-white/5">
            <span className="text-metal-400 text-[10px] block uppercase">二级间推辅导</span>
            <span className="font-black text-base text-white my-1 block">5 USDT</span>
            <span className="text-[9px] text-cyber-blue">5% 比例</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-surface-200 border border-white/5">
            <span className="text-metal-400 text-[10px] block uppercase">全球社群分红</span>
            <span className="font-black text-base text-lime-400 my-1 block">5 USDT</span>
            <span className="text-[9px] text-lime-400">5% 分红池</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-surface-200 border border-white/5">
            <span className="text-metal-400 text-[10px] block uppercase">卓越绩效分红</span>
            <span className="font-black text-base text-cyber-blue my-1 block">3 USDT</span>
            <span className="text-[9px] text-cyber-blue">3% 绩效池</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-surface-200 border border-white/5">
            <span className="text-metal-400 text-[10px] block uppercase">创作者分红</span>
            <span className="font-black text-base text-cyber-violet my-1 block">2 USDT</span>
            <span className="text-[9px] text-cyber-violet">2% 创作者池</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-surface-200 border border-white/5">
            <span className="text-metal-400 text-[10px] block uppercase">赛季赛事奖金</span>
            <span className="font-black text-base text-cyber-amber my-1 block">5 USDT</span>
            <span className="text-[9px] text-cyber-amber">5% 活动池</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-lime-400/15 border border-lime-400/50">
            <span className="text-lime-400 text-[10px] block uppercase font-bold">平台净留存</span>
            <span className="font-black text-base text-lime-400 my-1 block">60 USDT</span>
            <span className="text-[9px] text-lime-400 font-bold">60% 平台毛利</span>
          </div>
        </div>

      </div>

      {/* Recent Referral Activity Table in USDT */}
      <div className="bg-surface-100/90 border border-white/15 rounded-3xl overflow-hidden backdrop-blur-xl shadow-glass-card p-6 space-y-4 font-mono text-xs">
        <h3 className="font-display font-black text-lg text-white">近期推荐收益明细 (RECENT ACTIVITY)</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-200/60 text-metal-400 text-[10px] uppercase border-b border-white/5">
              <tr>
                <th className="py-3 px-4">成员名称</th>
                <th className="py-3 px-4">订阅方案</th>
                <th className="py-3 px-4">分润类型</th>
                <th className="py-3 px-4">交易时间</th>
                <th className="py-3 px-4">会员状态</th>
                <th className="py-3 px-4 text-right">获得佣金 (USDT)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-metal-200">
              {referralActivities.map((act) => (
                <tr key={act.member} className="hover:bg-white/5">
                  <td className="py-3.5 px-4 font-bold text-white">{act.member}</td>
                  <td className="py-3.5 px-4 text-metal-300">{act.plan}</td>
                  <td className="py-3.5 px-4 text-cyber-blue font-bold">{act.type}</td>
                  <td className="py-3.5 px-4 text-metal-400">{act.date}</td>
                  <td className="py-3.5 px-4">
                    <span className="text-[10px] font-bold text-lime-400 bg-lime-400/10 px-2 py-0.5 rounded">
                      {act.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-lime-400 text-right">{act.comm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
