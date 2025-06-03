import { buildUseMutation } from "../../../react-query";
import { MsgSend } from "./tx";
import { send } from "./tx.rpc.func";
/* Send defines a method to send a nft from one account to another account. */
export const useSend = buildUseMutation<MsgSend, Error>({
  builderMutationFn: send
});