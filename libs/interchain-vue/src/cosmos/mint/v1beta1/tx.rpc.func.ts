import { buildTx } from "../../../helper-func-types";
import { MsgUpdateParams } from "./tx";
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});