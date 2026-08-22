import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { 
  LayoutDashboard, 
  Target, 
  Flag, 
  Gamepad2, 
  History, 
  Trophy, 
  Award, 
  Crown, 
  Network, 
  Share2, 
  Activity, 
  Coins, 
  TrendingUp, 
  Wallet, 
  Gift, 
  ShieldCheck, 
  User, 
  Settings, 
  LogOut, 
  Sparkles,
  Globe,
  Gauge
} from 'lucide-react';

export const AppSidebar: React.FC = () => {
  const { currentPath, navigate, user, logout, startTour } = useDemo();

  const navGroups = [
    {
      label: '总览 OVERVIEW',
      items: [
        { label: '控制台 (Dashboard)', path: '/app', icon: LayoutDashboard },
      ],
    },
    {
      label: '预测玩法 PREDICT',
      items: [
        { label: '数字预测 (核心核心)', path: '/app/predict', icon: Target, isPrimary: true },
        { label: 'F1 赛车预测 ⭐', path: '/app/events/f1-malaysia-2026', icon: Flag, highlightTag: '🔥 推荐' },
        { label: '预测游戏大厅', path: '/app/games', icon: Gamepad2 },
        { label: '我的预测记录', path: '/app/predictions', icon: History },
      ],
    },
    {
      label: '竞技表现 PERFORMANCE',
      items: [
        { label: '综合预测智商 (IQ)', path: '/app/iq', icon: Trophy },
        { label: 'F1 专属智商 (F1 IQ)', path: '/app/f1-iq', icon: Gauge },
        { label: '全球天梯榜', path: '/app/leaderboard', icon: Award },
        { label: '季度通行证 (Season 08)', path: '/app/season', icon: Crown },
      ],
    },
    {
      label: '组织裂变 GROWTH',
      items: [
        { label: '我的组织网络 (Tree)', path: '/app/network', icon: Network },
        { label: '推荐中心 (Referral)', path: '/app/referral', icon: Share2 },
        { label: '社群健康指数', path: '/app/community', icon: Activity },
        { label: '全球分红池 (Pool)', path: '/app/pool', icon: Coins, highlight: true },
        { label: '会员等级晋级 (Rank)', path: '/app/ranking', icon: TrendingUp },
      ],
    },
    {
      label: '收益资产 ASSETS',
      items: [
        { label: 'USDT 奖金钱包', path: '/app/wallet', icon: Wallet, highlightUSDT: true },
        { label: '收益明细 (Rewards)', path: '/app/rewards', icon: Gift },
      ],
    },
    {
      label: '密码学信任 TRUST',
      items: [
        { label: '全账本区块链浏览器', path: '/app/proof', icon: ShieldCheck },
      ],
    },
    {
      label: '账户 ACCOUNT',
      items: [
        { label: '个人声誉主页', path: '/app/profile', icon: User },
        { label: '系统设置与偏好', path: '/app/settings', icon: Settings },
      ],
    },
  ];

  return (
    <aside className="w-64 bg-[#070A0E] border-r border-white/10 flex flex-col justify-between h-screen sticky top-0 overflow-y-auto scrollbar-none z-40 hidden lg:flex">
      
      {/* Top Brand Logo */}
      <div className="p-5 pb-4 border-b border-white/10 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-3 text-left group"
          title="点击返回官方公开主页"
        >
          <div className="w-9 h-9 rounded-xl bg-surface-100 border border-lime-400/40 flex items-center justify-center font-mono font-black text-lime-400 shadow-glow-lime/20 group-hover:border-lime-400 transition-colors">
            49
          </div>
          <div>
            <span className="font-display font-black text-base text-white block leading-tight">
              ORACLE <span className="text-lime-400">49</span>
            </span>
            <span className="text-[9px] font-mono text-metal-400 tracking-wider">
              可验证预测竞技网络
            </span>
          </div>
        </button>

        <button
          onClick={() => navigate('/')}
          className="p-1.5 rounded-lg bg-surface-200 hover:bg-surface-300 text-metal-400 hover:text-white transition-colors"
          title="返回主页"
        >
          <Globe className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Navigation Links by Groups */}
      <div className="p-3 space-y-4 flex-1 overflow-y-auto">
        {navGroups.map((group) => (
          <div key={group.label} className="space-y-1">
            <div className="px-3 text-[9px] font-mono font-bold text-metal-400 uppercase tracking-widest">
              {group.label}
            </div>
            <div className="space-y-0.5">
              {group.items.map((item: any) => {
                const Icon = item.icon;
                const isActive = currentPath === item.path;

                return (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className={`w-full px-3 py-2 rounded-xl font-mono text-xs font-medium flex items-center justify-between transition-all ${
                      isActive
                        ? 'bg-lime-400 text-black font-bold shadow-glow-lime'
                        : item.highlight
                        ? 'text-lime-400 hover:bg-lime-400/10'
                        : item.highlightTag
                        ? 'text-cyber-amber hover:bg-cyber-amber/10'
                        : 'text-metal-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-black' : item.highlight ? 'text-lime-400' : item.highlightTag ? 'text-cyber-amber' : 'text-metal-400'}`} />
                      <span className="truncate">{item.label}</span>
                    </div>

                    {item.highlightTag && !isActive && (
                      <span className="px-1.5 py-0.2 rounded text-[8px] font-bold bg-cyber-amber/20 text-cyber-amber border border-cyber-amber/30">
                        {item.highlightTag}
                      </span>
                    )}

                    {item.highlight && !isActive && (
                      <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Rank Progress Card & Investor Tour CTA */}
      <div className="p-3 border-t border-white/10 space-y-2 bg-[#06080B]/90">
        
        {/* Investor Tour Trigger */}
        <button
          onClick={startTour}
          className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-lime-400/20 via-cyber-blue/20 to-cyber-violet/20 border border-lime-400/40 text-lime-400 hover:text-white font-mono text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-glow-lime/10"
        >
          <Sparkles className="w-3.5 h-3.5 text-lime-400" />
          <span>10 步投资人全景导览 (TOUR)</span>
        </button>

        {/* Current Rank Status Widget */}
        <div 
          onClick={() => navigate('/app/ranking')}
          className="p-3 rounded-xl bg-surface-100 border border-white/10 hover:border-lime-400/40 transition-all cursor-pointer space-y-2"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-base">👑</span>
              <div>
                <span className="text-[9px] font-mono text-metal-400 block leading-none">当前等级</span>
                <span className="font-mono font-bold text-xs text-white">神谕大师 (8 份)</span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-lime-400 font-bold">72%</span>
          </div>

          {/* Progress to Oracle Elite */}
          <div className="space-y-1">
            <div className="w-full h-1.5 bg-surface-300 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-lime-400 to-cyber-blue rounded-full w-[72%]" />
            </div>
            <div className="flex justify-between text-[9px] font-mono text-metal-400">
              <span>晋升【神谕至尊】</span>
              <span>还需 1 组大师团队</span>
            </div>
          </div>
        </div>

        {/* Logout button */}
        <button
          onClick={logout}
          className="w-full py-1 text-center font-mono text-[10px] text-metal-400 hover:text-red-400 flex items-center justify-center gap-1 transition-colors"
        >
          <LogOut className="w-3 h-3" />
          <span>退出会员控制台</span>
        </button>

      </div>

    </aside>
  );
};
