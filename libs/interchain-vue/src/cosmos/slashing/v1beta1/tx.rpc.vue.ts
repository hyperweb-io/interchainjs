import { buildUseVueMutation } from "../../../vue-query";
import { MsgUnjail, MsgUpdateParams } from "./tx";
import { unjail, updateParams } from "./tx.rpc.func";
export const useUnjail = buildUseVueMutation<MsgUnjail, Error>({
  builderMutationFn: unjail
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});