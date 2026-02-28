import { abciQuery } from './rpc';
import { ProtocolError, AbciError } from '@interchainjs/types';

// Mock fetch globally
const mockFetch = jest.fn();
global.fetch = mockFetch as any;

describe('abciQuery', () => {
  const endpoint = { url: 'http://localhost:26657', headers: {} };
  const path = '/cosmos.tx.v1beta1.Service/Simulate';
  const data = new Uint8Array([1, 2, 3]);

  beforeEach(() => {
    mockFetch.mockReset();
  });

  it('should throw ProtocolError on JSON-RPC error', async () => {
    mockFetch.mockResolvedValue({
      json: () => Promise.resolve({
        error: { code: -32600, message: 'Invalid Request' },
      }),
    });

    await expect(abciQuery(endpoint, path, data)).rejects.toThrow(ProtocolError);
    await expect(abciQuery(endpoint, path, data)).rejects.toThrow('JSON-RPC error');
  });

  it('should throw AbciError on non-zero ABCI response code', async () => {
    mockFetch.mockResolvedValue({
      json: () => Promise.resolve({
        result: {
          response: {
            code: 11,
            log: 'out of gas in location: ReadFlat; gasWanted: 0, gasUsed: 1000',
            value: '',
          },
        },
      }),
    });

    await expect(abciQuery(endpoint, path, data)).rejects.toThrow(AbciError);

    try {
      await abciQuery(endpoint, path, data);
    } catch (e) {
      expect(e).toBeInstanceOf(AbciError);
      const abciError = e as AbciError;
      expect(abciError.abciCode).toBe(11);
      expect(abciError.log).toBe('out of gas in location: ReadFlat; gasWanted: 0, gasUsed: 1000');
    }
  });

  it('should throw AbciError with generic message when ABCI error has no log', async () => {
    mockFetch.mockResolvedValue({
      json: () => Promise.resolve({
        result: {
          response: {
            code: 5,
            log: '',
            value: '',
          },
        },
      }),
    });

    await expect(abciQuery(endpoint, path, data)).rejects.toThrow(AbciError);

    try {
      await abciQuery(endpoint, path, data);
    } catch (e) {
      const abciError = e as AbciError;
      expect(abciError.abciCode).toBe(5);
      expect(abciError.log).toBe('Unknown error');
    }
  });

  it('should return decoded value on success (code 0)', async () => {
    // Base64 encoded [4, 5, 6]
    const base64Value = 'BAUG';
    mockFetch.mockResolvedValue({
      json: () => Promise.resolve({
        result: {
          response: {
            code: 0,
            log: '',
            value: base64Value,
          },
        },
      }),
    });

    const result = await abciQuery(endpoint, path, data);
    expect(result).toEqual(new Uint8Array([4, 5, 6]));
  });

  it('should preserve instanceof Error for backward compatibility', async () => {
    mockFetch.mockResolvedValue({
      json: () => Promise.resolve({
        result: {
          response: {
            code: 11,
            log: 'test error',
            value: '',
          },
        },
      }),
    });

    await expect(abciQuery(endpoint, path, data)).rejects.toThrow(Error);
  });
});
