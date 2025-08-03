import { HashFunction, IWalletConfig } from '@interchainjs/types';

/**
 * Configuration interface for Cosmos wallets
 * Extends IWalletConfig with Cosmos-specific options
 */
export interface ICosmosWalletConfig extends IWalletConfig {
  /**
   * The function to hash the sign document
   * if message.hash is undefined, then no need to hash the sign doc
   */
  message?: {
    hash: string | HashFunction;
  }
}