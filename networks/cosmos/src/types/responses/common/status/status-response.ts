/**
 * StatusResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureBigInt, ensureBoolean, ensureBytes, ensureDate, base64ToBytes } from '../../../codec/converters';

// Import dependencies from same module
import { NodeInfo, NodeInfoCodec } from './node-info';
import { SyncInfo, SyncInfoCodec } from './sync-info';
import { Validator, ValidatorCodec } from './validator';

export interface StatusResponse {
  readonly nodeInfo: NodeInfo;
  readonly syncInfo: SyncInfo;
  readonly validatorInfo: Validator;
}

export const StatusResponseCodec = createCodec<StatusResponse>({
  nodeInfo: { 
    source: 'node_info',
    converter: (value: unknown) => NodeInfoCodec.create(value)
  },
  syncInfo: { 
    source: 'sync_info',
    converter: (value: unknown) => SyncInfoCodec.create(value)
  },
  validatorInfo: { 
    source: 'validator_info',
    converter: (value: unknown) => ValidatorCodec.create(value || {})
  }
});

// Creator function
export function createStatusResponse(data: unknown): StatusResponse {
  return StatusResponseCodec.create(data);
}
