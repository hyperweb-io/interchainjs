/**
 * Tests for LargestAccountsResponse codec
 */

import { createLargestAccountsResponse } from '../network/largest-accounts-response';

describe('LargestAccountsResponse', () => {
  describe('createLargestAccountsResponse', () => {
    it('should create response with largest accounts data', () => {
      const rawResponse = {
        context: { slot: 1114 },
        value: [
          {
            address: 'FEy8pTbP5fEoqMV1GdTz83byuA8EKByqYat1PKDgVAq5',
            lamports: 16000000000000000
          },
          {
            address: '9huDUZfxoJ7wGMTffUE7vh1xePqef7gyrLJu9NApncqA',
            lamports: 4630000000000000
          },
          {
            address: '3mi1GmwEE3zo2jmfDuzvjSX9ovRXsDUKHvsntpkhuLJ9',
            lamports: 1000000000000000
          }
        ]
      };

      const result = createLargestAccountsResponse(rawResponse);

      expect(result).toEqual({
        context: {
          slot: 1114
        },
        value: [
          {
            address: 'FEy8pTbP5fEoqMV1GdTz83byuA8EKByqYat1PKDgVAq5',
            lamports: 16000000000000000n
          },
          {
            address: '9huDUZfxoJ7wGMTffUE7vh1xePqef7gyrLJu9NApncqA',
            lamports: 4630000000000000n
          },
          {
            address: '3mi1GmwEE3zo2jmfDuzvjSX9ovRXsDUKHvsntpkhuLJ9',
            lamports: 1000000000000000n
          }
        ]
      });
    });

    it('should handle empty accounts array', () => {
      const rawResponse = {
        context: { slot: 2000 },
        value: [] as any[]
      };

      const result = createLargestAccountsResponse(rawResponse);

      expect(result).toEqual({
        context: {
          slot: 2000
        },
        value: []
      });
    });

    it('should handle string numbers for lamports', () => {
      const rawResponse = {
        context: { slot: 3000 },
        value: [
          {
            address: 'test-address-1',
            lamports: '1000000000000'
          },
          {
            address: 'test-address-2',
            lamports: '500000000000'
          }
        ]
      };

      const result = createLargestAccountsResponse(rawResponse);

      expect(result).toEqual({
        context: {
          slot: 3000
        },
        value: [
          {
            address: 'test-address-1',
            lamports: 1000000000000n
          },
          {
            address: 'test-address-2',
            lamports: 500000000000n
          }
        ]
      });
    });

    it('should throw error for invalid context', () => {
      const rawResponse = {
        context: null as any,
        value: [
          {
            address: 'test-address',
            lamports: 1000
          }
        ]
      };

      expect(() => createLargestAccountsResponse(rawResponse)).toThrow('context is required');
    });

    it('should throw error for missing value', () => {
      const rawResponse = {
        context: { slot: 1000 }
      };

      expect(() => createLargestAccountsResponse(rawResponse)).toThrow('Missing required property: value');
    });

    it('should throw error for non-array value', () => {
      const rawResponse = {
        context: { slot: 1000 },
        value: 'not-an-array'
      };

      expect(() => createLargestAccountsResponse(rawResponse)).toThrow('value must be an array');
    });

    it('should throw error for missing address in account entry', () => {
      const rawResponse = {
        context: { slot: 1000 },
        value: [
          {
            lamports: 1000
          }
        ]
      };

      expect(() => createLargestAccountsResponse(rawResponse)).toThrow('Missing required property: address');
    });

    it('should throw error for invalid address type', () => {
      const rawResponse = {
        context: { slot: 1000 },
        value: [
          {
            address: 123,
            lamports: 1000
          }
        ]
      };

      expect(() => createLargestAccountsResponse(rawResponse)).toThrow('address must be a string');
    });

    it('should throw error for missing lamports in account entry', () => {
      const rawResponse = {
        context: { slot: 1000 },
        value: [
          {
            address: 'test-address'
          }
        ]
      };

      expect(() => createLargestAccountsResponse(rawResponse)).toThrow('Missing required property: lamports');
    });
  });
});
