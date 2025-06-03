import { buildUseMutation } from "../../../react-query";
import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption, MsgUpdateParams } from "./tx";
import { createInsuranceFund, underwrite, requestRedemption, updateParams } from "./tx.rpc.func";
/* CreateInsuranceFund defines a method for creating an insurance fund */
export const useCreateInsuranceFund = buildUseMutation<MsgCreateInsuranceFund, Error>({
  builderMutationFn: createInsuranceFund
});
/* Underwrite defines a method for depositing tokens to underwrite an
 insurance fund */
export const useUnderwrite = buildUseMutation<MsgUnderwrite, Error>({
  builderMutationFn: underwrite
});
/* RequestRedemption defines a method for requesting a redemption of the
 sender's insurance fund tokens */
export const useRequestRedemption = buildUseMutation<MsgRequestRedemption, Error>({
  builderMutationFn: requestRedemption
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});