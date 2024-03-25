import {
  Auth,
  BaseWallet,
  BroadcastOptions,
  CreateDocResponse,
  HttpEndpoint,
  SignDocResponse,
  SignResponse,
  ISigner,
  SignerConfig,
  IDoc,
  IWallet,
} from "@uni-sign/types";
import { defaultSignerConfig } from "./defaults";
import { SignResponseFromAuth, getAccountFromAuth } from "./utils";
import { BaseSigner, constructAuthFromWallet } from "@uni-sign/utils";
import { _TypedDataEncoder } from "@ethersproject/hash";

export class Eip712Signer extends BaseSigner implements ISigner.Eip712Signer {
  constructor(
    auth: Auth,
    endpoint?: string | HttpEndpoint,
    config?: SignerConfig
  ) {
    super(auth, config ?? defaultSignerConfig);
  }

  static async fromWallet(
    wallet: BaseWallet<IDoc.Eip712SignDoc>,
    endpoint?: string | HttpEndpoint,
    config?: SignerConfig
  ) {
    const auth: Auth = await constructAuthFromWallet(wallet, config);
    const signer = new Eip712Signer(auth, endpoint, config);
    signer.signDoc = wallet.sign;
    return signer;
  }

  static toWallet(
    auth: Auth,
    config: SignerConfig = defaultSignerConfig
  ): IWallet.Eip712Wallet {
    return {
      getAccount: async () => getAccountFromAuth(auth, config),
      sign: async (doc: IDoc.Eip712SignDoc) =>
        SignResponseFromAuth.signEip712Data(auth, doc, config),
    };
  }

  getAddress(): string {
    return this.publicKeyHash.toPrefixedHex();
  }

  async signDoc(
    doc: IDoc.Eip712SignDoc
  ): Promise<SignDocResponse<IDoc.Eip712SignDoc>> {
    return SignResponseFromAuth.signEip712Data(this.auth, doc, this.config);
  }

  async createDoc(
    messages: any,
    ...args: any
  ): Promise<CreateDocResponse<IDoc.Eip712SignDoc, unknown>> {
    throw new Error("Not implemented yet");
  }

  async sign(
    messages: any,
    ...args: any
  ): Promise<SignResponse<IDoc.Eip712SignDoc, unknown>> {
    throw new Error("Not implemented yet");
  }

  async signAndBroadcast(
    messages: any,
    ...args: any
  ): Promise<{ hash: string }> {
    throw new Error("Not implemented yet");
  }

  async broadcast(
    tx: unknown,
    options?: BroadcastOptions
  ): Promise<{ hash: string }> {
    throw new Error("Not implemented yet");
  }

  async broadcastArbitrary(
    data: Uint8Array,
    options?: BroadcastOptions
  ): Promise<{ hash: string }> {
    throw new Error("Not implemented yet");
  }
}
