import { buildUseMutation } from "../../../../../react-query";
import { MsgRegisterInterchainAccount, MsgSendTx, MsgUpdateParams } from "./tx";
import { createRegisterInterchainAccount, createSendTx, createUpdateParams } from "./tx.rpc.func";
export const useRegisterInterchainAccount = buildUseMutation<MsgRegisterInterchainAccount, Error>({
  builderMutationFn: createRegisterInterchainAccount
});
export const useSendTx = buildUseMutation<MsgSendTx, Error>({
  builderMutationFn: createSendTx
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});