import { BaseCodec, createCodec } from '@interchainjs/cosmos-types';

export interface BroadcastTxCommitParams {
  tx: Uint8Array;
}

export interface EncodedBroadcastTxCommitParams {
  tx: string;
}

export const BroadcastTxCommitParamsCodec: BaseCodec<BroadcastTxCommitParams, EncodedBroadcastTxCommitParams> = createCodec({
  encode: (params: BroadcastTxCommitParams): EncodedBroadcastTxCommitParams => ({
    tx: Buffer.from(params.tx).toString('base64')
  }),
  decode: (encoded: EncodedBroadcastTxCommitParams): BroadcastTxCommitParams => ({
    tx: Buffer.from(encoded.tx, 'base64')
  })
});

export const encodeBroadcastTxCommitParams = (params: BroadcastTxCommitParams): EncodedBroadcastTxCommitParams => 
  BroadcastTxCommitParamsCodec.encode(params);

export const decodeBroadcastTxCommitParams = (encoded: EncodedBroadcastTxCommitParams): BroadcastTxCommitParams => 
  BroadcastTxCommitParamsCodec.decode(encoded);