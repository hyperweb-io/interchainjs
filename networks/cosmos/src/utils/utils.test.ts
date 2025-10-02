import { accountFromAny, Account } from ".";
import {
  BaseAccount,
  ModuleAccount,
  ContinuousVestingAccount,
  DelayedVestingAccount,
  PeriodicVestingAccount,
  PermanentLockedAccount,
  Any,
  BaseVestingAccount,
} from "@interchainjs/cosmos-types";
import { encodePubkey } from "@interchainjs/pubkey";
import { encodeSecp256k1Pubkey } from "@interchainjs/amino";

describe("accountFromAny", () => {
  const testAddress = "cosmos1abc123def456ghi789jkl012mno345pqr678st";

  // Create a valid compressed secp256k1 pubkey (33 bytes starting with 0x02 or 0x03)
  const validPubkeyBytes = new Uint8Array(33);
  validPubkeyBytes[0] = 0x02; // Compressed pubkey prefix
  for (let i = 1; i < 33; i++) {
    validPubkeyBytes[i] = i % 256;
  }
  const testPubkey = encodeSecp256k1Pubkey(validPubkeyBytes);
  const testAccountNumber = BigInt(42);
  const testSequence = BigInt(7);

  describe("BaseAccount", () => {
    it("should decode a BaseAccount correctly", () => {
      const baseAccount: BaseAccount = {
        address: testAddress,
        pubKey: encodePubkey(testPubkey),
        accountNumber: testAccountNumber,
        sequence: testSequence,
      };

      const accountAny: Any = {
        typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
        value: BaseAccount.encode(baseAccount).finish(),
      };

      const result = accountFromAny(accountAny);

      expect(result).toEqual({
        address: testAddress,
        pubkey: testPubkey,
        accountNumber: 42,
        sequence: 7,
      });
    });

    it("should handle BaseAccount with no pubkey", () => {
      const baseAccount: BaseAccount = {
        address: testAddress,
        pubKey: undefined,
        accountNumber: testAccountNumber,
        sequence: testSequence,
      };

      const accountAny: Any = {
        typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
        value: BaseAccount.encode(baseAccount).finish(),
      };

      const result = accountFromAny(accountAny);

      expect(result).toEqual({
        address: testAddress,
        pubkey: null,
        accountNumber: 42,
        sequence: 7,
      });
    });

    it("should use custom pubkey decoder when decodePubkey fails", () => {
      const customTypeUrl = "/custom.crypto.v1.CustomPubKey";
      const fallbackPubkey = testPubkey;

      const baseAccount: BaseAccount = {
        address: testAddress,
        pubKey: {
          typeUrl: customTypeUrl,
          value: Uint8Array.from([1, 2, 3]),
        },
        accountNumber: testAccountNumber,
        sequence: testSequence,
      };

      const accountAny: Any = {
        typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
        value: BaseAccount.encode(baseAccount).finish(),
      };

      const decoder = jest.fn().mockReturnValue(fallbackPubkey);

      const result = accountFromAny(accountAny, {
        pubkeyDecoders: {
          [customTypeUrl]: decoder,
        },
      });

      expect(decoder).toHaveBeenCalledTimes(1);
      expect(decoder).toHaveBeenCalledWith(expect.objectContaining({ typeUrl: customTypeUrl }));
      expect(result).toEqual({
        address: testAddress,
        pubkey: fallbackPubkey,
        accountNumber: 42,
        sequence: 7,
      });
    });
  });

  describe("Wrapper account types using binary parsing", () => {
    it("should decode a ModuleAccount using binary parsing", () => {
      const baseAccount: BaseAccount = {
        address: testAddress,
        pubKey: encodePubkey(testPubkey),
        accountNumber: testAccountNumber,
        sequence: testSequence,
      };

      const moduleAccount: ModuleAccount = {
        baseAccount,
        name: "test-module",
        permissions: ["mint", "burn"],
      };

      const accountAny: Any = {
        typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
        value: ModuleAccount.encode(moduleAccount).finish(),
      };

      const result = accountFromAny(accountAny);

      expect(result).toEqual({
        address: testAddress,
        pubkey: testPubkey,
        accountNumber: 42,
        sequence: 7,
      });
    });

    it("should decode a ContinuousVestingAccount using enhanced binary parsing", () => {
      const baseAccount: BaseAccount = {
        address: testAddress,
        pubKey: encodePubkey(testPubkey),
        accountNumber: testAccountNumber,
        sequence: testSequence,
      };

      const baseVestingAccount: BaseVestingAccount = {
        baseAccount,
        originalVesting: [],
        delegatedFree: [],
        delegatedVesting: [],
        endTime: BigInt(1000000),
      };

      const vestingAccount: ContinuousVestingAccount = {
        baseVestingAccount,
        startTime: BigInt(500000),
      };

      const accountAny: Any = {
        typeUrl: "/cosmos.vesting.v1beta1.ContinuousVestingAccount",
        value: ContinuousVestingAccount.encode(vestingAccount).finish(),
      };

      const result = accountFromAny(accountAny);

      expect(result).toEqual({
        address: testAddress,
        pubkey: testPubkey,
        accountNumber: 42,
        sequence: 7,
      });
    });

    it("should decode a DelayedVestingAccount using enhanced binary parsing", () => {
      const baseAccount: BaseAccount = {
        address: testAddress,
        pubKey: encodePubkey(testPubkey),
        accountNumber: testAccountNumber,
        sequence: testSequence,
      };

      const baseVestingAccount: BaseVestingAccount = {
        baseAccount,
        originalVesting: [],
        delegatedFree: [],
        delegatedVesting: [],
        endTime: BigInt(2000000),
      };

      const vestingAccount: DelayedVestingAccount = {
        baseVestingAccount,
      };

      const accountAny: Any = {
        typeUrl: "/cosmos.vesting.v1beta1.DelayedVestingAccount",
        value: DelayedVestingAccount.encode(vestingAccount).finish(),
      };

      const result = accountFromAny(accountAny);

      expect(result).toEqual({
        address: testAddress,
        pubkey: testPubkey,
        accountNumber: 42,
        sequence: 7,
      });
    });

    it("should decode a PeriodicVestingAccount using enhanced binary parsing", () => {
      const baseAccount: BaseAccount = {
        address: testAddress,
        pubKey: encodePubkey(testPubkey),
        accountNumber: testAccountNumber,
        sequence: testSequence,
      };

      const baseVestingAccount: BaseVestingAccount = {
        baseAccount,
        originalVesting: [],
        delegatedFree: [],
        delegatedVesting: [],
        endTime: BigInt(3000000),
      };

      const vestingAccount: PeriodicVestingAccount = {
        baseVestingAccount,
        startTime: BigInt(1500000),
        vestingPeriods: [],
      };

      const accountAny: Any = {
        typeUrl: "/cosmos.vesting.v1beta1.PeriodicVestingAccount",
        value: PeriodicVestingAccount.encode(vestingAccount).finish(),
      };

      const result = accountFromAny(accountAny);

      expect(result).toEqual({
        address: testAddress,
        pubkey: testPubkey,
        accountNumber: 42,
        sequence: 7,
      });
    });

    it("should decode a PermanentLockedAccount using enhanced binary parsing", () => {
      const baseAccount: BaseAccount = {
        address: testAddress,
        pubKey: encodePubkey(testPubkey),
        accountNumber: testAccountNumber,
        sequence: testSequence,
      };

      const baseVestingAccount: BaseVestingAccount = {
        baseAccount,
        originalVesting: [],
        delegatedFree: [],
        delegatedVesting: [],
        endTime: BigInt(4000000),
      };

      const vestingAccount: PermanentLockedAccount = {
        baseVestingAccount,
      };

      const accountAny: Any = {
        typeUrl: "/cosmos.vesting.v1beta1.PermanentLockedAccount",
        value: PermanentLockedAccount.encode(vestingAccount).finish(),
      };

      const result = accountFromAny(accountAny);

      expect(result).toEqual({
        address: testAddress,
        pubkey: testPubkey,
        accountNumber: 42,
        sequence: 7,
      });
    });

    it("should handle unknown account types that follow BaseAccount pattern", () => {
      // Create a BaseAccount and encode it
      const baseAccount: BaseAccount = {
        address: "cosmos1test123unknown456type789",
        pubKey: encodePubkey(testPubkey),
        accountNumber: BigInt(999),
        sequence: BigInt(123),
      };

      // Create a mock wrapper account that has BaseAccount as first field (tag 1)
      const baseAccountBytes = BaseAccount.encode(baseAccount).finish();

      // Create a protobuf message with BaseAccount as field 1
      const mockWrapperBytes = new Uint8Array([
        0x0a, // tag 1, wire type 2 (length-delimited)
        baseAccountBytes.length, // length of BaseAccount
        ...baseAccountBytes,
        0x12, 0x04, 0x74, 0x65, 0x73, 0x74, // tag 2, some additional field "test"
      ]);

      const accountAny: Any = {
        typeUrl: "/unknown.wrapper.CustomAccountType",
        value: mockWrapperBytes,
      };

      const result = accountFromAny(accountAny);

      expect(result).toEqual({
        address: "cosmos1test123unknown456type789",
        pubkey: testPubkey,
        accountNumber: 999,
        sequence: 123,
      });
    });
  });

  describe("Error handling", () => {
    it("should throw error for unsupported account type", () => {
      const accountAny: Any = {
        typeUrl: "/unknown.account.Type",
        value: new Uint8Array(),
      };

      expect(() => accountFromAny(accountAny)).toThrow(
        "Unsupported account type: /unknown.account.Type"
      );
    });
  });
});
