import { createCodec } from '../../codec/base';
import { ensureNumber, ensureBigInt, ensureBoolean, ensureBytes, ensureDate, base64ToBytes } from '../../codec/converters';

// Response types
export interface NodeInfo {
  readonly protocolVersion: {
    readonly p2p: string;
    readonly block: string;
    readonly app: string;
  };
  readonly id: string;
  readonly listenAddr: string;
  readonly network: string;
  readonly version: string;
  readonly channels: string;
  readonly moniker: string;
  readonly other: {
    readonly txIndex: string;
    readonly rpcAddress: string;
  };
}

export interface SyncInfo {
  readonly latestBlockHash: Uint8Array;
  readonly latestAppHash: Uint8Array;
  readonly latestBlockHeight: number;
  readonly latestBlockTime: Date;
  readonly earliestBlockHash: Uint8Array;
  readonly earliestAppHash: Uint8Array;
  readonly earliestBlockHeight: number;
  readonly earliestBlockTime: Date;
  readonly catchingUp: boolean;
}

export interface ValidatorPubkey {
  readonly type: string;
  readonly value: Uint8Array;
}

export interface Validator {
  readonly address: Uint8Array;
  readonly pubKey: ValidatorPubkey;
  readonly votingPower: bigint;
  readonly proposerPriority: bigint;
}

export interface StatusResponse {
  readonly nodeInfo: NodeInfo;
  readonly syncInfo: SyncInfo;
  readonly validatorInfo: Validator;
}

// Codecs
const NodeInfoCodec = createCodec<NodeInfo>({
  protocolVersion: {
    source: 'protocol_version',
    converter: (value: any) => ({
      p2p: String(value?.p2p || ''),
      block: String(value?.block || ''),
      app: String(value?.app || '')
    })
  },
  id: { source: 'id' },
  listenAddr: { source: 'listen_addr' },
  network: { source: 'network' },
  version: { source: 'version' },
  channels: { source: 'channels' },
  moniker: { source: 'moniker' },
  other: {
    source: 'other',
    converter: (value: any) => ({
      txIndex: String(value?.tx_index || ''),
      rpcAddress: String(value?.rpc_address || '')
    })
  }
});

const SyncInfoCodec = createCodec<SyncInfo>({
  latestBlockHash: { source: 'latest_block_hash', converter: ensureBytes },
  latestAppHash: { source: 'latest_app_hash', converter: ensureBytes },
  latestBlockHeight: { source: 'latest_block_height', converter: ensureNumber },
  latestBlockTime: { source: 'latest_block_time', converter: ensureDate },
  earliestBlockHash: { source: 'earliest_block_hash', converter: ensureBytes },
  earliestAppHash: { source: 'earliest_app_hash', converter: ensureBytes },
  earliestBlockHeight: { source: 'earliest_block_height', converter: ensureNumber },
  earliestBlockTime: { source: 'earliest_block_time', converter: ensureDate },
  catchingUp: { source: 'catching_up', converter: ensureBoolean }
});

const ValidatorCodec = createCodec<Validator>({
  address: { source: 'address', converter: ensureBytes },
  pubKey: { 
    source: 'pub_key',
    converter: (value: any) => {
      if (!value) return { type: '', value: new Uint8Array() };
      return {
        type: String(value.type || ''),
        value: base64ToBytes(value.value || value.data || '')
      };
    }
  },
  votingPower: { source: 'voting_power', converter: ensureBigInt },
  proposerPriority: { 
    source: 'proposer_priority', 
    converter: (value: any) => ensureBigInt(value || 0)
  }
});

export const StatusResponseCodec = createCodec<StatusResponse>({
  nodeInfo: { 
    source: 'node_info',
    converter: (value: any) => NodeInfoCodec.create(value)
  },
  syncInfo: { 
    source: 'sync_info',
    converter: (value: any) => SyncInfoCodec.create(value)
  },
  validatorInfo: { 
    source: 'validator_info',
    converter: (value: any) => ValidatorCodec.create(value || {})
  }
});

// Creator function
export function createStatusResponse(data: any): StatusResponse {
  return StatusResponseCodec.create(data);
}