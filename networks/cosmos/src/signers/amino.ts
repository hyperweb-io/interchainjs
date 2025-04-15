import { Auth, BroadcastOptions, DeliverTxResponse, EncodeObject, HttpEndpoint, StdFee, TelescopeGeneratedCodec } from '@interchainjs/types';

import { BaseCosmosTxBuilder, CosmosBaseSigner, CosmosDocSigner } from '../base';
import { BaseCosmosTxBuilderContext } from '../base/builder-context';
import { AminoSigBuilder, AminoTxBuilder } from '../builder/amino-tx-builder';
import {
  AminoConverter,
  CosmosAccount,
  CosmosAminoDoc,
  CosmosAminoSigner,
  CosmosSignArgs,
  Encoder,
  SignerOptions,
} from '../types';
import { AminoDocAuth } from '../types/docAuth';
import { IAminoGenericOfflineSigner, isOfflineAminoSigner, OfflineAminoSigner } from '../types/wallet';
import { toConverter } from '../utils';
import { ISigningClient } from '@interchainjs/cosmos-types/helper-func-types';

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
  readonly converters: (AminoConverter | TelescopeGeneratedCodec<any, any, any>)[];

  constructor(
    auth: Auth,
    encoders: (Encoder | TelescopeGeneratedCodec<any, any, any>)[],
    converters: (AminoConverter | TelescopeGeneratedCodec<any, any, any>)[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions,
    broadcastOptions?: BroadcastOptions
  ) {
    super(auth, encoders, endpoint, options, broadcastOptions);
    this.converters = converters;
  }

  /**
   * register converters
   */
  addConverters = (converters: (AminoConverter | TelescopeGeneratedCodec<any, any, any>)[]) => {
    // Create a Set of existing typeUrls for quick lookup
    const existingTypeUrls = new Set(this.converters.map(c => c.typeUrl));

    // Filter out converters with duplicate typeUrls
    const newConverters = converters.filter(converter => !existingTypeUrls.has(converter.typeUrl));

    // Add only the unique converters
    this.converters.push(...newConverters.map(toConverter));
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
    return toConverter(converter);
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
    return toConverter(converter);
  };
}

/**
 * signer for Amino document.
 * one signer for one account.
 */
export class AminoSigner
  extends AminoSignerBase<CosmosAminoDoc>
  implements CosmosAminoSigner, ISigningClient {

  constructor(
    auth: Auth,
    encoders: (Encoder | TelescopeGeneratedCodec<any, any, any>)[],
    converters: (AminoConverter | TelescopeGeneratedCodec<any, any, any>)[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions,
    broadcastOptions?: BroadcastOptions
  ) {
    super(auth, encoders, converters, endpoint, options, broadcastOptions);
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
    encoders: (Encoder | TelescopeGeneratedCodec<any, any, any>)[],
    converters: (AminoConverter | TelescopeGeneratedCodec<any, any, any>)[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions,
    broadcastOptions?: BroadcastOptions
  ) {
    let auth: AminoDocAuth;

    if (isOfflineAminoSigner(signer)) {
      [auth] = await AminoDocAuth.fromOfflineSigner(signer);
    } else {
      [auth] = await AminoDocAuth.fromGenericOfflineSigner(signer);
    }

    return new AminoSigner(auth, encoders, converters, endpoint, options, broadcastOptions);
  }

  /**
   * create AminoSigners from wallet.
   * if there're multiple accounts in the wallet, it will return all of the signers.
   */
  static async fromWalletToSigners(
    signer: OfflineAminoSigner | IAminoGenericOfflineSigner,
    encoders: (Encoder | TelescopeGeneratedCodec<any, any, any>)[],
    converters: (AminoConverter | TelescopeGeneratedCodec<any, any, any>)[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions,
    broadcastOptions?: BroadcastOptions
  ) {
    let auths: AminoDocAuth[];

    if (isOfflineAminoSigner(signer)) {
      auths = await AminoDocAuth.fromOfflineSigner(signer);
    } else {
      auths = await AminoDocAuth.fromGenericOfflineSigner(signer);
    }

    return auths.map((auth) => {
      return new AminoSigner(auth, encoders, converters, endpoint, options, broadcastOptions);
    });
  }
}
