import { IAddressStrategy, IAlgo } from '@interchainjs/types';
import { toHex, fromHex } from '@interchainjs/utils';
import { keccak_256 } from '@noble/hashes/sha3';

// EIP-55 checksum implementation
function toEIP55Checksum(address: string): string {
  const addr = address.toLowerCase().replace('0x', '');
  const hash = toHex(keccak_256(Buffer.from(addr, 'utf8')));
  
  let checksumAddress = '0x';
  for (let i = 0; i < addr.length; i++) {
    if (parseInt(hash[i], 16) >= 8) {
      checksumAddress += addr[i].toUpperCase();
    } else {
      checksumAddress += addr[i];
    }
  }
  return checksumAddress;
}

export const ETHEREUM_ADDRESS_STRATEGY: IAddressStrategy = {
  name: 'ethereum',
  preprocessPublicKey: (pubKeyBytes: Uint8Array, compressed: boolean, algo: IAlgo) => {
    // Ethereum needs uncompressed key without 0x04 prefix
    let ethPubKey = compressed ? algo.uncompress(pubKeyBytes) : pubKeyBytes;
    return ethPubKey[0] === 0x04 ? ethPubKey.slice(1) : ethPubKey;
  },
  hash: (bytes: Uint8Array) => keccak_256(bytes).slice(-20),
  encode: (bytes: Uint8Array) => '0x' + toHex(bytes),
  decode: (address: string) => {
    if (!address.startsWith('0x')) {
      throw new Error('Invalid Ethereum address format');
    }
    return {
      bytes: fromHex(address.slice(2)),
      prefix: '0x'
    };
  },
  checksum: (address: string) => toEIP55Checksum(address),
  validateChecksum: (address: string) => {
    return address === toEIP55Checksum(address.toLowerCase());
  },
  extractPrefix: (address: string) => address.startsWith('0x') ? '0x' : undefined
};