/**
 * Airdrop response types and codec
 */

import { normalizeSignature } from '../../codec';

// Simple string response for airdrop signature
export type AirdropResponse = string;

export function createAirdropResponse(data: unknown): AirdropResponse {
  if (typeof data !== 'string') {
    throw new Error('Airdrop response must be a string signature');
  }
  return normalizeSignature(data);
}
