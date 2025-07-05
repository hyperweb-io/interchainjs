/**
 * BlockVersion type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString, ensureBytes, ensureDate } from '../../../codec/converters';

// Types
export interface BlockVersion {
  readonly block: number;
  readonly app: number;
}

export const BlockVersionCodec = createCodec<BlockVersion>({
  block: ensureNumber,
  app: ensureNumber
});
