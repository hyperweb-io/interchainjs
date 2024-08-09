import { AminoSignerBase } from '@interchainjs/cosmos/amino';
import { BaseCosmosTxBuilder } from '@interchainjs/cosmos/base';
import { BaseCosmosTxBuilderContext } from '@interchainjs/cosmos/base/builder-context';
import { AminoTxBuilder } from '@interchainjs/cosmos/builder/amino-tx-builder';
import {
  AminoConverter,
  CosmosAminoDoc,
  Encoder,
  SignerOptions,
} from '@interchainjs/cosmos/types';
import { AminoDocAuth } from '@interchainjs/cosmos/types/docAuth';
import { OfflineAminoSigner } from '@interchainjs/cosmos/types/wallet';
import { Auth, HttpEndpoint } from '@interchainjs/types';

import { InjAccount } from './accounts/inj-account';
import { defaultSignerOptions } from './defaults';
import { InjectiveAminoSigner } from './types';

/**
 * AminoDocSigner is a signer for inj Amino document.
 */
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
    const opt = { ...defaultSignerOptions.Cosmos, ...options };
    super(auth, encoders, converters, endpoint, opt);
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

  getTxBuilder(): BaseCosmosTxBuilder<CosmosAminoDoc> {
    return new AminoTxBuilder(new BaseCosmosTxBuilderContext(this));
  }

  /**
   * create AminoSigner from wallet.
   * if there're multiple accounts in the wallet, it will return the first one by default.
   */
  static async fromWallet(
    signer: OfflineAminoSigner,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const [auth] = await AminoDocAuth.fromOfflineSigner(signer);

    return new AminoSigner(auth, encoders, converters, endpoint, options);
  }

  /**
   * create AminoSigners from wallet.
   * if there're multiple accounts in the wallet, it will return all of the signers.
   */
  static async fromWalletToSigners(
    signer: OfflineAminoSigner,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const auths = await AminoDocAuth.fromOfflineSigner(signer);

    return auths.map((auth) => {
      return new AminoSigner(auth, encoders, converters, endpoint, options);
    });
  }
}
