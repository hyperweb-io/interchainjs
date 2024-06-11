import { Auth, AuthOptions, Signature } from "@interchainjs/types";
import { Key } from "@interchainjs/utils";
import { secp256k1 } from "@noble/curves/secp256k1";
import { HDKey } from "@scure/bip32";

import { getSeedFromMnemonic } from "./utils";

export class Secp256k1Auth implements Auth {
  protected privateKey: Key = null;

  readonly algo = "secp256k1";

  constructor(
    privateKey: Uint8Array | HDKey | Key,
    public readonly hdPath?: string
  ) {
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
    const masterSeed = HDKey.fromMasterSeed(
      getSeedFromMnemonic(mnemonic, options?.bip39Password)
    );

    return hdPaths.map((hdPath) => {
      return new Secp256k1Auth(masterSeed.derive(hdPath), hdPath);
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
    return new Secp256k1Signature(
      Key.fromBigInt(signature.r),
      Key.fromBigInt(signature.s),
      signature.recovery
    );
  }

  verify(data: Uint8Array, signature: Signature) {
    return secp256k1.verify(
      { r: signature.r.toBigInt(), s: signature.s.toBigInt() },
      data,
      this.getPublicKey(true).toHex()
    );
  }
}

export class Secp256k1Signature implements Signature {
  constructor(
    public readonly r: Key,
    public readonly s: Key,
    public readonly recovery?: number
  ) {}

  toCompact(): Key {
    const sig = new secp256k1.Signature(this.r.toBigInt(), this.s.toBigInt());

    return Key.from(sig.toCompactRawBytes());
  }

  static fromCompact(key: Key): Secp256k1Signature {
    const sig = secp256k1.Signature.fromCompact(key.toHex());
    return new Secp256k1Signature(
      Key.fromBigInt(sig.r),
      Key.fromBigInt(sig.s),
      sig.recovery
    );
  }
}
