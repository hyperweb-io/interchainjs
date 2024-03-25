import {
  Auth,
  BaseWallet,
  ISignDoc,
  HttpEndpoint,
  ISigner,
  SignerConfig,
  StdFee,
  IWallet,
} from "@uni-sign/types";
import { Encoder, Message, AminoConverter, DocOptions } from "./types";
import { toAminoMsgs } from "./utils/amino";
import { BaseSigner, getAccountFromAuth, SignResponseFromAuth } from "./utils";
import { SignMode } from "./types";
import { defaultSignerConfig } from "./defaults";
import { constructAuthFromWallet } from "@uni-sign/utils";

export class AminoSignerBase extends BaseSigner<
  ISignDoc.CosmosAminoDoc,
  DocOptions
> {
  readonly converters: AminoConverter[];

  constructor(
    auth: Auth,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    config: SignerConfig = defaultSignerConfig
  ) {
    super(auth, encoders, endpoint, config);
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

  async createDoc(
    messages: Message[],
    fee?: StdFee,
    memo?: string,
    options?: DocOptions
  ) {
    const { txRaw, fee: _fee } = await this.createTxRaw(
      messages,
      options?.signMode ?? SignMode.SIGN_MODE_LEGACY_AMINO_JSON,
      fee,
      memo,
      options
    );

    const signDoc: ISignDoc.CosmosAminoDoc = {
      chain_id: options?.chainId ?? (await this.queryClient.getChainId()),
      account_number: (
        options?.accountNumber ?? (await this.queryClient.getAccountNumber())
      ).toString(),
      sequence: (
        options?.sequence ?? (await this.queryClient.getSequence())
      ).toString(),
      fee,
      msgs: toAminoMsgs(messages, this.getConverterFromTypeUrl),
      memo: memo ?? "",
    };
    return { signDoc, tx: txRaw };
  }

  signDoc = async (doc: ISignDoc.CosmosAminoDoc) => {
    return SignResponseFromAuth.signAmino(this.auth, doc, this.config);
  };
}

export class AminoSigner extends AminoSignerBase
  implements ISigner.CosmosAminoSigner {
  constructor(
    auth: Auth,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    config: SignerConfig = defaultSignerConfig
  ) {
    super(auth, encoders, converters, endpoint, config);
  }

  static async fromWallet(
    wallet: BaseWallet<ISignDoc.CosmosAminoDoc>,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    config: SignerConfig = defaultSignerConfig
  ) {
    const auth: Auth = await constructAuthFromWallet(wallet, config);
    const signer = new AminoSigner(
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
    config: SignerConfig = defaultSignerConfig
  ): IWallet.CosmosAminoWallet {
    return {
      getAccount: async () => getAccountFromAuth(auth, config),
      sign: async (doc: ISignDoc.CosmosAminoDoc) =>
        SignResponseFromAuth.signAmino(auth, doc, config),
    };
  }
}
