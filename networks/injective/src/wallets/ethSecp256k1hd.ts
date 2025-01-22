import { EthSecp256k1Auth } from '@interchainjs/auth/ethSecp256k1';
import { AccountData, AddrDerivation, Auth, IGenericOfflineSignArgs, SIGN_MODE, SignerConfig } from '@interchainjs/types';

import { AminoDocSigner } from '../signers/amino';
import { defaultSignerOptions, defaultWalletOptions } from '../defaults';
import { DirectDocSigner } from '../signers/direct';
import {
  CosmosAminoDoc,
  CosmosDirectDoc,
  ICosmosAccount,
  ICosmosWallet,
} from '@interchainjs/cosmos/types';
import {
  HDWallet,
} from '@interchainjs/cosmos/wallets/secp256k1hd';
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
export class EthSecp256k1HDWallet extends HDWallet {
  constructor(
    accounts: ICosmosAccount[],
    options: SignerConfig
  ) {
    const opts = { ...defaultSignerOptions.Cosmos, ...options };
    super(accounts, opts);
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
    const opts = { ...defaultWalletOptions, ...options };

    return super.fromMnemonic(mnemonic, derivations, opts);
  }
}
