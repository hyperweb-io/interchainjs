import {
  Auth,
  HttpEndpoint,
  ISignDoc,
  ISigner,
  IWallet,
  SignerConfig,
  StdFee,
} from "@interchainjs/types";
import { constructAuthFromWallet } from "@interchainjs/utils";

import { defaultSignerConfig } from "./defaults";
import { DocOptions, Encoder, Message, SignDoc, SignerOptions } from "./types";
import { SignMode } from "./types";
import {
  CosmosBaseSigner,
  getAccountFromAuth,
  SignResponseFromAuth,
} from "./utils";

export class DirectSignerBase<
  TxBody = unknown,
  SignerInfo = unknown,
  AuthInfo = unknown,
  Acct = unknown,
> extends CosmosBaseSigner<
  ISignDoc.CosmosDirectDoc,
  DocOptions,
  TxBody,
  SignerInfo,
  AuthInfo,
  Acct
> {
  constructor(
    auth: Auth,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions<TxBody, SignerInfo, AuthInfo, Acct>
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

export class DirectSigner<
    TxBody = unknown,
    SignerInfo = unknown,
    AuthInfo = unknown,
    Acct = unknown,
  >
  extends DirectSignerBase<TxBody, SignerInfo, AuthInfo, Acct>
  implements ISigner.CosmosDirectSigner
{
  constructor(
    auth: Auth,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions<TxBody, SignerInfo, AuthInfo, Acct>
  ) {
    super(auth, encoders, endpoint, options);
  }

  static async fromWallet<TxBody, SignerInfo, AuthInfo, Acct>(
    wallet: IWallet.CosmosDirectWallet,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions<TxBody, SignerInfo, AuthInfo, Acct>
  ) {
    const auth: Auth = await constructAuthFromWallet(
      wallet,
      options?.base.publicKey?.isCompressed ??
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
