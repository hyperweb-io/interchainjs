import { ICosmosWalletConfig } from '@interchainjs/cosmos/wallets/types';
import { AddrDerivation, HDPath, IWalletConfig } from '@interchainjs/types';

/**
 * Creates a wallet configuration for Injective with Ethereum-style address derivation
 * @param passphrase - Optional passphrase for key derivation
 * @returns Wallet configuration object
 */
export function createInjectiveEthConfig(derivations: AddrDerivation[] = [], passphrase?: string): ICosmosWalletConfig {
  const addrDerivation = derivations.length > 0 ? derivations : [{ hdPath: HDPath.cosmos().toString(), prefix: 'inj' }];

  return {
    privateKeyConfig: {
      algo: 'secp256k1',
      passphrase
    },
    publicKeyConfig: {
      compressed: false  // Ethereum-style uses uncompressed keys
    },
    addressConfig: {
      strategy: 'injective-eth'
    },
    derivations: addrDerivation,
    message: {
      hash: 'keccak256'
    }
  };
}