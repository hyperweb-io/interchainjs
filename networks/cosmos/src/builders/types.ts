import { SignMode } from '@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import {
  AuthInfo,
  Fee,
  SignerInfo,
  TxBody,
  TxRaw,
} from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { StdFee, SignDocResponse } from '@interchainjs/types';
import { BaseCosmosTxBuilderContext } from '../base/builder-context';
import { CosmosSignArgs, EncodedMessage, UniCosmosBaseSigner } from '../types/signer';

/**
 * Cosmos-specific builder context interface
 */
export interface ICosmosTxBuilderContext<TSigner extends UniCosmosBaseSigner<unknown>>
  extends BaseCosmosTxBuilderContext<TSigner> {}

/**
 * Parameters for building transaction body
 */
export interface TxBodyParams {
  messages: readonly { typeUrl: string; value: unknown }[];
  memo?: string;
  timeoutHeight?: bigint;
  extensionOptions?: unknown[];
  nonCriticalExtensionOptions?: unknown[];
}

/**
 * Parameters for building signer info
 */
export interface SignerInfoParams {
  publicKey: EncodedMessage;
  sequence: bigint;
  signMode: SignMode;
}

/**
 * Parameters for building auth info
 */
export interface AuthInfoParams {
  signerInfos: SignerInfo[];
  fee: Fee;
}

/**
 * Parameters for fee calculation
 */
export interface FeeParams {
  fee?: StdFee;
  txBody: TxBody;
  signerInfos: SignerInfo[];
  gasPrice?: unknown;
  multiplier?: number;
}

/**
 * Result of building transaction raw
 */
export interface TxRawResult {
  bodyBytes: Uint8Array;
  authInfoBytes: Uint8Array;
  fee: StdFee;
}

/**
 * Final transaction build result
 */
export interface CosmosTxBuildResult<TSignDoc> {
  tx: TxRaw;
  doc: TSignDoc;
}

/**
 * Cosmos transaction builder configuration
 */
export interface CosmosTxBuilderConfig {
  signMode: SignMode;
}

/**
 * Plugin option interfaces for type safety
 */

export interface TxBodyPluginOptions {
  // No additional options needed for now
}

export interface SignerInfoPluginOptions {
  // No additional options needed for now
}

export interface AuthInfoPluginOptions {
  // No additional options needed for now
}

export interface FeePluginOptions {
  // No additional options needed for now
}

export interface DocumentPluginOptions<TSignDoc> {
  signMode: SignMode;
  buildDocBytes: (doc: TSignDoc) => Promise<Uint8Array>;
  buildDoc: (args: CosmosSignArgs, txRaw: Partial<TxRaw>) => Promise<TSignDoc>;
}

export interface SignaturePluginOptions {
  // No additional options needed for now
}

export interface FinalResultPluginOptions<TSignDoc> {
  syncSignedDoc: (txRaw: TxRaw, signResp: SignDocResponse<TSignDoc>) => Promise<TxRaw>;
}

/**
 * Staging data keys for different build stages
 */
export const STAGING_KEYS = {
  TX_BODY: 'tx_body',
  SIGNER_INFO: 'signer_info',
  AUTH_INFO: 'auth_info',
  FEE: 'fee',
  TX_RAW: 'tx_raw',
  SIGN_DOC: 'sign_doc',
  SIGNATURE: 'signature',
  FINAL_RESULT: 'final_result',
} as const;

export type StagingKey = typeof STAGING_KEYS[keyof typeof STAGING_KEYS];