/**
 * Request type for getVoteAccounts RPC method
 */

import { SolanaCommitment } from '../base';

export interface GetVoteAccountsOptions {
  commitment?: SolanaCommitment;
  votePubkey?: string;
  keepUnstakedDelinquents?: boolean;
  delinquentSlotDistance?: number;
}

export interface GetVoteAccountsRequest {
  options?: GetVoteAccountsOptions;
}

export type EncodedGetVoteAccountsRequest = [GetVoteAccountsOptions?];

export function encodeGetVoteAccountsRequest(request?: GetVoteAccountsRequest): EncodedGetVoteAccountsRequest {
  if (!request?.options) return [];
  const opts: GetVoteAccountsOptions = {};
  const source = request.options;
  if (source.commitment !== undefined) opts.commitment = source.commitment;
  if (source.votePubkey !== undefined) opts.votePubkey = source.votePubkey;
  if (source.keepUnstakedDelinquents !== undefined) opts.keepUnstakedDelinquents = source.keepUnstakedDelinquents;
  if (source.delinquentSlotDistance !== undefined) opts.delinquentSlotDistance = source.delinquentSlotDistance;
  return Object.keys(opts).length > 0 ? [opts] : [];
}

