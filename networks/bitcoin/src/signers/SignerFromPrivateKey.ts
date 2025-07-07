import { sha256, ripemd160 } from '@interchainjs/crypto';
import { Key } from '@interchainjs/utils';
import { secp256k1 } from '@noble/curves/secp256k1';
import { bytesToHex, hexToBytes } from '@noble/hashes/utils';

function base58Encode(data: Uint8Array): string {
  const alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  const digits = [0];
  for (const byte of data) {
    let carry = byte;
    for (let i = 0; i < digits.length; i++) {
      carry += digits[i] << 8;
      digits[i] = carry % 58;
      carry = (carry / 58) | 0;
    }
    while (carry > 0) {
      digits.push(carry % 58);
      carry = (carry / 58) | 0;
    }
  }
  let zeros = 0;
  for (const byte of data) {
    if (byte === 0) {
      zeros++;
    } else {
      break;
    }
  }
  let result = '';
  for (let i = 0; i < zeros; i++) {
    result += '1';
  }
  for (let i = digits.length - 1; i >= 0; i--) {
    result += alphabet[digits[i]];
  }
  return result;
}

function base58CheckEncode(data: Uint8Array): string {
  const checksum = sha256(sha256(data)).slice(0, 4);
  const total = new Uint8Array(data.length + 4);
  total.set(data);
  total.set(checksum, data.length);
  return base58Encode(total);
}

export class SignerFromPrivateKey {
  private privateKey: Uint8Array;

  constructor(privateKeyHex: string) {
    this.privateKey = hexToBytes(privateKeyHex.replace(/^0x/, ''));
  }

  getPublicKey(compressed = true): Uint8Array {
    return secp256k1.getPublicKey(this.privateKey, compressed);
  }

  getAddress(prefix = 0x00): string {
    const pub = this.getPublicKey(true);
    const hash160 = ripemd160(sha256(pub));
    const payload = new Uint8Array(1 + hash160.length);
    payload[0] = prefix;
    payload.set(hash160, 1);
    return base58CheckEncode(payload);
  }

  sign(hash: Uint8Array): Uint8Array {
    const sig = secp256k1.sign(hash, this.privateKey);
    return sig.toCompactRawBytes();
  }
}
