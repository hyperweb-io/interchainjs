import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx";
import { createCreateVestingAccount, createCreatePermanentLockedAccount, createCreatePeriodicVestingAccount } from "./tx.rpc.func";
export const useCreateVestingAccount = buildUseVueMutation<MsgCreateVestingAccount, Error>({
  builderMutationFn: createCreateVestingAccount
});
export const useCreatePermanentLockedAccount = buildUseVueMutation<MsgCreatePermanentLockedAccount, Error>({
  builderMutationFn: createCreatePermanentLockedAccount
});
export const useCreatePeriodicVestingAccount = buildUseVueMutation<MsgCreatePeriodicVestingAccount, Error>({
  builderMutationFn: createCreatePeriodicVestingAccount
});