import { buildUseVueMutation } from "../../../vue-query";
import { MsgUpdateParams } from "./tx";
import { updateParams } from "./tx.rpc.func";
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});