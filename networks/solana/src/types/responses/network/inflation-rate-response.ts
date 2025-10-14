/**
 * Response type for getInflationRate RPC method
 */

import { createCodec, ensureNumber } from '../../codec';

export interface InflationRateResponse {
  epoch: number;
  epochInflationRate: number;
  total: number;
  validator: number;
  foundation: number;
}

export const InflationRateResponseCodec = createCodec<InflationRateResponse>({
  epoch: ensureNumber,
  epochInflationRate: ensureNumber,
  total: ensureNumber,
  validator: ensureNumber,
  foundation: ensureNumber
});

export function createInflationRateResponse(data: unknown): InflationRateResponse {
  return InflationRateResponseCodec.create(data);
}

