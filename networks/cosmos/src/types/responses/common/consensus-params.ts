import { createCodec } from '../../codec';
import { ensureNumber, ensureString } from '../../codec/converters';

// Types
export interface BlockParams {
  readonly maxBytes: number;
  readonly maxGas: number;
  readonly timeIotaMs?: number;
}

export interface EvidenceParams {
  readonly maxAgeNumBlocks: number;
  readonly maxAgeDuration: number;
  readonly maxBytes?: number;
}

export interface ValidatorParams {
  readonly pubKeyTypes: readonly string[];
}

export interface VersionParams {
  readonly appVersion?: number;
}

export interface ConsensusParams {
  readonly block?: BlockParams;
  readonly evidence?: EvidenceParams;
  readonly validator?: ValidatorParams;
  readonly version?: VersionParams;
}

export interface ConsensusParamsResponse {
  readonly blockHeight: number;
  readonly consensusParams: ConsensusParams;
}

// Codecs
const BlockParamsCodec = createCodec<BlockParams>({
  maxBytes: { source: 'max_bytes', converter: ensureNumber },
  maxGas: { source: 'max_gas', converter: ensureNumber },
  timeIotaMs: { source: 'time_iota_ms', converter: ensureNumber, required: false }
});

const EvidenceParamsCodec = createCodec<EvidenceParams>({
  maxAgeNumBlocks: { source: 'max_age_num_blocks', converter: ensureNumber },
  maxAgeDuration: { source: 'max_age_duration', converter: ensureNumber },
  maxBytes: { source: 'max_bytes', converter: ensureNumber, required: false }
});

const ValidatorParamsCodec = createCodec<ValidatorParams>({
  pubKeyTypes: { 
    source: 'pub_key_types',
    converter: (value: any) => (value || []).map((v: any) => ensureString(v))
  }
});

const VersionParamsCodec = createCodec<VersionParams>({
  appVersion: { source: 'app_version', converter: ensureNumber, required: false }
});

const ConsensusParamsCodec = createCodec<ConsensusParams>({
  block: { 
    source: 'block',
    required: false,
    converter: (value: any) => value ? BlockParamsCodec.create(value) : undefined
  },
  evidence: { 
    source: 'evidence',
    required: false,
    converter: (value: any) => value ? EvidenceParamsCodec.create(value) : undefined
  },
  validator: { 
    source: 'validator',
    required: false,
    converter: (value: any) => value ? ValidatorParamsCodec.create(value) : undefined
  },
  version: { 
    source: 'version',
    required: false,
    converter: (value: any) => value ? VersionParamsCodec.create(value) : undefined
  }
});

export const ConsensusParamsResponseCodec = createCodec<ConsensusParamsResponse>({
  blockHeight: { source: 'block_height', converter: ensureNumber },
  consensusParams: { 
    source: 'consensus_params',
    converter: (value: any) => ConsensusParamsCodec.create(value || {})
  }
});

// Factory functions
export function createConsensusParamsResponse(data: any): ConsensusParamsResponse {
  return ConsensusParamsResponseCodec.create(data);
}

// Export codecs for advanced usage
export { 
  BlockParamsCodec, 
  EvidenceParamsCodec, 
  ValidatorParamsCodec, 
  VersionParamsCodec,
  ConsensusParamsCodec
};