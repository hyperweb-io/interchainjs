import { buildUseVueMutation } from "../../../vue-query";
import { MsgSubmitEvidence } from "./tx";
import { createSubmitEvidence } from "./tx.rpc.func";
export const useSubmitEvidence = buildUseVueMutation<MsgSubmitEvidence, Error>({
  builderMutationFn: createSubmitEvidence
});