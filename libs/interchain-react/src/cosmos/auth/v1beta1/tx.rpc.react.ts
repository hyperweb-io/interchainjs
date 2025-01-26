import { buildUseMutation } from "../../../react-query";
import { MsgUpdateParams } from "./tx";
import { createUpdateParams } from "./tx.rpc.func.ts";
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});