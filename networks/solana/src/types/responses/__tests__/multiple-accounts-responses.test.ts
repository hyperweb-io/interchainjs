import { createMultipleAccountsResponse } from '../account/multiple-accounts-response';

describe('MultipleAccountsResponse', () => {
  describe('createMultipleAccountsResponse', () => {
    it('should create response with multiple accounts', () => {
      const rawResponse = {
        context: {
          apiVersion: '2.0.15',
          slot: 341197247
        },
        value: [
          {
            data: ['', 'base58'],
            executable: false,
            lamports: 88849814690250,
            owner: '11111111111111111111111111111111',
            rentEpoch: 18446744073709551615,
            space: 0
          },
          {
            data: ['', 'base58'],
            executable: false,
            lamports: 998763433,
            owner: '2WRuhE4GJFoE23DYzp2ij6ZnuQ8p9mJeU6gDgfsjR4or',
            rentEpoch: 18446744073709551615,
            space: 0
          }
        ]
      };

      const result = createMultipleAccountsResponse(rawResponse);

      expect(result).toEqual({
        context: {
          slot: 341197247
        },
        value: [
          {
            data: new Uint8Array(),
            executable: false,
            lamports: 88849814690250n,
            owner: '11111111111111111111111111111111',
            rentEpoch: 18446744073709551615n
          },
          {
            data: new Uint8Array(),
            executable: false,
            lamports: 998763433n,
            owner: '2WRuhE4GJFoE23DYzp2ij6ZnuQ8p9mJeU6gDgfsjR4or',
            rentEpoch: 18446744073709551615n
          }
        ]
      });
    });

    it('should handle null accounts for non-existent accounts', () => {
      const rawResponse = {
        context: {
          apiVersion: '2.0.15',
          slot: 341197247
        },
        value: [
          {
            data: ['', 'base58'],
            executable: false,
            lamports: 88849814690250,
            owner: '11111111111111111111111111111111',
            rentEpoch: 18446744073709551615,
            space: 0
          },
          null // Non-existent account
        ]
      };

      const result = createMultipleAccountsResponse(rawResponse);

      expect(result).toEqual({
        context: {
          slot: 341197247
        },
        value: [
          {
            data: new Uint8Array(),
            executable: false,
            lamports: 88849814690250n,
            owner: '11111111111111111111111111111111',
            rentEpoch: 18446744073709551615n
          },
          null
        ]
      });
    });

    it('should handle empty accounts array', () => {
      const rawResponse = {
        context: {
          apiVersion: '2.0.15',
          slot: 341197247
        },
        value: [] as any[]
      };

      const result = createMultipleAccountsResponse(rawResponse);

      expect(result).toEqual({
        context: {
          slot: 341197247
        },
        value: []
      });
    });
  });
});
