import { IAddressStrategy, IAlgo } from '@interchainjs/types';
import { bech32 } from 'bech32';
import { sha256 } from '@noble/hashes/sha2.js';
import { ripemd160 } from '@noble/hashes/legacy.js';
import { keccak_256 } from '@noble/hashes/sha3.js';
import { toHex, fromHex } from '@interchainjs/utils';

export const COSMOS_ADDRESS_STRATEGY: IAddressStrategy = {
  name: 'cosmos',
  hash: (bytes: Uint8Array) => ripemd160(sha256(bytes)),
  encode: (bytes: Uint8Array, prefix: string = 'cosmos') => bech32.encode(prefix, bech32.toWords(bytes)),
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

function toEIP55Checksum(address: string): string {
  const addr = address.toLowerCase().replace('0x', '');
  const hash = toHex(keccak_256(Buffer.from(addr, 'utf8')));
  let checksumAddress = '0x';
  for (let i = 0; i < addr.length; i++) {
    checksumAddress += parseInt(hash[i], 16) >= 8 ? addr[i].toUpperCase() : addr[i];
  }
  return checksumAddress;
}

export const ETHEREUM_ADDRESS_STRATEGY: IAddressStrategy = {
  name: 'ethereum',
  preprocessPublicKey: (pubKeyBytes: Uint8Array, compressed: boolean, algo: IAlgo) => {
    let ethPubKey = compressed ? algo.uncompress(pubKeyBytes) : pubKeyBytes;
    return ethPubKey[0] === 0x04 ? ethPubKey.slice(1) : ethPubKey;
  },
  hash: (bytes: Uint8Array) => keccak_256(bytes).slice(-20),
  encode: (bytes: Uint8Array) => '0x' + toHex(bytes),
  decode: (address: string) => {
    if (!address.startsWith('0x')) throw new Error('Invalid Ethereum address format');
    return { bytes: fromHex(address.slice(2)), prefix: '0x' };
  },
  checksum: (address: string) => toEIP55Checksum(address),
  validateChecksum: (address: string) => address === toEIP55Checksum(address.toLowerCase()),
  extractPrefix: (address: string) => (address.startsWith('0x') ? '0x' : undefined)
};

export const INJECTIVE_ETH_ADDRESS_STRATEGY: IAddressStrategy = {
  name: 'injective-eth',
  preprocessPublicKey: (pubKeyBytes: Uint8Array, compressed: boolean, algo: IAlgo) => {
    let ethPubKey = compressed ? algo.uncompress(pubKeyBytes) : pubKeyBytes;
    return ethPubKey[0] === 0x04 ? ethPubKey.slice(1) : ethPubKey;
  },
  hash: (bytes: Uint8Array) => keccak_256(bytes).slice(-20),
  encode: (bytes: Uint8Array, prefix: string = 'inj') => {
    const words = bech32.toWords(Buffer.from(bytes));
    return bech32.encode(prefix, words);
  },
  decode: (address: string) => {
    const decoded = bech32.decode(address);
    return { bytes: new Uint8Array(bech32.fromWords(decoded.words)), prefix: decoded.prefix };
  },
  extractPrefix: (address: string) => {
    const match = address.match(/^([a-z]+)1/);
    return match ? match[1] : undefined;
  }
};

