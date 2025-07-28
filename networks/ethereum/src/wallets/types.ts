import { IWalletConfig } from '@interchainjs/types';

/**
 * Configuration interface for Ethereum wallets
 * Extends IWalletConfig with Ethereum-specific options
 */
export interface IEthereumWalletConfig extends IWalletConfig {
  // Ethereum wallets don't need additional configuration beyond the base IWalletConfig
  // This interface is kept for consistency and future extensibility
}
