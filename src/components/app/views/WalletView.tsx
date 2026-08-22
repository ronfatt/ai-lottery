import React from 'react';
import { useDemo } from '../../../context/DemoContext';
import { Wallet, Sparkles, Coins, ArrowUpRight, ArrowDownLeft, ShieldCheck, History } from 'lucide-react';

export const WalletView: React.FC = () => {
  const { user, walletTransactions, showToast } = useDemo();

  const handleWithdraw = () => {
    showToast('演示模式：提领申请已提交，将于下个银行工作日处理。', 'info');
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="pb-4 border-b border-white/10 space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono text-lime-400 font-bold">
          <Wallet className="w-4 h-4" />
          <span>ASSET WALLET // 奖金钱包</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
          会员收益与闭环积分钱包
        </h2>
        <p className="text-xs font-mono text-metal-300">
          安全合规收益归集账户 · 杜绝高风险投机代币 · 纯粹会员分润与闭环积分
        </p>
      </div>

      {/* 2 Big Cards: Cash Balance & Oracle Credits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Cash Balance */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border-2 border-lime-400/50 backdrop-blur-xl shadow-glow-lime/20 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-lime-400 font-bold uppercase">
              可提领奖励余额 (AVAILABLE REWARDS)
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-lime-400/20 text-lime-400 border border-lime-400/30">
              正常可用
            </span>
          </div>

          <div className="font-mono font-black text-4xl sm:text-6xl text-white text-glow-lime">
            RM {user.walletBalance.toFixed(2)}
          </div>

          <div className="grid grid-cols-2 gap-3 font-mono text-xs pt-2 border-t border-white/10">
            <div>
              <span className="text-metal-400 text-[10px] block">待清算入账 (PENDING)</span>
              <span className="font-bold text-white">RM {user.pendingRewards.toFixed(2)}</span>
            </div>
            <div>
              <span className="text-metal-400 text-[10px] block">历史累计总收益 (LIFETIME)</span>
              <span className="font-bold text-lime-400">RM {user.lifetimeRewards.toLocaleString()}</span>
            </div>
          </div>

          <div className="pt-2 flex gap-3 font-mono text-xs">
            <button
              onClick={handleWithdraw}
              className="flex-1 py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-glow-lime"
            >
              <ArrowUpRight className="w-4 h-4" />
              <span>提领至银行账户 (WITHDRAW)</span>
            </button>
          </div>
        </div>

        {/* Closed-loop Oracle Credits (OC) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-cyber-violet/40 backdrop-blur-xl shadow-glass-card space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyber-violet" />
              <span className="text-xs font-mono text-cyber-violet font-bold uppercase">
                神谕闭环游戏积分 (ORACLE CREDITS)
              </span>
            </div>
            <span className="text-[10px] font-mono bg-cyber-violet/20 text-cyber-violet px-2 py-0.5 rounded border border-cyber-violet/30 font-bold">
              闭环生态积分
            </span>
          </div>

          <div className="font-mono font-black text-4xl sm:text-6xl text-white">
            {user.oracleCredits.toLocaleString()} <span className="text-2xl text-cyber-violet">OC</span>
          </div>

          <div className="space-y-1.5 font-mono text-xs text-metal-300 pt-2 border-t border-white/10">
            <span className="text-white font-bold block text-[11px]">积分闭环赋能用途：</span>
            <ul className="space-y-1 text-[11px]">
              <li>• 解锁高级游戏预测模式与挑战能量</li>
              <li>• 创建 1v1 私域专属联赛房间</li>
              <li>• 兑换限量赛车/文娱联名周边与入场券</li>
              <li>• 个人声誉勋章与专属定制头像框</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Safety Compliance Notice */}
      <div className="p-4 rounded-2xl bg-surface-100 border border-white/10 font-mono text-xs flex items-center gap-3 text-metal-300">
        <ShieldCheck className="w-5 h-5 text-lime-400 flex-shrink-0" />
        <p className="text-[11px] leading-relaxed">
          安全规范声明：本钱包严格遵循合规指引，不涉及任何高风险加密货币兑换 (Swap)、质押收益 (Staking)、保底理财 (APY) 或博彩下注对赌机制。所有资金流向完全基于真实会员订阅与品牌赞助。
        </p>
      </div>

      {/* Wallet Transaction Ledger */}
      <div className="bg-surface-100/90 border border-white/15 rounded-3xl overflow-hidden backdrop-blur-xl shadow-glass-card p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <History className="w-4 h-4 text-lime-400" />
            <h3 className="font-display font-black text-lg text-white">
              钱包出入账流水明细 (TRANSACTION HISTORY)
            </h3>
          </div>
          <span className="text-xs font-mono text-metal-400">实时共识账本</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead className="bg-surface-200/60 text-metal-400 text-[10px] uppercase border-b border-white/5">
              <tr>
                <th className="py-3 px-4">交易时间</th>
                <th className="py-3 px-4">业务类型</th>
                <th className="py-3 px-4">交易描述</th>
                <th className="py-3 px-4">金额</th>
                <th className="py-3 px-4 text-right">状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-metal-200">
              {walletTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-white/5">
                  <td className="py-3.5 px-4 text-metal-400">{tx.date}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-surface-200 text-white">
                      {tx.typeLabel}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-white">{tx.description}</td>
                  <td className="py-3.5 px-4 font-bold text-lime-400">
                    +{tx.currency} {tx.amount.toFixed(2)}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      tx.status === 'COMPLETED' ? 'bg-lime-400/20 text-lime-400' : 'bg-surface-300 text-metal-400'
                    }`}>
                      {tx.status === 'COMPLETED' ? '已入账 ✓' : '预估待结算'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
