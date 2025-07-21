import { ICryptoBytes, IUniSigner, StdFee, StdSignDoc } from '@interchainjs/types';
import { SignDoc, SignerInfo, TxBody, TxRaw } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BroadcastTxAsyncResponse, BroadcastTxCommitResponse, BroadcastTxSyncResponse, EncodedBroadcastTxParams, ICosmosQueryClient } from '../types';
import { AminoConverter, Encoder } from '../types/signing-client';
import { Any, SignMode, SimulationResponse, TxResponse } from '@interchainjs/cosmos-types';

/**
 * Base configuration for Cosmos signers
 */
export interface CosmosSignerConfig {
  /** Chain ID for the network */
  chainId: string;
  /** Query client for chain interactions */
  queryClient: ICosmosQueryClient;
  /** Address prefix (e.g., 'cosmos', 'osmo') */
  addressPrefix?: string;
  /** Gas price for fee calculation */
  gasPrice?: string | number;
  /** Gas multiplier for fee calculation */
  gasMultiplier?: number;
}

/**
 * Account data returned by offline signers
 */
export interface AccountData {
  /** Account address */
  readonly address: string;
  /** Algorithm used for signing */
  readonly algo: string;
  /** Public key bytes */
  readonly pubkey: Uint8Array;
}

/**
 * Response from direct signing
 */
export interface DirectSignResponse {
  /**
   * The sign doc that was signed.
   * This may be different from the input signDoc when the signer modifies it as part of the signing process.
   */
  signed: SignDoc;
  /** Signature bytes */
  signature: Uint8Array;
}

/**
 * Response from amino signing
 */
export interface AminoSignResponse {
  /**
   * The sign doc that was signed.
   * This may be different from the input signDoc when the signer modifies it as part of the signing process.
   */
  signed: StdSignDoc;
  /** Signature bytes */
  signature: Uint8Array;
}

/**
 * Offline signer interface for signing without exposing private keys
 */
export interface OfflineSigner {
  /**
   * Get all accounts this signer holds
   */
  getAccounts(): Promise<readonly AccountData[]>;
}

/**
 * Offline signer that can sign direct (protobuf) messages
 */
export interface OfflineDirectSigner extends OfflineSigner {
  /**
   * Sign a transaction in direct mode
   */
  signDirect(signerAddress: string, signDoc: SignDoc): Promise<DirectSignResponse>;
}

/**
 * Offline signer that can sign amino (JSON) messages
 */
export interface OfflineAminoSigner extends OfflineSigner {
  /**
   * Sign a transaction in amino mode
   */
  signAmino(signerAddress: string, signDoc: StdSignDoc): Promise<AminoSignResponse>;
}

/**
 * Type guard to check if an object is an OfflineDirectSigner
 */
export function isOfflineDirectSigner(obj: any): obj is OfflineDirectSigner {
  return obj && typeof obj.signDirect === 'function' && typeof obj.getAccounts === 'function';
}

/**
 * Type guard to check if an object is an OfflineAminoSigner
 */
export function isOfflineAminoSigner(obj: any): obj is OfflineAminoSigner {
  return obj && typeof obj.signAmino === 'function' && typeof obj.getAccounts === 'function';
}

/**
 * Broadcast options for transactions
 */
export interface CosmosBroadcastOptions {
  /** Broadcast mode: sync, async, or commit */
  mode?: 'sync' | 'async' | 'commit';
  /**
   * timeout in milliseconds for checking on chain for tx result.(in ms)
   */
  timeoutMs?: number;
  /**
   * polling interval in milliseconds for checking on chain for tx result.(in ms)
   */
  pollIntervalMs?: number;
}

/**
 * Broadcast response
 */
export interface CosmosBroadcastResponse {
  /** Transaction hash */
  transactionHash: string;
  /** Raw response from the chain */
  rawResponse: unknown;

  txResponse: BroadcastTxSyncResponse | BroadcastTxAsyncResponse | BroadcastTxCommitResponse;

  /** Wait for the transaction to be delivered in a block */
  wait: (timeoutMs?: number, pollIntervalMs?: number) => Promise<TxResponse>;
}

/**
 * Signed transaction result
 */
export interface CosmosSignedTransaction {
  /** Transaction signature */
  signature: ICryptoBytes;
  /** Serialized transaction bytes */
  txBytes: Uint8Array;
  /** Broadcast function */
  broadcast(options?: CosmosBroadcastOptions): Promise<CosmosBroadcastResponse>;
}

// Cosmos signing arguments
export interface CosmosSignArgs {
  messages: readonly CosmosMessage[];
  fee?: StdFee;
  memo?: string;
  options?: CosmosSignOptions;
}

// Cosmos signer interface
export interface ICosmosSigner extends IUniSigner<
  AccountData, // account type
  CosmosSignArgs, // sign args
  CosmosBroadcastOptions, // broadcast options
  CosmosBroadcastResponse // broadcast response
> {
  getAddresses(): Promise<string[]>;
  getChainId(): Promise<string>;
  getAccountNumber(address: string): Promise<bigint>;
  getSequence(address: string): Promise<bigint>;
  addEncoders(encoders: Encoder[]): void;
  getEncoder(typeUrl: string): Encoder;
  addConverters?(converters: AminoConverter[]): void;
  getConverterFromTypeUrl?(typeUrl: string): AminoConverter;
  simulateByTxBody(txBody: TxBody, signerInfos: SignerInfo[]): Promise<SimulationResponse>;
}

// Cosmos-specific message types
export interface CosmosMessage<T = any> {
  typeUrl: string;
  value: T;
}

export interface EncodedMessage {
  typeUrl: string;
  value: Uint8Array;
}

export interface AminoMessage {
  type: string;
  value: any;
}


// Cosmos signing options
export interface CosmosSignOptions {
  chainId?: string;
  accountNumber?: bigint;
  sequence?: bigint;
  signMode?: SignMode;
  multiplier?: number;
  gasPrice?: string | number;
  timeoutHeight?: {
    type: 'relative' | 'absolute';
    value: bigint;
  };
  timeoutTimestamp?: {
    type: 'absolute';
    value: Date;
  };
  unordered?: boolean;
  sign?: {
    hash?: 'sha256' | 'sha512' | 'none' | ((data: Uint8Array) => Uint8Array);
  };
  extensionOptions?: Any[];
  nonCriticalExtensionOptions?: Any[];
}

// Document types
export type CosmosDirectDoc = SignDoc;
export type CosmosAminoDoc = StdSignDoc;
export type CosmosTx = TxRaw;