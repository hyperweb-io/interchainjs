/**
 * GetBlock response type
 * This is a passthrough as block structure varies by options/versions.
 */

export type BlockResponse = unknown;

export function createBlockResponse(data: unknown): BlockResponse {
  return data as any;
}

