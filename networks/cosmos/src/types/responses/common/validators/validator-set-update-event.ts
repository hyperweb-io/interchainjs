/**
 * ValidatorSetUpdateEvent type for WebSocket validator set updates
 * Represents validator set changes from the blockchain
 */

import { createCodec } from '../../../codec';
import { createValidatorUpdate } from './validator-update';
import { ValidatorUpdate } from './validator-update';

/**
 * Event emitted when the validator set is updated
 */
export interface ValidatorSetUpdateEvent {
  readonly validatorUpdates: readonly ValidatorUpdate[];
  readonly height: number;
  readonly time: Date;
}

export const ValidatorSetUpdateEventCodec = createCodec<ValidatorSetUpdateEvent>({
  validatorUpdates: {
    source: 'validator_updates',
    converter: (v) => Array.isArray(v) ? v.map(createValidatorUpdate) : []
  },
  height: {
    source: 'height',
    converter: (v) => Number(v)
  },
  time: {
    source: 'time',
    converter: (v) => new Date(String(v))
  }
});

export function createValidatorSetUpdateEvent(data: unknown): ValidatorSetUpdateEvent {
  return ValidatorSetUpdateEventCodec.create(data);
}