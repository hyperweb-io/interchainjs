export interface IKey {
  value: Uint8Array;
  toHex(): string;
  toPrefixedHex(): string;
  toBase64(): string;
  toBigInt(): bigint;
  toNumber(): number;
  toBech32(prefix: string, limit?: number): string;
  slice(start?: number, end?: number): IKey;
  concat(key: IKey): IKey;
}

export interface Auth {
  readonly algo: string;
  readonly hdPath?: string;
  getPublicKey: (isCompressed?: boolean) => IKey;
  sign: (data: Uint8Array) => Signature;
  verify?: (data: Uint8Array, signature: Signature) => boolean;
}

export interface AuthOptions {
  bip39Password?: string;
}

export interface Signature {
  readonly r: IKey;
  readonly s: IKey;
  readonly recovery?: number;
  toCompact(): IKey;
}

export type Network = "cosmos" | "injective" | "ethereum";

export interface HdPathType {
  network: Network;
  algo: string;
  path: string;
}
