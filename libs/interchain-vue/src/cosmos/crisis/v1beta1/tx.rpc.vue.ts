import { buildUseVueMutation } from "../../../vue-query";
import { MsgVerifyInvariant, MsgUpdateParams } from "./tx";
import { verifyInvariant, updateParams } from "./tx.rpc.func";
export const useVerifyInvariant = buildUseVueMutation<MsgVerifyInvariant, Error>({
  builderMutationFn: verifyInvariant
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});