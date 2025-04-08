import { buildUseMutation } from "../../../react-query";
import { MsgGrant, MsgExec, MsgRevoke } from "./tx";
import { grant, exec, revoke } from "./tx.rpc.func";
export const useGrant = buildUseMutation<MsgGrant, Error>({
  builderMutationFn: grant
});
export const useExec = buildUseMutation<MsgExec, Error>({
  builderMutationFn: exec
});
export const useRevoke = buildUseMutation<MsgRevoke, Error>({
  builderMutationFn: revoke
});