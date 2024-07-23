import { AccountBase } from '@interchainjs/types/account';
import { Key, toBuffer } from '@interchainjs/utils';
import { keccak_256 } from '@noble/hashes/sha3';

export class InjAccount extends AccountBase {
  getAddress(): string {
    const uncompressedPubKey = this.auth.getPublicKey(false);

    const pubKeyBuffer = toBuffer(uncompressedPubKey.value);

    const addressBytes = keccak_256(pubKeyBuffer).subarray(-20);

    return Key.from(addressBytes).toBech32(this.prefix);
  }
}
