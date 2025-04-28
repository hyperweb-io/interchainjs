import { hexToBytes, bytesToHex } from 'ethereum-cryptography/utils';
import { keccak256 } from 'ethereum-cryptography/keccak';

/**
 * Checks if a string is a valid Ethereum address
 * Validates format and EIP-55 checksum for mixed-case addresses
 */
export const isValidEthereumAddress = (address: string): boolean => {
  // Prefix and basic format check (42 chars including prefix)
  if (typeof address !== 'string' || address.length !== 42 || address.slice(0, 2).toLowerCase() !== '0x') {
    return false;
  }

  // Check if it's a valid hex string (after prefix)
  const hexRegExp = /^[0-9a-fA-F]{40}$/;
  if (!hexRegExp.test(address.slice(2))) {
    return false;
  }

  // If the address is all lowercase or all uppercase, checksum doesn't apply
  if (address === address.toLowerCase() || address === address.toUpperCase()) {
    return true;
  }

  // Verify EIP-55 checksum
  const addressLower = address.toLowerCase();
  const addressWithoutPrefix = addressLower.slice(2);
  const hash = bytesToHex(keccak256(Buffer.from(addressWithoutPrefix)));

  for (let i = 0; i < 40; i++) {
    const hashValue = parseInt(hash[i], 16);
    // If hash value >= 8, the corresponding address char should be uppercase (if it's a letter)
    if ((hashValue >= 8 && address[i + 2] !== addressWithoutPrefix[i].toUpperCase()) ||
      (hashValue < 8 && address[i + 2] !== addressWithoutPrefix[i])) {
      return false;
    }
  }

  return true;
};

/**
 * Converts a lowercase Ethereum address to EIP-55 checksum format
 * @param address The lowercase Ethereum address (with 0x prefix)
 * @returns The EIP-55 formatted address with proper checksum
 */
export const toChecksumAddress = (address: string): string => {
  // Ensure address is valid format
  if (typeof address !== 'string' || address.length !== 42 || !address.startsWith('0x')) {
    throw new Error('Invalid Ethereum address format');
  }

  // Get lowercase address without prefix
  const addressLower = address.toLowerCase();
  const addressWithoutPrefix = addressLower.slice(2);

  // Get the keccak hash of the address
  const hash = bytesToHex(keccak256(Buffer.from(addressWithoutPrefix)));

  // Build checksum address
  let checksumAddress = '0x';

  for (let i = 0; i < 40; i++) {
    const hashValue = parseInt(hash[i], 16);
    // If hash value >= 8, make the character uppercase (if it's a letter)
    if (hashValue >= 8 && /[a-f]/.test(addressWithoutPrefix[i])) {
      checksumAddress += addressWithoutPrefix[i].toUpperCase();
    } else {
      checksumAddress += addressWithoutPrefix[i];
    }
  }

  return checksumAddress;
};