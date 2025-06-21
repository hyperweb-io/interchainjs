import { HttpEndpoint } from '@interchainjs/types';
import { toHttpEndpoint } from './endpoint';
import { fromBase64, toBase64, toHex } from './encoding';
import { randomId } from './random';

export { getPrefix } from './chain';

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