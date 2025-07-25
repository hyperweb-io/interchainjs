import { AddrDerivation, HDPath } from '@interchainjs/types';
import { ICosmosWalletConfig } from '../wallets/types';
import { Sha256 } from '@interchainjs/crypto';

/**
 * Creates a wallet configuration for Cosmos chains
 * @param prefix - The address prefix (default: 'cosmos')
 * @param passphrase - Optional passphrase for key derivation
 * @returns Cosmos wallet configuration object
 */
export function createCosmosConfig(derivations: AddrDerivation[] = [], passphrase?: string): ICosmosWalletConfig {
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
    derivations: addrDerivation,
    hashSignDoc: (bytes: Uint8Array) => {
      // Default SHA256 hashing for Cosmos
      return new Sha256(bytes).digest();
    }
  };
}