import { buildTx } from "../../../helper-func-types";
import { MsgUpdateParams } from "./tx";
/* UpdateParams defines a governance operation for updating the x/mint module
 parameters. The authority is defaults to the x/gov module account.

 Since: cosmos-sdk 0.47 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});