import { buildTx } from "../../../helper-func-types";
import { MsgVerifyInvariant, MsgUpdateParams } from "./tx";
/* VerifyInvariant defines a method to verify a particular invariant. */
export const verifyInvariant = buildTx<MsgVerifyInvariant>({
  msg: MsgVerifyInvariant
});
/* UpdateParams defines a governance operation for updating the x/crisis module
 parameters. The authority is defined in the keeper.

 Since: cosmos-sdk 0.47 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});