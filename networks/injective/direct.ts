import { Auth, HttpEndpoint, SignerConfig } from "@uni-sign/types";
import { defaultSignerConfig } from "./defaults";
import { DirectSignerBase } from "@uni-sign/cosmos/direct";
import {
  EncodedMessage,
  Encoder,
  Secp256k1PubKey,
  SignDoc,
} from "@uni-sign/cosmos/types";
import { getAccountFromAuth } from "./utils";
import { SignResponseFromAuth } from "@uni-sign/cosmos/utils";
import { DirectWallet } from "./types";
import { constructAuthFromWallet } from "@uni-sign/utils";

export class DirectSigner extends DirectSignerBase {
  constructor(
    auth: Auth,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    config: SignerConfig = defaultSignerConfig.Cosmos
  ) {
    super(auth, encoders, endpoint, config);
  }

  static async fromWallet(
    wallet: DirectWallet,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    config: SignerConfig = defaultSignerConfig.Cosmos
  ) {
    const auth: Auth = await constructAuthFromWallet(wallet, config);
    const signer = new DirectSigner(auth, encoders, endpoint, config);
    signer.signDoc = wallet.sign;
    return signer;
  }

  static toWallet(
    auth: Auth,
    config: SignerConfig = defaultSignerConfig.Cosmos
  ): DirectWallet {
    return {
      getAccount: async () => getAccountFromAuth(auth, config),
      sign: async (doc: SignDoc) =>
        SignResponseFromAuth.signDirect(auth, doc, config),
    };
  }

  get encodedPublicKey(): EncodedMessage {
    switch (this.auth.algo) {
      case "secp256k1":
        return {
          typeUrl: "/injective.crypto.v1beta1.ethsecp256k1.PubKey",
          value: Secp256k1PubKey.encode(
            Secp256k1PubKey.fromPartial({ key: this.publicKey.value })
          ).finish(),
        };
      case "ed25519":
        throw new Error(
          "Ed25519 signer info construction is not implemented yet"
        );
      default:
        throw new Error(`Unsupported public key algorithm: ${this.auth.algo}`);
    }
  }
}
