import { buildUseMutation } from "../../../../../react-query";
import { MsgRegisterInterchainAccount, MsgSendTx, MsgUpdateParams } from "./tx";
import { registerInterchainAccount, sendTx, updateParams } from "./tx.rpc.func";
/**
 * RegisterInterchainAccount defines a rpc handler for MsgRegisterInterchainAccount.
 * @name useRegisterInterchainAccount
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto service: ibc.applications.interchain_accounts.controller.v1.RegisterInterchainAccount
 */
export const useRegisterInterchainAccount = buildUseMutation<MsgRegisterInterchainAccount, Error>({
  builderMutationFn: registerInterchainAccount
});
/**
 * SendTx defines a rpc handler for MsgSendTx.
 * @name useSendTx
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto service: ibc.applications.interchain_accounts.controller.v1.SendTx
 */
export const useSendTx = buildUseMutation<MsgSendTx, Error>({
  builderMutationFn: sendTx
});
/**
 * UpdateParams defines a rpc handler for MsgUpdateParams.
 * @name useUpdateParams
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto service: ibc.applications.interchain_accounts.controller.v1.UpdateParams
 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});