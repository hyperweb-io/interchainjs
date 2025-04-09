import { buildTx } from "../../../../../helper-func-types";
import { MsgRegisterInterchainAccount, MsgSendTx, MsgUpdateParams } from "./tx";
export const registerInterchainAccount = buildTx<MsgRegisterInterchainAccount>({
  msg: MsgRegisterInterchainAccount
});
export const sendTx = buildTx<MsgSendTx>({
  msg: MsgSendTx
});
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});