import { generateMnemonic } from '@interchainjs/crypto';
import { AminoConverter, Encoder } from '../types/signing-client';
import { TelescopeGeneratedCodec } from '@interchainjs/types';
import { assertEmpty } from '@interchainjs/utils';
import { Pubkey } from "@interchainjs/amino";
import { decodeOptionalPubkey } from "@interchainjs/pubkey";
import {
  BaseAccount,
  BaseVestingAccount,
  ContinuousVestingAccount,
  DelayedVestingAccount,
  PeriodicVestingAccount,
  PermanentLockedAccount,
  Any,
  BinaryReader,
} from "@interchainjs/cosmos-types";

/**
 * A Cosmos SDK account.
 *
 * This interface represents the common structure of all account types
 * in the Cosmos SDK, providing a standardized way to access account information.
 */
export interface Account {
  /** Bech32 account address */
  readonly address: string;
  /** Public key associated with the account, or null if not set */
  readonly pubkey: Pubkey | null;
  /** Account number for replay protection */
  readonly accountNumber: number;
  /** Sequence number for replay protection */
  readonly sequence: number;
}

export interface AccountFromAnyOption {
  readonly pubkeyDecoders?: Record<string, (pubkey: Any) => Pubkey>;
}

/**
 * Extracts a BaseAccount from simple wrapper account types using binary parsing.
 * This handles simple wrapper account types like ModuleAccount that contain
 * a BaseAccount as their first field.
 *
 * @param value - The encoded protobuf bytes
 * @returns The extracted BaseAccount or null if not found
 */
function extractBaseAccountFromWrapper(value: Uint8Array): BaseAccount | null {
  try {
    const reader = new BinaryReader(value);

    // Read the first field (tag 1) which should be BaseAccount for simple wrappers
    while (reader.pos < reader.len) {
      const tag = reader.uint32();
      const fieldNumber = tag >>> 3;

      if (fieldNumber === 1) {
        const fieldLength = reader.uint32();
        const fieldBytes = reader.buf.slice(reader.pos, reader.pos + fieldLength);
        reader.pos += fieldLength;

        // Try to decode as BaseAccount directly
        try {
          const baseAccount = BaseAccount.decode(fieldBytes);
          return baseAccount;
        } catch (baseAccountError) {
          // If that fails, continue to next field
          continue;
        }
      } else {
        // Skip other fields
        reader.skipType(tag & 7);
      }
    }

    return null;
  } catch (error) {
    // If binary parsing fails, return null to indicate failure
    return null;
  }
}

/**
 * Takes a protobuf `Any` type and converts it to a standardized `Account` object.
 *
 * This function supports BaseAccount directly, has explicit handlers for all
 * vesting account types, and uses binary parsing fallback for other wrapper
 * account types (ModuleAccount, EthAccount, etc.).
 *
 * @param accountAny - The protobuf Any containing the encoded account
 * @returns A standardized Account object
 * @throws Error if the account type is not supported
 */
export function accountFromAny(accountAny: Any, opts?: AccountFromAnyOption): Account {
  const pubkeyDecoders = opts?.pubkeyDecoders;
  switch (accountAny.typeUrl) {
    case "/cosmos.auth.v1beta1.BaseAccount": {
      const baseAccount = BaseAccount.decode(accountAny.value);
      return {
        address: baseAccount.address,
        pubkey: decodeOptionalPubkey(baseAccount.pubKey, pubkeyDecoders),
        accountNumber: Number(baseAccount.accountNumber),
        sequence: Number(baseAccount.sequence),
      };
    }
    case "/cosmos.vesting.v1beta1.ContinuousVestingAccount": {
      const vestingAccount = ContinuousVestingAccount.decode(accountAny.value);
      const baseAccount = vestingAccount.baseVestingAccount?.baseAccount;

      if (!baseAccount) {
        throw new Error(`No BaseAccount found in ContinuousVestingAccount`);
      }

      return {
        address: baseAccount.address,
        pubkey: decodeOptionalPubkey(baseAccount.pubKey, pubkeyDecoders),
        accountNumber: Number(baseAccount.accountNumber),
        sequence: Number(baseAccount.sequence),
      };
    }
    case "/cosmos.vesting.v1beta1.DelayedVestingAccount": {
      const vestingAccount = DelayedVestingAccount.decode(accountAny.value);
      const baseAccount = vestingAccount.baseVestingAccount?.baseAccount;

      if (!baseAccount) {
        throw new Error(`No BaseAccount found in DelayedVestingAccount`);
      }

      return {
        address: baseAccount.address,
        pubkey: decodeOptionalPubkey(baseAccount.pubKey, pubkeyDecoders),
        accountNumber: Number(baseAccount.accountNumber),
        sequence: Number(baseAccount.sequence),
      };
    }
    case "/cosmos.vesting.v1beta1.PeriodicVestingAccount": {
      const vestingAccount = PeriodicVestingAccount.decode(accountAny.value);
      const baseAccount = vestingAccount.baseVestingAccount?.baseAccount;

      if (!baseAccount) {
        throw new Error(`No BaseAccount found in PeriodicVestingAccount`);
      }

      return {
        address: baseAccount.address,
        pubkey: decodeOptionalPubkey(baseAccount.pubKey, pubkeyDecoders),
        accountNumber: Number(baseAccount.accountNumber),
        sequence: Number(baseAccount.sequence),
      };
    }
    case "/cosmos.vesting.v1beta1.PermanentLockedAccount": {
      const vestingAccount = PermanentLockedAccount.decode(accountAny.value);
      const baseAccount = vestingAccount.baseVestingAccount?.baseAccount;

      if (!baseAccount) {
        throw new Error(`No BaseAccount found in PermanentLockedAccount`);
      }

      return {
        address: baseAccount.address,
        pubkey: decodeOptionalPubkey(baseAccount.pubKey, pubkeyDecoders),
        accountNumber: Number(baseAccount.accountNumber),
        sequence: Number(baseAccount.sequence),
      };
    }
    default: {
      // Try to extract BaseAccount using binary parsing for other wrapper types
      // This handles ModuleAccount, EthAccount, and other unknown wrapper types
      const baseAccount = extractBaseAccountFromWrapper(accountAny.value);
      if (baseAccount) {
        return {
          address: baseAccount.address,
          pubkey: decodeOptionalPubkey(baseAccount.pubKey, pubkeyDecoders),
          accountNumber: Number(baseAccount.accountNumber),
          sequence: Number(baseAccount.sequence),
        };
      }
      throw new Error(`Unsupported account type: ${accountAny.typeUrl}`);
    }
  }
}

/**
 * from telescope generated codec to AminoConverter
 */
export function toConverter(
  generated: (AminoConverter | TelescopeGeneratedCodec<any, any, any>)
): AminoConverter {
  assertEmpty(generated.aminoType);
  return {
    aminoType: generated.aminoType,
    typeUrl: generated.typeUrl,
    fromAmino: (data: any) => {
      assertEmpty(generated.fromAmino);
      return generated.fromAmino(data);
    },
    toAmino: (data: any) => {
      assertEmpty(generated.toAmino);
      return generated.toAmino(data);
    },
  };
}

/**
 * from telescope generated codecs to AminoConverters
 */
export function toConverters(
  ...generatedArray: (AminoConverter | TelescopeGeneratedCodec<any, any, any>)[]
): AminoConverter[] {
  return generatedArray.map((generated) => toConverter(generated));
}

/**
 * from telescope generated codec to encoder
 */
export function toEncoder(
  generated: (Encoder | TelescopeGeneratedCodec<any, any, any>)
): Encoder {
  return {
    typeUrl: generated.typeUrl,
    fromPartial: generated.fromPartial,
    encode: (data: any) => {
      assertEmpty(generated.encode);
      const encoded = generated.encode(generated.fromPartial(data));
      return encoded.finish ? encoded.finish() : encoded;
    },
  };
}

/**
 * from telescope generated codecs to encoders
 */
export function toEncoders(
  ...generatedArray: (Encoder | TelescopeGeneratedCodec<any, any, any>)[]
): Encoder[] {
  return generatedArray.map((generated) => toEncoder(generated));
}

// Re-export selected utilities used by starship tests, if needed
export { generateMnemonic };

// Re-export fee helpers
export * from './fee';
