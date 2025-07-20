import { IAddressStrategy } from '@interchainjs/types';
import { sha256 } from '@noble/hashes/sha256';
import { ripemd160 } from '@noble/hashes/ripemd160';

// Use require to avoid TypeScript issues with bech32
declare var require: any;
const bech32 = require('bech32');

export const COSMOS_ADDRESS_STRATEGY: IAddressStrategy = {
  name: 'cosmos',
  hash: (bytes: Uint8Array) => ripemd160(sha256(bytes)),
  encode: (bytes: Uint8Array, prefix: string = 'cosmos') => {
    return bech32.encode(prefix, bech32.toWords(bytes));
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