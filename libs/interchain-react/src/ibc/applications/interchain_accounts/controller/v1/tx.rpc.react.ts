import { buildUseMutation } from "../../../../../react-query";
import { MsgRegisterInterchainAccount, MsgSendTx, MsgUpdateParams } from "./tx";
import { registerInterchainAccount, sendTx, updateParams } from "./tx.rpc.func";
export const useRegisterInterchainAccount = buildUseMutation<MsgRegisterInterchainAccount, Error>({
  builderMutationFn: registerInterchainAccount
});
export const useSendTx = buildUseMutation<MsgSendTx, Error>({
  builderMutationFn: sendTx
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});