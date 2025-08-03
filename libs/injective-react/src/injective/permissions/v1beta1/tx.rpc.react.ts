import { buildUseMutation } from "../../../react-query";
import { MsgUpdateParams, MsgCreateNamespace, MsgUpdateNamespace, MsgUpdateActorRoles, MsgClaimVoucher } from "./tx";
import { updateParams, createNamespace, updateNamespace, updateActorRoles, claimVoucher } from "./tx.rpc.func";
/**
 * @name useUpdateParams
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.UpdateParams
 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
/**
 * @name useCreateNamespace
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.CreateNamespace
 */
export const useCreateNamespace = buildUseMutation<MsgCreateNamespace, Error>({
  builderMutationFn: createNamespace
});
/**
 * @name useUpdateNamespace
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.UpdateNamespace
 */
export const useUpdateNamespace = buildUseMutation<MsgUpdateNamespace, Error>({
  builderMutationFn: updateNamespace
});
/**
 * @name useUpdateActorRoles
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.UpdateActorRoles
 */
export const useUpdateActorRoles = buildUseMutation<MsgUpdateActorRoles, Error>({
  builderMutationFn: updateActorRoles
});
/**
 * @name useClaimVoucher
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.ClaimVoucher
 */
export const useClaimVoucher = buildUseMutation<MsgClaimVoucher, Error>({
  builderMutationFn: claimVoucher
});