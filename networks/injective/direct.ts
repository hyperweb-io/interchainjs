import {
  Auth,
  BaseWallet,
  HttpEndpoint,
  ISignDoc,
  ISigner,
  IWallet,
  SignerConfig,
} from "@interchainjs/types";
import { defaultPublicKeyConfig, defaultSignerOptions } from "./defaults";
import { DirectSignerBase } from "@interchainjs/cosmos/direct";
import { Encoder, SignDoc, SignerOptions } from "@interchainjs/cosmos/types";
import { getAccountFromAuth } from "./utils";
import { SignResponseFromAuth } from "@interchainjs/cosmos/utils";
import { constructAuthFromWallet } from "@interchainjs/utils";

export class DirectSigner extends DirectSignerBase
  implements ISigner.InjectiveDirectSigner {
  constructor(
    auth: Auth,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options: SignerOptions = defaultSignerOptions.Cosmos
  ) {
    super(auth, encoders, endpoint, options);
  }

  static async fromWallet(
    wallet: BaseWallet<ISignDoc.CosmosDirectDoc>,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const auth: Auth = await constructAuthFromWallet(
      wallet,
      options?.publicKey?.isCompressed ?? defaultPublicKeyConfig.isCompressed
    );
    const signer = new DirectSigner(auth, encoders, endpoint, options);
    signer.signDoc = wallet.sign;
    return signer;
  }

  static toWallet(
    auth: Auth,
    config: SignerConfig = defaultSignerOptions.Cosmos
  ): IWallet.InjectiveDirectWallet {
    return {
      getAccount: async () => getAccountFromAuth(auth, config.publicKey),
      sign: async (doc: SignDoc) =>
        SignResponseFromAuth.signDirect(auth, doc, config),
    };
  }
}
