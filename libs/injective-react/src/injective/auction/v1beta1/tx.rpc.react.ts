import { buildUseMutation } from "../../../react-query";
import { MsgBid, MsgUpdateParams } from "./tx";
import { bid, updateParams } from "./tx.rpc.func";
export const useBid = buildUseMutation<MsgBid, Error>({
  builderMutationFn: bid
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});