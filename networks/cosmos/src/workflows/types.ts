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
  ICryptoBytes
} from '@interchainjs/types';
import { AccountData } from '../signers';
import { AminoConverter, Encoder } from '../types/signing-client';
import { SimulationResponse } from '@interchainjs/cosmos-types';
import { CosmosAminoDoc, CosmosDirectDoc, CosmosMessage, DocOptions, EncodedMessage, ICosmosSigner } from '../signers/types';


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
  options?: DocOptions;
}

export interface FeeCalculationInput {
  fee?: StdFee;
  txBody: TxBody;
  signerInfos: SignerInfo[];
  options?: DocOptions;
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