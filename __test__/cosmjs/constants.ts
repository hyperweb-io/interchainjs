import { Secp256k1Auth } from "@interchainjs/auth/secp256k1";
import { StargateSigningClient } from "interchainjs/stargate";
import { Secp256k1Wallet } from "interchainjs/wallets/secp256k1";

import { chain, seed } from "../data";

export const auth = Secp256k1Auth.fromMnemonic(seed.genesis).derive("cosmos");

export const wallet = Secp256k1Wallet.fromMnemonic(seed.genesis, {
  prefix: chain.cosmoshub.prefix,
});

export const directClient = StargateSigningClient.connectWithSigner(
  chain.cosmoshub.rpc,
  wallet.toOfflineDirectSigner()
);

export const aminoClient = StargateSigningClient.connectWithSigner(
  chain.cosmoshub.rpc,
  wallet.toOfflineAminoSigner()
);
