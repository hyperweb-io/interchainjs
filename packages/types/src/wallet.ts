import { Auth, IKey } from './auth';

export interface BaseWalletAccount {
  algo: string;
  publicKey: IKey;
}

export interface SignDocResponse<SignDoc> {
  signature: IKey;
  signDoc: SignDoc;
}

export interface Wallet<Account extends BaseWalletAccount> {
  getAccountAuths: () => Promise<
    {
      auth: Auth;
      account: Account;
    }[]
  >;
  getAccounts: () => Promise<Account[]>;
}

export type BaseWallet = Wallet<BaseWalletAccount>;

export interface AddrDerivation {
  readonly hdPath: string;
  readonly prefix: string;
}
