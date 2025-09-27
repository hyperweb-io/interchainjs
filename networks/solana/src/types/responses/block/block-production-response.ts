/**
 * BlockProduction response
 */

export interface BlockProductionRange {
  firstSlot: number;
  lastSlot: number;
}

export interface BlockProductionResponse {
  value: {
    byIdentity: Record<string, [number, number]>; // identity -> [leaderSlots, blocksProduced]
    range: BlockProductionRange;
  };
}

export function createBlockProductionResponse(data: unknown): BlockProductionResponse {
  const result = (data as any) ?? {};
  return { value: result.value } as BlockProductionResponse;
}

