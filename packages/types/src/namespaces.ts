import { IKey } from "./auth";
import {
  Domain,
  Eip712Data,
  InjectiveDomain,
  InjectiveEip712Message,
  SignDoc,
  StdSignDoc,
  TxRaw,
} from "./doc";
import { UniSigner } from "./signer";
import { BaseWalletAccount, Wallet } from "./wallet";

export namespace ISigner {
  export type CosmosDirectSigner = UniSigner<
    ISignDoc.CosmosDirectDoc,
    ITransaction.CosmosTx
  >;
  export type CosmosAminoSigner = UniSigner<
    ISignDoc.CosmosAminoDoc,
    ITransaction.CosmosTx
  >;
  export type InjectiveDirectSigner = UniSigner<
    ISignDoc.CosmosDirectDoc,
    ITransaction.CosmosTx
  >;
  export type InjectiveAminoSigner = UniSigner<
    ISignDoc.CosmosAminoDoc,
    ITransaction.CosmosTx
  >;
  export type InjectiveEip712Signer = UniSigner<
    ISignDoc.InjectiveEip712Doc,
    ITransaction.CosmosTx
  >;
  export type Eip712Signer = UniSigner<
    ISignDoc.Eip712Doc,
    ITransaction.Eip712Tx
  >;
}

export namespace ISignDoc {
  export type CosmosDirectDoc = SignDoc;
  export type CosmosAminoDoc = StdSignDoc;
  export type InjectiveEip712Doc = Eip712Data<
    InjectiveDomain,
    InjectiveEip712Message
  >;
  export type Eip712Doc = Eip712Data<Domain, any>;
}

export namespace ITransaction {
  export type CosmosTx = TxRaw;
  export type Eip712Tx = unknown;
}

export namespace IWalletAccount {
  export interface CosmosAccount extends BaseWalletAccount {
    getAddress(chainId?: string): IKey | string;
  }
  export interface InjectiveAccount extends BaseWalletAccount {
    cosmosAddress: string;
    ethereumAddress: string;
  }
  export interface EthereumAccount extends BaseWalletAccount {
    address: string;
  }
}

export namespace IWallet {
  export type CosmosDirectWallet = Wallet<
    IWalletAccount.CosmosAccount,
    ISignDoc.CosmosDirectDoc
  >;
  export type CosmosAminoWallet = Wallet<
    IWalletAccount.CosmosAccount,
    ISignDoc.CosmosAminoDoc
  >;
  export type InjectiveDirectWallet = Wallet<
    IWalletAccount.InjectiveAccount,
    ISignDoc.CosmosDirectDoc
  >;
  export type InjectiveAminoWallet = Wallet<
    IWalletAccount.InjectiveAccount,
    ISignDoc.CosmosAminoDoc
  >;
  export type InjectiveEip712Wallet = Wallet<
    IWalletAccount.InjectiveAccount,
    ISignDoc.InjectiveEip712Doc
  >;
  export type Eip712Wallet = Wallet<
    IWalletAccount.EthereumAccount,
    ISignDoc.Eip712Doc
  >;
}
