import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate, MsgCancelUnbondingDelegation, MsgUpdateParams } from "./tx";
import { createValidator, editValidator, delegate, beginRedelegate, undelegate, cancelUnbondingDelegation, updateParams } from "./tx.rpc.func";
/* CreateValidator defines a method for creating a new validator. */
export const useCreateValidator = buildUseVueMutation<MsgCreateValidator, Error>({
  builderMutationFn: createValidator
});
/* EditValidator defines a method for editing an existing validator. */
export const useEditValidator = buildUseVueMutation<MsgEditValidator, Error>({
  builderMutationFn: editValidator
});
/* Delegate defines a method for performing a delegation of coins
 from a delegator to a validator. */
export const useDelegate = buildUseVueMutation<MsgDelegate, Error>({
  builderMutationFn: delegate
});
/* BeginRedelegate defines a method for performing a redelegation
 of coins from a delegator and source validator to a destination validator. */
export const useBeginRedelegate = buildUseVueMutation<MsgBeginRedelegate, Error>({
  builderMutationFn: beginRedelegate
});
/* Undelegate defines a method for performing an undelegation from a
 delegate and a validator. */
export const useUndelegate = buildUseVueMutation<MsgUndelegate, Error>({
  builderMutationFn: undelegate
});
/* CancelUnbondingDelegation defines a method for performing canceling the unbonding delegation
 and delegate back to previous validator.

 Since: cosmos-sdk 0.46 */
export const useCancelUnbondingDelegation = buildUseVueMutation<MsgCancelUnbondingDelegation, Error>({
  builderMutationFn: cancelUnbondingDelegation
});
/* UpdateParams defines an operation for updating the x/staking module
 parameters.
 Since: cosmos-sdk 0.47 */
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});