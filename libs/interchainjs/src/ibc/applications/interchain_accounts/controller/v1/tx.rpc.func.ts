import { buildTx } from "../../../../../helper-func-types";
import { MsgRegisterInterchainAccount, MsgSendTx, MsgUpdateParams } from "./tx";
/* RegisterInterchainAccount defines a rpc handler for MsgRegisterInterchainAccount. */
export const registerInterchainAccount = buildTx<MsgRegisterInterchainAccount>({
  msg: MsgRegisterInterchainAccount
});
/* SendTx defines a rpc handler for MsgSendTx. */
export const sendTx = buildTx<MsgSendTx>({
  msg: MsgSendTx
});
/* UpdateParams defines a rpc handler for MsgUpdateParams. */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});