import { buildUseMutation } from "../../../react-query";
import { MsgGrantAllowance, MsgRevokeAllowance, MsgPruneAllowances } from "./tx";
import { grantAllowance, revokeAllowance, pruneAllowances } from "./tx.rpc.func";
export const useGrantAllowance = buildUseMutation<MsgGrantAllowance, Error>({
  builderMutationFn: grantAllowance
});
export const useRevokeAllowance = buildUseMutation<MsgRevokeAllowance, Error>({
  builderMutationFn: revokeAllowance
});
export const usePruneAllowances = buildUseMutation<MsgPruneAllowances, Error>({
  builderMutationFn: pruneAllowances
});