import { HttpEndpoint, TxRpc } from '@interchainjs/types';
import { toHttpEndpoint } from '@interchainjs/utils';
import { fromBase64, randomId, toBase64, toHex } from '@interchainjs/utils';

import { BroadcastMode } from '../types';
export { getPrefix } from './chain';

/**
 * create rpc client for query
 */
export function createQueryRpc(endpoint: string | HttpEndpoint): TxRpc {
  return {
    request: async (
      service: string,
      method: string,
      data: Uint8Array
    ): Promise<Uint8Array> => {
      return abciQuery(toHttpEndpoint(endpoint), `/${service}/${method}`, data);
    },
  };
}

/**
 * helper function for broadcast tx
 */
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

/**
 * helper function for abci query
 */
export async function abciQuery(
  endpoint: HttpEndpoint,
  path: string,
  data: Uint8Array
): Promise<Uint8Array> {
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
        path: path,
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
}

/**
 * helper function for sleep milliseconds
 */
export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createTxRpc(endpoint: HttpEndpoint): TxRpc {
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
