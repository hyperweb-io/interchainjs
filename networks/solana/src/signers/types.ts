import { IUniSigner, IAccount, IBroadcastResult, ICryptoBytes, ISigned } from '@interchainjs/types';
import { PublicKey } from '../types';

/**
 * Solana account data structure
 */
export interface SolanaAccount extends IAccount {
  address: string;
  publicKey: PublicKey;
  lamports?: number;
  algo: string;
}

/**
 * Solana transaction instruction
 */
export interface SolanaInstruction {
  keys: Array<{
    pubkey: PublicKey;
    isSigner: boolean;
    isWritable: boolean;
  }>;
  programId: PublicKey;
  data: Uint8Array;
}

/**
 * Solana transaction message
 */
export interface SolanaTransactionMessage {
  accountKeys: PublicKey[];
  recentBlockhash: string;
  instructions: SolanaInstruction[];
}

/**
 * Arguments for signing a Solana transaction
 */
export interface SolanaSignArgs {
  instructions: SolanaInstruction[];
  feePayer?: PublicKey;
  recentBlockhash?: string;
  memo?: string;
  options?: SolanaSignOptions;
}

/**
 * Options for Solana signing
 */
export interface SolanaSignOptions {
  signerAddress?: string;
  skipPreflight?: boolean;
  preflightCommitment?: string;
  maxRetries?: number;
}

/**
 * Options for broadcasting Solana transactions
 */
export interface SolanaBroadcastOptions {
  skipPreflight?: boolean;
  preflightCommitment?: string;
  maxRetries?: number;
  commitment?: string;
}

/**
 * Response from broadcasting a Solana transaction
 */
export interface SolanaBroadcastResponse extends IBroadcastResult<SolanaTransactionResponse> {
  signature: string;
  slot?: number;
  confirmations?: number;
  err?: any;
}

/**
 * Solana transaction response
 */
export interface SolanaTransactionResponse {
  signature: string;
  slot: number;
  confirmations: number | null;
  err: any;
  memo?: string;
}

/**
 * Signed Solana transaction
 */
export interface SolanaSignedTransaction extends ISigned<SolanaBroadcastOptions, SolanaBroadcastResponse> {
  signature: ICryptoBytes;
  txBytes: Uint8Array;
  broadcast: (options?: SolanaBroadcastOptions) => Promise<SolanaBroadcastResponse>;
}

/**
 * Solana signer interface extending IUniSigner
 */
export interface ISolanaSigner extends IUniSigner<
  SolanaTransactionResponse,
  SolanaAccount,
  SolanaSignArgs,
  SolanaBroadcastOptions,
  SolanaBroadcastResponse
> {
  /**
   * Get the public key for a specific account index
   */
  getPublicKey(index?: number): Promise<PublicKey>;

  /**
   * Get all addresses managed by this signer
   */
  getAddresses(): Promise<string[]>;

  /**
   * Sign a transaction and return the signed transaction
   */
  sign(args: SolanaSignArgs): Promise<SolanaSignedTransaction>;

  /**
   * Broadcast a signed transaction
   */
  broadcast(signed: SolanaSignedTransaction, options?: SolanaBroadcastOptions): Promise<SolanaBroadcastResponse>;

  /**
   * Sign and broadcast a transaction in one step
   */
  signAndBroadcast(args: SolanaSignArgs, options?: SolanaBroadcastOptions): Promise<SolanaBroadcastResponse>;
}

/**
 * Configuration for Solana signers
 */
export interface SolanaSignerConfig {
  /**
   * RPC endpoint URL
   */
  rpcEndpoint: string;

  /**
   * WebSocket endpoint URL (optional)
   */
  wsEndpoint?: string;

  /**
   * Default commitment level
   */
  commitment?: string;

  /**
   * Skip preflight checks by default
   */
  skipPreflight?: boolean;

  /**
   * Maximum number of retries for transactions
   */
  maxRetries?: number;
}
