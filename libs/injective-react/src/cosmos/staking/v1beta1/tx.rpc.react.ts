import { buildUseMutation } from "../../../react-query";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate, MsgCancelUnbondingDelegation, MsgUpdateParams } from "./tx";
import { createCreateValidator, createEditValidator, createDelegate, createBeginRedelegate, createUndelegate, createCancelUnbondingDelegation, createUpdateParams } from "./tx.rpc.func";
export const useCreateValidator = buildUseMutation<MsgCreateValidator, Error>({
  builderMutationFn: createCreateValidator
});
export const useEditValidator = buildUseMutation<MsgEditValidator, Error>({
  builderMutationFn: createEditValidator
});
export const useDelegate = buildUseMutation<MsgDelegate, Error>({
  builderMutationFn: createDelegate
});
export const useBeginRedelegate = buildUseMutation<MsgBeginRedelegate, Error>({
  builderMutationFn: createBeginRedelegate
});
export const useUndelegate = buildUseMutation<MsgUndelegate, Error>({
  builderMutationFn: createUndelegate
});
export const useCancelUnbondingDelegation = buildUseMutation<MsgCancelUnbondingDelegation, Error>({
  builderMutationFn: createCancelUnbondingDelegation
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});