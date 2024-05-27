import { AminoSignerBase } from "@interchainjs/cosmos/amino";
import { BaseCosmosTxBuilder } from "@interchainjs/cosmos/base";
import { BaseCosmosTxBuilderContext } from "@interchainjs/cosmos/base/builder-context";
import { AminoTxBuilder } from "@interchainjs/cosmos/builder/amino-tx-builder";
import {
  AminoConverter,
  CosmosAminoDoc,
  Encoder,
  SignerOptions,
} from "@interchainjs/cosmos/types";
import { Auth, HttpEndpoint } from "@interchainjs/types";
import { constructAuthFromWallet } from "@interchainjs/utils";

import { defaultPublicKeyConfig, defaultSignerOptions } from "./defaults";
import { InjectiveAminoSigner, InjectiveAminoWallet } from "./types";

export class AminoSigner
  extends AminoSignerBase<CosmosAminoDoc>
  implements InjectiveAminoSigner
{
  constructor(
    auth: Auth,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    options: SignerOptions = defaultSignerOptions.Cosmos
  ) {
    super(auth, encoders, converters, endpoint, options);
  }

  getTxBuilder(): BaseCosmosTxBuilder<CosmosAminoDoc> {
    return new AminoTxBuilder(new BaseCosmosTxBuilderContext(this));
  }

  static async fromWallet(
    wallet: InjectiveAminoWallet,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const auth: Auth = await constructAuthFromWallet(
      wallet,
      options?.publicKey?.isCompressed ?? defaultPublicKeyConfig.isCompressed
    );
    const signer = new AminoSigner(
      auth,
      encoders,
      converters,
      endpoint,
      options
    );
    return signer;
  }
}
