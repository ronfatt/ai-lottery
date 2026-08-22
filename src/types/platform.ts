export type MemberRank = 'scout' | 'analyst' | 'strategist' | 'oracle' | 'oracle_master' | 'oracle_elite';
export type MemberRankType = MemberRank;
export type MembershipTier = 'FREE' | 'PRO' | 'ELITE';
export type GameCategory = 'NUMBER' | 'F1' | 'HORSE_RACING' | 'TECH' | 'CRYPTO' | 'FOOTBALL' | 'ESPORTS' | 'GLOBAL_EVENT';

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  email: string;
  inviteCode: string;
  rank: MemberRank;
  rankTitle: string;
  membership: MembershipTier;
  predictionIQ: number;
  f1IQ: number;
  racingIQ: number;
  techIQ: number;
  cryptoIQ: number;
  globalRank: number;
  f1RankMalaysia: number;
  racingRankShaTin: number;
  globalTechRank: number;
  globalCryptoRank: number;
  rankDelta: number;
  activeCommunity: number;
  directReferrals: number;
  secondaryReferrals: number;
  communityRetentionRate: number;
  monthlyRewardsUSDT: number;
  walletBalanceUSDT: number;
  pendingRewardsUSDT: number;
  lifetimeRewardsUSDT: number;
  predictionEnergy: number;
  maxEnergy: number;
  streak: number;
  f1Accuracy: number;
  racingTop3Accuracy: string;
  techAccuracy: number;
  cryptoAccuracy: number;
  cryptoStreak: number;
  seasonPoints: number;
  seasonLevel: number;
}

export interface NetworkMember {
  id: string;
  name: string;
  avatar: string;
  email?: string;
  rank: MemberRank;
  rankTitle: string;
  membership: MembershipTier;
  directCount: number;
  communityCount: number;
  retention: number;
  activeStatus: 'ACTIVE' | 'IDLE' | 'AT_RISK';
  joinDate: string;
  monthlyCommissionUSDT: number;
  level: 1 | 2;
  parentId?: string;
  predictionIQ: number;
  f1IQ: number;
  racingIQ?: number;
  techIQ?: number;
  cryptoIQ?: number;
  seasonPoints: number;
}

export interface PredictionHistoryRound {
  id: string;
  gameCategory: GameCategory;
  roundId: string;
  eventTitle: string;
  referenceSource: string;
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
  status: 'VERIFIED' | 'PENDING' | 'SEALED';
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
  communityPickRate: number;
  silkColor: string;
  tag?: string;
}

export interface TechBrand {
  id: string;
  name: string;
  logoText: string;
  country: string;
  communityPickRate: number;
  rumouredModels?: string;
  verifiedLaunchDate?: string;
  status: 'UNCONFIRMED' | 'RUMOURED' | 'OFFICIAL_VERIFIED';
  tag?: string;
}

export interface TechPredictionMonth {
  year: number;
  month: string;
  title: string;
  trackedBrands: TechBrand[];
  totalPredictions: number;
  totalPlayers: number;
  status: 'OPEN' | 'IN_PROGRESS' | 'SETTLED';
  verificationRule: string;
}

export interface CryptoPredictionEvent {
  id: string;
  asset: string;
  title: string;
  eventType: 'PRICE_MILESTONE' | 'MONTHLY_CLOSE' | 'RELATIVE_PERFORMANCE' | 'PRICE_DIRECTION' | 'VOLATILITY' | 'OFFICIAL_EVENT';
  targetPrice?: number;
  currentReferencePrice: number;
  startDate: string;
  settlementDate: string;
  referenceSource: string;
  selectionOptions: string[];
  communitySelectionRates: { [key: string]: number };
  status: 'OPEN' | 'IN_PROGRESS' | 'VERIFIED' | 'SEALED';
  officialResult?: string;
  predictionHash?: string;
}

export interface WalletTransaction {
  id: string;
  date: string;
  type: 'REFERRAL' | 'POOL' | 'RANK_BONUS' | 'CAMPAIGN' | 'CREDIT';
  typeLabel: string;
  description: string;
  amount: number;
  currency: 'USDT' | 'OC';
  status: 'COMPLETED' | 'PROCESSING';
  txHash?: string;
}

export interface PoolHistoryMonth {
  month: string;
  poolSizeUSDT: number;
  yourShares: number;
  shareValueUSDT: number;
  rewardEarnedUSDT: number;
  status: 'SETTLED' | 'ESTIMATED';
}

export interface NotificationItem {
  id: string;
  icon: string;
  title: string;
  time: string;
  read: boolean;
  type: 'system' | 'reward' | 'member' | 'f1' | 'racing' | 'tech' | 'crypto';
}

export interface RankLevelInfo {
  rank: MemberRank;
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
