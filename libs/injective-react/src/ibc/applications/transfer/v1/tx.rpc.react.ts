import { buildUseMutation } from "../../../../react-query";
import { MsgTransfer, MsgUpdateParams } from "./tx";
import { createTransfer, createUpdateParams } from "./tx.rpc.func";
export const useTransfer = buildUseMutation<MsgTransfer, Error>({
  builderMutationFn: createTransfer
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});