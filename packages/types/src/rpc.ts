/**
 * Api client ops
 */
export interface IApiClient<Tx, TBroadcastResp extends { hash: string }, TBroadcastOpts> {
  readonly endpoint: string | unknown;
  broadcast(
    txBytes: Tx,
    options?: TBroadcastOpts
  ) : Promise<TBroadcastResp>;
}