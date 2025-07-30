import { IAddressStrategy, IAlgo } from '@interchainjs/types';
import { bech32 } from 'bech32';
import { keccak_256 } from '@noble/hashes/sha3';

// Injective Ethereum-style address strategy using keccak256 but outputting bech32
export const INJECTIVE_ETH_ADDRESS_STRATEGY: IAddressStrategy = {
  name: 'injective-eth',
  preprocessPublicKey: (pubKeyBytes: Uint8Array, compressed: boolean, algo: IAlgo) => {
    // Injective needs uncompressed key without 0x04 prefix for keccak256 hashing
    let ethPubKey = compressed ? algo.uncompress(pubKeyBytes) : pubKeyBytes;
    return ethPubKey[0] === 0x04 ? ethPubKey.slice(1) : ethPubKey;
  },
  hash: (bytes: Uint8Array) => keccak_256(bytes).slice(-20), // Take last 20 bytes like Ethereum
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