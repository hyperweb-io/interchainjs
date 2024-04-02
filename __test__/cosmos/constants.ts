import { Secp256k1Auth } from "@interchainjs/auth/secp256k1";
import { chain, seed } from "../data";
import { RpcQuery } from "@interchainjs/cosmos-query/rpc";

export const auth = Secp256k1Auth.fromMnemonic(seed.genesis).derive("cosmos");
export const rpcQuery = new RpcQuery(chain.cosmoshub.rpc);
