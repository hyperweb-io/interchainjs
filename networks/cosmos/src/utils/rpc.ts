import { HttpEndpoint, TxRpc } from '@interchainjs/types';
import { fromBase64, randomId, toBase64, toHex } from '@interchainjs/utils';

import prefixJson from '../data/prefix.json';
import { BroadcastMode } from '../types';

export const getPrefix = (chainId: string): string => {
  const prefix = (prefixJson as any)[chainId];
  if (!prefix) {
    throw new Error(`Cannot find bech32_prefix for chain ${chainId}.`);
  }
  return prefix;
};

export function createTxRpc(endpoint: HttpEndpoint): TxRpc {
  return {
    request: async (
      service: string,
      method: string,
      data: Uint8Array
    ): Promise<Uint8Array> => {
      const req = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...endpoint.headers,
        },
        body: JSON.stringify({
          id: randomId(),
          jsonrpc: '2.0',
          method: 'abci_query',
          params: {
            data: toHex(data),
            path: `/${service}/${method}`,
            prove: false,
          },
        }),
      };
      const resp = await fetch(endpoint.url, req);
      const json = await resp.json();
      if (json['error'] != void 0) {
        throw new Error(`Request Error: ${json['error']}`);
      }
      try {
        const result = fromBase64(json['result']['response']['value']);
        return result;
      } catch (error) {
        throw new Error(`Request Error: ${json['result']['response']['log']}`);
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
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...endpoint.headers,
    },
    body: JSON.stringify({
      id: randomId(),
      jsonrpc: '2.0',
      method,
      params: {
        tx: toBase64(data),
      },
    }),
  });
  const json = await resp.json();
  if (json['error'] != void 0) {
    throw new Error(`Request Error: ${json['error']}`);
  }
  try {
    return json['result'];
  } catch (error) {
    throw new Error(`Request Error: ${json}`);
  }
}
