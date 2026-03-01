import { fromUtf8 } from '@interchainjs/utils';
import { pbkdf2 } from '@noble/hashes/pbkdf2.js';
import { sha512 } from '@noble/hashes/sha2.js';

export function getSeedFromMnemonic(mnemonic: string, password?: string) {
  const mnemonicBytes = fromUtf8(mnemonic.normalize('NFKD'));
  const salt = 'mnemonic' + (password ? password.normalize('NFKD') : '');
  const seed = pbkdf2(sha512, mnemonicBytes, salt, { c: 2048, dkLen: 64 });
  return seed;
}
