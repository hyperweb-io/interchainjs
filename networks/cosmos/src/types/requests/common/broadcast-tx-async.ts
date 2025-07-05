import { BaseCodec, createCodec } from '@interchainjs/cosmos-types';

export interface BroadcastTxAsyncParams {
  tx: Uint8Array;
}

export interface EncodedBroadcastTxAsyncParams {
  tx: string;
}

export const BroadcastTxAsyncParamsCodec: BaseCodec<BroadcastTxAsyncParams, EncodedBroadcastTxAsyncParams> = createCodec({
  encode: (params: BroadcastTxAsyncParams): EncodedBroadcastTxAsyncParams => ({
    tx: Buffer.from(params.tx).toString('base64')
  }),
  decode: (encoded: EncodedBroadcastTxAsyncParams): BroadcastTxAsyncParams => ({
    tx: Buffer.from(encoded.tx, 'base64')
  })
});

export const encodeBroadcastTxAsyncParams = (params: BroadcastTxAsyncParams): EncodedBroadcastTxAsyncParams => 
  BroadcastTxAsyncParamsCodec.encode(params);

export const decodeBroadcastTxAsyncParams = (encoded: EncodedBroadcastTxAsyncParams): BroadcastTxAsyncParams => 
  BroadcastTxAsyncParamsCodec.decode(encoded);