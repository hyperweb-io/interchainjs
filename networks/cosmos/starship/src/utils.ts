// @ts-nocheck
import { Bip39, Random } from '@cosmjs/crypto';

export function generateMnemonic(): string {
  return Bip39.encode(Random.getBytes(16)).toString();
}

export const waitUntil = (date, timeout = 90000) => {
  const delay = date.getTime() - Date.now();
  if (delay > timeout) {
    throw new Error('Timeout to wait until date');
  }
  return new Promise(resolve => setTimeout(resolve, delay + 3000));
};