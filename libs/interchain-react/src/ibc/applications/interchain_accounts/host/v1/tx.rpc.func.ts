import { buildTx } from "../../../../../helper-func-types";
import { MsgUpdateParams, MsgModuleQuerySafe } from "./tx";
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
export const moduleQuerySafe = buildTx<MsgModuleQuerySafe>({
  msg: MsgModuleQuerySafe
});