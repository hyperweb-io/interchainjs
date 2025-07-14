import { ICryptoBytes, IAccount, StdSignDoc } from '@interchainjs/types';
import { ICosmosSigner, CosmosSignArgs } from '../workflows/types';
import { CosmosQueryClient } from '../query/cosmos-query-client';
import { SignDoc } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';

/**
 * Base configuration for Cosmos signers
 */
export interface CosmosSignerConfig {
  /** Chain ID for the network */
  chainId: string;
  /** Query client for chain interactions */
  queryClient: CosmosQueryClient;
  /** Address prefix (e.g., 'cosmos', 'osmo') */
  addressPrefix?: string;
  /** Gas price for fee calculation */
  gasPrice?: string | number;
  /** Gas multiplier for fee calculation */
  gasMultiplier?: number;
}

/**
 * Authentication interface for private key-based signing
 */
export interface Auth {
  /**
   * The algorithm of the authentication method.
   */
  readonly algo: string;
  /**
   * The HD path of the authentication method.
   */
  readonly hdPath: string;
  /**
   * The private key in hex format
   */
  readonly privateKey: string;
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
 * Type guard to check if an object is an Auth
 */
export function isAuth(obj: any): obj is Auth {
  return obj && typeof obj.algo === 'string' && typeof obj.privateKey === 'string';
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
 * Wallet interface for key management
 */
export interface CosmosWallet {
  /** Get the account information */
  getAccount(): Promise<AccountData>;

  /** Get the public key in encoded format */
  getPublicKey(): Promise<{ typeUrl: string; value: Uint8Array }>;
}

/**
 * Broadcast options for transactions
 */
export interface CosmosBroadcastOptions {
  /** Broadcast mode: sync, async, or commit */
  mode?: 'sync' | 'async' | 'commit';
  /** Whether to check transaction result */
  checkTx?: boolean;
  /** Timeout for transaction confirmation (in ms) */
  timeout?: number;
}

/**
 * Broadcast response
 */
export interface CosmosBroadcastResponse {
  /** Transaction hash */
  transactionHash: string;
  /** Block height where transaction was included */
  height?: number;
  /** Gas used by the transaction */
  gasUsed?: bigint;
  /** Gas wanted by the transaction */
  gasWanted?: bigint;
  /** Transaction result code (0 = success) */
  code?: number;
  /** Raw response from the chain */
  rawResponse: unknown;
  /** Transaction events */
  events?: Array<{
    type: string;
    attributes: Array<{ key: string; value: string }>;
  }>;
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