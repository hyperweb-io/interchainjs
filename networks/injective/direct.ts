import { DirectSignerBase } from "@interchainjs/cosmos/direct";
import { Encoder, SignerOptions } from "@interchainjs/cosmos/types";
import { Auth, HttpEndpoint } from "@interchainjs/types";
import { constructAuthFromWallet } from "@interchainjs/utils";

import { defaultPublicKeyConfig, defaultSignerOptions } from "./defaults";
import { InjectiveDirectSigner, InjectiveDirectWallet } from "./types";

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
    wallet: InjectiveDirectWallet,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const auth: Auth = await constructAuthFromWallet(
      wallet,
      options?.publicKey?.isCompressed ?? defaultPublicKeyConfig.isCompressed
    );
    const signer = new DirectSigner(auth, encoders, endpoint, options);
    return signer;
  }
}
