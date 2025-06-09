import { buildUseMutation } from "../../../react-query";
import { MsgGrantAllowance, MsgRevokeAllowance, MsgPruneAllowances } from "./tx";
import { grantAllowance, revokeAllowance, pruneAllowances } from "./tx.rpc.func";
/**
 * GrantAllowance grants fee allowance to the grantee on the granter's
 * account with the provided expiration time.
 * @name useGrantAllowance
 * @package cosmos.feegrant.v1beta1
 * @see proto service: cosmos.feegrant.v1beta1.GrantAllowance
 */
export const useGrantAllowance = buildUseMutation<MsgGrantAllowance, Error>({
  builderMutationFn: grantAllowance
});
/**
 * RevokeAllowance revokes any fee allowance of granter's account that
 * has been granted to the grantee.
 * @name useRevokeAllowance
 * @package cosmos.feegrant.v1beta1
 * @see proto service: cosmos.feegrant.v1beta1.RevokeAllowance
 */
export const useRevokeAllowance = buildUseMutation<MsgRevokeAllowance, Error>({
  builderMutationFn: revokeAllowance
});
/**
 * PruneAllowances prunes expired fee allowances, currently up to 75 at a time.
 * 
 * Since cosmos-sdk 0.50
 * @name usePruneAllowances
 * @package cosmos.feegrant.v1beta1
 * @see proto service: cosmos.feegrant.v1beta1.PruneAllowances
 */
export const usePruneAllowances = buildUseMutation<MsgPruneAllowances, Error>({
  builderMutationFn: pruneAllowances
});