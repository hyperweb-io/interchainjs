import { IKey } from "./auth";

export interface BaseWalletAccount {
  algo: string;
  publicKey: IKey;
}

export interface SignDocResponse<SignDoc> {
  signature: IKey;
  signDoc: SignDoc;
}

export interface Wallet<Account extends BaseWalletAccount, SignDoc> {
  getAccount: () => Promise<Account>;
  sign: (doc: SignDoc) => Promise<SignDocResponse<SignDoc>>;
}

export type BaseWallet<SignDoc> = Wallet<BaseWalletAccount, SignDoc>;
