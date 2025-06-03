import { buildTx } from "../../../helper-func-types";
import { MsgBid, MsgUpdateParams } from "./tx";
/* Bid defines a method for placing a bid for an auction */
export const bid = buildTx<MsgBid>({
  msg: MsgBid
});
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});