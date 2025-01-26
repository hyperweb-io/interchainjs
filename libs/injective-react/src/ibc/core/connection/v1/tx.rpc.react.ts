import { buildUseMutation } from "../../../../react-query";
import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm, MsgUpdateParams } from "./tx";
import { createConnectionOpenInit, createConnectionOpenTry, createConnectionOpenAck, createConnectionOpenConfirm, createUpdateConnectionParams } from "./tx.rpc.func";
export const useConnectionOpenInit = buildUseMutation<MsgConnectionOpenInit, Error>({
  builderMutationFn: createConnectionOpenInit
});
export const useConnectionOpenTry = buildUseMutation<MsgConnectionOpenTry, Error>({
  builderMutationFn: createConnectionOpenTry
});
export const useConnectionOpenAck = buildUseMutation<MsgConnectionOpenAck, Error>({
  builderMutationFn: createConnectionOpenAck
});
export const useConnectionOpenConfirm = buildUseMutation<MsgConnectionOpenConfirm, Error>({
  builderMutationFn: createConnectionOpenConfirm
});
export const useUpdateConnectionParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateConnectionParams
});