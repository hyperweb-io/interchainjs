// networks/ethereum/src/types/responses/sync-status.ts

/**
 * Sync status response from eth_syncing
 */
export interface SyncStatus {
  startingBlock: string;
  currentBlock: string;
  highestBlock: string;
  pulledStates?: string;
  knownStates?: string;
}

/**
 * Enhanced sync status with computed fields
 */
export interface EnhancedSyncStatus extends SyncStatus {
  syncProgress: number; // Percentage (0-100)
  blocksRemaining: number;
  isSyncing: boolean;
  estimatedTimeRemaining?: number; // In seconds
}
