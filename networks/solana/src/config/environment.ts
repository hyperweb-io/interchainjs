/**
 * Solana Environment Configuration
 */

import { SolanaNetworkConfig, SOLANA_NETWORKS } from './network';

export interface SolanaEnvironmentConfig {
  networks: Record<string, SolanaNetworkConfig>;
  defaultNetwork: string;
}

export const DEFAULT_ENVIRONMENT: SolanaEnvironmentConfig = {
  networks: SOLANA_NETWORKS,
  defaultNetwork: 'devnet'
};

export function getNetworkConfig(network: string): SolanaNetworkConfig {
  const config = SOLANA_NETWORKS[network];
  if (!config) {
    throw new Error(`Unknown network: ${network}`);
  }
  return config;
}
