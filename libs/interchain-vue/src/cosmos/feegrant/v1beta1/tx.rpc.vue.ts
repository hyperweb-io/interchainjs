import { buildUseVueMutation } from "../../../vue-query";
import { MsgGrantAllowance, MsgRevokeAllowance, MsgPruneAllowances } from "./tx";
import { grantAllowance, revokeAllowance, pruneAllowances } from "./tx.rpc.func";
/* GrantAllowance grants fee allowance to the grantee on the granter's
 account with the provided expiration time. */
export const useGrantAllowance = buildUseVueMutation<MsgGrantAllowance, Error>({
  builderMutationFn: grantAllowance
});
/* RevokeAllowance revokes any fee allowance of granter's account that
 has been granted to the grantee. */
export const useRevokeAllowance = buildUseVueMutation<MsgRevokeAllowance, Error>({
  builderMutationFn: revokeAllowance
});
/* PruneAllowances prunes expired fee allowances, currently up to 75 at a time.

 Since cosmos-sdk 0.50 */
export const usePruneAllowances = buildUseVueMutation<MsgPruneAllowances, Error>({
  builderMutationFn: pruneAllowances
});