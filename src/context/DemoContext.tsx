import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  MOCK_NETWORK_MEMBERS, 
  MOCK_PREDICTION_ROUNDS, 
  MOCK_WALLET_TRANSACTIONS, 
  MOCK_NOTIFICATIONS,
  RANK_LADDER
} from '../data/mockData';
import { NetworkMember, PredictionHistoryRound, WalletTransaction, NotificationItem } from '../types/platform';

interface DemoContextType {
  currentPath: string;
  navigate: (path: string) => void;
  isAuthenticated: boolean;
  loginAsRon: () => void;
  logout: () => void;
  
  // Live Pool State
  globalPoolAmount: number;
  poolGrowthToday: number;
  
  // User Profile
  user: {
    name: string;
    title: string;
    rank: string;
    rankLevel: number;
    shares: number;
    performanceShares: number;
    creatorShares: number;
    predictionIQ: number;
    globalRank: number;
    rankDelta: number;
    activeCommunity: number;
    directActive: number;
    l2Active: number;
    retention: number;
    predictionEnergy: number;
    maxEnergy: number;
    walletBalance: number;
    pendingRewards: number;
    lifetimeRewards: number;
    oracleCredits: number;
    streak: number;
    bestStreak: number;
    seasonPoints: number;
    seasonLevel: number;
    monthlyRewards: number;
  };

  // Datasets
  networkMembers: NetworkMember[];
  predictionRounds: PredictionHistoryRound[];
  walletTransactions: WalletTransaction[];
  notifications: NotificationItem[];
  markAllNotificationsAsRead: () => void;

  // Actions
  addNewPrediction: (numbers: number[], gameMode?: string) => Promise<PredictionHistoryRound>;
  
  // Toast system
  toast: { message: string; type: 'success' | 'info' | 'warning' } | null;
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;

  // Investor Presentation Tour
  isTourActive: boolean;
  tourStep: number;
  startTour: () => void;
  nextTourStep: () => void;
  prevTourStep: () => void;
  endTour: () => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const DemoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation state (defaults to landing page '/')
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname.startsWith('/app') ? window.location.pathname : '/';
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return window.location.pathname.startsWith('/app');
  });

  // Simulated Live Pool Ticker (Starts at RM 384,280 and increments realistically)
  const [globalPoolAmount, setGlobalPoolAmount] = useState(384280.40);
  const [poolGrowthToday, setPoolGrowthToday] = useState(420.00);

  useEffect(() => {
    const timer = setInterval(() => {
      const delta = Math.floor(Math.random() * 18) + 4;
      setGlobalPoolAmount((prev) => parseFloat((prev + delta).toFixed(2)));
      setPoolGrowthToday((prev) => parseFloat((prev + delta).toFixed(2)));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // User State
  const [user, setUser] = useState({
    name: 'R.ON',
    title: '神谕大师 (Oracle Master)',
    rank: 'oracle_master',
    rankLevel: 5,
    shares: 8,
    performanceShares: 2,
    creatorShares: 1,
    predictionIQ: 782,
    globalRank: 1284,
    rankDelta: 324,
    activeCommunity: 1248,
    directActive: 50,
    l2Active: 178,
    retention: 68,
    predictionEnergy: 720,
    maxEnergy: 1000,
    walletBalance: 2500.60,
    pendingRewards: 342.00,
    lifetimeRewards: 18420.80,
    oracleCredits: 3840,
    streak: 6,
    bestStreak: 14,
    seasonPoints: 26870,
    seasonLevel: 27,
    monthlyRewards: 2842.60,
  });

  const [networkMembers] = useState<NetworkMember[]>(MOCK_NETWORK_MEMBERS);
  const [predictionRounds, setPredictionRounds] = useState<PredictionHistoryRound[]>(MOCK_PREDICTION_ROUNDS);
  const [walletTransactions] = useState<WalletTransaction[]>(MOCK_WALLET_TRANSACTIONS);
  const [notifications, setNotifications] = useState<NotificationItem[]>(MOCK_NOTIFICATIONS);

  // Toast notification state
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'warning' } | null>(null);

  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  // Investor Tour Guide State
  const [isTourActive, setIsTourActive] = useState(false);
  const [tourStep, setTourStep] = useState(1);

  const startTour = () => {
    setIsTourActive(true);
    setTourStep(1);
    setCurrentPath('/app');
    showToast('已开启投资人专属引导演示 (Investor Demo Tour)', 'info');
  };

  const nextTourStep = () => {
    if (tourStep < 7) {
      const next = tourStep + 1;
      setTourStep(next);
      // Automatically switch views matching the tour highlights
      if (next === 1) setCurrentPath('/app');
      else if (next === 2) setCurrentPath('/app/predict');
      else if (next === 3) setCurrentPath('/app/iq');
      else if (next === 4) setCurrentPath('/app/network');
      else if (next === 5) setCurrentPath('/app/referral');
      else if (next === 6) setCurrentPath('/app/pool');
      else if (next === 7) setCurrentPath('/app/proof');
    } else {
      endTour();
    }
  };

  const prevTourStep = () => {
    if (tourStep > 1) {
      const prev = tourStep - 1;
      setTourStep(prev);
      if (prev === 1) setCurrentPath('/app');
      else if (prev === 2) setCurrentPath('/app/predict');
      else if (prev === 3) setCurrentPath('/app/iq');
      else if (prev === 4) setCurrentPath('/app/network');
      else if (prev === 5) setCurrentPath('/app/referral');
      else if (prev === 6) setCurrentPath('/app/pool');
      else if (prev === 7) setCurrentPath('/app/proof');
    }
  };

  const endTour = () => {
    setIsTourActive(false);
    showToast('演示引导结束，您可以自由浏览与体验任意功能。', 'info');
  };

  const navigate = (path: string) => {
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const loginAsRon = () => {
    setIsAuthenticated(true);
    setCurrentPath('/app');
    showToast('已作为 R.ON (神谕大师) 成功进入会员控制台', 'success');
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentPath('/');
    showToast('已退出会员后台，返回公开主页', 'info');
  };

  const markAllNotificationsAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    showToast('所有通知已标记为已读');
  };

  // Add new prediction round simulator
  const addNewPrediction = async (numbers: number[], gameMode: string = '数字猎手 (5码)'): Promise<PredictionHistoryRound> => {
    const mockHash = `0x${Math.random().toString(16).slice(2)}${Math.random().toString(16).slice(2)}`;
    const mockBlock = 28482914 + predictionRounds.length;
    
    // deduct 100 energy
    setUser((prev) => ({
      ...prev,
      predictionEnergy: Math.max(0, prev.predictionEnergy - 100),
    }));

    const newRound: PredictionHistoryRound = {
      id: `rnd-${Date.now()}`,
      roundId: `#${260823 + predictionRounds.length}`,
      drawDate: '2026-08-22 21:00 (封存待开奖)',
      closingTime: '2026-08-22 20:50',
      selectedNumbers: numbers,
      officialNumbers: undefined,
      hits: 0,
      score: '已封存待开奖',
      xpGained: 100, // Participation XP
      iqDelta: 0,
      hash: mockHash,
      blockNumber: mockBlock,
      status: 'SEALED',
      gameMode: gameMode,
      accuracyRate: '等待开奖',
    };

    setPredictionRounds((prev) => [newRound, ...prev]);
    showToast(`预测已成功在区块链盖戳封存！消耗 100 ⚡ 预测能量。`, 'success');
    return newRound;
  };

  return (
    <DemoContext.Provider
      value={{
        currentPath,
        navigate,
        isAuthenticated,
        loginAsRon,
        logout,
        globalPoolAmount,
        poolGrowthToday,
        user,
        networkMembers,
        predictionRounds,
        walletTransactions,
        notifications,
        markAllNotificationsAsRead,
        addNewPrediction,
        toast,
        showToast,
        isTourActive,
        tourStep,
        startTour,
        nextTourStep,
        prevTourStep,
        endTour,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
};

export const useDemo = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
};
