/**
 * GenesisChunkedResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString } from '../../../codec/converters';

// Response types
export interface GenesisChunkedResponse {
  readonly chunk: number;
  readonly total: number;
  readonly data: string;
}

// Codec
export const GenesisChunkedResponseCodec = createCodec<GenesisChunkedResponse>({
  chunk: { source: 'chunk', converter: ensureNumber },
  total: { source: 'total', converter: ensureNumber },
  data: { source: 'data', converter: ensureString }
});

// Creator function
export function createGenesisChunkedResponse(data: any): GenesisChunkedResponse {
  return GenesisChunkedResponseCodec.create(data);
}
