import { CosmosBaseSigner } from "@interchainjs/cosmos/base";
import {
  AminoConverter,
  Encoder,
  SignerOptions,
} from "@interchainjs/cosmos/types";
import { SignResponseFromAuth } from "@interchainjs/ethereum/utils";
import {
  Auth,
  HttpEndpoint,
  SignDocResponse,
  SignerConfig,
} from "@interchainjs/types";
import { constructAuthFromWallet } from "@interchainjs/utils";

import { AminoSigner } from "./amino";
import { defaultPublicKeyConfig, defaultSignerOptions } from "./defaults";
import { DocOptions, InjectiveEip712Doc, InjectiveEip712Wallet } from "./types";
import { getAccountFromAuth } from "./utils";

export class Eip712Signer extends CosmosBaseSigner<
  InjectiveEip712Doc,
  DocOptions
> {
  readonly aminoSigner: AminoSigner;

  constructor(
    auth: Auth,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    options: SignerOptions = defaultSignerOptions.Ethereum
  ) {
    super(auth, encoders, endpoint, options);
    this.aminoSigner = new AminoSigner(
      auth,
      encoders,
      converters,
      endpoint,
      options
    );
  }

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
    signer.signDoc = wallet.sign;
    return signer;
  }

  static toWallet(
    auth: Auth,
    config: SignerConfig = defaultSignerOptions.Ethereum
  ): InjectiveEip712Wallet {
    return {
      getAccount: async () => getAccountFromAuth(auth, config.publicKey),
      sign: async (doc: InjectiveEip712Doc) =>
        SignResponseFromAuth.signEip712Data(
          auth,
          doc,
          config
        ) as SignDocResponse<InjectiveEip712Doc>,
    };
  }

  get converters() {
    return this.aminoSigner.converters;
  }
  addConverters = (converters: AminoConverter[]) =>
    this.aminoSigner.addConverters(converters);
  getConverter = (aminoType: string) =>
    this.aminoSigner.getConverter(aminoType);
  getConverterFromTypeUrl = (typeUrl: string) =>
    this.aminoSigner.getConverterFromTypeUrl(typeUrl);

  // async createDoc(
  //   messages: Message[],
  //   fee?: StdFee,
  //   memo?: string,
  //   options?: DocOptions
  // ) {
  //   messages.forEach((msg) => {
  //     if (msg.typeUrl !== messages[0].typeUrl) {
  //       throw new Error("Doesn't support multiple message types");
  //     }
  //   });
  //   const timeoutHeight = await this.toAbsoluteTimeoutHeight(
  //     options?.timeoutHeight ?? defaultTimeoutHeight
  //   );
  //   const created = await this.aminoSigner.createDoc(messages, fee, memo, {
  //     ...options,
  //     timeoutHeight,
  //     signMode: options?.signMode ?? SignMode.SIGN_MODE_DIRECT,
  //     extensionOptions: [
  //       ...(options?.extensionOptions ?? []),
  //       {
  //         typeUrl: "/injective.types.v1beta1.ExtensionOptionsWeb3Tx",
  //         value: new Uint8Array([8, 1]),
  //       },
  //     ],
  //   });
  //   const signDoc: ISignDoc.InjectiveEip712Doc = {
  //     primaryType: defaultEip712Types.primaryType,
  //     domain: updateDomain(defaultDomainOptions, options),
  //     types: {
  //       ...defaultEip712Types.types,
  //       ...toEthTypes(created.signDoc.msgs[0].value),
  //     },
  //     message: {
  //       ...created.signDoc,
  //       timeout_height: timeoutHeight.value.toString(),
  //       fee: {
  //         amount: created.signDoc.fee.amount,
  //         gas: created.signDoc.fee.gas,
  //         feePayer: created.signDoc.fee.payer,
  //       },
  //     },
  //   };
  //   return { signDoc, tx: created.tx };
  // }

  signDoc = async (doc: InjectiveEip712Doc) => {
    return SignResponseFromAuth.signEip712Data(
      this.auth,
      doc,
      this.config
    ) as SignDocResponse<InjectiveEip712Doc>;
  };
}
