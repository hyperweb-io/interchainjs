/**
 * BlockCommitment response
 */

import { createCodec, BaseCodec } from '../../codec';
import { ensureNumber } from '../../codec/converters';

export interface BlockCommitmentResponse {
  commitment: number[]; // stake per confirmation level
  totalStake: number;
}

export function createBlockCommitmentResponse(data: unknown): BlockCommitmentResponse {
  const codec: BaseCodec<BlockCommitmentResponse> = createCodec<BlockCommitmentResponse>({
    commitment: (value: unknown) => (Array.isArray(value) ? value.map(ensureNumber) : []),
    totalStake: ensureNumber,
  });
  return codec.create(data);
}

