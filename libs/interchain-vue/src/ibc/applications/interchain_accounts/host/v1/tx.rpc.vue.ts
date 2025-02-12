import { buildUseVueMutation } from "../../../../../vue-query";
import { MsgUpdateParams, MsgModuleQuerySafe } from "./tx";
import { createUpdateParams, createModuleQuerySafe } from "./tx.rpc.func";
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const useModuleQuerySafe = buildUseVueMutation<MsgModuleQuerySafe, Error>({
  builderMutationFn: createModuleQuerySafe
});