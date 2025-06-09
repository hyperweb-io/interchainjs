import { buildTx } from "../../../helper-func-types";
import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption, MsgUpdateParams } from "./tx";
/**
 * CreateInsuranceFund defines a method for creating an insurance fund
 * @name createInsuranceFund
 * @package injective.insurance.v1beta1
 * @see proto service: injective.insurance.v1beta1.CreateInsuranceFund
 */
export const createInsuranceFund = buildTx<MsgCreateInsuranceFund>({
  msg: MsgCreateInsuranceFund
});
/**
 * Underwrite defines a method for depositing tokens to underwrite an
 * insurance fund
 * @name underwrite
 * @package injective.insurance.v1beta1
 * @see proto service: injective.insurance.v1beta1.Underwrite
 */
export const underwrite = buildTx<MsgUnderwrite>({
  msg: MsgUnderwrite
});
/**
 * RequestRedemption defines a method for requesting a redemption of the
 * sender's insurance fund tokens
 * @name requestRedemption
 * @package injective.insurance.v1beta1
 * @see proto service: injective.insurance.v1beta1.RequestRedemption
 */
export const requestRedemption = buildTx<MsgRequestRedemption>({
  msg: MsgRequestRedemption
});
/**
 * @name updateParams
 * @package injective.insurance.v1beta1
 * @see proto service: injective.insurance.v1beta1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});