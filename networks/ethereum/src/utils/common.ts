import { keccak256 } from 'ethereum-cryptography/keccak';
import * as rlp from 'rlp';
import { hexToBytes, bytesToHex } from 'ethereum-cryptography/utils';

export const computeContractAddress = (fromAddress: string, nonce: number): string => {
  const fromBytes = hexToBytes(fromAddress.toLowerCase());
  const rlpEncoded = rlp.encode([fromBytes, nonce]);
  const hash = keccak256(rlpEncoded);
  const contractAddress = '0x' + bytesToHex(hash.slice(-20));
  return contractAddress;
};

/**
 * Checks if a string is a valid Ethereum address
 * Validates format and EIP-55 checksum for mixed-case addresses
 */
export const isValidEthereumAddress = (address: string): boolean => {
  // Check basic format (42 chars including 0x prefix)
  if (typeof address !== 'string' || address.length !== 42 || !address.startsWith('0x')) {
    return false;
  }

  // Check if it's a valid hex string
  const hexRegExp = /^0x[0-9a-fA-F]{40}$/;
  if (!hexRegExp.test(address)) {
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