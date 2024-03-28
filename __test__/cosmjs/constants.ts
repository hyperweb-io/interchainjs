import { chain, seed } from "../data";
import { Secp256k1Wallet } from "@cosmology/cosmjs/wallets/secp256k1";
import { StargateSigningClient } from "@cosmology/cosmjs/stargate";

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

import {
  AminoTypes,
  Coin,
  GasPrice,
  SigningStargateClient,
  calculateFee,
  createIbcAminoConverters,
} from "@cosmjs/stargate";
