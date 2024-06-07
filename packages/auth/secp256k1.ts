import { Auth, AuthOptions, Signature } from "@interchainjs/types";
import { Key } from "@interchainjs/utils";
import { secp256k1 } from "@noble/curves/secp256k1";
import { HDKey } from "@scure/bip32";

import { getSeedFromMnemonic } from "./utils";

export class Secp256k1Auth implements Auth {
  protected privateKey: Key = null;

  readonly algo = "secp256k1";

  constructor(privateKey: Uint8Array | HDKey | Key, public readonly hdPath?: string) {
    if (privateKey instanceof HDKey) {
      this.privateKey = Key.from(privateKey.privateKey);
    } else if (privateKey instanceof Key) {
      this.privateKey = privateKey;
    } else if (privateKey) {
      this.privateKey = Key.from(privateKey);
    }
  }

  static fromMnemonic(
    mnemonic: string,
    hdPaths: string[],
    options?: AuthOptions
  ) {
    return hdPaths.map((hdPath) => {
      const seed = getSeedFromMnemonic(mnemonic, options?.bip39Password);
      return new Secp256k1Auth(seed, hdPath);
    });
  }

  getPublicKey = (isCompressed?: boolean) => {
    return Key.from(
      secp256k1.getPublicKey(this.privateKey!.value, isCompressed)
    );
  };

  sign(data: Uint8Array): Signature {
    if (!this.privateKey) {
      throw new Error("No privateKey set!");
    }
    const signature = secp256k1.sign(data, this.privateKey.toBigInt());
    return {
      r: Key.fromBigInt(signature.r),
      s: Key.fromBigInt(signature.s),
      recovery: signature.recovery,
    };
  }

  verify(data: Uint8Array, signature: Signature) {
    return secp256k1.verify(
      { r: signature.r.toBigInt(), s: signature.s.toBigInt() },
      data,
      this.getPublicKey(true).toHex()
    );
  }
}
