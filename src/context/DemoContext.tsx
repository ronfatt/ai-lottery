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
    racingIQ: number;
    techIQ: number;
    cryptoIQ: number;
    racingRankShaTin: number;
    racingRankGlobal: number;
    racingWinAccuracy: string;
    racingTop3Accuracy: string;
    racingJockeyAccuracy: string;
    racingBarrierAccuracy: string;
    racingSuper8Accuracy: string;
    f1RankMalaysia: number;
    f1RankGlobal: number;
    f1Accuracy: number;
    globalTechRank: number;
    globalCryptoRank: number;
    techStreak: number;
    cryptoStreak: number;
    techAccuracy: number;
    cryptoAccuracy: number;
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
  addHorseRacingPrediction: (selectionText: string, gameMode?: string) => Promise<PredictionHistoryRound>;
  addTechPrediction: (selectionText: string, gameMode?: string) => Promise<PredictionHistoryRound>;
  addCryptoPrediction: (selectionText: string, gameMode?: string) => Promise<PredictionHistoryRound>;
  
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
    racingIQ: 768,
    techIQ: 811,
    cryptoIQ: 796,
    racingRankShaTin: 184,
    racingRankGlobal: 742,
    racingWinAccuracy: '31.2%',
    racingTop3Accuracy: '58.4%',
    racingJockeyAccuracy: '72.0%',
    racingBarrierAccuracy: '61.0%',
    racingSuper8Accuracy: '67.0%',
    f1RankMalaysia: 122,
    f1RankGlobal: 841,
    f1Accuracy: 74,
    globalTechRank: 362,
    globalCryptoRank: 412,
    techStreak: 5,
    cryptoStreak: 6,
    techAccuracy: 74,
    cryptoAccuracy: 72,
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
    showToast('已开启 10 步超级预测平台导览 (Super App Tour)', 'info');
  };

  const nextTourStep = () => {
    if (tourStep < 10) {
      const next = tourStep + 1;
      setTourStep(next);
      // Auto routing matching the 10 tour steps
      if (next === 1) setCurrentPath('/app/predict');
      else if (next === 2) setCurrentPath('/app/proof');
      else if (next === 3) setCurrentPath('/app/iq');
      else if (next === 4) setCurrentPath('/app/wallet');
      else if (next === 5) setCurrentPath('/app/pool');
      else if (next === 6) setCurrentPath('/app/events/f1-malaysia-2026');
      else if (next === 7) setCurrentPath('/app/events/hk-racing');
      else if (next === 8) setCurrentPath('/app/events/tech-october-2026');
      else if (next === 9) setCurrentPath('/app/games');
      else if (next === 10) setCurrentPath('/app');
    } else {
      endTour();
    }
  };

  const prevTourStep = () => {
    if (tourStep > 1) {
      const prev = tourStep - 1;
      setTourStep(prev);
      if (prev === 1) setCurrentPath('/app/predict');
      else if (prev === 2) setCurrentPath('/app/proof');
      else if (prev === 3) setCurrentPath('/app/iq');
      else if (prev === 4) setCurrentPath('/app/wallet');
      else if (prev === 5) setCurrentPath('/app/pool');
      else if (prev === 6) setCurrentPath('/app/events/f1-malaysia-2026');
      else if (prev === 7) setCurrentPath('/app/events/hk-racing');
      else if (prev === 8) setCurrentPath('/app/events/tech-october-2026');
      else if (prev === 9) setCurrentPath('/app/games');
      else if (prev === 10) setCurrentPath('/app');
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
      eventTitle: '香港六合彩公开摇号数据参考 · 01-49 数字预测',
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

  // Add Horse Racing prediction (Ref Sha Tin Race Day)
  const addHorseRacingPrediction = async (selectionText: string, gameMode: string = 'RACE DAY SUPER 8'): Promise<PredictionHistoryRound> => {
    const mockHash = `0x89A2F${Math.random().toString(16).slice(2)}${Math.random().toString(16).slice(2)}`;
    const mockBlock = 28483300 + predictionRounds.length;

    setUser((prev) => ({
      ...prev,
      predictionEnergy: Math.max(0, prev.predictionEnergy - 120),
    }));

    const newRound: PredictionHistoryRound = {
      id: `rnd-hr-${Date.now()}`,
      gameCategory: 'HORSE_RACING',
      roundId: `HR-260822-R6-${Math.floor(Math.random()*800+100)}`,
      eventTitle: '香港沙田赛马日 · 第 6 场 1600米 公开赛果参考',
      referenceSource: '香港赛马公开赛果参考 (Sha Tin Race Day Public Reference)',
      drawDate: '2026-08-22 16:30',
      closingTime: '2026-08-22 16:15',
      userSelectionText: selectionText,
      officialResultText: '第1名: #4 金牌王牌 · 第2名: #7 疾速地平线 · 第3名: #1 银色风暴',
      hits: 1,
      score: '独赢命中 (WINNER CALLED) ✓',
      xpGained: 350,
      iqDelta: 12,
      rewardUSDT: 25.0,
      hash: mockHash,
      blockNumber: mockBlock,
      status: 'VERIFIED',
      gameMode: gameMode,
      accuracyRate: '100% 命中',
    };

    setPredictionRounds((prev) => [newRound, ...prev]);
    showToast(`香港赛马日推演已成功在区块链封存！消耗 120 ⚡ 能量。`, 'success');
    return newRound;
  };

  // Add Tech prediction (Ref October Smartphone Watch 2026)
  const addTechPrediction = async (selectionText: string, gameMode: string = 'OCTOBER TECH SUPER 8'): Promise<PredictionHistoryRound> => {
    const mockHash = `0xA791C${Math.random().toString(16).slice(2)}${Math.random().toString(16).slice(2)}`;
    const mockBlock = 28484120 + predictionRounds.length;

    setUser((prev) => ({
      ...prev,
      predictionEnergy: Math.max(0, prev.predictionEnergy - 110),
    }));

    const newRound: PredictionHistoryRound = {
      id: `rnd-tech-${Date.now()}`,
      gameCategory: 'TECH',
      roundId: `TECH-OCT26-${Math.floor(Math.random()*800+100)}`,
      eventTitle: '10月智能手机发布观象台 · 官方发布会推演',
      referenceSource: '官方品牌全球新闻中心 (Official Brand Newsroom)',
      drawDate: '2026-10-31 23:59',
      closingTime: '2026-10-01 00:00',
      userSelectionText: selectionText,
      officialResultText: '等待各品牌官方新闻稿/发布会宣布',
      hits: 0,
      score: '已在链上盖戳封存 · 等待官方公布',
      xpGained: 400,
      iqDelta: 0,
      rewardUSDT: 35.0,
      hash: mockHash,
      blockNumber: mockBlock,
      status: 'SEALED',
      gameMode: gameMode,
      accuracyRate: '等待公布',
    };

    setPredictionRounds((prev) => [newRound, ...prev]);
    showToast(`科技新品发布预测已在区块链盖戳封存！通过客观官方事实源核验。`, 'success');
    return newRound;
  };

  // Add Crypto prediction (Ref BTC $100K & Market Events)
  const addCryptoPrediction = async (selectionText: string, gameMode: string = 'NOVEMBER CRYPTO SUPER 8'): Promise<PredictionHistoryRound> => {
    const mockHash = `0xC829F${Math.random().toString(16).slice(2)}${Math.random().toString(16).slice(2)}`;
    const mockBlock = 28484910 + predictionRounds.length;

    setUser((prev) => ({
      ...prev,
      predictionEnergy: Math.max(0, prev.predictionEnergy - 100),
    }));

    const newRound: PredictionHistoryRound = {
      id: `rnd-crypto-${Date.now()}`,
      gameCategory: 'CRYPTO',
      roundId: `BTC-100K-NOV26-${Math.floor(Math.random()*800+100)}`,
      eventTitle: 'BTC 10万美元里程碑与11月行情推演',
      referenceSource: 'CoinMarketCap BTC/USD & Approved Market Oracle (客观现货公价)',
      drawDate: '2026-11-30 23:59',
      closingTime: '2026-11-30 23:00',
      userSelectionText: selectionText,
      officialResultText: '等待 11月30日 23:59 UTC 权威客观现货定盘',
      hits: 0,
      score: '已在链上盖戳封存 · 等待 11月30日 定盘',
      xpGained: 500,
      iqDelta: 0,
      rewardUSDT: 50.0,
      hash: mockHash,
      blockNumber: mockBlock,
      status: 'SEALED',
      gameMode: gameMode,
      accuracyRate: '等待定盘',
    };

    setPredictionRounds((prev) => [newRound, ...prev]);
    showToast(`加密市场事件推演已在区块链盖戳封存！参考全网客观现货公价结算。`, 'success');
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
        addHorseRacingPrediction,
        addTechPrediction,
        addCryptoPrediction,
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
