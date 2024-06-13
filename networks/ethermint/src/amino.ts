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
import { Auth, HttpEndpoint } from '@interchainjs/types';
import { constructAuthsFromWallet } from '@interchainjs/utils';

import { defaultPublicKeyConfig, defaultSignerOptions } from './defaults';
import { InjectiveAminoSigner, InjectiveBaseWallet } from './types';

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
    wallet: InjectiveBaseWallet,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const [auth] = await constructAuthsFromWallet(
      wallet,
      options?.publicKey?.isCompressed ?? defaultPublicKeyConfig.isCompressed
    );
    return new AminoSigner(auth, encoders, converters, endpoint, options);
  }

  static async fromWalletToSigners(
    wallet: InjectiveBaseWallet,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const auths = await constructAuthsFromWallet(
      wallet,
      options?.publicKey?.isCompressed ?? defaultPublicKeyConfig.isCompressed
    );
    return auths.map((auth) => {
      return new AminoSigner(auth, encoders, converters, endpoint, options);
    });
  }
}
