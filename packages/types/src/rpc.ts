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