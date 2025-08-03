import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgUpdateParams } from "./tx";
import { createDenom, mint, burn, changeAdmin, setDenomMetadata, updateParams } from "./tx.rpc.func";
/**
 * @name useCreateDenom
 * @package injective.tokenfactory.v1beta1
 * @see proto service: injective.tokenfactory.v1beta1.CreateDenom
 */
export const useCreateDenom = buildUseVueMutation<MsgCreateDenom, Error>({
  builderMutationFn: createDenom
});
/**
 * @name useMint
 * @package injective.tokenfactory.v1beta1
 * @see proto service: injective.tokenfactory.v1beta1.Mint
 */
export const useMint = buildUseVueMutation<MsgMint, Error>({
  builderMutationFn: mint
});
/**
 * @name useBurn
 * @package injective.tokenfactory.v1beta1
 * @see proto service: injective.tokenfactory.v1beta1.Burn
 */
export const useBurn = buildUseVueMutation<MsgBurn, Error>({
  builderMutationFn: burn
});
/**
 * @name useChangeAdmin
 * @package injective.tokenfactory.v1beta1
 * @see proto service: injective.tokenfactory.v1beta1.ChangeAdmin
 */
export const useChangeAdmin = buildUseVueMutation<MsgChangeAdmin, Error>({
  builderMutationFn: changeAdmin
});
/**
 * @name useSetDenomMetadata
 * @package injective.tokenfactory.v1beta1
 * @see proto service: injective.tokenfactory.v1beta1.SetDenomMetadata
 */
export const useSetDenomMetadata = buildUseVueMutation<MsgSetDenomMetadata, Error>({
  builderMutationFn: setDenomMetadata
});
/**
 * @name useUpdateParams
 * @package injective.tokenfactory.v1beta1
 * @see proto service: injective.tokenfactory.v1beta1.UpdateParams
 */
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});