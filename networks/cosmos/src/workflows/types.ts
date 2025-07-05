import { SignMode } from '@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import {
  AuthInfo,
  Fee,
  SignDoc,
  SignerInfo,
  TxBody,
  TxRaw
} from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { Any } from '@interchainjs/cosmos-types/google/protobuf/any';
import {
  IUniSigner,
  Message,
  StdFee,
  StdSignDoc,
  IWorkflowBuilderContext,
  IAccount,
  ICryptoBytes
} from '@interchainjs/types';

// Cosmos-specific message types
export interface CosmosMessage<T = unknown> {
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

// Cosmos signing arguments
export interface CosmosSignArgs {
  messages: readonly CosmosMessage[];
  fee?: StdFee;
  memo?: string;
  options?: CosmosSignOptions;
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
  extensionOptions?: Any[];
  nonCriticalExtensionOptions?: Any[];
}

// Document types
export type CosmosDirectDoc = SignDoc;
export type CosmosAminoDoc = StdSignDoc;
export type CosmosTx = TxRaw;

// Cosmos account interface
export interface CosmosAccount extends IAccount {
  address: string;
  // These are inherited from IAccount but we need to declare them explicitly
  // when @interchainjs/types is not available
  publicKey?: ICryptoBytes;
  algo: string;
}

// Cosmos signer interface
export interface ICosmosSigner extends IUniSigner<
  CosmosAccount, // account type
  CosmosSignArgs, // sign args
  any, // broadcast options
  any // broadcast response
> {
  getAddress(): Promise<string>;
  getChainId(): Promise<string>;
  getAccountNumber(address: string): Promise<bigint>;
  getSequence(address: string): Promise<bigint>;
  signArbitrary(data: Uint8Array): Promise<ICryptoBytes>;
  getEncoder(typeUrl: string): { encode: (value: any) => Uint8Array };
  getConverterFromTypeUrl(typeUrl: string): {
    aminoType: string;
    toAmino: (value: any) => any;
    fromAmino: (value: any) => any;
  };
  simulateByTxBody(txBody: TxBody, signerInfos: SignerInfo[]): Promise<{ gasInfo: { gasUsed: bigint } }>;
  get encodedPublicKey(): EncodedMessage;
}

// Workflow builder context for cosmos
export interface ICosmosWorkflowBuilderContext extends IWorkflowBuilderContext<ICosmosSigner> {
  getSigner(): ICosmosSigner;
}

// Staging keys for data sharing between plugins
export const STAGING_KEYS = {
  MESSAGES: 'messages',
  FEE: 'fee',
  MEMO: 'memo',
  OPTIONS: 'options',
  TX_BODY: 'tx_body',
  TX_BODY_BYTES: 'tx_body_bytes',
  SIGNER_INFO: 'signer_info',
  AUTH_INFO: 'auth_info',
  AUTH_INFO_BYTES: 'auth_info_bytes',
  SIGN_DOC: 'sign_doc',
  SIGN_DOC_BYTES: 'sign_doc_bytes',
  SIGNATURE: 'signature',
  TX_RAW: 'tx_raw',
  PARTIAL_TX_RAW: 'partial_tx_raw'
} as const;

// Plugin input types
export interface MessageEncodingInput {
  messages: readonly CosmosMessage[];
  memo?: string;
  options?: CosmosSignOptions;
}

export interface FeeCalculationInput {
  fee?: StdFee;
  txBody: TxBody;
  signerInfos: SignerInfo[];
  options?: CosmosSignOptions;
}

export interface SignerInfoInput {
  publicKey: EncodedMessage;
  sequence: bigint;
  signMode: SignMode;
}

export interface AuthInfoInput {
  signerInfos: SignerInfo[];
  fee: Fee;
}

export interface DirectSignDocInput {
  bodyBytes: Uint8Array;
  authInfoBytes: Uint8Array;
  chainId: string;
  accountNumber: bigint;
}

export interface AminoSignDocInput {
  messages: readonly CosmosMessage[];
  fee: StdFee;
  memo: string;
  chainId: string;
  accountNumber: string;
  sequence: string;
}

export interface SignatureInput {
  signDoc: CosmosDirectDoc | CosmosAminoDoc;
}

export interface TxRawAssemblyInput {
  bodyBytes: Uint8Array;
  authInfoBytes: Uint8Array;
  signatures: Uint8Array[];
}