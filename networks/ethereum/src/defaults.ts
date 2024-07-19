import { computeAddress } from '@ethersproject/transactions';
import { SignerConfig } from '@interchainjs/types';
import { Key } from '@interchainjs/utils';
import { bytes as assertBytes } from '@noble/hashes/_assert';
import { keccak_256 } from '@noble/hashes/sha3';

export const defaultSignerConfig: SignerConfig = {
  publicKey: {
    isCompressed: false,
    hash: (publicKey: Key) => Key.fromHex(computeAddress(publicKey.value)),
  },
  message: {
    hash: (message: Uint8Array) => {
      const hashed = keccak_256(message);
      assertBytes(hashed);
      return hashed;
    },
  },
};