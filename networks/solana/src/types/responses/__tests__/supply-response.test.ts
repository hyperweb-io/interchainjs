/**
 * Tests for SupplyResponse codec
 */

import { createSupplyResponse } from '../network/supply-response';

describe('SupplyResponse', () => {
  describe('createSupplyResponse', () => {
    it('should create response with supply data', () => {
      const rawResponse = {
        context: { slot: 1114 },
        value: {
          total: 1016000,
          circulating: 16000,
          nonCirculating: 1000000,
          nonCirculatingAccounts: [
            'FEy8pTbP5fEoqMV1GdTz83byuA8EKByqYat1PKDgVAq5',
            '9huDUZfxoJ7wGMTffUE7vh1xePqef7gyrLJu9NApncqA',
            '3mi1GmwEE3zo2jmfDuzvjSX9ovRXsDUKHvsntpkhuLJ9',
            'BYxEJTDerkaRWBem3XgnVcdhppktBXa2HbkHPKj2Ui4Z'
          ]
        }
      };

      const result = createSupplyResponse(rawResponse);

      expect(result).toEqual({
        context: {
          slot: 1114
        },
        value: {
          total: 1016000n,
          circulating: 16000n,
          nonCirculating: 1000000n,
          nonCirculatingAccounts: [
            'FEy8pTbP5fEoqMV1GdTz83byuA8EKByqYat1PKDgVAq5',
            '9huDUZfxoJ7wGMTffUE7vh1xePqef7gyrLJu9NApncqA',
            '3mi1GmwEE3zo2jmfDuzvjSX9ovRXsDUKHvsntpkhuLJ9',
            'BYxEJTDerkaRWBem3XgnVcdhppktBXa2HbkHPKj2Ui4Z'
          ]
        }
      });
    });

    it('should handle empty non-circulating accounts array', () => {
      const rawResponse = {
        context: { slot: 2000 },
        value: {
          total: 500000000,
          circulating: 400000000,
          nonCirculating: 100000000,
          nonCirculatingAccounts: [] as string[]
        }
      };

      const result = createSupplyResponse(rawResponse);

      expect(result).toEqual({
        context: {
          slot: 2000
        },
        value: {
          total: 500000000n,
          circulating: 400000000n,
          nonCirculating: 100000000n,
          nonCirculatingAccounts: []
        }
      });
    });

    it('should handle string numbers for supply values', () => {
      const rawResponse = {
        context: { slot: 3000 },
        value: {
          total: '1000000000000',
          circulating: '800000000000',
          nonCirculating: '200000000000',
          nonCirculatingAccounts: ['test-account']
        }
      };

      const result = createSupplyResponse(rawResponse);

      expect(result).toEqual({
        context: {
          slot: 3000
        },
        value: {
          total: 1000000000000n,
          circulating: 800000000000n,
          nonCirculating: 200000000000n,
          nonCirculatingAccounts: ['test-account']
        }
      });
    });

    it('should throw error for invalid context', () => {
      const rawResponse = {
        context: null as any,
        value: {
          total: 1000,
          circulating: 800,
          nonCirculating: 200,
          nonCirculatingAccounts: [] as string[]
        }
      };

      expect(() => createSupplyResponse(rawResponse)).toThrow('context is required');
    });

    it('should throw error for missing total', () => {
      const rawResponse = {
        context: { slot: 1000 },
        value: {
          circulating: 800,
          nonCirculating: 200,
          nonCirculatingAccounts: [] as string[]
        }
      };

      expect(() => createSupplyResponse(rawResponse)).toThrow('Missing required property: total');
    });

    it('should throw error for invalid nonCirculatingAccounts', () => {
      const rawResponse = {
        context: { slot: 1000 },
        value: {
          total: 1000,
          circulating: 800,
          nonCirculating: 200,
          nonCirculatingAccounts: 'not-an-array'
        }
      };

      expect(() => createSupplyResponse(rawResponse)).toThrow('nonCirculatingAccounts must be an array');
    });
  });
});
