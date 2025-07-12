/**
 * UnconfirmedTxsParams type and encoder
 */

import { createCodec } from '../../../codec';
import { ensureNumber } from '../../../codec/converters';
import { EncodedUnconfirmedTxsParams } from './encoded-unconfirmed-txs-params';

export interface UnconfirmedTxsParams {
  readonly limit?: number;
}

export const UnconfirmedTxsParamsCodec = createCodec<EncodedUnconfirmedTxsParams>({
  limit: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return String(ensureNumber(value));
    }
  }
});

export function encodeUnconfirmedTxsParams(params: UnconfirmedTxsParams): EncodedUnconfirmedTxsParams {
  return UnconfirmedTxsParamsCodec.create(params);
}