import bs58 from "bs58";

import {
  DEFAULT_LAMPORTS_PER_BYTE_YEAR,
  DEFAULT_RENT_EXEMPTION_MULTIPLIER,
  calculateRentExemption,
  formatSolanaAddress,
  isValidSolanaAddress
} from "../account";

describe("account utils", () => {
  describe("calculateRentExemption", () => {
    it("estimates rent using the default multiplier", () => {
      const size = 165;
      const expected = Math.ceil(
        size * DEFAULT_LAMPORTS_PER_BYTE_YEAR * DEFAULT_RENT_EXEMPTION_MULTIPLIER
      );

      expect(calculateRentExemption(size)).toBe(expected);
    });

    it("accepts custom rent parameters", () => {
      expect(calculateRentExemption(100, 1_000, 1.5)).toBe(150_000);
    });

    it("rejects invalid inputs", () => {
      expect(() => calculateRentExemption(-1)).toThrow(/non-negative integer/);
      expect(() => calculateRentExemption(10, 0)).toThrow(/positive finite number/);
      expect(() => calculateRentExemption(10, 100, 0)).toThrow(/positive finite number/);
    });
  });

  describe("isValidSolanaAddress", () => {
    const validAddress = bs58.encode(Buffer.alloc(32, 1));

    it("accepts base58-encoded 32-byte payloads", () => {
      expect(isValidSolanaAddress(validAddress)).toBe(true);
    });

    it("rejects malformed addresses", () => {
      expect(isValidSolanaAddress("")).toBe(false);
      expect(isValidSolanaAddress("O0O0O0O0O0O0O0O0O0O0O0O0O0O0O0O0O0O0O0O")).toBe(false);
      expect(isValidSolanaAddress("111111111111111111111111111111111")).toBe(false);
    });
  });

  describe("formatSolanaAddress", () => {
    const address = bs58.encode(Buffer.from(Array.from({ length: 32 }, (_, i) => i + 1)));

    it("truncates the middle segment by default", () => {
      expect(formatSolanaAddress(address, 4, 4)).toBe(
        `${address.slice(0, 4)}...${address.slice(-4)}`
      );
    });

    it("returns the address unchanged when segments cover the entire string", () => {
      const shortAddress = "12345678";
      expect(formatSolanaAddress(shortAddress, 4, 4)).toBe(shortAddress);
    });

    it("validates segment lengths", () => {
      expect(() => formatSolanaAddress(address, -1, 4)).toThrow(/non-negative integer/);
      expect(() => formatSolanaAddress(address, 4, -1)).toThrow(/non-negative integer/);
      expect(() => formatSolanaAddress(address, 4, 4, "")).toThrow(/must not be empty/);
    });
  });
});
