import { AccountBase } from '@interchainjs/types/account';
import { Key } from '@interchainjs/utils';
import { keccak_256 } from '@noble/hashes/sha3';

export class InjAccount extends AccountBase {
  getAddress(): string {
    const uncompressedPubKey = this.auth.getPublicKey(false);

    const pubkeyHex = uncompressedPubKey.toHex().substring(2);

    const pubkeyHexKey = Key.fromHex(pubkeyHex);

    const addressBytes = keccak_256(pubkeyHexKey.value).subarray(-20);

    return Key.from(addressBytes).toBech32(this.prefix);
  }
}