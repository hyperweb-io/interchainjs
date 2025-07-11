/**
 * VersionParams type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString } from '../../../codec/converters';

export interface VersionParams {
  readonly appVersion?: number;
}

// Codec
export const VersionParamsCodec = createCodec<VersionParams>({
  appVersion: { source: 'app', converter: ensureNumber }
});

// Factory function
export function createVersionParams(data: unknown): VersionParams {
  return VersionParamsCodec.create(data);
}
