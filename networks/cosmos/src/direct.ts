import { Auth, HttpEndpoint } from '@interchainjs/types';

import { BaseCosmosTxBuilder, CosmosBaseSigner, CosmosDocSigner } from './base';
import { BaseCosmosTxBuilderContext } from './base/builder-context';
import { DirectSigBuilder, DirectTxBuilder } from './builder/direct-tx-builder';
import {
  CosmosDirectDoc,
  CosmosDirectSigner,
  Encoder,
  ICosmosWallet,
  SignerOptions,
} from './types';

export class DirectDocSigner extends CosmosDocSigner<CosmosDirectDoc> {
  getTxBuilder(): DirectSigBuilder {
    return new DirectSigBuilder(new BaseCosmosTxBuilderContext(this));
  }
}

export class DirectSignerBase extends CosmosBaseSigner<CosmosDirectDoc> {
  constructor(
    auth: Auth,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    super(auth, encoders, endpoint, options);
  }

  getTxBuilder(): BaseCosmosTxBuilder<CosmosDirectDoc> {
    return new DirectTxBuilder(new BaseCosmosTxBuilderContext(this));
  }
}

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

  static async fromWallet(
    wallet: ICosmosWallet,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const [auth] = (await wallet.getAccounts()).map((acct) => acct.auth);
    return new DirectSigner(auth, encoders, endpoint, options);
  }

  static async fromWalletToSigners(
    wallet: ICosmosWallet,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const auths = (await wallet.getAccounts()).map((acct) => acct.auth);

    return auths.map((auth) => {
      return new DirectSigner(auth, encoders, endpoint, options);
    });
  }
}
