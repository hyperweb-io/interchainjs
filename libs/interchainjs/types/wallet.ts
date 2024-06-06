import { CosmosAccount } from "@interchainjs/cosmos/types";
import { SignDoc, StdSignDoc } from "@interchainjs/types";

export type Algo = "secp256k1" | "ed25519" | "sr25519";

export type Bech32Address = string;

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
  getAccounts: () => Promise<CosmosAccount[]>;
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
  getAccounts: () => Promise<CosmosAccount[]>;
  signDirect: (
    signerAddress: string,
    signDoc: SignDoc
  ) => Promise<DirectSignResponse>;
}

export type OfflineSigner = OfflineAminoSigner | OfflineDirectSigner;

export interface WalletOptions {
  bip39Password?: string;
  hdPaths?: string[];
  prefix?: string;
}
