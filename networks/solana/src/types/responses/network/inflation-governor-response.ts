/**
 * Response type for getInflationGovernor RPC method
 */

import { createCodec, ensureNumber } from '../../codec';

export interface InflationGovernorResponse {
  initial: number;
  terminal: number;
  taper: number;
  foundation: number;
  foundationTerm: number;
}

export const InflationGovernorResponseCodec = createCodec<InflationGovernorResponse>({
  initial: ensureNumber,
  terminal: ensureNumber,
  taper: ensureNumber,
  foundation: ensureNumber,
  foundationTerm: ensureNumber
});

export function createInflationGovernorResponse(data: unknown): InflationGovernorResponse {
  return InflationGovernorResponseCodec.create(data);
}

