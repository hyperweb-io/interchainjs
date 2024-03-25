import {
  Auth,
  SignerConfig,
  SignDocResponse,
  IWalletAccount,
  IDoc,
} from "@uni-sign/types";
import { defaultSignerConfig } from "../defaults";
import { getPrefix } from "./rpc";
import { SignDoc } from "../types";
import { encodeStdSignDoc } from "./amino";

export function getAccountFromAuth(
  auth: Auth,
  config: SignerConfig = defaultSignerConfig
): IWalletAccount.CosmosAccount {
  const publicKey = auth.getPublicKey(config.publicKey.isCompressed);
  return {
    algo: auth.algo,
    publicKey,
    getAddress(chainId?: string) {
      const addrKey = config.publicKey.hash(publicKey);
      if (!chainId) {
        return addrKey;
      }
      if (chainId.startsWith("injective-")) {
        throw new Error("Cannot get Injective address with this method.");
      }
      try {
        const prefix = getPrefix(chainId);
        return addrKey.toBech32(prefix);
      } catch (error) {
        return addrKey;
      }
    },
  };
}

export class SignResponseFromAuth {
  static signDirect(
    auth: Auth,
    doc: SignDoc,
    config: SignerConfig = defaultSignerConfig
  ): SignDocResponse<SignDoc> {
    const signDoc = SignDoc.fromPartial(doc);
    const signature = auth.sign(
      config.message.hash(SignDoc.encode(signDoc).finish())
    );
    return {
      signature: config.signature.toCompact(signature, auth.algo),
      signDoc: signDoc,
    };
  }

  static signAmino(
    auth: Auth,
    doc: IDoc.CosmosAminoSignDoc,
    config: SignerConfig = defaultSignerConfig
  ): SignDocResponse<IDoc.CosmosAminoSignDoc> {
    const encoded = encodeStdSignDoc(doc);
    const signature = auth.sign(config.message.hash(encoded));
    return {
      signature: config.signature.toCompact(signature, auth.algo),
      signDoc: doc,
    };
  }
}
