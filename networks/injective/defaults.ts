import { IKey, ISignDoc, SignerConfig } from "@interchainjs/types";
import {
  defaultSignerConfig as CosmosSignerConfig,
  defaultAccountParser as parseCosmosAccount,
} from "@interchainjs/cosmos/defaults";
import { defaultSignerConfig as EthereumSignerConfig } from "@interchainjs/ethereum/defaults";
import { DomainOptions, EthereumChainId } from "./types";
import {
  BaseAccount,
  EncodedMessage,
  Secp256k1PubKey,
  SignerOptions,
  TimeoutHeightOption,
} from "@interchainjs/cosmos/types";
import { toDecoder } from "@interchainjs/cosmos/utils";
import { EthAccount } from "./codegen/injective/types/v1beta1/account";

export const defaultPublicKeyConfig: SignerConfig["publicKey"] = {
  isCompressed: CosmosSignerConfig.publicKey.isCompressed,
  hash: EthereumSignerConfig.publicKey.hash,
};

export const defaultEncodePublicKey = (key: IKey): EncodedMessage => {
  return {
    typeUrl: "/injective.crypto.v1beta1.ethsecp256k1.PubKey",
    value: Secp256k1PubKey.encode(
      Secp256k1PubKey.fromPartial({ key: key.value })
    ).finish(),
  };
};

export const defaultAccountParser = (
  encodedAccount: EncodedMessage
): BaseAccount => {
  try {
    return parseCosmosAccount(encodedAccount);
  } catch (error) {
    const decoder = toDecoder(EthAccount);
    const account: EthAccount = decoder.fromPartial(
      decoder.decode(encodedAccount.value)
    );
    return account.baseAccount;
  }
};

export const defaultSignerOptions: Record<string, Required<SignerOptions>> = {
  Cosmos: {
    ...CosmosSignerConfig,
    publicKey: defaultPublicKeyConfig,
    encodePublicKey: defaultEncodePublicKey,
    parseAccount: defaultAccountParser,
    prefix: "inj",
  },
  Ethereum: {
    ...EthereumSignerConfig,
    publicKey: defaultPublicKeyConfig,
    encodePublicKey: defaultEncodePublicKey,
    parseAccount: defaultAccountParser,
    prefix: undefined,
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
