/**
 * BlockVersion type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString, ensureBytes, ensureDate } from '../../../codec/converters';

// Types
export interface BlockVersion {
  readonly block: string;
  readonly app?: string;
}

export const BlockVersionCodec = createCodec<BlockVersion>({
  block: (value: unknown) => String(ensureNumber(value)),
  app: (value: unknown) => value === undefined || value === null ? undefined : String(ensureNumber(value))
});
