/**
 * HealthResponse type and creator
 */


// Health response type - returns null for healthy nodes
export type HealthResponse = null;

// Creator function
export function createHealthResponse(data: any): HealthResponse {
  // Health endpoint returns null when healthy
  return null;
}
