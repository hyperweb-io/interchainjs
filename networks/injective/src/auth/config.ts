import { IWalletConfig } from '@interchainjs/types';

/**
 * Creates a wallet configuration for Injective
 * @param passphrase - Optional passphrase for key derivation
 * @returns Wallet configuration object
 */
export function createInjectiveConfig(passphrase?: string): IWalletConfig {
  return {
    privateKeyConfig: {
      algo: 'secp256k1',
      passphrase
    },
    publicKeyConfig: {
      compressed: true
    },
    addressConfig: {
      strategy: 'injective'
    },
    addressPrefix: 'inj'
  };
}