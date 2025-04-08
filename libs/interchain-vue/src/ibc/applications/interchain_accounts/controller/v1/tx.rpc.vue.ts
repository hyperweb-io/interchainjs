import { buildUseVueMutation } from "../../../../../vue-query";
import { MsgRegisterInterchainAccount, MsgSendTx, MsgUpdateParams } from "./tx";
import { registerInterchainAccount, sendTx, updateParams } from "./tx.rpc.func";
export const useRegisterInterchainAccount = buildUseVueMutation<MsgRegisterInterchainAccount, Error>({
  builderMutationFn: registerInterchainAccount
});
export const useSendTx = buildUseVueMutation<MsgSendTx, Error>({
  builderMutationFn: sendTx
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});