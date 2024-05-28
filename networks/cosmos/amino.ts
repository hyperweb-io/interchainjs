import { Auth, HttpEndpoint } from "@interchainjs/types";
import { constructAuthsFromWallet } from "@interchainjs/utils";

import { BaseCosmosTxBuilder, CosmosBaseSigner } from "./base";
import { BaseCosmosTxBuilderContext } from "./base/builder-context";
import { AminoTxBuilder } from "./builder/amino-tx-builder";
import { defaultSignerConfig } from "./defaults";
import {
  AminoConverter,
  CosmosAminoDoc,
  CosmosAminoSigner,
  CosmosAminoWallet,
  Encoder,
  SignerOptions,
} from "./types";

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
    wallet: CosmosAminoWallet,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const [auth] = await constructAuthsFromWallet(
      wallet,
      options?.publicKey?.isCompressed ??
        defaultSignerConfig.publicKey.isCompressed
    );
    return new AminoSigner(auth, encoders, converters, endpoint, options);
  }

  static async fromWalletToSigners(
    wallet: CosmosAminoWallet,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const auths = await constructAuthsFromWallet(
      wallet,
      options?.publicKey?.isCompressed ??
        defaultSignerConfig.publicKey.isCompressed
    );

    return auths.map((auth) => {
      return new AminoSigner(auth, encoders, converters, endpoint, options);
    });
  }
}
