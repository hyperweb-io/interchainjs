import { SignDoc } from "@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx";
import {
  Auth,
  SignDocResponse,
  SignerConfig,
} from "@interchainjs/types";

import { defaultSignerConfig } from "../defaults";
import { CosmosAccount, CosmosAminoDoc } from "../types";
import { encodeStdSignDoc } from "./amino";

export function getAccountFromAuth(
  auth: Auth,
  config: SignerConfig = defaultSignerConfig
): CosmosAccount {
  const publicKey = auth.getPublicKey(config.publicKey.isCompressed);
  return {
    algo: auth.algo,
    publicKey,
    getAddress(prefix?: string) {
      const addrKey = config.publicKey.hash(publicKey);
      return addrKey.toBech32(prefix);
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
    doc: CosmosAminoDoc,
    config: SignerConfig = defaultSignerConfig
  ): SignDocResponse<CosmosAminoDoc> {
    const encoded = encodeStdSignDoc(doc);
    const signature = auth.sign(config.message.hash(encoded));
    return {
      signature: config.signature.toCompact(signature, auth.algo),
      signDoc: doc,
    };
  }
}
