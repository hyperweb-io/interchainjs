import { IKey } from "@interchainjs/types";
import { bech32 } from "bech32";

import {
  fromBase64,
  fromBigInt,
  fromHex,
  fromNumber,
  toBase64,
  toBigInt,
  toHex,
  toNumber,
} from "./encoding";

export class Key implements IKey {
  constructor(public readonly value: Uint8Array) {}

  static from(value: Uint8Array) {
    return new Key(value);
  }

  static fromHex(value: string) {
    return new Key(fromHex(value));
  }

  static fromBase64(value: string) {
    return new Key(fromBase64(value));
  }

  static fromBigInt(value: bigint) {
    return new Key(fromBigInt(value));
  }

  static fromNumber(value: number) {
    return new Key(fromNumber(value));
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

  slice(start?: number, end?: number): Key {
    return Key.from(this.value.slice(start, end));
  }

  concat(key: Key) {
    return Key.from(new Uint8Array([...this.value, ...key.value]));
  }
}
