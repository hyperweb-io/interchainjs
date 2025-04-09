import { buildTx } from "../../../helper-func-types";
import { MsgUnjail, MsgUpdateParams } from "./tx";
export const unjail = buildTx<MsgUnjail>({
  msg: MsgUnjail
});
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});