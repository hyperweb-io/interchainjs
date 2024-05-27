import { AminoSignerBase } from "@interchainjs/cosmos/amino";
import { BaseCosmosTxBuilder } from "@interchainjs/cosmos/base";
import { BaseCosmosTxBuilderContext } from "@interchainjs/cosmos/base/builder-context";
import {
  AminoConverter,
  Encoder,
  SignerOptions,
} from "@interchainjs/cosmos/types";
import { Auth, HttpEndpoint } from "@interchainjs/types";
import { constructAuthFromWallet } from "@interchainjs/utils";

import { AminoSigner } from "./amino";
import { Eip712TxBuilder } from "./builder/eip712-tx-builder";
import { defaultPublicKeyConfig, defaultSignerOptions } from "./defaults";
import { InjectiveEip712Doc, InjectiveEip712Wallet } from "./types";

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

  getTxBuilder(): BaseCosmosTxBuilder<InjectiveEip712Doc> {
    return new Eip712TxBuilder(new BaseCosmosTxBuilderContext(this));
  }
}

export class Eip712Signer extends Eip712SignerBase {
  static async fromWallet(
    wallet: InjectiveEip712Wallet,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const auth: Auth = await constructAuthFromWallet(
      wallet,
      options?.publicKey?.isCompressed ?? defaultPublicKeyConfig.isCompressed
    );
    const signer = new Eip712Signer(
      auth,
      encoders,
      converters,
      endpoint,
      options
    );
    return signer;
  }
}
