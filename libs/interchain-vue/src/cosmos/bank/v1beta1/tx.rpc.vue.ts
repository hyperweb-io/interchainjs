import { buildUseVueMutation } from "../../../vue-query";
import { MsgSend, MsgMultiSend, MsgUpdateParams, MsgSetSendEnabled } from "./tx";
import { send, multiSend, updateParams, setSendEnabled } from "./tx.rpc.func";
export const useSend = buildUseVueMutation<MsgSend, Error>({
  builderMutationFn: send
});
export const useMultiSend = buildUseVueMutation<MsgMultiSend, Error>({
  builderMutationFn: multiSend
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
export const useSetSendEnabled = buildUseVueMutation<MsgSetSendEnabled, Error>({
  builderMutationFn: setSendEnabled
});