import { Auth, Signature } from '@interchainjs/types';
import { Key } from '@interchainjs/utils';
import { HDKey } from '@scure/bip32';

export class Ed25519Auth implements Auth {
  readonly algo = 'ed25519';

  constructor(privateKey: Uint8Array | HDKey | Key, public readonly hdPath?: string) {}

  getPublicKey(isCompressed?: boolean): Key {
    throw new Error('Not implemented yet');
  }

  sign(_: Uint8Array): Signature {
    throw new Error('Not implemented yet');
  }
  verify(_: Uint8Array, __: Signature): boolean {
    throw new Error('Not implemented yet');
  }
}
