import { buildUseVueMutation } from "../../../../../vue-query";
import { MsgUpdateParams, MsgModuleQuerySafe } from "./tx";
import { updateParams, moduleQuerySafe } from "./tx.rpc.func";
/* UpdateParams defines a rpc handler for MsgUpdateParams. */
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
/* ModuleQuerySafe defines a rpc handler for MsgModuleQuerySafe. */
export const useModuleQuerySafe = buildUseVueMutation<MsgModuleQuerySafe, Error>({
  builderMutationFn: moduleQuerySafe
});