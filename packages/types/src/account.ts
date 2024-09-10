import { Algo, Auth, IAccount, isDocAuth } from './auth';

/**
 * AccountBase implements common parts of the IAccount interface.
 */
export abstract class AccountBase implements IAccount {
  public address: string;

  constructor(
    public prefix: string,
    public auth: Auth,
    public isPublicKeyCompressed: boolean = true
  ) {
    this.address = this.getAddress();
  }

  get publicKey() {
    return this.auth.getPublicKey(this.isPublicKeyCompressed);
  }

  getAddress(): string {
    if(isDocAuth(this.auth)){
      return this.auth.address;
    } else {
      return this.getAddressByPubKey();
    }
  }

  abstract getAddressByPubKey(): string;

  toAccountData() {
    return {
      address: this.address,
      algo: this.auth.algo as Algo,
      pubkey: this.publicKey.value,
    };
  }
}
