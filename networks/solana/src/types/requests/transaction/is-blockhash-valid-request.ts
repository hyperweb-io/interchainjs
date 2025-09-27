/**
 * Request for isBlockhashValid
 */

import { BaseSolanaRequest, SolanaCommitmentOptions } from '../base';

export interface IsBlockhashValidRequest extends BaseSolanaRequest<SolanaCommitmentOptions> {
  blockhash: string;
}

export type EncodedIsBlockhashValidRequest = [string, SolanaCommitmentOptions?];

export function encodeIsBlockhashValidRequest(req: IsBlockhashValidRequest): EncodedIsBlockhashValidRequest {
  const arr: EncodedIsBlockhashValidRequest = [req.blockhash];
  if (req.options && Object.keys(req.options).length > 0) {
    (arr as any).push(req.options);
  }
  return arr;
}

