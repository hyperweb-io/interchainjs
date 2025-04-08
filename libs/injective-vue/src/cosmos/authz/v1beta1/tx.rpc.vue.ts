import { buildUseVueMutation } from "../../../vue-query";
import { MsgGrant, MsgExec, MsgRevoke } from "./tx";
import { grant, exec, revoke } from "./tx.rpc.func";
export const useGrant = buildUseVueMutation<MsgGrant, Error>({
  builderMutationFn: grant
});
export const useExec = buildUseVueMutation<MsgExec, Error>({
  builderMutationFn: exec
});
export const useRevoke = buildUseVueMutation<MsgRevoke, Error>({
  builderMutationFn: revoke
});