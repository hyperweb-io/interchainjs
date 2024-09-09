import { AminoSignerBase } from '@interchainjs/cosmos/signers/amino';
import { BaseCosmosTxBuilder } from '@interchainjs/cosmos/base';
import { BaseCosmosTxBuilderContext } from '@interchainjs/cosmos/base/builder-context';
import {
  AminoConverter,
  Encoder,
  SignerOptions,
} from '@interchainjs/cosmos/types';
import { Auth, HttpEndpoint } from '@interchainjs/types';

import { InjAccount } from '../accounts/inj-account';
import { AminoSigner } from './amino';
import { Eip712TxBuilder } from '../builder/eip712-tx-builder';
import { defaultSignerOptions } from '../defaults';
import {InjectiveEip712Doc } from '../types';

export class Eip712SignerBase extends AminoSignerBase<InjectiveEip712Doc> {
  readonly aminoSigner: AminoSigner;

  constructor(
    auth: Auth,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    options: SignerOptions = defaultSignerOptions.Ethereum
  ) {
    super(auth, encoders, converters, endpoint, options);
    this.aminoSigner = new AminoSigner(
      auth,
      encoders,
      converters,
      endpoint,
      options
    );
  }

  async getAccount() {
    return new InjAccount(
      await this.getPrefix(),
      this.auth,
      this.config.publicKey.isCompressed
    );
  }

  getTxBuilder(): BaseCosmosTxBuilder<InjectiveEip712Doc> {
    return new Eip712TxBuilder(new BaseCosmosTxBuilderContext(this));
  }
}

export class Eip712Signer extends Eip712SignerBase {
  static async fromWallet(
    _wallet: any,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    throw new Error('Not implemented yet');
  }

  static async fromWalletToSigning(
    _wallet: any,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    throw new Error('Not implemented yet');
  }
}
