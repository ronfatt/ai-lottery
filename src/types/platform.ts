export type MemberRankType = 
  | 'scout'          // 见习先锋 (Scout)
  | 'analyst'        // 数据分析师 (Analyst)
  | 'strategist'     // 战略操盘手 (Strategist)
  | 'oracle'         // 神谕使者 (Oracle)
  | 'oracle_master'   // 神谕大师 (Oracle Master)
  | 'oracle_elite';   // 神谕至尊 (Oracle Elite)

export type MembershipTier = 'FREE' | 'PRO' | 'ELITE' | 'BRAND';

export type GameCategory = 'NUMBER' | 'F1' | 'HORSE_RACING' | 'FOOTBALL' | 'ESPORTS' | 'MARKET' | 'CULTURE' | 'WORLD';

export interface NetworkMember {
  id: string;
  name: string;
  avatar: string;
  email?: string;
  rank: MemberRankType;
  rankTitle: string;
  membership: MembershipTier;
  directCount: number;
  communityCount: number;
  retention: number; // e.g. 71%
  activeStatus: 'ACTIVE' | 'INACTIVE';
  joinDate: string;
  monthlyCommissionUSDT: number;
  level: 1 | 2 | 3;
  parentId?: string;
  predictionIQ: number;
  f1IQ?: number;
  racingIQ?: number;
  seasonPoints: number;
}

export interface PredictionHistoryRound {
  id: string;
  gameCategory: GameCategory;
  roundId: string;
  eventTitle: string;
  referenceSource: string; // e.g. "香港六合彩公开摇号数据参考" or "香港赛马公开赛果参考" or "F1 官方排位/正赛结果"
  drawDate: string;
  closingTime: string;
  selectedNumbers?: number[];
  officialNumbers?: number[];
  specialNumber?: number;
  userSelectionText?: string;
  officialResultText?: string;
  hits: number;
  score: string;
  xpGained: number;
  iqDelta: number;
  rewardUSDT?: number;
  hash: string;
  blockNumber: number;
  status: 'VERIFIED' | 'SEALED' | 'PENDING';
  gameMode: string;
  accuracyRate?: string;
}

export interface HorseRunner {
  number: number;
  name: string;
  jockey: string;
  trainer: string;
  barrier: number;
  form: string;
  communityPickRate: number; // e.g. 28%
  silkColor: string;
  tag?: string;
}

export interface WalletTransaction {
  id: string;
  date: string;
  type: 'REFERRAL' | 'POOL' | 'CAMPAIGN' | 'CREDIT' | 'SUBSCRIPTION';
  typeLabel: string;
  description: string;
  amount: number;
  currency: 'USDT' | 'OC';
  status: 'COMPLETED' | 'ESTIMATED' | 'PENDING';
  txHash?: string;
}

export interface PoolHistoryMonth {
  month: string;
  poolSizeUSDT: number;
  yourShares: number;
  shareValueUSDT: number;
  rewardEarnedUSDT: number;
  status: 'SETTLED' | 'ACTIVE';
}

export interface NotificationItem {
  id: string;
  icon: string;
  title: string;
  time: string;
  read: boolean;
  type: 'streak' | 'rank' | 'pool' | 'member' | 'system' | 'f1' | 'racing';
}

export interface RankLevelInfo {
  rank: MemberRankType;
  title: string;
  enTitle: string;
  icon: string;
  shares: number;
  directRequired: number;
  communityRequired: number;
  retentionRequired: number;
  teamsRequired: string;
  benefits: string[];
  toolsUnlocked: string[];
  exampleEarningsUSDT: string;
}
