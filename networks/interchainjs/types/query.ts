import { Event } from "@interchainjs/cosmos/types";

/** A transaction that is indexed as part of the transaction history */
export interface IndexedTx {
  height: number;
  /** The position of the transaction within the block. This is a 0-based index. */
  txIndex: number;
  /** Transaction hash (might be used as transaction ID). Guaranteed to be non-empty upper-case hex */
  hash: string;
  /** Transaction execution error code. 0 on success. */
  code: number;
  events: Event[];
  /**
   * A string-based log document.
   *
   * This currently seems to merge attributes of multiple events into one event per type
   * (https://github.com/tendermint/tendermint/issues/9595). You might want to use the `events`
   * field instead.
   */
  rawLog: string;
  /**
   * Raw transaction bytes stored in Tendermint.
   *
   * If you hash this, you get the transaction hash (= transaction ID):
   *
   * ```js
   * import { sha256 } from "@cosmjs/crypto";
   * import { toHex } from "@cosmjs/encoding";
   *
   * const transactionId = toHex(sha256(indexTx.tx)).toUpperCase();
   * ```
   *
   * Use `decodeTxRaw` from @cosmjs/proto-signing to decode this.
   */
  tx: Uint8Array;
  /**
   * The message responses of the [TxMsgData](https://github.com/cosmos/cosmos-sdk/blob/v0.46.3/proto/cosmos/base/abci/v1beta1/abci.proto#L128-L140)
   * as `Any`s.
   * This field is an empty list for chains running Cosmos SDK < 0.46.
   */
  msgResponses: Array<{
    typeUrl: string;
    value: Uint8Array;
  }>;
  gasUsed: bigint;
  gasWanted: bigint;
}

interface ResponseDeliverTx {
  code: number;
  data: string;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gas_wanted: string;
  gas_used: string;
  events: Event[];
  codespace: string;
}

export interface TxResponse {
  hash: string;
  height: number;
  index: number;
  tx: string; // base64 encoded
  tx_result: ResponseDeliverTx;
}

export type SearchTxQuery =
  | string
  | ReadonlyArray<{
      readonly key: string;
      readonly value: string;
    }>;

interface EventAttribute {
  key: string;
  value: string;
  /** nondeterministic */
  index: boolean;
}

export interface SearchTxResponse {
  txs: {
    hash: string;
    height: string;
    index: number;
    tx_result: {
      log: string;
      gas_wanted: string;
      gas_used: string;
      tags: EventAttribute[];
    };
    tx: string;
    proof: {
      RootHash: string;
      Data: string;
      Proof: {
        total: string;
        index: string;
        leaf_hash: string;
        aunts: string[];
      };
    };
  }[];
  total_count: string;
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
