import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { AppHeader } from './AppHeader';
import { AppSidebar } from './AppSidebar';
import { MobileBottomNav } from './MobileBottomNav';
import { InvestorTour } from './InvestorTour';
import { CheckCircle2, Info, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Views
import { DashboardView } from './views/DashboardView';
import { PredictView } from './views/PredictView';
import { F1PredictView } from './views/F1PredictView';
import { F1IQView } from './views/F1IQView';
import { GamesHubView } from './views/GamesHubView';
import { PredictionsView } from './views/PredictionsView';
import { PredictionIQView } from './views/PredictionIQView';
import { LeaderboardView } from './views/LeaderboardView';
import { SeasonView } from './views/SeasonView';
import { NetworkView } from './views/NetworkView';
import { ReferralView } from './views/ReferralView';
import { CommunityView } from './views/CommunityView';
import { RankingView } from './views/RankingView';
import { PoolView } from './views/PoolView';
import { RewardsView } from './views/RewardsView';
import { WalletView } from './views/WalletView';
import { ProofView } from './views/ProofView';
import { ProfileView } from './views/ProfileView';
import { SettingsView } from './views/SettingsView';

export const AppLayout: React.FC = () => {
  const { currentPath, toast } = useDemo();

  // Page titles by path
  const getPageTitle = () => {
    switch (currentPath) {
      case '/app':
        return '会员控制台 (DASHBOARD)';
      case '/app/predict':
        return '数字预测 (NUMBER PREDICTION)';
      case '/app/events/f1-malaysia-2026':
        return '2026 F1 马来西亚雪邦预测 (F1 SEPANG 2026)';
      case '/app/f1-iq':
        return 'F1 专属预测智商 (F1 MOTORSPORT IQ)';
      case '/app/games':
        return '预测游戏大厅 (GAMES HUB)';
      case '/app/predictions':
        return '我的预测记录 (PREDICTIONS)';
      case '/app/iq':
        return '预测智商声誉 (PREDICTION IQ)';
      case '/app/leaderboard':
        return '全球天梯榜 (GLOBAL LEADERBOARD)';
      case '/app/season':
        return '季度通行证 (SEASON 08)';
      case '/app/network':
        return '我的组织网络 (MY NETWORK)';
      case '/app/referral':
        return '推荐裂变中心 (REFERRAL)';
      case '/app/community':
        return '社群健康指数 (COMMUNITY)';
      case '/app/ranking':
        return '会员等级晋级 (RANK LADDER)';
      case '/app/pool':
        return '全球分红池 (GLOBAL USDT POOL)';
      case '/app/rewards':
        return '综合收益中心 (REWARDS)';
      case '/app/wallet':
        return 'USDT 奖金钱包 (USDT WALLET)';
      case '/app/proof':
        return '全账本区块链浏览器 (PROOF)';
      case '/app/profile':
        return '个人声誉主页 (PROFILE)';
      case '/app/settings':
        return '系统偏好设置 (SETTINGS)';
      default:
        return '会员控制台';
    }
  };

  // Render view by path
  const renderCurrentView = () => {
    switch (currentPath) {
      case '/app/predict':
        return <PredictView />;
      case '/app/events/f1-malaysia-2026':
        return <F1PredictView />;
      case '/app/f1-iq':
        return <F1IQView />;
      case '/app/games':
        return <GamesHubView />;
      case '/app/predictions':
        return <PredictionsView />;
      case '/app/iq':
        return <PredictionIQView />;
      case '/app/leaderboard':
        return <LeaderboardView />;
      case '/app/season':
        return <SeasonView />;
      case '/app/network':
        return <NetworkView />;
      case '/app/referral':
        return <ReferralView />;
      case '/app/community':
        return <CommunityView />;
      case '/app/ranking':
        return <RankingView />;
      case '/app/pool':
        return <PoolView />;
      case '/app/rewards':
        return <RewardsView />;
      case '/app/wallet':
        return <WalletView />;
      case '/app/proof':
        return <ProofView />;
      case '/app/profile':
        return <ProfileView />;
      case '/app/settings':
        return <SettingsView />;
      case '/app':
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-[#06080B] text-white flex flex-col lg:flex-row relative selection:bg-[#00FF66] selection:text-black">
      
      {/* Desktop Sidebar */}
      <AppSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen pb-20 lg:pb-8">
        
        {/* Sticky Header */}
        <AppHeader pageTitle={getPageTitle()} />

        {/* Dynamic Route View with Sub-container */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
          {renderCurrentView()}
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />

      {/* Investor Guided Walkthrough Tour Floating Widget */}
      <InvestorTour />

      {/* Global Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed top-20 right-6 z-50 max-w-sm rounded-2xl bg-[#0D1117] border-2 border-lime-400 p-4 shadow-[0_0_40px_rgba(0,255,102,0.3)] flex items-start gap-3 text-white font-mono text-xs"
          >
            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-lime-400 flex-shrink-0" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-cyber-blue flex-shrink-0" />}
            {toast.type === 'warning' && <AlertTriangle className="w-5 h-5 text-cyber-amber flex-shrink-0" />}
            <div className="space-y-0.5">
              <span className="font-bold text-white block">{toast.message}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
