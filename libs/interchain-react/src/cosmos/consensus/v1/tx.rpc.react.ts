import { buildUseMutation } from "../../../react-query";
import { MsgUpdateParams } from "./tx";
import { updateParams } from "./tx.rpc.func";
/* UpdateParams defines a governance operation for updating the x/consensus module parameters.
 The authority is defined in the keeper.

 Since: cosmos-sdk 0.47 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});