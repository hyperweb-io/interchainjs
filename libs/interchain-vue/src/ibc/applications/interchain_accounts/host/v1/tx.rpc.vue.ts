import { buildUseVueMutation } from "../../../../../vue-query";
import { MsgUpdateParams, MsgModuleQuerySafe } from "./tx";
import { updateParams, moduleQuerySafe } from "./tx.rpc.func";
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
export const useModuleQuerySafe = buildUseVueMutation<MsgModuleQuerySafe, Error>({
  builderMutationFn: moduleQuerySafe
});