import { hexConcat } from "@ethersproject/bytes";
import { _TypedDataEncoder } from "@ethersproject/hash";
import {
  Eip712Types,
  SignDocResponse,
  SignerConfig,
} from "@interchainjs/types";
import { Auth } from "@interchainjs/types";
import { fromHex } from "@interchainjs/utils";

import { defaultSignerConfig } from "./defaults";
import { Eip712Doc, EthereumAccount } from "./types";

export function getAccountFromAuth(
  auth: Auth,
  config: SignerConfig = defaultSignerConfig
): EthereumAccount {
  const publicKey = auth.getPublicKey(config.publicKey.isCompressed);
  const addrKey = config.publicKey.hash(publicKey);
  return {
    algo: auth.algo,
    publicKey,
    address: addrKey.toPrefixedHex(),
  };
}

export class SignResponseFromAuth {
  static signEip712Data(
    auth: Auth,
    doc: Eip712Doc,
    config: SignerConfig = defaultSignerConfig
  ): SignDocResponse<Eip712Doc> {
    const domainTypes: Eip712Types = {};
    const restTypes: Eip712Types = {};
    Object.entries(doc.types).forEach(([key, value]) => {
      if (key === "EIP712Domain") {
        domainTypes[key] = value;
      } else {
        restTypes[key] = value;
      }
    });
    const encoded = hexConcat([
      "0x1901",
      _TypedDataEncoder.from(domainTypes).hash(doc.domain),
      _TypedDataEncoder.from(restTypes).hash(doc.message),
    ]);

    const signature = auth.sign(config.message.hash(fromHex(encoded)));
    return {
      signature: config.signature.toCompact(signature, auth.algo),
      signDoc: doc,
    };
  }
}
