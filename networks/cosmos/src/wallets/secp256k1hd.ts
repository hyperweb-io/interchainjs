import { Secp256k1Auth } from '@interchainjs/auth/secp256k1';
import { AddrDerivation, Auth, SignerConfig, SIGN_MODE, IGenericOfflineSignArgs } from '@interchainjs/types';

import { AminoDocSigner } from '../signers/amino';
import { defaultSignerConfig, defaultWalletOptions } from '../defaults';
import { DirectDocSigner } from '../signers/direct';
import {
  CosmosAccount,
  CosmosAminoDoc,
  CosmosDirectDoc,
  ICosmosAccount,
  ICosmosWallet,
  SignerOptions,
} from '../types';
import {
  AminoSignResponse,
  DirectSignResponse,
  ICosmosGenericOfflineSigner,
  OfflineAminoSigner,
  OfflineDirectSigner,
  WalletOptions,
} from '../types/wallet';
import { BaseCosmosWallet } from '../base/base-wallet';

export class HDWallet extends BaseCosmosWallet<DirectDocSigner, AminoDocSigner> {
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
    const walletOpts = { ...defaultWalletOptions, ...options };

    const hdPaths = derivations.map((derivation) => derivation.hdPath);

    let auths: Auth[];

    if (walletOpts?.createAuthsFromMnemonic) {
      auths = walletOpts.createAuthsFromMnemonic(mnemonic, hdPaths, {
        bip39Password: walletOpts?.bip39Password,
      });
    } else {
      auths = Secp256k1Auth.fromMnemonic(mnemonic, hdPaths, {
        bip39Password: walletOpts?.bip39Password,
      });
    }

    const accounts = auths.map((auth, i) => {
      const derivation = derivations[i];

      const opts = walletOpts.signerConfig as SignerOptions;

      if (opts?.createAccount) {
        return new opts.createAccount(derivation.prefix, auth, opts.publicKey.isCompressed);
      } else {
        return new CosmosAccount(derivation.prefix, auth);
      }
    });

    return new HDWallet(accounts, walletOpts?.signerConfig);
  }
}

/**
 * Cosmos HD Wallet for secp256k1
 */
export class Secp256k1HDWallet extends HDWallet {

}
