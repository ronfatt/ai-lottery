import React, { useState } from 'react';
import { useDemo } from '../../../context/DemoContext';
import { ShieldCheck, Search, CheckCircle2, Lock, Cpu, Sparkles, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProofView: React.FC = () => {
  const [queryHash, setQueryHash] = useState('0x782C91AE921B7C4F182948123984712903847102938471029384710293847102');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifyResult, setVerifyResult] = useState<any>({
    owner: 'R.ON',
    round: '#260822',
    prediction: [7, 18, 23, 36, 41],
    timestamp: '22 AUG 2026 09:42:17 MYT',
    hash: '0x782C91AE921B7C4F182948123984712903847102938471029384710293847102',
    block: 28482913,
    status: 'SEALED & VERIFIED',
    modified: 'NO (不可篡改)',
  });

  const handleSearchVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerifyResult({
        owner: 'R.ON',
        round: '#260822',
        prediction: [7, 18, 23, 36, 41],
        timestamp: '22 AUG 2026 09:42:17 MYT',
        hash: queryHash,
        block: 28482913,
        status: 'SEALED & VERIFIED',
        modified: 'NO (不可篡改)',
      });
    }, 800);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="pb-4 border-b border-white/10 space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono text-lime-400 font-bold">
          <ShieldCheck className="w-4 h-4" />
          <span>CRYPTOGRAPHIC VERIFICATION // 密码学存证浏览器</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
          VERIFY EVERYTHING. 验证一切存证
        </h2>
        <p className="text-xs font-mono text-metal-300">
          公开全账本检索 · 基于 SHA-256 承诺哈希与 Merkle 树 · 没有任何管理员能篡改过去
        </p>
      </div>

      {/* Interactive Search Bar Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-4">
        <form onSubmit={handleSearchVerify} className="space-y-2">
          <label className="text-xs font-mono text-metal-300 block">
            输入任意预测哈希 (Commit Hash) 或 期数 ID 查验密码学证明：
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-metal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={queryHash}
                onChange={(e) => setQueryHash(e.target.value)}
                placeholder="0x782C91A..."
                className="w-full bg-surface-200 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-mono text-white focus:outline-none focus:border-lime-400 select-all"
              />
            </div>

            <button
              type="submit"
              disabled={isVerifying}
              className="px-6 py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-glow-lime flex-shrink-0"
            >
              {isVerifying ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <span>正在遍历默克尔树...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>查验证明 (VERIFY)</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Verification Result Receipt Card */}
      {verifyResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border-2 border-lime-400/50 backdrop-blur-xl shadow-glow-lime/20 space-y-6"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-lime-400/20 border border-lime-400/40 flex items-center justify-center text-lime-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-lime-400 font-bold uppercase tracking-widest block">
                  链上时间戳证明已成功核验 ✓
                </span>
                <h3 className="font-display font-black text-xl text-white">
                  预测归属所有者：{verifyResult.owner} (期数 {verifyResult.round})
                </h3>
              </div>
            </div>

            <span className="px-3 py-1 rounded-xl bg-lime-400 text-black font-mono font-black text-xs">
              状态：SEALED (不可篡改)
            </span>
          </div>

          {/* Details Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-surface-200 border border-white/5 space-y-1">
              <span className="text-metal-400 text-[10px] block uppercase">锁票号码组合</span>
              <span className="text-lime-400 font-black text-base">
                [{verifyResult.prediction.map((n: number) => (n < 10 ? `0${n}` : n)).join(' · ')}]
              </span>
            </div>

            <div className="p-4 rounded-xl bg-surface-200 border border-white/5 space-y-1">
              <span className="text-metal-400 text-[10px] block uppercase">区块链不可篡改时间戳</span>
              <span className="text-white font-bold text-sm">{verifyResult.timestamp}</span>
            </div>

            <div className="p-4 rounded-xl bg-surface-200 border border-white/5 space-y-1 md:col-span-2">
              <span className="text-metal-400 text-[10px] block uppercase">SHA-256 密码学承诺哈希 (COMMITMENT HASH)</span>
              <span className="text-lime-400 break-all select-all font-bold text-xs">
                {verifyResult.hash}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-surface-200 border border-white/5 space-y-1">
              <span className="text-metal-400 text-[10px] block uppercase">主网区块高度</span>
              <span className="text-white font-bold text-sm">#{verifyResult.block}</span>
            </div>

            <div className="p-4 rounded-xl bg-surface-200 border border-white/5 space-y-1">
              <span className="text-metal-400 text-[10px] block uppercase">历史是否有修改记录</span>
              <span className="text-lime-400 font-black text-sm">{verifyResult.modified}</span>
            </div>
          </div>

          {/* Slogan */}
          <div className="p-4 rounded-2xl bg-surface-50 border border-white/5 text-center font-mono">
            <h4 className="font-display font-black text-base text-white">
              NO ADMIN CAN CHANGE THE PAST.
            </h4>
            <span className="text-xs text-lime-400">
              没有任何管理员或中心化服务器能够篡改已封存的预测历史。
            </span>
          </div>

        </motion.div>
      )}

    </div>
  );
};
