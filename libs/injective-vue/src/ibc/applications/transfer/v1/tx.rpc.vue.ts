import { buildUseVueMutation } from "../../../../vue-query";
import { MsgTransfer, MsgUpdateParams } from "./tx";
import { transfer, updateParams } from "./tx.rpc.func";
/* Transfer defines a rpc handler method for MsgTransfer. */
export const useTransfer = buildUseVueMutation<MsgTransfer, Error>({
  builderMutationFn: transfer
});
/* UpdateParams defines a rpc handler for MsgUpdateParams. */
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});