import { IWalletConfig } from '@interchainjs/types';

/**
 * Creates a wallet configuration for Ethereum
 * @param passphrase - Optional passphrase for key derivation
 * @returns Wallet configuration object
 */
export function createEthereumConfig(passphrase?: string): IWalletConfig {
  return {
    privateKeyConfig: {
      algo: 'secp256k1',
      passphrase
    },
    publicKeyConfig: {
      compressed: false  // Ethereum uses uncompressed keys
    },
    addressConfig: {
      strategy: 'ethereum'
    },
    addressPrefix: '0x'
  };
}