import { buildUseMutation } from "../../../react-query";
import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx";
import { createVestingAccount, createPermanentLockedAccount, createPeriodicVestingAccount } from "./tx.rpc.func";
export const useCreateVestingAccount = buildUseMutation<MsgCreateVestingAccount, Error>({
  builderMutationFn: createVestingAccount
});
export const useCreatePermanentLockedAccount = buildUseMutation<MsgCreatePermanentLockedAccount, Error>({
  builderMutationFn: createPermanentLockedAccount
});
export const useCreatePeriodicVestingAccount = buildUseMutation<MsgCreatePeriodicVestingAccount, Error>({
  builderMutationFn: createPeriodicVestingAccount
});