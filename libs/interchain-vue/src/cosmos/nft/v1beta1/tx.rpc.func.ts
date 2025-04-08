import { buildTx } from "../../../helper-func-types";
import { MsgSend } from "./tx";
export const send = buildTx<MsgSend>({
  msg: MsgSend
});