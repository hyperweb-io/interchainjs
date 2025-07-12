/**
 * HeaderResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString, ensureBytes, ensureDate } from '../../../codec/converters';

// Import dependencies from same module
import { BlockHeader } from '../header/block-header';
import { BlockHeaderCodec } from '../header/block-header';

export interface HeaderResponse {
  readonly header: BlockHeader;
}

export const HeaderResponseCodec = createCodec<HeaderResponse>({
  header: { 
    source: 'header',
    converter: (value: unknown) => BlockHeaderCodec.create(value || {})
  }
});

export function createHeaderResponse(data: unknown): HeaderResponse {
  return HeaderResponseCodec.create(data);
}
