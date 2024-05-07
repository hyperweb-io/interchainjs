import {
  Auth,
  BaseWallet,
  HttpEndpoint,
  ISignDoc,
  ISigner,
  IWallet,
  SignerConfig,
} from "@interchainjs/types";
import { AminoSignerBase } from "@interchainjs/cosmos/amino";
import {
  Encoder,
  AminoConverter,
  SignerOptions,
} from "@interchainjs/cosmos/types";
import { defaultPublicKeyConfig, defaultSignerOptions } from "./defaults";
import { SignResponseFromAuth } from "@interchainjs/cosmos/utils";
import { getAccountFromAuth } from "./utils";
import { constructAuthFromWallet } from "@interchainjs/utils";

export class AminoSigner extends AminoSignerBase
  implements ISigner.InjectiveAminoSigner {
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
    wallet: IWallet.InjectiveAminoWallet,
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
  ): IWallet.InjectiveAminoWallet {
    return {
      getAccount: async () => getAccountFromAuth(auth, config.publicKey),
      sign: async (doc: ISignDoc.CosmosAminoDoc) =>
        SignResponseFromAuth.signAmino(auth, doc, config),
    };
  }
}
