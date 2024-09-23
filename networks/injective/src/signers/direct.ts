import { DirectSignerBase } from '@interchainjs/cosmos/signers/direct';
import { CosmosDirectDoc, Encoder, ICosmosGeneralOfflineSigner, SignerOptions } from '@interchainjs/cosmos/types';
import { DirectDocAuth } from '@interchainjs/cosmos/types/docAuth';
import { isOfflineDirectSigner, OfflineDirectSigner } from '@interchainjs/cosmos/types/wallet';
import { Auth, HttpEndpoint } from '@interchainjs/types';

import { InjAccount } from '../accounts/inj-account';
import { defaultSignerOptions } from '../defaults';
import { InjectiveDirectSigner } from '../types';
import { CosmosDocSigner } from '@interchainjs/cosmos/base';
import { DirectSigBuilder } from '@interchainjs/cosmos/builder/direct-tx-builder';
import { BaseCosmosTxBuilderContext } from '@interchainjs/cosmos/base/builder-context';

/**
 * DirectDocSigner is a signer for Direct document.
 */
export class DirectDocSigner extends CosmosDocSigner<CosmosDirectDoc> {
  getTxBuilder(): DirectSigBuilder {
    return new DirectSigBuilder(new BaseCosmosTxBuilderContext(this));
  }
}


/**
 * DirectDocSigner is a signer for inj Direct document.
 */
export class DirectSigner
  extends DirectSignerBase
  implements InjectiveDirectSigner
{
  constructor(
    auth: Auth,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options: SignerOptions = defaultSignerOptions.Cosmos
  ) {
    const opt = { ...defaultSignerOptions.Cosmos, ...options };
    super(auth, encoders, endpoint, opt);
  }

  /**
   * Get inj account from the signer.
   */
  async getAccount() {
    return new InjAccount(
      await this.getPrefix(),
      this.auth,
      this.config.publicKey.isCompressed
    );
  }

  /**
   * Create DirectSigner from wallet.
   * If there're multiple accounts in the wallet, it will return the first one by default.
   */
  static async fromWallet(
    signer: OfflineDirectSigner | ICosmosGeneralOfflineSigner,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    let auth: DirectDocAuth;

    if(isOfflineDirectSigner(signer)){
      [auth] = await DirectDocAuth.fromOfflineSigner(signer);
    } else {
      [auth] = await DirectDocAuth.fromGeneralOfflineSigner(signer);
    }

    return new DirectSigner(auth, encoders, endpoint, options);
  }

  /**
   * Create DirectSigners from wallet.
   * If there're multiple accounts in the wallet, it will return all of the signers.
   */
  static async fromWalletToSigners(
    signer: OfflineDirectSigner | ICosmosGeneralOfflineSigner,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    let auths: DirectDocAuth[];

    if(isOfflineDirectSigner(signer)) {
      auths = await DirectDocAuth.fromOfflineSigner(signer);
    } else {
      auths = await DirectDocAuth.fromGeneralOfflineSigner(signer);
    }

    return auths.map((auth) => {
      return new DirectSigner(auth, encoders, endpoint, options);
    });
  }
}
