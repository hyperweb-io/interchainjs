import { buildTx } from "../../../helper-func-types";
import { MsgVerifyInvariant, MsgUpdateParams } from "./tx";
export const verifyInvariant = buildTx<MsgVerifyInvariant>({
  msg: MsgVerifyInvariant
});
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});