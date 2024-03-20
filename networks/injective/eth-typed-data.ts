import { Auth, BaseWallet, HttpEndpoint, SignerConfig } from "@uni-sign/types";
import { defaultEthTypedData, defaultSignerConfig } from "./defaults";
import {
  AminoConverter,
  Encoder,
  FeeOptions,
  Message,
  SignerOptions,
  StdFee,
  TxBodyOptions,
} from "@uni-sign/cosmos/types";
import { getAccountFromAuth, toEthTypes } from "./utils";
import { SignResponseFromAuth } from "@uni-sign/ethereum/utils";
import { BaseSigner } from "@uni-sign/cosmos/utils";
import { EthTypedDataWallet, EthTypedData } from "./types";
import { constructAuthFromWallet } from "@uni-sign/utils";
import { AminoSigner } from "./amino";

export class EthTypedDataSigner extends BaseSigner<EthTypedData> {
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
    wallet: BaseWallet<EthTypedData>,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    config?: SignerConfig
  ) {
    const auth: Auth = await constructAuthFromWallet(wallet, config);
    const signer = new EthTypedDataSigner(
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
  ): EthTypedDataWallet {
    return {
      getAccount: async () => getAccountFromAuth(auth, config),
      sign: async (doc: EthTypedData) =>
        SignResponseFromAuth.signEip712TypedData(auth, doc, config),
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
    options?: FeeOptions & SignerOptions & TxBodyOptions
  ) {
    const created = await this.aminoSigner.createDoc(
      messages,
      fee,
      memo,
      options
    );
    const signDoc: EthTypedData = {
      ...defaultEthTypedData,
      types: {
        ...defaultEthTypedData.types,
        ...toEthTypes(created.signDoc.msgs[0]), // ONLY one message type supported?
      },
      message: created.signDoc,
    };
    return { signDoc, txRaw: created.txRaw };
  }

  signDoc = async (doc: EthTypedData) => {
    return SignResponseFromAuth.signEip712TypedData(
      this.auth,
      doc,
      this.config
    );
  };
}
