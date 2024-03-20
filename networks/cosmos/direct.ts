import { Auth, BaseWallet, HttpEndpoint, SignerConfig } from "@uni-sign/types";
import { SignDoc } from "./codegen/cosmos/tx/v1beta1/tx";
import {
  Encoder,
  FeeOptions,
  Message,
  SignerOptions,
  TxBodyOptions,
  StdFee,
  DirectWallet,
} from "./types";
import { BaseSigner, SignResponseFromAuth, getAccountFromAuth } from "./utils";
import { SignMode } from "./types";
import { defaultSignerConfig } from "./defaults";
import { constructAuthFromWallet } from "@uni-sign/utils";

export class DirectSigner extends BaseSigner<SignDoc> {
  constructor(
    auth: Auth,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    config: SignerConfig = defaultSignerConfig
  ) {
    super(auth, encoders, endpoint, config);
  }

  static async fromWallet(
    wallet: BaseWallet<SignDoc>,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    config: SignerConfig = defaultSignerConfig
  ) {
    const auth: Auth = await constructAuthFromWallet(wallet, config);
    const signer = new DirectSigner(auth, encoders, endpoint, config);
    signer.signDoc = wallet.sign;
    return signer;
  }

  static toWallet(
    auth: Auth,
    config: SignerConfig = defaultSignerConfig
  ): DirectWallet {
    return {
      getAccount: async () => getAccountFromAuth(auth, config),
      sign: async (doc: SignDoc) =>
        SignResponseFromAuth.signDirect(auth, doc, config),
    };
  }

  async createDoc(
    messages: Message[],
    fee?: StdFee,
    memo?: string,
    options?: FeeOptions & SignerOptions & TxBodyOptions
  ) {
    const { txRaw } = await this.createTxRaw(
      messages,
      SignMode.SIGN_MODE_DIRECT,
      fee,
      memo,
      options
    );

    const signDoc: SignDoc = SignDoc.fromPartial({
      bodyBytes: txRaw.bodyBytes,
      authInfoBytes: txRaw.authInfoBytes,
      chainId: options?.chainId ?? (await this.queryClient.getChainId()),
      accountNumber:
        options?.accountNumber ?? (await this.queryClient.getAccountNumber()),
    });
    return { signDoc, txRaw };
  }

  signDoc = async (doc: SignDoc) => {
    return SignResponseFromAuth.signDirect(this.auth, doc, this.config);
  };
}
