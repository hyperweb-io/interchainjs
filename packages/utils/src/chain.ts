import { chains } from '@chain-registry/v2';
import { Chain } from '@chain-registry/v2-types';

/**
 * get chain by chain id from chain registry
 */
export function getChainById(chainId: string): Chain {
  return chains.find((c) => c.chainId === chainId);
}

/**
 * get bech32 prefix by chain id
 */
export function getPrefix(chainId: string): string {
  const prefix = getChainById(chainId)?.bech32Prefix;
  if (!prefix) {
    throw new Error(`Cannot find bech32_prefix for chain ${chainId}.`);
  }
  return prefix;
}