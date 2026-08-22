import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { 
  LayoutDashboard, 
  Target, 
  Network, 
  Wallet, 
  User, 
  Menu, 
  X, 
  Trophy, 
  Coins, 
  TrendingUp, 
  ShieldCheck, 
  Share2, 
  Gift, 
  Crown,
  Sparkles
} from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { currentPath, navigate, startTour } = useDemo();
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);

  const mainTabs = [
    { label: '控制台', path: '/app', icon: LayoutDashboard },
    { label: '立即预测', path: '/app/predict', icon: Target },
    { label: '组织网络', path: '/app/network', icon: Network },
    { label: '分红池', path: '/app/pool', icon: Coins },
    { label: '钱包', path: '/app/wallet', icon: Wallet },
  ];

  const drawerTabs = [
    { label: '预测记录 (History)', path: '/app/predictions', icon: Target },
    { label: '预测智商 (IQ 782)', path: '/app/iq', icon: Trophy },
    { label: '全球天梯榜 (Leaderboard)', path: '/app/leaderboard', icon: Trophy },
    { label: '季度通行证 (Season 08)', path: '/app/season', icon: Crown },
    { label: '推荐中心 (Referral 20%+5%)', path: '/app/referral', icon: Share2 },
    { label: '会员等级晋级 (Rank)', path: '/app/ranking', icon: TrendingUp },
    { label: '收益明细 (Rewards)', path: '/app/rewards', icon: Gift },
    { label: '全账本区块链浏览器', path: '/app/proof', icon: ShieldCheck },
    { label: '个人声誉档案', path: '/app/profile', icon: User },
  ];

  return (
    <>
      {/* Mobile Bottom Fixed Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090D13]/95 backdrop-blur-2xl border-t border-white/10 px-2 py-1.5 flex items-center justify-around">
        {mainTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentPath === tab.path;

          return (
            <button
              key={tab.path}
              onClick={() => {
                setMenuDrawerOpen(false);
                navigate(tab.path);
              }}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all min-w-[56px] ${
                isActive ? 'text-lime-400' : 'text-metal-400 hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-lime-400 scale-110' : ''}`} />
              <span className="text-[10px] font-mono mt-0.5 font-medium">{tab.label}</span>
            </button>
          );
        })}

        {/* More Menu Trigger */}
        <button
          onClick={() => setMenuDrawerOpen(!menuDrawerOpen)}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all min-w-[56px] ${
            menuDrawerOpen ? 'text-lime-400' : 'text-metal-400'
          }`}
        >
          {menuDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          <span className="text-[10px] font-mono mt-0.5">更多</span>
        </button>
      </nav>

      {/* Drawer for other views */}
      {menuDrawerOpen && (
        <div className="lg:hidden fixed inset-x-0 bottom-16 z-30 bg-[#0D1117]/95 backdrop-blur-2xl border-t border-white/15 p-4 rounded-t-3xl shadow-2xl space-y-3 max-h-[70vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono">
            <span className="text-white font-bold">全部功能导航</span>
            <button
              onClick={() => {
                setMenuDrawerOpen(false);
                startTour();
              }}
              className="text-lime-400 flex items-center gap-1 font-bold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>开启导览</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {drawerTabs.map((t) => {
              const Icon = t.icon;
              const isActive = currentPath === t.path;

              return (
                <button
                  key={t.path}
                  onClick={() => {
                    setMenuDrawerOpen(false);
                    navigate(t.path);
                  }}
                  className={`p-3 rounded-xl border text-left flex items-center gap-2 font-mono text-xs ${
                    isActive
                      ? 'bg-lime-400 text-black font-bold border-lime-400'
                      : 'bg-surface-200/90 text-metal-200 border-white/5 hover:border-white/20'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{t.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
