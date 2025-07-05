import { createCodec } from '../../codec';
import { ensureNumber, ensureBytes, ensureBigInt } from '../../codec/converters';
import { ValidatorPubkey } from './status';

// Types
export interface ValidatorInfo {
  readonly address: Uint8Array;
  readonly pubKey: ValidatorPubkey;
  readonly votingPower: bigint;
  readonly proposerPriority?: number;
}

export interface ValidatorsResponse {
  readonly blockHeight: number;
  readonly validators: readonly ValidatorInfo[];
  readonly count: number;
  readonly total: number;
}

// Codecs
export const ValidatorInfoCodec = createCodec<ValidatorInfo>({
  address: { source: 'address', converter: ensureBytes },
  pubKey: { source: 'pub_key' },
  votingPower: { source: 'voting_power', converter: ensureBigInt },
  proposerPriority: { source: 'proposer_priority', converter: ensureNumber, required: false }
});

export const ValidatorsResponseCodec = createCodec<ValidatorsResponse>({
  blockHeight: { source: 'block_height', converter: ensureNumber },
  validators: { 
    source: 'validators',
    converter: (value: any) => (value || []).map((v: any) => ValidatorInfoCodec.create(v))
  },
  count: { source: 'count', converter: ensureNumber },
  total: { source: 'total', converter: ensureNumber }
});

// Factory functions
export function createValidatorsResponse(data: any): ValidatorsResponse {
  return ValidatorsResponseCodec.create(data);
}

// No need to re-export codecs as they're already exported above