import { buildUseMutation } from "../../../../../react-query";
import { MsgUpdateParams, MsgModuleQuerySafe } from "./tx";
import { updateParams, moduleQuerySafe } from "./tx.rpc.func";
/* UpdateParams defines a rpc handler for MsgUpdateParams. */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
/* ModuleQuerySafe defines a rpc handler for MsgModuleQuerySafe. */
export const useModuleQuerySafe = buildUseMutation<MsgModuleQuerySafe, Error>({
  builderMutationFn: moduleQuerySafe
});