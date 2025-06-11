import { buildUseVueMutation } from "../../../vue-query";
import { MsgUpdateParams } from "./tx";
import { updateParams } from "./tx.rpc.func";
/**
 * UpdateParams defines a governance operation for updating the x/consensus module parameters.
 * The authority is defined in the keeper.
 * @name useUpdateParams
 * @package cosmos.consensus.v1
 * @see proto service: cosmos.consensus.v1.UpdateParams
 */
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});