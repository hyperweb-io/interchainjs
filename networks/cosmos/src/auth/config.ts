import { AddrDerivation, HDPath, IWalletConfig } from '@interchainjs/types';

/**
 * Creates a wallet configuration for Cosmos chains
 * @param prefix - The address prefix (default: 'cosmos')
 * @param passphrase - Optional passphrase for key derivation
 * @returns Wallet configuration object
 */
export function createCosmosConfig(derivations: AddrDerivation[] = [], passphrase?: string): IWalletConfig {
  const addrDerivation = derivations.length > 0 ? derivations : [{ hdPath: HDPath.cosmos().toString(), prefix: 'cosmos' }];

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
    derivations: addrDerivation
  };
}