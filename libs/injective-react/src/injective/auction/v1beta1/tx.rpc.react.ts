import { buildUseMutation } from "../../../react-query";
import { MsgBid, MsgUpdateParams } from "./tx";
import { createBid, createUpdateParams } from "./tx.rpc.func";
export const useBid = buildUseMutation<MsgBid, Error>({
  builderMutationFn: createBid
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});