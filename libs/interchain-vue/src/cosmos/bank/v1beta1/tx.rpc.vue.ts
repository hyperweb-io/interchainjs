import { buildUseVueMutation } from "../../../vue-query";
import { MsgSend, MsgMultiSend, MsgUpdateParams, MsgSetSendEnabled } from "./tx";
import { send, multiSend, updateParams, setSendEnabled } from "./tx.rpc.func";
/* Send defines a method for sending coins from one account to another account. */
export const useSend = buildUseVueMutation<MsgSend, Error>({
  builderMutationFn: send
});
/* MultiSend defines a method for sending coins from some accounts to other accounts. */
export const useMultiSend = buildUseVueMutation<MsgMultiSend, Error>({
  builderMutationFn: multiSend
});
/* UpdateParams defines a governance operation for updating the x/bank module parameters.
 The authority is defined in the keeper.

 Since: cosmos-sdk 0.47 */
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
/* SetSendEnabled is a governance operation for setting the SendEnabled flag
 on any number of Denoms. Only the entries to add or update should be
 included. Entries that already exist in the store, but that aren't
 included in this message, will be left unchanged.

 Since: cosmos-sdk 0.47 */
export const useSetSendEnabled = buildUseVueMutation<MsgSetSendEnabled, Error>({
  builderMutationFn: setSendEnabled
});