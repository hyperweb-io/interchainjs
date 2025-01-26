import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption, MsgUpdateParams } from "./tx";
import { createCreateInsuranceFund, createUnderwrite, createRequestRedemption, createUpdateParams } from "./tx.rpc.func.ts";
export const useCreateInsuranceFund = buildUseVueMutation<MsgCreateInsuranceFund, Error>({
  builderMutationFn: createCreateInsuranceFund
});
export const useUnderwrite = buildUseVueMutation<MsgUnderwrite, Error>({
  builderMutationFn: createUnderwrite
});
export const useRequestRedemption = buildUseVueMutation<MsgRequestRedemption, Error>({
  builderMutationFn: createRequestRedemption
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});