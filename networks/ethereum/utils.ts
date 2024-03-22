import { SignDocResponse, SignResponse, SignerConfig } from "@uni-sign/types";
import { Auth } from "@uni-sign/types";
import { defaultSignerConfig } from "./defaults";
import { _TypedDataEncoder } from "@ethersproject/hash";
import { EthTypedData, EthereumAccount } from "./types";
import { fromHex } from "@uni-sign/utils";

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
  static signEip712TypedData(
    auth: Auth,
    doc: EthTypedData,
    config: SignerConfig = defaultSignerConfig
  ): SignDocResponse<EthTypedData> {
    const encoded = _TypedDataEncoder.encode(
      doc.domain,
      doc.types,
      doc.message
    );
    const signature = auth.sign(config.message.hash(fromHex(encoded)));
    return {
      signature: config.signature.toCompact(signature, auth.algo),
      signed: doc,
    };
  }
}
