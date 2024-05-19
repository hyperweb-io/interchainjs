import {
  BaseWalletAccount,
  Domain,
  Eip712Data,
  UniSigner,
  Wallet,
} from "@interchainjs/types";

export type UniEip712Signer<
  BroadcastResponse extends { hash: string } = { hash: string },
> = UniSigner<
  Eip712SignArgs,
  Eip712Tx,
  Eip712Doc,
  Promise<string>,
  BroadcastResponse
>;

export interface Eip712SignArgs {
  messages: any;
  fee?: any;
  memo?: string;
  options?: any;
}

export type Eip712Doc = Eip712Data<Domain, any>;

export type Eip712Tx = unknown;

export interface EthereumAccount extends BaseWalletAccount {
  address: string;
}

export type Eip712Wallet = Wallet<EthereumAccount, Eip712Doc>;
