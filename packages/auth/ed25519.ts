import { Auth, Signature } from "@interchainjs/types";
import { Key } from "@interchainjs/utils";

export class Ed25519Auth implements Auth {
  readonly algo = "ed25519";

  constructor() {}

  getPublicKey(isCompressed?: boolean): Key {
    throw new Error("Not implemented yet");
  }

  sign(message: Uint8Array): Signature {
    throw new Error("Not implemented yet");
  }
  verify(message: Uint8Array, signature: Signature): boolean {
    throw new Error("Not implemented yet");
  }
}
