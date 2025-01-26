import { buildUseMutation } from "../../../react-query";
import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption, MsgUpdateParams } from "./tx";
import { createCreateInsuranceFund, createUnderwrite, createRequestRedemption, createUpdateParams } from "./tx.rpc.func.ts";
export const useCreateInsuranceFund = buildUseMutation<MsgCreateInsuranceFund, Error>({
  builderMutationFn: createCreateInsuranceFund
});
export const useUnderwrite = buildUseMutation<MsgUnderwrite, Error>({
  builderMutationFn: createUnderwrite
});
export const useRequestRedemption = buildUseMutation<MsgRequestRedemption, Error>({
  builderMutationFn: createRequestRedemption
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});