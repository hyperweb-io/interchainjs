import { buildTx } from "../../../helper-func-types";
import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption, MsgUpdateParams } from "./tx";
export const createInsuranceFund = buildTx<MsgCreateInsuranceFund>({
  msg: MsgCreateInsuranceFund
});
export const underwrite = buildTx<MsgUnderwrite>({
  msg: MsgUnderwrite
});
export const requestRedemption = buildTx<MsgRequestRedemption>({
  msg: MsgRequestRedemption
});
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});