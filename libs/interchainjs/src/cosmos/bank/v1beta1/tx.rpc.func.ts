import { buildTx } from "../../../helper-func-types";
import { MsgSend, MsgMultiSend, MsgUpdateParams, MsgSetSendEnabled } from "./tx";
export const send = buildTx<MsgSend>({
  msg: MsgSend
});
export const multiSend = buildTx<MsgMultiSend>({
  msg: MsgMultiSend
});
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
export const setSendEnabled = buildTx<MsgSetSendEnabled>({
  msg: MsgSetSendEnabled
});