import { buildUseVueMutation } from "../../../vue-query";
import { MsgSend } from "./tx";
import { send } from "./tx.rpc.func";
/* Send defines a method to send a nft from one account to another account. */
export const useSend = buildUseVueMutation<MsgSend, Error>({
  builderMutationFn: send
});