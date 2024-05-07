import {
  Auth,
  BaseWallet,
  ISignDoc,
  HttpEndpoint,
  ISigner,
  SignerConfig,
  StdFee,
  IWallet,
} from "@interchainjs/types";
import {
  Encoder,
  Message,
  AminoConverter,
  DocOptions,
  SignerOptions,
} from "./types";
import { toAminoMsgs } from "./utils/amino";
import {
  CosmosBaseSigner,
  getAccountFromAuth,
  SignResponseFromAuth,
} from "./utils";
import { SignMode } from "./types";
import { defaultSignerConfig } from "./defaults";
import { constructAuthFromWallet } from "@interchainjs/utils";

export class AminoSignerBase extends CosmosBaseSigner<
  ISignDoc.CosmosAminoDoc,
  DocOptions
> {
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
    options?: SignerOptions
  ) {
    super(auth, encoders, converters, endpoint, options);
  }

  static async fromWallet(
    wallet: IWallet.CosmosAminoWallet,
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
