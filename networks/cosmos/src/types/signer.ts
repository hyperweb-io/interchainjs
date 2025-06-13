import { BaseAccount } from '@interchainjs/cosmos-types/cosmos/auth/v1beta1/auth';
import { SignMode } from '@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import { SimulateResponse } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/service';
import {
  SignDoc,
  SignerInfo,
  TxBody,
  TxRaw,
} from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { Any } from '@interchainjs/cosmos-types/google/protobuf/any';
import {
  AccountData,
  BroadcastOptions,
  CreateDocResponse,
  HttpEndpoint,
  IAccount,
  IKey,
  Price,
  SignerConfig,
  StdFee,
  StdSignDoc,
  UniSigner,
  IApiClient,
  Auth,
  DeliverTxResponse
} from '@interchainjs/types';
import { Event } from '@interchainjs/types';
import { AccountBase } from '@interchainjs/types/account';
import { Key } from '@interchainjs/utils';
import { ripemd160 } from '@noble/hashes/ripemd160';
import { sha256 } from '@noble/hashes/sha256';
import { AminoSignResponse, DirectSignResponse } from './wallet';

/**
 * Signer options for cosmos chains
 */
export interface SignerOptions extends Partial<SignerConfig> {
  /**
   * parse account from encoded message
   */
  parseAccount?: (encodedAccount: EncodedMessage) => BaseAccount;

  /**
   * the constructor for creating account
   */
  createAccount?: new (prefix: string,
    auth: Auth,
    isPublicKeyCompressed: boolean) => IAccount;

  /**
   * encode public key to encoded message
   */
  encodePublicKey?: (key: IKey) => EncodedMessage;

  /**
   * prefix for bech32 address
   */
  prefix?: string;
}

/** Direct/Proto message */
export interface Message<T = any> {
  typeUrl: string;
  value: T;
}

/**
 * Encoded message
 */
export interface EncodedMessage {
  typeUrl: string;
  value: Uint8Array;
}

/** Amino message */
export interface AminoMessage {
  type: string;
  value: any;
}

export interface Encoder {
  typeUrl: string;
  fromPartial: (data: any) => any;
  encode: (data: any) => Uint8Array;
}

export interface Decoder {
  typeUrl: string;
  fromPartial: (data: any) => any;
  decode: (data: Uint8Array) => any;
}

export interface AminoConverter {
  typeUrl: string;
  aminoType: string;
  fromAmino: (data: any) => any;
  toAmino: (data: any) => any;
}


export interface CheckTxResponse {
  code: number;
  data: string;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gas_wanted: string;
  gas_used: string;
  events: Event[];
  codespace: string;
  sender: string;
  priority: string;
  /**
   * mempool_error is set by CometBFT.
   * ABCI applictions creating a ResponseCheckTX should not set mempool_error.
   */
  mempool_error: string;
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
  signMode?: SignMode;
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

/**
 * Query client ops for cosmos chains
 */
export interface QueryClient extends IApiClient<Uint8Array, DeliverTxResponse, BroadcastOptions> {
  readonly endpoint: string | HttpEndpoint;
  getChainId: () => Promise<string>;
  getAccountNumber: (address: string) => Promise<bigint>;
  getSequence: (address: string) => Promise<bigint>;
  getLatestBlockHeight: () => Promise<bigint>;
  getPrefix: () => Promise<string>;
  simulate: (
    txBody: TxBody,
    signerInfos: SignerInfo[]
  ) => Promise<SimulateResponse>;
}

/**
 * Signer args for cosmos chains
 */
export type CosmosSignArgs<Option = DocOptions> = {
  messages: readonly Message[];
  fee?: StdFee;
  memo?: string;
  options?: Option;
};

/**
 * Base signer type for cosmos chains
 * @template CosmosSignArgs - Signer args for cosmos chains
 * @template CosmosTx - Transaction type for cosmos chains
 * @template SignDoc - Sign document type for cosmos chains
 * @template addresstype - string address for cosmos chains
 * @template DeliverTxResponse - Broadcast response for cosmos chains
 */
export type UniCosmosBaseSigner<SignDoc> = UniSigner<
  CosmosSignArgs,
  CosmosTx,
  SignDoc,
  string,
  DeliverTxResponse
>;

/**
 * Direct signer for cosmos chains
 */
export type CosmosDirectSigner = UniSigner<
  CosmosSignArgs,
  CosmosTx,
  CosmosDirectDoc,
  string,
  DeliverTxResponse
>;
/**
 * Amino signer for cosmos chains
 */
export type CosmosAminoSigner = UniSigner<
  CosmosSignArgs,
  CosmosTx,
  CosmosAminoDoc,
  string,
  DeliverTxResponse
>;

/**
 * Create doc response for cosmos chains
 */
export type CosmosCreateDocResponse<SignDoc> = CreateDocResponse<
  CosmosTx,
  SignDoc
>;

/**
 * Sign doc response for cosmos direct chains
 */
export type CosmosDirectDoc = SignDoc;
/**
 * Sign doc response for cosmos amino chains
 */
export type CosmosAminoDoc = StdSignDoc;

/**
 * Sign doc response for cosmos chains
 */
export type CosmosTx = TxRaw;

export type Bech32Address = string;

/**
 * Base signer for cosmos chains
 */
export interface ICosmosAccount extends IAccount { }

/**
 * Check if instance is cosmos account
 */
export function isICosmosAccount(
  instance: AccountData | ICosmosAccount | IAccount
): instance is ICosmosAccount {
  return (instance as ICosmosAccount).toAccountData !== undefined;
}

/**
 * Cosmos account implementation
 */
export class CosmosAccount extends AccountBase {
  getAddressByPubKey() {
    return Key.from(ripemd160(sha256(this.publicKey.value))).toBech32(
      this.prefix
    );
  }
}

/**
 * cosmos wallet interface
 */
export interface ICosmosWallet {
  getAccounts: () => Promise<readonly AccountData[]>;
}

