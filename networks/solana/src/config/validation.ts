/**
 * Solana Configuration Validation
 */

import { SolanaNetworkConfig } from './network';
import { ISolanaClientConfig, SolanaSignArgs } from '../types/client';

export interface SolanaConfigValidation {
  validateNetworkConfig(config: SolanaNetworkConfig): boolean;
  validateClientConfig(config: ISolanaClientConfig): boolean;
  validateSignArgs(args: SolanaSignArgs): boolean;
}

export class DefaultSolanaConfigValidation implements SolanaConfigValidation {
  validateNetworkConfig(config: SolanaNetworkConfig): boolean {
    return !!(config.name && config.chainId && config.rpcEndpoint);
  }

  validateClientConfig(config: ISolanaClientConfig): boolean {
    return !!(config.endpoint);
  }

  validateSignArgs(args: SolanaSignArgs): boolean {
    return !!(args.messages && Array.isArray(args.messages));
  }
}

export const configValidator = new DefaultSolanaConfigValidation();
