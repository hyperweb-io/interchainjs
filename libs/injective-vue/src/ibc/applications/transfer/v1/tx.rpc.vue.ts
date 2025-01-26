import { buildUseVueMutation } from "../../../../vue-query";
import { MsgTransfer, MsgUpdateParams } from "./tx";
import { createTransfer, createUpdateParams } from "./tx.rpc.func.ts";
export const useTransfer = buildUseVueMutation<MsgTransfer, Error>({
  builderMutationFn: createTransfer
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});