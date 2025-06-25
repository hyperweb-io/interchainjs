import { StdFee, TxResponse } from "@interchainjs/cosmos-types";
import { Message, TelescopeGeneratedCodec } from "@interchainjs/types";

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
  ) => Promise<TxResponse>;
}

export interface Encoder {
  typeUrl: string;
  fromPartial: (data: any) => any;
  encode: (data: any) => Uint8Array;
}

export interface AminoConverter {
  typeUrl: string;
  aminoType: string;
  fromAmino: (data: any) => any;
  toAmino: (data: any) => any;
}