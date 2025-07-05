import { BaseCodec, createCodec } from '@interchainjs/cosmos-types';

export interface BroadcastTxSyncParams {
  tx: Uint8Array;
}

export interface EncodedBroadcastTxSyncParams {
  tx: string;
}

export const BroadcastTxSyncParamsCodec: BaseCodec<BroadcastTxSyncParams, EncodedBroadcastTxSyncParams> = createCodec({
  encode: (params: BroadcastTxSyncParams): EncodedBroadcastTxSyncParams => ({
    tx: Buffer.from(params.tx).toString('base64')
  }),
  decode: (encoded: EncodedBroadcastTxSyncParams): BroadcastTxSyncParams => ({
    tx: Buffer.from(encoded.tx, 'base64')
  })
});

export const encodeBroadcastTxSyncParams = (params: BroadcastTxSyncParams): EncodedBroadcastTxSyncParams => 
  BroadcastTxSyncParamsCodec.encode(params);

export const decodeBroadcastTxSyncParams = (encoded: EncodedBroadcastTxSyncParams): BroadcastTxSyncParams => 
  BroadcastTxSyncParamsCodec.decode(encoded);