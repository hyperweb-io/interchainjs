import {
  Auth,
  BaseWallet,
  HttpEndpoint,
  ISignDoc,
  IWallet,
  SignDocResponse,
  SignerConfig,
  StdFee,
} from "@uni-sign/types";
import {
  defaultTimeoutHeight,
  defaultSignerConfig,
  defaultEip712Types,
  defaultDomainOptions,
} from "./defaults";
import {
  AminoConverter,
  Encoder,
  Message,
  SignMode,
} from "@uni-sign/cosmos/types";
import { getAccountFromAuth, toEthTypes, updateDomain } from "./utils";
import { SignResponseFromAuth } from "@uni-sign/ethereum/utils";
import { BaseSigner } from "@uni-sign/cosmos/utils";
import { DocOptions } from "./types";
import { constructAuthFromWallet } from "@uni-sign/utils";
import { AminoSigner } from "./amino";

export class Eip712Signer extends BaseSigner<
  ISignDoc.InjectiveEip712Doc,
  DocOptions
> {
  readonly aminoSigner: AminoSigner;

  constructor(
    auth: Auth,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    config: SignerConfig = defaultSignerConfig.Ethereum
  ) {
    super(auth, encoders, endpoint, config);
    this.aminoSigner = new AminoSigner(
      auth,
      encoders,
      converters,
      endpoint,
      config
    );
  }

  static async fromWallet(
    wallet: BaseWallet<ISignDoc.InjectiveEip712Doc>,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    config?: SignerConfig
  ) {
    const auth: Auth = await constructAuthFromWallet(wallet, config);
    const signer = new Eip712Signer(
      auth,
      encoders,
      converters,
      endpoint,
      config
    );
    signer.signDoc = wallet.sign;
    return signer;
  }

  static toWallet(
    auth: Auth,
    config: SignerConfig = defaultSignerConfig.Ethereum
  ): IWallet.InjectiveEip712Wallet {
    return {
      getAccount: async () => getAccountFromAuth(auth, config),
      sign: async (doc: ISignDoc.InjectiveEip712Doc) =>
        SignResponseFromAuth.signEip712Data(
          auth,
          doc,
          config
        ) as SignDocResponse<ISignDoc.InjectiveEip712Doc>,
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

  async createDoc(
    messages: Message[],
    fee?: StdFee,
    memo?: string,
    options?: DocOptions
  ) {
    messages.forEach((msg) => {
      if (msg.typeUrl !== messages[0].typeUrl) {
        throw new Error("Doesn't support multiple message types");
      }
    });
    const timeoutHeight = await this.toAbsoluteTimeoutHeight(
      options?.timeoutHeight ?? defaultTimeoutHeight
    );
    const created = await this.aminoSigner.createDoc(messages, fee, memo, {
      ...options,
      timeoutHeight,
      signMode: options?.signMode ?? SignMode.SIGN_MODE_DIRECT,
      extensionOptions: [
        ...(options?.extensionOptions ?? []),
        {
          typeUrl: "/injective.types.v1beta1.ExtensionOptionsWeb3Tx",
          value: new Uint8Array([8, 1]),
        },
      ],
    });
    const signDoc: ISignDoc.InjectiveEip712Doc = {
      primaryType: defaultEip712Types.primaryType,
      domain: updateDomain(defaultDomainOptions, options),
      types: {
        ...defaultEip712Types.types,
        ...toEthTypes(created.signDoc.msgs[0].value),
      },
      message: {
        ...created.signDoc,
        timeout_height: timeoutHeight.value.toString(),
        fee: {
          amount: created.signDoc.fee.amount,
          gas: created.signDoc.fee.gas,
          feePayer: created.signDoc.fee.payer,
        },
      },
    };
    return { signDoc, tx: created.tx };
  }

  signDoc = async (doc: ISignDoc.InjectiveEip712Doc) => {
    return SignResponseFromAuth.signEip712Data(
      this.auth,
      doc,
      this.config
    ) as SignDocResponse<ISignDoc.InjectiveEip712Doc>;
  };
}
