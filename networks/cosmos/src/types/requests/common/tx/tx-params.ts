/**
 * TxParams type and encoder
 */

import { createCodec } from '../../../codec';
import { ensureString, ensureBoolean } from '../../../codec/converters';
import { EncodedTxParams } from './encoded-tx-params';

export interface TxParams {
  readonly hash: string;
  readonly prove?: boolean;
}

export const TxParamsCodec = createCodec<EncodedTxParams>({
  hash: ensureString,
  prove: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return ensureBoolean(value);
    }
  }
});

export function encodeTxParams(params: TxParams): EncodedTxParams {
  return TxParamsCodec.create(params);
}