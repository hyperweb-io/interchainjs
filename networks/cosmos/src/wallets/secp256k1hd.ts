import { Secp256k1Auth } from '@interchainjs/auth/secp256k1';
import { AddrDerivation, Auth, SignerConfig, SIGN_MODE, IGeneralOfflineSignArgs } from '@interchainjs/types';

import { AminoDocSigner } from '../signers/amino';
import { defaultSignerConfig } from '../defaults';
import { DirectDocSigner } from '../signers/direct';
import {
  CosmosAccount,
  CosmosAminoDoc,
  CosmosDirectDoc,
  ICosmosAccount,
  ICosmosWallet,
} from '../types';
import {
  AminoSignResponse,
  DirectSignResponse,
  ICosmosGeneralOfflineSigner,
  OfflineAminoSigner,
  OfflineDirectSigner,
  WalletOptions,
} from '../types/wallet';
import { BaseCosmosWallet } from '../base/base-wallet';

/**
 * Cosmos HD Wallet for secp256k1
 */
export class Secp256k1HDWallet extends BaseCosmosWallet<DirectDocSigner, AminoDocSigner>
{
  constructor(
    accounts: ICosmosAccount[],
    options: SignerConfig
  ) {
    const opts = { ...defaultSignerConfig, ...options };
    super(accounts, opts);
  }

  getDirectDocSigner(auth: Auth, config: SignerConfig): DirectDocSigner {
    return new DirectDocSigner(auth, config);
  }

  getAminoDocSigner(auth: Auth, config: SignerConfig): AminoDocSigner {
    return new AminoDocSigner(auth, config);
  }

  /**
   * Create a new HD wallet from mnemonic
   * @param mnemonic
   * @param derivations infos for derivate addresses
   * @param options wallet options
   * @returns HD wallet
   */
  static fromMnemonic(
    mnemonic: string,
    derivations: AddrDerivation[],
    options?: WalletOptions
  ) {
    const hdPaths = derivations.map((derivation) => derivation.hdPath);

    const auths: Auth[] = Secp256k1Auth.fromMnemonic(mnemonic, hdPaths, {
      bip39Password: options?.bip39Password,
    });

    const accounts = auths.map((auth, i) => {
      const derivation = derivations[i];
      return new CosmosAccount(derivation.prefix, auth);
    });

    return new Secp256k1HDWallet(accounts, options?.signerConfig);
  }
}
