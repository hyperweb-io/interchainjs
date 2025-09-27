/**
 * Tests for program accounts response codec
 */

import { createProgramAccountsResponse } from '../account/program-accounts-response';

describe('Program Accounts Response Codec', () => {
  describe('createProgramAccountsResponse', () => {
    it('should create program accounts response without context', () => {
      const data = [
        {
          pubkey: "CxELquR1gPP8wHe33gZ4QxqGB3sZ9RSwsJ2KshVewkFY",
          account: {
            data: "2R9jLfiAQ9bgdcw6h8s44439",
            executable: false,
            lamports: 15298080,
            owner: "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
            rentEpoch: 28,
            space: 42
          }
        }
      ];

      const result = createProgramAccountsResponse(data, false);
      
      expect(result).toHaveProperty('accounts');
      expect((result as any).accounts).toHaveLength(1);
      expect((result as any).accounts[0].pubkey).toBe("CxELquR1gPP8wHe33gZ4QxqGB3sZ9RSwsJ2KshVewkFY");
      expect((result as any).accounts[0].account.lamports).toBe(BigInt(15298080));
      expect((result as any).accounts[0].account.space).toBe(42);
    });

    it('should create program accounts response with context', () => {
      const data = {
        context: { slot: 123456 },
        value: [
          {
            pubkey: "CxELquR1gPP8wHe33gZ4QxqGB3sZ9RSwsJ2KshVewkFY",
            account: {
              data: "2R9jLfiAQ9bgdcw6h8s44439",
              executable: false,
              lamports: 15298080,
              owner: "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
              rentEpoch: 28,
              space: 42
            }
          }
        ]
      };

      const result = createProgramAccountsResponse(data, true);
      
      expect(result).toHaveProperty('context');
      expect(result).toHaveProperty('value');
      expect((result as any).context.slot).toBe(123456);
      expect((result as any).value).toHaveLength(1);
      expect((result as any).value[0].pubkey).toBe("CxELquR1gPP8wHe33gZ4QxqGB3sZ9RSwsJ2KshVewkFY");
      expect((result as any).value[0].account.lamports).toBe(BigInt(15298080));
      expect((result as any).value[0].account.space).toBe(42);
    });

    it('should handle empty array', () => {
      const data: any[] = [];
      const result = createProgramAccountsResponse(data, false);
      
      expect(result).toHaveProperty('accounts');
      expect((result as any).accounts).toHaveLength(0);
    });

    it('should throw error for invalid data', () => {
      expect(() => createProgramAccountsResponse(null, false)).toThrow();
      expect(() => createProgramAccountsResponse("invalid", false)).toThrow();
    });
  });
});
