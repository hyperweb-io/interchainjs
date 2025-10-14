/**
 * Tests for transaction response codecs
 */

import {
  createTransactionCountResponse,
  createSignatureStatusesResponse,
  createTransactionResponse,
  createAirdropResponse
} from '../transaction';

describe('Transaction Response Codecs', () => {
  describe('createTransactionCountResponse', () => {
    it('should create transaction count response from number', () => {
      const data = 12345;
      const result = createTransactionCountResponse(data);

      expect(result).toBe(12345n);
    });

    it('should create transaction count response from string', () => {
      const data = "12345";
      const result = createTransactionCountResponse(data);

      expect(result).toBe(12345n);
    });

    it('should return 0 for null/undefined data', () => {
      expect(createTransactionCountResponse(null)).toBe(0n);
      expect(createTransactionCountResponse(undefined)).toBe(0n);
    });
  });

  describe('createSignatureStatusesResponse', () => {
    it('should create signature statuses response', () => {
      const data = {
        context: { slot: 123456 },
        value: [
          {
            slot: 123456,
            confirmations: 10,
            err: null as any,
            status: null as any,
            confirmationStatus: "confirmed"
          },
          null
        ]
      };

      const result = createSignatureStatusesResponse(data);

      expect(result.context.slot).toBe(123456);
      expect(result.value).toHaveLength(2);
      expect(result.value[0]).toEqual({
        slot: 123456,
        confirmations: 10,
        err: null,
        status: null,
        confirmationStatus: "confirmed"
      });
      expect(result.value[1]).toBeNull();
    });
  });

  describe('createTransactionResponse', () => {
    it('should create transaction response', () => {
      const data = {
        slot: 123456,
        transaction: {
          message: {
            accountKeys: ["11111111111111111111111111111111"],
            header: {
              numRequiredSignatures: 1,
              numReadonlySignedAccounts: 0,
              numReadonlyUnsignedAccounts: 1
            },
            instructions: [] as any[],
            recentBlockhash: "11111111111111111111111111111111"
          },
          signatures: ["signature1"]
        },
        meta: {
          err: null as any,
          fee: 5000,
          preBalances: [1000000],
          postBalances: [995000],
          logMessages: [] as any[],
          preTokenBalances: [] as any[],
          postTokenBalances: [] as any[]
        }
      };

      const result = createTransactionResponse(data);

      expect(result).not.toBeNull();
      expect(result!.slot).toBe(123456);
      expect(result!.transaction).toBeDefined();
      expect(result!.meta).toBeDefined();
    });

    it('should return null for null data', () => {
      const result = createTransactionResponse(null);
      expect(result).toBeNull();
    });
  });

  describe('createAirdropResponse', () => {
    it('should create airdrop response from signature string', () => {
      const signature = "5VERv8NMvzbJMEkV8xnrLkEaWRtSz9CosKDYjCJjBRnbJLgp8uirBgmQpjKhoR4tjF3ZpRzrFmBV6UjKdiSZkQUW";
      const result = createAirdropResponse(signature);

      expect(result).toBe(signature);
    });

    it('should throw error for invalid signature', () => {
      expect(() => createAirdropResponse(null)).toThrow();
      expect(() => createAirdropResponse(123)).toThrow();
    });
  });
});
