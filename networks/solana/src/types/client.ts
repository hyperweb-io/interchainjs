/**
 * Client-specific types and interfaces for Solana implementation
 */

import { PublicKey, TransactionInstruction } from './common';
import { CommitmentLevel, SolanaCapabilities, SolanaMethod } from './protocol';

/**
 * Base interfaces from InterchainJS
 */
export interface IProtocolAdapter<TVersion, TMethod, TCapabilities> {
  getVersion(): TVersion;
  getSupportedMethods(): Set<TMethod>;
  getCapabilities(): TCapabilities;
  encodeRequest<TParams>(method: TMethod, params: TParams): unknown;
  decodeResponse<TResponse>(method: TMethod, response: unknown): TResponse;
}

export interface IRpcClient {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isConnected(): boolean;
  call<TRequest, TResponse>(method: string, params?: TRequest): Promise<TResponse>;
}

export interface IQueryClient<TBlock, TTransaction, TAccount> {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isConnected(): boolean;
  getLatestBlock(): Promise<TBlock>;
  getBalance(address: string): Promise<number>;
  getAccount(address: string): Promise<TAccount>;
}

export interface IEventClient {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isConnected(): boolean;
  subscribe<TEvent>(event: string, callback: (event: TEvent) => void): Promise<string>;
  unsubscribe(subscriptionId: string): Promise<void>;
}

export interface IUniSigner<TAccount, TSignArgs, TBroadcastOpts, TBroadcastResponse> {
  getAccount(): Promise<TAccount>;
  signAndBroadcast(args: TSignArgs, opts?: TBroadcastOpts): Promise<TBroadcastResponse>;
}

export interface IWorkflowBuilder<TSigner, TTransaction, TContext> {
  build(): Promise<TTransaction>;
}

export interface IWorkflowPlugin<TContext> {
  readonly name: string;
  readonly dependencies: string[];
  execute(context: TContext): Promise<void>;
  setContext(context: TContext): void;
}

export interface IClientFactory<TQueryClient, TEventClient, TFullClient> {
  createQueryClient(config: any): Promise<TQueryClient>;
  createEventClient(config: any): Promise<TEventClient>;
  createFullClient(config: any): Promise<TFullClient>;
}

/**
 * Solana-specific client interfaces
 */
export interface ISolanaProtocolAdapter extends IProtocolAdapter<string, SolanaMethod, SolanaCapabilities> {
  // Solana-specific encoding methods
  encodeTransaction(tx: any): any;
  decodeBlock(block: unknown): any;
  encodeInstruction(instruction: TransactionInstruction): unknown;
  decodeAccountInfo(data: unknown): any;
}

export interface ISolanaRpcClient extends IRpcClient {
  call<TRequest, TResponse>(method: SolanaMethod | string, params?: TRequest): Promise<TResponse>;
  subscribe<TEvent>(method: string, params?: unknown): AsyncIterable<TEvent>;
}

export interface ISolanaSigner extends IUniSigner<SolanaAccount, SolanaSignArgs, SolanaBroadcastOpts, SolanaBroadcastResponse> {
  readonly address: string;
  readonly publicKey: PublicKey;
}

/**
 * Solana client configuration
 */
export interface ISolanaClientConfig {
  endpoint: string;
  commitment?: CommitmentLevel;
  timeout?: number;
  retries?: number;
  wsEndpoint?: string;
}

export interface SolanaRpcConfig {
  endpoint: string;
  timeout?: number;
  retries?: number;
  headers?: Record<string, string>;
}

export interface SolanaWebSocketConfig {
  endpoint: string;
  timeout?: number;
  reconnectInterval?: number;
  maxReconnectAttempts?: number;
}

/**
 * Solana signing types
 */
export interface SolanaAccount {
  address: string;
  publicKey: PublicKey;
}

export interface SolanaSignArgs {
  messages: TransactionInstruction[];
  fee?: 'auto' | number;
  memo?: string;
  feePayer?: PublicKey;
  recentBlockhash?: string;
}

export interface SolanaBroadcastOpts {
  skipPreflight?: boolean;
  preflightCommitment?: CommitmentLevel;
  maxRetries?: number;
}

export interface SolanaBroadcastResponse {
  transactionHash: string;
  rawLog?: string;
  gasUsed?: number;
  events?: any[];
  serializedTransaction?: string;
}

/**
 * Workflow types
 */
export interface SolanaWorkflowOptions {
  enableComputeBudget?: boolean;
  computeUnitLimit?: number;
  computeUnitPrice?: number;
  priorityFee?: number;
}

export interface SolanaWorkflowContext {
  signer: ISolanaSigner;
  signArgs: SolanaSignArgs;
  options: SolanaWorkflowOptions;

  // State management
  getValidatedInputs(): any;
  setEncodedMessage(message: Uint8Array): void;
  getEncodedMessage(): Uint8Array;
  setTransaction(transaction: any): void;
  getTransaction(): any;
}

/**
 * Connection types
 */
export interface Connection {
  rpcEndpoint: string;
}

/**
 * Token account types
 */
export interface SolanaTokenAccount {
  pubkey: PublicKey;
  account: {
    data: {
      parsed: {
        info: {
          mint: string;
          owner: string;
          tokenAmount: {
            amount: string;
            decimals: number;
            uiAmount: number;
            uiAmountString: string;
          };
        };
        type: string;
      };
      program: string;
      space: number;
    };
    executable: boolean;
    lamports: number;
    owner: PublicKey;
    rentEpoch: number;
  };
}

/**
 * Transfer parameters
 */
export interface TransferParams {
  recipient: PublicKey;
  amount: number;
  memo?: string;
}

/**
 * Wallet types
 */
export interface ISolanaWallet {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isConnected(): boolean;
  getPublicKey(): Promise<PublicKey>;
  signTransaction(transaction: any): Promise<any>;
  signAllTransactions(transactions: any[]): Promise<any[]>;
  signMessage(message: Uint8Array): Promise<Uint8Array>;
}

export interface PhantomWallet extends ISolanaWallet {
  isPhantom: boolean;
  publicKey: PublicKey | null;
}

/**
 * Factory types
 */
export interface SolanaQueryClient extends IQueryClient<any, any, any> {
  // Solana-specific query methods
  getTokenAccountsByOwner(owner: string, filter: any): Promise<SolanaTokenAccount[]>;
  getTokenSupply(mint: string): Promise<any>;
  getMinimumBalanceForRentExemption(dataLength: number): Promise<number>;
  waitForTransaction(signature: string, commitment?: CommitmentLevel): Promise<any>;
}

export interface SolanaEventClient extends IEventClient {
  // Solana-specific event methods
  subscribeToAccount(publicKey: PublicKey, callback: (accountInfo: any) => void): Promise<string>;
  subscribeToProgram(programId: PublicKey, callback: (programInfo: any) => void): Promise<string>;
  subscribeToLogs(filter: any, callback: (logs: any) => void): Promise<string>;
}

export interface SolanaFullClient {
  query: SolanaQueryClient;
  events: SolanaEventClient;
}

/**
 * Auth strategy types
 */
export interface SolanaAuthStrategy {
  generateAddress(publicKey: PublicKey): string;
  validateAddress(address: string): boolean;
  derivePublicKey(privateKey: Uint8Array): PublicKey;
}

/**
 * Configuration types
 */
export interface SolanaNetworkConfig {
  name: string;
  chainId: string;
  rpcEndpoint: string;
  wsEndpoint?: string;
  explorerUrl?: string;
  faucetUrl?: string;
}

export interface SolanaEnvironmentConfig {
  networks: Record<string, SolanaNetworkConfig>;
  defaultNetwork: string;
}

/**
 * Validation types
 */
export interface SolanaConfigValidation {
  validateNetworkConfig(config: SolanaNetworkConfig): boolean;
  validateClientConfig(config: ISolanaClientConfig): boolean;
  validateSignArgs(args: SolanaSignArgs): boolean;
}
