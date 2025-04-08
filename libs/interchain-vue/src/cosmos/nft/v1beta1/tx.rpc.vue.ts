import { buildUseVueMutation } from "../../../vue-query";
import { MsgSend } from "./tx";
import { send } from "./tx.rpc.func";
export const useSend = buildUseVueMutation<MsgSend, Error>({
  builderMutationFn: send
});