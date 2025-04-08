import { buildUseVueMutation } from "../../../../vue-query";
import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm, MsgUpdateParams } from "./tx";
import { connectionOpenInit, connectionOpenTry, connectionOpenAck, connectionOpenConfirm, updateConnectionParams } from "./tx.rpc.func";
export const useConnectionOpenInit = buildUseVueMutation<MsgConnectionOpenInit, Error>({
  builderMutationFn: connectionOpenInit
});
export const useConnectionOpenTry = buildUseVueMutation<MsgConnectionOpenTry, Error>({
  builderMutationFn: connectionOpenTry
});
export const useConnectionOpenAck = buildUseVueMutation<MsgConnectionOpenAck, Error>({
  builderMutationFn: connectionOpenAck
});
export const useConnectionOpenConfirm = buildUseVueMutation<MsgConnectionOpenConfirm, Error>({
  builderMutationFn: connectionOpenConfirm
});
export const useUpdateConnectionParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateConnectionParams
});