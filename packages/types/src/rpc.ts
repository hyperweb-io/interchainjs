/**
 * Api client ops
 */
export interface IApiClient<Tx, TBroadcastResp extends { transactionHash?: string, hash?: string }, TBroadcastOpts> {
  readonly endpoint: string | unknown;
  broadcast(
    txBytes: Tx,
    options?: TBroadcastOpts
  ) : Promise<TBroadcastResp>;
}

export interface Attribute {
  key: string;
  value: string;
  index?: boolean;
}

export interface Event {
  type: string;
  attributes: readonly Attribute[];
}

export interface MsgData {
  msgType: string;
  data: Uint8Array;
}

/**
 * The response after successfully broadcasting a transaction.
 * Success or failure refer to the execution result.
 */
export interface DeliverTxResponse {
  height: number;
  /** The position of the transaction within the block. This is a 0-based index. */
  txIndex: number;
  /** Error code. The transaction suceeded if and only if code is 0. */
  code: number;
  transactionHash: string;
  hash?: string;
  events: readonly Event[];
  /**
   * A string-based log document.
   *
   * This currently seems to merge attributes of multiple events into one event per type
   * (https://github.com/tendermint/tendermint/issues/9595). You might want to use the `events`
   * field instead.
   */
  rawLog?: string;
  /** @deprecated Use `msgResponses` instead. */
  data?: readonly MsgData[];
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
  origin?: any;
}