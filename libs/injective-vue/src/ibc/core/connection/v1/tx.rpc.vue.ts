import { buildUseVueMutation } from "../../../../vue-query";
import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm, MsgUpdateParams } from "./tx";
import { connectionOpenInit, connectionOpenTry, connectionOpenAck, connectionOpenConfirm, updateConnectionParams } from "./tx.rpc.func";
/* ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
export const useConnectionOpenInit = buildUseVueMutation<MsgConnectionOpenInit, Error>({
  builderMutationFn: connectionOpenInit
});
/* ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
export const useConnectionOpenTry = buildUseVueMutation<MsgConnectionOpenTry, Error>({
  builderMutationFn: connectionOpenTry
});
/* ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
export const useConnectionOpenAck = buildUseVueMutation<MsgConnectionOpenAck, Error>({
  builderMutationFn: connectionOpenAck
});
/* ConnectionOpenConfirm defines a rpc handler method for
 MsgConnectionOpenConfirm. */
export const useConnectionOpenConfirm = buildUseVueMutation<MsgConnectionOpenConfirm, Error>({
  builderMutationFn: connectionOpenConfirm
});
/* UpdateConnectionParams defines a rpc handler method for
 MsgUpdateParams. */
export const useUpdateConnectionParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateConnectionParams
});