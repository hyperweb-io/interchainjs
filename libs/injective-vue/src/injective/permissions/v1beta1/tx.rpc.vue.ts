import { buildUseVueMutation } from "../../../vue-query";
import { MsgUpdateParams, MsgCreateNamespace, MsgDeleteNamespace, MsgUpdateNamespace, MsgUpdateNamespaceRoles, MsgRevokeNamespaceRoles, MsgClaimVoucher } from "./tx";
import { updateParams, createNamespace, deleteNamespace, updateNamespace, updateNamespaceRoles, revokeNamespaceRoles, claimVoucher } from "./tx.rpc.func";
/**
 * @name useUpdateParams
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.UpdateParams
 */
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
/**
 * @name useCreateNamespace
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.CreateNamespace
 */
export const useCreateNamespace = buildUseVueMutation<MsgCreateNamespace, Error>({
  builderMutationFn: createNamespace
});
/**
 * @name useDeleteNamespace
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.DeleteNamespace
 */
export const useDeleteNamespace = buildUseVueMutation<MsgDeleteNamespace, Error>({
  builderMutationFn: deleteNamespace
});
/**
 * @name useUpdateNamespace
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.UpdateNamespace
 */
export const useUpdateNamespace = buildUseVueMutation<MsgUpdateNamespace, Error>({
  builderMutationFn: updateNamespace
});
/**
 * @name useUpdateNamespaceRoles
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.UpdateNamespaceRoles
 */
export const useUpdateNamespaceRoles = buildUseVueMutation<MsgUpdateNamespaceRoles, Error>({
  builderMutationFn: updateNamespaceRoles
});
/**
 * @name useRevokeNamespaceRoles
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.RevokeNamespaceRoles
 */
export const useRevokeNamespaceRoles = buildUseVueMutation<MsgRevokeNamespaceRoles, Error>({
  builderMutationFn: revokeNamespaceRoles
});
/**
 * @name useClaimVoucher
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.ClaimVoucher
 */
export const useClaimVoucher = buildUseVueMutation<MsgClaimVoucher, Error>({
  builderMutationFn: claimVoucher
});