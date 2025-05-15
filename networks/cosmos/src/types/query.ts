export type SearchTxQuery =
  | string
  | ReadonlyArray<{
      readonly key: string;
      readonly value: string;
    }>;

export interface SearchTxQueryObj {
  query:
    | string
    | ReadonlyArray<{
        readonly key: string;
        readonly value: string;
      }>;
  prove?: boolean;
  page?: number;
  perPage?: number;
  orderBy?: 'asc' | 'desc';
}

export type SearchBlockQuery =
  | string
  | ReadonlyArray<{
      readonly key: string;
      readonly value: string;
    }>;

export interface SearchBlockQueryObj {
  query:
    | string
    | ReadonlyArray<{
        readonly key: string;
        readonly value: string;
      }>;
  page?: number;
  perPage?: number;
  orderBy?: 'asc' | 'desc';
}

interface EventAttribute {
  key: string;
  value: string;
  /** nondeterministic */
  index: boolean;
}

interface BlockHeader {
  version: {
    block: string;
    app: string;
  };
  height: number;
  chainId: string;
  /** An RFC 3339 time string like e.g. '2020-02-15T10:39:10.4696305Z' */
  time: string;
}

export interface Block {
  /** The ID is a hash of the block header (uppercase hex) */
  id: string;
  header: BlockHeader;
  /** Array of raw transactions */
  txs: Uint8Array[];
}

interface Consensus {
  block: string;
  app: string;
}

/** BlockID */
interface BlockID {
  hash: string;
  part_set_header: {
    total: number;
    hash: string;
  };
}

/** Header defines the structure of a block header. */
interface Header {
  /** basic block info */
  version: Consensus;
  chain_id: string;
  height: string;
  time: string;
  /** prev block info */
  last_block_id: BlockID;
  /** hashes of block data */
  last_commit_hash: string;
  data_hash: string;
  /** hashes from the app output from the prev block */
  validators_hash: string;
  /** validators for the next block */
  next_validators_hash: string;
  /** consensus params for current block */
  consensus_hash: string;
  /** state after txs from the previous block */
  app_hash: string;
  last_results_hash: string;
  /** consensus info */
  evidence_hash: string;
  /** original proposer of the block */
  proposer_address: string;
}

export interface BlockResponse {
  block_id: {
    hash: string;
    parts: {
      total: number;
      hash: string;
    };
  };
  block: {
    header: Header;
    data: {
      /**
       * Txs that will be applied by state @ block.Height+1.
       * NOTE: not all txs here are valid.  We're just agreeing on the order first.
       * This means that block.AppHash does not include these txs.
       */
      txs: string[];
    };
    evidence: {
      evidence: any[];
    };
    last_commit?: any;
  };
}

export function isSearchTxQueryObj(query: any): query is SearchTxQueryObj {
  return typeof query === 'object' && 'query' in query;
}

export function isSearchBlockQueryObj(query: any): query is SearchBlockQueryObj {
  return typeof query === 'object' && 'query' in query;
}