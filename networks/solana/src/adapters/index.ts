/**
 * Adapter exports and factory
 */

export * from './base';
export * from './solana-1_18';

import { Solana118Adapter } from './solana-1_18';
import { ISolanaProtocolAdapter } from './base';
import { SolanaProtocolVersion } from '../types/protocol';

export function createSolanaAdapter(version: SolanaProtocolVersion = SolanaProtocolVersion.SOLANA_1_18): ISolanaProtocolAdapter {
  switch (version) {
    case SolanaProtocolVersion.SOLANA_1_18:
      return new Solana118Adapter();
    default:
      throw new Error(`Unsupported Solana protocol version: ${version}`);
  }
}
