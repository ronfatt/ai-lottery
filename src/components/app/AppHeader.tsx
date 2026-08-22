import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { 
  Bell, 
  Wallet, 
  Zap, 
  ChevronDown, 
  LogOut, 
  User, 
  Settings, 
  Sparkles, 
  Check, 
  X, 
  ExternalLink,
  Coins
} from 'lucide-react';

interface AppHeaderProps {
  pageTitle: string;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ pageTitle }) => {
  const { 
    user, 
    globalPoolAmount, 
    poolGrowthToday, 
    notifications, 
    markAllNotificationsAsRead, 
    logout, 
    navigate,
    startTour 
  } = useDemo();

  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notifMenuOpen, setNotifMenuOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <header className="sticky top-0 z-30 h-16 bg-[#090D13]/85 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 flex items-center justify-between">
      
      {/* Left: Page Title & Breadcrumbs */}
      <div className="flex items-center gap-3">
        <h1 className="font-display font-black text-base sm:text-xl text-white tracking-wide">
          {pageTitle}
        </h1>
        <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-lime-400/10 text-lime-400 border border-lime-400/30">
          主网环境模拟
        </span>
      </div>

      {/* Right: Live Tickers, Energy, Wallet, Notifications, Avatar */}
      <div className="flex items-center gap-2 sm:gap-4">
        
        {/* Live Pool Ticker Pill (Very High Visibility for Investors) */}
        <div 
          onClick={() => navigate('/app/pool')}
          className="hidden md:flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-surface-200/90 hover:bg-surface-300 border border-lime-400/40 cursor-pointer transition-all shadow-glow-lime/10 group"
          title="点击查看全网分红池计算明细"
        >
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
          </div>
          <div>
            <div className="text-[9px] font-mono text-metal-400 uppercase tracking-widest leading-none">
              实时全球分红池
            </div>
            <div className="text-xs font-mono font-black text-lime-400 flex items-center gap-1">
              <span>RM {globalPoolAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
              <span className="text-[9px] text-lime-400/80 font-normal">(+RM {poolGrowthToday})</span>
            </div>
          </div>
        </div>

        {/* Prediction Energy */}
        <div 
          onClick={() => navigate('/app/predict')}
          className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-200/80 border border-cyber-blue/30 text-xs font-mono cursor-pointer hover:border-cyber-blue"
          title="每日自动恢复，用于发起预测挑战"
        >
          <Zap className="w-3.5 h-3.5 text-cyber-blue" />
          <span className="text-metal-300">能量:</span>
          <span className="font-bold text-white">{user.predictionEnergy} / {user.maxEnergy} ⚡</span>
        </div>

        {/* Reward Wallet Balance */}
        <div 
          onClick={() => navigate('/app/wallet')}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-200/80 hover:bg-surface-300 border border-white/10 text-xs font-mono cursor-pointer transition-all"
        >
          <Wallet className="w-3.5 h-3.5 text-lime-400" />
          <span className="font-bold text-white">RM {user.walletBalance.toFixed(2)}</span>
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => setNotifMenuOpen(!notifMenuOpen)}
            className="relative p-2 rounded-xl bg-surface-200 hover:bg-surface-300 border border-white/10 text-metal-300 hover:text-white transition-colors"
            aria-label="查看通知"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            )}
          </button>

          {/* Notification Drawer */}
          {notifMenuOpen && (
            <div className="absolute right-0 top-12 w-80 sm:w-96 rounded-2xl bg-[#0D1117] border border-white/15 shadow-2xl p-4 space-y-3 z-50">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono">
                <span className="font-bold text-white">实时动态通知 ({unreadCount} 未读)</span>
                <button
                  onClick={markAllNotificationsAsRead}
                  className="text-lime-400 hover:underline text-[11px]"
                >
                  全部已读
                </button>
              </div>

              <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className={`p-3 rounded-xl border transition-all text-xs font-mono flex items-start gap-2.5 ${
                      n.read
                        ? 'bg-surface-100/60 border-white/5 text-metal-300'
                        : 'bg-surface-200 border-lime-400/30 text-white'
                    }`}
                  >
                    <span className="text-base">{n.icon}</span>
                    <div className="flex-1 space-y-0.5">
                      <p className="leading-snug">{n.title}</p>
                      <span className="text-[9px] text-metal-400 block">{n.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setNotifMenuOpen(false)}
                className="w-full py-2 rounded-lg bg-surface-200 text-metal-300 hover:text-white text-[11px] font-mono text-center"
              >
                关闭通知面板
              </button>
            </div>
          )}
        </div>

        {/* User Profile Avatar & Dropdown */}
        <div className="relative">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center gap-2.5 p-1 sm:px-2.5 sm:py-1 rounded-xl bg-surface-200 hover:bg-surface-300 border border-lime-400/40 transition-all"
          >
            <div className="w-7 h-7 rounded-lg bg-lime-400 text-black flex items-center justify-center font-mono font-black text-xs shadow-sm">
              R
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-mono font-bold text-white leading-tight">
                {user.name}
              </span>
              <span className="text-[9px] font-mono text-lime-400">
                神谕大师 (8 份)
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-metal-400 hidden sm:block" />
          </button>

          {/* User Dropdown Menu */}
          {userMenuOpen && (
            <div className="absolute right-0 top-12 w-56 rounded-2xl bg-[#0D1117] border border-white/15 shadow-2xl p-2 space-y-1 z-50 font-mono text-xs">
              <div className="p-3 border-b border-white/10">
                <div className="font-bold text-white">{user.name}</div>
                <div className="text-[10px] text-metal-400">Prediction IQ: {user.predictionIQ}</div>
                <div className="text-[10px] text-lime-400">8 份全网分红资格</div>
              </div>

              <button
                onClick={() => {
                  setUserMenuOpen(false);
                  startTour();
                }}
                className="w-full px-3 py-2 rounded-lg text-left text-lime-400 hover:bg-lime-400/10 flex items-center gap-2 font-bold"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>开启投资人导览</span>
              </button>

              <button
                onClick={() => {
                  setUserMenuOpen(false);
                  navigate('/app/profile');
                }}
                className="w-full px-3 py-2 rounded-lg text-left text-metal-200 hover:text-white hover:bg-white/5 flex items-center gap-2"
              >
                <User className="w-3.5 h-3.5" />
                <span>个人声誉主页</span>
              </button>

              <button
                onClick={() => {
                  setUserMenuOpen(false);
                  navigate('/app/settings');
                }}
                className="w-full px-3 py-2 rounded-lg text-left text-metal-200 hover:text-white hover:bg-white/5 flex items-center gap-2"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>账户与安全设置</span>
              </button>

              <div className="h-px bg-white/10 my-1" />

              <button
                onClick={() => {
                  setUserMenuOpen(false);
                  logout();
                }}
                className="w-full px-3 py-2 rounded-lg text-left text-red-400 hover:bg-red-500/10 flex items-center gap-2"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>退出登录</span>
              </button>
            </div>
          )}
        </div>

      </div>

    </header>
  );
};
