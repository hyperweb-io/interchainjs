/**
 * Base request interface for Solana RPC methods
 */

export interface BaseSolanaRequest<TOpt = {}> {
  readonly options?: TOpt;
}

// Common option types
export interface SolanaCommitmentOptions {
  readonly commitment?: SolanaCommitment;
  readonly minContextSlot?: number;
}

export interface SolanaEncodingOptions {
  readonly encoding?: SolanaEncoding;
}

export interface SolanaDataSliceOptions {
  readonly dataSlice?: {
    readonly offset: number;
    readonly length: number;
  };
}

// Solana-specific enums
export enum SolanaCommitment {
  PROCESSED = "processed",
  CONFIRMED = "confirmed", 
  FINALIZED = "finalized"
}

export enum SolanaEncoding {
  BASE58 = "base58",
  BASE64 = "base64",
  BASE64_ZSTD = "base64+zstd",
  JSON_PARSED = "jsonParsed"
}
