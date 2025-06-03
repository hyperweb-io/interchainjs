import { buildTx } from "../../../../helper-func-types";
import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm, MsgUpdateParams } from "./tx";
/* ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
export const connectionOpenInit = buildTx<MsgConnectionOpenInit>({
  msg: MsgConnectionOpenInit
});
/* ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
export const connectionOpenTry = buildTx<MsgConnectionOpenTry>({
  msg: MsgConnectionOpenTry
});
/* ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
export const connectionOpenAck = buildTx<MsgConnectionOpenAck>({
  msg: MsgConnectionOpenAck
});
/* ConnectionOpenConfirm defines a rpc handler method for
 MsgConnectionOpenConfirm. */
export const connectionOpenConfirm = buildTx<MsgConnectionOpenConfirm>({
  msg: MsgConnectionOpenConfirm
});
/* UpdateConnectionParams defines a rpc handler method for
 MsgUpdateParams. */
export const updateConnectionParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});