import { buildUseVueMutation } from "../../../vue-query";
import { MsgSend, MsgMultiSend, MsgUpdateParams, MsgSetSendEnabled } from "./tx";
import { createSend, createMultiSend, createUpdateParams, createSetSendEnabled } from "./tx.rpc.func";
export const useSend = buildUseVueMutation<MsgSend, Error>({
  builderMutationFn: createSend
});
export const useMultiSend = buildUseVueMutation<MsgMultiSend, Error>({
  builderMutationFn: createMultiSend
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const useSetSendEnabled = buildUseVueMutation<MsgSetSendEnabled, Error>({
  builderMutationFn: createSetSendEnabled
});