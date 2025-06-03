import { buildTx } from "../../../helper-func-types";
import { MsgUpdateParams } from "./tx";
/* UpdateParams defines a governance operation for updating the x/consensus module parameters.
 The authority is defined in the keeper.

 Since: cosmos-sdk 0.47 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});