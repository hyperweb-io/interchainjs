import { sha256 } from '@noble/hashes/sha256';
import { ripemd160 } from '@noble/hashes/ripemd160';
import { base58check, bech32, bech32m } from '@scure/base';
import { AddressType } from '../types/script';
import { BitcoinNetwork, BITCOIN_MAINNET } from '../types/network';

/**
 * Create a P2PKH address from a public key
 */
export function createP2PKHAddress(pubKey: Uint8Array, network: BitcoinNetwork = BITCOIN_MAINNET): string {
  const pubKeyHash = ripemd160(sha256(pubKey));
  
  const versionedPayload = new Uint8Array(21);
  versionedPayload[0] = network.pubKeyHash;
  versionedPayload.set(pubKeyHash, 1);
  
  return base58check.encode(versionedPayload);
}

/**
 * Create a P2SH address from a redeem script
 */
export function createP2SHAddress(redeemScript: Uint8Array, network: BitcoinNetwork = BITCOIN_MAINNET): string {
  const scriptHash = ripemd160(sha256(redeemScript));
  
  const versionedPayload = new Uint8Array(21);
  versionedPayload[0] = network.scriptHash;
  versionedPayload.set(scriptHash, 1);
  
  return base58check.encode(versionedPayload);
}

/**
 * Create a P2WPKH address from a public key
 */
export function createP2WPKHAddress(pubKey: Uint8Array, network: BitcoinNetwork = BITCOIN_MAINNET): string {
  const pubKeyHash = ripemd160(sha256(pubKey));
  
  return bech32.encode(network.bech32, 0, pubKeyHash);
}

/**
 * Create a P2WSH address from a witness script
 */
export function createP2WSHAddress(witnessScript: Uint8Array, network: BitcoinNetwork = BITCOIN_MAINNET): string {
  const scriptHash = sha256(witnessScript);
  
  return bech32.encode(network.bech32, 0, scriptHash);
}

/**
 * Create a P2TR address from a public key
 */
export function createP2TRAddress(pubKey: Uint8Array, network: BitcoinNetwork = BITCOIN_MAINNET): string {
  return bech32m.encode(network.bech32, 1, pubKey.slice(1, 33)); // Strip the first byte and use x-only pubkey
}

/**
 * Validate a Bitcoin address
 */
export function isValidAddress(address: string, network: BitcoinNetwork = BITCOIN_MAINNET): boolean {
  try {
    if (address.startsWith('1') || address.startsWith('3') || 
        address.startsWith('m') || address.startsWith('n') || address.startsWith('2')) {
      const decoded = base58check.decode(address);
      const version = decoded[0];
      
      if (address.startsWith('1') || address.startsWith('m') || address.startsWith('n')) {
        return version === network.pubKeyHash;
      } else {
        return version === network.scriptHash;
      }
    }
    
    if (address.startsWith(network.bech32)) {
      try {
        const { prefix } = bech32.decode(address);
        return prefix === network.bech32;
      } catch (e) {
        const { prefix } = bech32m.decode(address);
        return prefix === network.bech32;
      }
    }
    
    return false;
  } catch (e) {
    return false;
  }
}

/**
 * Get the type of a Bitcoin address
 */
export function getAddressType(address: string, network: BitcoinNetwork = BITCOIN_MAINNET): AddressType | 'unknown' {
  try {
    if (address.startsWith('1') || address.startsWith('m') || address.startsWith('n')) {
      return AddressType.P2PKH;
    } else if (address.startsWith('3') || address.startsWith('2')) {
      return AddressType.P2SH;
    } else if (address.startsWith(network.bech32)) {
      try {
        const { words } = bech32.decode(address);
        if (words[0] === 0) {
          if (words.length === 21) { // 1 byte version + 20 bytes pubkey hash
            return AddressType.P2WPKH;
          } else if (words.length === 33) { // 1 byte version + 32 bytes script hash
            return AddressType.P2WSH;
          }
        } else if (words[0] === 1) {
          try {
            bech32m.decode(address);
            return AddressType.P2TR;
          } catch (e) {
          }
        }
      } catch (e) {
      }
    }
    return 'unknown';
  } catch (e) {
    return 'unknown';
  }
}
