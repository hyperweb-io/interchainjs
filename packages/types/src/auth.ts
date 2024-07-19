import { SignDocResponse } from './wallet';

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
}

export interface ByteAuth<Sig> extends Auth {
  sign: (data: Uint8Array) => ISignatureWraper<Sig>;
}

export function isByteAuth<Sig>(auth: Auth): auth is ByteAuth<Sig> {
  return 'sign' in auth;
}

export interface DocAuth<Doc> extends Auth {
  address: string;
  signDoc(doc: Doc): SignDocResponse<Doc> | Promise<SignDocResponse<Doc>>;
}

export function isDocAuth<Doc>(auth: Auth): auth is DocAuth<Doc> {
  return 'signDoc' in auth;
}

export interface AuthOptions {
  bip39Password?: string;
}

export interface ISignatureWraper<Sig> {
  signature: Sig;
  toCompact(): IKey;
}

export type Network = 'cosmos' | 'injective' | 'ethereum';

export interface HdPathType {
  network: Network;
  algo: string;
  path: string;
}
