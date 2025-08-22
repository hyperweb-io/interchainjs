import {
  CosmosSignerConfig,
  DocOptions,
  SignOptions as CosmosSignOptions,
  EncodedMessage
} from '@interchainjs/cosmos';
import { SignatureFormatFunction } from '@interchainjs/auth';



/**
 * Injective-specific signing options
 * Extends Cosmos SignOptions with Injective signature format configuration
 */
export interface InjectiveSignOptions extends CosmosSignOptions {
  signature?: {
    /** Signature format configuration for Injective */
    format?: SignatureFormatFunction | string;
  };
}

/**
 * Injective document options
 * Extends Cosmos DocOptions with Injective-specific signature options
 */
export interface InjectiveDocOptions extends Omit<DocOptions, 'signature'> {
  /** Injective-specific signing options */
  signature?: {
    format?: SignatureFormatFunction | string;
  };
  /** Chain ID for Injective */
  chainId?: string;
  /** Account number */
  accountNumber?: bigint;
  /** Sequence number */
  sequence?: bigint;
  /** Signer address */
  signerAddress?: string;
  /** Address prefix (default: 'inj') */
  addressPrefix?: string;
  /** Message hashing configuration */
  message?: {
    hash: string | ((data: Uint8Array) => Uint8Array);
  };
  /** Public key encoding function */
  encodePublicKey?: (publicKey: Uint8Array) => EncodedMessage;
}

/**
 * Injective signer configuration
 * Extends Cosmos signer configuration with Injective-specific options
 */
export interface InjectiveSignerConfig extends Omit<CosmosSignerConfig, keyof InjectiveDocOptions>, InjectiveDocOptions {
  /** Query client for chain interactions */
  queryClient: any; // Will be typed properly when Injective query client is defined
}

/**
 * Re-export commonly used types from Cosmos for convenience
 */
export {
  ICosmosSigner,
  CosmosSignArgs,
  CosmosMessage,
  EncodedMessage,
  CosmosSignedTransaction,
  CosmosBroadcastOptions,
  CosmosBroadcastResponse,
  OfflineSigner,
  AccountData,
  DirectSignResponse,
  AminoSignResponse
} from '@interchainjs/cosmos';

/**
 * Type alias for Injective signer interface
 * Uses the same interface as Cosmos since Injective is Cosmos-compatible
 */
export type IInjectiveSigner = import('@interchainjs/cosmos').ICosmosSigner;

/**
 * Injective sign arguments
 * Uses the same structure as Cosmos but with Injective-specific options
 */
export interface InjectiveSignArgs {
  /** Messages to sign */
  messages: readonly import('@interchainjs/cosmos').CosmosMessage[];
  /** Transaction fee */
  fee?: import('@interchainjs/types').StdFee;
  /** Transaction memo */
  memo?: string;
  /** Injective-specific signing options */
  options?: InjectiveDocOptions;
}


