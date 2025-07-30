import { buildUseMutation } from "../../../../react-query";
import { MsgRegisterCounterparty, MsgUpdateClientConfig } from "./tx";
import { registerCounterparty, updateClientConfig } from "./tx.rpc.func";
/**
 * RegisterCounterparty defines a rpc handler method for MsgRegisterCounterparty.
 * @name useRegisterCounterparty
 * @package ibc.core.client.v2
 * @see proto service: ibc.core.client.v2.RegisterCounterparty
 */
export const useRegisterCounterparty = buildUseMutation<MsgRegisterCounterparty, Error>({
  builderMutationFn: registerCounterparty
});
/**
 * UpdateClientConfig defines a rpc handler method for MsgUpdateClientConfig.
 * @name useUpdateClientConfig
 * @package ibc.core.client.v2
 * @see proto service: ibc.core.client.v2.UpdateClientConfig
 */
export const useUpdateClientConfig = buildUseMutation<MsgUpdateClientConfig, Error>({
  builderMutationFn: updateClientConfig
});