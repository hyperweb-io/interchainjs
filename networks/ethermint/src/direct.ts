import { DirectSignerBase } from '@interchainjs/cosmos/direct';
import { Encoder, SignerOptions } from '@interchainjs/cosmos/types';
import { DirectDocAuth } from '@interchainjs/cosmos/types/docAuth';
import { OfflineDirectSigner } from '@interchainjs/cosmos/types/wallet';
import { Auth, HttpEndpoint } from '@interchainjs/types';

import { defaultSignerOptions } from './defaults';
import { InjectiveDirectSigner } from './types';

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
    signer: OfflineDirectSigner,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const [auth] = await DirectDocAuth.fromOfflineSigner(signer);
    return new DirectSigner(auth, encoders, endpoint, options);
  }

  static async fromWalletToSigners(
    signer: OfflineDirectSigner,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const auths = await DirectDocAuth.fromOfflineSigner(signer);

    return auths.map((auth) => {
      return new DirectSigner(auth, encoders, endpoint, options);
    });
  }
}
