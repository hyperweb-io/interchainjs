/**
 * HeightVoteSet type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString, createArrayConverter } from '../../../codec/converters';

export interface VoteSet {
  readonly round: number;
  readonly prevotes: readonly string[];
  readonly prevotesCount: number;
  readonly precommits: readonly string[];
  readonly precommitsCount: number;
}

export const VoteSetCodec = createCodec<VoteSet>({
  round: ensureNumber,
  prevotes: createArrayConverter({ create: ensureString }),
  prevotesCount: { source: 'prevotes_count', converter: ensureNumber },
  precommits: createArrayConverter({ create: ensureString }),
  precommitsCount: { source: 'precommits_count', converter: ensureNumber }
});

export interface HeightVoteSet {
  readonly height: number;
  readonly round: number;
  readonly step: number;
  readonly voteSets?: readonly VoteSet[];
}

export const HeightVoteSetCodec = createCodec<HeightVoteSet>({
  height: ensureNumber,
  round: ensureNumber,
  step: ensureNumber,
  voteSets: {
    source: 'vote_sets',
    converter: (value: unknown) => {
      if (!value || !Array.isArray(value)) return undefined;
      return value.map(v => VoteSetCodec.create(v));
    }
  }
});

export function createHeightVoteSet(data: unknown): HeightVoteSet {
  return HeightVoteSetCodec.create(data);
}