import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx";
import { createVestingAccount, createPermanentLockedAccount, createPeriodicVestingAccount } from "./tx.rpc.func";
/**
 * CreateVestingAccount defines a method that enables creating a vesting
 * account.
 * @name useCreateVestingAccount
 * @package cosmos.vesting.v1beta1
 * @see proto service: cosmos.vesting.v1beta1.CreateVestingAccount
 */
export const useCreateVestingAccount = buildUseVueMutation<MsgCreateVestingAccount, Error>({
  builderMutationFn: createVestingAccount
});
/**
 * CreatePermanentLockedAccount defines a method that enables creating a permanent
 * locked account.
 * @name useCreatePermanentLockedAccount
 * @package cosmos.vesting.v1beta1
 * @see proto service: cosmos.vesting.v1beta1.CreatePermanentLockedAccount
 */
export const useCreatePermanentLockedAccount = buildUseVueMutation<MsgCreatePermanentLockedAccount, Error>({
  builderMutationFn: createPermanentLockedAccount
});
/**
 * CreatePeriodicVestingAccount defines a method that enables creating a
 * periodic vesting account.
 * @name useCreatePeriodicVestingAccount
 * @package cosmos.vesting.v1beta1
 * @see proto service: cosmos.vesting.v1beta1.CreatePeriodicVestingAccount
 */
export const useCreatePeriodicVestingAccount = buildUseVueMutation<MsgCreatePeriodicVestingAccount, Error>({
  builderMutationFn: createPeriodicVestingAccount
});