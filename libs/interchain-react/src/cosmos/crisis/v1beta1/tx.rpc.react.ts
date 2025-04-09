import { buildUseMutation } from "../../../react-query";
import { MsgVerifyInvariant, MsgUpdateParams } from "./tx";
import { verifyInvariant, updateParams } from "./tx.rpc.func";
export const useVerifyInvariant = buildUseMutation<MsgVerifyInvariant, Error>({
  builderMutationFn: verifyInvariant
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});