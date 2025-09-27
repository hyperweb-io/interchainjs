/**
 * LeaderSchedule response: mapping of identity -> array of leader slots within the epoch
 */

export type LeaderScheduleResponse = Record<string, number[]> | null;

export function createLeaderScheduleResponse(data: unknown): LeaderScheduleResponse {
  // The RPC may return null if leader schedule unavailable
  if (data === null) return null;
  const obj = (data as any) ?? {};
  return obj as Record<string, number[]>;
}

