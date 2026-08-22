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

export interface HeatmapNumberData {
  number: number;
  confidence: number;
  predictionsCount: number;
  rank: number;
  isHot?: boolean;
}
