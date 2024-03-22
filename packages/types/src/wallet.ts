import { IKey } from "./auth";

export interface BaseWalletAccount {
  algo: string;
  publicKey: IKey;
}

export interface SignDocResponse<SignDoc> {
  signature: IKey;
  signed: SignDoc;
}

export interface Wallet<Account extends BaseWalletAccount, SignDoc> {
  getAccount: () => Promise<Account>;
  sign: (doc: SignDoc) => Promise<SignDocResponse<SignDoc>>;
}

export type BaseWallet<Doc> = Wallet<BaseWalletAccount, Doc>;
