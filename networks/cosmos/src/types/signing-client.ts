import { StdFee, TxResponse } from "@interchainjs/cosmos-types";
import { Message, IBroadcastResult } from "@interchainjs/types";

export interface ISigningClient {
  /**
   * register converters
   */
  addConverters?: (converters: (AminoConverter)[]) => void;
  /**
   * register encoders
   */
  addEncoders?: (encoders: (Encoder)[]) => void;
  /**
   * sign and broadcast
   */
  signAndBroadcast: (
    signerAddress: string,
    message: readonly Message<any>[],
    fee: StdFee | "auto",
    memo?: string
  ) => Promise<IBroadcastResult>;
}

export interface Encoder<T = any> {
  readonly typeUrl: string;
  fromPartial: (object: any) => T | any;
  encode: (message: T, writer?: any) => any;
}

export interface AminoConverter<T = any> {
  readonly typeUrl: string;
  readonly aminoType?: string;
  fromAmino?: (amino: any) => T;
  toAmino?: (message: T) => any;
}

export function isISigningClient(client: unknown): client is ISigningClient {
  return client !== null && client !== undefined
    && typeof (client as ISigningClient).signAndBroadcast === 'function'
    && (!(client as ISigningClient).addConverters || typeof (client as ISigningClient).addConverters === 'function')
    && (!(client as ISigningClient).addEncoders || typeof (client as ISigningClient).addEncoders === 'function');
}