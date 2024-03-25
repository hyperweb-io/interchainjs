import {
  Auth,
  BaseWallet,
  HttpEndpoint,
  ISignDoc,
  ISigner,
  IWallet,
  SignerConfig,
} from "@uni-sign/types";
import { AminoSignerBase } from "@uni-sign/cosmos/amino";
import { Encoder, AminoConverter } from "@uni-sign/cosmos/types";
import { defaultSignerConfig } from "./defaults";
import { EncodedMessage, Secp256k1PubKey } from "@uni-sign/cosmos/types";
import { SignResponseFromAuth } from "@uni-sign/cosmos/utils";
import { getAccountFromAuth } from "./utils";
import { constructAuthFromWallet } from "@uni-sign/utils";

export class AminoSigner extends AminoSignerBase
  implements ISigner.InjectiveAminoSigner {
  constructor(
    auth: Auth,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    config: SignerConfig = defaultSignerConfig.Cosmos
  ) {
    super(auth, encoders, converters, endpoint, config);
  }

  static async fromWallet(
    wallet: BaseWallet<ISignDoc.CosmosAminoDoc>,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    config: SignerConfig = defaultSignerConfig.Cosmos
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
    config: SignerConfig = defaultSignerConfig.Cosmos
  ): IWallet.InjectiveAminoWallet {
    return {
      getAccount: async () => getAccountFromAuth(auth, config),
      sign: async (doc: ISignDoc.CosmosAminoDoc) =>
        SignResponseFromAuth.signAmino(auth, doc, config),
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
