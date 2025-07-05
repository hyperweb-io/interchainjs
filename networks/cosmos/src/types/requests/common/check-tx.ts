import { BaseCodec, createCodec } from '@interchainjs/cosmos-types';

export interface CheckTxParams {
  tx: Uint8Array;
}

export interface EncodedCheckTxParams {
  tx: string;
}

export const CheckTxParamsCodec: BaseCodec<CheckTxParams, EncodedCheckTxParams> = createCodec({
  encode: (params: CheckTxParams): EncodedCheckTxParams => ({
    tx: Buffer.from(params.tx).toString('base64')
  }),
  decode: (encoded: EncodedCheckTxParams): CheckTxParams => ({
    tx: Buffer.from(encoded.tx, 'base64')
  })
});

export const encodeCheckTxParams = (params: CheckTxParams): EncodedCheckTxParams => 
  CheckTxParamsCodec.encode(params);

export const decodeCheckTxParams = (encoded: EncodedCheckTxParams): CheckTxParams => 
  CheckTxParamsCodec.decode(encoded);