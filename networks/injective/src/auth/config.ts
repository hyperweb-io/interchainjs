import { AddrDerivation, HDPath, IWalletConfig } from '@interchainjs/types';

/**
 * Creates a wallet configuration for Injective
 * @param passphrase - Optional passphrase for key derivation
 * @returns Wallet configuration object
 */
export function createInjectiveConfig(derivations: AddrDerivation[] = [], passphrase?: string): IWalletConfig {
  const addrDerivation = derivations.length > 0 ? derivations : [{ hdPath: HDPath.cosmos().toString(), prefix: 'inj' }];

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
    derivations: addrDerivation
  };
}