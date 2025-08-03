import { toHex, fromHex } from '@interchainjs/utils';
import { keccak_256 } from '@noble/hashes/sha3';

/**
 * EIP-55 checksum implementation
 */
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

/**
 * Validate Ethereum address format and checksum
 */
export function isValidEthereumAddress(address: string): boolean {
  // Check basic format - accept both 0x and 0X prefixes
  if ((!address.startsWith('0x') && !address.startsWith('0X')) || address.length !== 42) {
    return false;
  }

  // Check if it's a valid hex string
  const hex = address.slice(2);
  if (!/^[a-fA-F0-9]{40}$/.test(hex)) {
    return false;
  }

  // If it's all lowercase or all uppercase, it's valid (no checksum)
  if (hex === hex.toLowerCase() || hex === hex.toUpperCase()) {
    return true;
  }

  // If it has mixed case, validate the checksum
  try {
    // Normalize to lowercase 0x prefix for checksum validation
    const normalizedAddress = '0x' + hex.toLowerCase();
    const expectedChecksum = toEIP55Checksum(normalizedAddress);
    return '0x' + hex === expectedChecksum;
  } catch {
    return false;
  }
}

/**
 * Convert an Ethereum address to its checksummed version
 */
export function toChecksumAddress(address: string): string {
  if (!address.startsWith('0x') || address.length !== 42) {
    throw new Error('Invalid Ethereum address format');
  }

  const hex = address.slice(2);
  if (!/^[a-fA-F0-9]{40}$/.test(hex)) {
    throw new Error('Invalid Ethereum address format');
  }

  return toEIP55Checksum(address.toLowerCase());
}
