import { Key } from "@uni-sign/utils";

export interface BaseWalletAccount {
  algo: string;
  publicKey: Key;
}

export interface SignDocResponse<SignDoc> {
  signature: Key;
  signed: SignDoc;
}

export interface Wallet<Account extends BaseWalletAccount, SignDoc> {
  getAccount: () => Promise<Account>;
  sign: (doc: SignDoc) => Promise<SignDocResponse<SignDoc>>;
}

export type BaseWallet<Doc> = Wallet<BaseWalletAccount, Doc>;
