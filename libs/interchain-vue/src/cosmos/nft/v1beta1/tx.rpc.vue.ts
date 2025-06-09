import { buildUseVueMutation } from "../../../vue-query";
import { MsgSend } from "./tx";
import { send } from "./tx.rpc.func";
/**
 * Send defines a method to send a nft from one account to another account.
 * @name useSend
 * @package cosmos.nft.v1beta1
 * @see proto service: cosmos.nft.v1beta1.Send
 */
export const useSend = buildUseVueMutation<MsgSend, Error>({
  builderMutationFn: send
});