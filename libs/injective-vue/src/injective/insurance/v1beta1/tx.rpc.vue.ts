import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption, MsgUpdateParams } from "./tx";
import { createInsuranceFund, underwrite, requestRedemption, updateParams } from "./tx.rpc.func";
export const useCreateInsuranceFund = buildUseVueMutation<MsgCreateInsuranceFund, Error>({
  builderMutationFn: createInsuranceFund
});
export const useUnderwrite = buildUseVueMutation<MsgUnderwrite, Error>({
  builderMutationFn: underwrite
});
export const useRequestRedemption = buildUseVueMutation<MsgRequestRedemption, Error>({
  builderMutationFn: requestRedemption
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});