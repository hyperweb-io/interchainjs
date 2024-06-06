import {
  Auth,
  BaseSigner,
  HttpEndpoint,
  SignDocResponse,
  SignerConfig,
  SignResponse,
} from "@interchainjs/types";
import { constructAuthsFromWallet } from "@interchainjs/utils";

import { defaultSignerConfig } from "./defaults";
import {
  Eip712Doc,
  Eip712SignArgs,
  Eip712Tx,
  Eip712Wallet,
  UniEip712Signer,
} from "./types";
import { SignResponseFromAuth } from "./utils";

export class Eip712Signer<BroadcastResponse extends { hash: string }>
  extends BaseSigner
  implements UniEip712Signer<BroadcastResponse>
{
  constructor(
    auth: Auth,
    endpoint?: string | HttpEndpoint,
    config?: SignerConfig
  ) {
    super(auth, config ?? defaultSignerConfig);
  }

  static async fromWallet(
    wallet: Eip712Wallet,
    endpoint?: string | HttpEndpoint,
    config?: SignerConfig
  ) {
    const [auth] = await constructAuthsFromWallet(
      wallet,
      config.publicKey.isCompressed
    );
    return new Eip712Signer(auth, endpoint, config);
  }

  static async fromWalletToSigners(
    wallet: Eip712Wallet,
    endpoint?: string | HttpEndpoint,
    config?: SignerConfig
  ) {
    const auths = await constructAuthsFromWallet(
      wallet,
      config.publicKey.isCompressed
    );

    return auths.map((auth) => {
      return new Eip712Signer(auth, endpoint, config);
    });
  }

  async getAddress(): Promise<string> {
    return this.publicKeyHash.toPrefixedHex();
  }

  async signDoc(doc: Eip712Doc): Promise<SignDocResponse<Eip712Doc>> {
    return SignResponseFromAuth.signEip712Data(this.auth, doc, this.config);
  }

  async sign(
    _: Eip712SignArgs
  ): Promise<SignResponse<Eip712Tx, Eip712Doc, BroadcastResponse>> {
    throw new Error("Not implemented yet");
  }

  async signAndBroadcast(_: Eip712SignArgs): Promise<BroadcastResponse> {
    throw new Error("Not implemented yet");
  }

  async broadcast(_: Eip712Tx): Promise<BroadcastResponse> {
    throw new Error("Not implemented yet");
  }

  async broadcastArbitrary(_: Uint8Array): Promise<BroadcastResponse> {
    throw new Error("Not implemented yet");
  }
}
