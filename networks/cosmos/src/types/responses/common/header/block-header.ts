/**
 * BlockHeader type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString, ensureBytes, ensureDate } from '../../../codec/converters';

// Import dependencies from same module
import { BlockVersion } from './block-version';
import { BlockId } from '../header/block-id';
import { BlockHeaderCodec } from '../header/block-header';

export interface BlockHeader {
  readonly version: BlockVersion;
  readonly chainId: string;
  readonly height: number;
  readonly time: Date;
  readonly lastBlockId: BlockId | null;
  readonly lastCommitHash: Uint8Array;
  readonly dataHash: Uint8Array;
  readonly validatorsHash: Uint8Array;
  readonly nextValidatorsHash: Uint8Array;
  readonly consensusHash: Uint8Array;
  readonly appHash: Uint8Array;
  readonly lastResultsHash: Uint8Array;
  readonly evidenceHash: Uint8Array;
  readonly proposerAddress: Uint8Array;
}

export function createBlockHeader(data: any): BlockHeader {
  return BlockHeaderCodec.create(data);
}
