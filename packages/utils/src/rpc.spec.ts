import { abciQuery } from './rpc';

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

  it('should throw on JSON-RPC error', async () => {
    mockFetch.mockResolvedValue({
      json: () => Promise.resolve({
        error: 'Internal error',
      }),
    });

    await expect(abciQuery(endpoint, path, data)).rejects.toThrow('Request Error: Internal error');
  });

  it('should throw on non-zero ABCI response code', async () => {
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

    await expect(abciQuery(endpoint, path, data)).rejects.toThrow(
      'ABCI Error (code 11): out of gas in location: ReadFlat; gasWanted: 0, gasUsed: 1000'
    );
  });

  it('should throw with generic message when ABCI error has no log', async () => {
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

    await expect(abciQuery(endpoint, path, data)).rejects.toThrow('ABCI Error (code 5): Unknown error');
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
});
