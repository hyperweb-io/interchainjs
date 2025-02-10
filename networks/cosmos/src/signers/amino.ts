import { Auth, HttpEndpoint } from '@interchainjs/types';

import { BaseCosmosTxBuilder, CosmosBaseSigner, CosmosDocSigner } from '../base';
import { BaseCosmosTxBuilderContext } from '../base/builder-context';
import { AminoSigBuilder, AminoTxBuilder } from '../builder/amino-tx-builder';
import {
  AminoConverter,
  CosmosAccount,
  CosmosAminoDoc,
  CosmosAminoSigner,
  Encoder,
  SignerOptions,
} from '../types';
import { AminoDocAuth } from '../types/docAuth';
import { IAminoGenericOfflineSigner, isOfflineAminoSigner, OfflineAminoSigner } from '../types/wallet';

/**
 * AminoDocSigner is a signer for Amino document.
 */
export class AminoDocSigner extends CosmosDocSigner<CosmosAminoDoc> {
  getTxBuilder(): AminoSigBuilder {
    return new AminoSigBuilder(new BaseCosmosTxBuilderContext(this));
  }
}

/**
 * AminoSignerBase is a base signer for Amino document.
 */
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

  /**
   * register converters
   */
  addConverters = (converters: AminoConverter[]) => {
    // Create a Set of existing typeUrls for quick lookup
    const existingTypeUrls = new Set(this.converters.map(c => c.typeUrl));

    // Filter out converters with duplicate typeUrls
    const newConverters = converters.filter(converter => !existingTypeUrls.has(converter.typeUrl));

    // Add only the unique converters
    this.converters.push(...newConverters);
  };

  /**
   * get converter by aminoType
   */
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

  /**
   * get converter by typeUrl
   */
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

/**
 * signer for Amino document.
 * one signer for one account.
 */
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

  /**
   * create AminoSigner from wallet.
   * if there're multiple accounts in the wallet, it will return the first one by default.
   */
  static async fromWallet(
    signer: OfflineAminoSigner | IAminoGenericOfflineSigner,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    let auth: AminoDocAuth;

    if(isOfflineAminoSigner(signer)){
      [auth] = await AminoDocAuth.fromOfflineSigner(signer);
    } else {
      [auth] = await AminoDocAuth.fromGenericOfflineSigner(signer);
    }

    return new AminoSigner(auth, encoders, converters, endpoint, options);
  }

  /**
   * create AminoSigners from wallet.
   * if there're multiple accounts in the wallet, it will return all of the signers.
   */
  static async fromWalletToSigners(
    signer: OfflineAminoSigner | IAminoGenericOfflineSigner,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    let auths: AminoDocAuth[];

    if(isOfflineAminoSigner(signer)) {
      auths = await AminoDocAuth.fromOfflineSigner(signer);
    } else {
      auths = await AminoDocAuth.fromGenericOfflineSigner(signer);
    }

    return auths.map((auth) => {
      return new AminoSigner(auth, encoders, converters, endpoint, options);
    });
  }
}
