import { Auth, HttpEndpoint, TelescopeGeneratedCodec } from '@interchainjs/types';

import { BaseCosmosTxBuilder, CosmosBaseSigner, CosmosDocSigner } from '../base';
import { BaseCosmosTxBuilderContext } from '../base/builder-context';
import { DirectSigBuilder, DirectTxBuilder } from '../builder/direct-tx-builder';
import {
  CosmosAccount,
  CosmosDirectDoc,
  CosmosDirectSigner,
  Encoder,
  SignerOptions,
} from '../types';
import { DirectDocAuth } from '../types/docAuth';
import { IDirectGenericOfflineSigner, isOfflineDirectSigner, OfflineDirectSigner } from '../types/wallet';

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
    encoders: (Encoder | TelescopeGeneratedCodec<any, any, any>)[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    super(auth, encoders, endpoint, options);
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
  implements CosmosDirectSigner {
  constructor(
    auth: Auth,
    encoders: (Encoder | TelescopeGeneratedCodec<any, any, any>)[],
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
    signer: OfflineDirectSigner | IDirectGenericOfflineSigner,
    encoders: (Encoder | TelescopeGeneratedCodec<any, any, any>)[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    let auth: DirectDocAuth;

    if (isOfflineDirectSigner(signer)) {
      [auth] = await DirectDocAuth.fromOfflineSigner(signer);
    } else {
      [auth] = await DirectDocAuth.fromGenericOfflineSigner(signer);
    }

    return new DirectSigner(auth, encoders, endpoint, options);
  }

  /**
   * Create DirectSigners from wallet.
   * If there're multiple accounts in the wallet, it will return all of the signers.
   */
  static async fromWalletToSigners(
    signer: OfflineDirectSigner | IDirectGenericOfflineSigner,
    encoders: (Encoder | TelescopeGeneratedCodec<any, any, any>)[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    let auths: DirectDocAuth[];

    if (isOfflineDirectSigner(signer)) {
      auths = await DirectDocAuth.fromOfflineSigner(signer);
    } else {
      auths = await DirectDocAuth.fromGenericOfflineSigner(signer);
    }

    return auths.map((auth) => {
      return new DirectSigner(auth, encoders, endpoint, options);
    });
  }
}
