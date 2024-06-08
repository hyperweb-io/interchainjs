import { SignDoc } from "@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx";
import { Auth, SignDocResponse, SignerConfig } from "@interchainjs/types";

import { defaultSignerConfig } from "../defaults";
import { Algo, CosmosAccount, CosmosAminoDoc } from "../types";
import { encodeStdSignDoc } from "./amino";

export function getAccountFromAuth(
  auth: Auth,
  config: SignerConfig = defaultSignerConfig
): CosmosAccount {
  const publicKey = auth.getPublicKey(config.publicKey.isCompressed);
  const account = {
    algo: auth.algo,
    publicKey,
    getAddress(prefix?: string) {
      const addrKey = config.publicKey.hash(publicKey);
      return addrKey.toBech32(prefix ?? "");
    },
    toAccountData() {
      return {
        address: account.getAddress(),
        algo: auth.algo as Algo,
        pubkey: publicKey.value,
      };
    },
  };

  return account;
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
      signature: signature.toCompact(),
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
      signature: signature.toCompact(),
      signDoc: doc,
    };
  }
}
