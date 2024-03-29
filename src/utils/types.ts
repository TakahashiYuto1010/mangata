import { WalletAccount } from '@talismn/connect-wallets';

export interface FarmType {
  id: number;
  chef: string;
  chain: string;
  protocol: string;
  farmType: string;
  farmImpl: string;
  asset: {
    symbol: string;
    address: string;
    price: number;
    logos: string[];
  };
  tvl: number;
  rewards: {
    amount: number;
    asset: string;
    valueUSD: number;
    freq: string;
  }[];
  apr: {
    reward: number;
    base: number;
  };
  allocPoint: number;
  lastUpdatedAtUTC: string;
  safetyScore: number;
}

export interface XcmpTaskType {
  taskId: string;
  userAddress: string;
  lpName: string;
  chain: string;
  status: string;
}

export type TokenType = {
  symbol: string;
  amount: number;
};
export interface AutocompoundEventType {
  userAddress: string;
  chain: string;
  taskId: string;
  lp: {
    symbol: string;
    amount: number;
  };
  duration: number;
  frequency: number;
  timestamp: string;
  executionFee: number;
  xcmpFee: number;
  status: string;
  eventType: string;
  percentage: number;
}

export interface TabProps {
  farm: FarmType;
  account: WalletAccount;
  pool: any | undefined;
}
