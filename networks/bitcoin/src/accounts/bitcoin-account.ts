import { AccountBase } from '@interchainjs/types/account';
import { sha256, ripemd160 } from '@interchainjs/crypto';
import { toBech32 } from '@interchainjs/encoding';

export class BitcoinAccount extends AccountBase {
  getAddressByPubKey(): string {
    const pub = this.auth.getPublicKey(true);
    const hash160 = ripemd160(sha256(pub.value));
    const data = new Uint8Array(1 + hash160.length);
    data[0] = 0x00; // witness version 0
    data.set(hash160, 1);
    return toBech32(this.prefix, data);
  }
}
