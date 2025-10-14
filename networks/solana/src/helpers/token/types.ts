import { PublicKey } from '../../types';
import { TokenAccountState } from './constants';

export interface TokenMint {
  mintAuthority: PublicKey | null;
  supply: bigint;
  decimals: number;
  isInitialized: boolean;
  freezeAuthority: PublicKey | null;
}

export interface TokenAccount {
  mint: PublicKey;
  owner: PublicKey;
  amount: bigint;
  delegate: PublicKey | null;
  state: TokenAccountState;
  isNative: boolean;
  delegatedAmount: bigint;
  closeAuthority: PublicKey | null;
}

export interface Multisig {
  m: number;
  n: number;
  isInitialized: boolean;
  signers: PublicKey[];
}

export interface TokenAmount {
  amount: string;
  decimals: number;
  uiAmount: string;
  uiAmountString: string;
}

export interface TokenBalance {
  accountIndex: number;
  mint: string;
  owner?: string;
  uiTokenAmount: TokenAmount;
  programId?: string;
}

export interface ParsedTokenAccount {
  pubkey: PublicKey;
  account: {
    data: {
      parsed: {
        info: TokenAccount;
        type: 'account';
      };
      program: 'spl-token';
      space: number;
    };
    executable: boolean;
    lamports: number;
    owner: PublicKey;
    rentEpoch: number;
  };
}

export interface TokenLargestAccount {
  address: PublicKey;
  amount: string;
  decimals: number;
  uiAmount: number;
  uiAmountString: string;
}

export interface TokenSupply {
  amount: string;
  decimals: number;
  uiAmount: number;
  uiAmountString: string;
}

export interface TransferParams {
  source: PublicKey;
  destination: PublicKey;
  owner: PublicKey;
  amount: bigint;
  multiSigners?: PublicKey[];
}

export interface TransferCheckedParams extends TransferParams {
  mint: PublicKey;
  decimals: number;
}

export interface MintToParams {
  mint: PublicKey;
  destination: PublicKey;
  authority: PublicKey;
  amount: bigint;
  multiSigners?: PublicKey[];
}

export interface MintToCheckedParams extends MintToParams {
  decimals: number;
}

export interface BurnParams {
  account: PublicKey;
  mint: PublicKey;
  owner: PublicKey;
  amount: bigint;
  multiSigners?: PublicKey[];
}

export interface BurnCheckedParams extends BurnParams {
  decimals: number;
}

export interface ApproveParams {
  account: PublicKey;
  delegate: PublicKey;
  owner: PublicKey;
  amount: bigint;
  multiSigners?: PublicKey[];
}

export interface ApproveCheckedParams extends ApproveParams {
  mint: PublicKey;
  decimals: number;
}
