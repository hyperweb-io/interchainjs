import { Auth, HttpEndpoint } from "@interchainjs/types";
import { constructAuthsFromWallet } from "@interchainjs/utils";

import { BaseCosmosTxBuilder, CosmosBaseSigner } from "./base";
import { BaseCosmosTxBuilderContext } from "./base/builder-context";
import { DirectTxBuilder } from "./builder/direct-tx-builder";
import { defaultSignerConfig } from "./defaults";
import {
  CosmosBaseWallet,
  CosmosDirectDoc,
  CosmosDirectSigner,
  Encoder,
  SignerOptions,
} from "./types";

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
    wallet: CosmosBaseWallet,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const [auth] = await constructAuthsFromWallet(
      wallet,
      options?.publicKey?.isCompressed ??
        defaultSignerConfig.publicKey.isCompressed
    );
    return new DirectSigner(auth, encoders, endpoint, options);
  }

  static async fromWalletToSigners(
    wallet: CosmosBaseWallet,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const auths = await constructAuthsFromWallet(
      wallet,
      options?.publicKey?.isCompressed ??
        defaultSignerConfig.publicKey.isCompressed
    );

    return auths.map((auth) => {
      return new DirectSigner(auth, encoders, endpoint, options);
    });
  }
}
