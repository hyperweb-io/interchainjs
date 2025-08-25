import { HashFunction, IAccount, IBroadcastResult, ICryptoBytes, IUniSigner, Price, StdFee, StdSignDoc } from '@interchainjs/types';
import { SignatureFormatFunction } from '@interchainjs/auth';
import { SignDoc, SignerInfo, TxBody, TxRaw } from '@interchainjs/cosmos-types';
import { BroadcastTxAsyncResponse, BroadcastTxCommitResponse, BroadcastTxSyncResponse, EncodedBroadcastTxParams, ICosmosQueryClient } from '../types';
import { AminoConverter, Encoder } from '../types/signing-client';
import { Any, SignMode, SimulationResponse, TxResponse } from '@interchainjs/cosmos-types';
import { StdSignature } from '@interchainjs/amino';

export type CosmosSignerConfig = EndpointOptions & DocOptions;

/**
 * Base configuration for Cosmos signers
 */
export interface EndpointOptions {
  /** Query client for chain interactions */
  queryClient: ICosmosQueryClient;
}

/**
 * Account data returned by offline signers
 */
export interface AccountData extends IAccount {
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
  /** Signature object with public key and signature */
  signature: StdSignature;
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
  /** Signature object with public key and signature */
  signature: StdSignature;
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
export interface CosmosBroadcastResponse extends IBroadcastResult<TxResponse> {
  /** Transaction hash */
  transactionHash: string;
  /** Raw response from the chain */
  rawResponse: unknown;

  broadcastResponse: BroadcastTxSyncResponse | BroadcastTxAsyncResponse | BroadcastTxCommitResponse;

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
  options?: DocOptions;
}

// Cosmos signer interface
export interface ICosmosSigner extends IUniSigner<
  TxResponse,
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

  // Offline signer detection methods
  isIWallet(): boolean;
  isOfflineSigner(): boolean;
  isOfflineAminoSigner(): boolean;
  isOfflineDirectSigner(): boolean;

  // Offline signing methods
  signDirect(signerAddress: string, signDoc: SignDoc): Promise<DirectSignResponse>;
  signAmino(signerAddress: string, signDoc: StdSignDoc): Promise<AminoSignResponse>;
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

export type DocOptions = FeeOptions & SignOptions & TxOptions;

export interface FeeOptions {
  multiplier?: number;
  gasPrice?: Price | string | 'average' | 'high' | 'low';
}



export interface SignOptions {
  chainId?: string;
  accountNumber?: bigint;
  sequence?: bigint;
  signerAddress?: string;
  addressPrefix?: string;
  message?: {
    hash: string | HashFunction;
  };
  signature?: {
    /** Signature format configuration */
    format?: SignatureFormatFunction | string;
  };
    /** Public key encoding function */
  encodePublicKey?: (publicKey: Uint8Array) => EncodedMessage;
}

export interface TimeoutHeightOption {
  type: 'relative' | 'absolute';
  value: bigint;
}

export interface TimeoutTimestampOption {
  type: 'absolute';
  value: Date;
}

export type TxOptions = {
  /**
   * timeout is the block height after which this transaction will not
   * be processed by the chain.
   * Note: this value only identical to the `timeoutHeight` field in the `TxBody` structure
   * when type is `absolute`.
   * - type `relative`: latestBlockHeight + this.value = TxBody.timeoutHeight
   * - type `absolute`: this.value = TxBody.timeoutHeight
   */
  timeoutHeight?: TimeoutHeightOption;
  /**
   * timeoutTimestamp is the time after which this transaction will not
   * be processed by the chain; for use with unordered transactions.
   */
  timeoutTimestamp?: TimeoutTimestampOption;
  /**
   * unordered is set to true when the transaction is not ordered.
   * Note: this requires the timeoutTimestamp to be set
   * and the sequence to be set to 0
   */
  unordered?: boolean;
  /**
   * extension_options are arbitrary options that can be added by chains
   * when the default options are not sufficient. If any of these are present
   * and can't be handled, the transaction will be rejected
   */
  extensionOptions?: Any[];
  /**
   * extension_options are arbitrary options that can be added by chains
   * when the default options are not sufficient. If any of these are present
   * and can't be handled, they will be ignored
   */
  nonCriticalExtensionOptions?: Any[];
};

// Document types
export type CosmosDirectDoc = SignDoc;
export type CosmosAminoDoc = StdSignDoc;
export type CosmosTx = TxRaw;