/**
 * GenesisResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureString, ensureNumber, base64ToBytes, ensureDate, createArrayConverter } from '../../../codec/converters';

// Import dependencies
import { ConsensusParams, createConsensusParams } from '../consensus-params/consensus-params';
import { Validator } from '../status/validator';
import { createValidator } from '../status/validator';

export interface GenesisResponse {
  readonly genesis: Genesis;
}

export interface Genesis {
  readonly genesisTime: Date;
  readonly chainId: string;
  readonly initialHeight?: number;
  readonly consensusParams: ConsensusParams;
  readonly validators: readonly Validator[];
  readonly appHash: Uint8Array;
  readonly appState?: Record<string, unknown>;
}

export const GenesisCodec = createCodec<Genesis>({
  genesisTime: { source: 'genesis_time', converter: ensureDate },
  chainId: { source: 'chain_id', converter: ensureString },
  initialHeight: { source: 'initial_height', converter: ensureNumber },
  consensusParams: { source: 'consensus_params', converter: createConsensusParams },
  validators: { 
    source: 'validators', 
    converter: createArrayConverter({ create: createValidator })
  },
  appHash: { source: 'app_hash', converter: base64ToBytes },
  appState: { source: 'app_state' }
});

export const GenesisResponseCodec = createCodec<GenesisResponse>({
  genesis: { source: 'genesis', converter: (data: unknown) => GenesisCodec.create(data) }
});

export function createGenesis(data: unknown): Genesis {
  return GenesisCodec.create(data);
}

export function createGenesisResponse(data: unknown): GenesisResponse {
  return GenesisResponseCodec.create(data);
}