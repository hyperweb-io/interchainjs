import { buildUseMutation } from "../../../react-query";
import { MsgVerifyInvariant, MsgUpdateParams } from "./tx";
import { createVerifyInvariant, createUpdateParams } from "./tx.rpc.func.ts";
export const useVerifyInvariant = buildUseMutation<MsgVerifyInvariant, Error>({
  builderMutationFn: createVerifyInvariant
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});