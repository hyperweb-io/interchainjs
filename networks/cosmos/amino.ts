import { Auth, HttpEndpoint, SignerConfig } from "@interchainjs/types";
import { constructAuthFromWallet } from "@interchainjs/utils";

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
import { getAccountFromAuth, SignResponseFromAuth } from "./utils";

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
    const auth: Auth = await constructAuthFromWallet(
      wallet,
      options?.publicKey?.isCompressed ??
        defaultSignerConfig.publicKey.isCompressed
    );
    const signer = new AminoSigner(
      auth,
      encoders,
      converters,
      endpoint,
      options
    );
    // TODO:: figure out how to set signDoc
    // signer.signDoc = wallet.sign;
    return signer;
  }

  static toWallet(
    auth: Auth,
    config: SignerConfig = defaultSignerConfig
  ): CosmosAminoWallet {
    return {
      getAccount: async () => getAccountFromAuth(auth, config),
      sign: async (doc: CosmosAminoDoc) =>
        SignResponseFromAuth.signAmino(auth, doc, config),
    };
  }
}
