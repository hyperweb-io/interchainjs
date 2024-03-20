import { Auth, SignerConfig } from "@uni-sign/types";
import { Key } from "./key";

export class BaseSigner {
  protected _auth: Auth;
  protected _config: SignerConfig;

  constructor(auth: Auth, config: SignerConfig) {
    this._auth = auth;
    this._config = config;
  }

  get auth() {
    return this._auth;
  }

  get config() {
    return this._config;
  }

  get publicKey() {
    return this.auth.getPublicKey(this.config.publicKey.isCompressed);
  }

  get publicKeyHash() {
    return this.config.publicKey.hash(this.publicKey);
  }

  setAuth(auth: Auth) {
    this._auth = auth;
  }

  setConfig(config: SignerConfig) {
    this._config = config;
  }

  signArbitrary(data: Uint8Array): Key {
    const signature = this.auth.sign(this.config.message.hash(data));
    return this.config.signature.toCompact(signature, this.auth.algo);
  }

  verifyArbitrary(data: Uint8Array, signature: Key): boolean {
    if (!this.auth.verify) {
      throw new Error("verify method is not implemented yet");
    }
    return this.auth.verify(
      this.config.message.hash(data),
      this.config.signature.fromCompact(signature, this.auth.algo)
    );
  }
}
