import {
  Auth,
  HttpEndpoint,
  ISigner,
  SignerConfig,
  ISignDoc,
  StdFee,
  BaseWallet,
  IWallet,
} from "@interchainjs/types";
import { Encoder, Message, DocOptions, SignDoc, SignerOptions } from "./types";
import {
  CosmosBaseSigner,
  SignResponseFromAuth,
  getAccountFromAuth,
} from "./utils";
import { SignMode } from "./types";
import { defaultSignerConfig } from "./defaults";
import { constructAuthFromWallet } from "@interchainjs/utils";

export class DirectSignerBase extends CosmosBaseSigner<
  ISignDoc.CosmosDirectDoc,
  DocOptions
> {
  constructor(
    auth: Auth,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    super(auth, encoders, endpoint, options);
  }

  async createDoc(
    messages: Message[],
    fee?: StdFee,
    memo?: string,
    options?: DocOptions
  ) {
    const { txRaw } = await this.createTxRaw(
      messages,
      options?.signMode ?? SignMode.SIGN_MODE_DIRECT,
      fee,
      memo,
      options
    );

    const signDoc: ISignDoc.CosmosDirectDoc = SignDoc.fromPartial({
      bodyBytes: txRaw.bodyBytes,
      authInfoBytes: txRaw.authInfoBytes,
      chainId: options?.chainId ?? (await this.queryClient.getChainId()),
      accountNumber:
        options?.accountNumber ?? (await this.queryClient.getAccountNumber()),
    });
    return { signDoc, tx: txRaw };
  }

  signDoc = async (doc: ISignDoc.CosmosDirectDoc) => {
    return SignResponseFromAuth.signDirect(this.auth, doc, this.config);
  };
}

export class DirectSigner extends DirectSignerBase
  implements ISigner.CosmosDirectSigner {
  constructor(
    auth: Auth,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    super(auth, encoders, endpoint, options);
  }

  static async fromWallet(
    wallet: BaseWallet<ISignDoc.CosmosDirectDoc>,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    const auth: Auth = await constructAuthFromWallet(
      wallet,
      options?.publicKey?.isCompressed ??
        defaultSignerConfig.publicKey.isCompressed
    );
    const signer = new DirectSigner(auth, encoders, endpoint, options);
    signer.signDoc = wallet.sign;
    return signer;
  }

  static toWallet(
    auth: Auth,
    config: SignerConfig = defaultSignerConfig
  ): IWallet.CosmosDirectWallet {
    return {
      getAccount: async () => getAccountFromAuth(auth, config),
      sign: async (doc: SignDoc) =>
        SignResponseFromAuth.signDirect(auth, doc, config),
    };
  }
}
