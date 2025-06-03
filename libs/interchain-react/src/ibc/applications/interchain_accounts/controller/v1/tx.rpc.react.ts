import { buildUseMutation } from "../../../../../react-query";
import { MsgRegisterInterchainAccount, MsgSendTx, MsgUpdateParams } from "./tx";
import { registerInterchainAccount, sendTx, updateParams } from "./tx.rpc.func";
/* RegisterInterchainAccount defines a rpc handler for MsgRegisterInterchainAccount. */
export const useRegisterInterchainAccount = buildUseMutation<MsgRegisterInterchainAccount, Error>({
  builderMutationFn: registerInterchainAccount
});
/* SendTx defines a rpc handler for MsgSendTx. */
export const useSendTx = buildUseMutation<MsgSendTx, Error>({
  builderMutationFn: sendTx
});
/* UpdateParams defines a rpc handler for MsgUpdateParams. */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});