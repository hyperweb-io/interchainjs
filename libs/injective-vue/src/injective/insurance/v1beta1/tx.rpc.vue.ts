import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption, MsgUpdateParams } from "./tx";
import { createInsuranceFund, underwrite, requestRedemption, updateParams } from "./tx.rpc.func";
/* CreateInsuranceFund defines a method for creating an insurance fund */
export const useCreateInsuranceFund = buildUseVueMutation<MsgCreateInsuranceFund, Error>({
  builderMutationFn: createInsuranceFund
});
/* Underwrite defines a method for depositing tokens to underwrite an
 insurance fund */
export const useUnderwrite = buildUseVueMutation<MsgUnderwrite, Error>({
  builderMutationFn: underwrite
});
/* RequestRedemption defines a method for requesting a redemption of the
 sender's insurance fund tokens */
export const useRequestRedemption = buildUseVueMutation<MsgRequestRedemption, Error>({
  builderMutationFn: requestRedemption
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});