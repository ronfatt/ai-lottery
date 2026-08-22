import React, { useState } from 'react';
import { useDemo } from '../../../context/DemoContext';
import { PredictionHistoryRound } from '../../../types/platform';
import { 
  History, 
  Search, 
  ShieldCheck, 
  CheckCircle2, 
  X, 
  ExternalLink, 
  Hash, 
  Clock, 
  Cpu, 
  Trophy,
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PredictionsView: React.FC = () => {
  const { predictionRounds } = useDemo();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRound, setSelectedRound] = useState<PredictionHistoryRound | null>(null);

  const filtered = predictionRounds.filter((r) => 
    r.roundId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.gameMode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-lime-400 font-bold mb-1">
            <History className="w-4 h-4" />
            <span>MY PREDICTION ARCHIVE // 历史存证记录</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
            我的历史预测与链上核验
          </h2>
          <p className="text-xs font-mono text-metal-300 mt-1">
            共计已验证 1,480 笔 · 历史可溯 · 点击任意记录查看底层密码学 Merkle 证明
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-metal-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="搜索期数 / 玩法..."
            className="w-full bg-surface-100 border border-white/10 rounded-xl py-2 pl-9 pr-4 text-xs font-mono text-white focus:outline-none focus:border-lime-400"
          />
        </div>
      </div>

      {/* Predictions Table */}
      <div className="bg-surface-100/90 border border-white/15 rounded-3xl overflow-hidden backdrop-blur-xl shadow-glass-card">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead className="bg-surface-200/90 text-metal-400 text-[10px] uppercase border-b border-white/10">
              <tr>
                <th className="py-3.5 px-4">开奖期数</th>
                <th className="py-3.5 px-4">预测模式</th>
                <th className="py-3.5 px-4">锁票号码组合</th>
                <th className="py-3.5 px-4">官方开奖结果</th>
                <th className="py-3.5 px-4">命中战绩</th>
                <th className="py-3.5 px-4">获得经验</th>
                <th className="py-3.5 px-4">存证状态</th>
                <th className="py-3.5 px-4 text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-metal-200">
              {filtered.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => setSelectedRound(item)}
                  className="hover:bg-white/5 cursor-pointer transition-colors"
                >
                  <td className="py-3.5 px-4 font-bold text-white">
                    {item.roundId}
                  </td>
                  <td className="py-3.5 px-4 text-metal-300">
                    {item.gameMode}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-lime-400">
                    [{item.selectedNumbers.map((n) => (n < 10 ? `0${n}` : n)).join(' · ')}]
                  </td>
                  <td className="py-3.5 px-4 text-metal-300">
                    {item.officialNumbers ? (
                      <span>[{item.officialNumbers.map((n) => (n < 10 ? `0${n}` : n)).join(' · ')}]</span>
                    ) : (
                      <span className="text-metal-400">待摇号公开</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-surface-200 text-white font-bold">
                      {item.score}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-lime-400">
                    +{item.xpGained} XP
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-lime-400/15 text-lime-400 border border-lime-400/30">
                      {item.status === 'VERIFIED' ? '链上已验证 ✓' : '已盖戳封存'}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right text-cyber-blue font-bold hover:underline">
                    详情 →
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cryptographic Detail Modal */}
      <AnimatePresence>
        {selectedRound && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#0D1117] border-2 border-lime-400/50 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl space-y-6 relative text-white"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-lime-400" />
                  <div>
                    <h3 className="font-display font-black text-xl">
                      开奖期数 {selectedRound.roundId} 链上核验证明
                    </h3>
                    <span className="text-[10px] font-mono text-metal-400">
                      模式：{selectedRound.gameMode} · 封存时间：{selectedRound.closingTime}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedRound(null)}
                  className="p-1.5 rounded-lg bg-surface-200 text-metal-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4 font-mono text-xs">
                
                {/* Numbers */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-surface-100 border border-white/5 space-y-1">
                    <span className="text-metal-400 text-[10px] block">用户锁票号码</span>
                    <span className="text-lime-400 font-bold text-sm">
                      [{selectedRound.selectedNumbers.map((n) => (n < 10 ? `0${n}` : n)).join(' · ')}]
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-100 border border-white/5 space-y-1">
                    <span className="text-metal-400 text-[10px] block">官方公开结果</span>
                    <span className="text-white font-bold text-sm">
                      {selectedRound.officialNumbers 
                        ? `[${selectedRound.officialNumbers.map((n) => (n < 10 ? `0${n}` : n)).join(' · ')}]`
                        : '等待开奖'}
                    </span>
                  </div>
                </div>

                {/* SHA-256 Hash */}
                <div className="p-3.5 rounded-xl bg-surface-100 border border-white/5 space-y-1">
                  <span className="text-metal-400 text-[10px] block uppercase">SHA-256 预测承诺存证哈希 (COMMIT HASH)</span>
                  <span className="text-lime-400 break-all select-all font-mono">
                    {selectedRound.hash}
                  </span>
                </div>

                {/* Blockchain Info */}
                <div className="grid grid-cols-3 gap-3 text-[11px]">
                  <div className="p-3 rounded-xl bg-surface-100 border border-white/5">
                    <span className="text-metal-400 block">区块高度</span>
                    <span className="text-white font-bold">#{selectedRound.blockNumber}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-100 border border-white/5">
                    <span className="text-metal-400 block">预言机签名状态</span>
                    <span className="text-lime-400 font-bold">9/9 节点多签已核验 ✓</span>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-100 border border-white/5">
                    <span className="text-metal-400 block">智商与声誉变动</span>
                    <span className="text-cyber-blue font-bold">IQ +{selectedRound.iqDelta} (天梯 ↑)</span>
                  </div>
                </div>

              </div>

              {/* Banner */}
              <div className="p-4 rounded-xl bg-lime-400/10 border border-lime-400/30 text-xs font-mono text-center text-lime-400 font-bold">
                没有任何管理员或中心化服务器能够篡改已封存的预测记录 (TAMPER-PROOF)
              </div>

              <div>
                <button
                  onClick={() => setSelectedRound(null)}
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold"
                >
                  关闭存证详情
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
