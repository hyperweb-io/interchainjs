import prefixJson from "../data/prefix.json";
import feeTokensJson from "../data/fee-tokens.json";
import { HttpEndpoint, Price } from "@interchainjs/types";
import { Decimal } from "decimal.js";
import {
  BaseAccount,
  ModuleAccount,
} from "../codegen/cosmos/auth/v1beta1/auth";
import {
  BaseVestingAccount,
  ContinuousVestingAccount,
  DelayedVestingAccount,
  PeriodicVestingAccount,
} from "../codegen/cosmos/vesting/v1beta1/vesting";
import { fromBase64, randomId, toBase64, toHex } from "@interchainjs/utils";
import { TxRpc } from "../codegen/types";
import { BroadcastMode, Decoder } from "../types";
import { toDecoder } from "./direct";
import { EthAccount } from "../codegen/injective/types/v1beta1/account";

export const getPrefix = (chainId: string): string => {
  const prefix = (prefixJson as any)[chainId];
  if (!prefix) {
    throw new Error(`Cannot find bech32_prefix for chain ${chainId}.`);
  }
  return prefix;
};

export function getAvgGasPrice(chainId: string): Price {
  const feeToken = (feeTokensJson as any)[chainId]?.[0];
  if (typeof feeToken?.average_gas_price === "undefined") {
    throw new Error(`No average_gas_price found for chain ${chainId}`);
  }
  return {
    amount: new Decimal(feeToken.average_gas_price),
    denom: feeToken.denom,
  };
}

export function getHighGasPrice(chainId: string): Price {
  const feeToken = (feeTokensJson as any)[chainId]?.[0];
  if (typeof feeToken?.high_gas_price === "undefined") {
    throw new Error(`No high_gas_price found for chain ${chainId}`);
  }
  return {
    amount: new Decimal(feeToken.high_gas_price),
    denom: feeToken.denom,
  };
}

export function getLowGasPrice(chainId: string): Price {
  const feeToken = (feeTokensJson as any)[chainId]?.[0];
  if (typeof feeToken?.low_gas_price === "undefined") {
    throw new Error(`No low_gas_price found for chain ${chainId}`);
  }
  return {
    amount: new Decimal(feeToken.low_gas_price),
    denom: feeToken.denom,
  };
}

export const accountDecoders = [
  BaseAccount,
  ModuleAccount,
  BaseVestingAccount,
  ContinuousVestingAccount,
  DelayedVestingAccount,
  PeriodicVestingAccount,
  EthAccount,
].map((msg) => toDecoder(msg));

export function createTxRpc(endpoint: HttpEndpoint): TxRpc {
  return {
    request: async (
      service: string,
      method: string,
      data: Uint8Array
    ): Promise<Uint8Array> => {
      const req = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...endpoint.headers,
        },
        body: JSON.stringify({
          id: randomId(),
          jsonrpc: "2.0",
          method: "abci_query",
          params: {
            data: toHex(data),
            path: `/${service}/${method}`,
            prove: false,
          },
        }),
      };
      const resp = await fetch(endpoint.url, req);
      const json = await resp.json();
      if (json["error"] != void 0) {
        throw new Error(`Request Error: ${json["error"]}`);
      }
      try {
        const result = fromBase64(json["result"]["response"]["value"]);
        return result;
      } catch (error) {
        throw new Error(`Request Error: ${json["result"]["response"]["log"]}`);
      }
    },
  };
}

export async function broadcast(
  endpoint: HttpEndpoint,
  method: BroadcastMode,
  data: Uint8Array
) {
  const resp = await fetch(endpoint.url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...endpoint.headers,
    },
    body: JSON.stringify({
      id: randomId(),
      jsonrpc: "2.0",
      method,
      params: {
        tx: toBase64(data),
      },
    }),
  });
  const json = await resp.json();
  if (json["error"] != void 0) {
    throw new Error(`Request Error: ${json["error"]}`);
  }
  try {
    return json["result"];
  } catch (error) {
    throw new Error(`Request Error: ${json}`);
  }
}
