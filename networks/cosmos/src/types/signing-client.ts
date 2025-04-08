import { AminoConverter, Message, SignerOptions } from '../types/signer';
import { BroadcastOptions, Price } from '@interchainjs/types';
import { Event, TelescopeGeneratedType } from '@interchainjs/types';

export type EncodeObject = Message;

export type TypeUrl = string;

export type Registry = Array<[TypeUrl, TelescopeGeneratedType<any, any, any>]>;

export interface SigningOptions {
  registry?: Registry;
  gasPrice?: Price | string;
  broadcast?: BroadcastOptions;
  signerOptions?: SignerOptions;
}

export interface SignerData {
  accountNumber: bigint;
  sequence: bigint;
  chainId: string;
}

export interface MsgData {
  msgType: string;
  data: Uint8Array;
}

export interface SequenceResponse {
  accountNumber: bigint;
  sequence: bigint;
}
