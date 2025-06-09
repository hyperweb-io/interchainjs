import { buildUseMutation } from "../../../react-query";
import { MsgUpdateParams, MsgCreateNamespace, MsgDeleteNamespace, MsgUpdateNamespace, MsgUpdateNamespaceRoles, MsgRevokeNamespaceRoles, MsgClaimVoucher } from "./tx";
import { updateParams, createNamespace, deleteNamespace, updateNamespace, updateNamespaceRoles, revokeNamespaceRoles, claimVoucher } from "./tx.rpc.func";
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
 * @name useDeleteNamespace
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.DeleteNamespace
 */
export const useDeleteNamespace = buildUseMutation<MsgDeleteNamespace, Error>({
  builderMutationFn: deleteNamespace
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
 * @name useUpdateNamespaceRoles
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.UpdateNamespaceRoles
 */
export const useUpdateNamespaceRoles = buildUseMutation<MsgUpdateNamespaceRoles, Error>({
  builderMutationFn: updateNamespaceRoles
});
/**
 * @name useRevokeNamespaceRoles
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.RevokeNamespaceRoles
 */
export const useRevokeNamespaceRoles = buildUseMutation<MsgRevokeNamespaceRoles, Error>({
  builderMutationFn: revokeNamespaceRoles
});
/**
 * @name useClaimVoucher
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.ClaimVoucher
 */
export const useClaimVoucher = buildUseMutation<MsgClaimVoucher, Error>({
  builderMutationFn: claimVoucher
});