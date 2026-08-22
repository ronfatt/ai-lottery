export type MemberRankType = 
  | 'scout'          // 见习先锋 (Scout)
  | 'analyst'        // 数据分析师 (Analyst)
  | 'strategist'     // 战略操盘手 (Strategist)
  | 'oracle'         // 神谕使者 (Oracle)
  | 'oracle_master'   // 神谕大师 (Oracle Master)
  | 'oracle_elite';   // 神谕至尊 (Oracle Elite)

export type MembershipTier = 'FREE' | 'PRO' | 'ELITE' | 'BRAND';

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
  monthlyCommission: number;
  level: 1 | 2 | 3;
  parentId?: string;
  predictionIQ: number;
  seasonPoints: number;
}

export interface PredictionHistoryRound {
  id: string;
  roundId: string;
  drawDate: string;
  closingTime: string;
  selectedNumbers: number[];
  officialNumbers?: number[];
  hits: number;
  score: string;
  xpGained: number;
  iqDelta: number;
  hash: string;
  blockNumber: number;
  status: 'VERIFIED' | 'SEALED' | 'PENDING';
  gameMode: string;
  accuracyRate?: string;
}

export interface WalletTransaction {
  id: string;
  date: string;
  type: 'REFERRAL' | 'POOL' | 'CAMPAIGN' | 'CREDIT' | 'SUBSCRIPTION';
  typeLabel: string;
  description: string;
  amount: number;
  currency: 'RM' | 'OC';
  status: 'COMPLETED' | 'ESTIMATED' | 'PENDING';
  txHash?: string;
}

export interface PoolHistoryMonth {
  month: string;
  poolSize: number;
  yourShares: number;
  shareValue: number;
  rewardEarned: number;
  status: 'SETTLED' | 'ACTIVE';
}

export interface NotificationItem {
  id: string;
  icon: string;
  title: string;
  time: string;
  read: boolean;
  type: 'streak' | 'rank' | 'pool' | 'member' | 'system';
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
  exampleEarnings: string;
}
