import { secp256k1 } from "@noble/curves/secp256k1.js";
import { bytesToNumberBE, numberToBytesBE } from "@noble/curves/utils.js";

import { ExtendedSecp256k1Signature, Secp256k1Signature } from "./secp256k1signature";

function toUnpaddedBytes(n: bigint): Uint8Array {
  const bytes = numberToBytesBE(n, 32);
  const firstNonZero = bytes.findIndex((byte) => byte !== 0);
  return bytes.slice(firstNonZero);
}

export interface Secp256k1Keypair {
  /** A 32 byte private key */
  readonly pubkey: Uint8Array;
  /**
   * A raw secp256k1 public key.
   *
   * The type itself does not give you any guarantee if this is
   * compressed or uncompressed. If you are unsure where the data
   * is coming from, use `Secp256k1.compressPubkey` or
   * `Secp256k1.uncompressPubkey` (both idempotent) before processing it.
   */
  readonly privkey: Uint8Array;
}

export class Secp256k1 {
  /**
   * Takes a 32 byte private key and returns a privkey/pubkey pair.
   *
   * The resulting pubkey is uncompressed. For the use in Cosmos it should
   * be compressed first using `Secp256k1.compressPubkey`.
   */
  public static async makeKeypair(privkey: Uint8Array): Promise<Secp256k1Keypair> {
    if (privkey.length !== 32) {
      // is this check missing in secp256k1.validatePrivateKey?
      // https://github.com/bitjson/bitcoin-ts/issues/4
      throw new Error("input data is not a valid secp256k1 private key");
    }

    if (!secp256k1.utils.isValidSecretKey(privkey)) {
      throw new Error("input data is not a valid secp256k1 private key");
    }

    const out: Secp256k1Keypair = {
      privkey: Uint8Array.from(privkey),
      // encodes uncompressed as
      // - 1-byte prefix "04"
      // - 32-byte x coordinate
      // - 32-byte y coordinate
      pubkey: secp256k1.getPublicKey(privkey, false),
    };
    return out;
  }

  /**
   * Creates a signature that is
   * - deterministic (RFC 6979)
   * - lowS signature
   * - DER encoded
   */
  public static async createSignature(
    messageHash: Uint8Array,
    privkey: Uint8Array,
  ): Promise<ExtendedSecp256k1Signature> {
    if (messageHash.length === 0) {
      throw new Error("Message hash must not be empty");
    }
    if (messageHash.length > 32) {
      throw new Error("Message hash length must not exceed 32 bytes");
    }

    const { r, s, recovery } = secp256k1.sign(messageHash, privkey, { prehash: false, lowS: true });
    if (typeof recovery !== "number") throw new Error("Recovery param missing");
    return new ExtendedSecp256k1Signature(toUnpaddedBytes(r), toUnpaddedBytes(s), recovery);
  }

  public static async verifySignature(
    signature: Secp256k1Signature,
    messageHash: Uint8Array,
    pubkey: Uint8Array,
  ): Promise<boolean> {
    if (messageHash.length === 0) {
      throw new Error("Message hash must not be empty");
    }
    if (messageHash.length > 32) {
      throw new Error("Message hash length must not exceed 32 bytes");
    }

    try {
      return secp256k1.verify(new Uint8Array([...signature.r(32), ...signature.s(32)]), messageHash, pubkey, { prehash: false, lowS: false });
    } catch (error) {
      return false;
    }
  }

  public static recoverPubkey(signature: ExtendedSecp256k1Signature, messageHash: Uint8Array): Uint8Array {
    return new secp256k1.Signature(
      bytesToNumberBE(signature.r()),
      bytesToNumberBE(signature.s()),
      signature.recovery,
    )
      .recoverPublicKey(messageHash)
      .toBytes(false);
  }

  /**
   * Takes a compressed or uncompressed pubkey and return a compressed one.
   *
   * This function is idempotent.
   */
  public static compressPubkey(pubkey: Uint8Array): Uint8Array {
    switch (pubkey.length) {
      case 33:
        return pubkey;
      case 65:
        return secp256k1.Point.fromBytes(pubkey).toBytes(true);
      default:
        throw new Error("Invalid pubkey length");
    }
  }

  /**
   * Takes a compressed or uncompressed pubkey and returns an uncompressed one.
   *
   * This function is idempotent.
   */
  public static uncompressPubkey(pubkey: Uint8Array): Uint8Array {
    switch (pubkey.length) {
      case 33:
        return secp256k1.Point.fromBytes(pubkey).toBytes(false);
      case 65:
        return pubkey;
      default:
        throw new Error("Invalid pubkey length");
    }
  }

  public static trimRecoveryByte(signature: Uint8Array): Uint8Array {
    switch (signature.length) {
      case 64:
        return signature;
      case 65:
        return signature.slice(0, 64);
      default:
        throw new Error("Invalid signature length");
    }
  }
}
