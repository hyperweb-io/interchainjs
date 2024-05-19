import { DocOptions as CosmosDocOptions } from "@interchainjs/cosmos/types";
import {
  CosmosAminoDoc,
  CosmosAminoSigner,
  CosmosDirectDoc,
  CosmosDirectSigner,
  UniCosmosBaseSigner,
} from "@interchainjs/cosmos/types";
import {
  BaseWalletAccount,
  Eip712Data,
  InjectiveDomain,
  InjectiveEip712Message,
  Wallet,
} from "@interchainjs/types";

export type InjectiveDirectSigner = CosmosDirectSigner;
export type InjectiveAminoSigner = CosmosAminoSigner;
export type InjectiveEip712Signer = UniCosmosBaseSigner<InjectiveEip712Doc>;

export interface InjectiveAccount extends BaseWalletAccount {
  cosmosAddress: string;
  ethereumAddress: string;
}

export type InjectiveEip712Doc = Eip712Data<
  InjectiveDomain,
  InjectiveEip712Message
>;

export type InjectiveDirectWallet = Wallet<InjectiveAccount, CosmosDirectDoc>;
export type InjectiveAminoWallet = Wallet<InjectiveAccount, CosmosAminoDoc>;
export type InjectiveEip712Wallet = Wallet<
  InjectiveAccount,
  InjectiveEip712Doc
>;


export enum EthereumChainId {
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Goerli = 5,
  Kovan = 42,
  Injective = 888,
  Ganache = 1337,
  HardHat = 31337,
}

export type DocOptions = CosmosDocOptions & DomainOptions;

export interface DomainOptions {
  name?: string;
  version?: string;
  ethereumChainId?: EthereumChainId;
  salt?: string;
  verifyingContract?: string;
}
