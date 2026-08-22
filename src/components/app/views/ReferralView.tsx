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
  ShieldCheck
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
    { member: 'David (大卫)', plan: 'ELITE 至尊版', date: '2026-08-12', status: 'ACTIVE', comm: 'RM 19.80', type: '直推 20%' },
    { member: 'Amy (艾米)', plan: 'ELITE 至尊版', date: '2026-08-14', status: 'ACTIVE', comm: 'RM 19.80', type: '直推 20%' },
    { member: 'Jason (杰森)', plan: 'PRO 专业版', date: '2026-08-15', status: 'ACTIVE', comm: 'RM 5.80', type: '直推 20%' },
    { member: 'Alex88 (阿莱克斯)', plan: 'PRO 专业版', date: '2026-08-16', status: 'ACTIVE', comm: 'RM 1.45', type: '间推 5%' },
    { member: 'Valkyrie (女武神)', plan: 'ELITE 至尊版', date: '2026-08-18', status: 'ACTIVE', comm: 'RM 4.95', type: '间推 5%' },
    { member: 'Ken (阿肯)', plan: 'PRO 专业版', date: '2026-08-19', status: 'ACTIVE', comm: 'RM 5.80', type: '直推 20%' },
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
          会员推荐与生态分润
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

      {/* 4 Metric Cards */}
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
          <span className="text-2xl font-black text-lime-400 my-1 block">RM 1,140.20</span>
          <span className="text-[10px] text-lime-400">持续按月结算</span>
        </div>

        <div className="p-4 rounded-2xl bg-surface-100/90 border border-white/10">
          <span className="text-[10px] text-metal-400 block uppercase">二级辅导津贴 (5%)</span>
          <span className="text-2xl font-black text-cyber-violet my-1 block">RM 340.40</span>
          <span className="text-[10px] text-metal-400">178 位间接成员</span>
        </div>
      </div>

      {/* How It Works Logic Cards */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl space-y-4">
        <h3 className="font-display font-black text-lg text-white">
          分润运行机制 (HOW IT WORKS)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <div className="p-5 rounded-2xl bg-surface-200/80 border border-lime-400/30 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-sm">一级直推会员分润 (Direct Referral)</span>
              <span className="px-2 py-0.5 rounded bg-lime-400 text-black font-black text-xs">20% 比例</span>
            </div>
            <p className="text-metal-300 leading-relaxed text-[11px]">
              每当您直接推荐的好友开通或续费 PRO (RM 19.90/月) 或 ELITE 会员，您将即时获得 20% 月度佣金分成。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface-200/80 border border-cyber-blue/30 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-sm">二级社群辅导奖 (L2 Community Support)</span>
              <span className="px-2 py-0.5 rounded bg-cyber-blue text-black font-black text-xs">5% 比例</span>
            </div>
            <p className="text-metal-300 leading-relaxed text-[11px]">
              当下级成员继续拓展直推时，作为组织导师，您将额外获得二级成员付费金额的 5% 持续月度管理补贴。
            </p>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-surface-50 border border-white/5 text-[11px] font-mono text-metal-400">
          • 合规说明：所有佣金仅产生于真实有效付费会员订阅交易，非资金盘拉人头奖励。
        </div>
      </div>

      {/* Recent Referral Activity Table */}
      <div className="bg-surface-100/90 border border-white/15 rounded-3xl overflow-hidden backdrop-blur-xl shadow-glass-card p-6 space-y-4">
        <h3 className="font-display font-black text-lg text-white">近期推荐收益明细 (RECENT ACTIVITY)</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead className="bg-surface-200/60 text-metal-400 text-[10px] uppercase border-b border-white/5">
              <tr>
                <th className="py-3 px-4">成员名称</th>
                <th className="py-3 px-4">订阅方案</th>
                <th className="py-3 px-4">分润类型</th>
                <th className="py-3 px-4">交易时间</th>
                <th className="py-3 px-4">会员状态</th>
                <th className="py-3 px-4 text-right">获得佣金</th>
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
