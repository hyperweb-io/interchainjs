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
  Auth,
  BroadcastOptions,
  CreateDocResponse,
  HttpEndpoint,
  IKey,
  Price,
  SignerConfig,
  StdFee,
  StdSignDoc,
  UniSigner,
} from '@interchainjs/types';
import { Event } from '@interchainjs/types';
import { Key } from '@interchainjs/utils';
import { ripemd160 } from '@noble/hashes/ripemd160';
import { sha256 } from '@noble/hashes/sha256';

export type Algo = 'secp256k1' | 'ed25519' | 'sr25519';

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
  '$typeUrl'?: string;
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
  | 'broadcast_tx_async'
  | 'broadcast_tx_sync'
  | 'broadcast_tx_commit';

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

export type CosmosSignArgs<Option = DocOptions> = {
  messages: Message[];
  fee?: StdFee;
  memo?: string;
  options?: Option;
};

export type UniCosmosBaseSigner<SignDoc> = UniSigner<
  CosmosSignArgs,
  CosmosTx,
  SignDoc,
  Promise<string>,
  BroadcastResponse
>;

export type CosmosDirectSigner = UniSigner<
  CosmosSignArgs,
  CosmosTx,
  CosmosDirectDoc,
  Promise<string>,
  BroadcastResponse
>;
export type CosmosAminoSigner = UniSigner<
  CosmosSignArgs,
  CosmosTx,
  CosmosAminoDoc,
  Promise<string>,
  BroadcastResponse
>;

export type CosmosCreateDocResponse<SignDoc> = CreateDocResponse<
  CosmosTx,
  SignDoc
>;

export type CosmosDirectDoc = SignDoc;
export type CosmosAminoDoc = StdSignDoc;

export type CosmosTx = TxRaw;

export type Bech32Address = string;

export interface AccountData {
  address: Bech32Address;
  algo: Algo;
  pubkey: Uint8Array;
}

export interface ICosmosAccount {
  publicKey: IKey;
  address: Bech32Address;
  auth: Auth;
  toAccountData(): AccountData;
}

export function isICosmosAccount(
  instance: AccountData | ICosmosAccount
): instance is ICosmosAccount {
  return (instance as ICosmosAccount).toAccountData !== undefined;
}

export class CosmosAccount implements ICosmosAccount {
  constructor(
    public prefix: string,
    public auth: Auth,
    public isPublicKeyCompressed: boolean = true
  ) {}

  get publicKey() {
    return this.auth.getPublicKey(this.isPublicKeyCompressed);
  }

  get address() {
    return Key.from(ripemd160(sha256(this.publicKey.value))).toBech32(
      this.prefix
    );
  }

  toAccountData() {
    return {
      address: this.address,
      algo: this.auth.algo as Algo,
      pubkey: this.publicKey.value,
    };
  }
}

export interface ICosmosWallet {
  getAccounts: () => Promise<ICosmosAccount[]>;
}
