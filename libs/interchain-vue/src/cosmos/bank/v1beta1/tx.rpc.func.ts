import { buildTx } from "../../../helper-func-types";
import { MsgSend, MsgMultiSend, MsgUpdateParams, MsgSetSendEnabled } from "./tx";
/* Send defines a method for sending coins from one account to another account. */
export const send = buildTx<MsgSend>({
  msg: MsgSend
});
/* MultiSend defines a method for sending coins from some accounts to other accounts. */
export const multiSend = buildTx<MsgMultiSend>({
  msg: MsgMultiSend
});
/* UpdateParams defines a governance operation for updating the x/bank module parameters.
 The authority is defined in the keeper.

 Since: cosmos-sdk 0.47 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/* SetSendEnabled is a governance operation for setting the SendEnabled flag
 on any number of Denoms. Only the entries to add or update should be
 included. Entries that already exist in the store, but that aren't
 included in this message, will be left unchanged.

 Since: cosmos-sdk 0.47 */
export const setSendEnabled = buildTx<MsgSetSendEnabled>({
  msg: MsgSetSendEnabled
});