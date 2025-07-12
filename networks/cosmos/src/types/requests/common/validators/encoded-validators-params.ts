/**
 * EncodedValidatorsParams type
 */

// Encoded request types (what gets sent over RPC)
export interface EncodedValidatorsParams {
  readonly height?: string;  // string number
  readonly page?: string;    // string number
  readonly per_page?: string; // string number (note: snake_case for RPC)
}