import { AminoSignerBase } from "@interchainjs/cosmos/amino";
import {
  AminoConverter,
  CosmosAminoDoc,
  Encoder,
  SignerOptions,
} from "@interchainjs/cosmos/types";
import { SignResponseFromAuth } from "@interchainjs/cosmos/utils";
import { Auth, HttpEndpoint, SignerConfig } from "@interchainjs/types";
import { constructAuthFromWallet } from "@interchainjs/utils";

import { defaultPublicKeyConfig, defaultSignerOptions } from "./defaults";
import { InjectiveAminoSigner, InjectiveAminoWallet } from "./types";
import { getAccountFromAuth } from "./utils";

export class AminoSigner
  extends AminoSignerBase
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
    signer.signDoc = wallet.sign;
    return signer;
  }

  static toWallet(
    auth: Auth,
    config: SignerConfig = defaultSignerOptions.Cosmos
  ): InjectiveAminoWallet {
    return {
      getAccount: async () => getAccountFromAuth(auth, config.publicKey),
      sign: async (doc: CosmosAminoDoc) =>
        SignResponseFromAuth.signAmino(auth, doc, config),
    };
  }
}
