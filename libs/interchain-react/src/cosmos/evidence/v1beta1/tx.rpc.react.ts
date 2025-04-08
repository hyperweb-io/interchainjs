import { buildUseMutation } from "../../../react-query";
import { MsgSubmitEvidence } from "./tx";
import { submitEvidence } from "./tx.rpc.func";
export const useSubmitEvidence = buildUseMutation<MsgSubmitEvidence, Error>({
  builderMutationFn: submitEvidence
});