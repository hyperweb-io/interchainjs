import { buildUseVueMutation } from "../../../vue-query";
import { MsgBid, MsgUpdateParams } from "./tx";
import { createBid, createUpdateParams } from "./tx.rpc.func";
export const useBid = buildUseVueMutation<MsgBid, Error>({
  builderMutationFn: createBid
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});