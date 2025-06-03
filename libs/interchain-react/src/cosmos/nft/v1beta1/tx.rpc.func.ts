import { buildTx } from "../../../helper-func-types";
import { MsgSend } from "./tx";
/* Send defines a method to send a nft from one account to another account. */
export const send = buildTx<MsgSend>({
  msg: MsgSend
});