import React, { useState } from 'react';
import { useDemo } from '../../../context/DemoContext';
import { MOCK_LEADERBOARDS } from '../../../data/mockData';
import { Award, Trophy, Users, Crown, Sparkles, Flame } from 'lucide-react';

export const LeaderboardView: React.FC = () => {
  const { user } = useDemo();
  const [activeTab, setActiveTab] = useState<'PREDICTION' | 'COMMUNITY' | 'CREATOR' | 'SEASON'>('PREDICTION');

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 font-sans">
      
      {/* Header */}
      <div className="pb-4 border-b border-white/10 space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono text-lime-400 font-bold">
          <Award className="w-4 h-4" />
          <span>GLOBAL LEADERBOARDS // 全球天梯总榜</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
          全球天梯与荣誉殿堂
        </h2>
        <p className="text-xs font-mono text-metal-300">
          全网 38,240 位玩家跨 4 大维度公开链上排名 · 实时共识同步
        </p>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none font-mono text-xs">
        {[
          { key: 'PREDICTION', label: '👑 预测智商榜 (Prediction IQ)', icon: Trophy },
          { key: 'COMMUNITY', label: '👥 社群组织榜 (Community)', icon: Users },
          { key: 'CREATOR', label: '🏆 创作者联赛榜 (Creator)', icon: Sparkles },
          { key: 'SEASON', label: '⚡ 赛季积分榜 (Season 08)', icon: Crown },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`px-4 py-2.5 rounded-xl whitespace-nowrap transition-all font-bold ${
              activeTab === tab.key
                ? 'bg-lime-400 text-black shadow-glow-lime'
                : 'bg-surface-100 text-metal-300 hover:text-white border border-white/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Leaderboard Table Card */}
      <div className="bg-surface-100/90 border border-white/15 rounded-3xl overflow-hidden backdrop-blur-xl shadow-glass-card">
        
        <div className="p-4 bg-surface-200/90 border-b border-white/10 flex items-center justify-between text-xs font-mono">
          <span className="text-white font-bold">
            {activeTab === 'PREDICTION' && '全球预测智商 (IQ) 排位榜单'}
            {activeTab === 'COMMUNITY' && '全球社群组织规模与留存榜单'}
            {activeTab === 'CREATOR' && '创作者私域联赛活跃度榜单'}
            {activeTab === 'SEASON' && '第 08 赛季积分天梯榜单'}
          </span>
          <span className="text-lime-400 bg-lime-400/10 px-2 py-0.5 rounded border border-lime-400/20">
            链上实时共识同步
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead className="bg-surface-200/60 text-metal-400 text-[10px] uppercase border-b border-white/5">
              <tr>
                <th className="py-3 px-4">名次</th>
                <th className="py-3 px-4">玩家 / 组织</th>
                {activeTab === 'PREDICTION' && (
                  <>
                    <th className="py-3 px-4">Prediction IQ</th>
                    <th className="py-3 px-4">综合准确率</th>
                    <th className="py-3 px-4">当前连胜</th>
                  </>
                )}
                {activeTab === 'COMMUNITY' && (
                  <>
                    <th className="py-3 px-4">活跃成员规模</th>
                    <th className="py-3 px-4">社群留存率</th>
                    <th className="py-3 px-4">组织成长积分</th>
                  </>
                )}
                {activeTab === 'CREATOR' && (
                  <>
                    <th className="py-3 px-4">主办联盟活跃度</th>
                    <th className="py-3 px-4">创作者分红份额</th>
                    <th className="py-3 px-4">头衔评级</th>
                  </>
                )}
                {activeTab === 'SEASON' && (
                  <>
                    <th className="py-3 px-4">赛季总积分</th>
                    <th className="py-3 px-4">通行证等级</th>
                    <th className="py-3 px-4">赛季终结大奖</th>
                  </>
                )}
                <th className="py-3 px-4 text-right">荣誉徽章</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {activeTab === 'PREDICTION' && MOCK_LEADERBOARDS.prediction.map((p: any) => (
                <tr
                  key={p.name}
                  className={`transition-colors ${
                    p.isUser ? 'bg-lime-400/15 font-bold text-white' : 'text-metal-200 hover:bg-white/5'
                  }`}
                >
                  <td className="py-3.5 px-4 font-black">
                    <span className={`w-6 inline-block ${p.rank === 1 ? 'text-cyber-amber text-sm' : p.rank === 2 ? 'text-metal-200' : p.rank === 3 ? 'text-lime-400' : 'text-metal-400'}`}>
                      #{p.rank}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-bold flex items-center gap-2">
                    <span>{p.name}</span>
                    {p.isUser && (
                      <span className="px-1.5 py-0.2 rounded text-[8px] bg-lime-400 text-black font-black">
                        YOU
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 font-black text-lime-400">{p.iq}</td>
                  <td className="py-3.5 px-4">{p.accuracy}</td>
                  <td className="py-3.5 px-4 text-lime-400">🔥 {p.streak} 连胜</td>
                  <td className="py-3.5 px-4 text-right text-base">{p.badge}</td>
                </tr>
              ))}

              {activeTab === 'COMMUNITY' && MOCK_LEADERBOARDS.community.map((c: any) => (
                <tr
                  key={c.name}
                  className={`transition-colors ${
                    c.isUser ? 'bg-lime-400/15 font-bold text-white' : 'text-metal-200 hover:bg-white/5'
                  }`}
                >
                  <td className="py-3.5 px-4 font-black">#{c.rank}</td>
                  <td className="py-3.5 px-4 font-bold flex items-center gap-2">
                    <span>{c.name}</span>
                    {c.isUser && <span className="px-1.5 py-0.2 rounded text-[8px] bg-lime-400 text-black font-black">YOU</span>}
                  </td>
                  <td className="py-3.5 px-4 font-black text-cyber-violet">{c.members} 人</td>
                  <td className="py-3.5 px-4 text-lime-400">{c.retention}</td>
                  <td className="py-3.5 px-4 text-white font-bold">{c.points.toLocaleString()} pts</td>
                  <td className="py-3.5 px-4 text-right text-base">🛡️</td>
                </tr>
              ))}

              {activeTab === 'CREATOR' && MOCK_LEADERBOARDS.creator.map((cr: any) => (
                <tr
                  key={cr.name}
                  className={`transition-colors ${
                    cr.isUser ? 'bg-lime-400/15 font-bold text-white' : 'text-metal-200 hover:bg-white/5'
                  }`}
                >
                  <td className="py-3.5 px-4 font-black">#{cr.rank}</td>
                  <td className="py-3.5 px-4 font-bold flex items-center gap-2">
                    <span>{cr.name}</span>
                    {cr.isUser && <span className="px-1.5 py-0.2 rounded text-[8px] bg-lime-400 text-black font-black">YOU</span>}
                  </td>
                  <td className="py-3.5 px-4 font-black text-cyber-blue">{cr.activeUsers} 活跃</td>
                  <td className="py-3.5 px-4 text-lime-400">{cr.rewardShare}</td>
                  <td className="py-3.5 px-4 text-white font-bold">{cr.title}</td>
                  <td className="py-3.5 px-4 text-right text-base">🏆</td>
                </tr>
              ))}

              {activeTab === 'SEASON' && MOCK_LEADERBOARDS.season.map((s: any) => (
                <tr
                  key={s.name}
                  className={`transition-colors ${
                    s.isUser ? 'bg-lime-400/15 font-bold text-white' : 'text-metal-200 hover:bg-white/5'
                  }`}
                >
                  <td className="py-3.5 px-4 font-black">#{s.rank}</td>
                  <td className="py-3.5 px-4 font-bold flex items-center gap-2">
                    <span>{s.name}</span>
                    {s.isUser && <span className="px-1.5 py-0.2 rounded text-[8px] bg-lime-400 text-black font-black">YOU</span>}
                  </td>
                  <td className="py-3.5 px-4 font-black text-lime-400">{s.points.toLocaleString()} pts</td>
                  <td className="py-3.5 px-4 text-cyber-blue">Lv.{s.level}</td>
                  <td className="py-3.5 px-4 text-cyber-amber font-bold">{s.rewards}</td>
                  <td className="py-3.5 px-4 text-right text-base">👑</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};
