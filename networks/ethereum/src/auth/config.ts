import { AddrDerivation, HDPath, IWalletConfig } from '@interchainjs/types';

/**
 * Creates a wallet configuration for Ethereum
 * @param passphrase - Optional passphrase for key derivation
 * @returns Wallet configuration object
 */
export function createEthereumConfig(derivations: AddrDerivation[] = [], passphrase?: string): IWalletConfig {
  const addrDerivation = derivations.length > 0 ? derivations : [{ hdPath: HDPath.eth().toString(), prefix: '0x' }];

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
    derivations: addrDerivation
  };
}