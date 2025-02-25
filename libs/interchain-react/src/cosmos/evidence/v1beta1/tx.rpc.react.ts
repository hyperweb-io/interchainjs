import { buildUseMutation } from "../../../react-query";
import { MsgSubmitEvidence } from "./tx";
import { createSubmitEvidence } from "./tx.rpc.func";
export const useSubmitEvidence = buildUseMutation<MsgSubmitEvidence, Error>({
  builderMutationFn: createSubmitEvidence
});