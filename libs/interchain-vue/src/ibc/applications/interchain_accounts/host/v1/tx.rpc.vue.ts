import { buildUseVueMutation } from "../../../../../vue-query";
import { MsgUpdateParams, MsgModuleQuerySafe } from "./tx";
import { updateParams, moduleQuerySafe } from "./tx.rpc.func";
/**
 * UpdateParams defines a rpc handler for MsgUpdateParams.
 * @name useUpdateParams
 * @package ibc.applications.interchain_accounts.host.v1
 * @see proto service: ibc.applications.interchain_accounts.host.v1.UpdateParams
 */
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
/**
 * ModuleQuerySafe defines a rpc handler for MsgModuleQuerySafe.
 * @name useModuleQuerySafe
 * @package ibc.applications.interchain_accounts.host.v1
 * @see proto service: ibc.applications.interchain_accounts.host.v1.ModuleQuerySafe
 */
export const useModuleQuerySafe = buildUseVueMutation<MsgModuleQuerySafe, Error>({
  builderMutationFn: moduleQuerySafe
});