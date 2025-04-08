import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate, MsgCancelUnbondingDelegation, MsgUpdateParams } from "./tx";
import { createValidator, editValidator, delegate, beginRedelegate, undelegate, cancelUnbondingDelegation, updateParams } from "./tx.rpc.func";
export const useCreateValidator = buildUseVueMutation<MsgCreateValidator, Error>({
  builderMutationFn: createValidator
});
export const useEditValidator = buildUseVueMutation<MsgEditValidator, Error>({
  builderMutationFn: editValidator
});
export const useDelegate = buildUseVueMutation<MsgDelegate, Error>({
  builderMutationFn: delegate
});
export const useBeginRedelegate = buildUseVueMutation<MsgBeginRedelegate, Error>({
  builderMutationFn: beginRedelegate
});
export const useUndelegate = buildUseVueMutation<MsgUndelegate, Error>({
  builderMutationFn: undelegate
});
export const useCancelUnbondingDelegation = buildUseVueMutation<MsgCancelUnbondingDelegation, Error>({
  builderMutationFn: cancelUnbondingDelegation
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});