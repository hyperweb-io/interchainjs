/**
 * Request type for getRecentPerformanceSamples RPC method
 */

export interface GetRecentPerformanceSamplesRequest {
  limit?: number;
}

export type EncodedGetRecentPerformanceSamplesRequest = [number?];

export function encodeGetRecentPerformanceSamplesRequest(
  request?: GetRecentPerformanceSamplesRequest
): EncodedGetRecentPerformanceSamplesRequest {
  if (!request || request.limit === undefined) return [];
  return [request.limit];
}

