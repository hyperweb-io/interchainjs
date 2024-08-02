
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
