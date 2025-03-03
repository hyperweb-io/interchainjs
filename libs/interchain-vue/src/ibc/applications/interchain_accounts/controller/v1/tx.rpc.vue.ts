import { buildUseVueMutation } from "../../../../../vue-query";
import { MsgRegisterInterchainAccount, MsgSendTx, MsgUpdateParams } from "./tx";
import { createRegisterInterchainAccount, createSendTx, createUpdateParams } from "./tx.rpc.func";
export const useRegisterInterchainAccount = buildUseVueMutation<MsgRegisterInterchainAccount, Error>({
  builderMutationFn: createRegisterInterchainAccount
});
export const useSendTx = buildUseVueMutation<MsgSendTx, Error>({
  builderMutationFn: createSendTx
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});