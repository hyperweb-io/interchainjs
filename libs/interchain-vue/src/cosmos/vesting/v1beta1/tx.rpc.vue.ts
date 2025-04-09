import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx";
import { createVestingAccount, createPermanentLockedAccount, createPeriodicVestingAccount } from "./tx.rpc.func";
export const useCreateVestingAccount = buildUseVueMutation<MsgCreateVestingAccount, Error>({
  builderMutationFn: createVestingAccount
});
export const useCreatePermanentLockedAccount = buildUseVueMutation<MsgCreatePermanentLockedAccount, Error>({
  builderMutationFn: createPermanentLockedAccount
});
export const useCreatePeriodicVestingAccount = buildUseVueMutation<MsgCreatePeriodicVestingAccount, Error>({
  builderMutationFn: createPeriodicVestingAccount
});