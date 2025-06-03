import { buildUseVueMutation } from "../../../vue-query";
import { MsgVerifyInvariant, MsgUpdateParams } from "./tx";
import { verifyInvariant, updateParams } from "./tx.rpc.func";
/* VerifyInvariant defines a method to verify a particular invariant. */
export const useVerifyInvariant = buildUseVueMutation<MsgVerifyInvariant, Error>({
  builderMutationFn: verifyInvariant
});
/* UpdateParams defines a governance operation for updating the x/crisis module
 parameters. The authority is defined in the keeper.

 Since: cosmos-sdk 0.47 */
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});