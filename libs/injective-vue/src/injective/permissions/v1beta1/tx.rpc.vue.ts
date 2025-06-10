import { buildUseVueMutation } from "../../../vue-query";
import { MsgUpdateParams, MsgCreateNamespace, MsgUpdateNamespace, MsgUpdateActorRoles, MsgClaimVoucher } from "./tx";
import { updateParams, createNamespace, updateNamespace, updateActorRoles, claimVoucher } from "./tx.rpc.func";
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
 * @name useUpdateNamespace
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.UpdateNamespace
 */
export const useUpdateNamespace = buildUseVueMutation<MsgUpdateNamespace, Error>({
  builderMutationFn: updateNamespace
});
/**
 * @name useUpdateActorRoles
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.UpdateActorRoles
 */
export const useUpdateActorRoles = buildUseVueMutation<MsgUpdateActorRoles, Error>({
  builderMutationFn: updateActorRoles
});
/**
 * @name useClaimVoucher
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.ClaimVoucher
 */
export const useClaimVoucher = buildUseVueMutation<MsgClaimVoucher, Error>({
  builderMutationFn: claimVoucher
});