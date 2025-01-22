import {
  defaultAccountParser as parseCosmosAccount,
  defaultSignerConfig as CosmosSignerConfig,
} from '@interchainjs/cosmos/defaults';
import {
  EncodedMessage,
  SignerOptions,
  TimeoutHeightOption,
} from '@interchainjs/cosmos/types';
import { toDecoder } from '@interchainjs/cosmos/utils';
import { BaseAccount } from '@interchainjs/cosmos-types/cosmos/auth/v1beta1/auth';
import { PubKey as Secp256k1PubKey } from '@interchainjs/cosmos-types/cosmos/crypto/secp256k1/keys';
import { EthAccount } from '@interchainjs/cosmos-types/injective/types/v1beta1/account';
import { Eip712Doc } from '@interchainjs/ethereum/types';
import { IKey, SignerConfig } from '@interchainjs/types';

import { DomainOptions, EthereumChainId } from './types';
import { bytes as assertBytes } from '@noble/hashes/_assert';
import { keccak_256 } from '@noble/hashes/sha3';
import { computeAddress } from '@ethersproject/transactions';
import { Key } from '@interchainjs/utils';
import { InjAccount } from './accounts/inj-account';
import { WalletOptions } from '@interchainjs/cosmos/types/wallet';
import { EthSecp256k1Auth } from '@interchainjs/auth/ethSecp256k1';

export const defaultPublicKeyConfig: SignerConfig['publicKey'] = {
  isCompressed: CosmosSignerConfig.publicKey.isCompressed,
  hash: (publicKey: Key) => Key.fromHex(computeAddress(publicKey.value))
};

export const defaultEncodePublicKey = (key: IKey): EncodedMessage => {
  return {
    typeUrl: '/injective.crypto.v1beta1.ethsecp256k1.PubKey',
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
    message: {
      ...CosmosSignerConfig.message,
      hash: (message: Uint8Array) => {
        const hashed = keccak_256(message);
        assertBytes(hashed);
        return hashed;
      },
    },
    publicKey: defaultPublicKeyConfig,
    encodePublicKey: defaultEncodePublicKey,
    parseAccount: defaultAccountParser,
    createAccount: InjAccount,
    prefix: 'inj',
  },
};

export const defaultWalletOptions: WalletOptions = {
  bip39Password: undefined,
  createAuthsFromMnemonic: EthSecp256k1Auth.fromMnemonic,
  signerConfig: defaultSignerOptions.Cosmos,
}

export const defaultTimeoutHeight: TimeoutHeightOption = {
  type: 'relative',
  value: 90n,
};

export const defaultDomainOptions: Required<DomainOptions> = {
  name: 'Injective Web3',
  version: '1.0.0',
  ethereumChainId: EthereumChainId.Injective,
  salt: '0',
  verifyingContract: 'cosmos',
};

export const defaultEip712Types: Pick<Eip712Doc, 'types' | 'primaryType'> = {
  primaryType: 'Tx',
  types: {
    EIP712Domain: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'version',
        type: 'string',
      },
      {
        name: 'chainId',
        type: 'uint256',
      },
      {
        name: 'verifyingContract',
        type: 'string',
      },
      {
        name: 'salt',
        type: 'string',
      },
    ],
    Tx: [
      {
        name: 'account_number',
        type: 'string',
      },
      {
        name: 'chain_id',
        type: 'string',
      },
      {
        name: 'fee',
        type: 'Fee',
      },
      {
        name: 'memo',
        type: 'string',
      },
      {
        name: 'msgs',
        type: 'Msg[]',
      },
      {
        name: 'sequence',
        type: 'string',
      },
      {
        name: 'timeout_height',
        type: 'string',
      },
    ],
    Fee: [
      {
        name: 'feePayer',
        type: 'string',
      },
      {
        name: 'amount',
        type: 'Coin[]',
      },
      {
        name: 'gas',
        type: 'string',
      },
    ],
    Coin: [
      {
        name: 'denom',
        type: 'string',
      },
      {
        name: 'amount',
        type: 'string',
      },
    ],
    Msg: [
      {
        name: 'type',
        type: 'string',
      },
      {
        name: 'value',
        type: 'MsgValue',
      },
    ],
  },
};
