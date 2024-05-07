import {
  BroadcastOptions,
  HttpEndpoint,
  IKey,
  Price,
  SignerConfig,
} from "@interchainjs/types";

import { SignMode } from "../codegen/cosmos/tx/signing/v1beta1/signing";
import { SignerInfo, TxBody } from "../codegen/cosmos/tx/v1beta1/tx";
import { Any } from "../codegen/google/protobuf/any";
import { Event } from "@interchainjs/types";
import { SimulateResponse } from "../codegen/cosmos/tx/v1beta1/service";
import { BaseAccount } from "../codegen/cosmos/auth/v1beta1/auth";

export interface SignerOptions extends Partial<SignerConfig> {
  parseAccount?: (encodedAccount: EncodedMessage) => BaseAccount;
  encodePublicKey?: (key: IKey) => EncodedMessage;
  prefix?: string;
}

/** Direct/Proto message */
export interface Message<T = any> {
  typeUrl: string;
  value: T;
}

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
  extensionOptions?: Any[];
  /**
   * extension_options are arbitrary options that can be added by chains
   * when the default options are not sufficient. If any of these are present
   * and can't be handled, they will be ignored
   */
  nonCriticalExtensionOptions?: Any[];
};

export interface QueryClient {
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
}
