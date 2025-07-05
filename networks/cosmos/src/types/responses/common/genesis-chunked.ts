import { createCodec } from '../../codec/base';
import { ensureNumber } from '../../codec/converters';

// Response types
export interface GenesisChunkedResponse {
  readonly chunk: number;
  readonly total: number;
  readonly data: string;
}

// Codecs
export const GenesisChunkedResponseCodec = createCodec<GenesisChunkedResponse>({
  chunk: { source: 'chunk', converter: ensureNumber },
  total: { source: 'total', converter: ensureNumber },
  data: { source: 'data', converter: (value: any) => value || '' }
});

// Creator function
export function createGenesisChunkedResponse(data: any): GenesisChunkedResponse {
  return GenesisChunkedResponseCodec.create(data);
}