/**
 * EncodedAbciQueryParams type and creator
 */

/**
 * ABCI request parameter types and codecs
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureBoolean } from '../../../codec/converters';
// TODO: Replace with proper types when dependencies are available
type toHex = any;

// Encoded request types (what gets sent over RPC)
export interface EncodedAbciQueryParams {
  readonly path: string;
  readonly data: string;  // hex string
  readonly height?: string;  // string number
  readonly prove?: boolean;
}
