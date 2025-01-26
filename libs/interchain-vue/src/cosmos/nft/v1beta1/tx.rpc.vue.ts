import { buildUseVueMutation } from "../../../vue-query";
import { MsgSend } from "./tx";
import { createSend } from "./tx.rpc.func";
export const useSend = buildUseVueMutation<MsgSend, Error>({
  builderMutationFn: createSend
});