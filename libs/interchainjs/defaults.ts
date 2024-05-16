import { EncodedMessage } from "@interchainjs/cosmos/types";
import { toDecoder } from "@interchainjs/cosmos/utils";
import {
  BaseAccount,
  ModuleAccount,
} from "@interchainjs/cosmos-types/cosmos/auth/v1beta1/auth";
import {
  BaseVestingAccount,
  ContinuousVestingAccount,
  DelayedVestingAccount,
  PeriodicVestingAccount,
} from "@interchainjs/cosmos-types/cosmos/vesting/v1beta1/vesting";
import { BroadcastOptions } from "@interchainjs/types";

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
