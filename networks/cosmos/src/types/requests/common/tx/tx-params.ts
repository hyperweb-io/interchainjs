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
  hash: {
    converter: (value: unknown) => {
      const hashStr = ensureString(value);
      // Convert hex hash to base64 for RPC compatibility
      // Remove 0x prefix if present
      const cleanHex = hashStr.startsWith('0x') ? hashStr.slice(2) : hashStr;
      const hashBytes = Buffer.from(cleanHex, 'hex');
      return hashBytes.toString('base64');
    }
  },
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