import { buildUseMutation } from "../../../react-query";
import { MsgSend, MsgMultiSend, MsgUpdateParams, MsgSetSendEnabled } from "./tx";
import { createSend, createMultiSend, createUpdateParams, createSetSendEnabled } from "./tx.rpc.func";
export const useSend = buildUseMutation<MsgSend, Error>({
  builderMutationFn: createSend
});
export const useMultiSend = buildUseMutation<MsgMultiSend, Error>({
  builderMutationFn: createMultiSend
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const useSetSendEnabled = buildUseMutation<MsgSetSendEnabled, Error>({
  builderMutationFn: createSetSendEnabled
});