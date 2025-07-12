/**
 * BlockResultsResponse type and creator
 * 
 * Represents the results of executing transactions in a block, including:
 * - Transaction execution results with gas usage and events
 * - Begin/end block events from the application
 * - Validator updates and consensus parameter changes
 */

import { createCodec } from '../../../codec';
import { apiToNumber, createArrayConverter } from '../../../codec/converters';
import { TxData, createTxData } from './tx-data';
import { Event, createEvent } from '../tx/event';
import { ValidatorUpdate, createValidatorUpdate } from './validator-update';
import { ConsensusParams, createConsensusParams } from '../consensus-params/consensus-params';

/**
 * Response from the block_results RPC method
 */
export interface BlockResultsResponse {
  /** Height of the block */
  readonly height: number;
  /** Results from executing transactions in the block */
  readonly txsResults?: readonly TxData[];
  /** Events emitted during BeginBlock (Tendermint 0.34 & 0.37) */
  readonly beginBlockEvents?: readonly Event[];
  /** Events emitted during EndBlock (Tendermint 0.34 & 0.37) */
  readonly endBlockEvents?: readonly Event[];
  /** Events emitted during FinalizeBlock (CometBFT 0.38+) */
  readonly finalizeBlockEvents?: readonly Event[];
  /** Validator set updates */
  readonly validatorUpdates?: readonly ValidatorUpdate[];
  /** Consensus parameter updates */
  readonly consensusParamUpdates?: ConsensusParams;
  /** Application hash after executing the block */
  readonly appHash?: Uint8Array;
}

export const BlockResultsResponseCodec = createCodec<BlockResultsResponse>({
  height: apiToNumber,
  txsResults: {
    source: 'txs_results',
    converter: (v) => v ? createArrayConverter({ create: createTxData })(v) : []
  },
  beginBlockEvents: {
    source: 'begin_block_events',
    converter: (v) => v ? createArrayConverter({ create: createEvent })(v) : undefined
  },
  endBlockEvents: {
    source: 'end_block_events',
    converter: (v) => v ? createArrayConverter({ create: createEvent })(v) : undefined
  },
  finalizeBlockEvents: {
    source: 'finalize_block_events',
    converter: (v) => v ? createArrayConverter({ create: createEvent })(v) : undefined
  },
  validatorUpdates: {
    source: 'validator_updates',
    converter: (v) => v ? createArrayConverter({ create: createValidatorUpdate })(v) : undefined
  },
  consensusParamUpdates: {
    source: 'consensus_param_updates',
    converter: (v) => v ? createConsensusParams(v) : undefined
  },
  appHash: {
    source: 'app_hash',
    converter: (v) => v ? Uint8Array.from(Buffer.from(v as string, 'base64')) : undefined
  }
});

/**
 * Creates a BlockResultsResponse from raw RPC response data
 * @param data - Raw response from block_results RPC method
 * @returns Typed BlockResultsResponse object
 */
export function createBlockResultsResponse(data: unknown): BlockResultsResponse {
  return BlockResultsResponseCodec.create(data);
}