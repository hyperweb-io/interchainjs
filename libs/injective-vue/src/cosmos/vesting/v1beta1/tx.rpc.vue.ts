import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx";
import { createVestingAccount, createPermanentLockedAccount, createPeriodicVestingAccount } from "./tx.rpc.func";
/* CreateVestingAccount defines a method that enables creating a vesting
 account. */
export const useCreateVestingAccount = buildUseVueMutation<MsgCreateVestingAccount, Error>({
  builderMutationFn: createVestingAccount
});
/* CreatePermanentLockedAccount defines a method that enables creating a permanent
 locked account.

 Since: cosmos-sdk 0.46 */
export const useCreatePermanentLockedAccount = buildUseVueMutation<MsgCreatePermanentLockedAccount, Error>({
  builderMutationFn: createPermanentLockedAccount
});
/* CreatePeriodicVestingAccount defines a method that enables creating a
 periodic vesting account.

 Since: cosmos-sdk 0.46 */
export const useCreatePeriodicVestingAccount = buildUseVueMutation<MsgCreatePeriodicVestingAccount, Error>({
  builderMutationFn: createPeriodicVestingAccount
});