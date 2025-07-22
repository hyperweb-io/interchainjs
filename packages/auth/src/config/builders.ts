import { IWalletConfig, IAddressStrategy, AddrDerivation } from '@interchainjs/types';

/**
 * Creates a generic wallet configuration
 * @param options Configuration options
 * @returns Wallet configuration object
 */
export function createWalletConfig(options: {
  algo?: string;
  passphrase?: string;
  compressed?: boolean;
  strategy: IAddressStrategy | string;
  derivations: AddrDerivation[];
}): IWalletConfig {
  return {
    privateKeyConfig: {
      algo: options.algo || 'secp256k1',
      passphrase: options.passphrase
    },
    publicKeyConfig: {
      compressed: options.compressed !== undefined ? options.compressed : true
    },
    addressConfig: {
      strategy: options.strategy
    },
    derivations: options.derivations
  };
}