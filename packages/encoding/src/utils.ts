import { fromAscii } from "./ascii";
import { fromBech32 } from "./bech32";
import { Decimal, Uint64 } from "@interchainjs/math";

/**
 * Takes a bech32 encoded address and returns the data part. The prefix is ignored and discarded.
 * This is called AccAddress in Cosmos SDK, which is basically an alias for raw binary data.
 * The result is typically 20 bytes long but not restricted to that.
 */
export function toAccAddress(address: string): Uint8Array {
  return fromBech32(address).data;
}

/**
 * Takes a uint64 value as string, number, BigInt or Uint64 and returns a BigInt
 * of it.
 */
export function longify(value: string | number | Uint64): bigint {
  const checkedValue = Uint64.fromString(value.toString());
  return BigInt(checkedValue.toString());
}

/**
 * Takes a string or binary encoded `github.com/cosmos/cosmos-sdk/types.Dec` from the
 * protobuf API and converts it into a `Decimal` with 18 fractional digits.
 *
 * See https://github.com/cosmos/cosmos-sdk/issues/10863 for more context why this is needed.
 */
export function decodeCosmosSdkDecFromProto(input: string | Uint8Array): Decimal {
  const asString = typeof input === "string" ? input : fromAscii(input);
  return Decimal.fromAtomics(asString, 18);
}
