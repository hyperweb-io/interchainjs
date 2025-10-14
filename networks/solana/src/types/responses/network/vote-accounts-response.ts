/**
 * Response type for getVoteAccounts RPC method
 */

import { createCodec, ensureNumber } from '../../codec';
import { apiToBigInt } from '../../codec/converters';

export interface EpochCreditEntry { epoch: number; credits: number; previousCredits: number; }

export interface VoteAccountInfo {
  votePubkey: string;
  nodePubkey: string;
  activatedStake: bigint;
  commission: number;
  epochVoteAccount: boolean;
  lastVote: number;
  rootSlot?: number;
  epochCredits?: EpochCreditEntry[];
}

export interface VoteAccountsResponse {
  current: VoteAccountInfo[];
  delinquent: VoteAccountInfo[];
}

const EpochCreditEntryCodec = createCodec<EpochCreditEntry>({
  epoch: { required: true, converter: ensureNumber },
  credits: { required: true, converter: ensureNumber },
  previousCredits: { required: true, source: 2 as any, converter: ensureNumber }
});

const VoteAccountInfoCodec = createCodec<VoteAccountInfo>({
  votePubkey: { required: true, source: 'votePubkey', converter: (v: unknown) => {
    if (typeof v !== 'string') throw new Error('votePubkey must be string');
    return v;
  } },
  nodePubkey: { required: true, source: 'nodePubkey', converter: (v: unknown) => {
    if (typeof v !== 'string') throw new Error('nodePubkey must be string');
    return v;
  } },
  activatedStake: { required: true, source: 'activatedStake', converter: (v: unknown) => {
    const b = apiToBigInt(v);
    if (b === undefined) throw new Error('activatedStake required');
    return b;
  } },
  commission: { required: true, converter: ensureNumber },
  epochVoteAccount: { required: true, source: 'epochVoteAccount', converter: (v: unknown) => Boolean(v) },
  lastVote: { required: true, converter: ensureNumber },
  rootSlot: { source: 'rootSlot', converter: (v: unknown) => (v === undefined ? undefined : ensureNumber(v)) },
  epochCredits: { source: 'epochCredits', converter: (v: unknown) => {
    if (!Array.isArray(v)) return undefined;
    // epochCredits is array of [epoch, credits, previousCredits]
    return v.map((triple) => {
      if (!Array.isArray(triple) || triple.length < 3) throw new Error('Invalid epochCredits entry');
      return {
        epoch: ensureNumber(triple[0]),
        credits: ensureNumber(triple[1]),
        previousCredits: ensureNumber(triple[2])
      } as EpochCreditEntry;
    });
  } }
});

export function createVoteAccountsResponse(data: unknown): VoteAccountsResponse {
  if (!data || typeof data !== 'object') throw new Error('Invalid vote accounts response');
  const obj = data as any;
  const current = Array.isArray(obj.current) ? obj.current.map((e: any) => VoteAccountInfoCodec.create(e)) : [];
  const delinquent = Array.isArray(obj.delinquent) ? obj.delinquent.map((e: any) => VoteAccountInfoCodec.create(e)) : [];
  return { current, delinquent };
}

