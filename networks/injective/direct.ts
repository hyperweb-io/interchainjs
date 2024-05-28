import { DirectSignerBase } from "@interchainjs/cosmos/direct";
import { Encoder, SignerOptions } from "@interchainjs/cosmos/types";
import { Auth, HttpEndpoint } from "@interchainjs/types";
import { constructAuthsFromWallet } from "@interchainjs/utils";

import { defaultPublicKeyConfig, defaultSignerOptions } from "./defaults";
import { InjectiveBaseWallet,InjectiveDirectSigner } from "./types";

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
    super(auth, encoders, endpoint, options);
  }

  static async fromWallet(
    wallet: InjectiveBaseWallet,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const [auth] = await constructAuthsFromWallet(
      wallet,
      options?.publicKey?.isCompressed ?? defaultPublicKeyConfig.isCompressed
    );
    return new DirectSigner(auth, encoders, endpoint, options);
  }

  static async fromWalletToSigners(
    wallet: InjectiveBaseWallet,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const auths = await constructAuthsFromWallet(
      wallet,
      options?.publicKey?.isCompressed ?? defaultPublicKeyConfig.isCompressed
    );
    return auths.map((auth) => {
      return new DirectSigner(auth, encoders, endpoint, options);
    });
  }
}
