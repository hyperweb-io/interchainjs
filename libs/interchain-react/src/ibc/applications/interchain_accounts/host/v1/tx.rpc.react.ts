import { buildUseMutation } from "../../../../../react-query";
import { MsgUpdateParams, MsgModuleQuerySafe } from "./tx";
import { createUpdateParams, createModuleQuerySafe } from "./tx.rpc.func";
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const useModuleQuerySafe = buildUseMutation<MsgModuleQuerySafe, Error>({
  builderMutationFn: createModuleQuerySafe
});