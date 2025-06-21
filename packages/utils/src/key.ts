import { ISignature } from '@interchainjs/types';
import { bech32 } from 'bech32';

import {
  fromBase64,
  fromBigInt,
  fromHex,
  fromNumber,
  toBase64,
  toBigInt,
  toHex,
  toNumber,
} from './encoding';

export class BaseSignature implements ISignature {
  constructor(public readonly value: Uint8Array) {}

  static from(value: Uint8Array) {
    return new BaseSignature(value);
  }

  static fromHex(value: string) {
    return new BaseSignature(fromHex(value));
  }

  static fromBase64(value: string) {
    return new BaseSignature(fromBase64(value));
  }

  static fromBigInt(value: bigint) {
    return new BaseSignature(fromBigInt(value));
  }

  static fromNumber(value: number) {
    return new BaseSignature(fromNumber(value));
  }

  toHex(trimmed: boolean = false) {
    return toHex(this.value, trimmed);
  }

  toPrefixedHex(trimmed: boolean = false) {
    return `0x${this.toHex(trimmed)}`;
  }

  toBase64() {
    return toBase64(this.value);
  }

  toBigInt() {
    return toBigInt(this.value);
  }

  toNumber() {
    return toNumber(this.value);
  }

  toBech32(prefix: string, limit?: number) {
    return bech32.encode(prefix, bech32.toWords(this.value), limit);
  }

  slice(start?: number, end?: number): BaseSignature {
    return BaseSignature.from(this.value.slice(start, end));
  }

  concat(signature: BaseSignature) {
    return BaseSignature.from(new Uint8Array([...this.value, ...signature.value]));
  }
}
