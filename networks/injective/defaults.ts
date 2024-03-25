import { ISignDoc, SignerConfig } from "@uni-sign/types";
import { defaultSignerConfig as CosmosSignerConfig } from "@uni-sign/cosmos/defaults";
import { defaultSignerConfig as EthereumSignerConfig } from "@uni-sign/ethereum/defaults";
import { DomainOptions, EthereumChainId } from "./types";
import { TimeoutHeightOption } from "@uni-sign/cosmos/types";

const publicKeyConfig: SignerConfig["publicKey"] = {
  isCompressed: CosmosSignerConfig.publicKey.isCompressed,
  hash: EthereumSignerConfig.publicKey.hash,
};

export const defaultSignerConfig: Record<string, SignerConfig> = {
  Cosmos: {
    ...CosmosSignerConfig,
    publicKey: publicKeyConfig,
  },
  Ethereum: {
    ...EthereumSignerConfig,
    publicKey: publicKeyConfig,
  },
};

export const defaultTimeoutHeight: TimeoutHeightOption = {
  type: "relative",
  value: 90n,
};

export const defaultDomainOptions: Required<DomainOptions> = {
  name: "Injective Web3",
  version: "1.0.0",
  ethereumChainId: EthereumChainId.Injective,
  salt: "0",
  verifyingContract: "cosmos",
};

export const defaultEip712Types: Pick<
  ISignDoc.Eip712Doc,
  "types" | "primaryType"
> = {
  primaryType: "Tx",
  types: {
    EIP712Domain: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "version",
        type: "string",
      },
      {
        name: "chainId",
        type: "uint256",
      },
      {
        name: "verifyingContract",
        type: "string",
      },
      {
        name: "salt",
        type: "string",
      },
    ],
    Tx: [
      {
        name: "account_number",
        type: "string",
      },
      {
        name: "chain_id",
        type: "string",
      },
      {
        name: "fee",
        type: "Fee",
      },
      {
        name: "memo",
        type: "string",
      },
      {
        name: "msgs",
        type: "Msg[]",
      },
      {
        name: "sequence",
        type: "string",
      },
      {
        name: "timeout_height",
        type: "string",
      },
    ],
    Fee: [
      {
        name: "feePayer",
        type: "string",
      },
      {
        name: "amount",
        type: "Coin[]",
      },
      {
        name: "gas",
        type: "string",
      },
    ],
    Coin: [
      {
        name: "denom",
        type: "string",
      },
      {
        name: "amount",
        type: "string",
      },
    ],
    Msg: [
      {
        name: "type",
        type: "string",
      },
      {
        name: "value",
        type: "MsgValue",
      },
    ],
  },
};
