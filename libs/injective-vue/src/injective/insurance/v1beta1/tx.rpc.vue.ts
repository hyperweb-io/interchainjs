import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption, MsgUpdateParams } from "./tx";
import { createInsuranceFund, underwrite, requestRedemption, updateParams } from "./tx.rpc.func";
/**
 * CreateInsuranceFund defines a method for creating an insurance fund
 * @name useCreateInsuranceFund
 * @package injective.insurance.v1beta1
 * @see proto service: injective.insurance.v1beta1.CreateInsuranceFund
 */
export const useCreateInsuranceFund = buildUseVueMutation<MsgCreateInsuranceFund, Error>({
  builderMutationFn: createInsuranceFund
});
/**
 * Underwrite defines a method for depositing tokens to underwrite an
 * insurance fund
 * @name useUnderwrite
 * @package injective.insurance.v1beta1
 * @see proto service: injective.insurance.v1beta1.Underwrite
 */
export const useUnderwrite = buildUseVueMutation<MsgUnderwrite, Error>({
  builderMutationFn: underwrite
});
/**
 * RequestRedemption defines a method for requesting a redemption of the
 * sender's insurance fund tokens
 * @name useRequestRedemption
 * @package injective.insurance.v1beta1
 * @see proto service: injective.insurance.v1beta1.RequestRedemption
 */
export const useRequestRedemption = buildUseVueMutation<MsgRequestRedemption, Error>({
  builderMutationFn: requestRedemption
});
/**
 * @name useUpdateParams
 * @package injective.insurance.v1beta1
 * @see proto service: injective.insurance.v1beta1.UpdateParams
 */
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});