import { ConsensusStateParams } from './consensus-state-params';
import { EncodedConsensusStateParams } from './encoded-consensus-state-params';

export { ConsensusStateParams } from './consensus-state-params';
export { EncodedConsensusStateParams } from './encoded-consensus-state-params';

export function encodeConsensusStateParams(params: ConsensusStateParams): EncodedConsensusStateParams {
  // No encoding needed for empty params
  return params;
}