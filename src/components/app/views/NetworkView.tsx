import React, { useState } from 'react';
import { useDemo } from '../../../context/DemoContext';
import { NetworkMember } from '../../../types/platform';
import { 
  Network, 
  Users, 
  Search, 
  Filter, 
  CheckCircle2, 
  ChevronRight, 
  X, 
  TrendingUp, 
  UserCheck,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const NetworkView: React.FC = () => {
  const { user, networkMembers } = useDemo();
  const [selectedMember, setSelectedMember] = useState<NetworkMember | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMembership, setFilterMembership] = useState<string>('ALL');

  const filteredMembers = networkMembers.filter((m) => {
    const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase()) || m.rankTitle.includes(searchTerm);
    const matchesMembership = filterMembership === 'ALL' || m.membership === filterMembership;
    return matchesSearch && matchesMembership;
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-lime-400 font-bold mb-1">
            <Network className="w-4 h-4" />
            <span>ORGANIZATION TOPOLOGY // 社群组织拓扑</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
            我的组织网络架构
          </h2>
          <p className="text-xs font-mono text-metal-300 mt-1">
            总社群人数 1,248 位 · 直推 50 位 · 二级间推 178 位 · 整体活跃留存率 68%
          </p>
        </div>

        <div className="px-4 py-2 rounded-2xl bg-surface-100 border border-lime-400/30 text-lime-400 font-mono text-xs font-bold">
          健康组织评级：ORACLE MASTER (大师级)
        </div>
      </div>

      {/* 4 Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
        <div className="p-4 rounded-2xl bg-surface-100/90 border border-white/10">
          <span className="text-[10px] text-metal-400 block uppercase">社群总人数 (TOTAL)</span>
          <span className="text-2xl font-black text-white my-1 block">{user.activeCommunity.toLocaleString()} 人</span>
          <span className="text-[10px] text-lime-400">▲ 月环比 +8.4%</span>
        </div>

        <div className="p-4 rounded-2xl bg-surface-100/90 border border-white/10">
          <span className="text-[10px] text-metal-400 block uppercase">一级直推人数 (L1)</span>
          <span className="text-2xl font-black text-lime-400 my-1 block">{user.directActive} 位</span>
          <span className="text-[10px] text-metal-400">贡献 20% 直推分润</span>
        </div>

        <div className="p-4 rounded-2xl bg-surface-100/90 border border-white/10">
          <span className="text-[10px] text-metal-400 block uppercase">二级间推人数 (L2)</span>
          <span className="text-2xl font-black text-cyber-blue my-1 block">{user.l2Active} 位</span>
          <span className="text-[10px] text-metal-400">贡献 5% 间推辅导奖</span>
        </div>

        <div className="p-4 rounded-2xl bg-surface-100/90 border border-white/10">
          <span className="text-[10px] text-metal-400 block uppercase">社群综合留存率</span>
          <span className="text-2xl font-black text-cyber-violet my-1 block">{user.retention}%</span>
          <span className="text-[10px] text-lime-400">超过 65% 大师门槛 ✓</span>
        </div>
      </div>

      {/* Visual Interactive Network Node Canvas */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/90 border border-white/15 backdrop-blur-xl shadow-glass-card space-y-6">
        
        <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
          <div>
            <h3 className="font-display font-black text-lg text-white">
              组织树状节点图谱 (INTERACTIVE NETWORK TREE)
            </h3>
            <p className="text-metal-400 text-[11px]">点击任意成员节点查看该线深度数据与贡献详情</p>
          </div>
          <span className="text-lime-400 font-bold hidden sm:block">点击节点弹窗详情</span>
        </div>

        {/* Visual Node Tree */}
        <div className="py-8 flex flex-col items-center space-y-8 overflow-x-auto">
          
          {/* Level 0: R.ON (Root) */}
          <div className="flex flex-col items-center">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-surface-200 to-surface-300 border-2 border-lime-400 shadow-glow-lime-lg flex items-center gap-3 cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-lime-400 text-black flex items-center justify-center font-mono font-black text-lg shadow-md">
                R.ON
              </div>
              <div className="font-mono">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm">R.ON (你)</span>
                  <span className="px-1.5 py-0.2 rounded text-[8px] bg-lime-400 text-black font-black">神谕大师</span>
                </div>
                <span className="text-[10px] text-lime-400">总社群 1,248 人 · 8 份分红资格</span>
              </div>
            </div>
            <div className="w-0.5 h-8 bg-lime-400/40" />
          </div>

          {/* Level 1: 4 Key Direct Leaders */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl">
            {networkMembers.slice(0, 4).map((member) => (
              <div key={member.id} className="flex flex-col items-center">
                <div
                  onClick={() => setSelectedMember(member)}
                  className="w-full p-3.5 rounded-2xl bg-surface-200/90 hover:bg-surface-300 border border-cyber-blue/40 hover:border-cyber-blue transition-all cursor-pointer shadow-sm text-center font-mono space-y-1.5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-surface-100 border border-white/10 mx-auto flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    {member.avatar}
                  </div>
                  <div className="font-bold text-xs text-white truncate">{member.name}</div>
                  <div className="text-[10px] text-cyber-blue font-bold">{member.rankTitle}</div>
                  <div className="text-[9px] text-metal-400">社群 {member.communityCount} 人 · 留存 {member.retention}%</div>
                </div>

                <div className="w-0.5 h-6 bg-white/10 my-1" />

                {/* Sub branches badge */}
                <span className="text-[9px] font-mono text-metal-400 bg-surface-100 px-2 py-0.5 rounded border border-white/5">
                  直推 {member.directCount} 人
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Full Network Member Filterable Table */}
      <div className="bg-surface-100/90 border border-white/15 rounded-3xl overflow-hidden backdrop-blur-xl shadow-glass-card space-y-4 p-6">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-white/10 gap-4">
          <div>
            <h3 className="font-display font-black text-lg text-white">全量组织成员名录 ({filteredMembers.length} 位)</h3>
            <p className="text-xs font-mono text-metal-300">支持按等级、会员类型及活跃状态筛选</p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-metal-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="搜索成员姓名..."
                className="bg-surface-200 border border-white/10 rounded-xl py-1.5 pl-8 pr-3 text-xs font-mono text-white focus:outline-none"
              />
            </div>

            <select
              value={filterMembership}
              onChange={(e) => setFilterMembership(e.target.value)}
              className="bg-surface-200 border border-white/10 rounded-xl py-1.5 px-3 text-xs font-mono text-white focus:outline-none"
            >
              <option value="ALL">全部方案</option>
              <option value="ELITE">ELITE 至尊</option>
              <option value="PRO">PRO 专业</option>
              <option value="FREE">FREE 基础</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead className="bg-surface-200/60 text-metal-400 text-[10px] uppercase border-b border-white/5">
              <tr>
                <th className="py-3 px-4">成员姓名</th>
                <th className="py-3 px-4">会员级别</th>
                <th className="py-3 px-4">组织称号</th>
                <th className="py-3 px-4">直推人数</th>
                <th className="py-3 px-4">下级社群规模</th>
                <th className="py-3 px-4">健康留存率</th>
                <th className="py-3 px-4">月度贡献分润</th>
                <th className="py-3 px-4">状态</th>
                <th className="py-3 px-4 text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-metal-200">
              {filteredMembers.map((m) => (
                <tr
                  key={m.id}
                  onClick={() => setSelectedMember(m)}
                  className="hover:bg-white/5 cursor-pointer transition-colors"
                >
                  <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                    <span>{m.avatar}</span>
                    <span>{m.name}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      m.membership === 'ELITE' ? 'bg-cyber-violet/20 text-cyber-violet border border-cyber-violet/30' : m.membership === 'PRO' ? 'bg-lime-400/20 text-lime-400 border border-lime-400/30' : 'bg-surface-200 text-metal-400'
                    }`}>
                      {m.membership}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-white font-bold">{m.rankTitle}</td>
                  <td className="py-3.5 px-4">{m.directCount} 人</td>
                  <td className="py-3.5 px-4 font-bold text-cyber-blue">{m.communityCount} 人</td>
                  <td className="py-3.5 px-4 text-lime-400">{m.retention}%</td>
                  <td className="py-3.5 px-4 font-bold text-white">RM {m.monthlyCommission.toFixed(2)}</td>
                  <td className="py-3.5 px-4">
                    <span className="flex items-center gap-1 text-[10px] text-lime-400 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                      {m.activeStatus === 'ACTIVE' ? '正常活跃' : '暂停'}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right text-cyber-blue font-bold hover:underline">
                    查看 →
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* Member Details Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0D1117] border-2 border-cyber-blue/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-6 relative text-white font-mono"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-surface-200 flex items-center justify-center text-2xl">
                    {selectedMember.avatar}
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl">{selectedMember.name}</h3>
                    <span className="text-xs text-cyber-blue font-bold">{selectedMember.rankTitle} ({selectedMember.membership})</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedMember(null)}
                  className="p-1.5 rounded-lg bg-surface-200 text-metal-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-surface-100 border border-white/5">
                  <span className="text-metal-400 text-[10px] block">直推人数</span>
                  <span className="font-bold text-white text-sm">{selectedMember.directCount} 位活跃</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-100 border border-white/5">
                  <span className="text-metal-400 text-[10px] block">社群总人数</span>
                  <span className="font-bold text-cyber-blue text-sm">{selectedMember.communityCount} 人</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-100 border border-white/5">
                  <span className="text-metal-400 text-[10px] block">留存健康度</span>
                  <span className="font-bold text-lime-400 text-sm">{selectedMember.retention}% 留存</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-100 border border-white/5">
                  <span className="text-metal-400 text-[10px] block">为组织贡献月分润</span>
                  <span className="font-bold text-lime-400 text-sm">RM {selectedMember.monthlyCommission.toFixed(2)}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-100 border border-white/5 text-[11px] text-metal-300">
                加入时间：{selectedMember.joinDate} · Prediction IQ: {selectedMember.predictionIQ} · 赛季积分: {selectedMember.seasonPoints.toLocaleString()}
              </div>

              <div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold"
                >
                  关闭成员卡片
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
