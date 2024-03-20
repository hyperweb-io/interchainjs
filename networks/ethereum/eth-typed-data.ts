import {
  Auth,
  BaseWallet,
  BroadcastOptions,
  HttpEndpoint,
  SignerConfig,
  UniSigner,
} from "@uni-sign/types";
import { defaultSignerConfig } from "./defaults";
import { SignResponseFromAuth, getAccountFromAuth } from "./utils";
import { EthTypedData, EthTypedDataWallet } from "./types";
import { BaseSigner, constructAuthFromWallet } from "@uni-sign/utils";
import { _TypedDataEncoder } from "@ethersproject/hash";

export class EthTypedDataSigner extends BaseSigner
  implements UniSigner<EthTypedData> {
  constructor(
    auth: Auth,
    endpoint?: string | HttpEndpoint,
    config?: SignerConfig
  ) {
    super(auth, config ?? defaultSignerConfig);
  }

  static async fromWallet(
    wallet: BaseWallet<EthTypedData>,
    endpoint?: string | HttpEndpoint,
    config?: SignerConfig
  ) {
    const auth: Auth = await constructAuthFromWallet(wallet, config);
    const signer = new EthTypedDataSigner(auth, endpoint, config);
    signer.signDoc = wallet.sign;
    return signer;
  }

  static toWallet(
    auth: Auth,
    config: SignerConfig = defaultSignerConfig
  ): EthTypedDataWallet {
    return {
      getAccount: async () => getAccountFromAuth(auth, config),
      sign: async (doc: EthTypedData) =>
        SignResponseFromAuth.signEip712TypedData(auth, doc, config),
    };
  }

  async signDoc(doc: EthTypedData) {
    return SignResponseFromAuth.signEip712TypedData(
      this.auth,
      doc,
      this.config
    );
  }

  async broadcastArbitrary(message: Uint8Array, options?: BroadcastOptions) {
    throw new Error("Not implemented yet");
  }
}
