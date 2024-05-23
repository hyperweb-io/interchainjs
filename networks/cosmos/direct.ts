import { SignDoc } from "@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx";
import { Auth, HttpEndpoint, SignerConfig } from "@interchainjs/types";
import { constructAuthFromWallet } from "@interchainjs/utils";

import { BaseCosmosTxBuilder, CosmosBaseSigner } from "./base";
import { BaseCosmosTxBuilderContext } from "./base/builder-context";
import { DirectTxBuilder } from "./builder/direct-tx-builder";
import { defaultSignerConfig } from "./defaults";
import {
  CosmosDirectDoc,
  CosmosDirectSigner,
  CosmosDirectWallet,
  Encoder,
  SignerOptions,
} from "./types";
import { getAccountFromAuth, SignResponseFromAuth } from "./utils";

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
    wallet: CosmosDirectWallet,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const auth: Auth = await constructAuthFromWallet(
      wallet,
      options?.publicKey?.isCompressed ??
        defaultSignerConfig.publicKey.isCompressed
    );
    const signer = new DirectSigner(auth, encoders, endpoint, options);
    // TODO:: figure out how to set signDoc
    // signer.signDoc = wallet.sign;
    return signer;
  }

  static toWallet(
    auth: Auth,
    config: SignerConfig = defaultSignerConfig
  ): CosmosDirectWallet {
    return {
      getAccount: async () => getAccountFromAuth(auth, config),
      sign: async (doc: SignDoc) =>
        SignResponseFromAuth.signDirect(auth, doc, config),
    };
  }
}
