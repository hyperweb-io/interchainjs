import { buildTx } from "../../../../helper-func-types";
import { MsgTransfer, MsgUpdateParams } from "./tx";
/* Transfer defines a rpc handler method for MsgTransfer. */
export const transfer = buildTx<MsgTransfer>({
  msg: MsgTransfer
});
/* UpdateParams defines a rpc handler for MsgUpdateParams. */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});