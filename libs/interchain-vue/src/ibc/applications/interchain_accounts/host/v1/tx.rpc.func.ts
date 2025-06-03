import { buildTx } from "../../../../../helper-func-types";
import { MsgUpdateParams, MsgModuleQuerySafe } from "./tx";
/* UpdateParams defines a rpc handler for MsgUpdateParams. */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/* ModuleQuerySafe defines a rpc handler for MsgModuleQuerySafe. */
export const moduleQuerySafe = buildTx<MsgModuleQuerySafe>({
  msg: MsgModuleQuerySafe
});