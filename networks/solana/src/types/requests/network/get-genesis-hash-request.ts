/**
 * Request for getGenesisHash (no parameters)
 */

import { BaseSolanaRequest } from '../base';

export interface GetGenesisHashRequest extends BaseSolanaRequest {}
export type EncodedGetGenesisHashRequest = [];

export function encodeGetGenesisHashRequest(_req?: GetGenesisHashRequest): EncodedGetGenesisHashRequest {
  return [];
}

