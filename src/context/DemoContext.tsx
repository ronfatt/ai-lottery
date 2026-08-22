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
  
  // Live Pool State in USDT
  globalPoolAmountUSDT: number;
  poolGrowthTodayUSDT: number;
  
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
    f1IQ: number;
    f1RankMalaysia: number;
    f1RankGlobal: number;
    f1Accuracy: number;
    globalRank: number;
    rankDelta: number;
    activeCommunity: number;
    directActive: number;
    l2Active: number;
    retention: number;
    predictionEnergy: number;
    maxEnergy: number;
    walletBalanceUSDT: number;
    pendingRewardsUSDT: number;
    lifetimeRewardsUSDT: number;
    oracleCredits: number;
    streak: number;
    bestStreak: number;
    seasonPoints: number;
    seasonLevel: number;
    monthlyRewardsUSDT: number;
  };

  // Datasets
  networkMembers: NetworkMember[];
  predictionRounds: PredictionHistoryRound[];
  walletTransactions: WalletTransaction[];
  notifications: NotificationItem[];
  markAllNotificationsAsRead: () => void;

  // Actions
  addNewPrediction: (numbers: number[], gameMode?: string) => Promise<PredictionHistoryRound>;
  addF1Prediction: (selectionText: string, gameMode?: string) => Promise<PredictionHistoryRound>;
  
  // Toast system
  toast: { message: string; type: 'success' | 'info' | 'warning' } | null;
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;

  // 10-Step Investor Presentation Tour
  isTourActive: boolean;
  tourStep: number;
  startTour: () => void;
  nextTourStep: () => void;
  prevTourStep: () => void;
  endTour: () => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const DemoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname.startsWith('/app') ? window.location.pathname : '/';
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return window.location.pathname.startsWith('/app');
  });

  // Simulated Live Pool Ticker in USDT (Starts at 384,280 USDT)
  const [globalPoolAmountUSDT, setGlobalPoolAmountUSDT] = useState(384280.00);
  const [poolGrowthTodayUSDT, setPoolGrowthTodayUSDT] = useState(420.00);

  useEffect(() => {
    const timer = setInterval(() => {
      const delta = Math.floor(Math.random() * 18) + 4;
      setGlobalPoolAmountUSDT((prev) => parseFloat((prev + delta).toFixed(2)));
      setPoolGrowthTodayUSDT((prev) => parseFloat((prev + delta).toFixed(2)));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // User State in USDT
  const [user, setUser] = useState({
    name: 'R.ON',
    title: '神谕大师 (Oracle Master)',
    rank: 'oracle_master',
    rankLevel: 5,
    shares: 8,
    performanceShares: 2,
    creatorShares: 1,
    predictionIQ: 782,
    f1IQ: 824,
    f1RankMalaysia: 122,
    f1RankGlobal: 841,
    f1Accuracy: 74,
    globalRank: 1284,
    rankDelta: 324,
    activeCommunity: 1248,
    directActive: 50,
    l2Active: 178,
    retention: 68,
    predictionEnergy: 720,
    maxEnergy: 1000,
    walletBalanceUSDT: 1842.60,
    pendingRewardsUSDT: 342.00,
    lifetimeRewardsUSDT: 18420.80,
    oracleCredits: 3840,
    streak: 6,
    bestStreak: 14,
    seasonPoints: 26870,
    seasonLevel: 27,
    monthlyRewardsUSDT: 2842.60,
  });

  const [networkMembers] = useState<NetworkMember[]>(MOCK_NETWORK_MEMBERS);
  const [predictionRounds, setPredictionRounds] = useState<PredictionHistoryRound[]>(MOCK_PREDICTION_ROUNDS);
  const [walletTransactions] = useState<WalletTransaction[]>(MOCK_WALLET_TRANSACTIONS);
  const [notifications, setNotifications] = useState<NotificationItem[]>(MOCK_NOTIFICATIONS);

  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'warning' } | null>(null);

  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  // 10-Step Investor Tour
  const [isTourActive, setIsTourActive] = useState(false);
  const [tourStep, setTourStep] = useState(1);

  const startTour = () => {
    setIsTourActive(true);
    setTourStep(1);
    setCurrentPath('/app');
    showToast('已开启 10 步投资人全景导览 (Investor Demo Tour)', 'info');
  };

  const nextTourStep = () => {
    if (tourStep < 10) {
      const next = tourStep + 1;
      setTourStep(next);
      // Auto routing matching the 10 tour steps
      if (next === 1) setCurrentPath('/app');
      else if (next === 2 || next === 3) setCurrentPath('/app/predict');
      else if (next === 4) setCurrentPath('/app/iq');
      else if (next === 5) setCurrentPath('/app/wallet');
      else if (next === 6) setCurrentPath('/app/referral');
      else if (next === 7) setCurrentPath('/app/pool');
      else if (next === 8) setCurrentPath('/app/events/f1-malaysia-2026');
      else if (next === 9) setCurrentPath('/app/proof');
      else if (next === 10) setCurrentPath('/app/games');
    } else {
      endTour();
    }
  };

  const prevTourStep = () => {
    if (tourStep > 1) {
      const prev = tourStep - 1;
      setTourStep(prev);
      if (prev === 1) setCurrentPath('/app');
      else if (prev === 2 || prev === 3) setCurrentPath('/app/predict');
      else if (prev === 4) setCurrentPath('/app/iq');
      else if (prev === 5) setCurrentPath('/app/wallet');
      else if (prev === 6) setCurrentPath('/app/referral');
      else if (prev === 7) setCurrentPath('/app/pool');
      else if (prev === 8) setCurrentPath('/app/events/f1-malaysia-2026');
      else if (prev === 9) setCurrentPath('/app/proof');
      else if (prev === 10) setCurrentPath('/app/games');
    }
  };

  const endTour = () => {
    setIsTourActive(false);
    showToast('导览结束，可自由体验任意功能。', 'info');
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

  // Add new Number prediction (Ref HK Mark Six)
  const addNewPrediction = async (numbers: number[], gameMode: string = '数字猎手 (5码)'): Promise<PredictionHistoryRound> => {
    const mockHash = `0x${Math.random().toString(16).slice(2)}${Math.random().toString(16).slice(2)}`;
    const mockBlock = 28482914 + predictionRounds.length;
    
    setUser((prev) => ({
      ...prev,
      predictionEnergy: Math.max(0, prev.predictionEnergy - 100),
    }));

    const newRound: PredictionHistoryRound = {
      id: `rnd-${Date.now()}`,
      gameCategory: 'NUMBER',
      roundId: `#${260823 + predictionRounds.length}`,
      eventTitle: '香港六合彩公开开奖数据参考 · 01-49 数字预测',
      referenceSource: '香港六合彩公开摇号数据参考 (HK Mark Six Result Reference)',
      drawDate: '2026-08-22 21:30 (封存待开奖)',
      closingTime: '2026-08-22 21:15',
      selectedNumbers: numbers,
      officialNumbers: undefined,
      hits: 0,
      score: '已在链上盖戳封存 · 等待香港公开摇号',
      xpGained: 100,
      iqDelta: 0,
      hash: mockHash,
      blockNumber: mockBlock,
      status: 'SEALED',
      gameMode: gameMode,
      accuracyRate: '等待开奖',
    };

    setPredictionRounds((prev) => [newRound, ...prev]);
    showToast(`数字预测已成功在区块链盖戳封存！参考香港公开摇号数据。消耗 100 ⚡ 能量。`, 'success');
    return newRound;
  };

  // Add F1 prediction (Ref Sepang 2026)
  const addF1Prediction = async (selectionText: string, gameMode: string = '雪邦 SUPER 10'): Promise<PredictionHistoryRound> => {
    const mockHash = `0xF1${Math.random().toString(16).slice(2)}${Math.random().toString(16).slice(2)}`;
    const mockBlock = 28483100 + predictionRounds.length;

    setUser((prev) => ({
      ...prev,
      predictionEnergy: Math.max(0, prev.predictionEnergy - 150),
    }));

    const newRound: PredictionHistoryRound = {
      id: `rnd-f1-${Date.now()}`,
      gameCategory: 'F1',
      roundId: 'F1-MY-2026',
      eventTitle: '2026 F1 马来西亚雪邦大奖赛 (SEPANG) 特色赛事',
      referenceSource: 'FIA 官方雪邦排位与正赛遥测结果',
      drawDate: '2026-10-04 15:00',
      closingTime: '2026-10-04 14:45',
      userSelectionText: selectionText,
      officialResultText: '等待 10月4日 官方正赛成绩',
      hits: 0,
      score: '已在链上盖戳封存 · 等待正赛成绩',
      xpGained: 200,
      iqDelta: 0,
      rewardUSDT: 50.0,
      hash: mockHash,
      blockNumber: mockBlock,
      status: 'SEALED',
      gameMode: gameMode,
      accuracyRate: '等待结算',
    };

    setPredictionRounds((prev) => [newRound, ...prev]);
    showToast(`F1 雪邦特色赛事预测已在链上封存！成功锁定 10 项遥测指标。`, 'success');
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
        globalPoolAmountUSDT,
        poolGrowthTodayUSDT,
        user,
        networkMembers,
        predictionRounds,
        walletTransactions,
        notifications,
        markAllNotificationsAsRead,
        addNewPrediction,
        addF1Prediction,
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
