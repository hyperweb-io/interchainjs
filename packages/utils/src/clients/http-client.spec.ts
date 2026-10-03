import { NetworkError } from '@interchainjs/types';

import { HttpRpcClient } from './http-client';

function rpcResponse(result: unknown): Response {
  return new Response(JSON.stringify({ jsonrpc: '2.0', id: 1, result }), { status: 200 });
}

function rateLimited(retryAfter?: string): Response {
  return new Response('', {
    status: 429,
    statusText: 'Too Many Requests',
    headers: retryAfter === undefined ? {} : { 'Retry-After': retryAfter }
  });
}

describe('HttpRpcClient', () => {
  const originalFetch = global.fetch;
  let fetchMock: jest.Mock;

  beforeEach(() => {
    fetchMock = jest.fn();
    global.fetch = fetchMock as unknown as typeof fetch;
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('retries after HTTP 429 and returns the result', async () => {
    fetchMock
      .mockResolvedValueOnce(rateLimited('0'))
      .mockResolvedValueOnce(rateLimited('0'))
      .mockResolvedValueOnce(rpcResponse('ok'));

    const client = new HttpRpcClient('http://rpc.test');

    await expect(client.call('getHealth')).resolves.toBe('ok');
    expect(fetchMock).toHaveBeenCalledTimes(3);
  });

  it('throws once retries are exhausted', async () => {
    fetchMock.mockResolvedValue(rateLimited('0'));

    const client = new HttpRpcClient('http://rpc.test', { maxRetries: 2 });

    await expect(client.call('getHealth')).rejects.toThrow(new NetworkError('HTTP 429: Too Many Requests'));
    expect(fetchMock).toHaveBeenCalledTimes(3);
  });

  it('does not retry when maxRetries is 0', async () => {
    fetchMock.mockResolvedValue(rateLimited('0'));

    const client = new HttpRpcClient('http://rpc.test', { maxRetries: 0 });

    await expect(client.call('getHealth')).rejects.toThrow('HTTP 429: Too Many Requests');
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('backs off exponentially without Retry-After', async () => {
    jest.useFakeTimers();
    try {
      fetchMock.mockResolvedValueOnce(rateLimited()).mockResolvedValueOnce(rpcResponse(1));

      const client = new HttpRpcClient('http://rpc.test');
      const pending = client.call('getSlot');

      await jest.advanceTimersByTimeAsync(499);
      expect(fetchMock).toHaveBeenCalledTimes(1);
      await jest.advanceTimersByTimeAsync(1);
      await expect(pending).resolves.toBe(1);
      expect(fetchMock).toHaveBeenCalledTimes(2);
    } finally {
      jest.useRealTimers();
    }
  });

  it('does not retry other HTTP errors', async () => {
    fetchMock.mockResolvedValue(new Response('', { status: 500, statusText: 'Internal Server Error' }));

    const client = new HttpRpcClient('http://rpc.test');

    await expect(client.call('getHealth')).rejects.toThrow('HTTP 500: Internal Server Error');
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
