import { Secp256k1Auth } from "@interchainjs/auth/secp256k1";
import { RpcQuery } from "@interchainjs/cosmos-query/rpc";

import { chain, seed } from "../data";

export const auth = Secp256k1Auth.fromMnemonic(seed.genesis).derive("cosmos");
export const rpcQuery = new RpcQuery(chain.cosmoshub.rpc);
