export interface AddressValidator {
  isValid(address: string): boolean;
  normalize?(address: string): string;
  getPrefix?(address: string): string | undefined;
}

export class EthereumAddressValidator implements AddressValidator {
  private toEIP55Checksum(address: string): string {
    const addr = address.toLowerCase().replace('0x', '');
    // keccak256 of ascii lowercase hex
    const { keccak_256 } = require('@noble/hashes/sha3.js');
    const { toHex } = require('./encoding');
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

  isValid(address: string): boolean {
    if (!address.startsWith('0x') || address.length !== 42) return false;
    const hex = address.slice(2);
    if (!/^[a-fA-F0-9]{40}$/.test(hex)) return false;
    if (/^[a-f0-9]{40}$/.test(hex) || /^[A-F0-9]{40}$/.test(hex)) return true;
    try {
      return this.toEIP55Checksum('0x' + hex.toLowerCase()) === address;
    } catch {
      return false;
    }
  }

  normalize(address: string): string {
    if (!address.startsWith('0x') || address.length !== 42) {
      throw new Error('Invalid Ethereum address format');
    }
    const hex = address.slice(2);
    if (!/^[a-fA-F0-9]{40}$/.test(hex)) {
      throw new Error('Invalid Ethereum address format');
    }
    return this.toEIP55Checksum(address.toLowerCase());
  }

  getPrefix(address: string): string | undefined {
    return address.startsWith('0x') ? '0x' : undefined;
  }
}

export class Bech32AddressValidator implements AddressValidator {
  constructor(private expectedPrefix?: string) {}

  isValid(address: string): boolean {
    try {
      const { bech32 } = require('bech32');
      const decoded = bech32.decode(address);

      // Check if prefix matches expected prefix (if provided)
      if (this.expectedPrefix && decoded.prefix !== this.expectedPrefix) {
        return false;
      }

      // Validate that we have data
      if (!decoded.words || decoded.words.length === 0) {
        return false;
      }

      // Convert words back to bytes to validate format
      const bytes = bech32.fromWords(decoded.words);

      // Most blockchain addresses are 20 bytes, but allow some flexibility
      return bytes.length >= 16 && bytes.length <= 32;
    } catch {
      return false;
    }
  }

  normalize(address: string): string {
    if (!this.isValid(address)) {
      throw new Error('Invalid bech32 address format');
    }
    // Bech32 addresses are already normalized (lowercase)
    return address.toLowerCase();
  }

  getPrefix(address: string): string | undefined {
    try {
      const { bech32 } = require('bech32');
      const decoded = bech32.decode(address);
      return decoded.prefix;
    } catch {
      return undefined;
    }
  }
}

