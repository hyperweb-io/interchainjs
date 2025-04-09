import { buildTx } from "../../../../helper-func-types";
import { MsgTransfer, MsgUpdateParams } from "./tx";
export const transfer = buildTx<MsgTransfer>({
  msg: MsgTransfer
});
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});