import { buildTx } from "../../../helper-func-types";
import { MsgUpdateParams, MsgCreateNamespace, MsgUpdateNamespace, MsgUpdateActorRoles, MsgClaimVoucher } from "./tx";
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
 * @name updateNamespace
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.UpdateNamespace
 */
export const updateNamespace = buildTx<MsgUpdateNamespace>({
  msg: MsgUpdateNamespace
});
/**
 * @name updateActorRoles
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.UpdateActorRoles
 */
export const updateActorRoles = buildTx<MsgUpdateActorRoles>({
  msg: MsgUpdateActorRoles
});
/**
 * @name claimVoucher
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.ClaimVoucher
 */
export const claimVoucher = buildTx<MsgClaimVoucher>({
  msg: MsgClaimVoucher
});