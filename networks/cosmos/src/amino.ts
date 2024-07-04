import { Auth, HttpEndpoint } from '@interchainjs/types';

import { BaseCosmosTxBuilder, CosmosBaseSigner, CosmosDocSigner } from './base';
import { BaseCosmosTxBuilderContext } from './base/builder-context';
import { AminoSigBuilder, AminoTxBuilder } from './builder/amino-tx-builder';
import {
  AminoConverter,
  CosmosAminoDoc,
  CosmosAminoSigner,
  Encoder,
  SignerOptions,
} from './types';
import { AminoDocAuth } from './types/docAuth';
import { OfflineAminoSigner } from './types/wallet';

export class AminoDocSigner extends CosmosDocSigner<CosmosAminoDoc> {
  getTxBuilder(): AminoSigBuilder {
    return new AminoSigBuilder(new BaseCosmosTxBuilderContext(this));
  }
}

export abstract class AminoSignerBase<
  AminoDoc,
> extends CosmosBaseSigner<AminoDoc> {
  readonly converters: AminoConverter[];

  constructor(
    auth: Auth,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    super(auth, encoders, endpoint, options);
    this.converters = converters;
  }

  addConverters = (converters: AminoConverter[]) => {
    this.converters.push(...converters);
  };

  getConverter = (aminoType: string) => {
    const converter = this.converters.find(
      (converter) => converter.aminoType === aminoType
    );
    if (!converter) {
      throw new Error(
        `No such Converter for type ${aminoType}, please add corresponding Converter with method \`addConverters\``
      );
    }
    return converter;
  };

  getConverterFromTypeUrl = (typeUrl: string) => {
    const converter = this.converters.find(
      (converter) => converter.typeUrl === typeUrl
    );
    if (!converter) {
      throw new Error(
        `No such Converter for typeUrl ${typeUrl}, please add corresponding Converter with method \`addConverter\``
      );
    }
    return converter;
  };
}

export class AminoSigner
  extends AminoSignerBase<CosmosAminoDoc>
  implements CosmosAminoSigner
{
  constructor(
    auth: Auth,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    super(auth, encoders, converters, endpoint, options);
  }

  getTxBuilder(): BaseCosmosTxBuilder<CosmosAminoDoc> {
    return new AminoTxBuilder(new BaseCosmosTxBuilderContext(this));
  }

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
