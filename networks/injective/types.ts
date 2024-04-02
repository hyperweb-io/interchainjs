import { DocOptions as CosmosDocOptions } from "@interchainjs/cosmos/types";

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
