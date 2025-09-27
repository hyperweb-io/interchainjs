/**
 * Tests for token response codecs
 */

import {
  createTokenAccountsByOwnerResponse,
  createTokenAccountBalanceResponse,
  createTokenSupplyResponse,
  createTokenLargestAccountsResponse
} from '../token';

describe('Token Response Codecs', () => {
  describe('createTokenAccountsByOwnerResponse', () => {
    it('should create token accounts by owner response', () => {
      const data = {
        context: { slot: 123456 },
        value: [
          {
            pubkey: "C2jDL4pcwpE2pP5EryTGn842JJUJTcurPGZUquQjySxK",
            account: {
              data: {
                parsed: {
                  info: {
                    mint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                    owner: "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM",
                    tokenAmount: {
                      amount: "1000000",
                      decimals: 6,
                      uiAmount: 1.0,
                      uiAmountString: "1"
                    }
                  },
                  type: "account"
                },
                program: "spl-token"
              },
              executable: false,
              lamports: 2039280,
              owner: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              rentEpoch: 361,
              space: 165
            }
          }
        ]
      };

      const result = createTokenAccountsByOwnerResponse(data);

      expect(result.context.slot).toBe(123456);
      expect(result.value).toHaveLength(1);
      expect(result.value[0].pubkey).toBe("C2jDL4pcwpE2pP5EryTGn842JJUJTcurPGZUquQjySxK");
      expect(result.value[0].account.lamports).toBe(2039280);
    });
  });

  describe('createTokenAccountBalanceResponse', () => {
    it('should create token account balance response', () => {
      const data = {
        context: { slot: 123456 },
        value: {
          amount: "1000000",
          decimals: 6,
          uiAmount: 1.0,
          uiAmountString: "1"
        }
      };

      const result = createTokenAccountBalanceResponse(data);

      expect(result.context.slot).toBe(123456);
      expect(result.value.amount).toBe("1000000");
      expect(result.value.decimals).toBe(6);
      expect(result.value.uiAmount).toBe(1.0);
      expect(result.value.uiAmountString).toBe("1");
    });
  });

  describe('createTokenSupplyResponse', () => {
    it('should create token supply response', () => {
      const data = {
        context: { slot: 123456 },
        value: {
          amount: "1000000000",
          decimals: 6,
          uiAmount: 1000.0,
          uiAmountString: "1000"
        }
      };

      const result = createTokenSupplyResponse(data);

      expect(result.context.slot).toBe(123456);
      expect(result.value.amount).toBe("1000000000");
      expect(result.value.decimals).toBe(6);
      expect(result.value.uiAmount).toBe(1000.0);
      expect(result.value.uiAmountString).toBe("1000");
    });
  });

  describe('createTokenLargestAccountsResponse', () => {
    it('should create token largest accounts response', () => {
      const data = {
        context: { slot: 123456 },
        value: [
          {
            address: "FVb7rDHnqScjuZN4Tep1pYrPS9VCTp6ZKy1uZUND1LVz",
            amount: "1000000000",
            decimals: 6,
            uiAmount: 1000.0,
            uiAmountString: "1000"
          }
        ]
      };

      const result = createTokenLargestAccountsResponse(data);

      expect(result.context.slot).toBe(123456);
      expect(result.value).toHaveLength(1);
      expect(result.value[0].address).toBe("FVb7rDHnqScjuZN4Tep1pYrPS9VCTp6ZKy1uZUND1LVz");
      expect(result.value[0].amount).toBe("1000000000");
    });
  });
});
