import { buildUseMutation } from "../../../react-query";
import { MsgSend } from "./tx";
import { send } from "./tx.rpc.func";
export const useSend = buildUseMutation<MsgSend, Error>({
  builderMutationFn: send
});