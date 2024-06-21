
export type Algo = 'secp256k1' | 'ed25519' | 'sr25519';

export type Bech32Address = string;

export interface Pubkey {
  type: string;
  value: any;
}

export interface StdSignature {
  pub_key: Pubkey;
  signature: string;
}

export interface WalletOptions {
  bip39Password?: string;
  hdPaths?: string[];
  prefix?: string;
}
