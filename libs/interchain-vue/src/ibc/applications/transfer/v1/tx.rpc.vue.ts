import { buildUseVueMutation } from "../../../../vue-query";
import { MsgTransfer, MsgUpdateParams } from "./tx";
import { transfer, updateParams } from "./tx.rpc.func";
export const useTransfer = buildUseVueMutation<MsgTransfer, Error>({
  builderMutationFn: transfer
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});