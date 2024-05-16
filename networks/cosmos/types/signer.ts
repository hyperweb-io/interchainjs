import {
  BroadcastOptions,
  HttpEndpoint,
  IKey,
  Price,
  SignerConfig,
} from "@interchainjs/types";
import { Event } from "@interchainjs/types";

import { Fee, SignMode } from "../types";

export interface SignerOptions<
  TxBody = unknown,
  SignerInfo = unknown,
  AuthInfo = unknown,
  Acct = unknown,
> {
  base: SignerConfig;
  constructTxBody: CreateTxBody<TxBody>;
  constructSignerInfo: CreateSignerInfo<SignerInfo>;
  constructAuthInfo: CreateAuthInfo<AuthInfo, SignerInfo>;
  parseQueryClient: (endpoint: string | HttpEndpoint) => QueryClient<TxBody, SignerInfo>;
  parseAccount: (encodedAccount: EncodedMessage) => Acct;
  encodePublicKey?: (key: IKey) => EncodedMessage;
  prefix?: string;
}

/** Direct/Proto message */
export interface Message<T = unknown> {
  typeUrl: string;
  value: T;
}

export interface MessageEncoder<T = unknown> {
  value: T;
  encode: () => Uint8Array;
}

export type CreateMesageEncoder<Args, T = unknown> = (
  arg: Args
) => MessageEncoder<T>;

export type CreateTxBody<TxBody = unknown> = CreateMesageEncoder<
  {
    messages: Message[];
    getEncoder: (typeUrl: string) => Encoder;
    memo?: string;
    options?: TxOptions;
  },
  TxBody
>;

export type CreateSignerInfo<SignerInfo = unknown> = CreateMesageEncoder<
  {
    publicKey: EncodedMessage;
    sequence: bigint;
    signMode: SignMode;
  },
  SignerInfo
>;

export type CreateAuthInfo<
  AuthInfo = unknown,
  SignerInfo = unknown,
> = CreateMesageEncoder<
  {
    signerInfos: SignerInfo[];
    fee: Fee;
  },
  AuthInfo
>;

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

export type BroadcastMode =
  | "broadcast_tx_async"
  | "broadcast_tx_sync"
  | "broadcast_tx_commit";

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

export interface DeliverTxResponse {
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
}

export interface BroadcastResponse {
  hash: string;
  add_tx?: {
    code?: number;
    data?: string;
    log?: string;
    codespace?: string;
  };
  check_tx?: CheckTxResponse;
  deliver_tx?: DeliverTxResponse & { height: string };
}

export type DocOptions = FeeOptions & SignOptions & TxOptions;

export interface FeeOptions {
  multiplier?: number;
  gasPrice?: Price | string | "average" | "high" | "low";
}

export interface SignOptions {
  chainId?: string;
  accountNumber?: bigint;
  sequence?: bigint;
  signMode?: SignMode;
}

export interface TimeoutHeightOption {
  type: "relative" | "absolute";
  value: bigint;
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
   * extension_options are arbitrary options that can be added by chains
   * when the default options are not sufficient. If any of these are present
   * and can't be handled, the transaction will be rejected
   */
  extensionOptions?: Message<Uint8Array>[];
  /**
   * extension_options are arbitrary options that can be added by chains
   * when the default options are not sufficient. If any of these are present
   * and can't be handled, they will be ignored
   */
  nonCriticalExtensionOptions?: Message<Uint8Array>[];
};

export interface QueryClient<TxBody, SignerInfo, Acct = unknown> {
  readonly endpoint: HttpEndpoint;
  getChainId: () => Promise<string>;
  getAddress: () => Promise<string>;
  getAccountNumber: () => Promise<bigint>;
  getSequence: () => Promise<bigint>;
  getLatestBlockHeight: () => Promise<bigint>;
  simulate: (
    txBody: TxBody,
    signerInfos: SignerInfo[]
  ) => Promise<SimulateResponse>;
  broadcast: (
    txBytes: Uint8Array,
    options?: BroadcastOptions
  ) => Promise<BroadcastResponse>;
  setAccountParser: (
    parseBaseAccount: (encodedAccount: EncodedMessage) => Acct
  ) => void;
}

/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponse {
  /** gas_info is the information about gas used in the simulation. */
  gasInfo?: GasInfo;
  /** result is the result of the simulation. */
  result?: any;
}

/** GasInfo defines tx execution gas context. */
export interface GasInfo {
  /** GasWanted is the maximum units of work we allow this tx to perform. */
  gasWanted: bigint;
  /** GasUsed is the amount of gas actually consumed. */
  gasUsed: bigint;
}
