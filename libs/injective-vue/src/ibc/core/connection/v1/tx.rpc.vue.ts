import { buildUseVueMutation } from "../../../../vue-query";
import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm, MsgUpdateParams } from "./tx";
import { connectionOpenInit, connectionOpenTry, connectionOpenAck, connectionOpenConfirm, updateConnectionParams } from "./tx.rpc.func";
/**
 * ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit.
 * @name useConnectionOpenInit
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.ConnectionOpenInit
 */
export const useConnectionOpenInit = buildUseVueMutation<MsgConnectionOpenInit, Error>({
  builderMutationFn: connectionOpenInit
});
/**
 * ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry.
 * @name useConnectionOpenTry
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.ConnectionOpenTry
 */
export const useConnectionOpenTry = buildUseVueMutation<MsgConnectionOpenTry, Error>({
  builderMutationFn: connectionOpenTry
});
/**
 * ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck.
 * @name useConnectionOpenAck
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.ConnectionOpenAck
 */
export const useConnectionOpenAck = buildUseVueMutation<MsgConnectionOpenAck, Error>({
  builderMutationFn: connectionOpenAck
});
/**
 * ConnectionOpenConfirm defines a rpc handler method for
 * MsgConnectionOpenConfirm.
 * @name useConnectionOpenConfirm
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.ConnectionOpenConfirm
 */
export const useConnectionOpenConfirm = buildUseVueMutation<MsgConnectionOpenConfirm, Error>({
  builderMutationFn: connectionOpenConfirm
});
/**
 * UpdateConnectionParams defines a rpc handler method for
 * MsgUpdateParams.
 * @name useUpdateConnectionParams
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.UpdateConnectionParams
 */
export const useUpdateConnectionParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateConnectionParams
});