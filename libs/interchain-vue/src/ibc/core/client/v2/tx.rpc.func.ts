import { buildTx } from "../../../../helper-func-types";
import { MsgRegisterCounterparty, MsgUpdateClientConfig } from "./tx";
/**
 * RegisterCounterparty defines a rpc handler method for MsgRegisterCounterparty.
 * @name registerCounterparty
 * @package ibc.core.client.v2
 * @see proto service: ibc.core.client.v2.RegisterCounterparty
 */
export const registerCounterparty = buildTx<MsgRegisterCounterparty>({
  msg: MsgRegisterCounterparty
});
/**
 * UpdateClientConfig defines a rpc handler method for MsgUpdateClientConfig.
 * @name updateClientConfig
 * @package ibc.core.client.v2
 * @see proto service: ibc.core.client.v2.UpdateClientConfig
 */
export const updateClientConfig = buildTx<MsgUpdateClientConfig>({
  msg: MsgUpdateClientConfig
});