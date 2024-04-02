import { SignDoc, StdSignDoc } from "@interchainjs/types";

export type Algo = "secp256k1" | "ed25519" | "sr25519";

export type Bech32Address = string;

export interface AccountData {
  address: Bech32Address;
  algo: Algo;
  pubkey: Uint8Array;
}

export interface Pubkey {
  type: string;
  value: any;
}

export interface StdSignature {
  pub_key: Pubkey;
  signature: string;
}

export interface AminoSignResponse {
  signed: StdSignDoc;
  signature: StdSignature;
}

export interface OfflineAminoSigner {
  getAccounts: () => Promise<AccountData[]>;
  signAmino: (
    signerAddress: string,
    signDoc: StdSignDoc
  ) => Promise<AminoSignResponse>;
}

export interface DirectSignResponse {
  signed: SignDoc;
  signature: StdSignature;
}

export interface OfflineDirectSigner {
  getAccounts: () => Promise<AccountData[]>;
  signDirect: (
    signerAddress: string,
    signDoc: SignDoc
  ) => Promise<DirectSignResponse>;
}

export type OfflineSigner = OfflineAminoSigner | OfflineDirectSigner;

export interface Wallet {
  getAccounts: () => AccountData[];
  signAmino: (signerAddress: string, signDoc: StdSignDoc) => AminoSignResponse;
  signDirect: (signerAddress: string, signDoc: SignDoc) => DirectSignResponse;
}

export interface WalletOptions {
  bip39Password?: string;
  hdPaths?: string[];
  prefix?: string;
}
