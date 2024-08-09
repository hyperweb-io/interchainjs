import { DirectSignerBase } from '@interchainjs/cosmos/direct';
import { Encoder, SignerOptions } from '@interchainjs/cosmos/types';
import { DirectDocAuth } from '@interchainjs/cosmos/types/docAuth';
import { OfflineDirectSigner } from '@interchainjs/cosmos/types/wallet';
import { Auth, HttpEndpoint } from '@interchainjs/types';

import { InjAccount } from './accounts/inj-account';
import { defaultSignerOptions } from './defaults';
import { InjectiveDirectSigner } from './types';

/**
 * DirectDocSigner is a signer for inj Direct document.
 */
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
    const opt = { ...defaultSignerOptions.Cosmos, ...options };
    super(auth, encoders, endpoint, opt);
  }

  /**
   * Get inj account from the signer.
   */
  async getAccount() {
    return new InjAccount(
      await this.getPrefix(),
      this.auth,
      this.config.publicKey.isCompressed
    );
  }

  /**
   * create DirectSigner from wallet.
   * if there're multiple accounts in the wallet, it will return the first one by default.
   */
  static async fromWallet(
    signer: OfflineDirectSigner,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const [auth] = await DirectDocAuth.fromOfflineSigner(signer);
    return new DirectSigner(auth, encoders, endpoint, options);
  }

  /**
   * create DirectSigners from wallet.
   * if there're multiple accounts in the wallet, it will return all of the signers.
   */
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
