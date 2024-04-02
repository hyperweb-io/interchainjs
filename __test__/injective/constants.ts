import { Secp256k1Auth } from "@interchainjs/auth/secp256k1";
import { defaultSignerConfig } from "@interchainjs/injective/defaults";
import { seed } from "../data";

export const mnemonic = seed.genesis;
export const auth = Secp256k1Auth.fromMnemonic(mnemonic).derive("injective");
export const hashPubKey = defaultSignerConfig.Cosmos.publicKey.hash;
export const isPubKeyCompressed =
  defaultSignerConfig.Cosmos.publicKey.isCompressed; // same for cosmos and ethereum
