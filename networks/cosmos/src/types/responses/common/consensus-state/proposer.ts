/**
 * Proposer type and creator
 */

import { createCodec } from '../../../codec';
import { ensureString, ensureNumber } from '../../../codec/converters';

export interface Proposer {
  readonly address: string;
  readonly index: number;
}

export const ProposerCodec = createCodec<Proposer>({
  address: ensureString,
  index: ensureNumber
});

export function createProposer(data: unknown): Proposer {
  return ProposerCodec.create(data);
}