import { buildTx } from "../../../helper-func-types";
import { MsgBid, MsgUpdateParams } from "./tx";
export const bid = buildTx<MsgBid>({
  msg: MsgBid
});
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});