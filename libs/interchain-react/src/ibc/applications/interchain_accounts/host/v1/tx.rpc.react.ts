import { buildUseMutation } from "../../../../../react-query";
import { MsgUpdateParams, MsgModuleQuerySafe } from "./tx";
import { updateParams, moduleQuerySafe } from "./tx.rpc.func";
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
export const useModuleQuerySafe = buildUseMutation<MsgModuleQuerySafe, Error>({
  builderMutationFn: moduleQuerySafe
});