import { buildTx } from "../../../helper-func-types";
import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption, MsgUpdateParams } from "./tx";
/* CreateInsuranceFund defines a method for creating an insurance fund */
export const createInsuranceFund = buildTx<MsgCreateInsuranceFund>({
  msg: MsgCreateInsuranceFund
});
/* Underwrite defines a method for depositing tokens to underwrite an
 insurance fund */
export const underwrite = buildTx<MsgUnderwrite>({
  msg: MsgUnderwrite
});
/* RequestRedemption defines a method for requesting a redemption of the
 sender's insurance fund tokens */
export const requestRedemption = buildTx<MsgRequestRedemption>({
  msg: MsgRequestRedemption
});
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});