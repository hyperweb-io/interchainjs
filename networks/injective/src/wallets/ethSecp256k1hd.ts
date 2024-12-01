import { EthSecp256k1Auth } from '@interchainjs/auth/ethSecp256k1';
import { AccountData, AddrDerivation, Auth, IGenericOfflineSignArgs, SIGN_MODE, SignerConfig } from '@interchainjs/types';

import { AminoDocSigner } from '../signers/amino';
import { defaultSignerOptions } from '../defaults';
import { DirectDocSigner } from '../signers/direct';
import {
  CosmosAminoDoc,
  CosmosDirectDoc,
  ICosmosAccount,
  ICosmosWallet,
} from '@interchainjs/cosmos/types';
import { ICosmosGenericOfflineSigner } from "@interchainjs/cosmos/types/wallet";
import { BaseCosmosWallet } from "@interchainjs/cosmos/base/base-wallet";
import {
  AminoSignResponse,
  DirectSignResponse,
  OfflineAminoSigner,
  OfflineDirectSigner,
  WalletOptions,
} from '@interchainjs/cosmos/types/wallet';
import { InjAccount } from '../accounts/inj-account';

/**
 * Cosmos HD Wallet for secp256k1
 */
export class EthSecp256k1HDWallet extends BaseCosmosWallet<DirectDocSigner, AminoDocSigner>
{
  constructor(
    accounts: ICosmosAccount[],
    options: SignerConfig
  ) {
    const opts = { ...defaultSignerOptions.Cosmos, ...options };
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

    const auths: Auth[] = EthSecp256k1Auth.fromMnemonic(mnemonic, hdPaths, {
      bip39Password: options?.bip39Password,
    });

    const accounts = auths.map((auth, i) => {
      const derivation = derivations[i];
      return new InjAccount(derivation.prefix, auth);
    });

    return new EthSecp256k1HDWallet(accounts, options?.signerConfig);
  }
}
