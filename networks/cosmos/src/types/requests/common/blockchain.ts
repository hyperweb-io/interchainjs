/**
 * BlockchainParams type and encoder
 */

import { createCodec } from '../../codec';
import { ensureNumber } from '../../codec/converters';

export interface BlockchainParams {
  readonly minHeight?: number;
  readonly maxHeight?: number;
}

export interface EncodedBlockchainParams {
  readonly minHeight?: string;
  readonly maxHeight?: string;
}

// Codec for encoding blockchain parameters
export const BlockchainParamsCodec = createCodec<EncodedBlockchainParams>({
  minHeight: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return String(ensureNumber(value));
    }
  },
  maxHeight: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return String(ensureNumber(value));
    }
  }
});

// Creator function that encodes the parameters
export function encodeBlockchainParams(params: BlockchainParams): EncodedBlockchainParams {
  return BlockchainParamsCodec.create(params);
}