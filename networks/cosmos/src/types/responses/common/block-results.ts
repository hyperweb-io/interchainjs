import { BaseCodec, createCodec, createConverter } from '@interchainjs/cosmos-types';
import { Event, EventCodec } from './event';
import { ConsensusParams, ConsensusParamsCodec } from './consensus-params';

export interface BlockResults {
  height: bigint;
  txsResults?: TxResult[];
  beginBlockEvents?: Event[];
  endBlockEvents?: Event[];
  validatorUpdates?: ValidatorUpdate[];
  consensusParamUpdates?: ConsensusParams;
}

export interface TxResult {
  code: number;
  data?: Uint8Array;
  log?: string;
  info?: string;
  gasWanted?: bigint;
  gasUsed?: bigint;
  events?: Event[];
  codespace?: string;
}

export interface ValidatorUpdate {
  pubKey: {
    type: string;
    value: string;
  };
  power: bigint;
}

export interface EncodedBlockResults {
  height: string;
  txs_results?: EncodedTxResult[];
  begin_block_events?: Event[];
  end_block_events?: Event[];
  validator_updates?: EncodedValidatorUpdate[];
  consensus_param_updates?: ConsensusParams;
}

export interface EncodedTxResult {
  code: number;
  data?: string;
  log?: string;
  info?: string;
  gas_wanted?: string;
  gas_used?: string;
  events?: Event[];
  codespace?: string;
}

export interface EncodedValidatorUpdate {
  pub_key: {
    type: string;
    value: string;
  };
  power: string;
}

export const TxResultCodec: BaseCodec<TxResult, EncodedTxResult> = createCodec({
  encode: (result: TxResult): EncodedTxResult => ({
    code: result.code,
    data: result.data ? Buffer.from(result.data).toString('base64') : undefined,
    log: result.log,
    info: result.info,
    gas_wanted: result.gasWanted?.toString(),
    gas_used: result.gasUsed?.toString(),
    events: result.events,
    codespace: result.codespace
  }),
  decode: (encoded: EncodedTxResult): TxResult => ({
    code: encoded.code,
    data: encoded.data ? Buffer.from(encoded.data, 'base64') : undefined,
    log: encoded.log,
    info: encoded.info,
    gasWanted: encoded.gas_wanted ? BigInt(encoded.gas_wanted) : undefined,
    gasUsed: encoded.gas_used ? BigInt(encoded.gas_used) : undefined,
    events: encoded.events,
    codespace: encoded.codespace
  })
});

export const ValidatorUpdateCodec: BaseCodec<ValidatorUpdate, EncodedValidatorUpdate> = createCodec({
  encode: (update: ValidatorUpdate): EncodedValidatorUpdate => ({
    pub_key: {
      type: update.pubKey.type,
      value: update.pubKey.value
    },
    power: update.power.toString()
  }),
  decode: (encoded: EncodedValidatorUpdate): ValidatorUpdate => ({
    pubKey: {
      type: encoded.pub_key.type,
      value: encoded.pub_key.value
    },
    power: BigInt(encoded.power)
  })
});

export const BlockResultsCodec: BaseCodec<BlockResults, EncodedBlockResults> = createCodec({
  encode: (results: BlockResults): EncodedBlockResults => ({
    height: results.height.toString(),
    txs_results: results.txsResults?.map(tx => TxResultCodec.encode(tx)),
    begin_block_events: results.beginBlockEvents,
    end_block_events: results.endBlockEvents,
    validator_updates: results.validatorUpdates?.map(update => ValidatorUpdateCodec.encode(update)),
    consensus_param_updates: results.consensusParamUpdates
  }),
  decode: (encoded: EncodedBlockResults): BlockResults => ({
    height: BigInt(encoded.height),
    txsResults: encoded.txs_results?.map(tx => TxResultCodec.decode(tx)),
    beginBlockEvents: encoded.begin_block_events,
    endBlockEvents: encoded.end_block_events,
    validatorUpdates: encoded.validator_updates?.map(update => ValidatorUpdateCodec.decode(update)),
    consensusParamUpdates: encoded.consensus_param_updates
  })
});

export interface BlockResultsResponse {
  height: bigint;
  txsResults?: TxResult[];
  beginBlockEvents?: Event[];
  endBlockEvents?: Event[];
  validatorUpdates?: ValidatorUpdate[];
  consensusParamUpdates?: ConsensusParams;
}

export const BlockResultsResponseCodec: BaseCodec<BlockResultsResponse, EncodedBlockResults> = createCodec({
  encode: BlockResultsCodec.encode,
  decode: BlockResultsCodec.decode
});

export const createBlockResultsResponse = createConverter(BlockResultsResponseCodec);

// Factory functions
export const createTxResult = createConverter(TxResultCodec);
export const createValidatorUpdate = createConverter(ValidatorUpdateCodec);
export const createBlockResults = createConverter(BlockResultsCodec);