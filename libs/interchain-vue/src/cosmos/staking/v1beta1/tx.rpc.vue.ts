import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate, MsgCancelUnbondingDelegation, MsgUpdateParams } from "./tx";
import { createCreateValidator, createEditValidator, createDelegate, createBeginRedelegate, createUndelegate, createCancelUnbondingDelegation, createUpdateParams } from "./tx.rpc.func";
export const useCreateValidator = buildUseVueMutation<MsgCreateValidator, Error>({
  builderMutationFn: createCreateValidator
});
export const useEditValidator = buildUseVueMutation<MsgEditValidator, Error>({
  builderMutationFn: createEditValidator
});
export const useDelegate = buildUseVueMutation<MsgDelegate, Error>({
  builderMutationFn: createDelegate
});
export const useBeginRedelegate = buildUseVueMutation<MsgBeginRedelegate, Error>({
  builderMutationFn: createBeginRedelegate
});
export const useUndelegate = buildUseVueMutation<MsgUndelegate, Error>({
  builderMutationFn: createUndelegate
});
export const useCancelUnbondingDelegation = buildUseVueMutation<MsgCancelUnbondingDelegation, Error>({
  builderMutationFn: createCancelUnbondingDelegation
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});