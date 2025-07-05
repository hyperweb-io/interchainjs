import { BaseCodec, createCodec, createConverter } from '@interchainjs/cosmos-types';
import { BlockId } from './header';

// Create a proper BlockIdCodec with encode/decode methods
const BlockIdCodec: BaseCodec<BlockId, any> = createCodec({
  encode: (blockId: BlockId): any => ({
    hash: Buffer.from(blockId.hash).toString('base64'),
    parts: {
      total: blockId.parts.total,
      hash: Buffer.from(blockId.parts.hash).toString('base64')
    }
  }),
  decode: (encoded: any): BlockId => ({
    hash: Buffer.from(encoded.hash, 'base64'),
    parts: {
      total: encoded.parts.total,
      hash: Buffer.from(encoded.parts.hash, 'base64')
    }
  })
});

export interface BlockMeta {
  blockId: BlockId;
  blockSize: bigint;
  header: BlockMetaHeader;
  numTxs: bigint;
}

export interface BlockMetaHeader {
  version: {
    block: bigint;
    app?: bigint;
  };
  chainId: string;
  height: bigint;
  time: string;
  lastBlockId?: BlockId;
  lastCommitHash?: Uint8Array;
  dataHash?: Uint8Array;
  validatorsHash: Uint8Array;
  nextValidatorsHash: Uint8Array;
  consensusHash: Uint8Array;
  appHash: Uint8Array;
  lastResultsHash?: Uint8Array;
  evidenceHash?: Uint8Array;
  proposerAddress: Uint8Array;
}

export interface EncodedBlockMeta {
  block_id: any;
  block_size: string;
  header: EncodedBlockMetaHeader;
  num_txs: string;
}

export interface EncodedBlockMetaHeader {
  version: {
    block: string;
    app?: string;
  };
  chain_id: string;
  height: string;
  time: string;
  last_block_id?: any;
  last_commit_hash?: string;
  data_hash?: string;
  validators_hash: string;
  next_validators_hash: string;
  consensus_hash: string;
  app_hash: string;
  last_results_hash?: string;
  evidence_hash?: string;
  proposer_address: string;
}

export const BlockMetaHeaderCodec: BaseCodec<BlockMetaHeader, EncodedBlockMetaHeader> = createCodec({
  encode: (header: BlockMetaHeader): EncodedBlockMetaHeader => ({
    version: {
      block: header.version.block.toString(),
      app: header.version.app?.toString()
    },
    chain_id: header.chainId,
    height: header.height.toString(),
    time: header.time,
    last_block_id: header.lastBlockId ? BlockIdCodec.encode(header.lastBlockId) : undefined,
    last_commit_hash: header.lastCommitHash ? Buffer.from(header.lastCommitHash).toString('base64') : undefined,
    data_hash: header.dataHash ? Buffer.from(header.dataHash).toString('base64') : undefined,
    validators_hash: Buffer.from(header.validatorsHash).toString('base64'),
    next_validators_hash: Buffer.from(header.nextValidatorsHash).toString('base64'),
    consensus_hash: Buffer.from(header.consensusHash).toString('base64'),
    app_hash: Buffer.from(header.appHash).toString('base64'),
    last_results_hash: header.lastResultsHash ? Buffer.from(header.lastResultsHash).toString('base64') : undefined,
    evidence_hash: header.evidenceHash ? Buffer.from(header.evidenceHash).toString('base64') : undefined,
    proposer_address: Buffer.from(header.proposerAddress).toString('hex')
  }),
  decode: (encoded: EncodedBlockMetaHeader): BlockMetaHeader => ({
    version: {
      block: BigInt(encoded.version.block),
      app: encoded.version.app ? BigInt(encoded.version.app) : undefined
    },
    chainId: encoded.chain_id,
    height: BigInt(encoded.height),
    time: encoded.time,
    lastBlockId: encoded.last_block_id ? BlockIdCodec.decode(encoded.last_block_id) : undefined,
    lastCommitHash: encoded.last_commit_hash ? Buffer.from(encoded.last_commit_hash, 'base64') : undefined,
    dataHash: encoded.data_hash ? Buffer.from(encoded.data_hash, 'base64') : undefined,
    validatorsHash: Buffer.from(encoded.validators_hash, 'base64'),
    nextValidatorsHash: Buffer.from(encoded.next_validators_hash, 'base64'),
    consensusHash: Buffer.from(encoded.consensus_hash, 'base64'),
    appHash: Buffer.from(encoded.app_hash, 'base64'),
    lastResultsHash: encoded.last_results_hash ? Buffer.from(encoded.last_results_hash, 'base64') : undefined,
    evidenceHash: encoded.evidence_hash ? Buffer.from(encoded.evidence_hash, 'base64') : undefined,
    proposerAddress: Buffer.from(encoded.proposer_address, 'hex')
  })
});

export const BlockMetaCodec: BaseCodec<BlockMeta, EncodedBlockMeta> = createCodec({
  encode: (meta: BlockMeta): EncodedBlockMeta => ({
    block_id: BlockIdCodec.encode(meta.blockId),
    block_size: meta.blockSize.toString(),
    header: BlockMetaHeaderCodec.encode(meta.header),
    num_txs: meta.numTxs.toString()
  }),
  decode: (encoded: EncodedBlockMeta): BlockMeta => ({
    blockId: BlockIdCodec.decode(encoded.block_id),
    blockSize: BigInt(encoded.block_size),
    header: BlockMetaHeaderCodec.decode(encoded.header),
    numTxs: BigInt(encoded.num_txs)
  })
});

export interface BlockchainResponse {
  lastHeight: bigint;
  blockMetas: BlockMeta[];
}

export interface EncodedBlockchainResponse {
  last_height: string;
  block_metas: EncodedBlockMeta[];
}

export const BlockchainResponseCodec: BaseCodec<BlockchainResponse, EncodedBlockchainResponse> = createCodec({
  encode: (response: BlockchainResponse): EncodedBlockchainResponse => ({
    last_height: response.lastHeight.toString(),
    block_metas: response.blockMetas.map(meta => BlockMetaCodec.encode(meta))
  }),
  decode: (encoded: EncodedBlockchainResponse): BlockchainResponse => ({
    lastHeight: BigInt(encoded.last_height),
    blockMetas: encoded.block_metas.map(meta => BlockMetaCodec.decode(meta))
  })
});

// Factory functions
export const createBlockMeta = createConverter(BlockMetaCodec);
export const createBlockMetaHeader = createConverter(BlockMetaHeaderCodec);
export const createBlockchainResponse = createConverter(BlockchainResponseCodec);