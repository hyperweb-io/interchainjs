import { IWalletConfig } from '@interchainjs/types';

/**
 * Creates a wallet configuration for Cosmos chains
 * @param prefix - The address prefix (default: 'cosmos')
 * @param passphrase - Optional passphrase for key derivation
 * @returns Wallet configuration object
 */
export function createCosmosConfig(prefix: string = 'cosmos', passphrase?: string): IWalletConfig {
  return {
    privateKeyConfig: {
      algo: 'secp256k1',
      passphrase
    },
    publicKeyConfig: {
      compressed: true
    },
    addressConfig: {
      strategy: 'cosmos'
    },
    addressPrefix: prefix
  };
}