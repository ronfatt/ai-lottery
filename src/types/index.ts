export type GameModeId = 
  | 'number-hunt' 
  | 'hot-number' 
  | 'number-zone' 
  | 'odd-even' 
  | 'high-low' 
  | 'total-sum' 
  | 'pattern-prediction';

export interface GameModeInfo {
  id: GameModeId;
  index: string;
  name: string;
  tagline: string;
  description: string;
  category: 'direct' | 'distribution' | 'analytical' | 'pattern';
  accentColor: string;
}

export interface PredictionRecord {
  numbers: number[];
  timestamp: string;
  hash: string;
  blockNumber: number;
  status: 'sealed' | 'pending' | 'verified';
  drawId: string;
}

export interface DrawResult {
  drawId: string;
  drawTime: string;
  winningNumbers: number[];
  specialNumber?: number;
  totalSum: number;
  oddCount: number;
  evenCount: number;
  highCount: number;
  lowCount: number;
  zones: {
    zone1: number; // 1-10
    zone2: number; // 11-20
    zone3: number; // 21-30
    zone4: number; // 31-40
    zone5: number; // 41-49
  };
  hasConsecutive: boolean;
  hasRepeatedEnding: boolean;
  under10Count: number;
}

export interface HeatmapNumberData {
  number: number;
  confidence: number; // percentage e.g. 74
  predictionsCount: number;
  rank: number;
  isHot?: boolean;
}

export interface PlayerProfile {
  username: string;
  predictionIQ: number;
  percentile: number;
  globalRank: number;
  streak: number;
  hitRate: number;
  patternAccuracy: number;
  oddEvenAccuracy: number;
  highLowAccuracy: number;
  totalPredictions: number;
  seasonXP: number;
}
