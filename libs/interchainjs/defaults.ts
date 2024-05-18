import { EncodedMessage } from "@interchainjs/cosmos/types";
import { toDecoder } from "@interchainjs/cosmos/utils";
import {
  BaseAccount,
  ModuleAccount,
} from "@interchainjs/cosmos-types/cosmos/auth/v1beta1/auth";
import { PubKey as Secp256k1PubKey } from "@interchainjs/cosmos-types/cosmos/crypto/secp256k1/keys";
import {
  BaseVestingAccount,
  ContinuousVestingAccount,
  DelayedVestingAccount,
  PeriodicVestingAccount,
} from "@interchainjs/cosmos-types/cosmos/vesting/v1beta1/vesting";
import { BroadcastOptions, IKey } from "@interchainjs/types";

export const defaultBroadcastOptions: BroadcastOptions = {
  checkTx: true,
  deliverTx: false,
};

const accountCodecs = [
  BaseAccount,
  ModuleAccount,
  BaseVestingAccount,
  ContinuousVestingAccount,
  DelayedVestingAccount,
  PeriodicVestingAccount,
];

export const defaultAccountParser = (
  encodedAccount: EncodedMessage
): BaseAccount => {
  const codec = accountCodecs.find(
    (codec) => codec.typeUrl === encodedAccount.typeUrl
  );

  if (!codec) {
    throw new Error(
      `No corresponding account found for account type ${encodedAccount.typeUrl}.`
    );
  }
  const decoder = toDecoder(codec);
  const account = decoder.fromPartial(decoder.decode(encodedAccount.value));
  const baseAccount =
    (account as any).baseVestingAccount?.baseAccount ||
    (account as any).baseAccount ||
    account;
  return baseAccount;
};

export const defaultPublicKeyEncoder = (key: IKey): EncodedMessage => {
  return {
    typeUrl: Secp256k1PubKey.typeUrl,
    value: Secp256k1PubKey.encode(
      Secp256k1PubKey.fromPartial({ key: key.value })
    ).finish(),
  };
};
