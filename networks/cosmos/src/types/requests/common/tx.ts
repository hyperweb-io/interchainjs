import { BaseCodec, createCodec } from '@interchainjs/cosmos-types';

export interface TxParams {
  hash: Uint8Array;
  prove?: boolean;
}

export interface EncodedTxParams {
  hash: string;
  prove?: boolean;
}

export const TxParamsCodec: BaseCodec<TxParams, EncodedTxParams> = createCodec({
  encode: (params: TxParams): EncodedTxParams => ({
    hash: Buffer.from(params.hash).toString('hex').toUpperCase(),
    prove: params.prove
  }),
  decode: (encoded: EncodedTxParams): TxParams => ({
    hash: Buffer.from(encoded.hash, 'hex'),
    prove: encoded.prove
  })
});

export const encodeTxParams = (params: TxParams): EncodedTxParams => 
  TxParamsCodec.encode(params);

export const decodeTxParams = (encoded: EncodedTxParams): TxParams => 
  TxParamsCodec.decode(encoded);