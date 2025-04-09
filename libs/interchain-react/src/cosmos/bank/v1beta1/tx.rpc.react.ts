import { buildUseMutation } from "../../../react-query";
import { MsgSend, MsgMultiSend, MsgUpdateParams, MsgSetSendEnabled } from "./tx";
import { send, multiSend, updateParams, setSendEnabled } from "./tx.rpc.func";
export const useSend = buildUseMutation<MsgSend, Error>({
  builderMutationFn: send
});
export const useMultiSend = buildUseMutation<MsgMultiSend, Error>({
  builderMutationFn: multiSend
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
export const useSetSendEnabled = buildUseMutation<MsgSetSendEnabled, Error>({
  builderMutationFn: setSendEnabled
});