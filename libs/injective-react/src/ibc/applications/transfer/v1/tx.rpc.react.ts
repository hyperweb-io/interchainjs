import { buildUseMutation } from "../../../../react-query";
import { MsgTransfer, MsgUpdateParams } from "./tx";
import { transfer, updateParams } from "./tx.rpc.func";
export const useTransfer = buildUseMutation<MsgTransfer, Error>({
  builderMutationFn: transfer
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});