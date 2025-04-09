import { buildUseMutation } from "../../../react-query";
import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption, MsgUpdateParams } from "./tx";
import { createInsuranceFund, underwrite, requestRedemption, updateParams } from "./tx.rpc.func";
export const useCreateInsuranceFund = buildUseMutation<MsgCreateInsuranceFund, Error>({
  builderMutationFn: createInsuranceFund
});
export const useUnderwrite = buildUseMutation<MsgUnderwrite, Error>({
  builderMutationFn: underwrite
});
export const useRequestRedemption = buildUseMutation<MsgRequestRedemption, Error>({
  builderMutationFn: requestRedemption
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});