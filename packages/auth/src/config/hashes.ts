import { HashFunction } from '@interchainjs/types';
import { sha256, sha512, ripemd160, Keccak256 } from '@interchainjs/crypto';

// Hash function implementations
const sha256Hash: HashFunction = sha256;
const sha512Hash: HashFunction = sha512;
const ripemd160Hash: HashFunction = ripemd160;
const keccak256Hash: HashFunction = (data: Uint8Array) => new Keccak256(data).digest();

// Preset hash functions mapping
export const PRESET_HASHES: Record<string, HashFunction> = {
  'sha256': sha256Hash,
  'sha512': sha512Hash,
  'keccak256': keccak256Hash,
  'ripemd160': ripemd160Hash,
};

// Internal helper to resolve hash function
export function resolveHashFunction(hashFn?: HashFunction | string): HashFunction | undefined {
  if (!hashFn) return undefined;
  if (typeof hashFn === 'string') {
    if (!PRESET_HASHES[hashFn]) {
      throw new Error(`Unknown hash function: ${hashFn}`);
    }
    return PRESET_HASHES[hashFn];
  }
  return hashFn;
}