import { buildUseMutation } from "../../../react-query";
import { MsgVerifyInvariant, MsgUpdateParams } from "./tx";
import { verifyInvariant, updateParams } from "./tx.rpc.func";
/* VerifyInvariant defines a method to verify a particular invariant. */
export const useVerifyInvariant = buildUseMutation<MsgVerifyInvariant, Error>({
  builderMutationFn: verifyInvariant
});
/* UpdateParams defines a governance operation for updating the x/crisis module
 parameters. The authority is defined in the keeper.

 Since: cosmos-sdk 0.47 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});