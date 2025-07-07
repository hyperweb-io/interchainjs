import { StdFee, TxResponse } from "@interchainjs/cosmos-types";
import { Message, TelescopeGeneratedCodec } from "@interchainjs/types";

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
  ) => Promise<TxResponse>;
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