import { buildTx } from "../../../helper-func-types";
import { MsgUpdateParams, MsgCreateNamespace, MsgDeleteNamespace, MsgUpdateNamespace, MsgUpdateNamespaceRoles, MsgRevokeNamespaceRoles, MsgClaimVoucher } from "./tx";
/**
 * @name updateParams
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/**
 * @name createNamespace
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.CreateNamespace
 */
export const createNamespace = buildTx<MsgCreateNamespace>({
  msg: MsgCreateNamespace
});
/**
 * @name deleteNamespace
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.DeleteNamespace
 */
export const deleteNamespace = buildTx<MsgDeleteNamespace>({
  msg: MsgDeleteNamespace
});
/**
 * @name updateNamespace
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.UpdateNamespace
 */
export const updateNamespace = buildTx<MsgUpdateNamespace>({
  msg: MsgUpdateNamespace
});
/**
 * @name updateNamespaceRoles
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.UpdateNamespaceRoles
 */
export const updateNamespaceRoles = buildTx<MsgUpdateNamespaceRoles>({
  msg: MsgUpdateNamespaceRoles
});
/**
 * @name revokeNamespaceRoles
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.RevokeNamespaceRoles
 */
export const revokeNamespaceRoles = buildTx<MsgRevokeNamespaceRoles>({
  msg: MsgRevokeNamespaceRoles
});
/**
 * @name claimVoucher
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.ClaimVoucher
 */
export const claimVoucher = buildTx<MsgClaimVoucher>({
  msg: MsgClaimVoucher
});