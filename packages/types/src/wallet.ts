import { Auth, IKey } from "./auth";

export interface BaseWalletAccount {
  algo: string;
  publicKey: IKey;
}

export interface SignDocResponse<SignDoc> {
  signature: IKey;
  signDoc: SignDoc;
}

export interface Wallet<Account extends BaseWalletAccount, SignDoc> {
  getAccountAuths: () => Promise<
    {
      auth: Auth;
      account: Account;
    }[]
  >;
  getAccounts: () => Promise<Account[]>;
  sign: (doc: SignDoc) => Promise<SignDocResponse<SignDoc>>;
}

export type BaseWallet<SignDoc> = Wallet<BaseWalletAccount, SignDoc>;
