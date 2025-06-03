import { buildUseVueMutation } from "../../../vue-query";
import { MsgUpdateParams } from "./tx";
import { updateParams } from "./tx.rpc.func";
/* UpdateParams defines a (governance) operation for updating the x/auth module
 parameters. The authority defaults to the x/gov module account.

 Since: cosmos-sdk 0.47 */
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});