import { Auth, HttpEndpoint } from '@interchainjs/types';

import { BaseCosmosTxBuilder, CosmosBaseSigner, CosmosDocSigner } from './base';
import { BaseCosmosTxBuilderContext } from './base/builder-context';
import { DirectSigBuilder, DirectTxBuilder } from './builder/direct-tx-builder';
import {
  CosmosAccount,
  CosmosDirectDoc,
  CosmosDirectSigner,
  Encoder,
  SignerOptions,
} from './types';
import { DirectDocAuth } from './types/docAuth';
import { OfflineDirectSigner } from './types/wallet';

/**
 * DirectDocSigner is a signer for Direct document.
 */
export class DirectDocSigner extends CosmosDocSigner<CosmosDirectDoc> {
  getTxBuilder(): DirectSigBuilder {
    return new DirectSigBuilder(new BaseCosmosTxBuilderContext(this));
  }
}

/**
 * DirectSignerBase is a base signer for Direct document.
 */
export class DirectSignerBase extends CosmosBaseSigner<CosmosDirectDoc> {
  constructor(
    auth: Auth,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    super(auth, encoders, endpoint, options);
  }

  /**
   * Get account from the signer.
   */
  async getAccount() {
    return new CosmosAccount(
      await this.getPrefix(),
      this.auth,
      this.config.publicKey.isCompressed
    );
  }

  getTxBuilder(): BaseCosmosTxBuilder<CosmosDirectDoc> {
    return new DirectTxBuilder(new BaseCosmosTxBuilderContext(this));
  }
}

/**
 * DirectSigner is a signer for Direct document.
 */
export class DirectSigner
  extends DirectSignerBase
  implements CosmosDirectSigner
{
  constructor(
    auth: Auth,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    super(auth, encoders, endpoint, options);
  }

  /**
   * Create DirectSigner from wallet.
   * If there're multiple accounts in the wallet, it will return the first one by default.
   */
  static async fromWallet(
    signer: OfflineDirectSigner,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const [auth] = await DirectDocAuth.fromOfflineSigner(signer);
    return new DirectSigner(auth, encoders, endpoint, options);
  }

  /**
   * Create DirectSigners from wallet.
   * If there're multiple accounts in the wallet, it will return all of the signers.
   */
  static async fromWalletToSigners(
    signer: OfflineDirectSigner,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const auths = await DirectDocAuth.fromOfflineSigner(signer);

    return auths.map((auth) => {
      return new DirectSigner(auth, encoders, endpoint, options);
    });
  }
}
