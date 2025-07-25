import { IWalletConfig } from '@interchainjs/types';

/**
 * Configuration interface for Cosmos wallets
 * Extends IWalletConfig with Cosmos-specific options
 */
export interface ICosmosWalletConfig extends IWalletConfig {
  /**
   * The function to hash the sign document
   * if hashSignDoc is undefined, then no need to hash the sign doc
   */
  hashSignDoc?(bytes: Uint8Array): Uint8Array;
}