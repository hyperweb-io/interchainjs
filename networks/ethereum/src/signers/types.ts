import {
  IBroadcastResult,
  ICryptoBytes,
  IUniSigner,
  IAccount,
  IWallet
} from '@interchainjs/types';
import { EthereumSignatureFormatFunction } from '../config';
import { IEthereumQueryClient } from '../types/ethereum-client-interfaces';
import {
  EthereumTransaction,
  TransactionReceipt
} from '../types/responses';
import { TransactionParams } from '../types/requests';
import { EthereumSecp256k1Signature } from '../crypto';

/**
 * Ethereum signer configuration
 */
export type EthereumSignerConfig = EndpointOptions & TransactionOptions;

/**
 * Base configuration for Ethereum signers
 */
export interface EndpointOptions {
  /** Query client for chain interactions */
  queryClient: IEthereumQueryClient;
}



/**
 * Transaction configuration options
 */
export interface TransactionOptions {
  /** Default gas limit multiplier (default: 1.5) */
  gasMultiplier?: number;
  /** Default gas price in wei (for legacy transactions) */
  gasPrice?: bigint;
  /** Default max fee per gas in wei (for EIP-1559 transactions) */
  maxFeePerGas?: bigint;
  /** Default max priority fee per gas in wei (for EIP-1559 transactions) */
  maxPriorityFeePerGas?: bigint;
  /** Chain ID override (if not provided, will be queried) */
  chainId?: number;
  /** Signature configuration options */
  signature?: {
    /** Signature format configuration */
    format?: EthereumSignatureFormatFunction | string;
  };
}

/**
 * Ethereum account data
 */
export interface EthereumAccountData extends IAccount {
  /** Ethereum address */
  address: string;
  /** Public key bytes */
  pubkey: Uint8Array;
  /** Algorithm used (always 'secp256k1' for Ethereum) */
  algo: string;
}

/**
 * Arguments for signing Ethereum transactions
 */
export interface EthereumSignArgs {
  /** Transaction parameters */
  transaction: TransactionParams;
  /** Optional signer address (if not provided, uses first account) */
  signerAddress?: string;
  /** Additional options */
  options?: Partial<TransactionOptions>;
}

/**
 * Legacy transaction signing arguments (pre-EIP-1559)
 */
export interface LegacyTransactionSignArgs extends EthereumSignArgs {
  transaction: TransactionParams & {
    gasPrice: string;
    gas: string;
  };
}

/**
 * EIP-1559 transaction signing arguments
 */
export interface EIP1559TransactionSignArgs extends EthereumSignArgs {
  transaction: TransactionParams & {
    maxFeePerGas: string;
    maxPriorityFeePerGas: string;
    gas: string;
    type: '0x2';
  };
}

/**
 * Broadcast options for Ethereum transactions
 */
export interface EthereumBroadcastOptions {
  /** Whether to wait for transaction confirmation */
  waitForConfirmation?: boolean;
  /** Number of confirmations to wait for */
  confirmations?: number;
  /** Timeout in milliseconds */
  timeoutMs?: number;
  /** Polling interval in milliseconds */
  pollIntervalMs?: number;
}

/**
 * Broadcast response for Ethereum transactions
 */
export interface EthereumBroadcastResponse extends IBroadcastResult<TransactionReceipt> {
  /** Transaction hash */
  transactionHash: string;
  /** Raw response from the chain */
  rawResponse: unknown;
  /** Broadcast response (transaction hash) */
  broadcastResponse: string;
  /** Wait for the transaction to be mined */
  wait: (timeoutMs?: number, pollIntervalMs?: number) => Promise<TransactionReceipt>;
}

/**
 * Signed Ethereum transaction result
 */
export interface EthereumSignedTransaction {
  /** Transaction signature */
  signature: EthereumSecp256k1Signature;
  /** Serialized transaction bytes */
  txBytes: Uint8Array;
  /** Raw transaction hex string */
  rawTx: string;
  /** Transaction hash */
  txHash: string;
  /** Broadcast function */
  broadcast(options?: EthereumBroadcastOptions): Promise<EthereumBroadcastResponse>;
}

/**
 * Ethereum signer interface
 * Extends IUniSigner with Ethereum-specific functionality
 */
export interface IEthereumSigner extends IUniSigner<
  TransactionReceipt,
  EthereumAccountData,
  EthereumSignArgs,
  EthereumBroadcastOptions,
  EthereumBroadcastResponse
> {
  /** Get Ethereum addresses */
  getAddresses(): Promise<string[]>;

  /** Network/query helpers */
  getChainId(): Promise<number>;
  getNonce(address: string): Promise<number>;

  /** Sign a personal message */
  signPersonalMessage(message: string, address?: string): Promise<string>;

  /** Verify a personal message signature */
  verifyPersonalMessage(message: string, signature: string, address: string): Promise<boolean>;
}

/**
 * Legacy Ethereum signer interface (pre-EIP-1559)
 */
export interface ILegacyEthereumSigner extends IEthereumSigner {
  /** Sign a legacy transaction */
  sign(args: LegacyTransactionSignArgs): Promise<EthereumSignedTransaction>;
}

/**
 * EIP-1559 Ethereum signer interface
 */
export interface IEIP1559EthereumSigner extends IEthereumSigner {
  /** Sign an EIP-1559 transaction */
  sign(args: EIP1559TransactionSignArgs): Promise<EthereumSignedTransaction>;
}

/**
 * Type guards for offline signers
 */
export function isIWallet(obj: any): obj is IWallet {
  return obj && typeof obj.getAccounts === 'function' && typeof obj.signByIndex === 'function';
}

/**
 * Transaction type enumeration
 */
export enum EthereumTransactionType {
  LEGACY = '0x0',
  EIP2930 = '0x1',
  EIP1559 = '0x2'
}

/**
 * Gas estimation options
 */
export interface GasEstimationOptions {
  /** Gas limit multiplier */
  multiplier?: number;
  /** Minimum gas limit */
  minGasLimit?: bigint;
  /** Maximum gas limit */
  maxGasLimit?: bigint;
}
