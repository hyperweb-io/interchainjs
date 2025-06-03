import { buildUseVueMutation } from "../../../vue-query";
import { MsgBid, MsgUpdateParams } from "./tx";
import { bid, updateParams } from "./tx.rpc.func";
/* Bid defines a method for placing a bid for an auction */
export const useBid = buildUseVueMutation<MsgBid, Error>({
  builderMutationFn: bid
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});