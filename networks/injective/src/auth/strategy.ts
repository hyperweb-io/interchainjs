import { IAddressStrategy } from '@interchainjs/types';
import { bech32 } from 'bech32';
import { sha256 } from '@noble/hashes/sha256';
import { ripemd160 } from '@noble/hashes/ripemd160';

// Injective uses the same address generation as Cosmos but with 'inj' prefix
export const INJECTIVE_ADDRESS_STRATEGY: IAddressStrategy = {
  name: 'injective',
  hash: (bytes: Uint8Array) => ripemd160(sha256(bytes)),
  encode: (bytes: Uint8Array, prefix: string = 'inj') => {
    const words = bech32.toWords(Buffer.from(bytes));
    return bech32.encode(prefix, words);
  },
  decode: (address: string) => {
    const decoded = bech32.decode(address);
    return {
      bytes: new Uint8Array(bech32.fromWords(decoded.words)),
      prefix: decoded.prefix
    };
  },
  extractPrefix: (address: string) => {
    const match = address.match(/^([a-z]+)1/);
    return match ? match[1] : undefined;
  }
};