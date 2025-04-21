import { AminoConverter, Encoder, Message, SignerOptions } from '../types/signer';
import { BroadcastOptions, DeliverTxResponse, Price, StdFee, TelescopeGeneratedCodec } from '@interchainjs/types';
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

export function isISigningClient(client: unknown): client is ISigningClient {
  return client !== null && client !== undefined
    && typeof (client as ISigningClient).signAndBroadcast === 'function'
    && (!(client as ISigningClient).addConverters || typeof (client as ISigningClient).addConverters === 'function')
    && (!(client as ISigningClient).addEncoders || typeof (client as ISigningClient).addEncoders === 'function');
}

export interface ISigningClient {
  /**
   * register converters
   */
  addConverters?: (converters: (AminoConverter | TelescopeGeneratedCodec<any, any, any>)[]) => void;
  /**
   * register encoders
   */
  addEncoders?: (encoders: (Encoder | TelescopeGeneratedCodec<any, any, any>)[]) => void;
  /**
   * sign and broadcast
   */
  signAndBroadcast: (
    signerAddress: string,
    message: readonly Message<any>[],
    fee: StdFee | "auto",
    memo?: string
  ) => Promise<DeliverTxResponse>;
}