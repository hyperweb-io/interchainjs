import { PublicKey } from './types';
import { TokenAccountState } from './token-constants';

// Token Mint information
export interface TokenMint {
  // Mint authority public key (can be null if revoked)
  mintAuthority: PublicKey | null;
  
  // Current supply of tokens
  supply: bigint;
  
  // Number of base 10 digits to the right of the decimal place
  decimals: number;
  
  // Is this mint initialized?
  isInitialized: boolean;
  
  // Freeze authority (can be null if not set)
  freezeAuthority: PublicKey | null;
}

// Token Account information
export interface TokenAccount {
  // The mint associated with this account
  mint: PublicKey;
  
  // Owner of this account
  owner: PublicKey;
  
  // Amount of tokens this account holds
  amount: bigint;
  
  // Optional delegate for spending tokens
  delegate: PublicKey | null;
  
  // State of the account
  state: TokenAccountState;
  
  // Is this account a native token account (wrapped SOL)?
  isNative: boolean;
  
  // Amount delegated to the delegate
  delegatedAmount: bigint;
  
  // Optional close authority
  closeAuthority: PublicKey | null;
}

// Multisig account information
export interface Multisig {
  // Number of required signatures
  m: number;
  
  // Number of signers
  n: number;
  
  // Is initialized
  isInitialized: boolean;
  
  // Signer public keys
  signers: PublicKey[];
}

// Token amount with UI representation
export interface TokenAmount {
  // Raw amount as string
  amount: string;
  
  // Number of decimals
  decimals: number;
  
  // UI amount as string
  uiAmount: string;
  
  // UI amount as number (may lose precision)
  uiAmountString: string;
}

// Token balance response from RPC
export interface TokenBalance {
  // Account index in transaction
  accountIndex: number;
  
  // Token mint
  mint: string;
  
  // Owner of the token account
  owner?: string;
  
  // Token amount
  uiTokenAmount: TokenAmount;
  
  // Program ID that owns the token account
  programId?: string;
}

// Token account information returned by RPC
export interface ParsedTokenAccount {
  // Account public key
  pubkey: PublicKey;
  
  // Account information
  account: {
    // Account data
    data: {
      parsed: {
        info: TokenAccount;
        type: 'account';
      };
      program: 'spl-token';
      space: number;
    };
    
    // Is executable
    executable: boolean;
    
    // Lamports balance
    lamports: number;
    
    // Owner program
    owner: PublicKey;
    
    // Rent epoch
    rentEpoch: number;
  };
}

// Token largest accounts response
export interface TokenLargestAccount {
  // Account address
  address: PublicKey;
  
  // Amount of tokens
  amount: string;
  
  // Number of decimals
  decimals: number;
  
  // UI amount
  uiAmount: number;
  
  // UI amount string
  uiAmountString: string;
}

// Token supply information
export interface TokenSupply {
  // Total supply
  amount: string;
  
  // Number of decimals
  decimals: number;
  
  // UI amount
  uiAmount: number;
  
  // UI amount string  
  uiAmountString: string;
}

// Transfer parameters
export interface TransferParams {
  // Source account
  source: PublicKey;
  
  // Destination account
  destination: PublicKey;
  
  // Owner of source account
  owner: PublicKey;
  
  // Amount to transfer (raw amount, not UI amount)
  amount: bigint;
  
  // Optional multisig signers
  multiSigners?: PublicKey[];
}

// Transfer checked parameters (includes mint and decimals for verification)
export interface TransferCheckedParams extends TransferParams {
  // Token mint
  mint: PublicKey;
  
  // Number of decimals
  decimals: number;
}

// Mint parameters
export interface MintToParams {
  // Token mint
  mint: PublicKey;
  
  // Destination account
  destination: PublicKey;
  
  // Mint authority
  authority: PublicKey;
  
  // Amount to mint (raw amount)
  amount: bigint;
  
  // Optional multisig signers
  multiSigners?: PublicKey[];
}

// Mint checked parameters
export interface MintToCheckedParams extends MintToParams {
  // Number of decimals
  decimals: number;
}

// Burn parameters
export interface BurnParams {
  // Token account to burn from
  account: PublicKey;
  
  // Token mint
  mint: PublicKey;
  
  // Account owner or delegate
  owner: PublicKey;
  
  // Amount to burn (raw amount)
  amount: bigint;
  
  // Optional multisig signers
  multiSigners?: PublicKey[];
}

// Burn checked parameters
export interface BurnCheckedParams extends BurnParams {
  // Number of decimals
  decimals: number;
}

// Approve parameters
export interface ApproveParams {
  // Token account
  account: PublicKey;
  
  // Delegate
  delegate: PublicKey;
  
  // Account owner
  owner: PublicKey;
  
  // Amount to approve (raw amount)
  amount: bigint;
  
  // Optional multisig signers
  multiSigners?: PublicKey[];
}

// Approve checked parameters
export interface ApproveCheckedParams extends ApproveParams {
  // Token mint
  mint: PublicKey;
  
  // Number of decimals
  decimals: number;
}