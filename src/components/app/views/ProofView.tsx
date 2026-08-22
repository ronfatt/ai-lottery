import React, { useState } from 'react';
import { useDemo } from '../../../context/DemoContext';
import { ShieldCheck, Search, CheckCircle2, Lock, Cpu, Sparkles, ExternalLink, Target, Flag, Flame, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProofView: React.FC = () => {
  const [selectedProofType, setSelectedProofType] = useState<'NUMBER' | 'F1' | 'HORSE_RACING' | 'TECH'>('TECH');
  const [queryHash, setQueryHash] = useState('0xA791C9284756A1029384756C192837465F0918273645A0192837465B01928374');
  const [isVerifying, setIsVerifying] = useState(false);

  const proofPresets = {
    TECH: {
      type: 'TECH',
      event: '10月智能手机发布观象台 (October Smartphone Watch)',
      venue: '全球官方新闻中心 / 发布会 (Official Newsroom)',
      race: 'OPPO Find X8 系列全球首发',
      selection: '推演: OPPO 官方发布窗口 OCT 15–21 (精确 10月18日)',
      timestamp: '28 SEP 2026 20:18:24 MYT',
      hash: '0xA791C9284756A1029384756C192837465F0918273645A0192837465B01928374',
      block: 28484120,
      resultRef: 'OPPO 官方全球新闻中心 (Official Brand Newsroom 公报)',
      status: 'OFFICIAL LAUNCH VERIFIED ✓',
      modified: 'NO (不可篡改)',
      xpGained: '+800 XP (EXACT HIT)',
    },
    HORSE_RACING: {
      type: 'HORSE_RACING',
      event: '香港沙田赛马日 (HK Racing · Sha Tin)',
      venue: '沙田马场 (Sha Tin Racecourse)',
      race: '第 6 场 1600M',
      selection: '独赢: #4 金牌王牌 (GOLDEN ACE · 骑师: 潘顿)',
      timestamp: '22 AUG 2026 14:22:18 HKT',
      hash: '0x89A2F41D8B928E10938CBA391054AA9287BCAE19384756A1029384756C192837',
      block: 28483240,
      resultRef: '香港公开赛马日官方赛果 (Public Race Result)',
      status: 'VERIFIED',
      modified: 'NO (不可篡改)',
      xpGained: '+350 XP',
    },
    F1: {
      type: 'F1',
      event: '2026 F1 马来西亚雪邦大奖赛 (F1 Sepang)',
      venue: '雪邦国际赛道 (Sepang International Circuit)',
      race: '正赛 56 圈',
      selection: '雪邦 SUPER 10: 冠军 维斯塔潘 · 杆位 维斯塔潘 · 雨战 YES',
      timestamp: '22 AUG 2026 11:15:04 MYT',
      hash: '0xF19934B8E19284756A1029384756C192837465F0918273645A0192837465B019',
      block: 28483100,
      resultRef: 'FIA 官方雪邦排位与正赛遥测结果',
      status: 'SEALED (封存待正赛)',
      modified: 'NO (不可篡改)',
      xpGained: '+200 XP',
    },
    NUMBER: {
      type: 'NUMBER',
      event: '香港六合彩公开摇号参考 · 01-49 数字预测',
      venue: '香港公开摇号直播 (HK Mark Six Reference)',
      race: '第 #260822 期',
      selection: '5 码猎手: [07 · 18 · 23 · 36 · 41]',
      timestamp: '22 AUG 2026 09:42:17 HKT',
      hash: '0x3F8A91B2C4D5E6F708192A3B4C5D6E7F8091A2B3C4D5E6F708192A3B4C5D6E7F',
      block: 28482914,
      resultRef: '香港公开电视/摇号数据参考 (6正码 + 1特别号)',
      status: 'VERIFIED (命中 3 码)',
      modified: 'NO (不可篡改)',
      xpGained: '+600 XP',
    },
  };

  const [verifyResult, setVerifyResult] = useState<any>(proofPresets.TECH);

  const handleSelectPreset = (key: 'NUMBER' | 'F1' | 'HORSE_RACING' | 'TECH') => {
    setSelectedProofType(key);
    const p = proofPresets[key];
    setQueryHash(p.hash);
    setVerifyResult(p);
  };

  const handleSearchVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerifyResult(proofPresets[selectedProofType]);
    }, 600);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 font-sans">
      
      {/* Header */}
      <div className="pb-4 border-b border-white/10 space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono text-lime-400 font-bold">
          <ShieldCheck className="w-4 h-4" />
          <span>CRYPTOGRAPHIC PROOF EXPLORER // 全账本密码学存证浏览器</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
          VERIFY EVERYTHING. 验证一切多品类存证
        </h2>
        <p className="text-xs font-mono text-metal-300">
          全面支持数字预测、F1 赛车、香港赛马日与 10月科技新品发布 · 基于 SHA-256 承诺哈希全量可溯
        </p>
      </div>

      {/* Preset Category Switcher */}
      <div className="flex flex-wrap gap-2 font-mono text-xs">
        <button
          onClick={() => handleSelectPreset('TECH')}
          className={`px-4 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all ${
            selectedProofType === 'TECH' ? 'bg-cyan-400 text-black shadow-[0_0_20px_rgba(0,229,255,0.4)]' : 'bg-surface-100 text-metal-300 border border-white/10'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>科技新品发布存证 (Tech Launch)</span>
        </button>

        <button
          onClick={() => handleSelectPreset('HORSE_RACING')}
          className={`px-4 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all ${
            selectedProofType === 'HORSE_RACING' ? 'bg-emerald-500 text-black shadow-glow-lime' : 'bg-surface-100 text-metal-300 border border-white/10'
          }`}
        >
          <Flame className="w-3.5 h-3.5" />
          <span>香港赛马日存证 (HK Racing)</span>
        </button>

        <button
          onClick={() => handleSelectPreset('F1')}
          className={`px-4 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all ${
            selectedProofType === 'F1' ? 'bg-cyber-amber text-black shadow-sm' : 'bg-surface-100 text-metal-300 border border-white/10'
          }`}
        >
          <Flag className="w-3.5 h-3.5" />
          <span>F1 雪邦赛车存证 (Motorsport)</span>
        </button>

        <button
          onClick={() => handleSelectPreset('NUMBER')}
          className={`px-4 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all ${
            selectedProofType === 'NUMBER' ? 'bg-lime-400 text-black shadow-glow-lime' : 'bg-surface-100 text-metal-300 border border-white/10'
          }`}
        >
          <Target className="w-3.5 h-3.5" />
          <span>数字预测存证 (Numbers)</span>
        </button>
      </div>

      {/* Interactive Search Bar Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-4">
        <form onSubmit={handleSearchVerify} className="space-y-2">
          <label className="text-xs font-mono text-metal-300 block">
            输入任意预测承诺哈希 (Commit Hash) 查验密码学存证与预言机签名：
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-metal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={queryHash}
                onChange={(e) => setQueryHash(e.target.value)}
                placeholder="0xA791C..."
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
                  <span>遍历默克尔树中...</span>
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
                  链上时间戳证明已成功核验 ✓ (CRYPTOGRAPHIC VERIFIED)
                </span>
                <h3 className="font-display font-black text-xl text-white">
                  {verifyResult.event}
                </h3>
              </div>
            </div>

            <span className="px-3 py-1 rounded-xl bg-lime-400 text-black font-mono font-black text-xs">
              状态：{verifyResult.status}
            </span>
          </div>

          {/* Details Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-surface-200 border border-white/5 space-y-1">
              <span className="text-metal-400 text-[10px] block uppercase">发布会场地 / 场次</span>
              <span className="text-white font-bold text-sm">
                {verifyResult.venue} · {verifyResult.race}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-surface-200 border border-white/5 space-y-1">
              <span className="text-metal-400 text-[10px] block uppercase">用户锁票推演选择</span>
              <span className="text-cyan-400 font-bold text-sm">{verifyResult.selection}</span>
            </div>

            <div className="p-4 rounded-xl bg-surface-200 border border-white/5 space-y-1">
              <span className="text-metal-400 text-[10px] block uppercase">客观官方事实源 (OFFICIAL SOURCE)</span>
              <span className="text-metal-200 font-medium text-xs">{verifyResult.resultRef}</span>
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
              <span className="text-metal-400 text-[10px] block uppercase">历史是否有修改记录 (TAMPERED)</span>
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
